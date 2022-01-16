import httpClient from "../api";

const getAll = () => {
  return httpClient.get("/listar");
  
}

const create = data =>{
  return httpClient.post("/salvar",data);
}

const getId = id =>{
  return httpClient.get(`listar/${id}`);
}

const update = data =>{
  return httpClient.put('/atualizar',data);
}

const remove = id =>{
  return httpClient.delete(`deletar/${id}`);
}



// eslint-disable-next-line import/no-anonymous-default-export
export default {getAll, create, getId, update, remove};
