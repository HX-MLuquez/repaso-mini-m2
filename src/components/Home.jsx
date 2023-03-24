import React from 'react'
import Cards from './Cards'
import Footer from './footer/Footer'

export default function Home({characters}) {
  return (
    <div>
        <h1>Card Maker</h1>
        <Cards characters={characters}></Cards>
        <hr></hr>
        <Footer></Footer>
    </div>
  )
}
