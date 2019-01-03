import React from 'react';
import styled from "styled-components";

const WeaponContainerInformation = styled.div`
        background: rgba(20, 21, 55, 0.4);
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        justify-content: center;
        padding: 20px;

        @media only screen and (max-width: 630px) { 
            grid-template-columns: 1fr;
        }

`
const WeaponImageContainer = styled.div`
        display: grid;
        justify-content: end;

        @media only screen and (max-width: 630px) { 
            justify-content: center;
        }
`
const WeaponInformation = styled.div`
    display: grid;
        justify-content: start;
        color: #ffffff;

        h1 {
            text-transform: uppercase;
            font-weight: 800;
            background: rgba(255, 247, 84, 1);
            color: #17233F;
            padding: 10px;
        }

        ul {
            list-style: none;
            padding: 0;
            font-size: 1.8rem;

            li {
                display: grid;
                justify-items: center;
                justify-content: center;
                padding: 10px;
            }
            li:nth-child(1) {
                background: #141537;
            }
            li:nth-child(2) {
                background: #101135;
            }
            li:nth-child(3) {
                background: #141537;
            }
            li:nth-child(4) {
                background: #101135;
            }
            li:nth-child(5) {
                background: #141537;
            }
            li:nth-child(6) {
                background: #101135;
            }
            li:nth-child(7) {
                background: #141537;
            }
            li:nth-child(8) {
                background: #101135;
            }
            li:nth-child(9) {
                background: #141537;
            }
            li:nth-child(10) {
                background: #101135;
            }
        }
        @media only screen and (max-width: 630px) { 
            justify-content: center;
        }
        
`

const Weapon = ({objWeapon}) => {
    if(!objWeapon) {
        return <div />
    }
    return <div>
        
        <WeaponContainerInformation>

            <WeaponImageContainer>
            <div className={objWeapon.itemRarity}><img src={objWeapon.img} alt={objWeapon.name} /></div>
            <div className="weapon-description">
                <h1>{objWeapon.name}</h1>
                <p>{objWeapon.itemRarity}</p>
            </div>
            </WeaponImageContainer>
            <WeaponInformation>
            <h1>Weapon Information</h1>
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
            </WeaponInformation>
        
        </WeaponContainerInformation>
    </div>
}

export default Weapon;