import React, { Component } from 'react';
import Weapon from './Weapon';
import styled, { createGlobalStyle } from 'styled-components';
import fortniteLogo from '../assets/fortniteLogo.png';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,800');
    :root {
        --body-font: 'Open Sans', sans-serif;
    }
    html {
    font-size: 62.5%; /* font-size 1em = 10px on default browser settings */
    }
    body {
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#2e35ea+0,712ef7+48,7017ed+51,5f09ea+100 */
background: #2e35ea; /* Old browsers */
background: -moz-linear-gradient(top, #2e35ea 0%, #712ef7 48%, #7017ed 51%, #5f09ea 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top, #2e35ea 0%,#712ef7 48%,#7017ed 51%,#5f09ea 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom, #2e35ea 0%,#712ef7 48%,#7017ed 51%,#5f09ea 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2e35ea', endColorstr='#5f09ea',GradientType=0 ); /* IE6-9 */
        font-family: var(--body-font);
        font-size: 1.6rem;
    }
    .container {
        width: 100%;
        /* max-width: 1680px; */
        margin: 0 auto;
    }

    .hover {
        background: #FFF754 !important;
        color: #191F4D !important;
    }
    .weapon-container {
        margin-top: 20px;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 20px;
    }
    .weapon {
        cursor: pointer;
        width: 295px;
        height: 155px;
        background: rgba(255, 247, 84, 0);
        position: absolute;
    }
    .weapon:hover {
       
       border: 5px solid yellow; 
 
    }
    .weapon-item-container {
        position: relative;
    }
    .Common, .Uncommon, .Rare, .Epic, .Legendary {
        width: 300px;
        display: grid;
        justify-content: center;
        align-content: center;

        img {
            max-width: 100px;
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
    .Uncommon {
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#2ab866+0,29b864+100 */
        background: #2ab866; /* Old browsers */
        background: -moz-linear-gradient(top, #2ab866 0%, #29b864 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, #2ab866 0%,#29b864 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, #2ab866 0%,#29b864 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2ab866', endColorstr='#29b864',GradientType=0 ); /* IE6-9 */
        border-top: 2px solid #37F237;
        border-right: 2px solid #37F237;
        border-bottom: 2px solid #229626;
        border-left: 2px solid #229626;
    }
    .Rare {
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#2cc3fb+0,2cc3fb+100 */
        background: #2cc3fb; /* Old browsers */
        background: -moz-linear-gradient(top, #2cc3fb 0%, #2cc3fb 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, #2cc3fb 0%,#2cc3fb 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, #2cc3fb 0%,#2cc3fb 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2cc3fb', endColorstr='#2cc3fb',GradientType=0 ); /* IE6-9 */

        border-top: 2px solid #2DF4FF;
        border-right: 2px solid #2DF4FF;
        border-bottom: 2px solid #1F78AF;
        border-left: 2px solid #1F78AF;
    }
    .Epic {
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#b647ef+0,b647ef+100 */
        background: #b647ef; /* Old browsers */
        background: -moz-linear-gradient(top, #b647ef 0%, #b647ef 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, #b647ef 0%,#b647ef 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, #b647ef 0%,#b647ef 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b647ef', endColorstr='#b647ef',GradientType=0 ); /* IE6-9 */
        border-top: 2px solid #E44CFF;
        border-right: 2px solid #E44CFF;
        border-bottom: 2px solid #953DCC;
        border-left: 2px solid #953DCC;
    }
    .Legendary {
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#e9925d+0,e9925d+100 */
        background: #e9925d; /* Old browsers */
        background: -moz-linear-gradient(top, #e9925d 0%, #e9925d 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, #e9925d 0%,#e9925d 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, #e9925d 0%,#e9925d 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e9925d', endColorstr='#e9925d',GradientType=0 ); /* IE6-9 */
        border-top: 2px solid #FFAF66;
        border-right: 2px solid #FFAF66;
        border-bottom: 2px solid #CC7949;
        border-left: 2px solid #CC7949;
    }
    .weapon-description {
        color: #ffffff;
        text-transform: uppercase;
        background: #2A2A2A;
        padding: 10px;
        font-weight: bold;
        width: 284px;
        height: 40px;

        h1, p {
            margin: 0;
            font-size: 1.4rem;
        }
    }
`

const FortniteHeader = styled.div`

        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#141535+0,141537+100 */
        background: #141535; /* Old browsers */
        background: -moz-linear-gradient(top, #141535 0%, #141537 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, #141535 0%,#141537 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, #141535 0%,#141537 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#141535', endColorstr='#141537',GradientType=0 ); /* IE6-9 */
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 4fr;
        img {
            display: grid;
            height: 200px;
        }
        @media only screen and (max-width: 580px) { 
            grid-template-columns: 1fr;

            img {
                margin: 0 auto;
                justify-self: center;
            }
        }

`
const FortniteHeaderDBCopy = styled.div`
    display: grid;
    align-content: center;
    h1 {
    margin: 0;
       font-size: 7rem;
       color: #ffffff; 
    }
    @media only screen and (max-width: 580px) { 
            justify-content: center;
        }
    
`

const BtnMenuContainer = styled.div`
        margin-top: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 10px;

        @media only screen and (max-width: 768px) { 
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }

        @media only screen and (max-width: 480px) { 
            grid-template-columns: 1fr 1fr;
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
    font-weight: 700;
    cursor: pointer;

`
const WeaponListContainer = styled.div`

        margin: 0 auto;
        margin-top: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 20px;

        @media only screen and (max-width: 1940px) { 
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }

        @media only screen and (max-width: 1300px) { 
            grid-template-columns: 1fr 1fr 1fr;
        }

        @media only screen and (max-width: 970px) { 
            grid-template-columns: 1fr 1fr;
        }

        @media only screen and (max-width: 768px) { 
            grid-template-columns: 1fr 1fr;
        }

        @media only screen and (max-width: 650px) { 
            grid-template-columns: 1fr;
        }

        @media only screen and (max-width: 480px) { 
            grid-template-columns: 1fr;
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
        this.menuButtonHover();
    }
    onWeaponSelect = (objWeapon) => {
        console.log('From object', objWeapon)
        this.setState({selectedWeapon: objWeapon});
        window.scrollTo(0, 0);
    }
    weaponList = (id, name, weaponType, itemRarity, img, information) => {
        return (
            <div className="weapon-item-container" key={id}>
                            <div className="weapon" onClick={() => this.onWeaponSelect({id, name, weaponType, itemRarity, img, information})}>
                        </div>
                        <div className="weapon-description-container">
                        <div className={itemRarity}><img src={img} alt={name} /></div>
                            <div className="weapon-description">
                                <h1>{name}</h1>
                                <p>{itemRarity}</p>
                            </div>
                        </div>
                        </div>
        )
    }
    getAllWeapons(){
             const output = this.props.weapons.map(({id, name, weaponType, itemRarity, img, information}) => (
                        this.weaponList(id, name, weaponType, itemRarity, img, information)
                    ));
                    this.setState({data: output, selectedWeapon: null})
                    console.log('All Weapons', output)
    }
    sortWeaponsAscending(){
        let ascending = this.props.weapons.map(w => w);
         ascending = this.props.weapons.sort((a, b) => a.name.localeCompare(b.name));
    
                    const output = ascending.map(({id, name, weaponType, itemRarity, img, information}) => (
                        this.weaponList(id, name, weaponType, itemRarity, img, information)
                    ));
               this.setState({data: output, selectedWeapon: null})
               console.log('All Weapons A-Z', output)
}
sortWeaponsDescending(){
    let descending = this.props.weapons.map(w => w);
     descending = this.props.weapons.sort((a, b) => b.name.localeCompare(a.name));

                const output = descending.map(({id, name, weaponType, itemRarity, img, information}) => (
                    this.weaponList(id, name, weaponType, itemRarity, img, information)
                ));
           this.setState({data: output, selectedWeapon: null})
           console.log('All Weapons Z-A', output)
}
filterWeaponNames(filterWeaponName){
    let filterWeaponNames = this.props.weapons.map(w => w);
     filterWeaponNames = this.props.weapons.filter(w => w.name === filterWeaponName)

                const output = filterWeaponNames.map(({id, name, weaponType, itemRarity, img, information}) => (
                    this.weaponList(id, name, weaponType, itemRarity, img, information)
                ));
           this.setState({data: output, selectedWeapon: null})
           console.log(filterWeaponName, output)
}
filterWeaponRarity(filterWeaponRarity){
    let filterWeaponRaritys = this.props.weapons.map(w => w);
     filterWeaponRaritys = this.props.weapons.filter(w => w.itemRarity === filterWeaponRarity)

                const output = filterWeaponRaritys.map(({id, name, weaponType, itemRarity, img, information}) => (
                    this.weaponList(id, name, weaponType, itemRarity, img, information)
                ));
           this.setState({data: output, selectedWeapon: null})
           console.log(filterWeaponRarity, output)
}
menuButtonHover(){
    const btnArray = Array.from(document.querySelectorAll('.btn-menu'));
    console.log(btnArray)

    btnArray.forEach(btns => {
        btns.addEventListener('click', (e) => {
            console.log(e.target);
            onBtnMenu(e.target);
        })
    })

    const onBtnMenu = (addHover) => {
        btnArray.forEach(btns => {
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
                <FortniteHeader>
                    <div>
                        <img src={fortniteLogo} alt="Fortnite Logo" /> 
                    </div>
                    <FortniteHeaderDBCopy><h1>DB</h1></FortniteHeaderDBCopy>
                    <div>
                    </div>
                </FortniteHeader>
                <BtnMenuContainer>
                <MenuBtn className="btn-menu" onClick={this.sortWeaponsAscending}>Ascending</MenuBtn>
                <MenuBtn className="btn-menu" onClick={this.sortWeaponsDescending}>Descending</MenuBtn>
                <MenuBtn className="btn-menu" onClick={(filterWeaponRarity) => this.filterWeaponRarity('Common')}>Common</MenuBtn>
                <MenuBtn className="btn-menu" onClick={(filterWeaponRarity) => this.filterWeaponRarity('Uncommon')}>Uncommon</MenuBtn>
                <MenuBtn className="btn-menu" onClick={(filterWeaponRarity) => this.filterWeaponRarity('Rare')}>Rare</MenuBtn>
                <MenuBtn className="btn-menu" onClick={(filterWeaponRarity) => this.filterWeaponRarity('Epic')}>Epic</MenuBtn>
                <MenuBtn className="btn-menu" onClick={(filterWeaponRarity) => this.filterWeaponRarity('Legendary')}>Legendary</MenuBtn>
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
                </BtnMenuContainer>
                <div className="weapon-container">
                <div>
                    <Weapon objWeapon={this.state.selectedWeapon}/>
                </div>
                <WeaponListContainer>
                    {this.state.data}
                </WeaponListContainer>
                </div>
                
                </div>
            </div>
        )
    }
}

export default Weapons;