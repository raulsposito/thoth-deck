import React from 'react'
import Card from './Card'

const CardContainer = ({ deck }) => {
    return (
        deck && (
        <div>
            { deck.map((d, idx) => <Card key={idx} title={d.title} cover={d.cover} />)}
        </div>
        )
    )
}

export default CardContainer