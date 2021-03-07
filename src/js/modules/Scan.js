import Axios from "axios";
import axios from 'axios';

export default class Scan {
    constructor(url){
        this.url = url;
    }

    async getResult(){
        try
        {
            const result = await axios(`http://localhost:5000/api/scan/scan?url=${this.url}`);
            this.result = result;

        }
        catch(error)
        {
            alert(error);
        }
        


    }
}