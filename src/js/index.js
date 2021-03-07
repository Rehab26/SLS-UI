import * as scanView from './views/scanView';
import {ClearLoader, ClearScanBtn, elements , RenderLoader , RndedErrorMesg} from './views/base';
import Scan from './modules/Scan';
import Messages from './modules/Messages';
import Contact from './modules/Contact';
import * as MessageView from './views/MessageView';
import * as ContactView from './views/contactView';



const controlScan = async () => {
    ClearScanBtn();
    RenderLoader();
    const text =  scanView.getInput();
    const url = urlify(text);
    const scan = new Scan(url);
    await scan.getResult();
    ClearLoader();
    console.log(scan.result);
}

const displayMessages = async() => {
    const msgs = new Messages();
    await msgs.getMessage();
    if(msgs.result != null) MessageView.RenderMessages(msgs.result);
    console.log(msgs.result);
    console.log("Hi form message")
}

elements.contactForm.addEventListener("submit" , async (e) => {
    e.preventDefault();
    const email= ContactView.getEmail();
    const fname = ContactView.getFName();
    const msg = ContactView.getMessage();
    const contact = new Contact(fname , email , msg);
    console.log(contact);
    await contact.getResult();
    console.log(contact.result);
})

window.addEventListener('keypress' , e => {
    console.log(e);
    console.log(elements.scanForm);
})

elements.scanForm.addEventListener( 'submit' , e => {
    e.preventDefault();
    console.log("Hi from scan btn")
    controlScan();
   
})
const urlify = (text)=> {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    //var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url,b,c) {
        var url2 = (c == 'www.') ?  'http://' +url : url;
        return url2;
    }) 
}

displayMessages();


