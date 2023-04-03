var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
    if(!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true; 
    }
}

function closeSidebar () {
    if(sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}

// --------------------- CHARTS ---------------------

// BAR CHART

// var barChartOptions = {
//     series: [{
//     data: [24588, 26645]
//   }],
//     chart: {
//     type: 'bar',
//     height: 700,
//     toolbar: {
//       show: false
//     },
//   },
//   colors: [
//     "#246dec",
//     "#cc3c43",
//     "#367952",
//     "#f5b74f",
//     "#4f35a1"
//   ],
//   plotOptions: {
//     bar: {
//       distributed: true,
//       borderRadius: 4,
//       horizontal: false,
//       columnWidth: '40%',
//     }
//   },
//   dataLabels: {
//     enabled: false,
//     style: {colors: "#000000"},
//   },
//   legend: {
//     show: false
//   },
//   xaxis: {
//     categories: ['Real', 'Fake'],
//     labels: {
//       style: {
//           colors: ["#000000"],
//           fontSize: '25px',
//           fontWeight: 400,
//     }}},
//   yaxis: {
//     title: {
//       text: "Count",
//       style: {fontSize: '20px'},
//     },
//     labels: {
//       style: {
//           colors: ["#000000"],
//           fontSize: '20px',
//           fontWeight: 300,
//   }
// }}};

//   var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
//   barChart.render();

//   var areaChartOptions = {
//     series: [{
//     name: 'Titles',
//     data: [7, 12, 5, 11, 15, 9, 8]
//   }, {
//     name: 'Articles',
//     data: [1100, 950, 1360, 2100, 4200, 850, 1250]
//   }],
//     chart: {
//     height: 350,
//     type: 'area',
//     toolbar: {
//     },
//   },
//   colors: ["#4f35a1", "#246dec"],
//   dataLabels: {
//     enabled: false
//   },
//   stroke: {
//     curve: 'smooth'
//   },
  
//   labels: ['1', '2','3','4','5','6','7'],
//   markers: {
//     size: 0
//   },
//   yaxis: [
//     {
//       title: {
//         text: 'Titles',
//       },
//     },
//     {
//       opposite: true,
//       title: {
//         text: 'Articles',
//       },
//     },
//   ],
//   tooltip: {
//     shared: true,
//     intersect: false,
//   }
// };

//   var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
//   areaChart.render();