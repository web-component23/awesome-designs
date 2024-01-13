const captcha = document.querySelector('.captcha');
const captchaInput = document.querySelector('.captcha-input-field');
const captchaInputParent = document.querySelector('.captcha-input');
let errorMsg = document.createElement('p');

let captchaValue;
const baseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&';

generateCaptcha();

function generateCaptcha() {
    captchaValue = '';
    let getSingleChar = '';
    for (let i = 0; i <= 5; i++) {
        getSingleChar = baseString.charAt(Math.floor(Math.random() * baseString.length));
        captchaValue += getSingleChar;
    }
    captchaInput.value = "";
    captcha.innerHTML = captchaValue.toString();
}

function refreshCaptcha() {
    generateCaptcha();
    captchaInputParent.removeChild(errorMsg);
    captchaInput.classList.remove('error');
    captchaInput.classList.remove('success');
}

function verifyCaptcha() {
    if (captchaInput.value !== '') {
        if (captchaValue === captchaInput.value) {
            captchaInput.classList.remove('error');
            captchaInput.classList.add('success');
            addMessage('Captcha validation successfull', 'success');
        } else {
            captchaInput.classList.remove('success');
            captchaInput.classList.add('error');
            addMessage('Please enter a valid captcha', 'error')
        }
    } else {
        captchaInput.classList.add('error');
        addMessage('Please enter captcha', 'error')
    }
}

function addMessage(msg, msgType) {
    errorMsg.textContent = msg;
    errorMsg.style.color = msgType === 'error' ? 'red' : 'green';
    errorMsg.style.fontSize = '10px';

    captchaInputParent.appendChild(errorMsg);
}