package com.api.crud.spring.react.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.br.CPF;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name ="cliente")
public class ClienteModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="cliente_id")
	private Long id;
	
	@NotNull
	@Column(nullable = false, length = 100)
	private String nome;
	
	@Email
	private String email;
	
	@NotNull
	@Column(nullable = false, length = 20)
	private String telefone;
	
	@CPF
	@Column(name = "cpf", unique = true)
	private String cpf;
	
	

}
