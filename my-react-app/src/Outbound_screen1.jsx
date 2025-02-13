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
            <div className="email-container">
              <h1 className="email-title">Connect your email</h1>
              <p className="email-description">
                Integrate your email to automate investor outreach. You can connect only one email service at a time.
              </p>

              <div className="email-cards">
                {/* Outlook Card */}
                <div className="email-card" style={{ border: "1px solid var(--border-color)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="email-icon"
                    >
                      <path
                        d="M20 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V5C22 3.89543 21.1046 3 20 3Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 9.5L12 16L22 9.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 5L12 10L20 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 10V16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="email-service">Outlook</span>
                  </div>
                  <button className="connect-button">Connect</button>
                </div>

                {/* SMTP Card */}
                <div className="email-card" style={{ border: "1px solid var(--border-color)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="email-icon"
                    >
                      <path
                        d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 6L12 13L22 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="email-service">SMTP</span>
                  </div>
                  <button className="connect-button">Connect</button>
                </div>

                {/* Gmail Card */}
                <div className="email-card" style={{ border: "1px solid var(--border-color)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="email-icon"
                    >
                      <path
                        d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 9.5L12 16L22 9.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="email-service">Gmail</span>
                  </div>
                  <button className="connect-button">Connect</button>
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