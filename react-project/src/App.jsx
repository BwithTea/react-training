import './App.css'

let language = "JavaScript"
let moon = "🌙"


function Header() {
  return (
    <header>
        <h1>{language} Rocks!</h1>
    </header>
  )
}
function App() {
  return (
    <div>
      <Header />
      <h1>Hello {language.toUpperCase()} {moon}</h1>
    </div>
  )
}

export default App
