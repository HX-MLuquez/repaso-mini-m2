import React from 'react'
import Cards from './Cards'

export default function Home({characters}) {
  return (
    <div>
        <h1>Home</h1>
        <Cards characters={characters}></Cards>
    </div>
  )
}
