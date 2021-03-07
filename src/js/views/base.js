export const elements = {
    urlScan : document.querySelector(".form-url"),
    scanForm : document.querySelector('.scan-form'),
    btnScan : document.querySelector(".scan"),
    scanRow : document.querySelector('.scan-row'),
    scanCol : document.querySelector('.scan-col'),
    messageBoard : document.querySelector('.message-list'), 
    emailForm : document.querySelector('.email'),
    Fname : document.querySelector('.fname'),
    userMessage : document.querySelector('.user-message'),
    contactForm : document.querySelector('.contact-us')
}

export const RndedErrorMesg = (msg) => {
    const markup = `<p class="danger-text">${msg}</p>`
    elements.scanForm.insertAdjacentHTML('beforeend' , markup);
}



const loader = `<div class="loader" id="loader-1">
                <span></span>
                </div>`;

export const RenderLoader = () => {
    elements.scanCol.insertAdjacentHTML('afterbegin' , loader);
}

export const ClearLoader = () => {
    const loader = document.querySelector('.loader');
    elements.scanCol.removeChild(loader);
}

export const ClearScanBtn = () => {
    console.log(elements.scanCol);
    elements.scanCol.removeChild(elements.btnScan);
}
