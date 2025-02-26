"use client"

import React, { useState, useEffect } from "react"
import { Header, Sidebar } from "../../index"

export default function BrokenFeature() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1 relative">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className={`flex-1 flex items-center justify-center transition-all duration-300 ${sidebarOpen ? 'ml-64' : '-ml-20'}`}>
          <div className="flex flex-col items-center justify-center w-full">
          <p className="text-xl text-[#757575] mb-4">
  Sorry, founder. We broke, this feature is still under development.
</p>

            <button className="bg-transparent text-white font-bold py-2 px-4 rounded text-lg">
              Explore investors
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}