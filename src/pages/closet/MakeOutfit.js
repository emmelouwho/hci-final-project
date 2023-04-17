import { Grid, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { TabScrollButton, Tab, Tabs } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '100%',
    height: '20vh',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
}));

const GridButtons = styled(Grid)(() => ({
    width: '50%',
    margin: '0% 25%',
}));

export default function MakeOutfit(props) {
    let tops = []
    let bottoms = []
    let jewelry = []
    let other = []
    let shoes = []
    props.items.map((item) => {
        if (item.type === 'Tops') {
            tops.push(item);
        }
        if (item.type === 'Bottoms') {
            bottoms.push(item);
        }
        if (item.type === 'Jewelry') {
            jewelry.push(item);
        }
        if (item.type === 'Other') {
            other.push(item);
        }
        if (item.type === 'Shoes') {
            shoes.push(item);
        }
        
    })
    return (
        <div className="make-outfit">
            <Grid container spacing={2} 
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center">
                <Tabs 
                    onChange = {() => {props.handleItemClick("Tops", true);}}
                    variant = "scrollable"
                    scrollButtons = "auto">
                    {tops.map((item) => (
                        <Tab 
                            icon ={<img src={item.url} height="130px"/>}
                            label = {item.type} 
                            
                        />
                    ))}
                </Tabs>
            </Grid>
            <Grid container spacing={2} 
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center">
                <Tabs 
                    onChange = {() => {props.handleItemClick("Bottoms", true);}}
                    variant = "scrollable"
                    scrollButtons = "auto">
                    {bottoms.map((item) => (
                        <Tab 
                            icon ={<img src={item.url} height="130px"/>}
                            label = {item.type} 
                            
                        />
                    ))}
                </Tabs>
            </Grid>
            <Grid container spacing={2} 
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center">
                <Tabs 
                    onChange = {() => {props.handleItemClick("Jewelry", true);}}
                    variant = "scrollable"
                    scrollButtons = "auto">
                    {jewelry.map((item) => (
                        <Tab 
                            icon ={<img src={item.url} height="130px"/>}
                            label = {item.type} 
                            
                        />
                    ))}
                </Tabs>
            </Grid>
            <Grid container spacing={2} 
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center">
                <Tabs 
                    onChange = {() => {props.handleItemClick("Other", true);}}
                    variant = "scrollable"
                    scrollButtons = "auto">
                    {other.map((item) => (
                        <Tab 
                            icon ={<img src={item.url} height="130px"/>}
                            label = {item.type} 
                            
                        />
                    ))}
                </Tabs>
            </Grid>
            <Grid container spacing={2} 
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center">
                <Tabs 
                    onChange = {() => {props.handleItemClick("Shoes", true);}}
                    variant = "scrollable"
                    scrollButtons = "auto">
                    {shoes.map((item) => (
                        <Tab 
                            icon ={<img src={item.url} height="130px"/>}
                            label = {item.type} 
                            
                        />
                    ))}
                </Tabs>
            </Grid>
            <GridButtons container spacing={1}>
                <Grid item xs={6}>
                    <Button onClick={props.redo} variant="outlined">
                        Redo
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button onClick={props.save} variant="outlined">
                        Save
                    </Button>
                </Grid>
            </GridButtons>
        </div>
    );
}

MakeOutfit.propTypes = {
    handleItemClick: PropTypes.func,
    items: PropTypes.array,
    redo: PropTypes.func,
    catagories: PropTypes.array,
    setCatagories: PropTypes.func,
    save: PropTypes.func,
};
