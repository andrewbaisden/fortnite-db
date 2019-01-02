import React from 'react';

const Weapon = ({objWeapon}) => {
    if(!objWeapon) {
        return <div />
    }
    return <div>
        <div className="weapon-container-information">
        
            <div className={objWeapon.itemRarity}><img src={objWeapon.img} alt={objWeapon.name} /></div>
            <div className="weapon-description">
                <h1>{objWeapon.name}</h1>
                <p>{objWeapon.itemRarity}</p>
            </div>
            <div className="weapon-information">
                <ul>
                    <li>{objWeapon.information}</li>
                </ul>
            </div>
        
        </div>
    </div>
}

export default Weapon;