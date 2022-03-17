import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import bak from "../pages/image 3.png";
import {styled} from "@mui/material/styles";
const Wrapper = styled('div')(({ theme }) => ({
    minHeight:'100vh',
    objectFit:'cover',
    backgroundColor:' rgba(0, 0, 0, 0.3)',
    backgroundPosition:'center',
    img:{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex:-1,
    }
}));



function Section(props) {
    return (
        <Wrapper>
            <Box
                sx={{
                    minHeight: "100vh",
                    position:'relative',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    fontFamily:'Roboto'
                }}
            >
                <img style={{width:'100%',height: '100%',objectFit:'cover',backfaceVisibility:'center'}} src={bak} alt=""/>
                <Box>
                    <Typography
                        variant="h3"
                        sx={{
                            textAlign: "center",
                            textShadow: "0px 7px 7px rgba(0, 0, 0, 0.7);",
                            lineHeight: 1.5,
                            color: "#fff",
                            fontFamily: "Rozha One, serif",
                            fontSize: { xs: '50px', sm: '70px',md:'100px',lg:'150px' }
                        }}
                    >
                        Top Universities
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            maxWidth: 900,
                            textAlign: "center",
                            textShadow: "0px 7px 7px rgba(0, 0, 0, 0.7);",
                            lineHeight: 1.5,
                            color: "#fff",
                            fontFamily: "Rozha One, serif",
                            fontSize:'20px'
                        }}
                    >
                        What are the most popular Universities in the world?
                    </Typography>
                    <Button sx={{backgroundColor:'#001C3D',borderRadius: '36.5px',color:'white',paddingX:'30px',paddingY:'8px'}}>Go to see</Button>
                </Box>
            </Box>
        </Wrapper>
    );
}

export default Section;