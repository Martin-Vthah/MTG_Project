import Image from 'next/image'

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-[#161b22] border-r border-gray-700 min-h-screen">
          <nav className="p-4">
            {/* General - Active */}
            <div className="mb-1">
              <div className="flex items-center space-x-3 p-3 bg-[#21262d] rounded-md border-l-4 border-orange-500">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15A9 9 0 0 0 21 12a9 9 0 0 0-1.6-3"></path>
                  <path d="M4.6 15A9 9 0 0 1 3 12a9 9 0 0 1 1.6-3"></path>
                  <path d="M12 2v4"></path>
                  <path d="M12 18v4"></path>
                </svg>
                <span className="text-white font-medium">General</span>
              </div>
            </div>

            {/* Access Section */}
            <div className="mb-6 mt-6">
              <h3 className="text-gray-400 text-sm font-medium mb-3 px-3">Access</h3>
              <div className="space-y-1">
                <div className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-[#21262d] rounded-md cursor-pointer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span>Collaborators</span>
                </div>
                <div className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-[#21262d] rounded-md cursor-pointer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"></path>
                    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"></path>
                    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"></path>
                  </svg>
                  <span>Moderation options</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-auto">
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </div>
              </div>
            </div>

            {/* Code and automation Section */}
            <div className="mb-6">
              <h3 className="text-gray-400 text-sm font-medium mb-3 px-3">Code and automation</h3>
              <div className="space-y-1">
                <div className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-[#21262d] rounded-md cursor-pointer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 3v12"></path>
                    <circle cx="18" cy="6" r="3"></circle>
                    <circle cx="6" cy="15" r="3"></circle>
                    <path d="M18 9a9 9 0 0 1-9 9"></path>
                  </svg>
                  <span>Branches</span>
                </div>
                <div className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-[#21262d] rounded-md cursor-pointer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span>Tags</span>
                </div>
                <div className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-[#21262d] rounded-md cursor-pointer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14,2 14,8 20,8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                  </svg>
                  <span>Rules</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-auto">
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </div>
                <div className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-[#21262d] rounded-md cursor-pointer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                  <span>Actions</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-auto">
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </div>
                <div className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-[#21262d] rounded-md cursor-pointer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                  <span>Models</span>
                  <span className="text-xs bg-green-600 text-white px-2 py-1 rounded ml-auto">Preview</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </div>
                <div className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-[#21262d] rounded-md cursor-pointer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                  <span>Webhooks</span>
                </div>
                <div className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-[#21262d] rounded-md cursor-pointer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span>Copilot</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-auto">
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </div>
                <div className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-[#21262d] rounded-md cursor-pointer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  </svg>
                  <span>Environments</span>
                </div>
                <div className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-[#21262d] rounded-md cursor-pointer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7"></path>
                    <ellipse cx="12" cy="7" rx="8" ry="4"></ellipse>
                  </svg>
                  <span>Codespaces</span>
                </div>
                <div className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-[#21262d] rounded-md cursor-pointer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14,2 14,8 20,8"></polyline>
                  </svg>
                  <span>Pages</span>
                </div>
              </div>
            </div>

            {/* Security Section */}
            <div className="mb-6">
              <h3 className="text-gray-400 text-sm font-medium mb-3 px-3">Security</h3>
              <div className="space-y-1">
                <div className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-[#21262d] rounded-md cursor-pointer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <span>Advanced Security</span>
                </div>
                <div className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-[#21262d] rounded-md cursor-pointer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <circle cx="12" cy="16" r="1"></circle>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <span>Deploy keys</span>
                </div>
                <div className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-[#21262d] rounded-md cursor-pointer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"></path>
                    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"></path>
                    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"></path>
                  </svg>
                  <span>Secrets and variables</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-auto">
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold text-white mb-8">General</h1>

          {/* Repository name section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Repository name</h2>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                value="MTG_Project"
                className="bg-[#21262d] border border-gray-600 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-64"
                readOnly
              />
              <button className="bg-[#21262d] hover:bg-[#30363d] border border-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                Rename
              </button>
            </div>
          </div>

          {/* Template repository */}
          <div className="mb-8">
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="template"
                className="mt-1 rounded border-gray-600 bg-[#21262d] text-blue-500 focus:ring-blue-500 focus:ring-2"
              />
              <div className="flex-1">
                <label htmlFor="template" className="text-white font-medium cursor-pointer">
                  Template repository
                </label>
                <p className="text-gray-400 text-sm mt-1">
                  Template repositories let users generate new repositories with the same directory structure and files.{' '}
                  <a href="#" className="text-blue-400 hover:underline">Learn more about template repositories.</a>
                </p>
              </div>
            </div>
          </div>

          {/* Require contributors to sign off */}
          <div className="mb-12">
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="signoff"
                className="mt-1 rounded border-gray-600 bg-[#21262d] text-blue-500 focus:ring-blue-500 focus:ring-2"
              />
              <div className="flex-1">
                <label htmlFor="signoff" className="text-white font-medium cursor-pointer">
                  Require contributors to sign off on web-based commits
                </label>
                <p className="text-gray-400 text-sm mt-1">
                  Enabling this setting will require contributors to sign off on commits made through GitHub's web interface. Signing off is a way for 
                  contributors to affirm that their commit complies with the repository's terms, commonly the{' '}
                  <a href="#" className="text-blue-400 hover:underline">Developer Certificate of Origin (DCO)</a>.{' '}
                  <a href="#" className="text-blue-400 hover:underline">Learn more about signing off on commits</a>.
                </p>
              </div>
            </div>
          </div>

          {/* Default branch */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-white mb-4">Default branch</h2>
            <p className="text-gray-400 mb-4">
              The default branch is considered the "base" branch in your repository, against which all pull requests and code commits are 
              automatically made, unless you specify a different branch.
            </p>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value="main"
                className="bg-[#21262d] border border-gray-600 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-32"
                readOnly
              />
              <button className="text-gray-400 hover:text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Social preview */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Social preview</h2>
            <p className="text-gray-400 mb-2">
              Upload an image to customize your repository's social media preview.
            </p>
            <p className="text-gray-400 mb-4">
              Images should be at least 640×320px (1280×640px for best display).
            </p>
            <a href="#" className="text-blue-400 hover:underline mb-4 block">Download template</a>
            <button className="flex items-center space-x-2 bg-[#21262d] hover:bg-[#30363d] border border-gray-600 text-white px-3 py-2 rounded-md text-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
              <span>Edit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}