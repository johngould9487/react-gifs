import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gifs: [],
      selectedGifId: ""
    }
  }

  search = (query) => {
    giphy('D1IYNo3sx94TONHcgV8Ee7ES9LjoyIeL').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  updateSelected = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return(
      <div>
        <div className="left-scene">
          <SearchBar search={ this.search } updateSelected={ this.updateSelected }/>
          <div className="selected-gif">
            <Gif id={ this.state.selectedGifId }/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={ this.state.gifs } updateSelected={ this.updateSelected }/>
        </div>
      </div>
    );
  }
}

export default App;
