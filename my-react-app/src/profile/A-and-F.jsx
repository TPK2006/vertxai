"use client"

import React, { useState, useEffect } from "react"
import { Header, Sidebar } from "./index"

export default function FinancialModeling() {
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

  const [revenue, setRevenue] = useState("");
  const [cogs, setCogs] = useState("");
  const [expenses, setExpenses] = useState("");
  const [taxes, setTaxes] = useState("");

  const grossProfit = revenue - cogs;
  const netProfit = grossProfit - expenses - taxes;

  const faqs = [
    {
      question: "What are the three main financial statements?",
      answer: "1. Income Statement – Shows revenue, expenses, and net profit.\n2. Balance Sheet – Shows assets, liabilities, and equity.\n3. Cash Flow Statement – Tracks cash movements."
    },
    {
      question: "How is Net Profit Calculated?",
      answer: "Net Profit = Revenue − COGS − Operating Expenses − Taxes"
    },
    {
      question: "What is Burn Rate, and why is it important?",
      answer: "Burn rate is the amount of money a startup spends per month. It helps determine how long a startup can operate before running out of cash (runway).\nRunway = Available Cash/Monthly Burn Rate"
    }
  ]

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
                <h1 className="text-4xl font-bold mb-8">Accounting and Finance</h1>
                
                <div className="space-y-6 text-gray-300 mb-12">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Financial Modeling</h2>
                    <p className="text-lg">Financial modeling involves forecasting a company's financial performance using spreadsheets or software. It helps in:</p>
                    <ul className="space-y-2 text-lg list-disc pl-8 mt-2">
                      <li>Startup Valuation & Fundraising</li>
                      <li>Revenue & Expense Forecasting</li>
                      <li>Profitability Analysis</li>
                      <li>Investment & Decision Making</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Accounting</h2>
                    <p className="text-lg">Accounting is the process of recording, summarizing, and reporting financial transactions. It ensures:</p>
                    <ul className="space-y-2 text-lg list-disc pl-8 mt-2">
                      <li>Financial Transparency for investors</li>
                      <li>Tax Compliance for legal operations</li>
                      <li>Budgeting & Expense Management</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">Just remember</h2>
                    <ul className="space-y-2 text-lg">
                      <li><span className="font-bold">Revenue</span> - The total income generated from sales.</li>
                      <li><span className="font-bold">Gross Profit</span> - Revenue minus Cost of Goods Sold (COGS).</li>
                      <li><span className="font-bold">Net Profit (Net Income)</span> - Profit after deducting all expenses.</li>
                      <li><span className="font-bold">EBITDA</span> - Earnings before Interest, Taxes, Depreciation, and Amortization.</li>
                      <li><span className="font-bold">Balance Sheet</span> - A financial statement showing assets, liabilities, and equity.</li>
                      <li><span className="font-bold">Income Statement</span> - A statement that reports revenue, expenses, and profits.</li>
                      <li><span className="font-bold">Cash Flow Statement</span> - A statement that tracks cash inflows and outflows</li>
                      <li><span className="font-bold">Burn Rate</span> - The rate at which a company spends money before becoming profitable.</li>
                      <li><span className="font-bold">Break-Even Point</span> - The point where total revenue equals total costs.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Revenue Calculator Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Revenue Calculator</h2>
                <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                  {/* Calculator on the left */}
                  <div className="bg-[#101010] border-2 border-white rounded-2xl p-6 shadow-xl w-full md:w-1/2">
                    <div className="mb-4">
                      <label className="block font-semibold mb-2">Total Revenue</label>
                      <div className="relative">
                        <input
                          type="number"
                          value={revenue}
                          onChange={(e) => setRevenue(Number(e.target.value))}
                          className="w-full p-2 bg-black border border-gray-700 rounded-md text-white"
                          placeholder="Enter value"
                        />
                        <span className="absolute right-3 top-2 text-gray-400">USD</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block font-semibold mb-2">Cost of Goods Sold (COGS)</label>
                      <input
                        type="number"
                        value={cogs}
                        onChange={(e) => setCogs(Number(e.target.value))}
                        className="w-full p-2 bg-black border border-gray-700 rounded-md text-white"
                        placeholder="Enter value"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block font-semibold mb-2">Other Expenses (if any)</label>
                      <input
                        type="number"
                        value={expenses}
                        onChange={(e) => setExpenses(Number(e.target.value))}
                        className="w-full p-2 bg-black border border-gray-700 rounded-md text-white"
                        placeholder="Enter value"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block font-semibold mb-2">Taxes (if any)</label>
                      <input
                        type="number"
                        value={taxes}
                        onChange={(e) => setTaxes(Number(e.target.value))}
                        className="w-full p-2 bg-black border border-gray-700 rounded-md text-white"
                        placeholder="Enter value"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block font-semibold mb-2">Gross Profit</label>
                      <input
                        type="text"
                        value={grossProfit || ""}
                        className="w-full p-2 bg-black border border-gray-700 rounded-md text-white"
                        readOnly
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block font-semibold mb-2">Net Profit</label>
                      <input
                        type="text"
                        value={netProfit || ""}
                        className="w-full p-2 bg-black border border-gray-700 rounded-md text-white"
                        readOnly
                      />
                    </div>

                    <div className="flex flex-col justify-center items-center mt-8">
                      <p className="text-center text-sm text-gray-400">Powered by</p>
                      <svg width="80" height="30" viewBox="0 0 47 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.72 0.799999H8.656V8.176L5.008 12H3.584L0.944 8.096V0.799999H2.88V7.728L4.416 10.016L6.72 7.6V0.799999ZM11.8498 0.799999H18.0898V2.608H12.5858L12.2978 2.928V5.44H15.9938V7.248H12.2978V9.488L12.7618 10.192H18.0898V12H11.8018L10.3618 9.856V2.32L11.8498 0.799999ZM20.1155 0.799999H25.9875L27.8595 3.536V5.408L26.3875 6.928L27.8595 9.088V12H25.9235V9.424L24.4675 7.296H22.8995L22.0515 6.768V12H20.1155V0.799999ZM22.0515 2.608V5.488H25.2995L25.9235 4.848V3.92L25.0115 2.608H22.0515ZM29.4053 0.799999H37.7573V2.608H33.5013L34.5573 3.552V12H32.6213V4L32.1573 2.608H29.4053V0.799999ZM44.791 0.799999H46.727V4.208L45.207 5.76L46.727 7.984V12H44.791V8.352L43.975 7.216H43.239L41.559 8.976V12H39.623V8.368L41.143 6.816L39.623 4.592V0.799999H41.559V4.224L42.343 5.408H43.111L44.791 3.648V0.799999Z" fill="white"/>
</svg>

                    </div>
                  </div>

                  {/* Formula block on the right */}
                  <div className="w-full md:w-1/2 flex flex-col space-y-4">
                    <div className="bg-[#151515] rounded-xl p-6 h-full">
                      <h3 className="text-xl font-bold mb-4">FORMULA</h3>
                      <div className="bg-[#202020] p-4 rounded mb-4">
                        <p className="text-gray-300 mb-2">Gross Profit = Revenue - Cost of Goods Sold (COGS)</p>
                        <p className="text-gray-300">Net Profit = Revenue - COGS - Operating Expenses - Taxes</p>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-4 mt-6">Key Concepts</h3>
                      <div className="space-y-4">
                        <div className="bg-[#202020] p-4 rounded">
                          <h4 className="font-bold mb-2">Revenue</h4>
                          <p className="text-gray-300">The total amount of income generated from sales of goods or services before any expenses are deducted.</p>
                        </div>
                        
                        <div className="bg-[#202020] p-4 rounded">
                          <h4 className="font-bold mb-2">Cost of Goods Sold (COGS)</h4>
                          <p className="text-gray-300">The direct costs attributable to the production of goods or services sold by a company.</p>
                        </div>
                        
                        <div className="bg-[#202020] p-4 rounded">
                          <h4 className="font-bold mb-2">Profit Margins</h4>
                          <p className="text-gray-300">Gross Margin = (Gross Profit / Revenue) × 100%<br />Net Margin = (Net Profit / Revenue) × 100%</p>
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
                  <details className="border border-gray-800 rounded-lg px-6 py-4">
                    <summary className="text-lg font-semibold cursor-pointer">Q1: What are the three main financial statements?</summary>
                    <div className="mt-2 text-gray-300">
                      <p>1. Income Statement – Shows revenue, expenses, and net profit.</p>
                      <p>2. Balance Sheet – Shows assets, liabilities, and equity.</p>
                      <p>3. Cash Flow Statement – Tracks cash movements.</p>
                    </div>
                  </details>

                  <details className="border border-gray-800 rounded-lg px-6 py-4">
                    <summary className="text-lg font-semibold cursor-pointer">Q2: How is Net Profit Calculated?</summary>
                    <p className="mt-2 text-gray-300">Net Profit = Revenue - COGS - Operating Expenses - Taxes</p>
                  </details>

                  <details className="border border-gray-800 rounded-lg px-6 py-4">
                    <summary className="text-lg font-semibold cursor-pointer">Q3: What is Burn Rate, and why is it important?</summary>
                    <div className="mt-2 text-gray-300">
                      <p>Burn rate is the amount of money a startup spends per month. It helps determine how long a startup can operate before running out of cash (runway).</p>
                      <p>Runway = Available Cash / Monthly Burn Rate</p>
                    </div>
                  </details>
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
