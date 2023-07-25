import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import UserProvider from './contexts/UserContext'
import Welcome from './pages/Auth/Welcome'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ExistingUser from './pages/Auth/ExistingUser'
import NewUser from './pages/Auth/NewUser';
import Dashboard from './pages/Home/Dashboard';
import {Footer} from 'antd-mobile';
import AttendanceDetails from './pages/Detail/AttendanceDetail';
import FellowsipServiceDetails from './pages/Detail/FellowshipServiceDetail';
import BussingDetails from './pages/Detail/BussingDetail';
import PastoralPointDetail from './pages/Detail/PastoralPoint';

function App() {
  const queryClient = new QueryClient();


  return (
    <UserProvider>
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/existing-user' element={<ExistingUser />} />
          <Route path='/new-user' element={<NewUser />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/details/:id' element={<AttendanceDetails />} />
          <Route path='/details2/:id' element={<FellowsipServiceDetails />} />
          <Route path='/details3/:id' element={<BussingDetails />} />
          <Route path='/details4/:id' element={<PastoralPointDetail />} />
        </Routes>
      </Router>
      <Footer label='(c) Anagkazo Lite 2023' style={{position: 'absolute', bottom: 10}}></Footer>
    </div>
    
    </QueryClientProvider>
    </UserProvider>
  )
}

export default App
