const axios = require('axios');

const Query = {

        // Fortnite API
        fortniteweapons: async (parent, args, info) => {
            const { data } = await axios.get('http://localhost:5000/items/weapon')
            if (!args.query) {
              return data  
            }
            return data.filter((weapon) => {
              return weapon.name.toLowerCase().includes(args.query.toLowerCase())
            })
          },
}

export {Query as default}