import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

var data = {
  2016: [
    ['Касса 1', 13],
    ['Касса 2', 42],
    ['Касса 3', 5],
    ['Касса 4', 17],
    ['Касса 5', 19],
  ],
};

var countries = [
  {
    name: 'Касса 1',
    color: 'rgb(0, 82, 180)',
  },
  {
    name: 'Касса 2',
    color: 'rgb(201, 36, 39)',
  },
  {
    name: 'Касса 3',
    color: 'rgb(0, 0, 0)',
  },
  {
    name: 'Касса 4',
    color: 'rgb(240, 240, 240)',
  },
  {
    name: 'Касса 5',
    color: 'rgb(255, 217, 68)',
  },
];

function getData(data) {
  return data.map(function (country, i) {
    return {
      name: country[0],
      y: country[1],
      color: countries[i].color,
    };
  });
}
const options = {
  chart: {
    type: 'column',
  },
  plotOptions: {
    series: {
      grouping: false,
      borderWidth: 0,
    },
  },
  legend: {
    enabled: false,
  },
  xAxis: {
    type: 'category',
    max: 4,
  },
  title: {
    text: '',
  },
  series: [
    {
      name: 'Ошибки',
      id: 'main',
      dataSorting: {
        enabled: true,
        matchByName: true,
      },
      dataLabels: [
        {
          enabled: true,
          inside: true,
          style: {
            fontSize: '16px',
          },
        },
      ],
      data: getData(data[2016]).slice(),
    },
  ],
  exporting: {
    allowHTML: true,
  },
};

const useStyles = makeStyles({
  root: {
    minWidth: 500,
  },
});

const ErrorCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Частота ошибок
        </Typography>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </CardContent>
    </Card>
  );
};

export default ErrorCard;
