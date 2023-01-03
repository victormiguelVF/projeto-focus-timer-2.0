export default function Controls({
    buttonPause,
    buttonPlay
}) {

    function play() {
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
    }

function reset() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
}

return {
    reset,
    play
}

}
