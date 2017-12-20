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
      stdDev: null,
      bins: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
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
    this.bins = this.bins.bind(this)
  }

// removes the earthquakes with magnitudes less than the user input
  lessThan(){
    // Get the value of the input field with id="filter1"
    let y = document.getElementById("filter1").value;
    let x = Number(y);
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x <= 4.5 || x > 10) {
      alert("Input not valid");
    } else {
      let newList1 = [];
      let filtList1 = this.state.filter;
      let list1 = this.state.quakes;
      for (var i=0; i<list1.length;i++){
        let equake = list1[i];
        if (equake >= x) {
          newList1.push(equake);
        } else {
          filtList1.push(equake);
        }
        // console.log('newList1.length:',newList1.length, 'filtList1.length:', filtList1.length);
        let newSTD = this.standardDeviation(newList1);
        let newBin = this.bins(newList1);
        this.setState({
          quakes: newList1 ,
          lessThan: newList1 ,
          filter: filtList1 ,
          total: newList1.length,
        });
      }
    }
  }

// removes the earthquakes with magnitudes greater than the user input
  greaterThan(){
    // Get the value of the input field with id="filter1"
    let y = document.getElementById("filter2").value;
    let x = Number(y);
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x <= 4.5 || x > 10) {
      alert("Input not valid");
    } else {
      let newList2 = [];
      let filtList2 = this.state.filter;
      let list2 = this.state.quakes;
      for (var i=0; i<list2.length;i++){
        let equake = list2[i];
        if (equake <= x) {
          newList2.push(equake);
        } else {
          filtList2.push(equake);
        }
        // console.log('newList2.length:',newList2.length, 'filtList2.length:', filtList2.length);
        let newSTD = this.standardDeviation(newList2);
        let newBin = this.bins(newList2);
        this.setState({
          quakes: newList2 ,
          lessThan: newList2 ,
          filter: filtList2 ,
          total: newList2.length,
        });
      }
    }
  }

  //counts the total number of earthquakes that have specific magnitudes
  bins(data){
    // console.log('test');
    var m45 = 0;
    var m46 = 0;
    var m47 = 0;
    var m48 = 0;
    var m49 = 0;
    var m50 = 0;
    var m51 = 0;
    var m52 = 0;
    var m53 = 0;
    var m54 = 0;
    var m55 = 0;
    var m56 = 0;
    var m57 = 0;
    var m58 = 0;
    var m59 = 0;
    var m60 = 0;
    var m61 = 0;
    var m62 = 0;
    var m63 = 0;
    var m64 = 0;
    var m65 = 0;
    var m66 = 0;
    var m67 = 0;
    var m68 = 0;
    var m69 = 0;
    var m7plus = 0;
    for(var i=0; i<data.length; i++) {
      // console.log('test1');
      let tremor = Number(data[i]);
      if (tremor === 4.5) {
        m45++
      } else if (tremor === 4.6) {
        m46++
      }else if (tremor === 4.7) {
        m47++
      }else if (tremor === 4.8) {
        m48++
      }else if (tremor === 4.9) {
        m49++
      }else if (tremor === 5.0) {
        m50++
      }else if (tremor === 5.1) {
        m51++
      }else if (tremor === 5.2) {
        m52++
      }else if (tremor === 5.3) {
        m53++
      }else if (tremor === 5.4) {
        m54++
      }else if (tremor === 5.5) {
        m55++
      }else if (tremor === 5.6) {
        m56++
      }else if (tremor === 5.7) {
        m57++
      }else if (tremor === 5.8) {
        m58++
      }else if (tremor === 5.9) {
        m59++
      }else if (tremor === 6.0) {
        m60++
      }else if (tremor === 6.1) {
        m61++
      }else if (tremor === 6.2) {
        m62++
      }else if (tremor === 6.3) {
        m63++
      }else if (tremor === 6.4) {
        m64++
      }else if (tremor === 6.5) {
        m65++
      }else if (tremor === 6.6) {
        m66++
      }else if (tremor === 6.7) {
        m67++
      }else if (tremor === 6.8) {
        m68++
      }else if (tremor === 6.9) {
        m69++
      }else if (tremor >= 7.0) {
        m7plus++
      }
      // console.log('4.5:', m45, '4.6:', m46, "m47", m47)

      let binResult = [m45, m46, m47, m48, m49, m50, m51, m52, m53, m54, m55, m56, m57, m58, m59, m60, m61, m62, m63, m64, m65, m66, m67, m68, m69, m7plus];
      // console.log("binResult:", binResult);
      this.setState({
        bins: binResult
      })
    }
  }

