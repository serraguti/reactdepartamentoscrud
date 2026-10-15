import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import ServiceDepartamentos from '../services/ServiceDepartamentos';
 
export default class CrearDepa extends Component {
    service = new ServiceDepartamentos
 
    state = {
        status: false,
        msg: '',
    }
 
    cajaNumero = React.createRef()
    cajaNombre = React.createRef()
    cajaLocalidad = React.createRef()
 
    crearDepa(e) {
        e.preventDefault()
 
        let numero = parseInt(this.cajaNumero.current.value)
        let nombre = this.cajaNombre.current.value
        let localidad = this.cajaLocalidad.current.value
 
        let depa = {
            // numero: parseInt(this.cajaNumero.current.value),
            // nombre: this.cajaNombre.current.value,
            // localidad: this.cajaLocalidad.current.value
            numero: numero,
            nombre: nombre,
            localidad: localidad
        }
 
        // this.service.crearDepartamento(depa)
        // .then((res) => {
        //     this.setState({
        //         status: true,
        //         msg: 'Departamento creado correctamente'
        //     })
        // })
        // .catch((err) => {
        //     this.setState({
        //         status: false,
        //         msg: 'Error al crear el departamento: ' + err
        //     })
        // })
    }
 
    render() {
        return (
            this.state.status ?
                <Navigate to='/' />
                :
                <div>
                    <form onSubmit={this.crearDepa}>
                        <label>Numero</label>
                        <input type="number" ref={this.cajaNumero} className='form-control' />
 
                        <label>Nombre</label>
                        <input type="text" ref={this.cajaNombre} className='form-control' />
 
                        <label>Localidad</label>
                        <input type="text" ref={this.cajaLocalidad} className='form-control' />
 
                        <button className='btn btn-info'>Crear departamento</button>
                    </form>
                </div>
        );
    }
} 
