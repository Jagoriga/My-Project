const form = document.querySelector('form');

const resultmsg = document.querySelector('#resultmsg');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    const payload = {};
    for (let [key, value] of formData.entries()) {
        payload[key] = value;
        
    }
if( (payload['username'] !== '') && (payload['email'] !== '')){
    resultmsg.innerHTML = '<h3 style="color:lightgreen; ">Your data has been sent successfully.</h3>';
}
else  {
    resultmsg.innerHTML = '<h3 style="color:red; ">Your data has not been sent. Make sure all fields are filled in.</h3>';
}
      console.log(payload);
    
});