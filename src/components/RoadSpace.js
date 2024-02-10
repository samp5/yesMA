import Plot from 'react-plotly.js'

function RoadSpace(){
return (
      <Plot
        data={[
          {type: 'bar', x: ['Walking','Bicycle','Motorcycle','Bus'], y: [1, 2, 5, 5, 1.4]},
        ]}
        layout={ {
          paper_bgcolor:'rgba(0,0,0,0)',
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
