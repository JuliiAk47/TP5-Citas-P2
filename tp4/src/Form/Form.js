import './Form.css';

function Formulario(props){
    const agregar = (e) => {
        e.preventDefault();
        const cita = {
            mascota: e.target.mascota.value,
            propietario: e.target.propietario.value,
            fecha: e.target.fecha.value,
            hora: e.target.hora.value,
            sintomas: e.target.sintomas.value,
            id: Math.random().toString(36).slice(2),
        }

        props.agregarCita(cita);
    }

    return(
       <form onSubmit={agregar}>
        <label>Mascota</label>
        <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota"/>

        <label>Dueño</label>
        <input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota"/>

        <label>Fecha</label>
        <input type="date" name="fecha" class="u-full-width"/>

        <label>hora</label>
        <input type="time" name="hora" class="u-full-width"/>

        <label>Sintomas</label>
        <textarea name="sintomas" class="u-full-width"></textarea>
        <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
       </form>
       
    );
}
export default Formulario;