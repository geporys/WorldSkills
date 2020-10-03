import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DelayCard from './DelayCard';

const useStyles = makeStyles({
  root: {},
});

const Cashier = () => {
  const classes = useStyles();

  return (
    <div className={classes}>
      <DelayCard />
    </div>
  );
};

export default Cashier;
