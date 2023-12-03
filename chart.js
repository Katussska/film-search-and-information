export function createChart(rating) {
    let percentage = Math.floor((rating % 1) * 100);

    let options = {
        series: [percentage],
        chart: {
            height: 200,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '60%',
                },
                track: {
                    background: '#68414a',
                },
                dataLabels: {
                    value: {
                        colors: ['#eae9e9'],
                        fontSize: '16px',
                        fontFamily: 'Viga, sans-serif',
                    }
                }
            },
        },
        labels: ['Score'],
        colors: ['#68414a'],
        fill: {
            colors: ['#eae9e9'],
        },
        dataLabels: {
            style: {
                colors: ['#eae9e9'],
                fontSize: '16px',
                fontFamily: 'Viga, sans-serif',
            },
        },
    };

    let chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
}

