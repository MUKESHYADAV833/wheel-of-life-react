import React from 'react'

class DragDrop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                { no: 1, text: "This is text 1" },
                { no: 2, text: "This is text 2" },
                { no: 3, text: "This is text 3" },
                { no: 4, text: "This is text 4" },
                { no: 5, text: "This is text 3" },
                { no: 6, text: "This is text 3" },
                { no: 7, text: "This is text 3" },
                { no: 8, text: "This is text 3" },
                { no: 9, text: "This is text 3" },
                { no: 10, text: "This is text 3" }
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
            ]
        }
    }

    onDragStart = (e, v) => {
        e.dataTransfer.dropEffect = "move";
        e.dataTransfer.setData("text/plain", v)
    }

    allowDrop = ev => {
        ev.preventDefault();
    }

    onDropLeft = e => {
        e.preventDefault();
        const data = e.dataTransfer.getData("text/plain");
        let { topContainer } = this.state;
        topContainer.push(data);
        this.setState({ topContainer });
    }

    onDropRight = e => {
        e.preventDefault();
        const data = e.dataTransfer.getData("text/plain");
        let { bottomContainer } = this.state;
        bottomContainer.push(data);
        this.setState({ bottomContainer });
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
                    <div className="child1" onDragOver={this.allowDrop} onDrop={this.onDropLeft}>
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
                    <div className="child2" onDragOver={this.allowDrop} onDrop={this.onDropLeft}>
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