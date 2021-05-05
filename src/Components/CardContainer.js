import React, { Component } from 'react'
import Card from './Card'

class CardContainer extends Component {
    render() {
        return (
            <div>
                {this.props.title.map(title => <Card title = {title}/>)}
            </div>
        )
    }
}

export default CardContainer