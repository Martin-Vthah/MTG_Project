import Image from 'next/image'

export default function IssuesPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      {/* Issues Header */}
      <div className="bg-[#0d1117] px-4 py-3">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
          {/* Left side - Combined Search with is:issue state:open */}
          <div className="flex items-center flex-1 mr-2">
            {/* Combined search box */}
            <div className="border border-gray-600 rounded-md flex items-center w-full">
              {/* Search query section */}
              <div className="bg-[#0d1117] px-4 py-2 text-sm flex items-center rounded-l-md flex-1">
                <span className="text-white">is:</span>
                <span className="text-blue-600 px-1 rounded mx-1">issue</span>
                <span className="text-white">state:</span>
                <span className="text-blue-600 px-1 rounded mx-1">open</span>
              </div>
              
              {/* Vertical divider */}
              <div className="border-l border-gray-600 h-8"></div>
              
              {/* Search icon section */}
              <div className="relative px-4 py-2 bg-[#21262d] rounded-r-md">
                <Image
                  src="/search-icon.svg"
                  alt="Search"
                  width={16}
                  height={16}
                  className="filter invert"
                />
              </div>
            </div>
          </div>
          
          {/* Right side - Action buttons */}
          <div className="flex items-center space-x-3">
            {/* Labels Button */}
            <button className="flex items-center space-x-2 bg-[#21262d] border border-gray-600 rounded-md px-3 py-2 text-sm text-white hover:bg-[#30363d] cursor-pointer">
              <span>Labels</span>
            </button>
            
            {/* Milestones Button */}
            <button className="flex items-center space-x-2 bg-[#21262d] border border-gray-600 rounded-md px-3 py-2 text-sm text-white hover:bg-[#30363d] cursor-pointer">
              <span>Milestones</span>
            </button>
            
            {/* New Issue Button */}
            <button className="bg-[#238636] hover:bg-[#2ea043] text-white px-4 py-2 rounded-md text-sm font-medium cursor-pointer">
              New issue
            </button>
          </div>
        </div>
      </div>

      {/* Combined Issues Filter and Content */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="bg-[#161b22] border border-gray-700 rounded-lg">
          {/* Filter section */}
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center justify-between">
              {/* Left side - Open/Closed tabs */}
              <div className="flex space-x-8">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-[#0d1117] border border-gray-600 rounded-sm"></div>
                  <button className="flex items-center space-x-2 py-1 text-white font-bold cursor-pointer hover:bg-[#21262d] rounded-md px-2">
                    <span>Open</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded-full">0</span>
                  </button>
                </div>
                <button className="flex items-center space-x-2 py-1 text-gray-400 cursor-pointer hover:bg-[#21262d] rounded-md px-2">
                  <span>Closed</span>
                  <span className="bg-gray-600 text-xs px-2 py-1 rounded-full">0</span>
                </button>
              </div>
              
              {/* Right side - Filter options */}
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-sm text-gray-400 hover:bg-[#21262d] rounded px-2 py-1 cursor-pointer">
                  <span>Author</span>
                  <Image
                    src="/triangle_flipped.png"
                    alt="Dropdown"
                    width={12}
                    height={12}
                  />
                </button>
                
                <button className="flex items-center space-x-2 text-sm text-gray-400 hover:bg-[#21262d] rounded px-2 py-1 cursor-pointer">
                  <span>Labels</span>
                  <Image
                    src="/triangle_flipped.png"
                    alt="Dropdown"
                    width={12}
                    height={12}
                  />
                </button>
                
                <button className="flex items-center space-x-2 text-sm text-gray-400 hover:bg-[#21262d] rounded px-2 py-1 cursor-pointer">
                  <span>Projects</span>
                  <Image
                    src="/triangle_flipped.png"
                    alt="Dropdown"
                    width={12}
                    height={12}
                  />
                </button>
                
                <button className="flex items-center space-x-2 text-sm text-gray-400 hover:bg-[#21262d] rounded px-2 py-1 cursor-pointer">
                  <span>Milestones</span>
                  <Image
                    src="/triangle_flipped.png"
                    alt="Dropdown"
                    width={12}
                    height={12}
                  />
                </button>
                
                <button className="flex items-center space-x-2 text-sm text-gray-400 hover:bg-[#21262d] rounded px-2 py-1 cursor-pointer">
                  <span>Assignees</span>
                  <Image
                    src="/triangle_flipped.png"
                    alt="Dropdown"
                    width={12}
                    height={12}
                  />
                </button>
                
                <button className="flex items-center space-x-2 text-sm text-white hover:bg-[#21262d] rounded px-2 py-1 cursor-pointer">
                  <span>Newest</span>
                  <Image
                    src="/triangle_flipped.png"
                    alt="Dropdown"
                    width={12}
                    height={12}
                  />
                </button>
              </div>
            </div>
          </div>
          
          {/* Content section */}
          <div className="text-center py-12 bg-[#0d1117] rounded-b-lg">
            <h2 className="text-2xl font-semibold text-white mb-2">No results</h2>
            <p className="text-gray-400">Try adjusting your search filters.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
