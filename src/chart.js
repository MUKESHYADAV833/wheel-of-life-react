import React from 'react';
import {Pie} from 'react-chartjs-2';
import DragDrop from './new';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4'
      ],
      data:[1,2,3,4,5,6,7,8]
     }
  ]
}


export default class Chart extends React.Component {

  render() {
    return (
      <div>
        <Pie
        data ={state}
          options={{
            title:{
              display:true,
              text:'Wheel Of Life',
              fontSize:30
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}