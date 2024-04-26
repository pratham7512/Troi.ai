import {createClient } from "@supabase/supabase-js"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'
import ColorChangingCircle from "../components/circle";
import Intro from "../components/intro";

const supabase = createClient(
    "https://eatvfemgvbiwuzljhsmd.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhdHZmZW1ndmJpd3V6bGpoc21kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIyMDI1NDYsImV4cCI6MjAyNzc3ODU0Nn0.CaSDu7QuPworTX509rNlBCDmIVKaW-pEl9INfw4zRSc"
  );

const Success = () => {
const [user, setUser] = useState({});
const navigate = useNavigate();


 const [isListening, setIsListening] = useState(false);
 const [text, setText] = useState('');
 const [speechRecognition, setSpeechRecognition] = useState(null);
 const [submittedSentences, setSubmittedSentences] = useState([]);

const [resposnseFromLlm,setResponseFromllm]=useState(`👋 “Hello, I am Troi, your AI interview coach. Let’s ace that interview! Click below to start.”`);

useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          console.log(value.data.user);
          setUser(value.data.user);
        }
      });
    }
    getUserData();
  }, []);

 useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      setSpeechRecognition(recognition);

      recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');

        setText(transcript);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      return () => {
        recognition.onresult = null;
        recognition.onend = null;
      };
    } else {
      console.log('Speech Recognition is not supported in this browser.');
    }
 }, []);

 useEffect(() => {
    let timeoutId;
    if (text) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (isListening) {
          stopListening(); // Stop listening and submit the sentence after 3 seconds of silence
        }
      }, 1000);
    }
    return () => clearTimeout(timeoutId);
 }, [text, isListening]);

 const startListening = () => {
    if (speechRecognition) {
      setIsListening(true);
      speechRecognition.start();
    }
 };

 const stopListening = async() => {
    if (speechRecognition) {
      setIsListening(false);
      speechRecognition.stop();
      await appendSentence(text); // Append the current text to the submitted sentences
      generateResponse(text);
      setText(''); // Clear the text after submission
    }
 };

 const appendSentence = (sentence) => {
    setSubmittedSentences(prevSentences => [...prevSentences, sentence]);
 };

const generateResponse = async (inputData) => {
  try {
     // Call your existing API to get a response
     const response = await axios.post('http://localhost:3000/api/v1/response/', {
       msg: inputData,
     });
 
     // Append the response to the submitted sentences
     appendSentence(response.data);
 
     // Convert the response text to speech
     const speechResponse = await fetch('https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM', {
       method: 'POST',
       headers: {
         'xi-api-key': '0738d6a44254fe3a255e6b9ed2a9865f',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         model_id: "eleven_monolingual_v1",
         text: response.data, // Use the response text as input for the text-to-speech API
       }),
     });
 
     // Assuming the API returns audio data directly
     const audioData = await speechResponse.arrayBuffer(); // Adjust this line based on the actual format of the audio data
     
     setResponseFromllm(response.data);

     // Create a Blob from the audio data
     const audioBlob = new Blob([audioData], { type: 'audio/mpeg' }); // Adjust the MIME type as necessary
 
     // Create an object URL for the Blob
     const audioUrl = URL.createObjectURL(audioBlob);
 
     // Play the audio immediately
     const audio = new Audio(audioUrl);
     audio.play();
 
  } catch (error) {
     console.error(error);
  }
 };
 
 
 
 async function SignOutUser() {
    const { error } = await supabase.auth.signOut();
    navigate("/");
  }
 return (
    
    <div>
        {Object.keys(user).length !== 0 ? (
        <div class="bg-black h-screen flex flex-col justify-around">
            <div class="text-white w-screen flex justify-between items-center">
            <div class="flex justify-start items-center ml-7">
            <ColorChangingCircle/>
            <img class="h-14 w-450"src={logo}/>
            </div>
            <button onClick={() => SignOutUser()} class="h-2/3 px-2 mr-5 rounded-lg hover:bg-white hover:text-black transition-none">Sign out</button>
            </div>
            
        <div className="bg-black h-5/6 flex flex-col justify-center items-center" >
        
        <div class="bg-black  pt-5 h-2/3 bg-black w-8/12 z-0 text-white leading-normal overflow-y-scroll no-scrollbar"><div class="py-10 rounded-lg hover:bg-bl hover:px-10 transition-all h-max"><Intro line={resposnseFromLlm}/></div></div>
  
        {/* <button onClick={startListening} disabled={isListening} className={`bg-red-500 px-6 py-1 mt-72 text-white mx-5 ${isListening ? 'bg-red-500 text-white' : 'hover:bg-white hover:text-black'} absolute z-10`}>
            Speak
        </button> */}

        <textarea
        type="text"
        onClick={() => {
            if (isListening) {
              stopListening();
            } else {
              startListening();
            }
        }}
        value={text}
        readOnly
        className={`bg-black mx-5 w-8/12 h-1/6 text-left align-top bg-black text-white text-xl p-5 hover:bg-gr rounded-lg focus:outline-none ${isListening ? 'blink' : ''}`}
        ></textarea>

        <h2 class="text-white h-3">{isListening?<>listening..</>:<div></div>}</h2>
      </div>
    </div>
        ) : (
          <>
            <h1>User is not Logged In</h1>
            <button onClick={() => navigate("/login")} class=" m-5 px-5 py-2 rounded-lg hover:bg-white hover:text-black transition-none">Go back home</button>
          </>
        )}
    </div>
        


    
 );
};

export default Success;
