import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useHistory } from 'react-router-dom';

const routes = ['cashier', 'store'];

const RouteTabs = () => {
  const history = useHistory();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(routes[newValue]);
  };

  return (
    <Paper square>
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
    </Paper>
  );
};

export default RouteTabs;
