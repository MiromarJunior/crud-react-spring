package com.api.crud.spring.react.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.crud.spring.react.model.ClienteModel;
import com.api.crud.spring.react.service.ClienteService;

@RestController
@RequestMapping("/api/clientes")
@CrossOrigin("*")
public class ClienteController {

	@Autowired
	private ClienteService serv;

	@PostMapping("/salvar")
	public ResponseEntity<Object> save(@RequestBody ClienteModel cli) {
		serv.saveOrUpdate(cli);
		return new ResponseEntity<>("Cliente Cadastrado !", HttpStatus.CREATED);

	}

	@PutMapping("/atualizar/{id}")
	public ResponseEntity<Object> save(@PathVariable long id, @RequestBody ClienteModel cli) {
		cli.setId(id);
		serv.saveOrUpdate(cli);
		return new ResponseEntity<>("Cliente Atualizado !", HttpStatus.CREATED);

	}

	@GetMapping("/listar")
	public ResponseEntity<List<ClienteModel>> getAll() {
		return ResponseEntity.ok(serv.getAll());
	}

	@GetMapping("/listar/{id}")
	public Optional<ClienteModel> getById(@PathVariable long id) {
		return serv.getById(id);

	}

	@DeleteMapping("/deletar/{id}")
	public ResponseEntity<Object> delete(@PathVariable long id) {
		serv.delete(id);
		return new ResponseEntity<>("Cliente deletado com sucesso", HttpStatus.CREATED);
	}

}
