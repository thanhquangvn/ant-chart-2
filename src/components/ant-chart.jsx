import React, { useState, useEffect } from 'react';
import { Line, Column, Bar, Histogram, Facet, Liquid, Gauge, Pie } from '@ant-design/charts';
import './ant-chart.css';

const Page = () => {

  const [chartList2, setChartList2] = useState([]);
  const [chartList1, setChartList1] = useState([]);
  const [chartList3, setChartList3] = useState([]);
  const [chartList4, setChartList4] = useState([]);
  const [chartList5, setChartList5] = useState([]);
  const [chartList6, setChartList6] = useState([]);
  const [chartList9, setChartList9] = useState([]);
  const [chartList10, setChartList10] = useState([]);
  const [chartList11, setChartList11] = useState([]);
  const [chartList12, setChartList12] = useState([]);
  const [chartList13, setChartList13] = useState([]);
  const [chartList15, setChartList15] = useState([]);
  const [chartList16, setChartList16] = useState([]);

  useEffect(() => {
    fetchChartList1();
    fetchChartList2();
    fetchChartList3();
    fetchChartList4();
    fetchChartList5();
    fetchChartList6();
    fetchChartList9();
    fetchChartList10();
    fetchChartList11();
    fetchChartList12();
    fetchChartList13();
    fetchChartList15();
    fetchChartList16();
  }, []);

  async function fetchChartList3() {
    try {
      const requestUrl = "https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      setChartList3(responseJSON);
    } catch (error) {
      console.log('Failed to fetch: ', error.message);
    }
  }

  async function fetchChartList4() {
    try {
      const requestUrl = "https://gist.githubusercontent.com/thanhquangvn/2b44a7f630b864c33d36ba7305eba5fe/raw/14271ffdf1ba3e911416c121c4c156a35e03412c/dashboard2";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      setChartList4(responseJSON);
    } catch (error) {
      console.log('Failed to fetch: ', error.message);
    }
  }

  async function fetchChartList1() {
    try {
      const requestUrl = "https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      setChartList1(responseJSON);
    } catch (error) {
      console.log('Failed to fetch: ', error.message);
    }
  }


  async function fetchChartList2() {
    try {
      const requestUrl = "https://gist.githubusercontent.com/thanhquangvn/a1befeaf4582e5a04cb82f12cd24d642/raw/ddfe7e255555e766246b15d5319ba85de20a6fe4/dashboard";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      setChartList2(responseJSON);
    } catch (error) {
      console.log('Failed to fetch: ', error.message);
    }
  }

  async function fetchChartList5() {
    try {
      const requestUrl = "https://gw.alipayobjects.com/os/antfincdn/RoliHq%2453S/histogram.json";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      setChartList5(responseJSON);
    } catch (error) {
      console.log('Failed to fetch: ', error.message);
    }
  }

  async function fetchChartList6() {
    try {
      const requestUrl = "https://gw.alipayobjects.com/os/antfincdn/2Qttbqxmtw/symmetry-data.json";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      setChartList6(responseJSON);
    } catch (error) {
      console.log('Failed to fetch: ', error.message);
    }
  }

  async function fetchChartList9() {
    try {
      const requestUrl = "https://gist.githubusercontent.com/thanhquangvn/1f7e6bdea5f4f82c47c03f362703f6de/raw/cc6895ad54be3a856e97b27cd8ce55613f01f65c/chart9";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      setChartList9(responseJSON);
    } catch (error) {
      console.log('Failed to fetch: ', error.message);
    }
  }

  async function fetchChartList10() {
    try {
      const requestUrl = "https://gist.githubusercontent.com/thanhquangvn/5c1f43f53166cc1aaf8d57d2c01c9eac/raw/7f9f70acedf6f19268926566acfff4407cb28997/chart10";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      setChartList10(responseJSON);
    } catch (error) {
      console.log('Failed to fetch: ', error.message);
    }
  }

  async function fetchChartList11() {
    try {
      const requestUrl = "https://gist.githubusercontent.com/thanhquangvn/00e01d1c94fbe5034c22301c42c47503/raw/7ec004bcd54c1e95aaf89340ed573ec2a829cb80/chart11";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      setChartList11(responseJSON);
    } catch (error) {
      console.log('Failed to fetch: ', error.message);
    }
  }

  async function fetchChartList12() {
    try {
      const requestUrl = "https://gist.githubusercontent.com/thanhquangvn/36c02de7fa03a8ffe9ad39eb21b963b6/raw/47a1d0abf0b69584fc7247f5b5bc7f8532121d37/chart12";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      setChartList12(responseJSON);
    } catch (error) {
      console.log('Failed to fetch: ', error.message);
    }
  }

  async function fetchChartList13() {
    try {
      const requestUrl = "https://gist.githubusercontent.com/thanhquangvn/b16fbbb72a455284d66bf876f7dc376e/raw/983d8fdc7dc0a071d4e82dd64f35f885ee7dc622/chart13";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      setChartList13(responseJSON);
    } catch (error) {
      console.log('Failed to fetch: ', error.message);
    }
  }

  async function fetchChartList15() {
    try {
      const requestUrl = "https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      setChartList15(responseJSON);
    } catch (error) {
      console.log('Failed to fetch: ', error.message);
    }
  }

  async function fetchChartList16() {
    try {
      const requestUrl = "https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      setChartList16(responseJSON);
    } catch (error) {
      console.log('Failed to fetch: ', error.message);
    }
  }


  const config1 = {
    data: chartList1,
    height: 400,
    fontSize: 28,
    xField: "Date",
    yField: "scales",
    xAxis: { tickCount: 10 },
    smooth: true,
    statistic: {
      content: {
        style: {
          fontSize: '18px',
          lineHeight: '20px',
        },
      },
    },
  };

  const config2 = {
    data: chartList2,
    height: 400,
    xField: "activatedate",
    yField: "count",
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    columnStyle: {
      stroke: 'black',
      lineWidth: 1,
      strokeOpacity: 0.2,
      shadowColor: 'black',
      shadowBlur: 10,
      shadowOffsetX: 5,
      shadowOffsetY: 5,
      cursor: 'pointer'
    },
  }

  const config3 = {
    data: chartList3,
    isGroup: true,
    xField: '月份',
    yField: '月均降雨量',
    seriesField: 'name',
    dodgePadding: 2,
    label: {
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color' },
      ],
    },
  };

  const config4 = {
    data: chartList4,
    isStack: true,
    xField: 'value',
    yField: 'year',
    seriesField: 'type',
    label: {
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color' },
      ],
    },
  };

  const config5 = {
    data: chartList5,
    binField: 'value',
    binWidth: 2,
  };

  const config6 = {
    type: 'mirror',
    data: chartList6,
    fields: ['gender'],
    transpose: true,
    padding: [32, 16, 28, 16],
    meta: {
      age: {
        sync: true,
        tickCount: 11,
      },
      total_percentage: {
        sync: true,
        formatter: function formatter(v) {
          return v + '%';
        },
      },
      gender: { sync: true },
    },
    axes: {},
    eachView: function eachView(view, f) {
      return {
        padding: [0, 48, 0, 0],
        type: 'column',
        options: {
          data: f.data,
          xField: 'age',
          yField: 'total_percentage',
          seriesField: 'gender',
          color: ['#1890ff', '#f04864'],
        },
      };
    },
  };

  const config7 = {
    percent: 0.25,
    shape: function shape(x, y, width, height) {
      var r = width / 4;
      var dx = x - width / 2;
      var dy = y - height / 2;
      return [
        ['M', dx, dy + r * 2],
        ['A', r, r, 0, 0, 1, x, dy + r],
        ['A', r, r, 0, 0, 1, dx + width, dy + r * 2],
        ['L', x, dy + height],
        ['L', dx, dy + r * 2],
        ['Z'],
      ];
    },
    outline: {
      border: 4,
      distance: 8,
    },
    wave: { length: 128 },
  };

  const config8 = {
    percent: 0.75,
    range: {
      ticks: [0, 1 / 3, 2 / 3, 1],
      color: ['#F4664A', '#FAAD14', '#30BF78'],
    },
    indicator: {
      pointer: { style: { stroke: '#D0D0D0' } },
      pin: { style: { stroke: '#D0D0D0' } },
    },
    statistic: {
      content: {
        style: {
          fontSize: '36px',
          lineHeight: '36px',
        },
      },
    },
  };

  const config9 = {
    appendPadding: 10,
    data: chartList9,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: { type: 'outer' },
    interactions: [{ type: 'element-active' }],
  };

  const config10 = {
    appendPadding: 10,
    data: chartList10,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: 'Demo Chart',
      },
    },
  };

  var config11 = {
    data: chartList11,
    xField: 'month',
    yField: 'value',
    isGroup: true,
    isStack: true,
    seriesField: 'type',
    groupField: 'name',
  };

  var config12 = {
    data: chartList12,
    xField: 'year',
    yField: 'value',
    seriesField: 'country',
    isPercent: true,
    isStack: true,
    label: {
      position: 'middle',
      content: function content(item) {
        return item.value.toFixed(2);
      },
      style: { fill: '#fff' },
    },
  };

  const config13 = {
    appendPadding: 10,
    data: chartList13,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
    statistic: {
      title: false,
      content: {
        // style: {
        //   whiteSpace: 'pre-wrap',
        //   overflow: 'hidden',
        //   textOverflow: 'ellipsis',
        // },
        content: 'Chart',
      },
    },
  };

  var config15 = {
    data: chartList15,
    xField: 'year',
    yField: 'gdp',
    seriesField: 'name',
    yAxis: {
      label: {
        formatter: function formatter(v) {
          return ''.concat((v / 1000000000).toFixed(1), ' B');
        },
      },
    },
    legend: { position: 'top' },
    smooth: true,
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000,
      },
    },
  };

  var config16 = {
    data: chartList16,
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    yAxis: {
      label: {
        formatter: function formatter(v) {
          return ''.concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
            return ''.concat(s, ',');
          });
        },
      },
    },
    color: ['#1979C9', '#D62A0D', '#FAA219'],
  };




  return (
    <div className="container">
      <div className="container1">
        <div className="item1"><Pie {...config10} /></div>
        <div className="item2">< Pie {...config9}  /></div>
        <div className="item3"><Line {...config16} /></div>
        <div className="item4"><Bar {...config4} /></div>
        <div className="item5"><Histogram {...config5} /></div>
        <div className="item6"><Facet {...config6} /></div>
      </div>
      <div className="container2">
        <div className="item7"><Column {...config2} /></div>
        <div className="item8"><Gauge {...config8} /></div>
        <div className="item9"><Liquid {...config7}/></div>
        <div className="item10"><Column {...config3} /></div>
      </div>
      <div className="container3">
        <div className="item11"><Line {...config15} /></div>
        <div className="item12"><Column {...config12} /></div>
      </div>
      <div className="container4">
        <div className="item14"><Pie {...config13} /></div>
        <div className="item15"><Column {...config11} /></div>
        <div className="item16"><Line {...config1} /></div>
      </div>
    </div>
  );
};
export default Page;