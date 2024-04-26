import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Intro = ({ line }) => {
 const [llmres, setllmres] = useState("");
 const [animationKey, setAnimationKey] = useState(0); // Add a state to manage the key

 useEffect(() => {
    setllmres(line);
    setAnimationKey(prevKey => prevKey + 1); // Update the key to force re-render
 }, [line]);

 return (
    <TypeAnimation
      key={animationKey} // Use the key to force re-render
      sequence={llmres}
      wrapper="span"
      speed={45}
      style={{ fontSize: '1.8em', display: 'inline-block' }}
      repeat={1}
    />
 );
};

export default Intro;
