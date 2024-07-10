

const dialog = document.querySelector('dialog');
const form = document.querySelector('form');
const submit = document.querySelector('button[type="submit"]');

const fname = document.getElementById('first-name');
const x = document.getElementById('first-name-helper');

const lname = document.getElementById('last-name');
const y = document.getElementById('last-name-helper')

const email = document.getElementById('email');
const emailHelper = document.getElementById('email-helper')

const radio1 = document.getElementById("general-enquiry");
const radio2 = document.getElementById("support-request");
const queryTypeHelper = document.getElementById('query-type-helper');

const textarea = document.getElementById("message");
const messageHelper = document.getElementById('message-helper');

const checkBox = document.getElementById("consent");
const consentHelper = document.getElementById('consent-helper');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  
  username = fname.value;
  if (username === ''){
    x.style.display = 'block';
    return
  }else{x.style.display = 'none';};

  if (lname.value === ''){
    y.style.display = 'block';
    return
  }else{y.style.display = 'none';};
  
  if (email.value === ''){
    emailHelper.style.display = 'block';
    return
  }else{emailHelper.style.display = 'none';};


  if (radio1.checked == false && radio2.checked == false){
    queryTypeHelper.style.display = "block";
    return
  } else {
     queryTypeHelper.style.display = "none";
  }

  if (textarea.value == ''){
    messageHelper.style.display = 'block';
    return
  }else{
    messageHelper.style.display = 'none';
  }

  if (checkBox.checked == false){
    consentHelper.style.display = "block";
    return
  } else {
     consentHelper.style.display = "none";
  }


  dialog.show();
  // alert(`Hi ${username}, Thanks for completing the form. We'll be in touch soon!`);
  document.getElementById('user').innerHTML = `Hi ${username}, Thanks for completing the form. We'll be in touch soon!`
  setInterval(() => {
    dialog.close();
  }, 25000);
  form.reset();
});


