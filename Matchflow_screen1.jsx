'use client';

import React, { useState } from 'react';
import './styles.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="app">
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="logo">
          <svg width="140" height="32" viewBox="0 0 92 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M56.184 3.8H61.512V5.608H56.936L56.36 6.2V8.424H59.736V10.232H56.36V15H54.424V5.592L56.184 3.8ZM63.5218 3.8H65.4578V12.472L65.9538 13.192H69.3298V12.024H71.2658V15H64.9778L63.5218 12.792V3.8ZM74.6195 3.8H79.4355L80.8435 5.944V13.464L79.3875 15H74.5875L73.1315 12.856V5.336L74.6195 3.8ZM75.0675 12.504L75.5315 13.192H78.6035L78.9075 12.872V6.296L78.4435 5.608H75.3555L75.0675 5.928V12.504ZM82.3893 3.8H84.3253V11.608L85.0773 12.728H85.1573L85.6053 12.296V8.04H87.5413V11.832L88.0853 12.744H88.1493L88.8213 12.008V3.8H90.7573V12.856L88.6773 15H87.1733L86.6453 14.088L85.7973 15H84.3093L82.3893 12.152V3.8Z" fill="white"/>
            <path d="M6.72 3.8H8.656V11.176L5.008 15H3.584L0.944 11.096V3.8H2.88V10.728L4.416 13.016L6.72 10.6V3.8ZM11.8498 3.8H18.0898V5.608H12.5858L12.2978 5.928V8.44H15.9938V10.248H12.2978V12.488L12.7618 13.192H18.0898V15H11.8018L10.3618 12.856V5.32L11.8498 3.8ZM20.1155 3.8H25.9875L27.8595 6.536V8.408L26.3875 9.928L27.8595 12.088V15H25.9235V12.424L24.4675 10.296H22.8995L22.0515 9.768V15H20.1155V3.8ZM22.0515 5.608V8.488H25.2995L25.9235 7.848V6.92L25.0115 5.608H22.0515ZM29.4053 3.8H37.7573V5.608H33.5013L34.5573 6.552V15H32.6213V7L32.1573 5.608H29.4053V3.8ZM44.791 3.8H46.727V7.208L45.207 8.76L46.727 10.984V15H44.791V11.352L43.975 10.216H43.239L41.559 11.976V15H39.623V11.368L41.143 9.816L39.623 7.592V3.8H41.559V7.224L42.343 8.408H43.111L44.791 6.648V3.8Z" fill="white"/>
          </svg>
        </div>
        <nav>
          <ul className="nav-list">
            <li>
              <button className="nav-button">
                <div className="icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z" fill="white"/>
                  </svg>
                </div>
                Dashboard
              </button>
            </li>
            <li>
              <button className="nav-button active">
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.25 13.75V11.5H7.25V4H5.75V6.25H0.5V0.25H5.75V2.5H10.25V0.25H15.5V6.25H10.25V4H8.75V10H10.25V7.75H15.5V13.75H10.25Z" fill="white"/>
                </svg>
                Match flow
              </button>
            </li>
            <li>
              <button className="nav-button">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.675 11.375L9.5 7.55V9.2375H11V5H6.7625V6.5H8.43125L4.625 10.3063L5.675 11.375ZM8 15.5C6.9625 15.5 5.9875 15.3031 5.075 14.9094C4.1625 14.5156 3.36875 13.9813 2.69375 13.3063C2.01875 12.6313 1.48438 11.8375 1.09063 10.925C0.696875 10.0125 0.5 9.0375 0.5 8C0.5 6.9625 0.696875 5.9875 1.09063 5.075C1.48438 4.1625 2.01875 3.36875 2.69375 2.69375C3.36875 2.01875 4.1625 1.48438 5.075 1.09063C5.9875 0.696875 6.9625 0.5 8 0.5C9.0375 0.5 10.0125 0.696875 10.925 1.09063C11.8375 1.48438 12.6313 2.01875 13.3063 2.69375C13.9813 3.36875 14.5156 4.1625 14.9094 5.075C15.3031 5.9875 15.5 6.9625 15.5 8C15.5 9.0375 15.3031 10.0125 14.9094 10.925C14.5156 11.8375 13.9813 12.6313 13.3063 13.3063C12.6313 13.9813 11.8375 14.5156 10.925 14.9094C10.0125 15.3031 9.0375 15.5 8 15.5ZM8 14C9.675 14 11.0938 13.4188 12.2563 12.2563C13.4188 11.0938 14 9.675 14 8C14 6.325 13.4188 4.90625 12.2563 3.74375C11.0938 2.58125 9.675 2 8 2C6.325 2 4.90625 2.58125 3.74375 3.74375C2.58125 4.90625 2 6.325 2 8C2 9.675 2.58125 11.0938 3.74375 12.2563C4.90625 13.4188 6.325 14 8 14Z" fill="white"/>
                </svg>
                Outbound
              </button>
            </li>
            <li>
              <button className="nav-button">
                <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 15.5C1.0875 15.5 0.734375 15.3531 0.440625 15.0594C0.146875 14.7656 0 14.4125 0 14V2C0 1.5875 0.146875 1.23438 0.440625 0.940625C0.734375 0.646875 1.0875 0.5 1.5 0.5H7.5L12 5V14C12 14.4125 11.8531 14.7656 11.5594 15.0594C11.2656 15.3531 10.9125 15.5 10.5 15.5H1.5ZM6.75 5.75V2H1.5V14H10.5V5.75H6.75Z" fill="white"/>
                </svg>
                Doc flow
              </button>
            </li>
            <li>
              <button className="nav-button">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.75 13.75C1.3375 13.75 0.984375 13.6031 0.690625 13.3094C0.396875 13.0156 0.25 12.6625 0.25 12.25V1.75C0.25 1.3375 0.396875 0.984375 0.690625 0.690625C0.984375 0.396875 1.3375 0.25 1.75 0.25H12.25C12.6625 0.25 13.0156 0.396875 13.3094 0.690625C13.6031 0.984375 13.75 1.3375 13.75 1.75V12.25C13.75 12.6625 13.6031 13.0156 13.3094 13.3094C13.0156 13.6031 12.6625 13.75 12.25 13.75H1.75ZM1.75 1.75V12.25H12.25V1.75H10.75V7L8.875 5.875L7 7V1.75H1.75Z" fill="white"/>
                </svg>
                Resources
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <header className="top-bar">
          <button 
            className="menu-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18"/>
            </svg>
          </button>
          <div className="header-right">
            <button className="profile-button">Profile</button>
          </div>
        </header>

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