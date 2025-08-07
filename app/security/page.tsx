import Image from 'next/image'

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-[#161b22] border-r border-gray-700 min-h-screen">
          <nav className="p-4">
            {/* Overview Section */}
            <div className="mb-6">
              <div className="flex items-center space-x-3 p-3 bg-[#21262d] rounded-md border-l-4 border-blue-500">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M12 1v6m0 6v6m-9-3h6m6 0h6"></path>
                </svg>
                <span className="text-white font-medium">Overview</span>
              </div>
            </div>

            {/* Reporting Section */}
            <div className="mb-6">
              <h3 className="text-gray-400 text-sm font-medium mb-3 px-3">Reporting</h3>
              <div className="space-y-1">
                <div className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-[#21262d] rounded-md cursor-pointer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14,2 14,8 20,8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10,9 9,9 8,9"></polyline>
                  </svg>
                  <span>Policy</span>
                </div>
                <div className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-[#21262d] rounded-md cursor-pointer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <span>Advisories</span>
                </div>
              </div>
            </div>

            {/* Vulnerability alerts Section */}
            <div className="mb-6">
              <h3 className="text-gray-400 text-sm font-medium mb-3 px-3">Vulnerability alerts</h3>
              <div className="space-y-1">
                <div className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-[#21262d] rounded-md cursor-pointer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <circle cx="12" cy="12" r="4"></circle>
                  </svg>
                  <span>Dependabot</span>
                </div>
                <div className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-[#21262d] rounded-md cursor-pointer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="M21 21l-4.35-4.35"></path>
                  </svg>
                  <span>Code scanning</span>
                </div>
                <div className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-[#21262d] rounded-md cursor-pointer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"></path>
                    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"></path>
                    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"></path>
                  </svg>
                  <span>Secret scanning</span>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold text-white mb-8">Security overview</h1>

          <div className="space-y-6">
            {/* Security policy */}
            <div className="bg-[#161b22] border border-gray-700 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">Security policy</h3>
                    <span className="text-sm text-gray-400">• Disabled</span>
                  </div>
                  <p className="text-gray-400">Define how users should report security vulnerabilities for this repository</p>
                </div>
                <button className="bg-[#21262d] hover:bg-[#30363d] border border-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Set up a security policy
                </button>
              </div>
            </div>

            {/* Security advisories */}
            <div className="bg-[#161b22] border border-gray-700 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">Security advisories</h3>
                    <span className="text-sm text-green-400">• Enabled</span>
                  </div>
                  <p className="text-gray-400">View or disclose security advisories for this repository</p>
                </div>
                <button className="text-blue-400 hover:underline text-sm">
                  View security advisories
                </button>
              </div>
            </div>

            {/* Private vulnerability reporting */}
            <div className="bg-[#161b22] border border-gray-700 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">Private vulnerability reporting</h3>
                    <span className="text-sm text-gray-400">• Disabled</span>
                  </div>
                  <p className="text-gray-400">Allow users to privately report potential security vulnerabilities</p>
                </div>
                <button className="bg-[#21262d] hover:bg-[#30363d] border border-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Enable vulnerability reporting
                </button>
              </div>
            </div>

            {/* Dependabot alerts */}
            <div className="bg-[#161b22] border border-gray-700 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">Dependabot alerts</h3>
                    <span className="text-sm text-gray-400">• Disabled</span>
                  </div>
                  <p className="text-gray-400">Get notified when one of your dependencies has a vulnerability</p>
                </div>
                <button className="bg-[#21262d] hover:bg-[#30363d] border border-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Enable Dependabot alerts
                </button>
              </div>
            </div>

            {/* Code scanning alerts */}
            <div className="bg-[#161b22] border border-gray-700 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">Code scanning alerts</h3>
                    <span className="text-sm text-yellow-400">• Needs setup</span>
                  </div>
                  <p className="text-gray-400">Automatically detect common vulnerability and coding errors</p>
                </div>
                <button className="bg-[#21262d] hover:bg-[#30363d] border border-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Set up code scanning
                </button>
              </div>
            </div>

            {/* Secret scanning alerts */}
            <div className="bg-[#161b22] border border-gray-700 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">Secret scanning alerts</h3>
                    <span className="text-sm text-green-400">• Enabled</span>
                  </div>
                  <p className="text-gray-400">Get notified when a secret is pushed to this repository</p>
                </div>
                <button className="text-blue-400 hover:underline text-sm">
                  View detected secrets
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}