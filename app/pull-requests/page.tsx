'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function PullRequestPage() {
  const [searchValue, setSearchValue] = useState('is:pr is:open')

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      {/* Notification Banner */}
      <div className="mt-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-[#0d1117] border border-gray-600 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex-1 flex flex-col justify-center text-center">
                <h3 className="text-white font-medium mb-1">Label issues and pull requests for new contributors</h3>
                <p className="text-gray-400 text-sm">
                  Now, GitHub will help potential first-time contributors{' '}
                  <a href="#" className="text-blue-400 hover:underline">discover issues</a>{' '}
                  labeled with{' '}
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">good first issue</span>
                </p>
              </div>
              <button className="text-blue-400 hover:underline text-sm ml-4">
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pull Requests Header */}
      <div className="bg-[#0d1117] py-3 mt-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto px-4">
          <div className="flex items-center space-x-4 flex-1">
            <div className="flex items-center bg-[#0d1117] border border-gray-600 rounded-md text-sm text-white divide-x divide-gray-600 flex-1">
              <button className="flex items-center space-x-2 px-3 py-2 bg-[#21262d] hover:bg-[#30363d] rounded-l-md cursor-pointer">
                <span>Filters</span>
                <Image
                  src="/triangle_flipped.png"
                  alt="Dropdown"
                  width={12}
                  height={12}
                />
              </button>
              
              <div className="relative flex-1">
                <Image
                  src="/search-icon.svg"
                  alt="Search"
                  width={16}
                  height={16}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white invert"
                />
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search all issues"
                  className="bg-transparent border-none pl-10 pr-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none w-full"
                />
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 ml-4">
            {/* Labels and Milestones Combined */}
            <div className="flex items-center bg-[#0d1117] border border-gray-600 rounded-md text-sm text-white divide-x divide-gray-600 h-[42px]">
              <button className="flex items-center space-x-2 px-3 py-2 hover:bg-[#21262d] rounded-l-md h-full cursor-pointer">
                <span>Labels</span>
                <span className="bg-gray-600 text-xs px-2 py-1 rounded-full">9</span>
              </button>
              <button className="flex items-center space-x-2 px-3 py-2 hover:bg-[#21262d] rounded-r-md h-full cursor-pointer">
                <span>Milestones</span>
                <span className="bg-gray-600 text-xs px-2 py-1 rounded-full">0</span>
              </button>
            </div>
            
            {/* New Pull Request Button */}
            <button className="bg-[#238636] hover:bg-[#2ea043] text-white px-4 py-2 rounded-md text-sm font-medium cursor-pointer">
              New pull request
            </button>
          </div>
        </div>
      </div>

      {/* Welcome to Pull Requests Content */}
      <div className="flex-1 flex items-center justify-center py-8">
        <div className="text-center max-w-6xl mx-auto px-4">
          <div className="bg-[#0d1117] border border-gray-600 rounded-lg py-20 px-32">
            <h1 className="text-3xl font-bold text-white mb-6">Welcome to pull requests!</h1>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              Pull requests help you collaborate on code with other people. As pull requests are created, they'll 
              appear here in a searchable and filterable list. To get started, you should{' '}
              <a href="#" className="text-blue-400 hover:underline">create a pull request</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}