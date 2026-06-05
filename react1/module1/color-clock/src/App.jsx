import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { format } from 'date-fns';
import './App.css'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Updates the time every single second
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleans up the timer when the component re-renders or closes
    return () => clearInterval(timerId);
  }, []);

  const hours = format(currentTime, 'hh');
  const minutes = format(currentTime, 'mm');
  const seconds = format(currentTime, 'ss');
  const amPm = format(currentTime, 'a');

  // Inline CSS Styles for a modern layout
  const containerStyle = {
    fontFamily: '"Segoe UI", Roboto, sans-serif',
    textAlign: 'center',
    marginTop: '60px',
  };

  const clockWrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15px',
    marginTop: '30px',
  };

  // Base style for each time block
  const blockStyle = {
    padding: '20px 25px',
    borderRadius: '12px',
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#ffffff',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    minWidth: '70px',
  };

  // Color Palette definitions (Avoiding black, white, red, and blue)
  const hourStyle = { ...blockStyle, backgroundColor: '#059669' }; // Emerald Green
  const minuteStyle = { ...blockStyle, backgroundColor: '#f97316' }; // Vibrant Orange
  const secondStyle = { ...blockStyle, backgroundColor: '#7c3aed' }; // Deep Violet
  const amPmStyle = { 
    fontSize: '1.5rem', 
    fontWeight: 'bold', 
    color: '#4b5563',
    alignSelf: 'flex-end',
    marginBottom: '10px'
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#374151' }}>Digital Color Clock</h1>
      <h2>{format(currentTime, 'EEEE, MMMM dd, yyyy')}</h2>
      
      {/* 2. Visual Time Container with Separate Boxes */}
      <div style={clockWrapperStyle}>
        
        {/* Hours Box */}
        <div style={hourStyle}>
          {hours}
          <div style={{ fontSize: '0.9rem', fontWeight: 'normal', marginTop: '5px' }}>HOURS</div>
        </div>

        <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#9ca3af' }}>:</span>

        {/* Minutes Box */}
        <div style={minuteStyle}>
          {minutes}
          <div style={{ fontSize: '0.9rem', fontWeight: 'normal', marginTop: '5px' }}>MINS</div>
        </div>

        <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#9ca3af' }}>:</span>

        {/* Seconds Box */}
        <div style={secondStyle}>
          {seconds}
          <div style={{ fontSize: '0.9rem', fontWeight: 'normal', marginTop: '5px' }}>SECS</div>
        </div>

        {/* AM / PM Marker */}
        <div style={amPmStyle}>{amPm}</div>
      </div>

      <p style={{ marginTop: '40px', color: '#6b7280' }}>
        <strong>Time Zone:</strong> {Intl.DateTimeFormat().resolvedOptions().timeZone}
      </p>
    </div>
  );
}

export default App
