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
      container: []
    }
  }

  onDragStart = (e, v) => {
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData("text/plain", v);
  }

  allowDrop = ev => {
    ev.preventDefault();
  }

  onDropTop = (e, i) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    let { container } = this.state;
    container[i] = data;
    this.setState({ container });
  }

  render() {
    const { items, container, texts1 } = this.state;
    var tempHtml = [];
    for (var i = 0; i < texts1.length; i++) {
      tempHtml.push(
        <div className="tile">
          <div className="child1" id={"a" + (i + 1)} /*onDragOver={this.allowDrop} onDrop={(e, i) => this.onDropTop.bind(e, i)}*/>10</div>
          <div className="child2" id={this.state.texts1[i].no} onDragOver={this.allowDrop} onDrop={(e, i) => this.onDropTop(e, i)}>
            {this.state.texts1[i].text}
          </div>
        </div>
      )
    }

    // for (var i = 1; i <= texts1.length; i++) {
    //   tempHtml.push(
    //     <div className="tile">
    //       <div className="child1" id={"a" + (i)}>10</div>
    //       <div className="child2" id={this.state.texts1[i-1].no} onDragOver={this.allowDrop} onDrop={(e, id) => this.onDropTop.bind(e, id, i)}>
    //         {this.state.texts1[i-1].text}
    //       </div>
    //     </div>
    //   )
    // }

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
            container.map(itm => {
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