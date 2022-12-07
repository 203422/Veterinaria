package com.cursojava.demo.dao;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;

import com.cursojava.demo.models.Usuario;

public interface UsuarioDao {
    
    List<Usuario> getUsuarios();

    void eliminar(int id);


}
