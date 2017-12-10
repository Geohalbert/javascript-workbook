'use strict'

class CurrentEQ extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      quakes: [],
      filter: [],
      lessThan: [],
      greaterThan: [],
      total: null,
      average: null,
      std: null
    }
    this.monthGather = this.monthGather.bind(this);
    this.weekGather = this.weekGather.bind(this);
    this.dayGather = this.dayGather.bind(this);
    this.clearData = this.clearData.bind(this);
    this.magGather = this.magGather.bind(this);
    this.magAvg = this.magAvg.bind(this);
  }

  magGather(){
    let quakeList = this.state.results;
    const magList = quakeList.map((quake) => {
      let mag = quake.properties.mag;
      console.log('mag:',mag);
      return mag;
    });
    this.setState({
      quakes: magList,
      total: magList.length
    });
    this.magAvg();
  }

  magAvg(){
    var sum = this.state.quakes.reduce(add, 0);
    function add(a, b) {
      return a + b;
    }
    var avg= sum/(this.state.total);
    this.setState({
      average: avg
    });
    console.log('avg:', this.state.average);
  };

  monthGather() {
    if(this.state.results.length ===0) {
      fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson').then((response) =>{
        console.log("the status of my response", response.status);
        return response.json();
      }).then((data) => {
        console.log("the data is", data);
        console.log("data.features", data.features);
        // console.log("data.features.properties", data.features.properties);
        this.setState({
          results: data.features
        });
        this.magGather();
      });
    };
  }

  weekGather() {
    if(this.state.results.length ===0) {
      fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson').then((response) =>{
        console.log("the status of my response", response.status);
        return response.json();
      }).then((data) => {
        console.log("the data is", data);
        console.log("data.features", data.features);
        // console.log("data.features.properties", data.features.properties);
        this.setState({
          results: data.features
        });
        this.magGather();
      });
    };
  }

  dayGather() {
    if(this.state.results.length ===0) {
      fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson').then((response) =>{
        console.log("the status of my response", response.status);
        return response.json();
      }).then((data) => {
        console.log("the data is", data);
        console.log("data.features", data.features);
        // console.log("data.features.properties", data.features.properties);
        this.setState({
          results: data.features
        });
        this.magGather();
      });
    };
  }

  lessThan(number) {
    const list = this.state.results;
    const newList = [];
    let earthquakes = list.properties.mag;
    while (earthquakes < number) {

    }
  }

  clearData() {
    if(this.state.results.length !==0) {
      this.setState({
        results: []
      });
      console.log('data cleared')
    };
  }
  // markComplete(currentNumber) {
  //   debugger;
  //   let list = this.state.results;
  //   list.splice(currentNumber, 1);
  //   this.setState({
  //     results: list
  //   });
  // }

  render() {
    return(
      <div>
        <div className="row">
          <button  bsStyle="primary" bsSize="large" onClick={this.monthGather}>30 days</button>
          <button  bsStyle="primary" bsSize="large" onClick={this.weekGather}>7 days</button><br></br>
          <button  bsStyle="primary" bsSize="large" onClick={this.dayGather}>24 hours</button>
        </div>
          <button  bsStyle="primary" bsSize="large" onClick={this.clearData}>Clear Data</button>
    </div>
    )
  }
}


ReactDOM.render(<CurrentEQ />, document.getElementById('current'));
