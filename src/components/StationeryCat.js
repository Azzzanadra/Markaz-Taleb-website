import React from 'react'
import CardItem from './CardItem';
import './SearchResults.css'
import {stationery} from './SearchResults'

function StationeryCat() {
  return (
    <>
      <div className="search-page">
        <section className="search-page-wrapper">
          <div className="search-stat">
              {stationery.filter(val => val.cat === 'stationery').map((pieces, key) => {
                return <CardItem label={pieces.type} src = {pieces.image} key={key} text = {pieces.name}/>
              })}
          </div>
        </section>
      </div>
    </>
  )
}

export default StationeryCat