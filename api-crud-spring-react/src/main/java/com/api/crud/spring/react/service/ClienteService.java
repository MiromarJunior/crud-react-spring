package com.api.crud.spring.react.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.crud.spring.react.model.ClienteModel;
import com.api.crud.spring.react.repository.ClienteRepository;

@Service
public class ClienteService {
	
	@Autowired
	ClienteRepository repo;
	
	public void saveOrUpdate(ClienteModel cli) {
		repo.save(cli);
	}
	
	
	public List<ClienteModel> getAll(){
		return repo.findAll();
	}
	
	public Optional<ClienteModel> getById(Long id){
		return repo.findById(id);
	}
	
	public void delete(Long id){
		  repo.deleteById(id);
	}

}
