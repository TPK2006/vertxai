"use client"

import { useState } from "react"
import "./styles.css"

function App() {
  const [selectedModel, setSelectedModel] = useState("Vertxflow-Turbo-01")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="app-container">
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <svg width="300" height="120" viewBox="-4 -9 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M56.184 3.8H61.512V5.608H56.936L56.36 6.2V8.424H59.736V10.232H56.36V15H54.424V5.592L56.184 3.8ZM63.5218 3.8H65.4578V12.472L65.9538 13.192H69.3298V12.024H71.2658V15H64.9778L63.5218 12.792V3.8ZM74.6195 3.8H79.4355L80.8435 5.944V13.464L79.3875 15H74.5875L73.1315 12.856V5.336L74.6195 3.8ZM75.0675 12.504L75.5315 13.192H78.6035L78.9075 12.872V6.296L78.4435 5.608H75.3555L75.0675 5.928V12.504ZM82.3893 3.8H84.3253V11.608L85.0773 12.728H85.1573L85.6053 12.296V8.04H87.5413V11.832L88.0853 12.744H88.1493L88.8213 12.008V3.8H90.7573V12.856L88.6773 15H87.1733L86.6453 14.088L85.7973 15H84.3093L82.3893 12.152V3.8Z" fill="white"/>
            <path d="M6.72 3.8H8.656V11.176L5.008 15H3.584L0.944 11.096V3.8H2.88V10.728L4.416 13.016L6.72 10.6V3.8ZM11.8498 3.8H18.0898V5.608H12.5858L12.2978 5.928V8.44H15.9938V10.248H12.2978V12.488L12.7618 13.192H18.0898V15H11.8018L10.3618 12.856V5.32L11.8498 3.8ZM20.1155 3.8H25.9875L27.8595 6.536V8.408L26.3875 9.928L27.8595 12.088V15H25.9235V12.424L24.4675 10.296H22.8995L22.0515 9.768V15H20.1155V3.8ZM22.0515 5.608V8.488H25.2995L25.9235 7.848V6.92L25.0115 5.608H22.0515ZM29.4053 3.8H37.7573V5.608H33.5013L34.5573 6.552V15H32.6213V7L32.1573 5.608H29.4053V3.8ZM44.791 3.8H46.727V7.208L45.207 8.76L46.727 10.984V15H44.791V11.352L43.975 10.216H43.239L41.559 11.976V15H39.623V11.368L41.143 9.816L39.623 7.592V3.8H41.559V7.224L42.343 8.408H43.111L44.791 6.648V3.8Z" fill="white"/>
            <path d="M117.75 15.75C117.338 15.75 116.984 15.6031 116.691 15.3094C116.397 15.0156 116.25 14.6625 116.25 14.25V3.75C116.25 3.3375 116.397 2.98438 116.691 2.69063C116.984 2.39687 117.338 2.25 117.75 2.25H128.25C128.663 2.25 129.016 2.39687 129.309 2.69063C129.603 2.98438 129.75 3.3375 129.75 3.75V14.25C129.75 14.6625 129.603 15.0156 129.309 15.3094C129.016 15.6031 128.663 15.75 128.25 15.75H117.75ZM123 14.25H128.25V3.75H123V14.25Z" fill="white"/>
          </svg>
          <button className="sidebar-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? "×" : "≡"}
          </button>
        </div>
        <button className="new-chat-btn">
          <span className="plus-icon">+</span>
          New Chat
        </button>

        <div className="time-sections">
          <section>
            <h2>Today</h2>
            <div className="chat-item">
              <div className="chat-item-content">
                <span>Generate pitch deck</span>
              </div>
              <span className="more-icon">⋯</span>
            </div>
          </section>

          <section>
            <h2>Yesterday</h2>
            <div className="chat-item">
              <div className="chat-item-content">
                <span>Generate pitch deck</span>
              </div>
              <span className="more-icon">⋯</span>
            </div>
          </section>

          <section>
            <h2>Previous 7 days</h2>
            <div className="chat-item">
              <div className="chat-item-content">
                <span>Generate pitch deck</span>
              </div>
              <span className="more-icon">⋯</span>
            </div>
          </section>

          <section>
            <h2>Previous 30 days</h2>
            <div className="chat-item">
              <div className="chat-item-content">
                <span>Generate pitch deck</span>
              </div>
              <span className="more-icon">⋯</span>
            </div>
          </section>
        </div>

        <button className="exit-btn">Exit</button>
      </div>
      <MainContent
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
    </div>
  )
}

