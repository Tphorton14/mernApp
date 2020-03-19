
import React from 'react';

class App extends React.Component {

  render() {

    //JSX
    return(
      <div>
        <h1>Welcome to my App!!</h1>
        <form>
          <div className='form-input'>
            <input
            type="text"
            name="title"
            placeholder=" Enter Title Here"
            value=""
            onChange={2}
            />
          </div>
          <div className='form-input'>
            <textarea placeholder="Begin typing body here" name="body" cols="30" rows="10" onChange={2}></textarea>
          </div>

          <button>Submit</button>
        </form>
      </div>
    );
  }

}



export default App;