import React, { Component } from 'react';
import Weapon from './Weapon';

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
             const output = this.props.weapons.map(({id, name}) => (
                    <div key={id} onClick={() => this.onWeaponSelect({id, name})}>
                        <ul>
                             <li>{name}</li>
                        </ul>
                    </div>
                    ));
                    this.setState({data: output, selectedWeapon: null})
                    console.log('All Weapons', output)
    }
    sortWeaponsAscending(){
        let ascending = this.props.weapons.map(w => w);
         ascending = this.props.weapons.sort((a, b) => a.name.localeCompare(b.name));
    
                    const output = ascending.map(({id, name}) => (
                    <div key={id} onClick={() => this.onWeaponSelect({id, name})}>
                        <ul>
                        <li>{name}</li>
                        </ul>
                    </div>
                    ));
               this.setState({data: output})
               console.log('All Weapons A-Z', output)
}
sortWeaponsDescending(){
    let descending = this.props.weapons.map(w => w);
     descending = this.props.weapons.sort((a, b) => b.name.localeCompare(a.name));

                const output = descending.map(({id, name}) => (
                <div key={id} onClick={() => this.onWeaponSelect({id, name})}>
                    <ul>
                    <li>{name}</li>
                    </ul>
                </div>
                ));
           this.setState({data: output})
           console.log('All Weapons Z-A', output)
}
filterWeaponNames(filterWeaponName){
    let filterWeaponNames = this.props.weapons.map(w => w);
     filterWeaponNames = this.props.weapons.filter(w => w.name === filterWeaponName)

                const output = filterWeaponNames.map(({id, name}) => (
                <div key={id} onClick={() => this.onWeaponSelect({id, name})}>
                    <ul>
                    <li>{name}</li>
                    </ul>
                </div>
                ));
           this.setState({data: output})
           console.log(filterWeaponName, output)
}
    render() {
        return(
            <div>
                <h1>Fortnite Weapons</h1>
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
                <div>
                    {this.state.data}
                </div>
                <div>
                    <Weapon objWeapon={this.state.selectedWeapon}/>
                </div>
            </div>
        )
    }
}

export default Weapons;