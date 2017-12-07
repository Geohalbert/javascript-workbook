'use strict';

class ListUsers extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      users: []
    }
    this.initialDraw = this.initialDraw.bind(this);
  }

// function that uses fetch to assign data to the state ONLY if it has no previous data
  initialDraw(){
    if(this.state.users.length ===0) {
      let userList = [];
      fetch('https://reqres.in/api/users?page=2').then((response) =>{
      // console.log("the status of my response", response.status);
        return response.json();
      }).then((data) => {
      // console.log("the data is", data);
      // console.log("list of users", data.data)
        this.setState({
          users: data.data
        });
      });
    }
  }

// render takes the data acquired from the initialDraw function and creates a div and img tag for each user
  render(){
    this.initialDraw()
    return(
        <ul>
        {
          this.state.users.map((item, index) => {
            return <li key={index}>ID: {item.id}, Name: {item.last_name}, {item.first_name} <img src={item.avatar}></img></li>
          })
        }
      </ul>
    )
  }
}

ReactDOM.render(<ListUsers />, document.getElementById('fetch'));
