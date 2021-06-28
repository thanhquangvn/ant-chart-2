import React, { useState, useEffect } from 'react';
import { Histogram } from '@ant-design/charts';

const DemoHistogram = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function asyncFetch() {
        try {
          const requestUrl = "https://gw.alipayobjects.com/os/antfincdn/RoliHq%2453S/histogram.json";
          const response = await fetch(requestUrl);
          const responseJSON = await response.json();
          setData(responseJSON);
        } catch (error) {
          console.log('Failed to fetch: ', error.message);
        }
      }
    asyncFetch();
  }, []);
//   const asyncFetch = () => {
//     fetch('https://gw.alipayobjects.com/os/antfincdn/RoliHq%2453S/histogram.json')
//       .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => {
//         console.log('fetch data failed', error);
//       });
//   };

  var config = {
    data: data,
    binField: 'value',
    binWidth: 2,
  };
  return <Histogram {...config} />;
};

export default DemoHistogram;