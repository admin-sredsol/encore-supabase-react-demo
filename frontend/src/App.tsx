import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';
import GeoGebraApplet from './components/GeoGebraApplet';
import TopNavBar from './components/TopNavBar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import Chat from './components/chat'; // Import the Chat component
import './App.css';

const appletOptions = [
  { id: 'applet1', name: 'Applet 1', filePath: '/constructions/applet1.xml' },
  { id: 'applet2', name: 'Applet 2', filePath: '/constructions/applet2.xml' },
  { id: 'applet3', name: 'Applet 3', filePath: '/constructions/applet3.xml' },
];

function MainApp() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedApplet, setSelectedApplet] = useState(appletOptions[0]);

  useEffect(() => {
    async function getSession() {
      try {
        setLoading(true);
        const { data, error } = await supabase.auth.getSession();
        if (error) throw error;
        setSession(data.session);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    getSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      setSession(null);
    } catch (e: any) {
      setError(e.message);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;

  if (!session) {
    return <LoginPage />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {error && <div className="bg-red-500 text-white p-4">Error: {error}</div>}
      <TopNavBar userEmail={session.user.email} onSignOut={handleSignOut} />
      <div className="flex-grow p-4 flex flex-col md:flex-row">
        {/* GeoGebra Applet Section */}
        <div className="w-full md:w-2/3 mb-4 md:mb-0">
          <div className="geogebra-section">
            <div className="selector mb-4 flex items-center space-x-2">
              <label htmlFor="applet-select" className="block">
                Select an Applet:
              </label>
              <select
                id="applet-select"
                className="border border-gray-300 rounded px-2 py-1"
                onChange={(e) =>
                  setSelectedApplet(
                    appletOptions.find((option) => option.id === e.target.value) ||
                      appletOptions[0]
                  )
                }
              >
                {appletOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
            <GeoGebraApplet
              appletId={selectedApplet.id}
              xmlFilePath={selectedApplet.filePath}
            />
          </div>
        </div>

        {/* Chat Section */}
        <div className="w-full md:w-1/3 md:pl-4">
          <Chat />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<MainApp />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}