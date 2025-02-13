"use client"

import { useState } from "react"
import "./styles.css"
import { Header, Sidebar } from "./index.jsx"

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="app">
      <Sidebar sidebarOpen={sidebarOpen} />
      <main>
        <div className="main-content">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="content">
            {/* Investors Marked Card */}
            <h2 className="customize-title">Customize email</h2>
                <p className="customize-description">
                  Train the model with your preferred style at the start. Choose an email variable below or enter one
                  manually. Apply enhancements with a single click.
                </p>
            <div className="stats-card">
              <div className="stats-label">Investors Marked</div>
              <div className="stats-value">1</div>
            </div>

            {/* Main Content */}
            <div className="dashboard-container">
              <div className="customize-section">


                <div className="content-grid">
                  {/* Left Column - Placeholder Boxes */}
                  <div className="placeholder-section">
                    <div className="placeholder-boxes">
                      <div className="placeholder-box" />
                      <div className="placeholder-divider" />
                      <div className="placeholder-box" />
                      <div className="placeholder-divider" />
                      <div className="placeholder-box" />
                    </div>
                    <button className="custom-button">Custom</button>
                  </div>

                  {/* Right Column - Variable Message */}
                  <div className="variable-section">
                    <div className="variable-message">You haven't selected any variable yet.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App