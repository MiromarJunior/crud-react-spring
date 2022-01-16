import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import clientesServices from "../Services/ClientesServices";
import "bootstrap/dist/css/bootstrap.min.css";

const ClientesAdd = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const { id } = useParams();

  function saveClientes(e) {
    e.preventDefault();
    const clientes = { nome, cpf, email, telefone, id };

    if (id) {
      clientesServices
        .update(clientes)
        .then((response) => {
          console.log("Cliente Atualizado com sucesso!!", response.data);
          alert("Cliente Atualizado com sucesso!!");
          window.location = "/";
        })
        .catch((error) => {
          console.log("Erro ao Atualizar!!!", error);

          alert("Erro ao cadastrar!!");
        });


    } else {
      clientesServices
        .create(clientes)
        .then((response) => {
          console.log("Cliente cadastrado com sucesso!!", response.data);
          alert("Cliente cadastrado com sucesso!!");
          window.location = "/";
        })
        .catch((error) => {
          console.log("Erro ao cadastrar", error);

          alert("Erro ao cadastrar!!");
        });
    }
  }
  useEffect(() => {
    if (id) {
        clientesServices.getId(id)
            .then(cliente => {
                setNome(cliente.data.nome);
                setCpf(cliente.data.cpf);
                setEmail(cliente.data.email);
                setTelefone(cliente.data.telefone);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            });
    }
}, [])

  return (
    <div className="container">
      <h3>Cadastrar Clientes</h3>
      <hr />
      <form>
        <div className="form-group">
          <label>Nome Completo </label>
          <input
            type="text"
            className="form-control col-4"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome Completo"
          />
        </div>
        <div className="form-group">
          <label>CPF </label>
          <input
            type="text"
            className="form-control col-4"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="CPF"
            required
          />
        </div>
        <div className="form-group">
          <label>Email </label>
          <input
            type="text"
            className="form-control col-4"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            required
          />
        </div>
        <div className="form-group">
          <label>Telefone </label>
          <input
            type="text"
            className="form-control col-4"
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="Telefone"
            required
          />
        </div>
        <div>
          <button type="button"
            onClick={(e) => saveClientes(e)}
            className="btn btn-outline-primary mx-auto col-mx "
          > Salvar   </button>
          <Link type="button" className="btn btn-outline-primary mx-auto col-mx ml-2" to={"/"} > Lista de Clientes  </Link>
          
          

 
        </div>
        </form>
      <hr />
    </div>
  );
};

export default ClientesAdd;