// calculates the standard deviation in the dataset
  standardDeviation(values){
    var avg = this.average(values);
    // console.log('avg:',avg);
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

//averages the dataset
  average(data){
    var sum = data.reduce((sum, value) => {
      return sum + value;
    }, 0);
    var avg = sum / data.length;
    return avg;
  }

//finds and stores the magnitude of each returned earthquake
  magGather(){
    let quakeList = this.state.results;
    const magList = quakeList.map((quake) => {
      let mag = quake.properties.mag;
      // console.log('mag:',mag);
      return mag;
    });
    this.setState({
      quakes: magList,
      total: magList.length
    });
    this.bins(this.state.quakes);
    this.standardDeviation(this.state.quakes);
    console.log('this.state:', this.state)
  }


//fetches the data for earthquakes with the last month
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
    } else {
      alert("clear data to create a new dataset");
    };
  }

//fetches the data for earthquakes with the last week
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
    } else {
      alert("clear data to create a new dataset");
    };
  }


//fetches the data for earthquakes with the last 24 hours
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
    } else {
      alert("clear data to create a new dataset");
    };
  }

//clears the state completely
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
        stdDev: null,
        bins: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      });
      console.log('data cleared')
    };
  }

  render() {
    return(
      <div>
      <div id='top'>Global Earthquake Database</div>
      <div id="gather">
        <div>Select Time Range</div>
        <div className="row">
            <button className="btn" onClick={this.monthGather}>30 days</button>
            <button className='btn' onClick={this.weekGather}>7 days</button>
            <button className='btn' onClick={this.dayGather}>24 hours</button>
        </div>
      </div>
          <div className="form-group">
            <label>Filter magnitudes less than</label>
            <input id="filter1"></input>
            <button className="btn" onClick={this.lessThan}>Filter</button>
          </div>
          <div className="form-group">
            <label>Filter magnitudes greater than </label>
            <input id="filter2"></input>
            <button className="btn" onClick={this.greaterThan}>Filter</button>
          </div>
          <div id='bins'>
            <div id='gather'> Earthquake count by magnitude:</div>
            <div className="row">
              <div id="count"> 4.5: {this.state.bins[0]}</div>
              <div id="count"> 4.6: {this.state.bins[1]}</div>
              <div id="count"> 4.7: {this.state.bins[2]}</div>
              <div id="count"> 4.8: {this.state.bins[3]}</div>
              <div id="count"> 4.9: {this.state.bins[4]}</div>
            </div>
            <div className="row">
              <div id="count"> 5.0: {this.state.bins[5]}</div>
              <div id="count"> 5.1: {this.state.bins[6]}</div>
              <div id="count"> 5.2: {this.state.bins[7]}</div>
              <div id="count"> 5.3: {this.state.bins[8]}</div>
              <div id="count"> 5.4: {this.state.bins[9]}</div>
              <div id="count"> 5.5: {this.state.bins[10]}</div>
              <div id="count"> 5.6: {this.state.bins[11]}</div>
              <div id="count"> 5.7: {this.state.bins[12]}</div>
              <div id="count"> 5.8: {this.state.bins[13]}</div>
              <div id="count"> 5.9: {this.state.bins[14]}</div>
            </div>
            <div className="row">
              <div id="count"> 6.0: {this.state.bins[15]}</div>
              <div id="count"> 6.1: {this.state.bins[16]}</div>
              <div id="count"> 6.2: {this.state.bins[17]}</div>
              <div id="count"> 6.3: {this.state.bins[18]}</div>
              <div id="count"> 6.4: {this.state.bins[19]}</div>
              <div id="count"> 6.5: {this.state.bins[20]}</div>
              <div id="count"> 6.6: {this.state.bins[21]}</div>
              <div id="count"> 6.7: {this.state.bins[22]}</div>
              <div id="count"> 6.8: {this.state.bins[23]}</div>
              <div id="count"> 6.9: {this.state.bins[24]}</div>
            </div>
            <div className="row">
              <div id="count"> 7.0 or greater: {this.state.bins[25]}</div>
            </div>
          </div>
        <div className="col">
          <div>Total: {this.state.total}</div>
          <div>Average magnitude: {this.state.average}</div>
          <div>Standard Dev: {this.state.stdDev}</div>
        </div>
          <button className="btn" onClick={this.clearData}>Clear Data</button>
    </div>
    )
  }
}


ReactDOM.render(<CurrentEQ />, document.getElementById('current'));
