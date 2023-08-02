const axios = require('axios');

const Query = {
  // Fortnite API - GET weapons and filter by name
  fortniteweaponsfiltername: async (parent, args, info) => {
    const { data } = await axios.get('http://localhost:8081/items/weapon');
    if (!args.query) {
      console.log(data);
      return data;
    }
    return data.filter((weapon) => {
      return weapon.name.toLowerCase().includes(args.query.toLowerCase());
    });
  },

  // Fortnite API - GET weapons and filter by type
  fortniteweaponsfiltertype: async (parent, args, info) => {
    const { data } = await axios.get('http://localhost:8081/items/weapon');
    if (!args.query) {
      return data;
    }
    return data.filter((weapon) => {
      return weapon.type.toLowerCase().includes(args.query.toLowerCase());
    });
  },

  // Fortnite API - GET weapons and filter by weapon type
  fortniteweaponsfilterweapontype: async (parent, args, info) => {
    const { data } = await axios.get('http://localhost:8081/items/weapon');
    if (!args.query) {
      return data;
    }
    return data.filter((weapon) => {
      return weapon.weaponType.toLowerCase().includes(args.query.toLowerCase());
    });
  },

  // Fortnite API - GET weapons and filter by weapon item rarity
  fortniteweaponsfilterweaponitemrarity: async (parent, args, info) => {
    const { data } = await axios.get('http://localhost:8081/items/weapon');
    if (!args.query) {
      return data;
    }
    return data.filter((weapon) => {
      return weapon.itemRarity.toLowerCase().includes(args.query.toLowerCase());
    });
  },
};

export { Query as default };
