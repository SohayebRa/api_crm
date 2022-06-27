// Layout Layout
import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const urlActual = location.pathname;

  return (
    <div className="md:flex md:min-h-screen bg-gray-100">
      <div className="md:w-1/5 bg-gray-900 px-5 py-10">
        <h2 className="text-4xl font-bold text-center text-white">
          CRM - Clientes
        </h2>

        <nav className="mt-10">
          <Link
            className={`${
              urlActual === "/clientes" ? "text-blue-500" : "text-white"
            }
            font-medium text-2xl block mt-2 hover:text-blue-500 transition`}
            to="/clientes"
          >
            Clientes
          </Link>
          <Link
            className={`${
              urlActual === "/clientes/nuevo" ? "text-blue-500" : "text-white"
            } font-medium text-2xl block mt-2 hover:text-blue-500 transition`}
            to="/clientes/nuevo"
          >
            Nuevo Cliente
          </Link>
        </nav>
      </div>
      <div className="md:w-4/5 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
