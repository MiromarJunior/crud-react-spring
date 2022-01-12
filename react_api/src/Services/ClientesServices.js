import httpClient from "../api";

const getAll = () => {
  return httpClient.get("/api/clientes/listar");
  

}

const create = data =>{
  return httpClient.post("/api/clientes/salvar",data);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll,create };
