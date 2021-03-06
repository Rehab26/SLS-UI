import {elements} from './base';

export const RenderMessages = (msgs) => {
    const markup = msgs.map(msg => {
        return `<li>${msg.content}</li>`;
    });
    elements.messageBoard.insertAdjacentHTML("afterbegin" , markup);
}