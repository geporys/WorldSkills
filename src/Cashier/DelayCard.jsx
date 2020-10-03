import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Axios from 'axios';

const options = {
  title: {
    text: 'My chart',
  },
  series: [
    {
      data: [1, 2, 3],
    },
  ],
};

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

const DelayCard = () => {
  const classes = useStyles();
  const [state, setState] = useState([]);

  const getState = async () => {
    return await Axios.get(
      'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json'
    );
  };

  useEffect(() => {
    getState().then(({ data }) => {
      setState(data);
    });
  }, []);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Задержка
        </Typography>
        <HighchartsReact
          highcharts={Highcharts}
          options={{
            chart: {
              zoomType: 'x',
            },
            title: {
              text: 'Средний чек на кассe',
            },
            subtitle: {
              text:
                document.ontouchstart === undefined
                  ? 'Проведите по графику, чтобы призумить'
                  : 'Нажмите на график, чтобы призумить',
            },
            xAxis: {
              type: 'datetime',
            },
            yAxis: {
              title: {
                text: 'Среднее',
              },
            },
            legend: {
              enabled: false,
            },
            plotOptions: {
              area: {
                fillColor: {
                  linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1,
                  },
                  stops: [
                    [0, Highcharts.getOptions().colors[0]],
                    [
                      1,
                      Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba'),
                    ],
                  ],
                },
                marker: {
                  radius: 2,
                },
                lineWidth: 1,
                states: {
                  hover: {
                    lineWidth: 1,
                  },
                },
                threshold: null,
              },
            },

            series: [
              {
                type: 'area',
                name: 'Средний чек в руб',
                data: state.map((item, index) => [
                  new Date('2020-10-03T08:00:00').setMilliseconds(index / 0.00005),
                  item[1] * 1000,
                ]),
              },
            ],
          }}
        />
      </CardContent>
    </Card>
  );
};

export default DelayCard;
