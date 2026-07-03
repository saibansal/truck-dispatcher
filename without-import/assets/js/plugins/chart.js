ZC.LICENSE = [
  "569d52cefae586f634c54f86dc99e6a9",
  "b55b025e438fa8a98e32482b5f768ff5",
];
// compliance
let complianceChart = {
  type: "pie",
  backgroundColor: "#F1F9FF",
  align: "middle",
  verticalAlign: "middle",
  globals: {
    fontSize: "14px",
  },
  legend: {
    adjustLayout: false,
    align: "right",
    stacked: false,
    toggleAction: "remove",
    verticalAlign: "center",
    borderWidth: 0,
    backgroundColor: "#F1F9FF",
    item: {
      padding: "3px 5px",
      cursor: "crosshair",
    },
    marker: {
      size: 12,
      cursor: "crosshair",
    },
  },
  plot: {
    tooltip: {
      text: "%npv%",
      padding: "5px 10px",
      fontFamily: "Open Sans",
      fontSize: "12px",
    },
    valueBox: {
      text: "%t\n%npv%",
      fontFamily: "Open Sans",
      fontSize: "12px",
      placement: "out",
    },
  },
  series: [
    {
      text: "1 Month",
      values: [10],
      backgroundColor: "#7FAC0D",
    },
    {
      text: "15 Days",
      values: [2],
      backgroundColor: "#DDDF00",
    },
    {
      text: "7 Days",
      values: [5],
      backgroundColor: "#11ACC5",
    },
    {
      text: "3 Days",
      values: [2],
      backgroundColor: "#A70033",
    },
    {
      text: "Today",
      values: [1],
      backgroundColor: "#EFF400",
    },
    {
      text: "Expired",
      values: [1],
      backgroundColor: "#FF0000",
    },
    {
      text: "2 Months",
      values: [30],
      backgroundColor: "#50B432",
    },
  ],
};
zingchart.render({
  id: "compliance",
  data: complianceChart,
  height: "345px",
  width: "100%",
});

// profitaibility
let profitaibilityChart = {
  type: "pie",
  backgroundColor: "#F1F9FF",
  align: "middle",
  verticalAlign: "middle",
  globals: {
    fontSize: "11px",
    cursor: "crosshair",
  },
  legend: {
    adjustLayout: false,
    align: "right",
    stacked: false,
    toggleAction: "remove",
    verticalAlign: "center",
    borderWidth: 0,
    backgroundColor: "#F1F9FF",
    item: {
      padding: "3px 5px",
      cursor: "crosshair",
    },
    marker: {
      size: 12,
    },
  },
  plot: {
    detach: false,
    tooltip: {
      text: "%t\n%npv%",
      padding: "5px 10px",
      fontFamily: "Open Sans",
      fontSize: "12px",
    },
    valueBox: {
      text: "%t\n%npv%",
      fontFamily: "Open Sans",
      fontSize: "12px",
      placement: "out",
    },
    animation: {
      effect: 5,
      method: 4,
      speed: 900,
      sequence: 1,
      delay: 300,
    },
  },
  series: [
    {
      text: "Load Amount",
      values: [900],
      backgroundColor: "#A70033",
    },
    {
      text: "Total Expense",
      values: [200],
      backgroundColor: "#FF0000",
    },
    {
      text: "Fleet",
      values: [100],
      backgroundColor: "#11ACC5",
    },
    {
      text: "Net Profit",
      values: [500],
      backgroundColor: "#50B432",
    },
  ],
};
zingchart.render({
  id: "profitability",
  data: profitaibilityChart,
  height: "250px",
  width: "100%",
});

// truckInformation chart

let truckInformationChart = {
  type: "pie",
  backgroundColor: "#F1F9FF",
  align: "middle",
  verticalAlign: "middle",
  globals: {
    fontSize: "14px",
  },
  legend: {
    adjustLayout: false,
    align: "right",
    stacked: false,
    toggleAction: "remove",
    verticalAlign: "center",
    borderWidth: 0,
    backgroundColor: "#F1F9FF",
    item: {
      padding: "3px 5px",
      cursor: "crosshair",
    },
    marker: {
      size: 12,
      cursor: "crosshair",
    },
  },
  plot: {
    tooltip: {
      text: "%t\n%npv%",
      padding: "5px 10px",
      fontFamily: "Open Sans",
      fontSize: "12px",
    },
    valueBox: {
      text: "%t\n%npv%",
      fontFamily: "Open Sans",
      fontSize: "12px",
      placement: "out",
    },
    animation: {
      effect: 3,
      method: 4,
      speed: 900,
      sequence: 1,
      delay: 300,
    },
  },
  series: [
    {
      text: "Fuel",
      values: [10],
      backgroundColor: "#0032A7",
    },
    {
      text: "Meal",
      values: [2],
      backgroundColor: "#C5A711",
    },
    {
      text: "Tea Expense",
      values: [5],
      backgroundColor: "#11ACC5",
    },
    {
      text: "Truck Repair",
      values: [2],
      backgroundColor: "#50B432",
    },
  ],
};
zingchart.render({
  id: "truckInformation",
  data: truckInformationChart,
  height: "250px",
  width: "100%",
});

//profitability chart
window.addEventListener("load", () => {
  let chartConfig = {
    type: "bar",
    backgroundColor: "transparent",
    globals: {
      fontSize: "12px",
    },
    plot: {
      tooltip: {
        text: "%kl : %v ",
        borderRadius: "3px",
        htmlMode: true,
      },
      valueBox: {
        color: "#0000",
        fontSize: "10px",
        placement: "top-out",
      },
      animation: {
        effect: "ANIMATION_EXPAND_BOTTOM",
        method: "ANIMATION_STRONG_EASE_OUT",
        sequence: "ANIMATION_BY_NODE",
        speed: 275,
      },
    },
    scaleX: {
      itemsOverlap: true,
      labels: ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul", "Aug", "Sep"],
    },
    scaleY: {
      itemsOverlap: true,
      labels: [0, 10000, 20000, 30000, 40000, 50000, 60000, 5020],
    },
    series: [
      {
        values: [35000, 10000, 20000, 2000, 41000, 5500, 66000, 5020],
        backgroundColor: "#64b5f6",
      },
    ],
  };

  zingchart.render({
    id: "profitabilityChart",
    data: chartConfig,
    height: "350px",
    width: "100%",
  });
});

// trucks information map starts
// zingchart.loadModules("maps, maps-usa", function () {
//   zingchart.render({
//     id: "myCharta",
//     data: {
//       shapes: [
//         {
//           type: "zingchart.maps",
//           options: {
//             name: "usa",
//             zooming: false,
//             panning: false,
//             scrolling: false,
//             style: {
//               controls: {
//                 visible: false,
//               },
//             },
//           },
//         },
//       ],
//     },
//     height: 400,
//     width: "100%",
//   });
// });

// zingchart.shape_click = function(e) {
//   console.log('ass' + arguments);
//   zingchart.exec(e.id, 'updateobject', {
//     type: 'shape',
//     data: {
//       id: e.shapeid,
//       backgroundColor: 'red',
//       label: {
//         fontColor: 'white'
//       }
//     }
//   });
// };
