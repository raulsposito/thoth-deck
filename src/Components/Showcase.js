import React, { Component } from 'react';
import Card from './Card'
// import CardContainer from './CardContainer';
import data from './data'

class Showcase extends Component {

  state = {
    data,
    searchTerm: ''
  }

  componentDidMount() {
    this.generateCards()
  }

  editSearchTerm = (e) => {
    this.setState({ searchTerm: e.target.value})
  }

  dynamicSearch = () => {
    return this.state.data.filter(d => d.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  generateCards = () => {
    return this.state.data.map((data, idx) => <Card key={idx} {...data} />);
  };

	render() {
    // const { data, searchTerm } = this.state
    console.log(this.state.searchTerm)
    console.log('Search:', this.dynamicSearch())
    return (
      <div>
        <input className="search" type='search' value={this.state.searchTerm} onChange={this.editSearchTerm} placeholder={"Search Card"}/>
        <br></br>

        <h2>This is your search:</h2>

        <div className="card-container">{this.state.deck}</div>
      </div>
    )
	}
}

export default Showcase;