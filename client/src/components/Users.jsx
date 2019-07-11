import React from 'react';

export default function Users(props) {
    return (
        <div>
            {
                props.users 
                ? props.users.map(user => {
                    return <p>{user.name}</p>
                    })
                : null
            }
            
        </div>
    );
};