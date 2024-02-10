import Plot from 'react-plotly.js'

function RoadSpace(){
return (
      <Plot
        data={[
          {type: 'bar', x: ['Walking','Bicycle','Motorcycle','Bus'], y: [1, 2, 5, 5, 1.4]},
        ]}
        layout={ {
          width: 500, 
          height: 400, 
          title: 'Road Space Consumption by Vechlie Type Compare to Walking',
          font : {
            size: 9,
          }
        }}
      />
    );
}
export default RoadSpace;
