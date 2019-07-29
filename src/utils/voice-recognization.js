// used this example: http://viladosilicio.com.br/criando-um-aplicativo-de-transcricao-de-audio-em-texto-com-quasar-framework/

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = SpeechRecognition ? new SpeechRecognition() : false

export default class VoiceRecognition {
  start (lang = 'pt-br') {
    return new Promise((resolve, reject) => {
      recognition.lang = lang
      recognition.continuous = true
      recognition.start()

      recognition.onresult = (event) => {
        let current = event.resultIndex
        let transcript = event.results[current][0].transcript
        resolve(transcript)
      }

      recognition.onspeechend = (event) => {
        reject(false)
      }
      recognition.nomatch = () => {
        reject(false)
      }
      recognition.onend = () => {
      }
    })
  }

  stop () {
    recognition.stop()
  }
}
