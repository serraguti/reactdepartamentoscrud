import axios from 'axios';
import Global from '../Global';

export default class ServiceDepartamentos {
    getDepartamentos() {
        return new Promise(function(resolve) {
            let url = Global.urlApiDepartamentos;
            let request = "api/departamentos";
            axios.get(url + request).then((response) => {
                console.log("Leyendo departamentos");
                resolve(response.data);
            })
        })
    }
}