// https://plotly.com/javascript/reference/index/
import React from 'react';
import Plot from 'react-plotly.js';

function CarDeathPieChart({title, values, labels}) {
      var allLabels = [

        ['Car Occupants','Motorcyclists', 'Pedestrians' ],
        ['Car Occupant Death','Car Occupant Injured'],
        ['Pedestrian Death','Pedestrian Injured'],
      ];
      var allValues = [
        // totals
      [2326248, 2326248, 125730],
      [28358, 2297890],
      [8649, 117081],
    ];

    return (

      <Plot
        data = {[{
          values: allValues[0],
          labels: allLabels[0],
          type: 'pie',
          name: 'Accidents',
          domain: {
            row: 1,
            column: 2
          },
          hoverinfo: 'label+percent+name',
          textinfo: 'none'
        },{
          values: allValues[1],
          labels: allLabels[1],
          type: 'pie',
          name: 'Car Injuries and Deaths',
          domain: {
            row: 0,
            column: 1
          },
          hoverinfo: 'label+percent+name',
          textinfo: 'none'
        },{
          values: allValues[2],
          labels: allLabels[2],
          type: 'pie',
          name: 'Pedestrians',
          domain: {
            row: 0,
            column: 0
          },
          hoverinfo: 'label+percent+name',
          textinfo: 'none'
        },
        ]}
        layout = {{
          paper_bgcolor:'rgba(0,0,0,0)',
          height: 400,
          width: 500,
          grid: {rows: 2, columns: 2},
          title: "Accident Injuries and Deaths"
        }}
      />
    );
  }
export default CarDeathPieChart;

