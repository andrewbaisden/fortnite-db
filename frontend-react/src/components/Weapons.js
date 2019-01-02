import React, { Component } from 'react';
import Weapon from './Weapon';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import bg from '../assets/bg.jpg';
import fortniteLogo from '../assets/fortniteLogo.png';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
    :root {
        --body-font: 'Open Sans', sans-serif;
    }
    html {
    font-size: 62.5%; /* font-size 1em = 10px on default browser settings */
    }
    body {
        background-image: url(${bg});
        font-family: (--body-font);
        font-size: 1.6rem;
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
    .btn-menu-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 10px;
    }
    .hover {
        background: #FFF754 !important;
        color: #191F4D !important;
    }
    .weapon-container {
        margin-top: 20px;
        display: grid;
        grid-template-columns: 1fr 6fr;
        grid-gap: 20px;
        justify-items: center;
    }
    .weapon-list-container {
        margin-top: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 20px;
    }
    .weapon {
        cursor: pointer;
    }
    .Common, .Uncommon, .Rare, .Epic, .Legendary {
        width: 300px;
        display: grid;
        justify-content: center;

        img {
            max-width: 150px;
            width: 100%;
            
        }
    }
    .Common {
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#c9cad7+0,c9cad7+100 */
        background: #c9cad7; /* Old browsers */
        background: -moz-linear-gradient(top, #c9cad7 0%, #c9cad7 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, #c9cad7 0%,#c9cad7 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, #c9cad7 0%,#c9cad7 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#c9cad7', endColorstr='#c9cad7',GradientType=0 ); /* IE6-9 */
        border-top: 2px solid #e2e2e2;
        border-right: 2px solid #e2e2e2;
        border-bottom: 2px solid #9b9b9b;
        border-left: 2px solid #9b9b9b;
    }
    .weapon-description {
        color: #ffffff;
        text-transform: uppercase;
        background: #2A2A2A;
        padding: 10px;
        font-weight: bold;

        h1, p {
            margin: 0;
            font-size: 1.4rem;
        }
    }
`

const MenuBtn = styled.button`
    text-align: center;
    text-transform: uppercase;
    padding: 10px;
    color: white;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 3px;
    border: none;
    font-size: 1.4rem;
    font-weight: bold;
    cursor: pointer;
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
        this.menuButtonHover();
    }
    onWeaponSelect = (objWeapon) => {
        console.log('From object', objWeapon)
        this.setState({selectedWeapon: objWeapon});
    }
    getAllWeapons(){
             const output = this.props.weapons.map(({id, name, weaponType, itemRarity, img, information}) => (
                    <div className="weapon" key={id} onClick={() => this.onWeaponSelect({id, name, weaponType, itemRarity, img, information})}>
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
                        <div className="weapon" key={id} onClick={() => this.onWeaponSelect({id, name, weaponType, itemRarity, img, information})}>
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
                    <div className="weapon" key={id} onClick={() => this.onWeaponSelect({id, name, weaponType, itemRarity, img, information})}>
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
                    <div className="weapon" key={id} onClick={() => this.onWeaponSelect({id, name, weaponType, itemRarity, img, information})}>
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
menuButtonHover(){
    const btnArray = Array.from(document.querySelectorAll('.btn-menu'));
    console.log(btnArray)

    btnArray.map(btns => {
        btns.addEventListener('click', (e) => {
            console.log(e.target);
            onBtnMenu(e.target);
        })
    })

    const onBtnMenu = (addHover) => {
        const buttonMenu = btnArray.map(btns => {
            btns.classList.remove('hover')
        })
        addHover.classList.add('hover')
    }
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
                <div className="btn-menu-container">
                <MenuBtn className="btn-menu" onClick={this.sortWeaponsAscending}>Ascending</MenuBtn>
                <MenuBtn className="btn-menu" onClick={this.sortWeaponsDescending}>Descending</MenuBtn>
                <MenuBtn className="btn-menu" onClick={(filterWeaponName) => this.filterWeaponNames('Bolt-Action Sniper Rifle')}>Bolt-Action Sniper Rifle</MenuBtn>
                <MenuBtn className="btn-menu" onClick={(filterWeaponName) => this.filterWeaponNames('Burst')}>Burst</MenuBtn>
                <MenuBtn className="btn-menu" onClick={(filterWeaponName) => this.filterWeaponNames('Burst Rare')}>Burst Rare</MenuBtn>
                <MenuBtn className="btn-menu" onClick={(filterWeaponName) => this.filterWeaponNames('Compact Gun')}>Compact Gun</MenuBtn>
                <MenuBtn className="btn-menu" onClick={(filterWeaponName) => this.filterWeaponNames('Fiend Hunter Crossbow')}>Fiend Hunter Crossbow</MenuBtn>
                <MenuBtn className="btn-menu" onClick={(filterWeaponName) => this.filterWeaponNames('Grappler')}>Grappler</MenuBtn>
                <MenuBtn className="btn-menu" onClick={(filterWeaponName) => this.filterWeaponNames('Grenade Launcher')}>Grenade Launcher</MenuBtn>
                <MenuBtn className="btn-menu" onClick={(filterWeaponName) => this.filterWeaponNames('Hand Cannon')}>Hand Cannon</MenuBtn>
                <MenuBtn className="btn-menu" onClick={(filterWeaponName) => this.filterWeaponNames('Heavy Assault Rifle')}>Heavy Assault Rifle</MenuBtn>
                <MenuBtn className="btn-menu" onClick={(filterWeaponName) => this.filterWeaponNames('Heavy Shotgun')}>Heavy Shotgun</MenuBtn>
                <MenuBtn className="btn-menu" onClick={(filterWeaponName) => this.filterWeaponNames('Heavy Sniper')}>Heavy Sniper</MenuBtn>
                <MenuBtn className="btn-menu" onClick={(filterWeaponName) => this.filterWeaponNames('Hunting Rifle')}>Hunting Rifle</MenuBtn>
                <MenuBtn className="btn-menu" onClick={(filterWeaponName) => this.filterWeaponNames('M4')}>M4</MenuBtn>
                <MenuBtn className="btn-menu" onClick={(filterWeaponName) => this.filterWeaponNames('Minigun')}>Minigun</MenuBtn>
                <MenuBtn className="btn-menu" onClick={(filterWeaponName) => this.filterWeaponNames('Pistol')}>Pistol</MenuBtn>
                <MenuBtn className="btn-menu" onClick={(filterWeaponName) => this.filterWeaponNames('Pump Shotgun')}>Pump Shotgun</MenuBtn>
                <MenuBtn className="btn-menu" onClick={(filterWeaponName) => this.filterWeaponNames('Quad Launcher')}>Quad Launcher</MenuBtn>
                <MenuBtn className="btn-menu" onClick={(filterWeaponName) => this.filterWeaponNames('Revolver')}>Revolver</MenuBtn>
                <MenuBtn className="btn-menu" onClick={(filterWeaponName) => this.filterWeaponNames('Rocket Launcher')}>Rocket Launcher</MenuBtn>
                <MenuBtn className="btn-menu" onClick={(filterWeaponName) => this.filterWeaponNames('SCAR')}>SCAR</MenuBtn>
                <MenuBtn className="btn-menu" onClick={(filterWeaponName) => this.filterWeaponNames('Scoped')}>Scoped</MenuBtn>
                <MenuBtn className="btn-menu" onClick={(filterWeaponName) => this.filterWeaponNames('Six Shooter')}>Six Shooter</MenuBtn>
                <MenuBtn className="btn-menu" onClick={(filterWeaponName) => this.filterWeaponNames('Submachine Gun')}>Submachine Gun</MenuBtn>
                <MenuBtn className="btn-menu" onClick={(filterWeaponName) => this.filterWeaponNames('Suppressed Assault Rifle')}>Suppressed Assault Rifle</MenuBtn>
                <MenuBtn className="btn-menu" onClick={(filterWeaponName) => this.filterWeaponNames('Supressed Pistol')}>Supressed Pistol</MenuBtn>
                <MenuBtn className="btn-menu" onClick={(filterWeaponName) => this.filterWeaponNames('Tactical Shotgun')}>Tactical Shotgun</MenuBtn>
                <MenuBtn className="btn-menu" onClick={(filterWeaponName) => this.filterWeaponNames('Thermal Scope Assault Rifle')}>Thermal Scope Assault Rifle</MenuBtn>
                </div>
                <div className="weapon-container">
                <div>
                    <Weapon objWeapon={this.state.selectedWeapon}/>
                </div>
                <div className="weapon-list-container">
                    {this.state.data}
                </div>
                </div>
                
                </div>
            </div>
        )
    }
}

export default Weapons;