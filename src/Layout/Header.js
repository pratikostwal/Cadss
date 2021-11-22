import React from 'react';
import {AppBar, Toolbar, Divider, Typography, Tab } from '@material-ui/core';

import EliLillyLogo from '../Static/EliLilly_Logo.png';

class Header extends React.Component {
    render() {
        return(
            <AppBar position="static" style={{ background: '#FF0000'}}>
                <Toolbar>
                    <img src={EliLillyLogo} alt="logo" style={{ width:'8%' }}/>
                    <Divider orientation="vertical" flexItem style={{ margin: 10 }}/>
                    <Typography><h4 style={{color:'white'}}>Certification & Declarations</h4></Typography>
                    <Tab style={{width:'17%', marginLeft:'18%', marginRight:'1%'}}label="Reports & Dashboard"/>
                    <Tab style={{width:'17%', marginRight:'1%'}}label="Certifiers/Declarants"/>
                    <Tab style={{width:'19%' }}label="Certifications/Declarations"/>
                </Toolbar>
            </AppBar>
        )
    }
}
export default Header;
