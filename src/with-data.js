import React from 'react';

const withData = (WrappedComponent) => {
    class WithData extends React.Component {
        constructor(props){
            super(props);
    
    
            this.state = {
                data: []
            }
        }
    
        componentDidMount(){
            fetch(this.props.dataSource)
            .then(response => response.json())
            .then(data => this.setState({data: data.slice(0,3)}))
        }

        render(){
            return(
                <WrappedComponent data={this.state.data} {...this.props}/>
            )
        }
    }
    return WithData
}


export default withData;