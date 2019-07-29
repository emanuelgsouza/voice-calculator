import React from 'react'
import RoundButton from '../../../components/RoundButton'
import VoiceRecognization from '../../../utils/voice-recognization'

export default class VoiceButton extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      recording: false,
      transcription: '',
      recognition: new VoiceRecognization()
    }

    this.handleClick = this.handleClick.bind(this)
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
  }

  handleClick (event) {
    event.preventDefault()
    const recording = this.state.recording
    
    if (!recording) {
      this.start()
    } else {
      this.stop()
    }

    this.setState({
      recording: !recording
    })
  }

  start () {
    this.props.onStart()

    this.state.recognition.start()
      .then(data => {
        this.stop()
        this.props.onTranscription(data)

        this.setState({
          transcription: data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  stop () {
    this.setState({
      recording: false
    })

    this.props.onStop()

    this.state.recognition.stop()
  }

  render () {
    const { recording } = this.state

    const color = recording ? 'red' : '#222831'
    const icon = recording ? 'fas fa-stop' : 'fas fa-microphone'

    return (
      <RoundButton
        icon={icon}
        color={color}
        onClick={this.handleClick}
      />
    )
  }
}
