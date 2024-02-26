import Plot from 'react-plotly.js'

function RoadSpace(){
return (
      <Plot
        data={[
          {type: 'bar', x: ['Walking','Bicycle','Motorcycle','Car','Bus'], y: [1, 2, 5, 5, 1.4]},
        ]}
        layout={ {
          paper_bgcolor:'rgba(0,0,0,0)',
          width: 500, 
          height: 400, 
          title: 'Relative Space Usage by Transportation Method',
          font : {
            size: 12,
          }
        }}
      />
    );
}
export default RoadSpace;
