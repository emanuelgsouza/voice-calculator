// used this example: http://viladosilicio.com.br/criando-um-aplicativo-de-transcricao-de-audio-em-texto-com-quasar-framework/

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = SpeechRecognition ? new SpeechRecognition() : false

export default class VoiceRecognition {
  /**
   * @method start
   * @param  {String} lang
   * @return {Promise<String>}
   */
  start (lang = 'pt-br') {
    return new Promise((resolve, reject) => {
      recognition.lang = lang
      recognition.continuous = true
      recognition.start()

      recognition.onresult = (event) => {
        let current = event.resultIndex
        let transcript = event.results[current][0].transcript
        resolve(this.sanitizeResult(transcript))
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

  /**
   * @method stop
   * @return void
   */
  stop () {
    recognition.stop()
  }

  /**
   * @method sanitizeResult
   * @param  {String} result
   * @return {String}
   */
  sanitizeResult (result) {
    // for while, onlye replace 'x' to '*'
    return result.replace(/x/gi, '*')
  }
}
