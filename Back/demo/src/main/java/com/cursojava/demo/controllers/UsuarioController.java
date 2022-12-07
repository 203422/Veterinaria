package com.cursojava.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cursojava.demo.dao.UsuarioDao;
import com.cursojava.demo.models.Usuario;

@RestController
public class UsuarioController {

    @Autowired
    private UsuarioDao usuarioDao;

    // @CrossOrigin(origins = "http://localhost:5173")
    // @RequestMapping(value = "usuario/{id}")
    // public Usuario getUsuario(@PathVariable int id) {
    // Usuario usuario = new Usuario();

    // usuario.setId(id);
    // usuario.setNombre("Alan");
    // usuario.setDireccion("San Cristobal");
    // usuario.setTelefono("9671632128");

    // return usuario;

    // }

    @RequestMapping(value = "usuarios", method = RequestMethod.GET)
    public List<Usuario> getUsuarios() {
        return usuarioDao.getUsuarios();
    }

    @RequestMapping(value = "usuarios", method = RequestMethod.POST)
    public void resistrarUsuario(@RequestBody Usuario usuario) {
        usuarioDao.registrar(usuario);
    }

    // @CrossOrigin(origins = "http://localhost:5173")
    @RequestMapping(value = "usuarios/{id}", method = RequestMethod.DELETE)
    public void eliminar(@PathVariable int id) {
        usuarioDao.eliminar(id);
    }

    // @RequestMapping(value = "usuario2")
    // public Usuario editar() {
    // Usuario usuario = new Usuario();

    // usuario.setNombre("Alan");
    // usuario.setApellido("Gomez");
    // usuario.setEmail("alan@gmail.com");
    // usuario.setTelefono("9671632128");
    // usuario.setPassword("123456");

    // return usuario;

    // }

    // @RequestMapping(value = "usuario4")
    // public Usuario buscar() {
    // Usuario usuario = new Usuario();

    // usuario.setNombre("Alan");
    // usuario.setApellido("Gomez");
    // usuario.setEmail("alan@gmail.com");
    // usuario.setTelefono("9671632128");
    // usuario.setPassword("123456");

    // return usuario;

    // }
}