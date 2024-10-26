// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar'; // Import Navbar
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Retirement from './pages/Retirement';
import IncomeExpenses from './pages/ExpsenseTracker';
import EducationResources from './pages/EducationResources';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar /> {/* Navbar is now imported here */}
        {/* Main Content */}
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/retirement" element={<Retirement />} />
            <Route path="/income-expenses" element={<IncomeExpenses />} />
            <Route path="/EducationResources" element={<EducationResources/>} />
            <Route path="/settings" element={<Settings/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
