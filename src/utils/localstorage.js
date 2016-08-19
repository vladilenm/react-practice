import config from '../config.js';


export default class LS {
    
    static get(field) {
        if (LS._isExists()) {
            const data = JSON.parse(localStorage.getItem(config.localStorage.name));

            if (!field) return data;
            if (data[ field ]) return data[ field ];

            return undefined;
        }

        return undefined;
    }

    static set(field, data = {}) {
        let dataToStorage = {};

        if (field) {
            dataToStorage = LS.get(); 
            if (!dataToStorage) dataToStorage = {};
            dataToStorage[ field ] = data;
        } else {
            dataToStorage = data;
        }

        localStorage.setItem(config.localStorage.name, JSON.stringify(dataToStorage))
    }

    static _isExists() {
        return localStorage.getItem(config.localStorage.name) ? true : false;
    }


}


