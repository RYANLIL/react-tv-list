import React, { Component } from 'react';
import Intro from '../Intro/intro'
import './App.css';
import './../../containers/Series/series';


class App extends Component {
  state = {
    series: []
  }

  async componentDidMount() {
    try {
      const res = await fetch('http://api.tvmaze.com/search/shows?q=Vikings');
      if(!res.ok){
        throw Error(res.statusText);
      }
      const data = await res.json();
      console.log(data);

    } catch (err){
      console.error(err);
    }

    // // Callback hell fetch
    // fetch('http://api.tvmaze.com/search/shows?q=Vikings')
    // .then(response =>  response.json())
    // .then( json => this.setState({series: json}));

    // const series = ["Vikings","Game of Thrones"];
    // setTimeout(()=> {
    //   this.setState({series});
    // },2000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>          
        </header>
        <Intro message="Here you can find all of your most loved series" />
        The length of series array - {this.state.series.length}
      </div>
    );
  }
}

export default App;
