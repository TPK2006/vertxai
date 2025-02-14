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
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.2228 11.5532L17.8815 9.60681V15.2953H21.5883V12.1891C21.5883 11.9271 21.4489 11.6852 21.2228 11.5532Z" fill="#103262"/>
<path d="M6.37836 4.90643H11.2848V9.32222H6.37836V4.90643Z" fill="#0084D7"/>
<path d="M11.2848 4.90643H16.1912V9.32222H11.2848V4.90643Z" fill="#33AFEC"/>
<path d="M16.1913 4.90643H21.0977V9.32222H16.1913V4.90643Z" fill="#54DAFF"/>
<path d="M11.2848 9.32224H16.1912V13.738H11.2848V9.32224Z" fill="#027AD4"/>
<path d="M11.2848 13.738H16.1912V18.1538H11.2848V13.738Z" fill="#0553A4"/>
<path d="M16.1913 9.32224H21.0977V13.738H16.1913V9.32224Z" fill="#25A2E5"/>
<path d="M16.1913 13.738H21.0977V18.1538H16.1913V13.738Z" fill="#0262B8"/>
<path opacity="0.019" d="M6.37836 18.1538H21.0977V11.8922L14.2237 15.8174L6.37836 11.8922V18.1538Z" fill="black"/>
<path opacity="0.038" d="M6.37836 18.1538H21.0977V12.009L14.2237 15.9342L6.37836 12.009V18.1538Z" fill="black"/>
<path opacity="0.057" d="M6.37836 18.1538H21.0977V12.1258L14.2237 16.0509L6.37836 12.1258V18.1538Z" fill="black"/>
<path opacity="0.076" d="M6.37836 18.1538H21.0977V12.2425L14.2237 16.1677L6.37836 12.2425V18.1538Z" fill="black"/>
<path opacity="0.095" d="M6.37836 18.1538H21.0977V12.3593L14.2237 16.2845L6.37836 12.3593V18.1538Z" fill="black"/>
<path opacity="0.114" d="M6.37836 18.1538H21.0977V12.4766L14.2237 16.4017L6.37836 12.4766V18.1538Z" fill="black"/>
<path opacity="0.133" d="M6.37836 18.1538H21.0977V12.5934L14.2237 16.5185L6.37836 12.5934V18.1538Z" fill="black"/>
<path opacity="0.152" d="M6.37836 18.1538H21.0977V12.7101L14.2237 16.6353L6.37836 12.7101V18.1538Z" fill="black"/>
<path opacity="0.171" d="M6.37836 18.1538H21.0977V12.8269L14.2237 16.7521L6.37836 12.8269V18.1538Z" fill="black"/>
<path opacity="0.191" d="M6.37836 18.1538H21.0977V12.9437L14.2237 16.8688L6.37836 12.9437V18.1538Z" fill="black"/>
<path opacity="0.209" d="M6.37836 18.1538H21.0977V13.0604L14.2237 16.9856L6.37836 13.0604V18.1538Z" fill="black"/>
<path opacity="0.229" d="M6.37836 18.1538H21.0977V13.1772L14.2237 17.1024L6.37836 13.1772V18.1538Z" fill="black"/>
<path opacity="0.248" d="M6.37836 18.1538H21.0977V13.294L14.2237 17.2191L6.37836 13.294V18.1538Z" fill="black"/>
<path opacity="0.267" d="M6.37836 18.1538H21.0977V13.4108L14.2237 17.3359L6.37836 13.4108V18.1538Z" fill="black"/>
<path opacity="0.286" d="M6.37836 18.1538H21.0977V13.5275L14.2237 17.4527L6.37836 13.5275V18.1538Z" fill="black"/>
<path opacity="0.305" d="M6.37836 18.1538H21.0977V13.6448L14.2237 17.57L6.37836 13.6448V18.1538Z" fill="black"/>
<path opacity="0.324" d="M6.37836 18.1538H21.0977V13.7616L14.2237 17.6867L6.37836 13.7616V18.1538Z" fill="black"/>
<path opacity="0.343" d="M6.37836 18.1538H21.0977V13.8783L14.2237 17.8035L6.37836 13.8783V18.1538Z" fill="black"/>
<path opacity="0.362" d="M6.37836 18.1538H21.0977V13.9951L14.2237 17.9203L6.37836 13.9951V18.1538Z" fill="black"/>
<path opacity="0.381" d="M6.37836 18.1538H21.0977V14.1119L14.2237 18.037L6.37836 14.1119V18.1538Z" fill="black"/>
<path opacity="0.4" d="M6.37836 18.1538H21.0977V14.2287L14.2237 18.1538L6.37836 14.2287V18.1538Z" fill="black"/>
<path d="M7.57605 20.607H20.609C21.1507 20.607 21.5898 20.1708 21.5903 19.6287C21.5918 17.4105 21.5883 12.1891 21.5883 12.1891C21.5883 12.1891 21.5849 12.298 20.7292 12.7837C19.8735 13.2695 7.23407 20.3941 7.23407 20.3941C7.23407 20.3941 7.34888 20.607 7.57605 20.607Z" fill="url(#paint0_linear_1086_12)"/>
<path d="M21.0977 4.90642H6.37836V3.92513C6.37836 3.38297 6.81748 2.94385 7.35964 2.94385H20.1164C20.6585 2.94385 21.0977 3.38297 21.0977 3.92513V4.90642Z" fill="url(#paint1_linear_1086_12)"/>
<path d="M6.37836 12.2661V19.6257C6.37836 20.1679 6.81748 20.607 7.35964 20.607H14.7193H20.609C20.8357 20.607 21.0422 20.5275 21.2081 20.3985L6.37836 12.2661Z" fill="url(#paint2_linear_1086_12)"/>
<path opacity="0.05" d="M10.46 6.37836H6.37836V18.1538H10.46C11.4575 18.1538 12.2661 17.3452 12.2661 16.3477V8.18442C12.2661 7.18694 11.4575 6.37836 10.46 6.37836Z" fill="black"/>
<path opacity="0.07" d="M10.408 17.6632H6.37836V6.54175H10.408C11.2539 6.54175 11.9393 7.22718 11.9393 8.07305V16.1319C11.9388 16.9777 11.2534 17.6632 10.408 17.6632Z" fill="black"/>
<path opacity="0.09" d="M10.3555 17.1725H6.37836V6.70563H10.3555C11.0493 6.70563 11.6116 7.2679 11.6116 7.96167V15.9165C11.6121 16.6102 11.0493 17.1725 10.3555 17.1725Z" fill="black"/>
<path d="M10.3035 16.6819H2.45321C1.91105 16.6819 1.47192 16.2428 1.47192 15.7006V7.85031C1.47192 7.30814 1.91105 6.86902 2.45321 6.86902H10.3035C10.8457 6.86902 11.2848 7.30814 11.2848 7.85031V15.7006C11.2848 16.2428 10.8457 16.6819 10.3035 16.6819Z" fill="url(#paint3_linear_1086_12)"/>
<path d="M6.37835 9.17062C4.85196 9.17062 3.9325 10.3369 3.9325 11.7754C3.9325 13.214 4.84853 14.3803 6.37835 14.3803C7.90867 14.3803 8.82421 13.214 8.82421 11.7759C8.82421 10.3369 7.90474 9.17062 6.37835 9.17062ZM6.37835 13.501C5.51237 13.501 4.99474 12.7288 4.99474 11.7759C4.99474 10.8231 5.51482 10.0508 6.37835 10.0508C7.24188 10.0508 7.76246 10.8236 7.76246 11.7759C7.76246 12.7283 7.24385 13.501 6.37835 13.501Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_1086_12" x1="19.0983" y1="12.0487" x2="15.8409" y2="17.6749" gradientUnits="userSpaceOnUse">
<stop stop-color="#31ABEC"/>
<stop offset="1" stop-color="#1582D5"/>
</linearGradient>
<linearGradient id="paint1_linear_1086_12" x1="6.70463" y1="3.43057" x2="20.2562" y2="4.45209" gradientUnits="userSpaceOnUse">
<stop offset="0.042" stop-color="#076DB4"/>
<stop offset="0.85" stop-color="#0461AF"/>
</linearGradient>
<linearGradient id="paint2_linear_1086_12" x1="13.8131" y1="16.2982" x2="11.5978" y2="20.1654" gradientUnits="userSpaceOnUse">
<stop stop-color="#33ACEE"/>
<stop offset="1" stop-color="#1B8EDF"/>
</linearGradient>
<linearGradient id="paint3_linear_1086_12" x1="1.73196" y1="7.12906" x2="10.9953" y2="16.3924" gradientUnits="userSpaceOnUse">
<stop stop-color="#1784D8"/>
<stop offset="1" stop-color="#0864C5"/>
</linearGradient>
</defs>
</svg>

                    <span className="email-service">Outlook</span>
                  </div>
                  <button className="connect-button">Connect</button>
                </div>

                {/* SMTP Card */}
                <div className="email-card" style={{ border: "1px solid var(--border-color)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.9559 3.87989C17.8811 3.50182 17.7124 3.14449 17.4663 2.84408C17.4163 2.78101 17.3641 2.7249 17.3069 2.66799C16.8691 2.22783 16.26 1.97537 15.6359 1.97537H2.36405C1.73296 1.97537 1.13941 2.22147 0.692754 2.66823C0.636223 2.72462 0.583805 2.78129 0.531914 2.84637C0.286875 3.14551 0.118934 3.50235 0.0459141 3.88095C0.0153984 4.02962 0 4.18368 0 4.33952V13.6607C0 13.985 0.0658828 14.3008 0.196488 14.601C0.309516 14.8676 0.481008 15.1203 0.692613 15.3318C0.74591 15.3849 0.798855 15.4338 0.855387 15.4815C1.27846 15.8319 1.81417 16.0247 2.36405 16.0247H15.6359C16.1893 16.0247 16.7245 15.8312 17.1464 15.4777C17.2028 15.432 17.2551 15.3841 17.3074 15.3318C17.5119 15.1275 17.6745 14.8927 17.7913 14.6338L17.8067 14.5969C17.9349 14.3024 18 13.9877 18 13.6608V4.33952C18 4.18572 17.9852 4.03064 17.9559 3.87989ZM1.22425 3.48414C1.25768 3.4352 1.30036 3.38496 1.35482 3.33008C1.62513 3.05991 1.98362 2.91123 2.36401 2.91123H15.6358C16.0196 2.91123 16.3782 3.06015 16.6455 3.33061C16.6917 3.37726 16.7357 3.42905 16.7742 3.4808L16.8757 3.6172L9.79172 9.7912C9.57333 9.98267 9.29215 10.088 8.99989 10.088C8.71052 10.088 8.42959 9.98291 8.2086 9.79145L1.13168 3.61896L1.22425 3.48414ZM0.940605 13.743C0.936773 13.7177 0.935895 13.6895 0.935895 13.6607V4.53253L6.43328 9.32823L0.991371 14.073L0.940605 13.743ZM16.3441 14.9006C16.1313 15.0234 15.8863 15.0885 15.6359 15.0885H2.36405C2.11349 15.0885 1.86855 15.0234 1.65593 14.9006L1.43346 14.7717L7.05621 9.87164L7.67243 10.4076C8.04206 10.7285 8.51344 10.9054 8.99996 10.9054C9.48829 10.9054 9.96043 10.7285 10.3298 10.4076L10.9458 9.8714L16.5666 14.772L16.3441 14.9006ZM17.0639 13.6607C17.0639 13.689 17.0633 13.7169 17.0598 13.7417L17.0111 14.0747L11.5668 9.3308L17.0639 4.53485V13.6607Z" fill="white"/>
</svg>

                    <span className="email-service">SMTP</span>
                  </div>
                  <button className="connect-button">Connect</button>
                </div>

                {/* Gmail Card */}
                <div className="email-card" style={{ border: "1px solid var(--border-color)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                  <svg width="20" height="20"  viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.23332 16H5.09996V8.78299L1 5.61581V14.7366C1 15.4289 1.55 16 2.23332 16Z" fill="#4285F4"/>
<path d="M14.9001 16H17.7668C18.4501 16 19.0001 15.4289 19.0001 14.7193V5.61581L14.9168 8.8003V16H14.9001Z" fill="#34A853"/>
<path d="M14.9001 3.27935V8.80028L18.9834 5.61579V3.91971C18.9834 2.34477 17.2501 1.44481 16.0335 2.39669L14.9001 3.27935Z" fill="#FBBC04"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.08325 8.78295V3.27933L9.98321 7.10417L14.8832 3.27933V8.80026L9.99988 12.6078L5.08325 8.78295Z" fill="#EA4335"/>
<path d="M1 3.90241V5.5985L5.0833 8.78298V3.27936L3.93331 2.3794C2.73332 1.44482 1 2.34478 1 3.90241Z" fill="#C5221F"/>
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
