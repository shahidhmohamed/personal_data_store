export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-gray-800 text-white shadow-md z-50">
      <a href="/home" className="text-lg font-bold">
        LOGO
      </a>
      <nav className="flex space-x-4">
        <a href="/home" className="hover:text-gray-300">
          HOME
        </a>
        <a href="/PersonalDatas" className="hover:text-gray-300">
          PERSONAL DATA
        </a>
      </nav>
    </header>
  );
}
