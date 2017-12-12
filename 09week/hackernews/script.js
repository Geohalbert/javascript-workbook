'use strict';

class Hacker extends React.Component {
  	constructor(props) {
  		super(props);
  		this.state = {
  			list: [] ,
        filtList: []
  		}
      this.search = this.search.bind(this)

  	}

//fetches data and converts it into json format, eventually transferring into state
  componentWillMount() {
    const articles = [];
    const newList = [];
    //fetches the id's of the current popular articles and sends them to the 'articles' list
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').then((response) =>{
      console.log("the status of my response", response.status);
      return response.json();
    }).then((data) => {
      //now we use the ids of the top 30 articles to find json data for each article with another fetch
  		for (let i=0; i<31; i++) {
        const id = data[i];
      	const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty `;
  			const options = {
  				method: 'GET',
  				headers: {
  					'content-type': 'application/json'
  				}
  			}
  			fetch(url, options).then((result) => {
  			return result.json();
    }).then((newResponse) => {
      //data for each article is pushed to the 'newList' list
      console.log('newest response:',newResponse);
    	newList.push(newResponse);
      this.setState({
        list: newList ,
        filtList: newList
      })
    })
      console.log('newList:',newList)
  }
    })
  }

  //takes text entered by user and attempts to match text within each article's title
    search(){
      let text = document.getElementById("filter1").value
      const articles = this.state.list.filter((item) => {
        return (item.title && item.title.indexOf(text) > -1)
      })
      console.log(articles);
      this.setState({
        filtList: articles
      })
    };


  	render(){
  		return(
        <div>
  			<ol>
          {/* creates list of the top 30 articles on the filter list  */}
  			{
  				this.state.filtList.map((item, index) => {
  					return <li key={index}><a href={item.url} alt='{item.url}'>{item.title}</a><br />
  					By: {item.by} <br />
            </li>
  				})
  			}
  			</ol>
        <div className="form-group">
          <label>Search</label>
          <input id="filter1"></input>
          <button onClick={this.search}>Submit</button>
        </div>
      </div>
  		)
  	}
}

ReactDOM.render(<Hacker />, document.getElementById('hacker-news'));
