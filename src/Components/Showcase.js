import React, { Component } from 'react';
import Card from './Card'
import CardContainer from './CardContainer';
import data from './data'

class Showcase extends Component {

  state = {
    // data,
    searchTerm: '',
    deck: []
  }

  componentDidMount() {
    const cardDeck = this.generateCards()
    this.setState({ deck: cardDeck})
  }

  editSearchTerm = (e) => {
    this.setState({ searchTerm: e.target.value})
  }

  dynamicSearch = () => {
    return data.filter(d => d.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  generateCards = () => {
    return data.map((data, idx) => <Card key={idx} {...data} />);
  };

	render() {
    // const { data, searchTerm } = this.state
    // console.log(this.state.searchTerm)
    // console.log('Search:', this.dynamicSearch())
    const filteredCards = data.filter(d => d.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

    return (
      <div>
        <input className="search" type='search' value={this.state.searchTerm} onChange={this.editSearchTerm} placeholder={"Search Card"}/>
        <br></br>

        <h2>This is your search:</h2>
        <CardContainer deck={filteredCards} />

        {/* <div className="card-container">{this.generateCards()}</div> */}
      </div>
    )
	}
}

export default Showcase;