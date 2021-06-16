import React from 'react';
<<<<<<< HEAD
import { Polar} from 'react-chartjs-2';
=======
import { Polar } from 'react-chartjs-2';
>>>>>>> 9e99ac16aee8264cc82c0f9f1ec1ca3bc6bf7d36


class Submitted extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            labels: ["Friends and Family",
                "Relationships",
                "Wealth",
                "Personal and Growth",
                "Health",
                "Fun and Recreation",
                "Possession",
                "Career"
            ],
            datasets: [
                {
                    backgroundColor: [
                        'black',
                        '#C9DE00',
                        '#2FDE00',
                        '#00A6B4',
                        '#6800B4',
                        'pink',
                        'orange',
                        'green'
                    ],
<<<<<<< HEAD
                    data: this.props.dropped
                }
            ]
           
=======
                    //   hoverBackgroundColor: [
                    //   '#501800',
                    //   '#4B5000',
                    //   '#175000',
                    //   '#003350',
                    //   '#35014F'
                    //   ],
                    data: this.props.dropped
                    // data: [2, 4, 6, 8, 10]
                }
            ]
            // maintainAspectRatio: false,
            // responsive: false,
            // labels: ["a", "b", "c", "d"],
            // datasets: [
            //     {
            //         data: this.props.dropped
            //     }
            // ]
>>>>>>> 9e99ac16aee8264cc82c0f9f1ec1ca3bc6bf7d36
        }
    }

    render() {
<<<<<<< HEAD
        console.log(this.state);
        return (
       
            <Polar
                data={this.state}
                options={{
                    legend: {
                        display: true,
                        position: 'right'
                    },
                    scale:{
                        display:false
=======
        // const { data } = this.state.datasets;
        // data = this.props.dropped.map(this.props.dropped);
        // this.setState({ data });
        console.log(this.state);
        return (
            // <svg width="100" height="100">
            //     <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
            // </svg>
            <Polar
                data={this.state}
                options={{
                    title: {
                        display: true,
                        text: 'Wheel Of Life',
                        fontSize: 30
                    },
                    legend: {
                        display: true,
                        position: 'right'
>>>>>>> 9e99ac16aee8264cc82c0f9f1ec1ca3bc6bf7d36
                    }
                }}
            />
        )
    }
}

export default Submitted;