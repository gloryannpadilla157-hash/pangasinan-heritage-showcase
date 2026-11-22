export default function HeaderNavigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="/"
          className="text-xl font-bold text-teal-700"
        >
          Pangasinan Heritage
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href="/"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600"
          >
            Home
          </a>

          <a
            href="#destinations"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600"
          >
            Destinations
          </a>

          <a
            href="#about"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600"
          >
            About
          </a>

          <a
            href="#contact"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="rounded-md p-2 text-2xl text-gray-700 hover:bg-gray-100 md:hidden"
          aria-label="Open navigation menu"
        >
          ☰
        </button>
      </nav>
    </header>
  );
}