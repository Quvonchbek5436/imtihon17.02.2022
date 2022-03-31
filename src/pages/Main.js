import {
    Container,
    Grid,
    Typography,
    Box, Button, Stack, CircularProgress,
} from "@mui/material";
import {useEffect, useState} from "react";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {setCategory, setNewsByCategory} from "../redux/actions/newsActions";
import * as React from "react";
import Card from "@mui/material/Card";
import {GrGlobe} from "react-icons/gr";
import {Pagination} from "@mui/lab";
import {FaGlobeAsia} from "react-icons/fa";



export default function Main() {
    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();
    const { category } = params;
    const [value, setValue] = React.useState('uzbekistan');
    const { news, loading, error } = useSelector((state) => state.news);
    const [page, setPage] = useState(0);
    console.log(news)
    const handleChange = (event, newValue) => {
        setValue(newValue);
        setCategory(newValue);
        navigate(`/category/${newValue}`);
    };
    useEffect(() => {
        setNewsByCategory(category);

    }, [category]);

const goTo =(link)=>{
    window.open(`${link}`);
}
    const _ = require("lodash");
    const news1 = news ? _.chunk(news, 8) : <CircularProgress sx={{mx:'auto',my:4}} />;



    return (
        <>

            <Container  sx={{ py: 3 }}>



                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <Typography sx={{fontSize:'40px',textAlign:'center',fontWeight:'bold',marginY:'50px'}}>Universities</Typography>
                    <TabContext value={value} >
                        <Box sx={{ borderBottom: 1, borderColor: 'divider',display:'flex',justifyContent:'center' }}>
                            <TabList sx={{justifyContent:'space-between'}}  onChange={handleChange}  aria-label="lab API tabs example">
                                <Tab label="Uzbekistan" value="uzbekistan"   />
                                <Tab label="Turkey" value="turkey"  />
                                <Tab label="Kazakhstan" value="kazakhstan"   />
                                <Tab label="Germany" value="germany"   />
                            </TabList>
                        </Box>
                        <TabPanel value="uzbekistan"> </TabPanel>
                        <TabPanel value="turkey"> </TabPanel>
                        <TabPanel value="kazakhstan"> </TabPanel>
                        <TabPanel value="germany"> </TabPanel>
                    </TabContext>
                </Box>
                {error ? (
                    <Typography color="error.main">Something went wrong</Typography>
                ) : <Grid container spacing={3}>
                    {news.length > 2 ?
                        news.map((items, index) => {
                            return (
                                <Grid item key={index} lg={4} sm={6} xs={12} sx={{marginY: '20px'}}>
                                    <Card sx={{height: '100%', padding: '15px',boxShadow:7}}>
                                        <Box sx={{
                                            display: 'flex',
                                            alignContent: 'center',
                                            gap: '10px',
                                            marginTop: '20px'
                                        }}>
                                            <GrGlobe/>
                                            <Typography sx={{fontSize: '14px', fontWeight: 'bold',}} gutterBottom
                                                        variant="h5" component="div">
                                                Country: {items.country}
                                            </Typography>
                                        </Box>
                                        <Typography sx={{fontSize: '20px', marginY: '20px', fontWeight: 'bold',color:'black'}}
                                                    variant="body2" color="text.secondary">
                                            {items.name}
                                        </Typography>
                                        <Box sx={{display: 'flex', alignContent: 'center', gap: '10px'}}>
                                            <FaGlobeAsia/>
                                            <Typography
                                                sx={{fontSize: '14px', fontWeight: 'bold', marginBottom: '20px'}}
                                                gutterBottom variant="h5" component="div">
                                                {items.domains}
                                            </Typography>
                                        </Box>
                                        <Box sx={{
                                            display: 'flex',
                                            alignContent: 'end',
                                            justifyContent: 'space-between',
                                        }}>
                                            <Button sx={{fontWeight: 'bold', borderRadius: '20px'}} variant="contained"
                                                    onClick={() => goTo(items.web_pages)}>Go to website</Button>
                                            <Button sx={{fontWeight: 'bold', borderRadius: '20px'}} variant="contained"
                                                    onClick={() => goTo()}>{items.alpha_two_code}</Button>
                                        </Box>
                                    </Card>
                                </Grid>

                            )
                        }) : <CircularProgress sx={{mx: 'auto', my: 4}}/>
                    }

                </Grid>
                }
                <Box  sx={{marginY:"100px",display:'flex' ,justifyContent:'center'}}>
                    <Stack
                        spacing={3}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Pagination
                            count={news1.length - 1}
                            variant="outlined"
                            align="center"
                            onChange={(e, p) => setPage(p)}
                        />
                    </Stack>

                </Box>





            </Container>
        </>
    );
}