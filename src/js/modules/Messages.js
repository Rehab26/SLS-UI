import axios from 'axios';

export default class messages {

    async getMessage(){
        try
        {
            const result = await axios(`https://localhost:5000/api/scan/GetMessages`);
            this.result = result.data;
        }
        catch(error)
        {
            alert(error);
        }
        


    }
}