"use client"

import React, { useState, useEffect } from "react"
import { Pie, PieChart } from "recharts"
import { Header, Sidebar } from "./index"

export default function EquityCalculator() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [founders, setFounders] = useState([
    { id: "1", name: "Praneeth", percentage: 50, checks: 0 },
    { id: "2", name: "Prakash", percentage: 50, checks: 0 },
  ])
  const [newFounderName, setNewFounderName] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const questions = [
    "Who is the CEO?",
    "Who is pitching investors?",
    "Who is in charge of business development?",
    "Who is in charge of sales?",
    "Who is in charge of product development?",
    "Is this founder working fulltime on the startup before raising funds?",
    "How essential is this founder for the startup to execute?",
    "Does this founder have prior startup founder experience?",
    "Does this founder have relationships with potential customers for the startup?",
    "Does this founder have relationships with potential investors for the startup?",
    "Does this founder have the startup's financial models and projections?",
    "Who had the original idea?",
  ]

  const faqs = [
    {
      question: "How does fundraising impact founder equity?",
      answer: "When a startup raises funds, new shares are issued, diluting the founder's percentage ownership. However, the total company value increases, so their remaining stake may be worth more."
    },
    {
      question: "When a startup raises funds, new shares are issued, diluting the founder's percentage ownership. However, the total company value increases, so their remaining stake may be worth more."

    },
    {
      question: "What happens when employees are given stock options?",
      answer: "Stock options reserve equity for employees. When exercised, it dilutes existing shareholders but helps in retaining top talent."
    },
    {
      question: "Stock options reserve equity for employees. When exercised, it dilutes existing shareholders but helps in retaining top talent."

    },
    {
      question: "How do SAFE & Convertible Notes affect the Cap Table?",
      answer: "These convert into equity later, often at a discount or using a valuation cap. Founders should track their impact to avoid unexpected dilution."
    },
    {
      question: "These convert into equity later, often at a discount or using a valuation cap. Founders should track their impact to avoid unexpected dilution."
    }
  ]

  const handleCheckChange = (founderId, questionIndex, checked) => {
    setFounders(founders.map(founder => {
      if (founder.id === founderId) {
        const newChecks = checked ? founder.checks + 1 : founder.checks - 1
        const totalChecks = founders.reduce((sum, f) => sum + (f.id === founderId ? newChecks : f.checks), 0)
        return {
          ...founder,
          checks: newChecks,
          percentage: Math.round((newChecks / totalChecks) * 100) || 50
        }
      }
      return founder
    }))
  }

  const addFounder = () => {
    if (newFounderName.trim()) {
     
      setFounders([...founders, {
        id: (founders.length + 1).toString(),
        name: newFounderName.trim(),
        percentage: 0,
        checks: 0
      }])
      setNewFounderName("")
    }
  }

  const removeFounder = (id) => {
    setFounders(founders.filter(f => f.id !== id))
  }

  const updateFounderName = (id, newName) => {
    setFounders(founders.map(f => 
      f.id === id ? { ...f, name: newName } : f
    ))
  }

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsDialogOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

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
                <h1 className="text-4xl font-bold mb-8">Equity and Cap Table Management</h1>
                
                <div className="space-y-6 text-gray-300 mb-12">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">What is equity & cap table management?</h2>
                    <ul className="space-y-2 text-lg">
                      <li>Equity refers to ownership in a startup, typically divided among founders, investors, and employees.</li>
                      <li>A Cap Table (Capitalization Table) is a document that tracks:</li>
                      <li className="ml-4">Who owns what % of the company.</li>
                      <li className="ml-4">How ownership changes with fundraising.</li>
                      <li className="ml-4">Dilution effects after new investments.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Why it is important</h2>
                    <ul className="space-y-2 text-lg">
                      <li>Founders need to track dilution when raising funds.</li>
                      <li>Investors use it to calculate their ownership & exit value.</li>
                      <li>Employees with stock options see their potential earnings.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Definitions Table */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Just remember</h2>
                <div className="border-2 border-gray-500 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-black-200">
                        <th className="p-5 text-left text-lg border-r-2 border-gray-500">Term</th>
                        <th className="p-5 text-left text-lg">Case</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300 ">
                      <tr className="border-t-2  border-b-2 border-gray-500">
                        <td className="p-5 border-r-2 border-gray-500">Founder Equity</td>
                        <td className="p-5">The ownership stake of the startup's original founders.</td>
                      </tr>
                      <tr className="border-t-2 border-gray-500">
                        <td className="p-5 border-r-2 border-gray-500">Dilution</td>
                        <td className="p-5">The decrease in existing shareholders' ownership when new shares are issued.</td>
                      </tr>
                      <tr className="border-t-2 border-gray-500">
                        <td className="p-5 border-r-2 border-gray-500">Stock Options (ESOPs)</td>
                        <td className="p-5">Shares reserved for employees as part of compensation.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Calculator Section */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold mb-6">Founder equity calculator</h2>
                  <div className="overflow-x-auto border border-gray-800 rounded-lg">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-900 border-b border-gray-800">
                          <th className="p-5 text-left text-lg">Questions</th>
                          {founders.map(founder => (
                            <th key={founder.id} className="p-5 text-center text-lg">{founder.name}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        {questions.map((question, idx) => (
                          <tr key={idx} className="border-b border-gray-800">
                            <td className="p-5">{question}</td>
                            {founders.map(founder => (
                              <td key={founder.id} className="p-5 text-center">
                                <input
                                  type="checkbox"
                                  className="w-5 h-5 border-2 border-gray-600"
                                  onChange={(e) => handleCheckChange(founder.id, idx, e.target.checked)}
                                />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <div className="mb-8 flex justify-center">
                    <PieChart width={200} height={200}>
                      <Pie
                        data={founders.map(f => ({ name: f.name, value: f.percentage }))}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                      />
                    </PieChart>
                  </div>

                  {founders.map(founder => (
                    <div key={founder.id} className="mb-6">
                      <div className="flex justify-between mb-2 text-lg">
                        <span>{founder.name}</span>
                        <span>{founder.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${founder.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}

                  <a
                    onClick={() => setIsDialogOpen(true)}
                    className="w-full mt-4 text-lg bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Manage Co-founders
                  </a>
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
  <div className="flex flex-col items-center">
    <p>Powered by</p>
    <svg width="80" height="30" viewBox="0 0 47 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.72 0.799999H8.656V8.176L5.008 12H3.584L0.944 8.096V0.799999H2.88V7.728L4.416 10.016L6.72 7.6V0.799999ZM11.8498 0.799999H18.0898V2.608H12.5858L12.2978 2.928V5.44H15.9938V7.248H12.2978V9.488L12.7618 10.192H18.0898V12H11.8018L10.3618 9.856V2.32L11.8498 0.799999ZM20.1155 0.799999H25.9875L27.8595 3.536V5.408L26.3875 6.928L27.8595 9.088V12H25.9235V9.424L24.4675 7.296H22.8995L22.0515 6.768V12H20.1155V0.799999ZM22.0515 2.608V5.488H25.2995L25.9235 4.848V3.92L25.0115 2.608H22.0515ZM29.4053 0.799999H37.7573V2.608H33.5013L34.5573 3.552V12H32.6213V4L32.1573 2.608H29.4053V0.799999ZM44.791 0.799999H46.727V4.208L45.207 5.76L46.727 7.984V12H44.791V8.352L43.975 7.216H43.239L41.559 8.976V12H39.623V8.368L41.143 6.816L39.623 4.592V0.799999H41.559V4.224L42.343 5.408H43.111L44.791 3.648V0.799999Z" fill="white"/>
    </svg>
  </div>
</div>

            </div>

            {/* Custom Dialog */}
            {isDialogOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 w-96">
                  <h2 className="text-xl font-bold mb-4">Manage Co-founders</h2>
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="New co-founder name"
                        value={newFounderName}
                        onChange={(e) => setNewFounderName(e.target.value)}
                        className="flex-grow p-2 bg-gray-800 border border-gray-700 rounded"
                      />
                      <button
                        onClick={addFounder}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                      >
                        Add
                      </button>
                    </div>
                    {founders.map(founder => (
                      <div key={founder.id} className="flex justify-between items-center">
                        <input
                          type="text"
                          value={founder.name}
                          onChange={(e) => updateFounderName(founder.id, e.target.value)}
                          className="bg-gray-800 border border-gray-700 rounded p-2"
                        />
                        <button
                          onClick={() => removeFounder(founder.id)}
                          className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded ml-2"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setIsDialogOpen(false)}
                    className="mt-4 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
