import React from 'react';
import styled from 'styled-components';
import { evaluate } from 'mathjs';

import Visor from '../../components/Visor';
import { PageContainer } from '../../styles';
import Message from '../../components/Message';
import RoundButton from '../../components/RoundButton';
import VoiceButton from './components/VoiceButton';

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  button:last-child {
    margin-left: 1rem;
  }
`;

const Footer = styled.div`
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 10px;
  left: 0;

  p {
    margin-bottom: 1rem;
  }
`;

export default class VoicePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      hasError: false,
      errorMessage: '',
      recording: false
    }

    this.onStart = this.onStart.bind(this)
    this.onStop = this.onStop.bind(this)
    this.onTranscription = this.onTranscription.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  onStart () {
    this.setState({
      recording: true,
      value: '',
      hasError: false,
      errorMessage: ''
    })
  }

  onStop () {
    this.setState({
      recording: false
    })
  }

  onTranscription (data) {
    this.setState({
      value: data
    })
  }

  handleClick (event) {
    event.preventDefault()
    try {
      const value = evaluate(this.state.value)

      this.setState({
        value
      })
    } catch (err) {
      console.error(err)

      this.setState({
        hasError: true,
        errorMessage: 'An error ocurred when evaluate the expression'
      })
    }
  }

  componentDidMount () {
    if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
      this.setState({
        hasError: true,
        errorMessage: 'Has not support to SpeechRecognition or webkitSpeechRecognition in this browser'
      })
    }
  }

  render () {
    const { value, hasError, errorMessage } = this.state
    const disabled = value.length === 0
    const message = hasError ? <Message color="#E32932" message={errorMessage} /> : null

    return (
      <PageContainer>
        <Visor value={this.state.value} />

        {message}

        <Footer>
          <p> Recording a simple expression, like 44 + 5 and confirm </p>

          <ButtonsContainer>
            <VoiceButton
              onStart={this.onStart}
              onStop={this.onStop}
              onTranscription={this.onTranscription}
            />

            <RoundButton
              disabled={disabled}
              color="#51F530"
              icon="fas fa-check"
              onClick={this.handleClick}
            />
          </ButtonsContainer>
        </Footer>
      </PageContainer>
    )
  }
}
