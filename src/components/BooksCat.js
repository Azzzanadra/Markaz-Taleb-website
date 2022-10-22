import React from 'react'
import CardItem from './CardItem';
import './SearchResults.css'
import {stationery} from './SearchResults'

function BookCat () {
    return (
        <>
          <div className="search-page">
            <section className="search-page-wrapper">
              <div className="search-book">
                  {stationery.filter(val => val.cat === 'note book').map((pieces, key) => {
                    return <CardItem label={pieces.type} src = {pieces.image} key={key} text = {pieces.name}/>
                  })}
              </div>
            </section>
          </div>
        </>
      )
}

export default BookCat