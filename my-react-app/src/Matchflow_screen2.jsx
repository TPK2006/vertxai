'use client';

import React, { useState } from 'react';
import './styles.css';
import { Header, Sidebar } from './index.jsx';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [visibleExample, setVisibleExample] = useState(null);

  const toggleExampleData = (id) => {
    setVisibleExample(visibleExample === id ? null : id);
  };

  return (
    <div className="app">
            <Sidebar sidebarOpen={sidebarOpen} />
      <main className="main-content">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="content">
          <div className="form-container">
            <div>
              <h1 className="page-title">Founder profile details</h1>
              <p className="description">Complete missing fields manually.</p>
            </div>
            <div className="form-fields-container">
              <div className="placeholder-space"></div>
              <form>
                <div className="form-group">
                  <label className="form-label">Choose your target countries to secure your investment</label>
                  <select className="select-input">
                    <option value="">Select your target countries...</option>
                  </select>
                  <span className="toggle-icon" onClick={() => toggleExampleData('countries')}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 9l-7 7-7-7"/>
                    </svg>
                  </span>
                  <div className={`example-data ${visibleExample === 'countries' ? 'visible' : ''}`} id="countries-example">
                    <p>Example: United States, Canada, Germany</p>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Current traction</label>
                  <select className="select-input">
                    <option value="">Pre-Product Launch</option>
                  </select>
                  <span className="toggle-icon" onClick={() => toggleExampleData('traction')}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 9l-7 7-7-7"/>
                    </svg>
                  </span>
                  <div className={`example-data ${visibleExample === 'traction' ? 'visible' : ''}`} id="traction-example">
                    <p>Example: Pre-Product Launch, Post-Product Launch, Scaling</p>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Required funding</label>
                  <select className="select-input">
                    <option value="">&lt;$100K</option>
                  </select>
                  <span className="toggle-icon" onClick={() => toggleExampleData('funding')}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 9l-7 7-7-7"/>
                    </svg>
                  </span>
                  <div className={`example-data ${visibleExample === 'funding' ? 'visible' : ''}`} id="funding-example">
                    <p>Example: &lt;$100K, $100K-$500K, $500K-$1M</p>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Previous funding</label>
                  <select className="select-input">
                    <option value="">Angel Investment</option>
                  </select>
                  <span className="toggle-icon" onClick={() => toggleExampleData('previous-funding')}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 9l-7 7-7-7"/>
                    </svg>
                  </span>
                  <div className={`example-data ${visibleExample === 'previous-funding' ? 'visible' : ''}`} id="previous-funding-example">
                    <p>Example: Angel Investment, Seed Funding, Series A</p>
                  </div>
                </div>

                <button type="submit" className="run-flow-button">Run flow</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;