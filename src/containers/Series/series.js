import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList/seriesList'

class Series extends Component {
    state = {
        series: [],
        pop:{}
      }
    
      async componentDidMount() {
        // try {
        //   const res = await fetch('http://api.tvmaze.com/search/shows?q=Vikings');
        //   if(!res.ok){
        //     throw Error(res.statusText);
        //   }
        //   const data = await res.json();
        //   this.setState({series: data});
    
        // } catch (err){
        //   console.error(err);
        // }
    
        // // Callback hell fetch
        // fetch('http://api.tvmaze.com/search/shows?q=Vikings')
        // .then(response =>  response.json())
        // .then( json => this.setState({series: json}));
    
        // const series = ["Vikings","Game of Thrones"];
        // setTimeout(()=> {
        //   this.setState({series});
        // },2000);
      }
      onSeriesInputChange = async e => {
          const {value} = e.target; // value = e.target.value
        try {
            const res = await fetch(`http://api.tvmaze.com/search/shows?q=${value}`);
            if(!res.ok){
              throw Error(res.statusText);
            }
            const data = await res.json();
            this.setState({series: data});
      
          } catch (err){
            console.error(err);
          }
      }

      render() {
        return (
            <div>
                The length of series array - {this.state.series.length}
                <div>
                    <input type="text" onBlur={this.onSeriesInputChange} />
                </div>
                <SeriesList list={this.state.series} />                
            </div>

            
        )

      }
    
}
export default Series;