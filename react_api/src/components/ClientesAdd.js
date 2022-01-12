import { useState } from "react";
import clientesServices from "../Services/ClientesServices";


const ClientesAdd = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  function saveClientes(e) {
    e.preventDefault();

    const clientes = { nome, cpf, email, telefone };
    clientesServices
      .create(clientes)
      .then((response) => {
        console.log("Cliente cadastrado com sucesso!!", response.data);
        alert("Cliente cadastrado com sucesso!!");
        window.location = "/";
      })
      .catch((error) => {
        console.log("Erro ao cadastrar", error);
      });
  }

  return (
    <div className="container">
      <h3>Cadastrar Clientes</h3>
      <hr />
      <form>
        <div className="form-group" type="submit">
          <input 
            required
            type="text"
            className="form-control col-4"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome Completo"
            
          />
        </div>
        <div className="form-group">
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
          <input
            type="email"
            className="form-control col-4"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            required
          />
        </div>
        <div className="form-group">
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
          

          <button  className="btn btn-outline-primary mx-auto col-mx" onClick={(e) => saveClientes(e)} onSubmit={(e) => saveClientes(e) } >Salvar</button>
          <a className="btn btn-outline-primary" href="/" role="button">Lista de Clientes</a>

          
        </div>
        <div  >
     
        

        </div>
      </form>
    </div>
  );
};

export default ClientesAdd;
