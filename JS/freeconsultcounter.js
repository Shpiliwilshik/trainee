// Счетчик символов для комментариев
let textfield = document.getElementById('freeConsultFirstShort'),
      counter = document.getElementById('consultSymbolCount');

textfield.addEventListener('input', function (event) {
  let text = textfield.value;

  if (text.length <= 75) {
    counter.textContent = `${text.length} / 75`;
    console.log(text.length);
  }

  else {
    counter.textContent = "Превышено допустимое количество символов";
  }
  
})

// Имя файла
function getName (str){
  if (str.lastIndexOf('\\')){
      var i = str.lastIndexOf('\\')+1;
  }
  else{
      var i = str.lastIndexOf('/')+1;
  }						
  var filename = str.slice(i);			
  var uploaded = document.getElementById("uploaded");
  uploaded.innerHTML = filename;
}

// Переключаемые формы

let firstSender = document.getElementById('firstFormSender'),
   secondSender = document.getElementById('secondFormSender'),
    thirdSender = document.getElementById('thirdElementSender'),
      firstForm = document.getElementById('firstFormConsult'),
     secondForm = document.getElementById('secondFormConsult'),
      thirdForm = document.getElementById('thirdFormConsult'),
   secondReturn = document.getElementById('secondFormReturn'),
           link = document.querySelector('.steplink'),
     secondLink = document.querySelector('.steplinksecond'),
      thirdLink = document.querySelector('.steplinkthird'),
      sendTimer = document.getElementById('timeToSend'),
     fourthForm = document.getElementById('fourthFormConsult'),
 countSendTimer = 20;



firstSender.addEventListener('click', function(event) {
  event.preventDefault();
  firstForm.classList.remove('visible');
  secondForm.classList.add('visible');
  link.classList.remove('currentlink');
  link.classList.add('past');
  secondLink.classList.add('currentlink');
});

secondSender.addEventListener('click', function (event) {
  event.preventDefault();
  secondForm.classList.remove('visible');
  thirdForm.classList.add('visible');
  secondLink.classList.remove('currentlink');
  secondLink.classList.add('past');
  thirdLink.classList.add('currentlink');

  if (countSendTimer >= 0) {
    
    let timerId = setInterval(() => {
      sendTimer.innerHTML = countSendTimer;
      countSendTimer -= 1;  
    }, 1000);
    
    setTimeout(() => { 
      clearInterval(timerId);
      thirdForm.classList.remove('visible');
      fourthForm.classList.add('visible');
    }, 21000);
  }

  else {
    
  }
});

secondReturn.addEventListener('click', function (event) {
  event.preventDefault();
  secondForm.classList.remove('visible');
  firstForm.classList.add('visible');
});



// Соглашение с политикой

let switcher = document.getElementById('flexSwitchCheck'),
hidingInput = document.getElementById('hidingInput'),
hidingCheck = document.getElementById('hidingCheck'),
  boldFirst = document.getElementById('switchBoldFirst'),
 boldSecond = document.getElementById('switchBoldSecond'),
   checkBox = document.getElementById('defaultCheck1');


function agree () {
    if (checkBox.checked) {
      secondSender.removeAttribute('disabled');
    }
  
    else {
      secondSender.setAttribute('disabled', "disabled");
    }
  }

function checking() {

  if (switcher.checked) {
    hidingInput.classList.remove('visible');
    hidingCheck.classList.add('visible');
    boldFirst.classList.remove('active');
    boldSecond.classList.add('active');
    
    if (checkBox.checked) {
      secondSender.removeAttribute('disabled');
    }
  
    else {
      secondSender.setAttribute('disabled', "disabled");
    }
  }

  else {
    hidingInput.classList.add('visible');
    hidingCheck.classList.remove('visible');
    boldFirst.classList.add('active');
    boldSecond.classList.remove('active');
  }
}