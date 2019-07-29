import React from 'react';
import Visor from '../../components/Visor';
import { PageContainer } from '../../styles';
import styled from 'styled-components';
import VoiceButton from './components/VoiceButton';
import RoundButton from '../../components/RoundButton';
import { evaluate } from 'mathjs';

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
      recording: false
    }

    this.onStart = this.onStart.bind(this)
    this.onStop = this.onStop.bind(this)
    this.onTranscription = this.onTranscription.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  onStart () {
    this.setState({
      recording: true
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

    this.setState({
      value: evaluate(this.state.value)
    })
  }

  render () {
    const disabled = this.state.value.length === 0
    return (
      <PageContainer>
        <Visor value={this.state.value} />

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
              color="green"
              icon="fas fa-check"
              onClick={this.handleClick}
            />
          </ButtonsContainer>
        </Footer>
      </PageContainer>
    )
  }
}
