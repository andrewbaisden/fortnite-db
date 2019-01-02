import React, { Component } from 'react';
import Weapon from './Weapon';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import bg from '../assets/bg.jpg';
import fortniteLogo from '../assets/fortniteLogo.png';

const GlobalStyle = createGlobalStyle`
    body {
        background-image: url(${bg});
    }
    .container {
        width: 100%;
        /* max-width: 1680px; */
        margin: 0 auto;
    }
    .header {
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#141535+0,141537+100 */
        background: #141535; /* Old browsers */
        background: -moz-linear-gradient(top, #141535 0%, #141537 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, #141535 0%,#141537 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, #141535 0%,#141537 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#141535', endColorstr='#141537',GradientType=0 ); /* IE6-9 */
        height: 200px;
        width: 100%;
    }
    .header img {
        height: 200px;
    }
`
class Weapons extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: '',
            selectedWeapon: null
        }

        this.getAllWeapons = this.getAllWeapons.bind(this);
        this.sortWeaponsAscending = this.sortWeaponsAscending.bind(this);
        this.sortWeaponsDescending = this.sortWeaponsDescending.bind(this);
        this.filterWeaponNames = this.filterWeaponNames.bind(this);
    }
    componentDidMount(){
        this.getAllWeapons();
    }
    onWeaponSelect = (objWeapon) => {
        console.log('From object', objWeapon)
        this.setState({selectedWeapon: objWeapon});
    }
    getAllWeapons(){
             const output = this.props.weapons.map(({id, name, weaponType, itemRarity, img, information}) => (
                    <div className="weapon-container" key={id} onClick={() => this.onWeaponSelect({id, name, weaponType, itemRarity, img, information})}>
                        <div className={itemRarity}><img src="http://localhost:5000/items/weapon/img/assaultRifleScar.png" alt={name} /></div>
                        <div className="weapon-description">
                            <h1>{name}</h1>
                            <p>{itemRarity}</p>
                        </div>
                    </div>
                    ));
                    this.setState({data: output, selectedWeapon: null})
                    console.log('All Weapons', output)
    }
    sortWeaponsAscending(){
        let ascending = this.props.weapons.map(w => w);
         ascending = this.props.weapons.sort((a, b) => a.name.localeCompare(b.name));
    
                    const output = ascending.map(({id, name, weaponType, itemRarity, img, information}) => (
                        <div className="weapon-container" key={id} onClick={() => this.onWeaponSelect({id, name, weaponType, itemRarity, img, information})}>
                        <div className={itemRarity}><img src="http://localhost:5000/items/weapon/img/assaultRifleScar.png" alt={name} /></div>
                        <div className="weapon-description">
                            <h1>{name}</h1>
                            <p>{itemRarity}</p>
                        </div>
                    </div>
                    ));
               this.setState({data: output, selectedWeapon: null})
               console.log('All Weapons A-Z', output)
}
sortWeaponsDescending(){
    let descending = this.props.weapons.map(w => w);
     descending = this.props.weapons.sort((a, b) => b.name.localeCompare(a.name));

                const output = descending.map(({id, name, weaponType, itemRarity, img, information}) => (
                    <div className="weapon-container" key={id} onClick={() => this.onWeaponSelect({id, name, weaponType, itemRarity, img, information})}>
                    <div className={itemRarity}><img src="http://localhost:5000/items/weapon/img/assaultRifleScar.png" alt={name} /></div>
                    <div className="weapon-description">
                        <h1>{name}</h1>
                        <p>{itemRarity}</p>
                    </div>
                </div>
                ));
           this.setState({data: output, selectedWeapon: null})
           console.log('All Weapons Z-A', output)
}
filterWeaponNames(filterWeaponName){
    let filterWeaponNames = this.props.weapons.map(w => w);
     filterWeaponNames = this.props.weapons.filter(w => w.name === filterWeaponName)

                const output = filterWeaponNames.map(({id, name, weaponType, itemRarity, img, information}) => (
                    <div className="weapon-container" key={id} onClick={() => this.onWeaponSelect({id, name, weaponType, itemRarity, img, information})}>
                    <div className={itemRarity}><img src="http://localhost:5000/items/weapon/img/assaultRifleScar.png" alt={name} /></div>
                    <div className="weapon-description">
                        <h1>{name}</h1>
                        <p>{itemRarity}</p>
                    </div>
                </div>
                ));
           this.setState({data: output, selectedWeapon: null})
           console.log(filterWeaponName, output)
}
    render() {
        return(
            <div>
                <GlobalStyle />
                <div className="container">
                <div className="header">
                    <div>
                        <img src={fortniteLogo} alt="Fortnite Logo" /> 
                    </div>
                    <div>
                    </div>
                </div>
                <div>
                <button onClick={this.sortWeaponsAscending}>Ascending</button>
                <button onClick={this.sortWeaponsDescending}>Descending</button>
                <button onClick={(filterWeaponName) => this.filterWeaponNames('Bolt-Action Sniper Rifle')}>Bolt-Action Sniper Rifle</button>
                <button onClick={(filterWeaponName) => this.filterWeaponNames('Burst')}>Burst</button>
                <button onClick={(filterWeaponName) => this.filterWeaponNames('Burst Rare')}>Burst Rare</button>
                <button onClick={(filterWeaponName) => this.filterWeaponNames('Compact Gun')}>Compact Gun</button>
                <button onClick={(filterWeaponName) => this.filterWeaponNames('Fiend Hunter Crossbow')}>Fiend Hunter Crossbow</button>
                <button onClick={(filterWeaponName) => this.filterWeaponNames('Grappler')}>Grappler</button>
                <button onClick={(filterWeaponName) => this.filterWeaponNames('Grenade Launcher')}>Grenade Launcher</button>
                <button onClick={(filterWeaponName) => this.filterWeaponNames('Hand Cannon')}>Hand Cannon</button>
                <button onClick={(filterWeaponName) => this.filterWeaponNames('Heavy Assault Rifle')}>Heavy Assault Rifle</button>
                <button onClick={(filterWeaponName) => this.filterWeaponNames('Heavy Shotgun')}>Heavy Shotgun</button>
                <button onClick={(filterWeaponName) => this.filterWeaponNames('Heavy Sniper')}>Heavy Sniper</button>
                <button onClick={(filterWeaponName) => this.filterWeaponNames('Hunting Rifle')}>Hunting Rifle</button>
                <button onClick={(filterWeaponName) => this.filterWeaponNames('M4')}>M4</button>
                <button onClick={(filterWeaponName) => this.filterWeaponNames('Minigun')}>Minigun</button>
                <button onClick={(filterWeaponName) => this.filterWeaponNames('Pistol')}>Pistol</button>
                <button onClick={(filterWeaponName) => this.filterWeaponNames('Pump Shotgun')}>Pump Shotgun</button>
                <button onClick={(filterWeaponName) => this.filterWeaponNames('Quad Launcher')}>Quad Launcher</button>
                <button onClick={(filterWeaponName) => this.filterWeaponNames('Revolver')}>Revolver</button>
                <button onClick={(filterWeaponName) => this.filterWeaponNames('Rocket Launcher')}>Rocket Launcher</button>
                <button onClick={(filterWeaponName) => this.filterWeaponNames('SCAR')}>SCAR</button>
                <button onClick={(filterWeaponName) => this.filterWeaponNames('Scoped')}>Scoped</button>
                <button onClick={(filterWeaponName) => this.filterWeaponNames('Six Shooter')}>Six Shooter</button>
                <button onClick={(filterWeaponName) => this.filterWeaponNames('Submachine Gun')}>Submachine Gun</button>
                <button onClick={(filterWeaponName) => this.filterWeaponNames('Suppressed Assault Rifle')}>Suppressed Assault Rifle</button>
                <button onClick={(filterWeaponName) => this.filterWeaponNames('Supressed Pistol')}>Supressed Pistol</button>
                <button onClick={(filterWeaponName) => this.filterWeaponNames('Tactical Shotgun')}>Tactical Shotgun</button>
                <button onClick={(filterWeaponName) => this.filterWeaponNames('Thermal Scope Assault Rifle')}>Thermal Scope Assault Rifle</button>
                </div>
                <div>
                    {this.state.data}
                </div>
                <div>
                    <Weapon objWeapon={this.state.selectedWeapon}/>
                </div>
                </div>
            </div>
        )
    }
}

export default Weapons;