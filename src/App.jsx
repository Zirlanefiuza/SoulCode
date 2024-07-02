import Blog from './components/blog/Blog'
import Footer from './components/footter/Footer'

function App() {
  
  return (
    <>
      <div>
      <header className="App-header">
        <h1>Bem-vindo ao Meu Blog</h1>
      </header>
        <main>
        <Blog />
      </main>
        <Footer />
      </div>
    </>
  )
}

export default App
