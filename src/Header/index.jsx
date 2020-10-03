import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles({
    img: {

    },
    img__logo: {
        height: 69,
        width: 88,
    }
});

const Header = () => {
    const classes = useStyle();
  return (
      <div className={classes.img}>
        <div className={classes.img__logo}>
            <img src="../img/logo.png" alt="  "/>
        </div>
      </div>
  );
};

export default Header;
