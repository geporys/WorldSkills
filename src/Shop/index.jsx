import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import img from "../img/smash-20-workflow.png";


const useStyles = makeStyles({
    root: {
        padding: 16,
        width: '100%'
    },
    img: {
        height: 900,
        weight: 1000,
        display: "flex",
        justifyContent: "center"

    },
    text: {
        align: 'center',
        textAlign: 'center',
        fontSize: '50px',
        fontFamily: "Lato"
    }
});

const Shop = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.text}> Страница в разработке</div>
            <img className={classes.img} src={img} alt="  "/>
        </div>
    );
};

export default Shop;
