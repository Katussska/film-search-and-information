let rating = 7.8345 / 10;

let percentage = Math.floor((rating % 1) * 100);

let options = {
    series: [percentage],
    chart: {
        height: 350,
        type: 'radialBar',
        offsetY: -10
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
                name: {
                    fontSize: '16px',
                    color: undefined,
                    offsetY: 120
                },
                value: {
                    offsetY: 76,
                    fontSize: '22px',
                    color: undefined,
                    formatter: function (val) {
                        return val + "%";
                    }
                }
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 25, 50, 75, 95],
            colorStops: [{
                offset: 0,
                color: '#FF0000' // Červená procenta
            }, {
                offset: 25,
                color: '#ff8000' // Žlutá procenta
            }, {
                offset: 50,
                color: '#fffb00' // Zelená procenta
            }, {
                offset: 75,
                color: '#08ff00' // Modrá procenta
            }, {
                offset: 95,
                color: '#00c4ff' // Modrá procenta
            }]
        }
    },
    stroke: {
        dashArray: 4
    },
    labels: ['Score'],
};

let chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
