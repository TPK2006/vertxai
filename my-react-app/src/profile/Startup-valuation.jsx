"use client"

import React, { useState, useEffect } from "react"
import logo from "./logo.png"
import { Header, Sidebar } from "./index"

export default function ValuationCalculator() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [investment, setInvestment] = useState("");
  const [equity, setEquity] = useState("");
  const [preMoney, setPreMoney] = useState(null);
  const [postMoney, setPostMoney] = useState(null);

  const calculateValuation = () => {
    const invest = parseFloat(investment);
    const eq = parseFloat(equity) / 100;
    if (isNaN(invest) || isNaN(eq) || eq === 0) return;
    
    const postVal = invest / eq;
    const preVal = postVal - invest;
    setPostMoney(postVal.toFixed(2));
    setPreMoney(preVal.toFixed(2));
  };

  useEffect(() => {
    if (investment && equity) {
      calculateValuation();
    }
  }, [investment, equity]);

  const [founders, setFounders] = useState([
    { id: "1", name: "Praneeth", percentage: 50, checks: 0 },
    { id: "2", name: "Prakash", percentage: 50, checks: 0 },
  ])
  const [newFounderName, setNewFounderName] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const faqs = [
    {
      question: "How do investors determine a startup's valuation?",
      answer: "Investors use different valuation methods, such as comparing similar startups, forecasting revenue, or assessing risks."
    },
    {
      question: "What is the difference between pre-money and post-money valuation?",
      answer: "Pre-Money Valuation=Post-Money Valuation−Investment Amount."
    },
    {
      question: "How do SAFE & Convertible Notes affect valuation?",
      answer: "SAFE & Convertible Notes convert into equity at a later stage, often with a discount or valuation cap, impacting ownership percentages."
    }
  ]

  const [revenue, setRevenue] = useState("");
  const [cogs, setCogs] = useState("");
  const [expenses, setExpenses] = useState("");
  const [taxes, setTaxes] = useState("");

  const grossProfit = revenue - cogs;
  const netProfit = grossProfit - expenses - taxes;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1 relative">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className={`flex-1 p-3 pt-20 transition-all duration-300 ${sidebarOpen ? 'ml-64' : '-ml-20'}`}>
          <div className="max-w-5xl mx-auto">
            <button className="flex items-center bg-black gap-2 text-gray-400 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              Back
            </button>
            <div>
              <div className="mb-8">
                <h1 className="text-4xl font-bold mb-8">Startup Valuation</h1>
                
                <div className="space-y-6 text-gray-300 mb-12">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">What is Startup Valuation?</h2>
                    <ul className="space-y-2 text-lg">
                      <li>Startup valuation is the process of determining how much a startup is worth. It helps:</li>
                      <li className="ml-4">Founders understand their company's value before fundraising.</li>
                      <li className="ml-4">Investors decide how much equity they will receive for their investment.</li>
                      <li className="ml-4">Employees know the value of their stock options.</li>
                      <li>Valuation changes over time based on funding, traction, revenue, and market conditions.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Just remember</h2>
                    <ul className="space-y-2 text-lg">
                      <li>Pre-Money Valuation - The value of a company before raising new investment.</li>
                      <li>Post-Money Valuation - The value of a company after adding new investment.</li>
                      <li>Equity - Ownership in a startup, usually represented in shares.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Valuation Calculator Section - Updated with side-by-side layout */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Valuation Calculator</h2>
                <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                  {/* Calculator on the left */}
                  <div className="bg-[#101010] border-2 border-white rounded-2xl p-6 shadow-xl w-full md:w-1/2">
                    <div className="mb-6">
                      <label className="block font-semibold mb-2">Investment amount</label>
                      <div className="relative">
                        <input
                          type="number"
                          value={investment}
                          onChange={(e) => setInvestment(e.target.value)}
                          placeholder="Enter the amount you've raised"
                          className="w-full p-2 bg-black border border-gray-700 rounded-md text-white"
                        />
                        <span className="absolute right-3 top-2 text-gray-400">USD</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block font-semibold mb-2">Equity (%)</label>
                      <input
                        type="number"
                        value={equity}
                        onChange={(e) => setEquity(e.target.value)}
                        placeholder="Enter the equity(%) you've diluted"
                        className="w-full p-2 bg-black border border-gray-700 rounded-md text-white"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block font-semibold mb-2">Pre money valuation</label>
                      <input
                        type="text"
                        value={preMoney ? `$${preMoney}` : ""}
                        className="w-full p-2 bg-black border border-gray-700 rounded-md text-white"
                        readOnly
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block font-semibold mb-2">Post money valuation</label>
                      <input
                        type="text"
                        value={postMoney ? `$${postMoney}` : ""}
                        className="w-full p-2 bg-black border border-gray-700 rounded-md text-white"
                        readOnly
                      />
                    </div>

                    <div className="flex flex-col justify-center items-center mt-8">
                      <p className="text-center text-sm text-gray-400">Powered by</p>
                      <div className="font-bold text-lg mt-1">VERTX</div>
                    </div>
                  </div>

                  {/* Formula block on the right */}
                  <div className="w-full md:w-1/2 flex flex-col space-y-4">
                    <div className="bg-[#151515] rounded-xl p-6 h-full">
                      <h3 className="text-xl font-bold mb-4">FORMULA</h3>
                      <div className="bg-[#202020] p-4 rounded mb-4">
                        <p className="text-gray-300 mb-2">Post money valuation = Investment raised / Equity(%)</p>
                        <p className="text-gray-300">Pre money valuation = Post money valuation - Investment raised</p>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-4 mt-6">Key Concepts</h3>
                      <div className="space-y-4">
                        <div className="bg-[#202020] p-4 rounded">
                          <h4 className="font-bold mb-2">Pre-Money Valuation</h4>
                          <p className="text-gray-300">The company's estimated value before receiving new investments. This determines how much equity investors receive for their capital.</p>
                        </div>
                        
                        <div className="bg-[#202020] p-4 rounded">
                          <h4 className="font-bold mb-2">Post-Money Valuation</h4>
                          <p className="text-gray-300">The company's value after new investments have been added to the company's balance sheet.</p>
                        </div>
                        
                        <div className="bg-[#202020] p-4 rounded">
                          <h4 className="font-bold mb-2">Example</h4>
                          <p className="text-gray-300">If you raise $500,000 for 20% equity, your post-money valuation is $2.5M and pre-money valuation is $2M.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQs Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">FAQs</h2>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <details key={idx} className="border border-gray-800 rounded-lg px-6 py-4">
                      <summary className="text-lg font-semibold cursor-pointer">{faq.question}</summary>
                      <p className="mt-2 text-gray-300">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>

              <div className="text-center text-gray-500 text-sm">
                Powered by VERTX
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
