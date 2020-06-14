import React, {PureComponent} from 'react';
import axios from 'axios';

class Info extends PureComponent {

	  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }


	render() {
		return (	
	<div className="App">
      <div className="firstName">
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname"/>
      </div>
      <input type="submit" value="Submit"/>
    

    </div>)
	}
		
}


export default Info;
