import { QueryClient, QueryClientProvider } from 'react-query'
// import './App.css'
// import ExistingUser from './components/ExistingUser'
// import NewUser from './components/NewUser'
import Welcome from './components/Welcome'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ExistingUser from './pages/Auth/ExistingUser'
import NewUser from './pages/Auth/NewUser';
import Dashboard from './pages/Home/Dashboard';

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
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
    </QueryClientProvider>
  )
}

export default App
