// Page EditarCliente
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Components
import Formulario from "../components/Formulario";

const EditarCliente = () => {
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

  return (
    <>
      <h1 className="font-bold text-4xl text-gray-900">Editar Cliente</h1>
      <p className="mt-3">Modifica la informacion del cliente</p>

      {cliente?.nombre ? (
        <Formulario cliente={cliente} cargando={cargando} />
      ) : (
        <p className="mt-10 text-3xl">Cliente ID no Valido</p>
      )}
    </>
  );
};

export default EditarCliente;
