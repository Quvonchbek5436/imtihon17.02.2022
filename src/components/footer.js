import React from 'react';
import {Box, Typography} from "@mui/material";
import logo from '../pages/logo.png'
import logo1 from '../pages/Algorismic.png'

function Footer(props) {
    const goToAlgorismik=()=>{
        window.open(`https://www.algorismic.uz/`);
    }
    return (
        <Box sx={{textAlign:'center',backgroundColor:'#C4C4C4',padding:'40px'}}>
            <img src={logo} alt=""/>
            <Typography sx={{fontSize:'20px',padding:'20px',color:'white'}}>What are the most popular Universities in the world?</Typography>
            <img style={{cursor:'pointer'}} onClick={()=>goToAlgorismik()} src={logo1} alt=""/>
        </Box>

    );
}

export default Footer;