import React, { Component } from 'react';
import Card from './Card'
import Data from './data'

class Showcase extends Component {

  state = {
    Data,
    searchTerm: ''
  }

  editSearchTerm = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  dynamicSearch = () => {
    return this.state.data.filter(data => data.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  generateCards = () => {
    return Data.map((data, idx) => <Card key={idx} {...data} />);
  };


	render() {
		return (
      <div>
        <input className="search" type='text' value={this.state.searchTerm} onChange={this.editSearchTerm} placeholder={"Search Card"}/>
        <br></br>

        <div className="card-container">{this.generateCards()}</div>;
      </div>
    )
	}
}

export default Showcase;