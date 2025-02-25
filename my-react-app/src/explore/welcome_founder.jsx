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
        <main className={`flex-1 flex items-center justify-center transition-all duration-300 pt-25 ${sidebarOpen ? 'ml-64' : '-ml-20'}`}>
          <div className="max-w-4xl w-full px-4">

          <h1 className="text-4xl font-bold mb-2">Welcome founder.</h1>
<p className="text-xl text-gray-400 mb-8">Introduce yourself</p>

            
            
<div className="bg-[#151515] rounded-3xl p-12 shadow-xl border border-gray-600">


              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-lg mb-2">First Name</label>
                  <div className="border-b-[1px] border-[#1D1C1C]">
                  

                    <input 
                      type="text" 
                      placeholder="E.g Mark" 
                      className="w-full p-2 bg-transparent text-gray-400 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-lg mb-2">Last Name</label>
                  <div className="border-b-[1px] border-[#1D1C1C]">
                    <input 
                      type="text" 
                      placeholder="E.g Zukerberg" 
                      className="w-full p-2 bg-transparent text-gray-400 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-lg mb-2">City</label>
                <div className="border-b-[1px] border-[#1D1C1C]">
                  <input 
                    type="text" 
                    placeholder="Type and select your residing city." 
                    className="w-full p-2 bg-transparent text-gray-400 focus:outline-none"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-lg mb-2">Short headline</label>
                <div className="border-b-[1px] border-[#1D1C1C]">
                  <input 
                    type="text" 
                    placeholder="What everyone will see first.." 
                    className="w-full p-2 bg-transparent text-gray-400 focus:outline-none"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-lg mb-2">Links</label>
                <div className="space-y-4">
                  <div className="flex items-center border-b-[1px] border-[#1D1C1C] pb-2">
                    <span className="mr-2">
                    <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.33334 12.25C2.01251 12.25 1.73785 12.1358 1.50938 11.9073C1.28091 11.6788 1.16667 11.4042 1.16667 11.0833V4.66666C1.16667 4.34582 1.28091 4.07117 1.50938 3.8427C1.73785 3.61423 2.01251 3.49999 2.33334 3.49999H4.66667V2.33332C4.66667 2.01249 4.78091 1.73784 5.00938 1.50936C5.23785 1.28089 5.51251 1.16666 5.83334 1.16666H8.16667C8.4875 1.16666 8.76216 1.28089 8.99063 1.50936C9.2191 1.73784 9.33334 2.01249 9.33334 2.33332V3.49999H11.6667C11.9875 3.49999 12.2622 3.61423 12.4906 3.8427C12.7191 4.07117 12.8333 4.34582 12.8333 4.66666V11.0833C12.8333 11.4042 12.7191 11.6788 12.4906 11.9073C12.2622 12.1358 11.9875 12.25 11.6667 12.25H2.33334ZM2.33334 11.0833H11.6667V4.66666H2.33334V11.0833ZM5.83334 3.49999H8.16667V2.33332H5.83334V3.49999Z" fill="#757575"/>
</svg>

                    </span>
                    <input 
                      type="text" 
                      placeholder="https://portfolio.com/..." 
                      className="w-full bg-transparent text-gray-400 focus:outline-none"
                    />
                  </div>
                  
                  <div className="flex items-center border-b-[1px] border-[#1D1C1C] pb-2">
                    <span className="mr-2">
                    <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2206_55)">
<path d="M2.79329 3.86053H0.384268C0.277352 3.86053 0.19072 3.94721 0.19072 4.05408V11.7932C0.19072 11.9001 0.277352 11.9868 0.384268 11.9868H2.79329C2.9002 11.9868 2.98684 11.9001 2.98684 11.7932V4.05408C2.98684 3.94721 2.9002 3.86053 2.79329 3.86053Z" fill="#757575"/>
<path d="M1.58965 0.0132141C0.71311 0.0132141 0 0.72555 0 1.60112C0 2.47708 0.71311 3.18969 1.58965 3.18969C2.4655 3.18969 3.17803 2.47705 3.17803 1.60112C3.17806 0.72555 2.4655 0.0132141 1.58965 0.0132141Z" fill="#757575"/>
<path d="M8.92081 3.66818C7.95326 3.66818 7.23802 4.08412 6.8042 4.55672V4.05408C6.8042 3.9472 6.71757 3.86053 6.61065 3.86053H4.30359C4.19668 3.86053 4.11005 3.9472 4.11005 4.05408V11.7932C4.11005 11.9001 4.19668 11.9868 4.30359 11.9868H6.70735C6.81427 11.9868 6.9009 11.9001 6.9009 11.7932V7.96414C6.9009 6.67383 7.25138 6.17115 8.15083 6.17115C9.13042 6.17115 9.20827 6.97701 9.20827 8.03053V11.7933C9.20827 11.9002 9.2949 11.9868 9.40181 11.9868H11.8065C11.9134 11.9868 12 11.9002 12 11.7933V7.54821C12 5.62956 11.6342 3.66818 8.92081 3.66818Z" fill="#757575"/>
</g>
<defs>
<clipPath id="clip0_2206_55">
<rect width="12" height="12" fill="white"/>
</clipPath>
</defs>
</svg>

                    </span>
                    <input 
                      type="text" 
                      placeholder="https://linkedin.com/..." 
                      className="w-full bg-transparent text-gray-400 focus:outline-none"
                    />
                  </div>
                  
                  <div className="flex items-center border-b-[1px] border-[#1D1C1C] pb-2">
                    <span className="mr-2">
                    <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2206_60)">