function MainContent({ selectedModel, setSelectedModel, toggleSidebar }) {
  const [inputValue, setInputValue] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <div className="main-content">
      <div className="header">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          ≡
        </button>
        <div className="model-selector">
          <button className="model-button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {selectedModel}
            <span className="dropdown-arrow">▼</span>
          </button>
          {isDropdownOpen && (
            <div className="model-dropdown">
              <div className="model-option selected">
                <span>Vertxflow-Turbo-01</span>
                <span className="check-icon">◎</span>
              </div>
              <div className="model-option">
                <span>Vertxflow-Elite-plus</span>
              </div>
            </div>
          )}
        </div>
        <div className="action-buttons">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="10" r="10" fill="#1E1E1E"/>
<path d="M8.54992 16.1999L8.30992 14.28C8.17992 14.2299 8.05742 14.1699 7.94242 14.0999C7.82742 14.03 7.71492 13.9549 7.60492 13.8749L5.81992 14.6249L4.16992 11.775L5.71492 10.605C5.70492 10.535 5.69992 10.4675 5.69992 10.4025V9.99745C5.69992 9.93245 5.70492 9.86495 5.71492 9.79495L4.16992 8.62495L5.81992 5.77495L7.60492 6.52495C7.71492 6.44495 7.82992 6.36995 7.94992 6.29995C8.06992 6.22995 8.18992 6.16995 8.30992 6.11995L8.54992 4.19995H11.8499L12.0899 6.11995C12.2199 6.16995 12.3424 6.22995 12.4574 6.29995C12.5724 6.36995 12.6849 6.44495 12.7949 6.52495L14.5799 5.77495L16.2299 8.62495L14.6849 9.79495C14.6949 9.86495 14.6999 9.93245 14.6999 9.99745V10.4025C14.6999 10.4675 14.6899 10.535 14.6699 10.605L16.2149 11.775L14.5649 14.6249L12.7949 13.8749C12.6849 13.9549 12.5699 14.03 12.4499 14.0999C12.3299 14.1699 12.2099 14.2299 12.0899 14.28L11.8499 16.1999H8.54992ZM9.59992 14.9999H10.7849L10.9949 13.41C11.3049 13.3299 11.5924 13.2125 11.8574 13.0575C12.1224 12.9024 12.3649 12.7149 12.5849 12.495L14.0699 13.11L14.6549 12.09L13.3649 11.115C13.4149 10.975 13.4499 10.8275 13.4699 10.6725C13.4899 10.5175 13.4999 10.36 13.4999 10.2C13.4999 10.04 13.4899 9.88245 13.4699 9.72745C13.4499 9.57245 13.4149 9.42495 13.3649 9.28495L14.6549 8.30995L14.0699 7.28995L12.5849 7.91995C12.3649 7.68995 12.1224 7.49745 11.8574 7.34245C11.5924 7.18745 11.3049 7.06995 10.9949 6.98995L10.7999 5.39995H9.61492L9.40492 6.98995C9.09492 7.06995 8.80742 7.18745 8.54242 7.34245C8.27742 7.49745 8.03492 7.68495 7.81492 7.90495L6.32992 7.28995L5.74492 8.30995L7.03492 9.26995C6.98492 9.41995 6.94992 9.56995 6.92992 9.71995C6.90992 9.86995 6.89992 10.03 6.89992 10.2C6.89992 10.36 6.90992 10.515 6.92992 10.665C6.94992 10.8149 6.98492 10.965 7.03492 11.115L5.74492 12.09L6.32992 13.11L7.81492 12.4799C8.03492 12.7099 8.27742 12.9024 8.54242 13.0575C8.80742 13.2125 9.09492 13.3299 9.40492 13.41L9.59992 14.9999ZM10.2299 12.2999C10.8099 12.2999 11.3049 12.095 11.7149 11.6849C12.1249 11.275 12.3299 10.78 12.3299 10.2C12.3299 9.61995 12.1249 9.12495 11.7149 8.71495C11.3049 8.30495 10.8099 8.09995 10.2299 8.09995C9.63992 8.09995 9.14242 8.30495 8.73742 8.71495C8.33242 9.12495 8.12992 9.61995 8.12992 10.2C8.12992 10.78 8.33242 11.275 8.73742 11.6849C9.14242 12.095 9.63992 12.2999 10.2299 12.2999Z" fill="white"/>
</svg>

          <button className="profile-btn">Profile</button>
        </div>
      </div>

      <div className="chat-area">
        <h1>Good morning, Username</h1>

        <div className="input-container">
          <div className="input-wrapper">
            <div className="input-icon">▼</div>
            <input
              type="text"
              placeholder="How can i help you today?"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="send-button">
            <svg width="16" height="16"  viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="16" height="16" rx="1" fill="white"/>
<path d="M12 8L6 11.4641V4.5359L12 8Z" fill="black"/>
</svg>

            </button>
          </div>
        </div>

        <div className="quick-actions">
          <button>Analyze docs</button>
          <button>Create pitch deck</button>
          <button>Deck analysis</button>
          <button>more</button>
        </div>

        <div className="footer">Vertx flow can make mistakes. Check important information.</div>
      </div>
    </div>
  )
}

export default App