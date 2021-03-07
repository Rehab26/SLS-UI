import axios from 'axios';

export default class Contact {
    constructor(fName , email , msg){
        this.name = fName;
        this.email = email;
        this.message = msg;
    }

    async getResult(){
        try
        {
            const result = await axios.post('https://cors-anywhere.herokuapp.com/https://localhost:5000/api/Announc/SendMessage', {
                userMessage: this.message,
                email: this.email,
                fname: this.name
              });
            this.result = result;

        }
        catch(error)
        {
            alert(error);
        }
        


    }
}