import React from 'react'
import img1 from "../assets/img/clip-961.png";
import "../assets/signupGerente.css"
const AssignGC = ()=>{
    return(
        <div>
            <section className="divisor">
                <div className="izquierda">
                    <h1 id="h1A">Asigna a tu GC!</h1>
                    <h2 id="h2A">Crea el usuario de tu gestor de calidad</h2>
                    <img className="Img-GC" src={img1} />
                </div>
                <div className="derecha">
                    <h1 id="h1R">Registro</h1>
                    <br/>
                    <section id="sect">
                        <div className="mb-3 row">
                            <div className="col-sm-10 inp ">
                                <input type="text"  className="form-control form-control-lg nombres"  placeholder="Nombre"/>
                                <input type="text"  className="form-control form-control-lg apellidos"  placeholder="Apellidos"/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-sm-10">
                                <input type="text"  className="form-control form-control-lg inputsL"  placeholder="Usuario"/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-sm-10">
                                <input type="password" className="form-control form-control-lg inputsL" placeholder="Password"  id="inputPassword "/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-sm-10">
                                <select disabled className="form-select select-b"  aria-label="Default select example">
                                    <option selected>Gestor de calidad</option>
                                </select>
                            </div>
                        </div>
                        <button type="button" className="btn btn-cl">Registrar</button>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default AssignGC;