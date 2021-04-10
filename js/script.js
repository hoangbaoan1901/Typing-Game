var userIcon = document.querySelector('.user-icon')
var clockIcon = document.querySelector('.clock')
var typingBoard = document.querySelector('.container')
var forms = document.querySelectorAll('.form')


// Show Form, hide Typing Board
userIcon.onclick = function (e) {
    for (var b = 0; b < forms.length; b++) {
        forms[b].style.display = 'block'
    }
    typingBoard.style.display = 'none'
}


// Show Typing Board, hide Form
clockIcon.onclick = function (e) {
    typingBoard.style.display = 'block'
    
    for (var b = 0; b < forms.length; b++) {
        forms[b].style.display = 'none'
    }
<<<<<<< Updated upstream
}
=======
    userInfoContainer.classList.remove('hide')
    
}

// Set User Infomation
var userDataRegist = JSON.parse(localStorage.getItem('userDataRegist'))
var userDataLogin = JSON.parse(localStorage.getItem('userDataLogin'))

userName.value = userDataRegist.fullname
userEmail.value = userDataRegist.email

userAge.oninput = function (e) {
    localStorage.setItem('userAge', e.target.value)
}

userAge.value = localStorage.getItem('userAge')

userGender.oninput = function (e) {
    localStorage.setItem('userGender', e.target.value)
}

userGender.value = localStorage.getItem('userGender')

var timeout;
document.onmousemove = function () {
    clearTimeout(timeout);
    timeout = setInterval(function () {
        layoutNotice.style.display = 'block'
    }, 2000);
}

document.onclick = function () {
    layoutNotice.style.display = 'none'
}

document.onkeypress = function () {
    layoutNotice.style.display = 'none'
}   
>>>>>>> Stashed changes
