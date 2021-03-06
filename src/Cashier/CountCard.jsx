import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import IconButton from "@material-ui/core/IconButton";
import {ReactComponent as Excel} from "../img/excel.svg";
import CardActions from "@material-ui/core/CardActions";
import Axios from "axios";

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
    margin: '0 20%',
  },
    pie: {

    }
});
          const options={
            chart: {
              styledMode: false
            },

            title: {
              text: ''
            },

            xAxis: {
                type: 'category',
            },

            series: [{
                  type: 'pie',
                  allowPointSelect: true,
                  keys: ['name', 'y', 'selected', 'sliced'],
                  data: [
                    ['Касса 1', 144, false],
                    ['Касса 2', 71, false],
                    ['Касса 3', 135, false],
                    ['Касса 4', 129, false],
                    ['Касса 5', 29, false],
                    ['Касса 6', 176, false],
                    ['Касса 7', 106, false],
                    ['Касса 8', 20, false]
                  ],
                  showInLegend: true
                }]
          }


const CountCard = () => {
  const classes = useStyles();

    const handleDownload = async () => {
        await Axios.get('https://storage.yandexcloud.net/for-projects/Kolichestvo_aktivnykh_kass.xlsx');
    };

  return (
      <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Кол-во активных касс
          </Typography>
          <HighchartsReact className={classes.pie} highcharts={Highcharts} options={options} />
        </CardContent>
          <CardActions>
              <IconButton onClick={handleDownload}>
                  <Excel />
              </IconButton>
          </CardActions>
      </Card>
  );
};

export default CountCard;
