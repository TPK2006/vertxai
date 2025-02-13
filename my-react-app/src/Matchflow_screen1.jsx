'use client';

import React, { useState } from 'react';
import './styles.css';
import { Header, Sidebar } from './index.jsx';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="app">
      <Sidebar sidebarOpen={sidebarOpen} />
      <main className="main-content">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="content">
          <div className="profile-container">
            <h1 className="page-title">Founder profile details</h1>
            <p className="description">
              Sync your profile to auto-fill business details.<br />
              Complete any missing fields manually.
            </p>
            <button className="sync-profile-button">Sync profile</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
