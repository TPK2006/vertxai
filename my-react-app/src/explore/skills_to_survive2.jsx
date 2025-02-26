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
        <main className={`flex-1 flex items-center justify-center transition-all duration-300 ${sidebarOpen ? 'ml-64' : '-ml-20'}`}>
          <div className="max-w-4xl w-full px-4">
            <h1 className="text-4xl font-bold mb-2">Skills to survive</h1>
            <p className="text-xl text-gray-400 mb-8">Tell me about your background</p>
            
            <div className="bg-[#151515] rounded-3xl p-12 shadow-xl border border-white-600 w-full">
              <div className="flex flex-col items-start">
                <h2 className="text-2xl font-bold mb-6">Discipline</h2>
                <div className="flex flex-wrap gap-3 w-full">
                  <div className="bg-transparent rounded-full px-4 py-2 border-[0.5px] border-gray-600 text-[#757575]">
                    Client Management
                  </div>
                  <div className="bg-transparent rounded-full px-4 py-2 border-[0.5px] border-gray-600 text-[#757575]">
                    E-Commerce
                  </div>
                  <div className="bg-transparent rounded-full px-4 py-2 border-[0.5px] border-gray-600 text-[#757575]">
                    HR & Recruiting
                  </div>
                  <div className="bg-transparent rounded-full px-4 py-2 border-[0.5px] border-gray-600 text-[#757575]">
                    PR(Public Relations)
                  </div>
                  <div className="bg-transparent rounded-full px-4 py-2 border-[0.5px] border-gray-600 text-[#757575]">
                    Sales
                  </div>
                  <div className="bg-transparent rounded-full px-4 py-2 border-[0.5px] border-gray-600 text-[#757575]">
                    Business Analytics
                  </div>
                  <div className="bg-white text-black rounded-full px-4 py-2">
                    Business Development
                  </div>
                  <div className="bg-transparent rounded-full px-4 py-2 border-[0.5px] border-gray-600 text-[#757575]">
                    Business Operations
                  </div>
                  <div className="bg-transparent rounded-full px-4 py-2 border-[0.5px] border-gray-600 text-[#757575]">
                    Customer Success
                  </div>
                  <div className="bg-transparent rounded-full px-4 py-2 border-[0.5px] border-gray-600 text-[#757575]">
                    Project Management
                  </div>
                  <div className="bg-white text-black rounded-full px-4 py-2">
                    Business Strategy
                  </div>
                  <div className="bg-transparent rounded-full px-4 py-2 border-[0.5px] border-gray-600 text-[#757575]">
                    Program Management
                  </div>
                  <div className="bg-transparent rounded-full px-4 py-2 border-[0.5px] border-gray-600 text-[#757575]">
                    Finance
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <div className="flex">
                <button className="bg-[#1D1C1C] text-white font-bold py-3 px-12 rounded-[10px] text-lg border border-gray-600">
                  Back
                </button>
                <button className="bg-white text-black font-bold py-3 px-12 rounded-[10px] text-lg ml-[20px]">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}