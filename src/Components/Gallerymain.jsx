import React from 'react'
import Gallery from './Gallery/Gallery'
import Gallery3 from './Gallery3/Gallery3'
import Gallery2 from './Gallery2/Gallery2'
import Header from './Header/Header'
function Gallerymain() {
  return (
    <div>
        <Header/>
        <Gallery/>
        <Gallery2/>
        <Gallery3/>
    </div>
  )
}

export default Gallerymain