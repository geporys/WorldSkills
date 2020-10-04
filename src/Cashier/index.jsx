import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import DelayCard from './DelayCard';
import ErrorCard from './ErrorCard';
import СheckCard from './СheckCard';
import CountCard from "./CountCard";

const useStyles = makeStyles({
  root: {
    padding: 16,
    display: 'flex',
  },
    diagram: {
      padding: 16,
    }
});

const Cashier = () => {
  const classes = useStyles();

  return (
    <>
        <div className={classes.root}>
          <СheckCard />
          <ErrorCard />
          <DelayCard />
        </div>
        <div className={classes.diagram}>
            <CountCard/>
        </div>
    </>
  );
};

export default Cashier;
