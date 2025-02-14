"use client"

import { useState } from "react"
import "./styles.css"
import { Header, Sidebar } from "./index.jsx"
import { Bold, Italic, Underline, Link, Paperclip, Minus, Maximize2, X } from "lucide-react"

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [text, setText] = useState("")
  const [isEnhanced, setIsEnhanced] = useState(false)

  const handleTextChange = (e) => {
    setText(e.target.value)
    setIsEnhanced(e.target.value.trim() !== "")
  }

  return (
    <div className="app">
      <Sidebar sidebarOpen={sidebarOpen} />
      <main>
        <div className="main-content">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="content">
            <div className="page-header">
              <div className="main-header">
                <h1 className="title">Customize email</h1>
                <p className="description">
                  Train the model with your preferred style at the start. Choose an email variable
                  below or enter one manually. Apply enhancements with a single click.
                </p>
              </div>
              
              <div className="stats-card">
                <div className="stats-label">Investors Marked</div>
                <div className="stats-value">1</div>
              </div>
            </div>

            <div className="content-grid">
              {/* Left Column */}
              <div className="templates-section">
                <div className="template-boxes">
                  <div className="template-box"></div>
                  <div className="divider"></div>
                  <div className="template-box"></div>
                  <div className="divider"></div>
                  <div className="template-box"></div>
                  <button className="custom-btn">Custom</button>
                </div>
              </div>

              {/* Right Column */}
              <div className="editor-section">
                <div className="editor-header">
                  <span className="editor-title">Custom Mail</span>
                  <div className="editor-actions">
                    <button className="icon-button">
                      <Minus size={18} />
                    </button>
                    <button className="icon-button">
                      <Maximize2 size={18} />
                    </button>
                    <button className="icon-button">
                      <X size={18} />
                    </button>
                  </div>
                </div>
                <div className="editor-content">
                  <div className="editor-field">
                    <input type="text" placeholder="Subject" className="subject-input" />
                  </div>
                  <div className="editor-toolbar">
                    <button className="toolbar-btn">
                      <Bold size={18} />
                    </button>
                    <button className="toolbar-btn">
                      <Italic size={18} />
                    </button>
                    <button className="toolbar-btn">
                      <Underline size={18} />
                    </button>
                    <button className="toolbar-btn">
                      <Link size={18} />
                    </button>
                    <button className="toolbar-btn">
                      <Paperclip size={18} />
                    </button>
                  </div>
                  <div className="editor-text">
                    <textarea
                      value={text}
                      onChange={handleTextChange}
                      placeholder="Text entered"
                      style={{
                        width: "100%",
                        height: "100%",
                        background: "transparent",
                        border: "none",
                        color: "var(--foreground)",
                        resize: "none",
                      }}
                    />
                    <button className={`enhance-btn ${isEnhanced ? "active" : ""}`}>Enhance</button>
                  </div>
                  <div className="editor-footer">
                    <button className="verify-btn">Verify & Send</button>
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