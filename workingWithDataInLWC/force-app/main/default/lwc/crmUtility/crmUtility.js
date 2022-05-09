import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
var loggedelement;
const showToast = (ele) => {
    if(ele){
        ele.style.color = 'Red';
    }
}

function getParent(ele) {
    if(ele)
    {
        if(ele.nodeName === 'THEAD'){
           loggedelement = ele;
           return;
        }else{
            getParent(ele.parentElement);
        }
    }
}


const calllogging = (event) =>{
    let data =  window.sessionStorage.getItem('name');
    console.log(data);
    let message = greeting();
    console.log(`message-${message}`);
    console.log(greeting());
    if(event && event?.target){
        getParent(event.target);
        console.log(loggedelement);
        processChildNodes(loggedelement);
    }
}

const greeting = () =>{
    return "hello";
}

function processChildNodes(ele){
    if(ele && ele.childNodes && ele.childNodes.length > 0){
        ele.childNodes.forEach(element => {
            if(element && element.getAttribute('data-label')){
                console.log(element.nodeName);
                return;
            }else{
                processChildNodes(element);
            }
        });
    }
}

export {showToast, calllogging}