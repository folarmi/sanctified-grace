import React, { useState, useEffect, useRef } from "react";
import { View, Button, Text } from "react-native";
import { Audio } from "expo-av";
import Slider from "@react-native-community/slider";
import { tailwind } from "tailwindcss-react-native";

const MusicPlayer = ({ playlist }) => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);
  const [status, setStatus] = useState({
    positionMillis: 0,
    durationMillis: 0,
  });
  const [isSeeking, setIsSeeking] = useState(false);

  const soundRef = useRef(null);

  useEffect(() => {
    loadSound();

    return () => {
      unloadSound();
    };
  }, [currentIndex]);

  const loadSound = async () => {
    if (sound) {
      await sound.unloadAsync();
    }

    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri: playlist[currentIndex] },
      { shouldPlay: false },
      onPlaybackStatusUpdate
    );

    setSound(newSound);
    soundRef.current = newSound;
  };

  const unloadSound = async () => {
    if (sound) {
      await sound.unloadAsync();
      setSound(null);
    }
  };

  const onPlaybackStatusUpdate = (status) => {
    if (!isSeeking) {
      setStatus(status);
    }
  };

  const playPauseSound = async () => {
    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  const rewindSound = async () => {
    if (sound) {
      const status = await sound.getStatusAsync();
      let newPosition = status.positionMillis - 5000;
      if (newPosition < 0) newPosition = 0;
      await sound.setPositionAsync(newPosition);
    }
  };

  const forwardSound = async () => {
    if (sound) {
      const status = await sound.getStatusAsync();
      let newPosition = status.positionMillis + 5000;
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
      ? Math.floor(Math.random() * playlist.length)
      : (currentIndex + 1) % playlist.length;
    setCurrentIndex(nextIndex);
    setIsPlaying(false);
  };

  const previousTrack = () => {
    const prevIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    setCurrentIndex(prevIndex);
    setIsPlaying(false);
  };

  const formatTime = (millis) => {
    if (typeof millis !== "number" || isNaN(millis)) return "0:00";
    const minutes = Math.floor(millis / 1000 / 60);
    const seconds = Math.floor((millis / 1000) % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const onSeekSliderValueChange = async (value) => {
    if (sound) {
      setIsSeeking(true);
      const position = value * status.durationMillis;
      await sound.setPositionAsync(position);
      setIsSeeking(false);
    }
  };

  return (
    <View style={tailwind("flex-1 justify-center items-center p-4")}>
      <Text style={tailwind("text-lg mb-4")}>
        Now Playing: Track {currentIndex + 1}
      </Text>
      {status && (
        <View style={tailwind("w-full items-center")}>
          <Text style={tailwind("text-sm mb-2")}>
            {formatTime(status.positionMillis)} /{" "}
            {formatTime(status.durationMillis)}
          </Text>
          <Slider
            style={tailwind("w-full mb-4")}
            minimumValue={0}
            maximumValue={1}
            value={status.positionMillis / status.durationMillis}
            onSlidingComplete={onSeekSliderValueChange}
            minimumTrackTintColor="#1DB954" // Green
            maximumTrackTintColor="#D3D3D3" // Light Gray
            thumbTintColor="#1DB954" // Green
          />
        </View>
      )}
      <View style={tailwind("flex-row mb-4")}>
        <Button title="Rewind" onPress={rewindSound} />
        <Button title={isPlaying ? "Pause" : "Play"} onPress={playPauseSound} />
        <Button title="Forward" onPress={forwardSound} />
      </View>
      <View style={tailwind("flex-row mb-4")}>
        <Button title="Previous" onPress={previousTrack} />
        <Button title="Next" onPress={nextTrack} />
      </View>
      <Button
        title={isShuffling ? "Stop Shuffle" : "Shuffle"}
        onPress={shufflePlaylist}
      />
    </View>
  );
};

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      scrollViewRef.current.scrollTo({
        x: nextIndex * screenWidth,
        animated: true,
      });
      return nextIndex;
    });
  }, 2000);

  return () => clearInterval(interval);
}, [images.length]);
