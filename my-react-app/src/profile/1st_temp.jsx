"use client"

import { useState } from "react"
import "./styles.css"
import { Header, Sidebar } from "./index.jsx"

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const tools = [
    {
      title: "Equity and Cap Table Management",
      link: "/equity"
    },
    {
      title: "Startup Valuation",
      link: "/valuation"
    },
    {
      title: "Accounting and Finance",
      link: "/accounting"
    },
    {
      title: "Convertible Notes & SAFE",
      link: "/convertible"
    },
    {
      title: "Break-Even Analysis",
      link: "/breakeven"
    },
    {
      title: "Pitch Deck Templates",
      link: "/pitch-deck"
    }
  ]

  return (
    <div className="app">
      <Sidebar sidebarOpen={sidebarOpen} />
      <main>
        <div className="main-content">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="content">
            <div className="tools-grid">
              {tools.map((tool, index) => (
                <a 
                  key={index} 
                  href={tool.link}
                  className="tool-card"
                >
                  <h2 className="tool-title">{tool.title}</h2>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
