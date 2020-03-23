
import React from 'react';
import axios from 'axios';

class App extends React.Component {

  state = {
    title: '',
    body: ''
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value
    });
  };

  submit = (event) => {
    event.preventDefault();

    const payload = {
      title: this.state.title,
      body: this.state.body
    };

    //creating POST request
    axios({
      // do not need http://localhost bc of proxy in client package.json
      url: '/api/save',
      method: "POST",
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server!!');
      })
      .catch(() => {
        console.log('SERVER ERROR.....')
      });
  };

  render() {

    console.log("State: ", this.state);

    //JSX
    return(
      <div>
        <h1>Welcome to my App!!</h1>
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
            placeholder="Begin typing body here" 
            name="body" 
            cols="30" 
            rows="10" 
            value= {this.state.body}
            onChange={this.handleChange}

            >

            </textarea>
          </div>

          <button>Submit</button>
        </form>
      </div>
    );
  }

}



export default App;