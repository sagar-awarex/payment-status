"use strict";

const paymentText = document.querySelector("#payment-status-text");

const check = document.querySelector('.payment-success').style;
const cross = document.querySelector('.payment-failed').style;

const paramString = window.location.search.split('?')[1];
const params_arr = paramString && paramString?.split('&');

let paymentStatus;
if(params_arr) {
    for (let i = 0; i < params_arr.length; i++) {
        let pair = params_arr[i].split('=');
        if(pair[0] === 'paymentStatus' && pair[1] === 'true') {
            paymentStatus = true;
            paymentText.textContent = "Payment Successful";
            cross.display = 'none';
            check.display = 'block';
        } else if(pair[0] === 'paymentStatus' && pair[1] === 'false') {
            paymentStatus = false;
            paymentText.textContent = "Payment Failed";
            check.display = 'none';
            cross.display = 'block';

        } else {
            paymentText.textContent = "Something went wrong"
            cross.display = 'block';
        }
        console.log("Key is:", pair[0]);
        console.log("Value is:", pair[1]);
    }
}

