import { useEffect, useState } from "react";
import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import {
  audio,
  audioState,
  PLAYLIST,
  loadTrack,
  playNext,
  playPrev,
} from "@/lib/music";

const MusicControl = () => {
  const [playing, setPlaying] = useState(!audio.paused);
  const [trackIndex, setTrackIndex] = useState(audioState.currentIndex);

  useEffect(() => {
    const handleEnded = () => {
      handleNext();
    };

    // initial load
    if (!audio.src && PLAYLIST.length > 0) loadTrack(0);

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (audio.paused) {
      audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  const handleNext = () => {
    playNext();
    setTrackIndex(audioState.currentIndex);
    setPlaying(true);
  };

  const handlePrev = () => {
    playPrev();
    setTrackIndex(audioState.currentIndex);
    setPlaying(true);
  };

  return (
    <div className="liquid-glass h-full w-full bg-black/20 rounded-4xl p-3 flex flex-col gap-1 justify-between text-white">
      {/* image cover */}
      <div className="w-12 h-12 rounded-2xl shadow-lg overflow-hidden">
        <img
          draggable={false}
          src={`${import.meta.env.BASE_URL}audio/${PLAYLIST[trackIndex].cover}`}
          className=""
        />
      </div>
      {/* music info */}
      <div>
        <div className="font-bold text-[14px] truncate">
          {PLAYLIST[trackIndex].title}
        </div>
        <div className="text-[11px] font-light text-white/70 truncate">
          {PLAYLIST[trackIndex].artist} . {PLAYLIST[trackIndex].album}
        </div>
      </div>
      {/* music control buttons */}
      <div className="flex items-center justify-between px-4">
        <button
          onClick={handleNext}
          className="hover:opacity-70 transition-opacity cursor-pointer"
        >
          <SkipBack size={16} className="fill-white" />
        </button>
        <button
          className="hover:opacity-70 transition-opacity cursor-pointer"
          onClick={togglePlay}
        >
          {playing ? (
            <Pause size={22} className="fill-white" />
          ) : (
            <Play size={22} className="fill-white" />
          )}
        </button>
        <button
          onClick={handlePrev}
          className="hover:opacity-70 transition-opacity cursor-pointer"
        >
          <SkipForward size={16} className="fill-white" />
        </button>
      </div>
    </div>
  );
};

export default MusicControl;
