import { Link } from "wouter";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <span className="text-xl font-semibold text-gray-900">TrailMeals</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-900 font-medium border-b-2 border-primary pb-4">
              Dashboard
            </Link>
            <a href="#" className="text-secondary hover:text-gray-900 transition-colors">Meal Database</a>
            <a href="#" className="text-secondary hover:text-gray-900 transition-colors">My Trips</a>
            <a href="#" className="text-secondary hover:text-gray-900 transition-colors">Shopping Lists</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-secondary hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5-5-5h5V3h5v14z"/>
              </svg>
            </button>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">JD</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
