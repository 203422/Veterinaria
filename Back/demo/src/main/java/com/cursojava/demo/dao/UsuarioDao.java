package com.cursojava.demo.dao;

import java.util.List;

import com.cursojava.demo.models.Usuario;

public interface UsuarioDao {
    
    List<Usuario> getUsuarios();

    void eliminar(int id);

    void registrar(Usuario usuario);
}
