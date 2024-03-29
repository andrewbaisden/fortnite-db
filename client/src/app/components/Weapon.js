'use client';
import Image from 'next/image';
import styles from './weapon.module.css';

export const Weapon = ({ objWeapon }) => {
  console.log('Selected Weapon in Weapon component', objWeapon);
  return objWeapon === null ? (
    <div></div>
  ) : (
    <div>
      <div className={styles.weaponContainerInformation}>
        <div className={styles.WeaponImageContainer}>
          <div className={objWeapon.itemRarity}>
            <Image
              src={objWeapon.img}
              width={100}
              height={100}
              alt={objWeapon.name}
            />
          </div>
          <div className="weapon-description">
            <h1>{objWeapon.name}</h1>
            <p>{objWeapon.itemRarity}</p>
          </div>
        </div>
        <div className={styles.WeaponInformation}>
          <h1>Weapon Information</h1>
          <ul>
            <li>Damage: {objWeapon.information[0].damage}</li>
            <li>
              Critical Hit Chance: {objWeapon.information[0].critialHitChance}
            </li>
            <li>
              Critical Hit Damage: {objWeapon.information[0].critialHitDamage}
            </li>
            <li>Fire Rate: {objWeapon.information[0].fireRate}</li>
            <li>Magazine Size: {objWeapon.information[0].magazineSize}</li>
            <li>Range: {objWeapon.information[0].range}</li>
            <li>Durability: {objWeapon.information[0].durabilty}</li>
            <li>Reload Time: {objWeapon.information[0].reloadTime}</li>
            <li>Ammo Cost: {objWeapon.information[0].ammoCost}</li>
            <li>Impact: {objWeapon.information[0].impact}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
