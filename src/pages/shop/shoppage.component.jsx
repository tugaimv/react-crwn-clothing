import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../../pages/collection/collection.component';
import WithSpinner  from '../../components/with-spinner/with-spinner.component';


import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

  componentDidMount(){
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync()
  }

  render(){
    const { match, isCollectionFecthing, isCollectionLoaded } = this.props;
    return ( 
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFecthing} {...props} />} />
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />} />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFecthing: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);