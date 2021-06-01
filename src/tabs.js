import React from 'react';

class Tabs extends React.Component{
  onDragStart = (e, id) => {
    console.log('dragstart:', id);
  }
  render() {
    return (
      <div className="labels">
        <div key="t1" draggable onDragStart = {(e) => this.onDragStart(e, "t1")} className="tab">1</div>
        <div key="t2" draggable onDragStart = {(e) => this.onDragStart(e, "t2")} className="tab">2</div>
        <div key="t3" draggable onDragStart = {(e) => this.onDragStart(e, "t3")} className="tab">3</div>
        <div key="t4" draggable onDragStart = {(e) => this.onDragStart(e, "t4")} className="tab">4</div>
        <div key="t5" draggable onDragStart = {(e) => this.onDragStart(e, "t5")} className="tab">5</div>
        <div key="t6" draggable onDragStart = {(e) => this.onDragStart(e, "t6")} className="tab">6</div>
        <div key="t7" draggable onDragStart = {(e) => this.onDragStart(e, "t7")} className="tab">7</div>
        <div key="t8" draggable onDragStart = {(e) => this.onDragStart(e, "t8")} className="tab">8</div>
        <div key="t9" draggable onDragStart = {(e) => this.onDragStart(e, "t9")} className="tab">9</div>
        <div key="t10" draggable onDragStart = {(e) => this.onDragStart(e, "t10")} className="tab">10</div>
      </div>
    );
  }
}
export default Tabs;
