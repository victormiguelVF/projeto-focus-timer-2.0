import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonAdd,
    buttonDecrease,
    rainGray,
    rainBlue,
    forestGray,
    forestBlue,
    marketGray,
    marketBlue,
    fireGray,
    fireBlue,
    minutesDisplay,
    dotsDisplay,
    secondsDisplay,
    darkCode,
    light,
    dark,
 } from "./elements.js"

const controls = Controls({
    buttonPause,
    buttonPlay
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
})

const sound = Sound()

light.addEventListener('click', function() {
    darkCode.classList.add('darkMode')
    light.classList.add('hide')
    dark.classList.remove('hide')
    buttonPlay.classList.add('darkbutton')
    buttonPause.classList.add('darkbutton')
    buttonStop.classList.add('darkbutton')
    buttonAdd.classList.add('darkbutton')
    buttonDecrease.classList.add('darkbutton')
    minutesDisplay.classList.add('darktime')
    dotsDisplay.classList.add('darktime')
    secondsDisplay.classList.add('darktime')
})

dark.addEventListener('click', function() {
    darkCode.classList.remove('darkMode')
    light.classList.remove('hide')
    dark.classList.add('hide')
    buttonPlay.classList.remove('darkbutton')
    buttonPause.classList.remove('darkbutton')
    buttonStop.classList.remove('darkbutton')
    buttonAdd.classList.remove('darkbutton')
    buttonDecrease.classList.remove('darkbutton')
    minutesDisplay.classList.remove('darktime')
    dotsDisplay.classList.remove('darktime')
    secondsDisplay.classList.remove('darktime')
})

buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown()
    sound.pressButton()
})

buttonPause.addEventListener('click', function() {
    controls.reset()
    timer.hold()
    sound.pressButton()
})

buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
    sound.pressButton()
})

rainGray.addEventListener('click', function() {
    rainGray.classList.add('hide')
    rainBlue.classList.remove('hide')
    forestBlue.classList.add('hide')
    forestGray.classList.remove('hide')
    marketBlue.classList.add('hide')
    marketGray.classList.remove('hide')
    fireBlue.classList.add('hide')
    fireGray.classList.remove('hide')
    sound.rainAudio.play()
    sound.marketAudio.pause()
    sound.fireAudio.pause()
    sound.forestAudio.pause()
})

rainBlue.addEventListener('click', function() {
    rainBlue.classList.add('hide')
    rainGray.classList.remove('hide')
    sound.rainAudio.pause()
})

forestGray.addEventListener('click', function() {
    forestGray.classList.add('hide')
    forestBlue.classList.remove('hide')
    rainBlue.classList.add('hide')
    rainGray.classList.remove('hide')
    marketBlue.classList.add('hide')
    marketGray.classList.remove('hide')
    fireBlue.classList.add('hide')
    fireGray.classList.remove('hide')
    sound.forestAudio.play()
    sound.rainAudio.pause()
    sound.marketAudio.pause()
    sound.fireAudio.pause()
})

forestBlue.addEventListener('click', function() {
    forestBlue.classList.add('hide')
    forestGray.classList.remove('hide')
    sound.forestAudio.pause()
})

marketGray.addEventListener('click', function() {
    marketGray.classList.add('hide')
    marketBlue.classList.remove('hide')
    fireBlue.classList.add('hide')
    fireGray.classList.remove('hide')
    rainBlue.classList.add('hide')
    rainGray.classList.remove('hide')
    forestBlue.classList.add('hide')
    forestGray.classList.remove('hide')
    sound.marketAudio.play()
    sound.forestAudio.pause()
    sound.fireAudio.pause()
    sound.rainAudio.pause()
})

marketBlue.addEventListener('click', function() {
    marketBlue.classList.add('hide')
    marketGray.classList.remove('hide')
    sound.marketAudio.pause()
})

fireGray.addEventListener('click', function() {
    fireGray.classList.add('hide')
    fireBlue.classList.remove('hide')
    rainBlue.classList.add('hide')
    rainGray.classList.remove('hide')
    forestBlue.classList.add('hide')
    forestGray.classList.remove('hide')
    marketBlue.classList.add('hide')
    marketGray.classList.remove('hide')
    sound.fireAudio.play()
    sound.marketAudio.pause()
    sound.forestAudio.pause()
    sound.rainAudio.pause()
})

fireBlue.addEventListener('click', function() {
    fireBlue.classList.add('hide')
    fireGray.classList.remove('hide')
    sound.fireAudio.pause()
})

buttonAdd.addEventListener('click', function() {
    let minutes = Number(minutesDisplay.textContent) + 5
    let seconds = Number(secondsDisplay.textContent)
    timer.updateDisplay(minutes, seconds)
    sound.pressButton()
})

buttonDecrease.addEventListener('click', function() {
    let minutes = Number(minutesDisplay.textContent) - 5
    let seconds = Number(secondsDisplay.textContent)
    timer.updateDisplay(minutes, seconds)
    sound.pressButton()
    if(minutes <= 0) {
        timer.reset()
        controls.reset()
    }
})






