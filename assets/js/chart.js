window.onresize = function () {
    canvas.style.width = '100%';
    canvas.style.height = canvas.width * .75;
}


var config = {
  type: 'bar',
  data: {
    labels: [
      ["January"], ["February"], ["March"], ["April"], ["May"], ["June"], ["July"], ["August"], ["September"], ["October"], ["November"], ["December"]
    ],
    datasets: [{
        label:  "Expected Income",
        data: [10000, 15000, 40000, 40000, 4000, 40000, 40000, 40000, 10000, 7000, 14000, 40000],
        backgroundColor: "#239F87",
      },
      {
        label: "Received Income",
        data: [26000, 44000, 50000, 35000, 10000, 50000, 57000, 19000, 47000, 47000, 30000, 47000].map(a => a + 40000),
        backgroundColor: "#144AA8",
      }
    ]
  },
  options: {
    scales: {
      xAxes: [{
        ticks: {
          autoSkip: true
        }

      }],
    },
  }
};

var ctx = document.querySelector(".bar-chart").getContext("2d");
new Chart(ctx, config);


const income = document.querySelector('.income-doughnut').getContext('2d');
const incomeChart = new Chart(income, {
  type: "doughnut",
  data: {
    // labels: ["Invoice Sent", "Invoice Paid"],
    datasets: [{
      backgroundColor: ["#239F87", "#144AA8", "#E77830"],
      data: [1, 1, 1]
    }]
  },
  options: {
    title: {
      // display: true,
      // text: "World Wide Wine Production"
    }
  }
});


const invoice = document.querySelector('.invoice-doughnut').getContext('2d');
const invoiceChart = new Chart(invoice, {
  type: "doughnut",
  data: {
    // labels: ["Invoice Sent", "Invoice Paid"],
    datasets: [{
      backgroundColor: ["#239F87", "#E77830"],
      data: [500, 100]
    }]
  },
  options: {
    title: {
      // display: true,
      // text: "World Wide Wine Production"
    }
  }
});











// const bar = document.querySelector('.barChart').getContext('2d');
// const incomeChart = new Chart(bar, {
//   type: "bar",
//   data: {
//     // labels: ["Invoice Sent", "Invoice Paid"],
//     datasets: [
//     {
//       label: 'Dataset 1',
//       // borderColor: Utils.CHART_COLORS.red,
//       data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
//       backgroundColor: ["red"],
//     },
//     {
//       label: 'Dataset 2',
//       data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
//       backgroundColor: ["blue"],
//     }]
//   },

//   options: {
//     title: {
//       display: true,
//       text: "World Wide Wine Production"
//     }
//   }
// });




// const DATA_COUNT = 12;
// const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};
// const labels = Utils.months({count: 12});
// const barChart = document.querySelector('.barChart').getContext('2d');
// const config = new Chart (barChart, {
//   type: 'bar',
//   data: data,
//   options: {
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         text: 'Chart.js Bar Chart'
//       }
//     }
//   },
// };


// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: Utils.numbers(NUMBER_CFG),
//       borderColor: Utils.CHART_COLORS.red,
//       backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
//     },
//     {
//       label: 'Dataset 2',
//       data: Utils.numbers(NUMBER_CFG),
//       borderColor: Utils.CHART_COLORS.blue,
//       backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
//     }
//   ]
// };
