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



export default {getAll, create, getId, update};
