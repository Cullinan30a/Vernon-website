import React from 'react';
import './App.css';

function App() {
  return (
    <div style={{ 
      padding: '40px', 
      textAlign: 'center', 
      background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '3em', marginBottom: '20px' }}>
        🎉 Vernon Cheuk 卓君風 v6.0
      </h1>
      
      <div style={{ 
        background: 'rgba(255,255,255,0.1)', 
        padding: '30px', 
        borderRadius: '20px',
        backdropFilter: 'blur(10px)',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2>聚焦香港保險新局</h2>
        <p style={{ fontSize: '1.2em', margin: '20px 0' }}>
          宏利區域總監 | 35年保險業經驗 | GAMA前會長
        </p>
        
        <div style={{ margin: '30px 0' }}>
          <div style={{ 
            background: 'rgba(255,255,255,0.2)', 
            padding: '15px', 
            borderRadius: '10px',
            display: 'inline-block',
            margin: '10px'
          }}>
            ✅ React App Loading Successfully
          </div>
          <div style={{ 
            background: 'rgba(255,255,255,0.2)', 
            padding: '15px', 
            borderRadius: '10px',
            display: 'inline-block',
            margin: '10px'
          }}>
            📅 2025.08.05
          </div>
        </div>
        
        <p>
          This simplified version confirms the React app is working.<br/>
          Full version will be restored once deployment is verified.
        </p>
        
        <div style={{ marginTop: '30px' }}>
          <a 
            href="https://youtube.com/shorts/abc123" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              padding: '15px 30px',
              borderRadius: '10px',
              textDecoration: 'none',
              display: 'inline-block',
              fontSize: '1.1em'
            }}
          >
            🎬 聚焦香港保險新局 (YouTube Shorts)
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
