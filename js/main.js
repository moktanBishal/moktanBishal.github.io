// let months = ['June', 'July', 'August', 'September',
//              'October', 'November', 'December', 'January', 
//             'February', 'March', 'April', 'May', 'June'];

let months = ['January 2022', 'February 2022', 'March 2022', 'April 2022', 'May 2022','July,2022', 'August,2022', 'September,2022',
             'October,2022', 'November,2022', 'December,2022','January,2023'];
new Chart("myChart", {
    type: "line",
    data: {
        labels: months,
        datasets: [{
            label: 'Received',
            // data: [2000,1800,1600,1400,1400,1900,1600,2600,2200,3200,2700,2200,3200],
            data: [2200,2000,1800,1800,2400,2100,3200],
            borderColor: "red",
            fill: false
        }, {
            label: 'Returned',
            // data: [200,400,600,600,600,1000,1300,1700,2100,2500,3000,2500,3200],
            data: [200,400,600,600,1000,1300,1700],
            borderColor: "green",
            fill: false
        }]
    },
    options: {
        legend: {
            display: false
        }
    }
});