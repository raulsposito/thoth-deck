import React, { Component } from 'react';
import CardContainer from './CardContainer';
import data from './data'

class Showcase extends Component {

  state = {
    searchTerm: ''
  }

  editSearchTerm = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

	render() {
    const filteredCards = data.filter(d => d.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

    return (
      <div>
        <input className="search" type='search' value={this.state.searchTerm} onChange={this.editSearchTerm} placeholder={"Search Card"}/>
        <br/>

        <h2>This is your search:</h2>
        <p>Hover to discover more</p>

        <CardContainer deck={filteredCards} />

      </div>
    )
	}
}

export default Showcase;