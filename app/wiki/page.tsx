import Image from 'next/image'

export default function WikiPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white flex items-start justify-center pt-20">
      {/* Welcome to Wiki Content */}
      <div className="text-center max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-5">Welcome to the MTG_Project wiki!</h1>
          
          <p className="text-gray-400 text-base mb-8 max-w-6xl mx-auto">Wikis provide a place in your repository to lay out the roadmap of your project, show the current status, and document software better, together.</p>

          {/* Create the first page Button */}
          <button className="bg-[#238636] hover:bg-[#2ea043] text-white px-8 py-3 rounded-md text-base font-medium">
            Create the first page
          </button>
        </div>
    </div>
  )
}