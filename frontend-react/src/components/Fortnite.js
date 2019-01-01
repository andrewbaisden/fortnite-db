import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const Fortnite = () => (

 
        <Query 
        query={gql`
            query {
                fortniteweaponsfiltername {
                    id
                    name
                    itemRarity
                    img
                }
                }
        `}
        >
        {({loading, error, data}) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

                return data.fortniteweaponsfiltername.map(({id, name}) => (
                    <div key={id}>
                        <p>{name}</p>
                    </div>
                ))
        }}
        </Query>
    
    
      
    
)

export default Fortnite;