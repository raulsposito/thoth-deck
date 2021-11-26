import React from 'react'
import Card from './Card'

const CardContainer = ({ deck }) => {
    return (
        deck && (
        <div className="card-container">
            { deck.map((d, idx) => <Card key={idx} title={d.title} cover={d.cover} content={d.content} />)}
        </div>
        )
    )
}

export default CardContainer