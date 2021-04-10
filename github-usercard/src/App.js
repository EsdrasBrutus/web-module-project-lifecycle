import './App.css';
import axios from 'axios'
import React from 'react';
import logo from './assets/githublogo.png'
import Card from './styled/Card'

const URL = 'https://api.github.com/users/';
const myURL = URL + 'EsdrasBrutus';
const unkownUser = {
  "login": ' Github User not Found',
  "id": 0,
  "avatar_url": "https://www.aepint.nl/wp-content/uploads/2014/12/No_image_available-260x220.jpg",
  "name": '',
  "location": '',
  "bio": 'please check the spelling and try again',
  "public_repos": 0,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
}

class App extends React.Component{
  constructor(){
    super();
    this.state ={
      user: {},
      username: ''
    }
  }

  componentDidMount(){
    axios.get(myURL)
    .then((res)=> {
      this.setState({...this.state,
      user: res.data})
     })
    .catch(err=>console.log(err))
  }

  changeHandler = evt =>{
    this.setState({...this.state,
      username: evt.target.value.replace(/\s+/g, '')
    })
  }

  fetchUser = () =>{
    axios.get(URL +`${this.state.username}`)
    .then(res => {
      this.setState({ ...this.state, user: res.data })
    })
    .catch(this.setState({...this.state,
      user : unkownUser})); 
  }

  render(){
    return(
      <div className='App'>
        <header className='header'>
          <img src={logo} className='logo' alt='logo' />
          <input 
            value={this.state.username} 
            onChange={this.changeHandler} 
            type='text' />
          <button onClick={this.fetchUser}>Search</button>
        </header>
        <Card>
          <img className='avatar' alt='avatar' src={this.state.user.avatar_url} />
          <h1>{this.state.user.login}</h1>
          <h3>{this.state.user.name}</h3>
          <h5>{this.state.user.bio}</h5>
          <p>Located in: {this.state.user.location}</p>
          <p>Followers: {this.state.user.followers}</p>
          <p>Following: {this.state.user.following}</p>
          <p>Num. of public Repos: {this.state.user.public_repos}</p>
          <img className='graph' src={`http://ghchart.rshah.org/${this.state.user.login}`} alt={`${this.state.user.login} Github chart`} />
        </Card>
        
        
      </div>
    )
  }

}
export default App;
