import { gql } from '@apollo/client';

const GET_WEAPONS = gql`
  {
    inventorys {
      id
      name
      type
      weaponType
      itemRarity
      img
      information {
        damage
        critialHitChance
        critialHitDamage
        fireRate
        magazineSize
        range
        durabilty
        reloadTime
        ammoCost
        impact
      }
    }
  }
`;

export { GET_WEAPONS };
