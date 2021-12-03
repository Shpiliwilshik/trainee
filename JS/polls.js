let firstPercentage = 70, //Стату получаем с сервера и подставляем в эти переменные
    secondPercentage = 50,
    thirdPercentage = 30,
    firstRadioCheck = document.getElementById('pollAnswer1'), //Радио кнопки
    secondRadioCheck = document.getElementById('pollAnswer2'),
    thirdRadioCheack = document.getElementById('pollAnswer3'),
    raidoBtn = document.querySelectorAll('.form-check-input'),
    totalPeopleCount = 1394; //Людей проголосовало

function showProgress() {
    document.getElementById('pollCount1').innerHTML = firstPercentage + '%';
    document.getElementById('pollCount2').innerHTML = secondPercentage + '%';
    document.getElementById('pollCount3').innerHTML = thirdPercentage + '%';
    document.getElementById('progressBar1').setAttribute('style', `width: ${firstPercentage}%`);
    document.getElementById('progressBar2').setAttribute('style', `width: ${secondPercentage}%`);
    document.getElementById('progressBar3').setAttribute('style', `width: ${thirdPercentage}%`);
    document.getElementById('totalPeopleCount').innerHTML = totalPeopleCount;
    
    document.querySelectorAll('.progress').forEach(element => {
        element.classList.add('active');
    });
}    

raidoBtn.forEach(element => {
    element.addEventListener('change', function (event) {
        event.preventDefault();
        showProgress();
    })
});