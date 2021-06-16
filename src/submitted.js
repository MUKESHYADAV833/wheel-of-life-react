import React from 'react';
import { Polar } from 'react-chartjs-2';


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
        }
    }

    render() {
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
                    }
                }}
            />
        )
    }
}

export default Submitted;