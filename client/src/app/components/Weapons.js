'use client';
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_WEAPONS } from '../queries/clientQueries';
import withApollo from '../utils/withApollo';
import styles from './weapons.module.css';
import fortniteLogo from '../../../public/fortniteLogo.png';
import Image from 'next/image';
import { Weapon } from './Weapon';

const Weapons = () => {
  const [selectedWeapon, setSelectedWeapon] = useState(null);
  const [menu, setMenu] = useState(true);
  const [menuClass, setMenuClass] = useState('show');
  useEffect(() => {
    console.log('Selected weapon', selectedWeapon);
  }, [selectedWeapon]);

  const [weaponData, setWeaponData] = useState([]);

  const [weaponFilter, setWeaponFilter] = useState({
    filterWeaponRarity: [
      {
        id: 1,
        name: 'Common',
      },
      {
        id: 2,
        name: 'Uncommon',
      },
      {
        id: 3,
        name: 'Rare',
      },
      {
        id: 4,
        name: 'Epic',
      },
      {
        id: 5,
        name: 'Legendary',
      },
    ],
    filterWeaponNames: [
      {
        id: 1,
        name: 'Bolt-Action Sniper Rifle',
      },
      {
        id: 2,
        name: 'Burst',
      },
      {
        id: 3,
        name: 'Burst Rare',
      },
      {
        id: 4,
        name: 'Compact Gun',
      },
      {
        id: 5,
        name: 'Fiend Hunter Crossbow',
      },
      {
        id: 6,
        name: 'Grappler',
      },
      {
        id: 7,
        name: 'Grenade Launcher',
      },
      {
        id: 8,
        name: 'Hand Cannon',
      },
      {
        id: 9,
        name: 'Heavy Assault Rifle',
      },
      {
        id: 10,
        name: 'Heavy Shotgun',
      },
      {
        id: 11,
        name: 'Heavy Sniper',
      },
      {
        id: 12,
        name: 'Hunting Rifle',
      },
      {
        id: 13,
        name: 'M4',
      },
      {
        id: 14,
        name: 'Minigun',
      },
      {
        id: 15,
        name: 'Pistol',
      },
      {
        id: 16,
        name: 'Pump Shotgun',
      },
      {
        id: 17,
        name: 'Quad Launcher',
      },
      {
        id: 18,
        name: 'Revolver',
      },
      {
        id: 19,
        name: 'Rocket Launcher',
      },
      {
        id: 20,
        name: 'SCAR',
      },
      {
        id: 21,
        name: 'Scoped',
      },
      {
        id: 22,
        name: 'Six Shooter',
      },
      {
        id: 23,
        name: 'Submachine Gun',
      },
      {
        id: 24,
        name: 'Suppressed Assault Rifle',
      },
      {
        id: 25,
        name: 'Supressed Pistol',
      },
      {
        id: 26,
        name: 'Tactical Shotgun',
      },
      {
        id: 27,
        name: 'Thermal Scope Assault Rifle',
      },
    ],
  });

  const onWeaponSelect = (objWeapon) => {
    // window.scrollTo(0, 0);
    setSelectedWeapon({ ...objWeapon });
  };

  const sortWeaponsAscending = () => {
    let inventorysCopy = [...data.inventorys];
    const sorted = inventorysCopy.sort((a, b) => a.name.localeCompare(b.name));
    setWeaponData(sorted);

    console.log('All Weapons A-Z', sorted);
  };
  const sortWeaponsDescending = () => {
    let inventorysCopy = [...data.inventorys];
    const sorted = inventorysCopy.sort((a, b) => b.name.localeCompare(a.name));
    setWeaponData(sorted);

    console.log('All Weapons Z-A', sorted);
  };

  const filterWeaponNames = (filterWeaponName) => {
    let inventorysCopy = [...data.inventorys];
    const weaponName = inventorysCopy.filter(
      (w) => w.name === filterWeaponName
    );

    setWeaponData(weaponName);

    console.log(filterWeaponName, weaponName);
  };
  const filterWeaponRarity = (filterWeaponRarity) => {
    let inventorysCopy = [...data.inventorys];
    const weaponRarity = inventorysCopy.filter(
      (w) => w.itemRarity === filterWeaponRarity
    );

    setWeaponData(weaponRarity);

    console.log(filterWeaponRarity, weaponRarity);
  };

  const toggleMenu = () => {
    menu === true ? setMenu(false) : setMenu(true);
    console.log('Menu State', menu);

    menu === true ? setMenuClass('show') : setMenuClass('hide');
  };

  const { loading, error, data } = useQuery(GET_WEAPONS);

  if (loading)
    return (
      <div>
        <div className={styles.pagecontainer}>
          <div className={styles.spinnerbox}>
            <div className={styles.circleborder}>
              <div className={styles.circlecore}></div>
            </div>
          </div>
        </div>
      </div>
    );

  if (error)
    return (
      <div>
        <p className={styles.loading}>
          The list of weapons failed to load there is a problem :(
        </p>
      </div>
    );

  return (
    <div>
      {!loading && !error && (
        <div className="container">
          <div className={styles.fortniteheader}>
            <Image
              className={styles.fortnitelogo}
              src={fortniteLogo}
              alt="Fortnite Logo"
            />
            <h1 className={styles.fortnitedb}>DB</h1>
          </div>
          <div className={styles.toggleMenuContainer}>
            <button
              className={styles.toggleMenuButton}
              onClick={() => toggleMenu()}
            >
              Toggle Menu
            </button>
          </div>
          <div className={menuClass}>
            <div className={`${styles.btnmenucontainer}`}>
              <div
                className={`${styles.menubutton}`}
                onClick={sortWeaponsAscending}
              >
                Ascending
              </div>
              <div
                className={`${styles.menubutton}`}
                onClick={sortWeaponsDescending}
              >
                Descending
              </div>
              {weaponFilter.filterWeaponRarity.map((filter) => (
                <div
                  key={filter.id}
                  className={`${styles.menubutton}`}
                  onClick={() => filterWeaponRarity(filter.name)}
                >
                  {filter.name}
                </div>
              ))}
              {weaponFilter.filterWeaponNames.map((filter) => (
                <div
                  key={filter.id}
                  className={`${styles.menubutton}`}
                  onClick={() => filterWeaponNames(filter.name)}
                >
                  {filter.name}
                </div>
              ))}
            </div>
          </div>

          <div className="weapon-container">
            <div className={`${styles.weaponsbox}`}>
              {!weaponData && !loading && !error ? (
                <div>loading</div>
              ) : (
                <div className={styles.weaponlistcontainer}>
                  {weaponData.map((weapon) => (
                    <div
                      key={weapon.id}
                      className={`${styles.weapon} ${weapon.itemRarity}`}
                      onClick={() => onWeaponSelect({ ...weapon })}
                    >
                      <Image
                        src={weapon.img}
                        width={100}
                        height={100}
                        alt={weapon.name}
                      />
                      <div className={styles.weapondescription}>
                        <p>{weapon.name}</p>
                        <p>{weapon.itemRarity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <Weapon objWeapon={selectedWeapon} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default withApollo(Weapons);
