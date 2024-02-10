// https://plotly.com/javascript/reference/index/
import React from 'react';
import Plot from 'react-plotly.js';

function PieChart({values, labels}) {
    return (
      <Plot
        data={[
          {
            values: values,
            labels: labels,
            type: 'pie'
          },
        ]}
        layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
      />
    );
  }
export default PieChart;

