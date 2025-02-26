"use client"

import React, { useState, useEffect } from "react"
import { Header, Sidebar } from "../index"

export default function FinancialModeling() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1 relative">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className={`flex-1 flex items-center justify-center transition-all duration-300 ${sidebarOpen ? 'ml-64' : '-ml-20'} pt-20`}>
          <div className="max-w-4xl w-full px-4 pt-8"> {/* Added pt-8 for padding at the top */}
            {/* Icons Container */}
            <div className="flex justify-end space-x-2 mb-4 pr-12"> 
  {/* Added pr-2 for slight padding on the right */}
  {/* Your icons go here */}


            <svg width="23" height="23" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.33333 14C2.96667 14 2.65278 13.8694 2.39167 13.6083C2.13056 13.3472 2 13.0333 2 12.6667V3.33333C2 2.96667 2.13056 2.65278 2.39167 2.39167C2.65278 2.13056 2.96667 2 3.33333 2H9.28333L7.95 3.33333H3.33333V12.6667H12.6667V8.03333L14 6.7V12.6667C14 13.0333 13.8694 13.3472 13.6083 13.6083C13.3472 13.8694 13.0333 14 12.6667 14H3.33333ZM6 10V7.16667L12.1167 1.05C12.25 0.916668 12.4 0.816668 12.5667 0.750002C12.7333 0.683335 12.9 0.650002 13.0667 0.650002C13.2444 0.650002 13.4139 0.683335 13.575 0.750002C13.7361 0.816668 13.8833 0.916668 14.0167 1.05L14.95 2C15.0722 2.13333 15.1667 2.28056 15.2333 2.44167C15.3 2.60278 15.3333 2.76667 15.3333 2.93333C15.3333 3.1 15.3028 3.26389 15.2417 3.425C15.1806 3.58611 15.0833 3.73333 14.95 3.86667L8.83333 10H6ZM7.33333 8.66667H8.26667L12.1333 4.8L11.6667 4.33333L11.1833 3.86667L7.33333 7.71667V8.66667Z" fill="#757575"/>
</svg>

              <svg width="23" height="23" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="15" height="15" stroke="black"/>
<path d="M6.16647 14.6667L5.89981 12.5333C5.75536 12.4778 5.61925 12.4111 5.49147 12.3333C5.36369 12.2556 5.23869 12.1722 5.11647 12.0833L3.13314 12.9167L1.2998 9.75L3.01647 8.45C3.00536 8.37222 2.9998 8.29722 2.9998 8.225V7.775C2.9998 7.70278 3.00536 7.62778 3.01647 7.55L1.2998 6.25L3.13314 3.08334L5.11647 3.91667C5.23869 3.82778 5.36647 3.74445 5.4998 3.66667C5.63314 3.58889 5.76647 3.52222 5.89981 3.46667L6.16647 1.33334H9.83314L10.0998 3.46667C10.2442 3.52222 10.3804 3.58889 10.5081 3.66667C10.6359 3.74445 10.7609 3.82778 10.8831 3.91667L12.8665 3.08334L14.6998 6.25L12.9831 7.55C12.9942 7.62778 12.9998 7.70278 12.9998 7.775V8.225C12.9998 8.29722 12.9887 8.37222 12.9665 8.45L14.6831 9.75L12.8498 12.9167L10.8831 12.0833C10.7609 12.1722 10.6331 12.2556 10.4998 12.3333C10.3665 12.4111 10.2331 12.4778 10.0998 12.5333L9.83314 14.6667H6.16647ZM8.03314 10.3333C8.67758 10.3333 9.22758 10.1056 9.68314 9.65C10.1387 9.19445 10.3665 8.64445 10.3665 8C10.3665 7.35556 10.1387 6.80556 9.68314 6.35C9.22758 5.89445 8.67758 5.66667 8.03314 5.66667C7.37758 5.66667 6.8248 5.89445 6.3748 6.35C5.92481 6.80556 5.6998 7.35556 5.6998 8C5.6998 8.64445 5.92481 9.19445 6.3748 9.65C6.8248 10.1056 7.37758 10.3333 8.03314 10.3333Z" fill="#757575"/>
</svg>

            </div>

            <div className="bg-black rounded-3xl shadow-lg overflow-hidden border" style={{ borderColor: '#757575' }}>
              {/* Profile Top Section */} 
              <div className="p-8 border-b border-gray-800">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-4xl font-bold mb-2">Mark Zuckerburg</h1>
                    <p className="text-[25px] text-[#D9D9D9] mb-1">San Francisco, CA, USA</p>

                    <p className="text-xl text-gray-400 mb-4">@markzuckerberg</p>
                    <p className="text-xl mb-6">CEO, Facebook</p>
                    
                    <div className="flex space-x-4">
                      <div className="bg-black rounded-full px-4 py-2 border-[0.5px] border-[#757575] text-white">#New here</div>
                      <div className="bg-black rounded-full px-4 py-2 border-[0.5px] border-[#757575] flex items-center text-white">
                        <svg className="mr-1" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                          <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        2m
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="rounded-full w-32 h-32 overflow-hidden border border-[#757575] bg-gray-800">
                      {/* Placeholder for profile image */}
                    </div>
                    <div className="absolute bottom-0 right-0 bg-white rounded-md p-1">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="25" height="25" rx="4" fill="#CAC5C5"/>
