import { Audio } from "expo-av";
import React, {
  ReactNode,
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface AudioPlayerContextType {
  sound: any;
  setSound: React.Dispatch<React.SetStateAction<any>>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  status: any;
  setStatus: React.Dispatch<React.SetStateAction<any>>;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  loadSound: () => Promise<void>;
  unloadSound: () => Promise<void>;
  playPauseSound: () => Promise<void>;
  rewindSound: () => Promise<void>;
  forwardSound: () => Promise<void>;
  shufflePlaylist: () => void;
  nextTrack: () => void;
  previousTrack: () => void;
  onSeekSliderValueChange: (value: number) => Promise<void>;
  audioUrls: string[];
  setAudioUrls: React.Dispatch<React.SetStateAction<string[]>>;
  playlist: any[];
  setPlaylist: React.Dispatch<React.SetStateAction<any[]>>;
}

const defaultState: AudioPlayerContextType = {
  sound: null,
  setSound: () => {},
  isPlaying: false,
  setIsPlaying: () => {},
  status: { positionMillis: 0, durationMillis: 0 },
  setStatus: () => {},
  currentIndex: 0,
  setCurrentIndex: () => {},
  loadSound: async () => {},
  unloadSound: async () => {},
  playPauseSound: async () => {},
  rewindSound: async () => {},
  forwardSound: async () => {},
  shufflePlaylist: () => {},
  nextTrack: () => {},
  previousTrack: () => {},
  onSeekSliderValueChange: async () => {},
  audioUrls: [],
  setAudioUrls: () => {},
  playlist: [],
  setPlaylist: () => {},
};

export const AudioPlayerContext =
  createContext<AudioPlayerContextType>(defaultState);

export const AudioPlayerProvider = ({ children }: { children: ReactNode }) => {
  const soundRef = useRef<any>(null);
  const [sound, setSound] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [status, setStatus] = useState<any>({
    positionMillis: 0,
    durationMillis: 0,
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [audioUrls, setAudioUrls] = useState<string[]>([]);
  const [isSeeking, setIsSeeking] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [playlist, setPlaylist] = useState<any[]>([]);

  console.log("urls", audioUrls);

  const loadSound = async () => {
    try {
      if (sound) {
        await sound.unloadAsync();
      }
      const currentUrl = audioUrls[currentIndex];
      if (!currentUrl) {
        throw new Error("Cannot load an AV asset from a null playback source.");
      }
      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: currentUrl },
        { shouldPlay: true },
        onPlaybackStatusUpdate
      );
      setSound(newSound);
      soundRef.current = newSound;
    } catch (error) {
      console.error("Error loading sound:", error);
    }
  };

  const unloadSound = async () => {
    if (sound) {
      await sound.unloadAsync();
      setSound(null);
    }
  };

  const onPlaybackStatusUpdate = (status: any) => {
    setStatus(status);
    setIsPlaying(status.isPlaying);
  };

  const playPauseSound = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const rewindSound = async () => {
    if (sound) {
      const status = await sound.getStatusAsync();
      let newPosition = status.positionMillis - 15000;
      if (newPosition < 0) newPosition = 0;
      await sound.setPositionAsync(newPosition);
    }
  };

  const forwardSound = async () => {
    if (sound) {
      const status = await sound.getStatusAsync();
      let newPosition = status.positionMillis + 15000;
      if (newPosition > status.durationMillis)
        newPosition = status.durationMillis;
      await sound.setPositionAsync(newPosition);
    }
  };

  const shufflePlaylist = () => {
    setIsShuffling(!isShuffling);
  };

  const nextTrack = () => {
    const nextIndex = isShuffling
      ? Math.floor(Math.random() * audioUrls.length)
      : (currentIndex + 1) % audioUrls.length;
    setCurrentIndex(nextIndex);
    setIsPlaying(false);
  };

  const previousTrack = () => {
    const prevIndex = (currentIndex - 1 + audioUrls.length) % audioUrls.length;
    setCurrentIndex(prevIndex);
    setIsPlaying(false);
  };

  const onSeekSliderValueChange = async (value: number) => {
    if (sound) {
      setIsSeeking(true);
      const position = value * status.durationMillis;
      await sound.setPositionAsync(position);
      setIsSeeking(false);
    }
  };

  const getAudioUrls = () => {
    return playlist.map((item: any) => item.audioUrl);
  };

  useEffect(() => {
    if (playlist?.length > 0) {
      setAudioUrls(getAudioUrls());
    }
  }, [playlist]);

  useEffect(() => {
    if (audioUrls?.length > 0) {
      loadSound();
    }
    return () => {
      unloadSound();
    };
  }, [currentIndex]);

  return (
    <AudioPlayerContext.Provider
      value={{
        status,
        setStatus,
        playlist,
        setPlaylist,
        currentIndex,
        setCurrentIndex,
        audioUrls,
        setAudioUrls,
        sound,
        setSound,
        isPlaying,
        setIsPlaying,
        loadSound,
        unloadSound,
        playPauseSound,
        rewindSound,
        forwardSound,
        shufflePlaylist,
        nextTrack,
        previousTrack,
        onSeekSliderValueChange,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};
