import React from 'react';

import withData from '../with-data'; // hoc function high order function(wrapper thand change component)

const UserProfile = ({data, email, name}) =>
    (
        <div className="container">
            <h1>{name}</h1>
            <h2>{email}</h2>
            Posts: 
            {data.map(post => (
                <div className="post" key={post.id}>
                    <h1>{post.name}</h1>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
        )

export default withData(UserProfile);
