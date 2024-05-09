import React from 'react'
import Herosection from './utils/Herosection'
import Aboutsection from './utils/Aboutsection'
import Chooseussection from './utils/Chooseussection'
import Contactsection from './utils/Contactsection'
import Slidersection from './utils/Slidersection'
import Worksection from './utils/Worksection'

function Homepage() {
  return (
    <>
    <Herosection/>
    <Aboutsection/>
    <Worksection/>
    <Chooseussection/>
    <Slidersection/>
    <Contactsection/>
    </>
  )
}

export default Homepage