import React, { useRef, useState } from "react";
import { FaRegCirclePlay, FaRegCirclePause } from "react-icons/fa6";

const SoundPlayer = ({ selectedSound }) => {
  const [play, setPlay] = useState(false);
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

  return (
    <>
    <div className=" items-center justify-center mb-10  bg-black rounded-full">
        <div className=" flex-col text-center ">
          <div className="relative filter invert ">
            <button
              onClick={toggleAudio}
              type="button"
              className=" items-center rounded-full p-2 "
            >
              {!play ? (
                <FaRegCirclePlay className="h-12 w-12   " aria-hidden="true" />
              ) : (
                <FaRegCirclePause className="h-12 w-12  " aria-hidden="true" />
              )}
            </button>
          
            <div className="grid gap-4 md:flex md:flex-row md:flex-wrap justify-center bg-white rounded-full pt-2 pb-3 pl-2 items-center">
              <input
                type="range"
                min={0}
                max={MAX}
                onChange={handleVolume}
              />
            </div>
          </div>
        </div>
        <audio ref={audioRef} src={`/audio/${selectedSound.waveType}`} />
      

    </div>
     
    </>
  );
};

export default SoundPlayer;
