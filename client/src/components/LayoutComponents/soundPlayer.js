import React, { useRef, useState } from "react";
import sounds from '../../models/sounds';
import { FaRegCirclePlay, FaRegCirclePause } from "react-icons/fa6";

const soundPlayer = () => {
  const [play, setPlay] = useState(false);
  const [selectedSound, setSelectedSound] = useState(sounds[0]);
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
      <main className="flex min-h-screen flex-col items-center justify-center bg-background">
        <div className="bg-accent flex h-fit max-w-fit flex-col rounded-lg border-2 border-cyan-700 pb-4 text-center shadow">
          <div className="relative flex flex-col space-y-0">
            <button
              onClick={toggleAudio}
              type="button"
              className="absolute right-5 left-0 top-[15%] m-auto w-9 rounded-full p-2 text-white shadow-sm"
            >
              {!play ? (
                <FaRegCirclePlay className="h-12 w-12" aria-hidden="true" />
              ) : (
                <FaRegCirclePause className="h-12 w-12" aria-hidden="true" />
              )}
            </button>
            <dl className="mt-1 flex flex-col p-4 ">
              <dd className="text-lg text-white">{selectedSound.title}</dd>
            </dl>
            <div className="mx-4 flex">
              <input
                type="range"
                className="mr-2 w-full accent-cyan-700"
                min={0}
                max={MAX}
                onChange={handleVolume}
              />
            </div>
          </div>
        </div>
        <audio ref={audioRef} loop src={`/audio/${selectedSound.waveType}`} />
      </main>
    </>
  );
};

export default soundPlayer;
