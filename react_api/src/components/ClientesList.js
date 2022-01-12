import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiServices from "../Services/ClientesServices";

const ClientesList = () => {
  const [clientes, setClientes] = useState([]);
  useEffect(() => {
    apiServices
      .getAll()
      .then((response) => {
        console.log("Mostra dados clientes", response.data);
        setClientes(response.data);
      })
      .catch((error) => {
        console.log("Apenas erros", error);
      });
  }, []);

  return (
    <div>
      <h3>Lista de Clientes</h3>
      <div className="table-responsive">
        <Link to="/add" className="btn btn-primary mb-2" >Cadastrar Cliente</Link>

        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Conta</th>
              <th scope="col">Nome </th>
              <th scope="col">CPF</th>
              <th scope="col">Email</th>
              <th scope="col">Telefone</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <th scope="row">{cliente.id}</th>
                <td>{cliente.nome}</td>
                <td>{cliente.cpf}</td>
                <td>{cliente.email}</td>
                <td>{cliente.telefone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ClientesList;