<g clip-path="url(#clip0_2146_2)">
<path d="M6.33301 19V16.3333H19.6663V19H6.33301ZM8.99967 13.6667H9.93301L15.133 8.48334L14.6497 8.00001L14.183 7.53334L8.99967 12.7333V13.6667ZM7.66634 15V12.1667L15.133 4.71668C15.2552 4.59445 15.3969 4.50001 15.558 4.43334C15.7191 4.36668 15.8886 4.33334 16.0663 4.33334C16.2441 4.33334 16.4163 4.36668 16.583 4.43334C16.7497 4.50001 16.8997 4.60001 17.033 4.73334L17.9497 5.66668C18.083 5.7889 18.1802 5.93334 18.2413 6.10001C18.3025 6.26668 18.333 6.4389 18.333 6.61668C18.333 6.78334 18.3025 6.94723 18.2413 7.10834C18.1802 7.26945 18.083 7.41668 17.9497 7.55001L10.4997 15H7.66634ZM15.133 8.48334L14.6497 8.00001L14.183 7.53334L15.133 8.48334Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2146_2">
<rect width="16" height="16" fill="white" transform="translate(5 3)"/>
</clipPath>
</defs>
</svg>


                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background Section */}
              <div className="shadow-lg overflow-hidden border-t pt-5 pl-8" style={{ background: '#111111', borderColor: '#757575' }}>
                <h2 className="text-2xl font-bold mb-6">Background</h2>
                
                <div className="mb-8">
                  <h3 className="text-xl mb-3">Achievement</h3>
                  <p className="text-gray-400">Founder of facebook</p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl mb-3">Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-black rounded-full px-4 py-2 border-[0.5px] border-[#757575] text-white">
                      Business & Operations
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <h3 className="text-xl mb-3">Discipline</h3>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-black rounded-full px-4 py-2 border-[0.5px] border-[#757575] text-white">
                      Business Development
                    </div>
                    <div className="bg-black rounded-full px-4 py-2 border-[0.5px] border-[#757575] text-white">
                      Business Operations
                    </div>
                    <div className="bg-black rounded-full px-4 py-2 border-[0.5px] border-[#757575] text-white">
                      Business Strategy
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Projects Section */}
              <div className="p-8 border-b" style={{ background: '#111111', borderColor: '#757575' }}>
                <h2 className="text-2xl font-bold mb-6">Projects</h2>
                
                <div className="mb-8">
                  <h3 className="text-xl mb-3">Stealth Project</h3>
                  <div className="bg-[#1D1C1C] w-16 h-16 rounded-lg"></div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl mb-3">Stage</h3>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-black rounded-full px-4 py-2 border-[0.5px] border-[#757575] text-white">
                      Prototype
                    </div>
                  </div>
                </div>


                
                <div className="mb-8">
                  <h3 className="text-xl mb-3">Workplace</h3>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-black rounded-full px-4 py-2 border-[0.5px] border-[#757575] text-white">
                      Remote
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}