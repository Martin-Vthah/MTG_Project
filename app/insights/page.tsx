import Image from 'next/image'

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-[#161b22] border-r border-gray-700 min-h-screen">
          <nav className="p-4">
            {/* Pulse - Active */}
            <div className="mb-1">
              <div className="flex items-center space-x-3 p-3 bg-[#21262d] rounded-md border-l-4 border-orange-500">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
                <span className="text-white font-medium">Pulse</span>
              </div>
            </div>

            {/* Contributors */}
            <div className="mb-1">
              <div className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-[#21262d] rounded-md cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>Contributors</span>
              </div>
            </div>

            {/* Community */}
            <div className="mb-1">
              <div className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-[#21262d] rounded-md cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span>Community</span>
              </div>
            </div>

            {/* Community Standards */}
            <div className="mb-1">
              <div className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-[#21262d] rounded-md cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"></path>
                  <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"></path>
                  <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"></path>
                </svg>
                <span>Community Standards</span>
              </div>
            </div>

            {/* Traffic */}
            <div className="mb-1">
              <div className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-[#21262d] rounded-md cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3v18h18"></path>
                  <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
                </svg>
                <span>Traffic</span>
              </div>
            </div>

            {/* Commits */}
            <div className="mb-1">
              <div className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-[#21262d] rounded-md cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M1.05 12H7"></path>
                  <path d="M17.01 12h5.95"></path>
                </svg>
                <span>Commits</span>
              </div>
            </div>

            {/* Code frequency */}
            <div className="mb-1">
              <div className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-[#21262d] rounded-md cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3v18h18"></path>
                  <rect x="7" y="10" width="3" height="7"></rect>
                  <rect x="14" y="6" width="3" height="11"></rect>
                </svg>
                <span>Code frequency</span>
              </div>
            </div>

            {/* Dependency graph */}
            <div className="mb-1">
              <div className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-[#21262d] rounded-md cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="7.5,8 12,5 16.5,8"></polyline>
                  <polyline points="7.5,16 12,13 16.5,16"></polyline>
                </svg>
                <span>Dependency graph</span>
              </div>
            </div>

            {/* Network */}
            <div className="mb-1">
              <div className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-[#21262d] rounded-md cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 4h4v4"></path>
                  <path d="M20 4L4 20"></path>
                  <path d="M8 20H4v-4"></path>
                </svg>
                <span>Network</span>
              </div>
            </div>

            {/* Forks */}
            <div className="mb-1">
              <div className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-[#21262d] rounded-md cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="18" r="3"></circle>
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="18" cy="6" r="3"></circle>
                  <path d="M18 9v2c0 1-1 2-2 2H8c-1 0-2-1-2-2V9"></path>
                  <path d="M12 12v3"></path>
                </svg>
                <span>Forks</span>
              </div>
            </div>

            {/* Actions Usage Metrics */}
            <div className="mb-1">
              <div className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-[#21262d] rounded-md cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3v18h18"></path>
                  <path d="M8 17l4-4 4 4"></path>
                  <path d="M8 12l4-4 4 4"></path>
                </svg>
                <span>Actions Usage Metrics</span>
              </div>
            </div>

            {/* Actions Performance Metrics */}
            <div className="mb-1">
              <div className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-[#21262d] rounded-md cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20"></path>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
                <span>Actions Performance Metrics</span>
              </div>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Header with date range and period selector */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-white">July 23, 2025 – July 30, 2025</h1>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">Period:</span>
              <button className="bg-[#21262d] hover:bg-[#30363d] border border-gray-600 text-white px-3 py-2 rounded-md text-sm flex items-center space-x-2">
                <span>1 week</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </button>
            </div>
          </div>

          {/* Overview Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-6">Overview</h2>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Active pull requests */}
              <div className="bg-[#161b22] border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">0 Active pull requests</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400">
                        <circle cx="18" cy="18" r="3"></circle>
                        <circle cx="6" cy="6" r="3"></circle>
                        <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
                        <line x1="6" y1="9" x2="6" y2="21"></line>
                      </svg>
                      <span className="text-2xl font-bold text-white">0</span>
                    </div>
                    <p className="text-gray-400 text-sm">Merged pull requests</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-400">
                        <circle cx="18" cy="18" r="3"></circle>
                        <circle cx="6" cy="6" r="3"></circle>
                        <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
                        <line x1="6" y1="9" x2="6" y2="21"></line>
                      </svg>
                      <span className="text-2xl font-bold text-white">0</span>
                    </div>
                    <p className="text-gray-400 text-sm">Open pull requests</p>
                  </div>
                </div>
              </div>

              {/* Active issues */}
              <div className="bg-[#161b22] border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">0 Active issues</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="15" y1="9" x2="9" y2="15"></line>
                        <line x1="9" y1="9" x2="15" y2="15"></line>
                      </svg>
                      <span className="text-2xl font-bold text-white">0</span>
                    </div>
                    <p className="text-gray-400 text-sm">Closed issues</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-400">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="6" x2="12" y2="18"></line>
                        <line x1="6" y1="12" x2="18" y2="12"></line>
                      </svg>
                      <span className="text-2xl font-bold text-white">0</span>
                    </div>
                    <p className="text-gray-400 text-sm">New issues</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity Summary */}
            <div className="bg-[#161b22] border border-gray-700 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-gray-400 leading-relaxed">
                    Excluding merges, <span className="text-white font-medium">2 authors</span> have pushed{' '}
                    <span className="text-white font-medium">2 commits</span> to main and{' '}
                    <span className="text-white font-medium">2 commits</span> to all branches. On main,{' '}
                    <span className="text-white font-medium">0 files</span> have changed and there have been{' '}
                    <span className="text-green-400 font-medium">0 additions</span> and{' '}
                    <span className="text-red-400 font-medium">0 deletions</span>.
                  </p>
                </div>

                {/* Contributors Chart */}
                <div className="ml-8">
                  <div className="relative w-32 h-24">
                    <svg width="128" height="96" viewBox="0 0 128 96" className="text-gray-600">
                      {/* Chart bars */}
                      <rect x="40" y="20" width="16" height="60" fill="#d2691e" opacity="0.8"></rect>
                      <rect x="60" y="30" width="16" height="50" fill="#d2691e" opacity="0.8"></rect>
                      
                      {/* Contributors avatars */}
                      <g transform="translate(48, 85)">
                        <rect x="0" y="0" width="12" height="12" fill="#f0f0f0" rx="2"></rect>
                        <rect x="16" y="0" width="12" height="12" fill="#d2691e" rx="6"></rect>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}