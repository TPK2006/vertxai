'use client';

import React, { useState } from 'react';
import './styles.css';
import { Header, Sidebar } from './index.jsx';
import { MoreVertical, RefreshCcw } from 'lucide-react';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const matchedInvestors = [
    { name: 'Donald Powell', company: 'Atlas Fund', status: 'MATCHED' },
    { name: 'Tom Kenny', company: '25madison', status: 'MATCHED' },
    { name: 'Arjun Kapur', company: 'Forecast Labs', status: 'MATCHED' },
  ];

  return (
    <div className="app">
      <Sidebar sidebarOpen={sidebarOpen} />
      <main className="main-content">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="content">
          <div className="pipeline-header">
            <div>
              <h1 className="page-title">Manage your pipeline</h1>
              <p className="pipeline-description">
                Organize, prioritize, and manage your pipeline efficiently to streamline your fundraising efforts.
              </p>
            </div>
            <button className="flow-settings-button">Flow Settings</button>
          </div>

          <div className="scrollable-container">
            <div className="pipeline-sections">
              <div className="pipeline-section">
                <div className="section-header">
                  <div className="section-title">
                    <span>Matched investors (44)</span>
                  </div>
                  <div className="section-actions">
                    <RefreshCcw size={16} className="refresh-icon" />
                    <MoreVertical size={16} />
                  </div>
                </div>
                
                <div className="cards-container">
                  {matchedInvestors.map((investor, index) => (
                    <div key={index} className="investor-card">
                      <div className="card-content">
                        <div className="investor-info">
                          <h3>{investor.name}</h3>
                          <p>{investor.company}</p>
                        </div>
                        <MoreVertical size={16} className="card-menu" />
                      </div>
                      <span className="status-badge">{investor.status}</span>
                    </div>
                  ))}
                </div>
                <div className="pagination">
                  <select className="per-page-select">
                    <option value="10">10</option>
                  </select>
                  <span>per page</span>
                  <div className="page-controls">
                    <button className="page-arrow">←</button>
                    <span>1/5</span>
                    <button className="page-arrow">→</button>
                  </div>
                </div>
              </div>

              {['Emails Scheduled (0)', 'Emails Sent (0)', 'Replied Back (0)', 'Follow up (0)'].map((title, index) => (
                <div key={index} className="pipeline-section">
                  <div className="section-header">
                    <div className="section-title">
                      <span>{title}</span>
                    </div>
                    <div className="section-actions">
                      <RefreshCcw size={16} className="refresh-icon" />
                      <MoreVertical size={16} />
                    </div>
                  </div>
                  <div className="empty-container" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;