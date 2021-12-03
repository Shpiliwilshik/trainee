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

// Минус минус плюс
let clarificationForm = document.getElementById('clarificationForm'),
   addQuestionToggler = document.querySelector('.addquestion');

clarificationForm.addEventListener('show.bs.collapse', function () {
  addQuestionToggler.innerHTML = '-';
});

clarificationForm.addEventListener('hide.bs.collapse', function () {
  addQuestionToggler.innerHTML = '+';  
});
