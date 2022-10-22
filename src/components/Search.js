import React from 'react'
import {Button} from './Button'
import './Search.css'

function Search() {
    const link = ['/','/search-page'];
  return (
    <>
        <section className="search-section">
            <div className="search-wrapper">
                <div className="search-bar">
                    <h3>إبحث عن ما لدينا</h3>
                    <div className="search-bar-actual">
                        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--medium' source={link[1]}>إبحث</Button>
                    </div>
                </div>
                <div className="search-category">
                    <h3>أو إختر من الخيارات</h3>
                    <div className="search-category-select">
                        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--medium' source='/stationery'>أدوات مدرسية</Button>
                        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--medium'>خدمات إلكترونية</Button>
                        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--medium' source='/books'>دفاتر و كراريس</Button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Search