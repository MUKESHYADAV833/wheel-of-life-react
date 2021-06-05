import React, { Component } from 'react'

const styles = {
  left: {
    width: '250px',
    height: '150px',
    border: '1px solid #DCDCDC',
    float: 'left'
  },
  right: {
    width: '250px',
    height: '150px',
    border: '1px solid #DCDCDC',
    float: 'left',
    marginLeft: '40px'
  },
  droppable: {
    margin: '0 auto',
    width: '50%',
    marginTop: '80px'
  },
  para: {
    marginRight: '11px',
    border: '1px solid #DCDCDC',
    padding: '12px 16px',
    borderRadius: '50%',
    width: '15px',
    float: 'left'
  }
}

class DragDrop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { no: 1 },
        { no: 2 },
        { no: 3 },
        { no: 4 },
        { no: 5 },
        { no: 6 },
        { no: 7 },
        { no: 8 },
        { no: 9 },
        { no: 10 }
      ],
      texts1: [
        { text: "Friends and Family" },
        { text: "Relationships" },
        { text: "Wealth" },
        { text: "Personal and Growth" },
        { text: "Health" },
        { text: "Fun and Recreation" },
        { text: "Possession" },
        { text: "Career" }
      ],
      leftContainer: [null,null,null,null,null,null,null,null]
    }
  }

  onDragStart = (e, v) => {
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData("text/plain", v)
  }

  allowDrop = ev => {
    ev.preventDefault();
  }

  onDropTop = e => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    let { leftContainer } = this.state;
    leftContainer.push(data);
    this.setState({ leftContainer });
  }
  render() {
    const { items, leftContainer, rightContainer, texts1, texts2 } = this.state;

    return (
      <div>
        <div style={{ marginTop: '35px' }}>
          <div style={{ display: 'inline-block' }}>
            {
              items.map((item) => {
                return <p style={styles.para} draggable="true" onDragStart={(e) => this.onDragStart(e, item.no)} >{item.no}</p>
              })
            }
          </div>
        </div>
          <div className="parent" onDragOver={this.allowDrop} onDrop={this.onDropTop}>
            {
              leftContainer.map(itm => {
                return (
                  <div className="num">
                    {itm}
                  </div>
                )
              })
            }
            {
              texts1.map(itm => {
                return (
                  <div className="tile">
                    {itm.text}
                  </div>
                )
              })
            }
          </div>
      </div>
    )
  }

}

export default DragDrop;