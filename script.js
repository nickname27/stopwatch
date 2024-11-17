const start = document.querySelector('.stopwatch__start'),
    pause = document.querySelector('.stopwatch__pause'),
    clear = document.querySelector('.stopwatch__stop'),
    change = document.querySelector('.stopwatch__change'),
    wrapper = document.querySelector('.stopwatch__wrap'),
    hours = document.querySelector('.stopwatch__hour'),
    minutes = document.querySelector('.stopwatch__min'),
    seconds = document.querySelector('.stopwatch__sec'),
    milSeconds = document.querySelector('.stopwatch__ms'),
    dots = document.querySelector('.stopwatch__dotsHour')


start.addEventListener('click', () => {
    start.classList.remove('active')
    pause.classList.add('active')
    change.classList.remove('active')
    clear.classList.add('active')
})

pause.addEventListener('click', () => {
    pause.classList.remove('active')
    start.classList.add('active')
})

clear.addEventListener('click', () => {
    pause.classList.remove('active')
    start.classList.add('active')
    clear.classList.remove('active')
    change.classList.add('active')
    hours.innerHTML = '00'
    minutes.innerHTML = '00'
    seconds.innerHTML = '00'
    milSeconds.innerHTML = '00'
    hours.classList.remove('active')
    dots.classList.remove('active')
})

change.addEventListener('click', () => {
    if (wrapper.classList.contains('first')) {
        wrapper.classList.remove('first')
        wrapper.classList.add('second')
    } else if (wrapper.classList.contains('second')) {
        wrapper.classList.remove('second')
        wrapper.classList.add('third')
    } else if (wrapper.classList.contains('third')) {
        wrapper.classList.remove('third')
        wrapper.classList.add('fourth')
    } else if (wrapper.classList.contains('fourth')) {
        wrapper.classList.remove('fourth')
        wrapper.classList.add('fifth')
    } else if (wrapper.classList.contains('fifth')) {
        wrapper.classList.remove('fifth')
        wrapper.classList.add('first')
    }
})

function stopwatch() {
    setInterval(() => {
        if (pause.classList.contains('active') && milSeconds.innerHTML < 99) {
            if (milSeconds.innerHTML < 9) {
                milSeconds.innerHTML++
                milSeconds.innerHTML = '0' + milSeconds.innerHTML++
            } else {
                milSeconds.innerHTML++
            }
        } else if (milSeconds.innerHTML == 99) {
            milSeconds.innerHTML = '00'
            if (seconds.innerHTML < 9) {
                seconds.innerHTML++
                seconds.innerHTML = '0' + seconds.innerHTML++
            } else {
                if (seconds.innerHTML < 59) {
                    seconds.innerHTML++
                } else if (seconds.innerHTML == 59) {
                    seconds.innerHTML = '00'
                    if (minutes.innerHTML < 9) {
                        minutes.innerHTML++
                        minutes.innerHTML = '0' + minutes.innerHTML++
                    } else if (minutes.innerHTML < 59) {
                        minutes.innerHTML++
                    } else if (minutes.innerHTML == 59) {
                        hours.classList.add('active')
                        dots.classList.add('active')
                        minutes.innerHTML = '00'
                        if (hours.innerHTML < 9) {
                            hours.innerHTML++
                            hours.innerHTML = '0' + hours.innerHTML++
                        } else {
                            hours.innerHTML++
                        }
                    }
                }
            }
        }
    }, 10);
}
stopwatch()