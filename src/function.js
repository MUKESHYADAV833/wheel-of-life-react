import React from 'react'

class DragDrop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                { no: 1},
                { no: 2},
                { no: 3},
                { no: 4},
                { no: 5},
                { no: 6},
                { no: 7},
                { no: 8},
                { no: 9},
                { no: 10}
            ],
            topContainer: [
                { text: "Friends and Family" },
                { text: "Relationships" },
                { text: "Wealth" },
                { text: "Personal and Growth" }
            ],
            bottomContainer: [
                { text: "Health" },
                { text: "Fun and Recreation" },
                { text: "Possession" },
                { text: "Career" }
            ],
            mark: []
        }
    }

    onDragStart = (e, v) => {
        e.dataTransfer.dropEffect = "copy";
        e.dataTransfer.setData("text", v)
    }

    allowDrop = ev => {
        ev.preventDefault();
    }

    onDropTop = e => {
        e.preventDefault();
        const data = e.dataTransfer.getData("text/plain");
        let { mark } = this.state;
        mark.push(data);
    }

    onDropBottom = e => {
        e.preventDefault();
        const data = e.dataTransfer.getData("text/plain");
        let { bottomContainer } = this.state;
        bottomContainer.push(data);
    }

    render() {
        const { items, topContainer, bottomContainer } = this.state;

        return (
            <div>
                <div style={{ marginTop: '35px' }}>
                    <div className="labels">
                        {
                            items.map((item) => {
                                return <div className="tab" draggable="true" onDragStart={(e) => this.onDragStart(e, item.text)} >{item.no}</div>
                            })
                        }
                    </div>
                </div>
                <div className="parent">
                    <div className="child1" onDragOver={this.allowDrop} onDrop={this.onDropTop}>
                        {
                            topContainer.map(itm => {
                                return (
                                    <div className="tile">
                                        {itm.text}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="child2" onDragOver={this.allowDrop} onDrop={this.onDropBottom}>
                        {
                            bottomContainer.map(itm => {
                                return <div className="tile">{itm.text}</div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default DragDrop;