"use client"

import { useState } from "react"
import "./styles.css"
import { Header, Sidebar } from "./index.jsx"

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [selectedDays, setSelectedDays] = useState(['M'])
  const [timeZone, setTimeZone] = useState("New Delhi (IST, GMT +5:30)")
  const [startHour, setStartHour] = useState("00")
  const [startMinute, setStartMinute] = useState("00")
  const [endHour, setEndHour] = useState("23")
  const [endMinute, setEndMinute] = useState("59")
  const [interval, setInterval] = useState("600")

  const days = [
    { key: 'S', label: 'Sunday' },
    { key: 'M', label: 'Monday' },
    { key: 'T', label: 'Tuesday' },
    { key: 'W', label: 'Wednesday' },
    { key: 'T', label: 'Thursday' },
    { key: 'F', label: 'Friday' },
    { key: 'S', label: 'Saturday' }
  ]

  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(d => d !== day))
    } else {
      setSelectedDays([...selectedDays, day])
    }
  }

  return (
    <div className="app">
      <Sidebar sidebarOpen={sidebarOpen} />
      <main>
        <div className="main-content">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="content">
            <div className="header-section">
              <div className="header-content">
                <h1 className="schedule-title">Schedule your email outreach</h1>
                <p className="schedule-description">
                  Choose the days and time window for your email outreach.
                </p>
              </div>
              <div className="days-section">
                <h2 className="section-title">Select days of week</h2>
                <div className="days-grid">
                  {days.map((day) => (
                    <button
                      key={day.key}
                      className={`day-button ${selectedDays.includes(day.key) ? 'selected' : ''}`}
                      onClick={() => toggleDay(day.key)}
                    >
                      {day.key}
                    </button>
                  ))}
                </div>
                <div className="schedule-container">
              <div className="time-section">
                <div className="timezone-select">
                  <h2 className="section-title">Time zone</h2>
                  <select 
                    value={timeZone}
                    onChange={(e) => setTimeZone(e.target.value)}
                    className="select-input"
                  >
                    <option value="New Delhi (IST, GMT +5:30)">New Delhi (IST, GMT +5:30)</option>
                  </select>
                </div>

                <div className="time-range">
                  <div className="time-input-group">
                    <h2 className="section-title">Start time</h2>
                    <div className="time-inputs">
                      <select 
                        value={startHour}
                        onChange={(e) => setStartHour(e.target.value)}
                        className="time-select"
                      >
                        {[...Array(24)].map((_, i) => (
                          <option key={i} value={i.toString().padStart(2, '0')}>
                            {i.toString().padStart(2, '0')}
                          </option>
                        ))}
                      </select>
                      <select
                        value={startMinute}
                        onChange={(e) => setStartMinute(e.target.value)}
                        className="time-select"
                      >
                        {[...Array(60)].map((_, i) => (
                          <option key={i} value={i.toString().padStart(2, '0')}>
                            {i.toString().padStart(2, '0')}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="time-input-group">
                    <h2 className="section-title">End time</h2>
                    <div className="time-inputs">
                      <select
                        value={endHour}
                        onChange={(e) => setEndHour(e.target.value)}
                        className="time-select"
                      >
                        {[...Array(24)].map((_, i) => (
                          <option key={i} value={i.toString().padStart(2, '0')}>
                            {i.toString().padStart(2, '0')}
                          </option>
                        ))}
                      </select>
                      <select
                        value={endMinute}
                        onChange={(e) => setEndMinute(e.target.value)}
                        className="time-select"
                      >
                        {[...Array(60)].map((_, i) => (
                          <option key={i} value={i.toString().padStart(2, '0')}>
                            {i.toString().padStart(2, '0')}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="interval-section">
                  <h2 className="section-title">Time interval between emails (in seconds)</h2>
                  <input
                    type="text"
                    value={interval}
                    onChange={(e) => setInterval(e.target.value)}
                    className="interval-input"
                  />
                </div>

                <button className="save-button">Save & Run</button>
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