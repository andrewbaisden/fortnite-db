import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Weapons from './Weapons';
class Fortnite extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ''
        }
    }
    getApi(){
        return(
            <Query 
            query={gql`
                query {
                    fortniteweaponsfiltername {
                        id
                        name
                        weaponType
                        itemRarity
                        img
                    }
                    }
            `}
            >
            {({loading, error, data}) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;
    
                    let weapons = data.fortniteweaponsfiltername.map(w => w);
              
                    return <Weapons weapons={weapons}/>
                   
            }}
            </Query>
        )
    }
render(){
    return(
        <div>
            <div>{this.getApi()}</div>
            </div>
    )
}
    
}

export default Fortnite;