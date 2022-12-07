function Form() {

    const onSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <form className="form" onSubmit={ onSubmit }>

                <input type="time" name="hora" placeholder="hora" />
                <input type="text" name="servicio" placeholder="servicio" />
                <input type="text" name="fecha" placeholder="fecha" />
                <input type="text" name="mascotaid" placeholder="mascotaid" />

                <input type="submit" value="Enviar" />
                <input type="reset" value="Limpiar" />

            </form>


        </div>
    );
}

export default Form;