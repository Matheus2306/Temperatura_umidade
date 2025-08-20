import './App.css'
import Header from './components/Header'

function App() {

  return (
    <div className='container-fluid py-4'>
      <div className="row justify-content-center">
        <div className='col-12 col-xl-10'>
          <Header isConnected={true}/>
        </div>
      </div>
    </div>
  )
}

export default App
