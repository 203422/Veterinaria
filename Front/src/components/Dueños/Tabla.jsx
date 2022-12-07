function Tabla({ duenos, eliminar, actualizar }) {

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                    </tr>
                </thead>

                <tbody>
                    {duenos.map((dueno) => (
                        <tr key={dueno.id}>
                            <td>{dueno.nombre}</td>
                            <td>{dueno.direccion}</td>
                            <td>{dueno.telefono}</td>

                            <td>
                                <button >Editar</button>
                                <button onClick={ () => eliminar(dueno.id)} > Eliminar</button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Tabla;