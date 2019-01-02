import React from 'react';

const Weapon = ({objWeapon}) => {
    if(!objWeapon) {
        return <div />
    }
    return <div>TEST {objWeapon.name}</div>
}

export default Weapon;