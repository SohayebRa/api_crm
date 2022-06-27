// Page EditarCliente
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const VerCliente = () => {
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(true);

  const { nombre, empresa, email, telefono, notas } = cliente;

  const { id } = useParams();

  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setCliente(resultado);
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => {
        setCargando(false);
      }, 500);
    };
    obtenerClienteAPI();
  }, []);

  return cargando ? (
    <Spinner />
  ) : Object.keys(cliente).length === 0 ? (
    <p className="mt-10 text-3xl">No Hay Resultados</p>
  ) : (
    <div>
      <h1 className="font-bold text-4xl text-gray-900">Ver Cliente</h1>
      <p className="mt-3">Informacion del Cliente</p>

      {/* Nombre */}
      {nombre && (
        <p className="text-3xl text-gray-500 mb-2 mt-10">
          <span className="text-gray-700 uppercase font-semibold">
            Cliente:{" "}
          </span>
          {nombre}
        </p>
      )}

      {/* Empresa */}
      {empresa && (
        <p className="text-2xl text-gray-500 mb-2">
          <span className="text-gray-700 uppercase font-semibold">
            Empresa:{" "}
          </span>
          {empresa}
        </p>
      )}

      {/* Email */}
      {email && (
        <p className="text-2xl text-gray-500 mb-2">
          <span className="text-gray-700 uppercase font-semibold">
            E-mail:{" "}
          </span>
          {email}
        </p>
      )}

      {/* Telefono */}
      {telefono && (
        <p className="text-2xl text-gray-500 mb-2">
          <span className="text-gray-700 uppercase font-semibold">
            Teléfono:{" "}
          </span>
          {telefono}
        </p>
      )}

      {/* Notas */}
      {notas && (
        <p className="text-2xl text-gray-500">
          <span className="text-gray-700 uppercase font-semibold">Notas: </span>
          {notas}
        </p>
      )}
    </div>
  );
};

export default VerCliente;
