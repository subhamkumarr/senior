import React from 'react'
import Caseallotment from './components/caseallotment/Caseallotment'
import Performancestst from './components/performancestat/Performancestst'
import Groundlevelhome from './components/groundlevelhome/Groundlevelhome'
import Viewcasepending from './components/viewcasepending/Viewcasepending'
import Viewcasecompleted from './components/viewcasecompleted/Viewcasecompleted'
import Home from './components/home/Home'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/caseallotment",
    element: <Caseallotment />,
  },
  {
    path: "/groundlevelhome",
    element: <Groundlevelhome />,
  },
  {
    path: "/performancestat",
    element: <Performancestst />,
  },
  {
    path: "/viewcasecompleted",
    element: <Viewcasecompleted />,
  },
  {
    path: "/viewcasepending",
    element: <Viewcasepending />,
  },
]);


// const App = () => {
//   return (
//   <>
//   <Caseallotment />
//   <Performancestst />
//   <Groundlevelhome />
//   <Viewcasepending />
//   <Viewcasecompleted />
//   </>
//   )
// }

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App