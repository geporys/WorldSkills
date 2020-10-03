import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DelayCard from './DelayCard';
import ErrorCard from "./ErrorCard";

const useStyles = makeStyles({
  root: {
    padding: 16,
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const Cashier = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DelayCard />
      <ErrorCard/>
    </div>
  );
};

export default Cashier;
