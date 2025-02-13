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
            <div className="header-section">
              <h1>Mark your preferred investors</h1>
              <p>
                Prioritize those who see potential in you.
                <br />
                Rank and select investors for targeted email outreach.
              </p>
            </div>

            <div className="stats-card">
              <div className="stats-label">Investors Marked</div>
              <div className="stats-value">2</div>
            </div>

            <div className="investors-table">
              <div className="table-header">
                <span>Name</span>
                <span>Thesis</span>
                <span>Entry Stage</span>
                <span>Cheque range</span>
                <span>Match Score</span>
                <span></span>
              </div>

              <div className="investor-row">
                <div className="investor-name">
                  <h3>Trind Ventures</h3>
                  <span className="investor-type">VC Firm</span>
                  <button className="view-profile-btn">View full profile</button>
                </div>
                <div className="thesis-text">
                  We invest in European software startups with a consumer or community component, such as marketplaces
                  and platforms.
                </div>
                <div className="stage-badge">Early revenue</div>
                <div>$100K - $1M</div>
                <div className="match-score high">95%</div>
                <button className="toggle-select">✓</button>
              </div>

              <div className="investor-row">
                <div className="investor-name">
                  <h3>NextSTEP</h3>
                  <span className="investor-type">VC Firm</span>
                  <button className="view-profile-btn">View full profile</button>
                </div>
                <div className="thesis-text">
                  We invest in European software startups with a consumer or community component, such as marketplaces
                  and platforms.
                </div>
                <div className="stage-badge">Early revenue</div>
                <div>$100K - $1M</div>
                <div className="match-score medium">80%</div>
                <button className="toggle-select">□</button>
              </div>
            </div>

            <button className="run-flow-btn">Run flow</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
