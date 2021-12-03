
// Счетчик символов для комментариев
let textfield = document.getElementById('commentAreaArticle'),
      counter = document.getElementById('symbolCount');

textfield.addEventListener('input', function (event) {
  let text = textfield.value;

  if (text.length <= 190) {
    counter.textContent = 190 - text.length;
    console.log(text.length);
  }

  else {
    counter.textContent = "Превышено допустимое количество символов";
  }
  
})