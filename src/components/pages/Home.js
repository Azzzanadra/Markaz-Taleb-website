import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import Intro from '../Intro'
import Search from '../Search'

function Home() {
  return (
    <>
        <Intro />
        <Search />
        <Footer />
    </>
  )
}

export default Home