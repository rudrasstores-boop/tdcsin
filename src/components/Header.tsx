const Header = () => {
  return (
    <nav className="bg-black/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">TDCS Technologies</h1>

        <ul className="flex gap-6 text-sm">
          <li className="hover:text-cyan-400 cursor-pointer">Training</li>
          <li className="hover:text-cyan-400 cursor-pointer">Hardware</li>
          <li className="hover:text-cyan-400 cursor-pointer">Services</li>
          <li className="hover:text-cyan-400 cursor-pointer">Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
