import React from 'react';
import { Typography, Box, Button, Paper, Grid, Card, CardActionArea, CardContent, TableCell, Table, TableHead, TableRow, TableBody, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import { FaClock, FaCheckCircle, FaCopy } from 'react-icons/fa';

import './Reportsdashbord.css'

export default function Reportdashbord(){
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    }

    const handleFirstCardClick = (e) => {
        e.currentTarget.style.backgroundColor="#FFE6E6";
        e.currentTarget.style.border="1px solid #FF0000";
    }
    const FirestCard = (e) => {
    e.currentTarget.style.transform="scale(1.1)";
    }

    const handleSecondCardClick = (e) => {
        e.currentTarget.style.backgroundColor="#E8E7FF";
        e.currentTarget.style.border="1px solid #9400D3";   
    }
    const SecondCard = (e) => {
    e.currentTarget.style.transform="scale(1.1)";
    }

    const handleThirdCardClick = (e) => {
        e.currentTarget.style.backgroundColor="#EBFFCB";
        e.currentTarget.style.border="1px solid green"; 
    }
    const ThirdCard = (e) => {
    e.currentTarget.style.transform="scale(1.1)";
    }

    const handleFourthCardClick = (e) => {
        e.currentTarget.style.backgroundColor="#E3F3FF";
        e.currentTarget.style.border="1px solid blue";
    }
    const FourthCard = (e) => {
    e.currentTarget.style.transform="scale(1.1)";
    }

    return(
        <Box p={2}>
            <Paper>
            <Typography style={{ color: 'black', fontWeight: 550, fontSize: 26, marginLeft:'2%'}} noWrap>Reports & Dashboard
                <Button variant="outlined" style={{marginRight:'1%', marginLeft:'52%', color:'orange', outlineColor:'#FF0000'}}>Export</Button>
                <Button variant="contained" disableElevation style={{backgroundColor:'#FF0000',color:'white'}}>Exisiting / New Report</Button></Typography>
                <hr style={{ width:"98%", color:"#D3D3D3"}}></hr>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <Typography style={{marginLeft:'4%'}}>Select Certification / Declaration Title Names:
                                <Box sx={{ minWidth:120 }} style={{marginLeft:'59%', marginTop:'-9%'}}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label"></InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={age}
                                                onChange={handleChange}
                                                >
                                                <MenuItem value={10}>ESG Data Declaration 2021</MenuItem>
                                                <MenuItem value={20}></MenuItem>
                                                <MenuItem value={30}></MenuItem>
                                            </Select>
                                    </FormControl>
                                </Box>
                            </Typography>
                        </Grid>
                                <Grid item xs={4}>
                                    <Typography style={{marginLeft:'8%'}}>Select Date Range
                                        <div style={{marginTop:'-9%', marginLeft:'39%', marginRight:'-5%'}}>
                                            <DateRangePickerComponent format="dd-MMM-yy"></DateRangePickerComponent>
                                        </div>
                                    </Typography>
                                </Grid>
                    </Grid>
                        <Grid container spacing={1} style={{marginLeft:'2%'}}>
                            <Grid item xs={3}>
                                    <Card onClick={FirestCard} style={{maxWidth:'78%', marginTop:'10%'}}>
                                        <CardActionArea onClick={handleFirstCardClick}>
                                                <CardContent>
                                                    <div className="FirestIcon"><FaClock size="3em" color="#FF0000" style={{marginTop:'15%', marginLeft:'3%' }}/></div>
                                                    <Typography gutterBottom component="div" style={{marginLeft:'39%', marginTop:'-40%'}}>
                                                    <h5>Pending Declarants</h5>
                                                    </Typography>
                                                    <Typography variant="body2" variant="h4" style={{marginLeft:'39%', color:'#FF0000'}}>
                                                    <b>30</b>
                                                    </Typography>
                                                </CardContent>
                                        </CardActionArea>
                                    </Card>
                            </Grid>
                            <Grid item xs={3}>
                                    <Card onClick={SecondCard} style={{maxWidth:'77%', marginLeft:'-8%', marginTop:'10%'}}>
                                        <CardActionArea onClick={handleSecondCardClick}>
                                                <CardContent>
                                                <div className="SecondIcon" ><FaCopy size="3em" color="#9400D3" style={{marginTop:'15%', marginLeft:'3%'}}/></div>
                                                    <Typography gutterBottom component="div" style={{marginLeft:'39%', marginTop:'-40%'}}>
                                                    <h5>On Hold Declarants</h5>
                                                    </Typography>
                                                    <Typography variant="body2" variant="h4" style={{marginLeft:'39%', color:'#9400D3'}}>
                                                    <b>5</b>
                                                    </Typography>
                                                </CardContent>
                                        </CardActionArea>
                                    </Card>
                            </Grid>
                            <Grid item xs={3}>
                                    <Card onClick={ThirdCard} style={{maxWidth:'80%', marginLeft:'-15%', marginTop:'10%'}}>
                                        <CardActionArea onClick={handleThirdCardClick}>
                                                <CardContent>
                                                    <div className="ThirdIcon"><FaCheckCircle size="3em" color="green" style={{marginTop:'15%', marginLeft:'3%'}}/></div>
                                                    <Typography gutterBottom component="div" style={{marginLeft:'35%', marginTop:'-40%'}}>
                                                    <h5>Completed Declarants</h5>
                                                    </Typography>
                                                    <Typography variant="body2" variant="h4" style={{marginLeft:'35%', color:'green'}}>
                                                    <b>120</b>
                                                    </Typography>
                                                </CardContent>
                                        </CardActionArea>
                                    </Card>
                            </Grid>
                            <Grid item xs={2}>
                                    <Card onClick={FourthCard} style={{marginLeft:'-25%', marginRight:'-20%', marginTop:'15%'}}>
                                        <CardActionArea onClick={handleFourthCardClick}>
                                                <CardContent>
                                                    <div className="FourthIcon"><FaCheckCircle size="3em" color="blue" style={{marginTop:'15%', marginLeft:'3%'}}/></div>
                                                    <Typography gutterBottom component="div" style={{marginLeft:'30%', marginTop:'-35%'}}>
                                                    <h5>Total Completed Declarants</h5>
                                                    </Typography>
                                                    <Typography variant="body2" variant="h4" style={{marginLeft:'30%', color:'blue'}}>
                                                    <b>98</b>
                                                    </Typography>
                                                </CardContent>
                                        </CardActionArea>
                                    </Card>
                            </Grid>
                        </Grid>
                            <br></br>
                            <br></br>
                                <Table style={{}}>
                                    <TableHead>
                                        <TableRow style={{backgroundColor:'#EEEEEE'}}>
                                            <TableCell style={{fontWeight:'bold'}}>Record ID</TableCell>
                                            <TableCell style={{fontWeight:'bold'}}>Record Type</TableCell>
                                            <TableCell style={{fontWeight:'bold'}}>Title/Position</TableCell>
                                            <TableCell style={{fontWeight:'bold'}}>Certification/Declaration Name</TableCell>
                                            <TableCell style={{fontWeight:'bold'}}>User</TableCell>
                                            <TableCell style={{fontWeight:'bold'}}>Status</TableCell>
                                        </TableRow>
                                    </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell><a href="#">1007657</a></TableCell>
                                                <TableCell>Ethics & Compliance Declaration</TableCell>
                                                <TableCell>Sr. VP ERM and Chief Ethics and Officer</TableCell>
                                                <TableCell>ESG Data Declaration 2021</TableCell>
                                                <TableCell><a href="#">Melissa Barnes</a></TableCell>
                                                <TableCell style={{color:'green'}}>Completed</TableCell>
                                            </TableRow>
                                                <TableRow style={{backgroundColor:'#FFE6EE'}}>
                                                    <TableCell><a href="#">1007657</a></TableCell>
                                                    <TableCell>Ethics & Compliance Declaration</TableCell>
                                                    <TableCell>Sr.Advisor-Bioethics</TableCell>
                                                    <TableCell>ESG Data Declaration 2021</TableCell>
                                                    <TableCell><a href="#">Melissa Rotelli</a></TableCell>
                                                    <TableCell style={{color:'green'}}>Completed</TableCell>
                                                </TableRow>
                                                    <TableRow>
                                                        <TableCell><a href="#">1007657</a></TableCell>
                                                        <TableCell>Ethics & Compliance Declaration</TableCell>
                                                        <TableCell>Se.Advisor-Global Ethics and Compliance</TableCell>
                                                        <TableCell>ESG Data Declaration 2021</TableCell>
                                                        <TableCell><a href="#">Susanne Hanchar</a></TableCell>
                                                        <TableCell style={{color:'green'}}>Completed</TableCell>
                                                   </TableRow>
                                                        <TableRow style={{backgroundColor:'#FFE6EE'}}>
                                                            <TableCell><a href="#">1007657</a></TableCell>
                                                            <TableCell>Ethics & Compliance Declaration</TableCell>
                                                            <TableCell>Sr.Director-Ethics and Compliance</TableCell>
                                                            <TableCell>ESG Data Declaration 2021</TableCell>
                                                            <TableCell><a href="#">Audrev Mills</a></TableCell>
                                                            <TableCell style={{color:'green'}}>Completed</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell><a href="#">1007657</a></TableCell>
                                                            <TableCell>Ethics & Compliance Declaration</TableCell>
                                                            <TableCell>Sr.Advisor-E&C-Capability Development</TableCell>
                                                            <TableCell>ESG Data Declaration 2021</TableCell>
                                                            <TableCell><a href="#">Steven Guvmon</a></TableCell>
                                                            <TableCell style={{color:'green'}}>Completed</TableCell>
                                                        </TableRow>
                                                        <TableRow style={{backgroundColor:'#FFE6EE'}}>
                                                            <TableCell><a href="#">1007657</a></TableCell>
                                                            <TableCell>Ethics & Compliance Declaration</TableCell>
                                                            <TableCell>Senior Director-Regulatory</TableCell>
                                                            <TableCell>ESG Data Declaration 2021</TableCell>
                                                            <TableCell><a href="#">David Riggs</a></TableCell>
                                                            <TableCell style={{color:'green'}}>Completed</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell><a href="#">1007657</a></TableCell>
                                                            <TableCell>Ethics & Compliance Declaration</TableCell>
                                                            <TableCell>Director-HR-Global Investigation-COE</TableCell>
                                                            <TableCell>ESG Data Declaration 2021</TableCell>
                                                            <TableCell><a href="#">Pankaj Choudhary</a></TableCell>
                                                            <TableCell style={{color:'green'}}>Completed</TableCell>
                                                        </TableRow>
                                                        <TableRow style={{backgroundColor:'#FFE6EE'}}>
                                                            <TableCell><a href="#">1007657</a></TableCell>
                                                            <TableCell>Ethics & Compliance Declaration</TableCell>
                                                            <TableCell>Director-HR-Global Investigastion-COE</TableCell>
                                                            <TableCell>ESG Data Declaration 2021</TableCell>
                                                            <TableCell><a href="#">Pankaj Choudary</a></TableCell>
                                                            <TableCell style={{color:'green'}}>Completed</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell><a href="#">1007657</a></TableCell>
                                                            <TableCell>Ethics & Compliance Declaration</TableCell>
                                                            <TableCell>Director-HR-Global Investigation</TableCell>
                                                            <TableCell>ESG Data Declaration 2021</TableCell>
                                                            <TableCell><a href="#">Pankaj Choudhary</a></TableCell>
                                                            <TableCell style={{color:'green'}}>Completed</TableCell>
                                                        </TableRow>
                                                        <TableRow style={{backgroundColor:'#FFE6EE'}}>
                                                            <TableCell><a href="#">1007657</a></TableCell>
                                                            <TableCell>Ethics & Compliance Declaration</TableCell>
                                                            <TableCell>Director-HR-Global Declaration</TableCell>
                                                            <TableCell>ESG Data Declaration 2021</TableCell>
                                                            <TableCell><a href="#">Pankaj Choudhary</a></TableCell>
                                                            <TableCell style={{color:'green'}}>Completed</TableCell>
                                                        </TableRow>
                                        </TableBody>
                                </Table>
            </Paper>
        </Box>
    );
}
