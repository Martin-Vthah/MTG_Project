import Image from 'next/image'

export default function ActionsPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Get started with GitHub Actions</h1>
          <p className="text-gray-400 text-lg mb-6">
            Build, test, and deploy your code. Make code reviews, branch management, and issue triaging work the way you want. Select a workflow to get started.
          </p>
          <div className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 cursor-pointer">
            <span>Skip this and</span>
            <a href="#" className="underline">set up a workflow yourself</a>
            <span>→</span>
          </div>
        </div>

        {/* Search Section */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Image
              src="/search-icon.svg"
              alt="Search"
              width={20}
              height={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search workflows"
              className="bg-[#21262d] border border-gray-600 rounded-md pl-10 pr-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 w-full"
            />
          </div>
        </div>

        {/* Suggested Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-6">Suggested for this repository</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Grunt Workflow */}
            <div className="bg-[#161b22] border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">Grunt</h3>
                  <p className="text-sm text-gray-400 mb-2">By GitHub Actions</p>
                  <p className="text-gray-400 text-sm mb-4">Build a NodeJS project with npm and grunt.</p>
                </div>
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center ml-4">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-[#21262d] hover:bg-[#30363d] border border-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Configure
                </button>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span>JavaScript</span>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Gulp Workflow */}
            <div className="bg-[#161b22] border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">Gulp</h3>
                  <p className="text-sm text-gray-400 mb-2">By GitHub Actions</p>
                  <p className="text-gray-400 text-sm mb-4">Build a NodeJS project with npm and gulp.</p>
                </div>
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center ml-4">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-[#21262d] hover:bg-[#30363d] border border-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Configure
                </button>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span>JavaScript</span>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Webpack Workflow */}
            <div className="bg-[#161b22] border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">Webpack</h3>
                  <p className="text-sm text-gray-400 mb-2">By GitHub Actions</p>
                  <p className="text-gray-400 text-sm mb-4">Build a NodeJS project with npm and webpack.</p>
                </div>
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center ml-4">
                  <span className="text-white font-bold text-lg">W</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-[#21262d] hover:bg-[#30363d] border border-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Configure
                </button>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span>JavaScript</span>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Deno Workflow */}
            <div className="bg-[#161b22] border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">Deno</h3>
                  <p className="text-sm text-gray-400 mb-2">By GitHub Actions</p>
                  <p className="text-gray-400 text-sm mb-4">Test your Deno project</p>
                </div>
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center ml-4">
                  <Image
                    src="/triangle_flipped.png"
                    alt="Deno"
                    width={24}
                    height={24}
                    className="invert"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-[#21262d] hover:bg-[#30363d] border border-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Configure
                </button>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span>JavaScript</span>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Publish Node.js Package to GitHub Packages */}
            <div className="bg-[#161b22] border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">Publish Node.js Package to GitHub Packages</h3>
                  <p className="text-sm text-gray-400 mb-2">By GitHub Actions</p>
                  <p className="text-gray-400 text-sm mb-4">Publishes a Node.js package to GitHub Packages.</p>
                </div>
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center ml-4">
                  <Image
                    src="/file.svg"
                    alt="Package"
                    width={24}
                    height={24}
                    className="invert"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-[#21262d] hover:bg-[#30363d] border border-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Configure
                </button>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span>JavaScript</span>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Publish Node.js Package */}
            <div className="bg-[#161b22] border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">Publish Node.js Package</h3>
                  <p className="text-sm text-gray-400 mb-2">By GitHub Actions</p>
                  <p className="text-gray-400 text-sm mb-4">Publishes a Node.js package to npm.</p>
                </div>
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center ml-4">
                  <Image
                    src="/file.svg"
                    alt="Package"
                    width={24}
                    height={24}
                    className="invert"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-[#21262d] hover:bg-[#30363d] border border-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Configure
                </button>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span>JavaScript</span>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}