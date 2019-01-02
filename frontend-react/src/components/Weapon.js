import React from 'react';

const Weapon = ({objWeapon}) => {
    if(!objWeapon) {
        return <div />
    }
    return <div>
        
        <div className="weapon-container-information">
        
            <div className={objWeapon.itemRarity}><img src="http://localhost:5000/items/weapon/img/assaultRifleScar.png" alt={objWeapon.name} /></div>
            <div className="weapon-description">
                <h1>{objWeapon.name}</h1>
                <p>{objWeapon.itemRarity}</p>
            </div>
            <div className="weapon-information">
                <ul>
                    <li>Damage: {objWeapon.information[0].damage}</li>
                    <li>Critical Hit Chance: {objWeapon.information[0].critialHitChance}</li>
                    <li>Critical Hit Damage: {objWeapon.information[0].critialHitDamage}</li>
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
}

export default Weapon;