import { useRef, useEffect } from "react";

export const useWithSound = (audioSource) => {
  const soundRef = useRef();

  useEffect(() => {
    soundRef.current = new Audio(audioSource);
  }, []);

  const playDoneSound = () => {
    soundRef.current.play();
  };

  const playStartSound = () => {
    soundRef.current.play();
  };

  return {
    playDoneSound,
    playStartSound,
  };
};
