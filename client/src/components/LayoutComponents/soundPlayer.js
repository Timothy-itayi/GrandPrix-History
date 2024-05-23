import React, { useRef, useState, useEffect } from "react";
import { FaRegCirclePlay, FaRegCirclePause } from "react-icons/fa6";

const SoundPlayer = ({ selectedSound }) => {
  const [play, setPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const MAX = 20;

  function toggleAudio() {
    if (play) {
      audioRef.current?.pause();
      setPlay(false);
    } else {
      audioRef.current?.play();
      setPlay(true);
    }
  }

  function handleVolume(e) {
    const { value } = e.target;
    const volume = Number(value) / MAX;
    audioRef.current.volume = volume;
  }

  function handleTimeUpdate() {
    setCurrentTime(audioRef.current.currentTime);
  }

  function handleLoadedMetadata() {
    setDuration(audioRef.current.duration);
  }

  function handleSeek(e) {
    const { value } = e.target;
    audioRef.current.currentTime = value;
    setCurrentTime(value);
  }

  // Format time as mm:ss
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
      return () => {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      };
    }
  }, []);

  return (
    <div className="items-center justify-center mb-10 bg-black rounded-full">
      <div className="flex-col text-center">
        <div className="relative filter invert">
          <button
            onClick={toggleAudio}
            type="button"
            className="items-center rounded-full p-2"
          >
            {!play ? (
              <FaRegCirclePlay className="h-12 w-12" aria-hidden="true" />
            ) : (
              <FaRegCirclePause className="h-12 w-12" aria-hidden="true" />
            )}
          </button>

     
        </div>

        {/* Audio Timeline */}
        <div className="flex items-center  justify-center ">
          <span className="text-white">{formatTime(currentTime)}</span>
          <input
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            className="mx-2"
          />
          <span className="text-white">{formatTime(duration)}</span>
        </div>
        <div className="grid gap-4 md:flex md:flex-row md:flex-wrap justify-center  rounded-full pt-2 pb-3 pl-2 items-center">
            <input
              type="range"
              min={0}
              max={MAX}
              onChange={handleVolume}
            />
          </div>
      </div>
      <audio ref={audioRef} src={`/audio/${selectedSound.waveType}`} />
    </div>
  );
};

export default SoundPlayer;
