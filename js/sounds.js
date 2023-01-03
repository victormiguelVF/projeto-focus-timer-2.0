export default function() {
    const buttonPressAudio = new Audio(
        "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
      )
      const kitchenTimer = new Audio(
        "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
      )
    const forestAudio = new Audio("../audio/Floresta.wav")
    const rainAudio = new Audio("../audio/Chuva.wav")
    const marketAudio = new Audio("../audio/Cafeteria.wav")
    const fireAudio = new Audio("../audio/Lareira.wav")

    forestAudio.loop = true
    rainAudio.loop = true
    marketAudio.loop = true
    fireAudio.loop = true

    function pressButton() {
        buttonPressAudio.play()
      }

      function timeEnd() {
        kitchenTimer.play()
      }

    return {
        forestAudio,
        rainAudio,
        marketAudio,
        fireAudio,
        pressButton,
        timeEnd
    }
}