import Image from 'next/image'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      {/* Hero Section - No background as requested */}
      <div className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white mb-4">Welcome to projects</h1>
              <p className="text-gray-400 text-lg max-w-2xl">
                Built like a spreadsheet, project tables give you a live canvas to filter, sort, and group issues 
                and pull requests. Tailor them to your needs with custom fields and saved views.
              </p>
              <button className="mt-6 bg-[#21262d] hover:bg-[#30363d] border border-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                Learn more
              </button>
            </div>
            
            {/* Project visualization with cards */}
            <div className="hidden lg:block ml-8">
              <div className="relative">
                {/* Background project cards */}
                <div className="absolute top-0 right-0 w-64 h-40 bg-[#161b22] border border-gray-700 rounded-lg transform rotate-3 opacity-30"></div>
                <div className="absolute top-2 right-2 w-64 h-40 bg-[#161b22] border border-gray-700 rounded-lg transform rotate-1 opacity-50"></div>
                
                {/* Main project card */}
                <div className="relative w-64 h-40 bg-[#161b22] border border-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded">Ready for review</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-gray-400">Initial concept art</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-xs text-gray-400">Engine prototype (Phy...</span>
                    </div>
                    <div className="text-xs text-gray-500">Game brief and good...</div>
                    <div className="text-xs text-gray-500">Add item...</div>
                  </div>
                  
                  {/* Hearts at bottom */}
                  <div className="absolute bottom-2 left-4 flex space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded transform rotate-45"></div>
                    <div className="w-3 h-3 bg-red-500 rounded transform rotate-45"></div>
                  </div>
                  
                  <div className="absolute bottom-2 right-4 text-xs text-gray-500">In progress</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Actions Bar */}
      <div className="border-b border-gray-700 bg-[#0d1117] px-4 py-3">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Image
                src="/search-icon.svg"
                alt="Search"
                width={16}
                height={16}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="is:open"
                className="bg-[#0d1117] border border-gray-600 rounded-md pl-10 pr-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 w-96"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
                <Image
                  src="/search-icon.svg"
                  alt="Clear"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            {/* Link a project Button */}
            <button className="flex items-center space-x-2 bg-[#21262d] border border-gray-600 rounded-md px-3 py-2 text-sm text-white hover:bg-[#30363d]">
              <Image
                src="/file.svg"
                alt="Link"
                width={16}
                height={16}
              />
              <span>Link a project</span>
            </button>
            
            {/* New Project Button */}
            <button className="bg-[#238636] hover:bg-[#2ea043] text-white px-4 py-2 rounded-md text-sm font-medium flex items-center space-x-2">
              <span>+</span>
              <span>New project</span>
            </button>
          </div>
        </div>
      </div>

      {/* Empty State Content */}
      <div className="flex-1 flex items-center justify-center py-16">
        <div className="text-center max-w-2xl mx-auto px-4">
          {/* Project Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 border-2 border-gray-600 rounded flex items-center justify-center">
              <Image
                src="/project.png"
                alt="Projects"
                width={32}
                height={32}
                className="opacity-60"
              />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-4">Provide quick access to relevant projects.</h2>
          
          <p className="text-gray-400 text-lg">
            Add projects to view them here.
          </p>
        </div>
      </div>
    </div>
  )
}