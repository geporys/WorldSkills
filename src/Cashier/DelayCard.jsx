import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Axios from 'axios';

const useStyles = makeStyles({
  root: {
    width: 500,
    marginLeft: 64,
  },
});

const DelayCard = () => {
  const classes = useStyles();

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
              zoomType: 'xy',
            },
            title: {
              text: 'Задержка кассовых аппаратов',
              align: 'left',
            },
            xAxis: [
              {
                categories: [
                  'Касса 2',
                  'Касса 4',
                  'Касса 7',
                  'Касса 13',
                  'Касса 14',
                  'Касса 10',
                  'Касса 11',
                  'Касса 1',
                  'Касса 3',
                  'Касса 9',
                  'Касса 8',
                  'Касса 6',
                ],
                crosshair: true,
              },
            ],
            yAxis: [
              {
                // Primary yAxis
                labels: {
                  format: '{value}°C',
                  style: {
                    color: Highcharts.getOptions().colors[2],
                  },
                },
                opposite: true,
              },
              {
                // Secondary yAxis
                gridLineWidth: 0,
                title: {
                  text: 'мс',
                  style: {
                    color: Highcharts.getOptions().colors[0],
                  },
                },
                labels: {
                  format: '{value} мс',
                  style: {
                    color: Highcharts.getOptions().colors[0],
                  },
                },
              },
              {
                // Tertiary yAxis
                gridLineWidth: 0,
                title: {
                  text: 'Рамзер данных',
                  style: {
                    color: Highcharts.getOptions().colors[1],
                  },
                },
                labels: {
                  format: '{value} mb',
                  style: {
                    color: Highcharts.getOptions().colors[1],
                  },
                },
                opposite: true,
              },
            ],
            tooltip: {
              shared: true,
            },
            legend: {
              layout: 'vertical',
              align: 'left',
              x: 80,
              verticalAlign: 'top',
              y: 55,
              floating: true,
              backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || // theme
                'rgba(255,255,255,0.25)',
            },
            series: [
              {
                name: 'Время',
                type: 'column',
                yAxis: 1,
                data: [
                  49.9,
                  71.5,
                  106.4,
                  129.2,
                  144.0,
                  176.0,
                  135.6,
                  148.5,
                  216.4,
                  194.1,
                  95.6,
                  54.4,
                ],
                tooltip: {
                  valueSuffix: ' mm',
                },
              },
              {
                name: 'Размер',
                type: 'spline',
                yAxis: 2,
                data: [
                  1016,
                  1016,
                  1015.9,
                  1015.5,
                  1012.3,
                  1009.5,
                  1009.6,
                  1010.2,
                  1013.1,
                  1016.9,
                  1018.2,
                  1016.7,
                ],
                marker: {
                  enabled: false,
                },
                dashStyle: 'shortdot',
                tooltip: {
                  valueSuffix: ' mb',
                },
              },
            ],
            responsive: {
              rules: [
                {
                  condition: {
                    maxWidth: 500,
                  },
                  chartOptions: {
                    legend: {
                      floating: false,
                      layout: 'horizontal',
                      align: 'center',
                      verticalAlign: 'bottom',
                      x: 0,
                      y: 0,
                    },
                    yAxis: [
                      {
                        labels: {
                          align: 'right',
                          x: 0,
                          y: -6,
                        },
                        showLastLabel: false,
                      },
                      {
                        labels: {
                          align: 'left',
                          x: 0,
                          y: -6,
                        },
                        showLastLabel: false,
                      },
                      {
                        visible: false,
                      },
                    ],
                  },
                },
              ],
            },
          }}
        />
      </CardContent>
    </Card>
  );
};

export default DelayCard;
