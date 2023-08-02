const { inventory } = require('../data/inventory');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList,
  GraphQLSchema,
} = require('graphql');

const InventoryInformation = new GraphQLObjectType({
  name: 'Information',
  fields: () => ({
    damage: { type: GraphQLInt },
    critialHitChance: { type: GraphQLString },
    critialHitDamage: { type: GraphQLString },
    fireRate: { type: GraphQLFloat },
    magazineSize: { type: GraphQLInt },
    range: { type: GraphQLInt },
    durabilty: { type: GraphQLString },
    reloadTime: { type: GraphQLString },
    ammoCost: { type: GraphQLInt },
    impact: { type: GraphQLInt },
  }),
});

const InventoryType = new GraphQLObjectType({
  name: 'Inventory',

  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    weaponType: { type: GraphQLString },
    itemRarity: { type: GraphQLString },
    img: { type: GraphQLString },
    information: { type: new GraphQLList(InventoryInformation) },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',

  fields: {
    inventorys: {
      type: new GraphQLList(InventoryType),

      resolve(parent, args) {
        return inventory;
      },
    },

    inventory: {
      type: InventoryType,

      args: { id: { type: GraphQLID } },

      resolve(parent, args) {
        return inventory.find((inventory) => inventory.id === args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
