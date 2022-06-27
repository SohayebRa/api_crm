// Cliente Component
import { useNavigate } from "react-router-dom";

const Cliente = ({ cliente, handleEliminar }) => {
  const navigate = useNavigate();
  const { nombre, empresa, email, telefono, notas, id } = cliente;
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-4 font-semibold">{nombre}</td>
      <td className="p-3 text-gray-500">
        <p>
          <span className="text-gray-800 font-semibold">Email: </span> {email}
        </p>
        <p>
          <span className="text-gray-800 font-semibold">Tel: </span> {telefono}
        </p>
      </td>
      <td className="p-3 font-semibold">{empresa}</td>
      <td className="p-3 font-semibold">
        <button //
          type="button"
          className="bg-gray-800 hover:bg-gray-900 block w-full text-sm px-3 py-2 text-white mb-1"
          onClick={() => navigate(`/clientes/${id}`)}
        >
          Ver
        </button>
        <button //
          type="button"
          className="bg-blue-800 hover:bg-blue-900 block w-full text-sm px-3 py-2 text-white mb-1"
          onClick={() => navigate(`/clientes/editar/${id}`)}
        >
          Editar
        </button>
        <button //
          type="button"
          className="te bg-red-700 hover:bg-red-800 block w-full text-sm px-3 py-2 text-white"
          onClick={() => handleEliminar(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Cliente;
