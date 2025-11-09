import { NavLink } from "react-router-dom";
import { ShoppingCartIconWithCount } from "../ShoppingCart/ShoppingCart.jsx";


export const Navbar = () => {
  const desktopLinks = [
    { to: "/", label: "All" },
    { to: "/categories/clothes", label: "Clothes" },
    { to: "/categories/electronics", label: "Electronics" },
    { to: "/categories/furniture", label: "Furniture" },
    { to: "/categories/miscellaneous", label: "Others" },
  ];

  const accountLinks = [
    { to: "/my-orders", label: "Orders" },
    { to: "/my-account", label: "Me" },
    { to: "#", label: <ShoppingCartIconWithCount /> },
  ];

  const linkClass = (isActive) =>
    `text-sm font-semibold transition-colors duration-200 ${
      isActive
        ? "text-blue-600 border-b-2 border-blue-600"
        : "text-gray-800 hover:text-blue-500"
    }`;

  const mobileLinkClass = (isActive) =>
    `mx-3 block rounded-lg px-3 py-2 text-base font-semibold transition-colors duration-200 ${
      isActive ? "bg-white/10 text-blue-400" : "text-white hover:bg-white/5"
    }`;

  const renderLinks = (links, mobile = false) =>
    links.map(({ to, label }) => (
      <NavLink
        key={to}
        to={to}
        end={to === "/"} // aplica end solo en la raíz
        className={({ isActive }) =>
          mobile ? mobileLinkClass(isActive) : linkClass(isActive)
        }
      >
        {label}
      </NavLink>
    ));

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="relative flex items-center justify-between p-6 lg:px-12"
      >
        {/* Logo izquierda */}
        <div className="flex items-center gap-12 lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5" end>
            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=800"
              alt="Shoppi"
              className="h-8 w-auto"
            />
          </NavLink>

          {/* Links principales (desktop) */}
          <div className="hidden lg:flex gap-x-10">
            {renderLinks(desktopLinks)}
          </div>
        </div>

        {/* Botón móvil */}
        <button
          type="button"
          command="show-modal"
          commandfor="mobile-menu"
          className="lg:hidden -m-2.5 p-2.5 rounded-md text-gray-200"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="1.5"
            className="size-6"
          >
            <path
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Links de cuenta (derecha) */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-6">
          {renderLinks(accountLinks)}
        </div>
      </nav>

      {/* Mobile dialog */}
      <el-dialog>
        <dialog id="mobile-menu" className="backdrop:bg-transparent lg:hidden">
          <div tabIndex="0" className="fixed inset-0 focus:outline-none">
            <el-dialog-panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm">
              <div className="flex items-center justify-between">
                <NavLink to="/" className="-m-1.5 p-1.5" end>
                  <img
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Shoppi"
                    className="h-8 w-auto"
                  />
                </NavLink>
                <button
                  type="button"
                  command="close"
                  commandfor="mobile-menu"
                  className="-m-2.5 p-2.5 text-gray-200"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="size-6"
                  >
                    <path
                      d="M6 18 18 6M6 6l12 12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {renderLinks(desktopLinks, true)}
                </div>
                <div className="py-6">{renderLinks(accountLinks, true)}</div>
              </div>
            </el-dialog-panel>
          </div>
        </dialog>
      </el-dialog>
    </header>
  );
};
