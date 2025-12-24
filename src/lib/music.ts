// audio playlist and helper fnctions

export interface Track {
  title: string;
  artist: string;
  album: string;
  url: string;
  cover: string;
}

export const PLAYLIST: Track[] = [
  {
    title: "Stressed Out",
    artist: "Twenty One Pilots",
    album: "Blurryface",
    url: `${import.meta.env.BASE_URL}audio/Twenty-One-Pilots-Stressed-Out.mp3`,
    cover: "stressed-out-cover.jpg",
  },
  {
    title: "Annihilate",
    artist: "Metro-Boomin",
    album: "Spider Man Across the Spider Verse",
    url: `${import.meta.env.BASE_URL}audio/Metro-Boomin-Annihilate.mp3`,
    cover: "annihilate-cover.jpg",
  },
];

// global audio object
export const audio = new Audio();

// to find current audio
export const audioState = {
  currentIndex: 0,
};

// helper functions
export const loadTrack = (index: number) => {
  const track = PLAYLIST[index];
  if (audio.src !== track.url) {
    audio.src = track.url;
    audio.load();
  }

  audioState.currentIndex = index;
};

export const playNext = () => {
  const nextIndex = (audioState.currentIndex + 1) % PLAYLIST.length;
  loadTrack(nextIndex);
  return audio.play();
};

export const playPrev = () => {
  const prevIndex =
    (audioState.currentIndex - 1 + PLAYLIST.length) % PLAYLIST.length;
  loadTrack(prevIndex);
  return audio.play();
};
