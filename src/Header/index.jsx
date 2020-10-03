import React from 'react';
import img from '../img/logo.png';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useHistory } from 'react-router-dom';

const useStyle = makeStyles({
  root: {
    display: 'flex',
  },
  tabs: {
    paddingTop: 40,
    paddingLeft: 32,
    width: '100%',
  },
  img: {
    height: 69,
    width: 88,
    padding: '20px 0px 28px 34px',
  },
});

const routes = ['cashier', 'store'];

const Header = () => {
  const classes = useStyle();

  const history = useHistory();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(routes[newValue]);
  };

  return (
    <div className={classes.root}>
      <img className={classes.img} src={img} alt="  " />
      <div className={classes.tabs}>
        <Tabs
          value={value}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
        >
          <Tab label="ШТРИХ-м: КАССИР 5" />
          <Tab label="ШТРИХ-М: МАГАЗИН" />
        </Tabs>
      </div>
    </div>
  );
};

export default Header;
