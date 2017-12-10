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
      stdDev: null
    }
    this.monthGather = this.monthGather.bind(this);
    this.weekGather = this.weekGather.bind(this);
    this.dayGather = this.dayGather.bind(this);
    this.clearData = this.clearData.bind(this);
    this.magGather = this.magGather.bind(this);
    this.average = this.average.bind(this);
    this.standardDeviation = this.standardDeviation.bind(this);
    this.lessThan = this.lessThan.bind(this);
    this.greaterThan = this.greaterThan.bind(this);
  }

  // for filter test:



  lessThan(){
    // Get the value of the input field with id="numb"
    let x = document.getElementById("filter1").value;
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 4.5 || x > 10) {
      alert("Input not valid");
    } else {
      let newList = [];
      let list = this.state.quakes;
      for (var i=0; i<list.length;i++){
        let equake = list[i];
        if (equake > x) {
          newList.push(equake);
        }
      }
    }
    console.log('newList:',newList);
    this.setState({
      lessThan: newList
    });
  }

  greaterThan(){
    // Get the value of the input field with id="numb"
    let x = document.getElementById("filter2").value;
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 4.5 || x > 10) {
      alert("Input not valid");
    } else {
      let newList = [];
      let list = this.state.quakes;
      for (var i=0; i<list.length;i++){
        let equake = list[i];
        if (equake < x) {
          newList.push(equake);
        }
      }
    }
    console.log('newList:',newList);
    this.setState({
      greaterThan: newList
    });
  }

  standardDeviation(values){
    var avg = this.average(values);
    console.log('avg:',avg);
    var squareDiffs = values.map((value) => {
      var diff = value - avg;
      var sqrDiff = diff * diff;
      return sqrDiff;
    });
    var avgSquareDiff = this.average(squareDiffs);
    var stdDev = Math.sqrt(avgSquareDiff);
    this.setState({
      stdDev: stdDev,
      average: avg
    })
  }

  average(data){
    var sum = data.reduce((sum, value) => {
      return sum + value;
    }, 0);
    var avg = sum / data.length;
    return avg;
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
    this.standardDeviation(this.state.quakes);
    console.log('this.state:', this.state)
  }

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


  clearData() {
    if(this.state.results.length !==0) {
      this.setState({
        results: [],
        quakes: [],
        filter: [],
        lessThan: [],
        greaterThan: [],
        total: null,
        average: null,
        stdDev: null
      });
      console.log('data cleared')
    };
  }

  render() {
    return(
      <div>
        <div className="row">
          <button onClick={this.monthGather}>30 days</button>
          <button onClick={this.weekGather}>7 days</button>
          <button onClick={this.dayGather}>24 hours</button>
        </div>
        <form>
          <div className="form-group">
            <label>Filter magnitudes less than</label>
            <input id="filter1"></input>
            <button onClick={this.lessThan}>Filter</button>
          </div>
          <div className="form-group">
            <label>Filter magnitudes greater than</label>
            <input id="filter2"></input>
            <button onClick={this.greaterThan}>Filter</button>
          </div>
        </form>
        <div className="col">
          <div>Total:{this.state.total}</div>
          <div>Average magnitude:{this.state.average}</div>
          <div>Standard Dev:{this.state.stdDev}</div>
        </div>
          <button onClick={this.clearData}>Clear Data</button>
    </div>
    )
  }
}


ReactDOM.render(<CurrentEQ />, document.getElementById('current'));
