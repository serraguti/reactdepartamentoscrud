import React, { Component } from 'react'
import loading from './../assets/images/loading.gif';
import ServiceDepartamentos from '../services/ServiceDepartamentos';

export default class HomeComponent extends Component {
    service = new ServiceDepartamentos();
    state = {
        departamentos: [],
        status: false
    }

    loadDepartamentos = () => {
        this.service.getDepartamentos().then((result) => {
            this.setState({
                departamentos: result,
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.loadDepartamentos();
    }

    render() {
        if (this.state.status == true){
            return (
            <div style={{margin: "auto", width: "50%"}}>
                <table className="table table-info">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Localidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.departamentos.map((dept, index) => {
                                return (<tr key={index}>
                                    <td>{dept.nombre}</td>
                                    <td>{dept.localidad}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
            )
        }else{
            return (<img src={loading} alt="loading..."/>)
        }

    }
}
