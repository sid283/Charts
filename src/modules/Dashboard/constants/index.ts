export const SIDE_BAR_LINKS = [
  {
    title: "Home",
    shortName: "H",
  },
  {
    title: "Customization",
    shortName: "C",
  },
  {
    title: "Audience",
    shortName: "A",
  },
  {
    title: "Overview",
    shortName: "O",
  },
  {
    title: "Active Users",
    shortName: "A",
  },
  {
    title: "Demographics",
    shortName: "D",
  },
  {
    title: "Audiences",
    shortName: "A",
  },
  {
    title: "Interests",
    shortName: "I",
  },
];

export const LINE_CHART = {
  chart: {
    type: "spline",
    scrollablePlotArea: {
      minWidth: 600,
      scrollPositionX: 1,
    },
  },
  title: {
    text: "Wind speed during a day",
    align: "left",
  },
  subtitle: {
    text:
      "15th & 16th of April, 2020 at two locations in Vik i Sogn, " + "Norway",
    align: "left",
  },
  xAxis: {
    type: "datetime",
    labels: {
      overflow: "justify",
    },
  },
  yAxis: {
    title: {
      text: "Wind speed (m/s)",
    },
    minorGridLineWidth: 0,
    gridLineWidth: 0,
    alternateGridColor: null,
    plotBands: [
      {
        // Light air
        from: 0.3,
        to: 1.5,
        color: "rgba(68, 170, 213, 0.1)",
        label: {
          text: "Light air",
          style: {
            color: "#606060",
          },
        },
      },
      {
        // Light breeze
        from: 1.5,
        to: 3.3,
        color: "rgba(0, 0, 0, 0)",
        label: {
          text: "Light breeze",
          style: {
            color: "#606060",
          },
        },
      },
      {
        // Gentle breeze
        from: 3.3,
        to: 5.5,
        color: "rgba(68, 170, 213, 0.1)",
        label: {
          text: "Gentle breeze",
          style: {
            color: "#606060",
          },
        },
      },
      {
        // Moderate breeze
        from: 5.5,
        to: 8,
        color: "rgba(0, 0, 0, 0)",
        label: {
          text: "Moderate breeze",
          style: {
            color: "#606060",
          },
        },
      },
      {
        // Fresh breeze
        from: 8,
        to: 11,
        color: "rgba(68, 170, 213, 0.1)",
        label: {
          text: "Fresh breeze",
          style: {
            color: "#606060",
          },
        },
      },
      {
        // Strong breeze
        from: 11,
        to: 14,
        color: "rgba(0, 0, 0, 0)",
        label: {
          text: "Strong breeze",
          style: {
            color: "#606060",
          },
        },
      },
      {
        // Near Gale
        from: 14,
        to: 17,
        color: "rgba(68, 170, 213, 0.1)",
        label: {
          text: "Near gale",
          style: {
            color: "#606060",
          },
        },
      },
      {
        // Fresh Gale
        from: 17,
        to: 20.5,
        color: "rgba(0, 0, 0, 0)",
        label: {
          text: "Fresh gale",
          style: {
            color: "#606060",
          },
        },
      },
      {
        // Strong Gale
        from: 20.5,
        to: 24,
        color: "rgba(68, 170, 213, 0.1)",
        label: {
          text: "Strong gale",
          style: {
            color: "#606060",
          },
        },
      },
    ],
  },
  tooltip: {
    valueSuffix: " m/s",
  },
  plotOptions: {
    spline: {
      lineWidth: 4,
      states: {
        hover: {
          lineWidth: 5,
        },
      },
      marker: {
        enabled: false,
      },
      pointInterval: 3600000, // one hour
      pointStart: Date.UTC(2020, 3, 15, 0, 0, 0),
    },
  },
  series: [
    {
      name: "Hestavollane",
      data: [
        5.4, 5.2, 5.7, 6.3, 5.2, 5.6, 6.1, 5.6, 5.9, 7.1, 8.6, 7.8, 8.6, 8.0,
        9.7, 11.2, 12.5, 13.1, 10.6, 10.9, 8.9, 9.5, 7.5, 3.5, 4.2,
      ],
    },
    {
      name: "Vik",
      data: [
        0.2, 0.1, 0.1, 0.5, 0.3, 0.2, 0.1, 0.1, 0.1, 0.1, 0.2, 1.1, 1.3, 2.0,
        1.5, 1.5, 1.5, 1.4, 1.7, 2.0, 2.9, 2.1, 2.1, 3.5, 2.9,
      ],
    },
  ],
  navigation: {
    menuItemStyle: {
      fontSize: "10px",
    },
  },
};

export const BAR_CHART = {
  chart: {
    type: "column",
  },
  title: {
    text: "Corn vs wheat estimated production for 2020",
    align: "left",
  },
  subtitle: {
    text:
      'Source: <a target="_blank" ' +
      'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>',
    align: "left",
  },
  xAxis: {
    categories: ["USA", "China", "Brazil", "EU", "India", "Russia"],
    crosshair: true,
    accessibility: {
      description: "Countries",
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "1000 metric tons (MT)",
    },
  },
  tooltip: {
    valueSuffix: " (1000 MT)",
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: "Corn",
      data: [406292, 260000, 107000, 68300, 27500, 14500],
    },
    {
      name: "Wheat",
      data: [51086, 136000, 5500, 141000, 107180, 77000],
    },
  ],
};

export const PIE_CHART = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie",
  },
  title: {
    text: "Browser market shares in February, 2022",
    align: "left",
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      borderRadius: 5,
      dataLabels: {
        enabled: true,
        format: "<b>{point.name}</b><br>{point.percentage:.1f} %",
        distance: -50,
        filter: {
          property: "percentage",
          operator: ">",
          value: 4,
        },
      },
    },
  },
  series: [
    {
      name: "Share",
      data: [
        { name: "Chrome", y: 74.03 },
        { name: "Edge", y: 12.66 },
        { name: "Firefox", y: 4.96 },
        { name: "Safari", y: 2.49 },
        { name: "Internet Explorer", y: 2.31 },
        { name: "Other", y: 3.398 },
      ],
    },
  ],
};

export const AREA_CHART = {
  chart: {
    type: "areaspline",
    style: {
      width: "300px",
      height: "240px",
    },
  },
  xAxis: {
    // Highlight the last years where moose hunting quickly deminishes
    plotBands: [
      {
        from: 2020,
        to: 2023,
        color: "rgba(68, 170, 213, .2)",
      },
    ],
  },
  yAxis: {},
  credits: {
    enabled: false,
  },
  plotOptions: {
    series: {
      pointStart: 2000,
    },
    areaspline: {
      fillOpacity: 0.5,
    },
  },
  series: [
    {
      name: "",
      data: [
        38000, 37300, 37892, 38564, 36770, 36026, 34978, 35657, 35620, 35971,
        36409, 36435, 34643, 34956, 33199, 31136, 30835, 31611, 30666, 30319,
        31766, 29278, 27487, 26007,
      ],
    },
  ],
};

export const USERS = [
  {
    title: "Users",
    count: "14,756",
  },
  {
    title: "New users",
    count: "14,517",
  },
  {
    title: "Sessions",
    count: "17,756",
  },
  {
    title: "Number of sessions per user",
    count: "14,756",
  },
  {
    title: "Page views",
    count: "14,756",
  },
  {
    title: "Pages/session",
    count: "14,756",
  },
  {
    title: "Avg session duration",
    count: "1.23",
  },
  {
    title: "Bounce ratio",
    count: "14,756",
  },
];
