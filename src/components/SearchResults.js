import React, {useState} from 'react'
import CardItem from './CardItem';
import './SearchResults.css'

export const stationery = [
  {name: 'قلم أسود', type: 'د.ج 35', cat: 'stationery', image: '../pictures/krishGpen.jpg'},
  {name: 'قلم أزرق', type: 'د.ج 35', cat: 'stationery', image: ''},
  {name: 'قلم أحمر', type: 'د.ج 35', cat: 'stationery', image: ''},
  {name: 'قلم أخضر', type: 'د.ج 35', cat: 'stationery', image: ''},
  {name: 'مدور', type: 'د.ج 30', cat: 'stationery', image: ''},
  {name: 'مسطرة', type: 'د.ج 30', cat: 'stationery', image: ''},
  {name: 'ممحاة', type: 'د.ج 30', cat: 'stationery', image: ''},
  {name: 'كوس', type: 'د.ج 30', cat: 'stationery', image: ''},
  {name: 'كراس 64ص', type: 'د.ج 60', cat: 'note book', image: ''},
  {name: 'كراس 96ص', type: 'د.ج 85', cat: 'note book', image: ''},
  {name: 'كراس 120ص', type: 'د.ج 120', cat: 'note book', image: ''},
  {name: 'كراس 192ص', type: 'د.ج 150', cat: 'note book', image: ''},
  {name: 'كراس 288ص', type: 'د.ج 250', cat: 'note book', image: ''}
]

function SearchResults() {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  
  return (
    <>
      <div className="search-page">
        <section className="search-page-wrapper">
          <div className="search-area">
            <form >
              <input type="text" placeholder='إبحث' onChange={handleChange} value={searchInput}/>
            </form>
          </div>
          <div className="search-results">
              {stationery.filter(val => val.name.includes(searchInput) || (searchInput === '')).map((pieces, key) => {
                return <CardItem label={pieces.type} src = {pieces.image} key={key} text = {pieces.name}/>
              })}
          </div>
        </section>
      </div>
    </>
  )
}

export default SearchResults