<path d="M5.9768 0.164062C2.67633 0.164062 0 2.83992 0 6.14086C0 8.78161 1.71253 11.022 4.08731 11.8123C4.386 11.8676 4.49569 11.6826 4.49569 11.5247C4.49569 11.3822 4.49011 10.9114 4.48758 10.412C2.82478 10.7735 2.47392 9.70678 2.47392 9.70678C2.20205 9.01594 1.81031 8.83228 1.81031 8.83228C1.26806 8.46131 1.85119 8.46891 1.85119 8.46891C2.45138 8.51109 2.76741 9.08484 2.76741 9.08484C3.30047 9.99858 4.16559 9.73439 4.50666 9.58172C4.56028 9.19538 4.7152 8.93175 4.88611 8.7825C3.55861 8.63133 2.16305 8.11884 2.16305 5.82872C2.16305 5.17622 2.39653 4.64302 2.77889 4.22447C2.71683 4.07391 2.51227 3.46603 2.83678 2.64277C2.83678 2.64277 3.33867 2.48212 4.48083 3.25542C4.95755 3.12295 5.46886 3.05658 5.9768 3.05433C6.48474 3.05658 6.99642 3.12295 7.47408 3.25542C8.61488 2.48212 9.11606 2.64277 9.11606 2.64277C9.44138 3.46603 9.23672 4.07391 9.17466 4.22447C9.55786 4.64302 9.78975 5.17617 9.78975 5.82872C9.78975 8.12428 8.39156 8.62978 7.06069 8.77772C7.27505 8.9632 7.46606 9.32695 7.46606 9.88453C7.46606 10.6842 7.45913 11.3279 7.45913 11.5247C7.45913 11.6838 7.5667 11.8702 7.8697 11.8115C10.2432 11.0203 11.9535 8.78072 11.9535 6.14086C11.9535 2.83992 9.27759 0.164062 5.9768 0.164062Z" fill="#757575"/>
<path d="M2.23851 8.67816C2.22539 8.70784 2.1786 8.71674 2.13609 8.6964C2.09273 8.6769 2.06835 8.6364 2.08242 8.60658C2.09531 8.57602 2.14209 8.56749 2.18535 8.58802C2.22881 8.60748 2.25356 8.64835 2.23851 8.67816ZM2.53251 8.94048C2.50401 8.96691 2.44828 8.95463 2.41045 8.91287C2.37135 8.87119 2.36404 8.81551 2.39296 8.78865C2.42235 8.76226 2.4764 8.77458 2.51559 8.8163C2.55468 8.85844 2.56228 8.9138 2.53246 8.94052M2.73421 9.2761C2.69756 9.30155 2.63765 9.27769 2.60067 9.22454C2.56406 9.17143 2.56406 9.10768 2.60146 9.08213C2.63859 9.05659 2.69756 9.07955 2.73506 9.13229C2.77162 9.18634 2.77162 9.25009 2.73417 9.27615M3.07528 9.66484C3.04251 9.70093 2.97276 9.69127 2.92167 9.64196C2.86945 9.59377 2.85487 9.52538 2.88773 9.48924C2.92087 9.45305 2.99104 9.46323 3.04251 9.51212C3.0944 9.56021 3.1102 9.62912 3.07528 9.66484ZM3.51609 9.79609C3.5017 9.84287 3.43448 9.86415 3.36679 9.84427C3.2992 9.82379 3.25495 9.76894 3.26859 9.72165C3.28265 9.67454 3.35015 9.65237 3.41835 9.67365C3.48585 9.69404 3.53015 9.74846 3.51609 9.79609ZM4.01784 9.85173C4.01953 9.90104 3.9621 9.94191 3.89104 9.9428C3.81956 9.94435 3.76176 9.90446 3.76101 9.85599C3.76101 9.80621 3.81712 9.76571 3.88856 9.76454C3.95962 9.76313 4.01784 9.80274 4.01784 9.85173ZM4.51068 9.83284C4.51921 9.88093 4.46981 9.93034 4.39926 9.94346C4.32989 9.95612 4.26567 9.92644 4.25681 9.87877C4.24818 9.82946 4.29853 9.7801 4.36776 9.7673C4.43845 9.75502 4.50168 9.78394 4.51068 9.83284Z" fill="#757575"/>
</g>
<defs>
<clipPath id="clip0_2206_60">
<rect width="12" height="12" fill="white"/>
</clipPath>
</defs>
</svg>

                    </span>
                    <input 
                      type="text" 
                      placeholder="https://github.com/..." 
                      className="w-full bg-transparent text-gray-400 focus:outline-none"
                    />
                  </div>
                  
                  <div className="flex items-center border-b-[1px] border-[#1D1C1C] pb-2">
                    <span className="mr-2">
                    <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.08334 5.2L11 1H10L6.63334 4.6L4.00001 1H0.666672L4.76667 6.6L0.666672 11H1.66667L5.21667 7.2L8.00001 11H11.3333L7.08334 5.2ZM2.15001 1.66667H3.48334L9.83334 10.3333H8.50001L2.15001 1.66667Z" fill="#757575"/>
</svg>

                    </span>
                    <input 
                      type="text" 
                      placeholder="https://x.com/..." 
                      className="w-full bg-transparent text-gray-400 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8">
            <button className="bg-white text-black font-bold py-3 px-12 rounded-[10px] text-lg ml-auto">
  Continue
</button>

            </div>
          </div>
        </main>
      </div>
    </div>
  )
}