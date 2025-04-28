import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row"
      style={{
        backgroundImage: "url('/assets/background.jpg')", // Replace with the actual path to your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 py-8 bg-white/70">
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://assets-cdn.sredsol.com/logos/logo-new.svg" // Replace with the actual path to your logo
            alt="GeoGebra App Logo"
            className="w-24 h-24 md:w-32 md:h-32 mb-4"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600 text-center">
            Math Explorations
          </h1>
        </div>
        <p className="text-gray-700 text-base md:text-lg max-w-md text-center mb-4">
          Please log in to access interactive applets and tools designed to make learning and teaching mathematics engaging.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Back Home
        </button>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 py-8">
        <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              style: {
                button: {
                  background: '#4A90E2',
                  color: 'white',
                  borderRadius: '4px',
                },
                input: {
                  borderRadius: '4px',
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}