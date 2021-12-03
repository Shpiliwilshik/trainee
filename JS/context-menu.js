let contextBtn = document.querySelectorAll('.context-btn');
let contextMenu = document.querySelectorAll('.context-menu');

for (let i = 0; i < contextBtn.length; i++) {
  contextBtn[i].addEventListener('contextmenu', (e) => {
    e.preventDefault();
    console.log(contextBtn[i]);
    contextMenu[i].classList.toggle('context-show');
    console.log(contextMenu[i]);
  })
  
}