import React, { Component } from 'react'

// const styles = {
//   left: {
//     width: '250px',
//     height: '150px',
//     border: '1px solid #DCDCDC',
//     float: 'left'
//   },
//   right: {
//     width: '250px',
//     height: '150px',
//     border: '1px solid #DCDCDC',
//     float: 'left',
//     marginLeft: '40px'
//   },
//   droppable: {
//     margin: '0 auto',
//     width: '50%',
//     marginTop: '80px'
//   },
//   para: {
//     marginRight: '11px',
//     border: '1px solid #DCDCDC',
//     padding: '12px 16px',
//     borderRadius: '50%',
//     width: '15px',
//     float: 'left'
//   }
// }

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
        { no: 1, text: "Friends and Family" },
        { no: 2, text: "Relationships" },
        { no: 3, text: "Wealth" },
        { no: 4, text: "Personal and Growth" },
        { no: 5, text: "Health" },
        { no: 6, text: "Fun and Recreation" },
        { no: 7, text: "Possession" },
        { no: 8, text: "Career" }
      ],
      leftContainer: []
    }
  }

  onDragStart = (e, v) => {
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData("text/plain", v);
    const data = e.dataTransfer.getData("text/plain");
    let { leftContainer } = this.state;
    leftContainer.push(data);
    this.setState({ leftContainer });
  }

  allowDrop = ev => {
    ev.preventDefault();
  }

  onDropTop = (e, id) => {
    e.preventDefault();
  }
  render() {
    const { items, leftContainer, texts1, ids } = this.state;
    var tempHtml=[];
    for( var i = 0 ; i < texts1.length ; i++ ){
      tempHtml.push(<div id={i+1} className="tile" onDragOver={this.allowDrop} onDrop={(e) => this.onDropTop(e, this.state.ids)}>
          {this.state.texts1[i].text}
        </div>)
    }

    return (
      <div>
        <div className="labels">
          {
            items.map((item) => {
              return <p className="num" draggable="true" onDragStart={(e) => this.onDragStart(e, item.no)} >{item.no}</p>
            })
          }
        </div>
        <div className="parent">
          {/* {
            leftContainer.map(itm => {
              return (
                <div className="num">
                  {itm}
                </div>
              )
            })
          } */}
          {tempHtml
            
            // texts1.map(itm => {
              // return (
              //   <div id={this.state.ids} className="tile" onDragOver={this.allowDrop} onDrop={(e) => this.onDropTop(e, this.state.ids)}>
              //     {itm.text}
              //   </div>
              // )
            // })
          }
        </div>
      </div>
    )
  }

}

export default DragDrop;