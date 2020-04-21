
import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {

  state = {
    title: '',
    body: '',
    posts: []
  };

  componentDidMount = () => {
    this.getBlogPost();
  }

  getBlogPost = () => {

    axios.get('/api')
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log('Data Has been recieved!!');
      })
      .catch(() => {
        alert('No data has been received');
      })
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  submit = (event) => {
    event.preventDefault();

    const payload = {
      title: this.state.title,
      body: this.state.body
    };

    //creating POST request
    axios({
      // do not need http: //localhost bc of proxy in client package.json
      url: '/api/save',
      method: "POST",
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server!!');
        this.resetUserInputs();
        this.getBlogPost();
      })
      .catch(() => {
        console.log('SERVER ERROR.....')
      });
  };

  resetUserInputs = () => {
    this.setState({
      title: '',
      body: ''
    });
  };


  // function that displays user post
  displayBlogPost = (posts) => {

    if (!posts.length) return null;

    return posts.map((post, index) => (
      <div key={index} className="blog-post_display">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    ));
  };


  render() {

    console.log("State: ", this.state);

    //JSX
    return(
      <div className="app">
        
        <form onSubmit={this.submit}>
          <div className='form-input'>
            <input
            type="text"
            name="title"
            placeholder=" Enter Title Here"
            value={this.state.title}
            onChange={this.handleChange}
            />
          </div>
          <div className='form-input'>
            <textarea 
            placeholder="Begin typing here" 
            name="body" 
            cols="30" 
            rows="10" 
            value= {this.state.body}
            onChange={this.handleChange}

            >

            </textarea>
          </div>

          <button className="submit">Submit</button>
        </form>
        
        <div className="blog-post">
          {this.displayBlogPost(this.state.posts)}
        </div>

      </div>
    );
  }

}



export default App;