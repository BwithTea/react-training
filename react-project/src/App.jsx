import './App.css'
import {useState} from 'react'

let clients = 5000
let moon = "🌙"


function Header( {name, year} ) {
  return (
    <header>
        <h1>{name} - Established {year}</h1>
    </header>
  )
}

const sections = ['Residential', 'Commercial', 'Industrial'];

const sectionObj = sections.map( (section,i) => ({
  id: i,
  name: section
}));


function Main({sections}) {
  const [status, setStatus] = useState(false);
  
  return (
    <>
      <img src = "https://github.com/BwithTea.png" alt="Berry's Construction Logo" width={100}/>
      <h2>Berry's Construction is {status ? "Open" : "Closed"} </h2>
      <button onClick={() => setStatus(!status)}>{status ? "Close": "Open"} the Store</button>
      <ul>
        {sections.map( (section) => ( 
          <li key={section.id} style={{listStyleType: "none"}}>{section.name}</li>
        ))}
      </ul>
    </>
  )
}

function App() {
  return (
    <div>
      <Header name="Berry's Construction" year={1998} />
      <Main sections={sectionObj} />
      <h2> Berry's Construction has served over {clients} clients.</h2>   
    </div>
  )
}

export default App
