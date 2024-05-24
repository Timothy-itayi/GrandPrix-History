import React, { useRef, useState, useEffect } from "react";
import LinearProgress from '@mui/material/LinearProgress';

const SoundPlayer = ({ selectedSound }) => {
  const [play, setPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
 const [ progress , setProgress] = useState(0);

  const audioRef = useRef(null);
    // PLay and Pause audio track 
  function toggleAudio() {
    if (play) {
      audioRef.current?.pause();
      setPlay(false);
    } else {
      audioRef.current?.play();
      setPlay(true);
    }
  }
 
  // display time for audio 
  function handleTimeUpdate() {
    const currentTime = audioRef.current.currentTime;
    setCurrentTime(currentTime);
    setProgress(normalize(currentTime, duration));

  }

  function handleLoadedMetadata() {
    setDuration(audioRef.current.duration || 0 );
    
  }
// End the Audio  //
  function handleEnded() {
    setCurrentTime(duration );
    setProgress(100);
    setPlay(false);

  }

        //Check that the max is not Zero before we convert the current time of the audio to a percentage value (ranging from 0 to 100).
         
        function normalize(value, max) {
          if (max === 0 ) {
            return 0;
          }
          let result = (value / max) * 100;
          return result > 100 ? 100 : result;
        }
        
  


  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  }

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("loadedmetadata", handleLoadedMetadata);
      audio.addEventListener("ended", handleEnded);
      return () => {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audio.removeEventListener("ended", handleEnded);
      };
    }
  }, []);

  // Calculate progress when duration changes
useEffect(() => {
  setProgress(normalize(currentTime, duration));
}, [duration]);

// Calculate progress when currentTime changes
useEffect(() => {
  setProgress(normalize(currentTime, duration));
}, [currentTime]);

  console.log(formatTime(progress))
  console.log(progress)
  return (
    <div className="items-center justify-center mb-10 bg-black rounded-full p-4">
      <div className="flex-col text-center">
        {/* Audio Timeline */}
        <div className="flex items-center gap-4 mb-4">
          
        <span className="text-white">{formatTime(currentTime)}</span>
       <div className="flex grow">
      
        <LinearProgress variant="determinate"
          sx={{ width: '100%' }}
          value={progress}
        
          />

     
      
       </div>
      
          <span className="text-white">{formatTime(duration)}</span>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center mr-4  gap-4  rounded-full">
          <div className="filter invert">
            <button onClick={toggleAudio} type="button">
              {!play ? (
                <img src="logos/player-play.png"  className="h-12 w-12 " aria-hidden="true" />
              ) : (
                <img src="logos/player-pause.png" className="h-12 w-12" aria-hidden="true" />
              )}
            </button>
          </div>

        
         
      </div>
      <audio ref={audioRef} src={`/audio/${selectedSound.waveType}`} />
    </div>
    </div>
  );
};

export default SoundPlayer;
