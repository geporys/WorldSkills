import React from 'react';
import img from "../img/logo.png";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles({

    img: {
        height: 69,
        width: 88,
        padding: '20px 0px 28px 34px',
    }

});

const Header = () => {
    const classes = useStyle();
    return (
        <div>
            <img className={classes.img} src={img} alt="  "/>
        </div>
    );
};

export default Header;
