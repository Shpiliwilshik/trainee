let popbtn = document.querySelectorAll('.playbtn');

for (let i = 0; i < popbtn.length; i++) {
  popbtn[i].addEventListener('click', function () {
    document.getElementById('modalImg').setAttribute('src', popbtn[i].getAttribute('popway'));
  })
  
};







