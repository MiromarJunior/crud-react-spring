import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClientesServices from "../Services/ClientesServices";
import apiServices from "../Services/ClientesServices";

const ClientesList = () => {
  const [clientes, setClientes] = useState([]);
  useEffect(() => {
    init();
  }, []);

  const init = () =>{
    apiServices
      .getAll()
      .then((response) => {
        console.log("Mostra dados clientes", response.data);
        setClientes(response.data);
      })
      .catch((error) => {
        console.log("Apenas erros", error);
      });
  }


  const deleteCliente = (id) => {
    ClientesServices.remove(id)
      .then((response) => {
        alert("Cliente apagado com sucesso", response.data);
        init();
      })
      .catch((error) => {
        alert("Erro ao deletar ");
        console.log("Cliente apagado com sucesso", error);
      })
  }

  return (
    <div>
      <h3>Lista de Clientes</h3>
      <div className="table-responsive">
        <Link to="/add" className="btn btn-outline-primary">
          Cadastrar Cliente
        </Link>

        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome </th>
              <th scope="col">CPF</th>
              <th scope="col">Email</th>
              <th scope="col">Telefone</th>
              <th scope="col">Editar</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.cpf}</td>
                <td>{cliente.email}</td>
                <td>{cliente.telefone}</td>
                <td>
                  <Link
                    className="btn btn-outline-primary"
                    to={`/clientes/edit/${cliente.id}`}
                  >
                    Update
                  </Link>
                  <button className="btn btn-danger ml-2" onClick={(e) => {
                    deleteCliente(cliente.id)
                  }} >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ClientesList;
