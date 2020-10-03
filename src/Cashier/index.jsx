import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DelayCard from './DelayCard';
import ErrorCard from './ErrorCard';
import СheckCard from './СheckCard';

const useStyles = makeStyles({
  root: {
    padding: 16,
    display: 'flex',
  },
});

const Cashier = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <СheckCard />
      <ErrorCard />
      <DelayCard />
    </div>
  );
};

export default Cashier;
