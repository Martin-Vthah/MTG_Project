export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ background: "#0d1117", color: "#c9d1d9" }}>
      {/* Repository Header */}
      <div className="border-b border-gray-700 px-8 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
            <h1 className="text-xl font-semibold">
              <span className="text-white hover:underline cursor-pointer">MTG_Project</span>
              <span className="ml-2 px-2 py-0.5 text-xs bg-transparent border border-gray-600 rounded text-gray-400">Public</span>
            </h1>
          </div>
          
          {/* Action Buttons moved to right */}
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-1 px-3 py-1 text-xs border border-gray-600 rounded-md hover:bg-gray-800">
              <span>Watch</span>
              <span className="bg-gray-700 px-1 rounded">0</span>
            </button>
            <button className="flex items-center space-x-1 px-3 py-1 text-xs border border-gray-600 rounded-md hover:bg-gray-800">
              <span>Fork</span>
              <span className="bg-gray-700 px-1 rounded">0</span>
            </button>
            <button className="flex items-center space-x-1 px-3 py-1 text-xs border border-gray-600 rounded-md hover:bg-gray-800">
              <span>Star</span>
              <span className="bg-gray-700 px-1 rounded">0</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex px-32">
        {/* File Explorer */}
        <div className="flex-1 pr-3">
          {/* Branch and File Actions */}
          <div className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button className="flex items-center space-x-1 px-3 py-1 text-sm bg-gray-800 border border-gray-600 rounded-md hover:bg-gray-700">
                    <span>main</span>
                    <span>▼</span>
                  </button>
                  <button className="flex items-center space-x-1 px-3 py-1 text-sm hover:bg-gray-800">
                    <span>1 Branch</span>
                  </button>
                  <button className="flex items-center space-x-1 px-3 py-1 text-sm hover:bg-gray-800">
                    <span>0 Tags</span>
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center relative">
                  <div className="absolute left-3 text-gray-400">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Go to file" 
                    className="px-3 py-1 pl-10 pr-8 border border-gray-600 rounded-md text-sm w-64 bg-transparent hover:bg-gray-800"
                  />
                  <kbd className="absolute right-2 px-1 py-0.5 text-xs bg-transparent border border-gray-600 rounded">t</kbd>
                </div>
                <button className="px-3 py-1 text-sm border border-gray-600 rounded-md hover:bg-gray-800">
                  Add file ▼
                </button>
                <button className="flex items-center space-x-1 px-3 py-1 text-sm bg-green-600 text-white rounded-md hover:bg-green-700">
                  <span>&lt;&gt;</span>
                  <span>Code ▼</span>
                </button>
              </div>
            </div>
          </div>

          <div className="border border-gray-700 rounded-md overflow-hidden">
            {/* Last Commit Info */}
            <div className="py-3 border-b border-gray-700 flex items-center space-x-3 px-4 bg-gray-800">
              <div className="w-6 h-6 rounded-full bg-gray-600"></div>
              <span className="font-semibold">vthah</span>
              <span className="text-gray-400">Initial commit from Create Next App</span>
              <span className="text-gray-400 ml-auto">a64b092 · last week</span>
              <span className="font-semibold">1 Commit</span>
            </div>
            
            <table className="w-full">
              <tbody>
                {/* Folders */}
                <tr className="border-b border-gray-700 hover:bg-gray-800">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-blue-400">📁</span>
                      <span className="text-white hover:text-blue-400 hover:underline cursor-pointer font-medium">app</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-400 text-sm">Initial commit from Create Next App</td>
                  <td className="py-3 px-4 text-gray-400 text-sm text-right">last week</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-800">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-blue-400">📁</span>
                      <span className="text-white hover:text-blue-400 hover:underline cursor-pointer font-medium">public</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-400 text-sm">Initial commit from Create Next App</td>
                  <td className="py-3 px-4 text-gray-400 text-sm text-right">last week</td>
                </tr>
                
                {/* Files */}
                <tr className="border-b border-gray-700 hover:bg-gray-800">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <span>📄</span>
                      <span className="text-white hover:text-blue-400 hover:underline cursor-pointer">.gitignore</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-400 text-sm">Initial commit from Create Next App</td>
                  <td className="py-3 px-4 text-gray-400 text-sm text-right">last week</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-800">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <span>📄</span>
                      <span className="text-white hover:text-blue-400 hover:underline cursor-pointer">README.md</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-400 text-sm">Initial commit from Create Next App</td>
                  <td className="py-3 px-4 text-gray-400 text-sm text-right">last week</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-800">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <span>📄</span>
                      <span className="text-white hover:text-blue-400 hover:underline cursor-pointer">eslint.config.mjs</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-400 text-sm">Initial commit from Create Next App</td>
                  <td className="py-3 px-4 text-gray-400 text-sm text-right">last week</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-800">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <span>📄</span>
                      <span className="text-white hover:text-blue-400 hover:underline cursor-pointer">next.config.ts</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-400 text-sm">Initial commit from Create Next App</td>
                  <td className="py-3 px-4 text-gray-400 text-sm text-right">last week</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-800">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <span>📄</span>
                      <span className="text-white hover:text-blue-400 hover:underline cursor-pointer">package-lock.json</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-400 text-sm">Initial commit from Create Next App</td>
                  <td className="py-3 px-4 text-gray-400 text-sm text-right">last week</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-800">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <span>📄</span>
                      <span className="text-white hover:text-blue-400 hover:underline cursor-pointer">package.json</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-400 text-sm">Initial commit from Create Next App</td>
                  <td className="py-3 px-4 text-gray-400 text-sm text-right">last week</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-800">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <span>📄</span>
                      <span className="text-white hover:text-blue-400 hover:underline cursor-pointer">postcss.config.mjs</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-400 text-sm">Initial commit from Create Next App</td>
                  <td className="py-3 px-4 text-gray-400 text-sm text-right">last week</td>
                </tr>
                <tr className="hover:bg-gray-800">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <span>📄</span>
                      <span className="text-white hover:text-blue-400 hover:underline cursor-pointer">tsconfig.json</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-400 text-sm">Initial commit from Create Next App</td>
                  <td className="py-3 px-4 text-gray-400 text-sm text-right">last week</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-80 pl-3 py-6">
          <div className="mb-6 pb-6 border-b border-gray-700">
            <h3 className="text-lg font-semibold mb-2">About</h3>
            <p className="text-gray-400 text-sm mb-4 italic">No description, website, or topics provided.</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <span>📖</span>
                <span>Readme</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📈</span>
                <span>Activity</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>⭐</span>
                <span>0 stars</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>👁️</span>
                <span>0 watching</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🍴</span>
                <span>0 forks</span>
              </div>
            </div>
            <button className="mt-4 text-sm text-gray-400 hover:text-blue-400">Report repository</button>
          </div>

          <div className="mb-6 pb-6 border-b border-gray-700">
            <h3 className="text-lg font-semibold mb-2">Releases</h3>
            <p className="text-gray-400 text-sm">No releases published</p>
          </div>

          <div className="mb-6 pb-6 border-b border-gray-700">
            <h3 className="text-lg font-semibold mb-2">Packages</h3>
            <p className="text-gray-400 text-sm">No packages published</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Languages</h3>
            <div className="mb-3">
              <div className="w-full bg-gray-700 rounded-full h-2 flex overflow-hidden">
                <div className="bg-blue-500 h-2" style={{ width: "83.3%" }}></div>
                <div className="bg-purple-500 h-2" style={{ width: "8.5%" }}></div>
                <div className="bg-yellow-500 h-2" style={{ width: "8.2%" }}></div>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-semibold">TypeScript</span>
                <span className="text-sm text-gray-400">83.3%</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm font-semibold">CSS</span>
                <span className="text-sm text-gray-400">8.5%</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm font-semibold">JavaScript</span>
                <span className="text-sm text-gray-400">8.2%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}