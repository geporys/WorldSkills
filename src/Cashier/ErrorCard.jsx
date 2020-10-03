import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

var dataPrev = {
    2016: [
        ['Касса 1', 14],
        ['Касса 2', 32],
        ['Касса 3', 2],
        ['Касса 4', 11],
        ['Касса 5', 24],
    ],
    2012: [
        ['Касса 1', 13],
        ['Касса 2', 3],
        ['Касса 3', 2],
        ['Касса 4', 7],
        ['Касса 5', 22],
    ],
    2008: [
        ['Касса 1', 2],
        ['Касса 2', 4],
        ['Касса 3', 1],
        ['Касса 4', 13],
        ['Касса 5', 27],
    ],
    2004: [
        ['Касса 1', 8],
        ['Касса 2', 5],
        ['Касса 3', 16],
        ['Касса 4', 10],
        ['Касса 5', 32],
    ],
    2000: [
        ['Касса 1', 10],
        ['Касса 2', 8],
        ['Касса 3', 9],
        ['Касса 4', 20],
        ['Касса 5', 26],
    ]
};

var data = {
    2016: [
        ['Касса 1', 13],
        ['Касса 2', 42],
        ['Касса 3', 5],
        ['Касса 4', 17],
        ['Касса 5', 19],
    ],
    2012: [
        ['Касса 1', 17],
        ['Касса 2', 23],
        ['Касса 3', 15],
        ['Касса 4', 19],
        ['Касса 5', 21],
    ],
    2008: [
        ['Касса 1', 32],
        ['Касса 2', 63],
        ['Касса 3', 14],
        ['Касса 4', 31],
        ['Касса 5', 24],
    ],
    2004: [
        ['Касса 1', 33],
        ['Касса 2', 28],
        ['Касса 3', 2],
        ['Касса 4', 23],
        ['Касса 5', 14],
    ],
    2000: [
        ['Касса 1', 14],
        ['Касса 2', 34],
        ['Касса 3', 23],
        ['Касса 4', 14],
        ['Касса 5', 17],
    ]
};

var countries = [{
    name: 'Касса 1',
    color: 'rgb(0, 82, 180)'
},  {
    name: 'Касса 2',
    color: 'rgb(201, 36, 39)'
}, {
    name: 'Касса 3',
    color: 'rgb(0, 0, 0)'
}, {
    name: 'Касса 4',
    color: 'rgb(240, 240, 240)'
}, {
    name: 'Касса 5',
    color: 'rgb(255, 217, 68)'
},
];


function getData(data) {
    return data.map(function (country, i) {
        return {
            name: country[0],
            y: country[1],
            color: countries[i].color
        };
    });
}
const options = {
    chart: {
        type: 'column'
    },
    plotOptions: {
        series: {
            grouping: false,
            borderWidth: 0
        }
    },
    legend: {
        enabled: false
    },
    xAxis: {
        type: 'category',
        max: 4,
    },
    title: {
        text: '',
    },
    series: [{
        color: 'rgb(158, 159, 163)',
        pointPlacement: -0.2,
        linkedTo: 'main',
        data: dataPrev[2016].slice(),
        name: '2012'
    }, {
        name: '2016',
        id: 'main',
        dataSorting: {
            enabled: true,
            matchByName: true
        },
        dataLabels: [{
            enabled: true,
            inside: true,
            style: {
                fontSize: '16px'
            }
        }],
        data: getData(data[2016]).slice()
    }],
    exporting: {
        allowHTML: true
    }
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
