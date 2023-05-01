import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import ExistingUser from './components/ExistingUser'
import NewUser from './components/NewUser'
import Welcome from './components/Welcome'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const queryClient = new QueryClient();


  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/existing-user' element={<ExistingUser />} />
          <Route path='/new-user' element={<NewUser />} />


        </Routes>
      </Router>
    </div>
    </QueryClientProvider>
  )
}

export default App
