import React from 'react'
import Back from './Back/Back'
import Calculate from './Calculate/Calculate'
import Change from './Change/Change'
import Club from './Club/Club'
import Header from './Header/Header'
import Landing from './Landing/Landing'
import Latest from './Latest/Latest'
import Logos from './Logos/Logos'
import Slider from './Slider/Slider'
import Slider1 from './Slider1/Slider1'
import Trainer from './Tariner/Trainer'

function Homemain() {
  return (
    <div>
      <Landing/>
      <Header/>
     <Slider1/>
     <Club/>
     <Back/>
     <Slider/>
     <Calculate/>
     <Trainer/>
     <Latest/>
     <Change/>
     <Logos/> 
    </div>
  )
}

export default Homemain
