import React from 'react';
import {BsMicFill} from 'react-icons/bs';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


function Speech({todo, massage, activeColor}) {
    const { listening } = useSpeechRecognition();
    return (
        <div className="speech">
            {
                listening ?
                  <div>
                      <BsMicFill className="micOn"/>
                      <div className="pulse-ring"></div>
                  </div>
                :
                  <button onClick={SpeechRecognition.startListening}>
                      <BsMicFill className="micOff"/>
                  </button>
            }
        </div>
    )
}

export default Speech