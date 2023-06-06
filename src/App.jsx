import React from 'react'
import Caseallotment from './components/caseallotment/Caseallotment'
import Performancestst from './components/performancestat/Performancestst'
import Groundlevelhome from './components/groundlevelhome/Groundlevelhome'
import Viewcasepending from './components/viewcasepending/Viewcasepending'
import Viewcasecompleted from './components/viewcasecompleted/Viewcasecompleted'

const App = () => {
  return (
  <>
  <Caseallotment />
  <Performancestst />
  <Groundlevelhome />
  <Viewcasepending />
  <Viewcasecompleted />
  </>
  )
}

export default App