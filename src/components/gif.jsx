import React, { Component } from 'react';

class Gif extends Component {
  handleClick = (event) => {
    // console.log(event.target.src.slice(30,-10));
    // console.log(event.target.src);
    this.props.updateSelected(event.target.src.slice(30,-10));
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick}/>
    );
  }
}

export default Gif;
