import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2 text-orange-500 font-bold text-xl">
          <span>Feu Studios</span>
        </div>

        {/* Navegação */}
        <nav className="flex gap-8 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white relative after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-orange-500"
                : "text-zinc-300 hover:text-white"
            }
          >
            Home
          </NavLink>

          <NavLink to="/jogos" className="text-zinc-300 hover:text-white">
            Jogos
          </NavLink>

          <NavLink to="/novidades" className="text-zinc-300 hover:text-white">
            Novidades
          </NavLink>

          <NavLink to="/login" className="text-zinc-300 hover:text-white">
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
