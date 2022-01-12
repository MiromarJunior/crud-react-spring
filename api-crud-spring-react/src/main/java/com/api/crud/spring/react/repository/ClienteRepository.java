package com.api.crud.spring.react.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.crud.spring.react.model.ClienteModel;

@Repository
public interface ClienteRepository extends JpaRepository< ClienteModel, Long >  {

}
