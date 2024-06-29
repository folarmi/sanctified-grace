import { useContext, useEffect, useRef, useState } from "react";
import { Audio } from "expo-av";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import playIcon from "@/assets/images/playIcon.png";
import rewind from "@/assets/images/rewind.png";
import forward from "@/assets/images/forward.png";
import pauseIcon from "@/assets/images/pause.png";
import TailwindText from "./TailwindText";
import SingleSermon from "@/components/SingleSermon";
import { AppContext } from "@/context/AppContext";

export default function AudioPlayer({
  // nowPlaying,
  playlist,
  setPlaylist,
}: any) {
  const [sound, setSound] = useState<any>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [status, setStatus] = useState<any>({
    positionMillis: 0,
    durationMillis: 0,
  });
  const [progress, setProgress] = useState(0);
  const { isFullPlayer, setIsFullPlayer } = useContext(AppContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);
  const [audioUrls, setAudioUrls] = useState<any>([]);
  const [isSeeking, setIsSeeking] = useState(false);

  const getAudioUrls = () => {
    let audioUrls: any[] = [];
    playlist?.map((item: any) => {
      audioUrls.push(item?.audioUrl);
    });
    return audioUrls;
  };

  const soundRef = useRef<any>(null);

  useEffect(() => {
    // Load the sound when the component mounts or the currentIndex changes
    loadSound();
    setAudioUrls(getAudioUrls());

    return () => {
      unloadSound();
    };
  }, [currentIndex]);

  const loadSound = async () => {
    try {
      // Check if sound is already loaded, if so unload it
      if (sound) {
        await sound.unloadAsync();
      }

      // Get the current URL
      const currentUrl = audioUrls[currentIndex];

      // Check if the current URL is valid
      if (!currentUrl) {
        throw new Error("Cannot load an AV asset from a null playback source.");
      }

      // Load the new sound
      const { sound: newSound } = await Audio.Sound.createAsync(
        {
          uri: currentUrl,
        },
        { shouldPlay: true },
        onPlaybackStatusUpdate
      );
      setSound(newSound), (soundRef.current = newSound);
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

  const onSeekSliderValueChange = async (value: any) => {
    if (sound) {
      setIsSeeking(true);
      const position = value * status.durationMillis;
      await sound.setPositionAsync(position);
      setIsSeeking(false);
    }
  };

  return (
    <View
      style={{
        elevation: 5,
      }}
      className="abolute bottom-0 left-0 right-0 z-100 bg-white rounded-xl"
    >
      {isFullPlayer ? (
        // <ScrollView ref={scrollViewRef}>
        <SingleSermon
          nowPlaying={playlist[currentIndex]}
          playPauseSound={playPauseSound}
          rewindSound={rewindSound}
          forwardSound={forwardSound}
          nextTrack={nextTrack}
          previousTrack={previousTrack}
          progress={progress}
          isPlaying={isPlaying}
          status={status}
          shufflePlaylist={shufflePlaylist}
          onSeekSliderValueChange={onSeekSliderValueChange}
        />
      ) : (
        <TouchableOpacity
          onPress={() => {
            setIsFullPlayer(true);
            // scrollToTop;
          }}
          className=""
          style={{ width: "100%", paddingHorizontal: 12, paddingVertical: 16 }}
        >
          <View className="flex flex-row justify-between items-center w-full">
            <View className="flex flex-row items-center">
              <View className="rounded-lg mr-2 overflow-hidden">
                <Image
                  source={{ uri: playlist[currentIndex]?.thumbnailUrl }}
                  style={styles.logo}
                />
              </View>

              <View>
                <TailwindText variant="bodyText4">
                  {playlist[currentIndex]?.title}
                </TailwindText>
                <TailwindText variant="footer" className="pt-[2px]">
                  {`${playlist[currentIndex]?.preacher?.first_name} ${playlist[currentIndex]?.preacher?.last_name}`}
                </TailwindText>
              </View>
            </View>

            <View className="flex flex-row">
              <TouchableOpacity onPress={rewindSound} className="mr-4">
                <Image source={rewind} className="w-5 h-5" />
              </TouchableOpacity>
              <TouchableOpacity onPress={playPauseSound} className="mr-4">
                <Image
                  source={isPlaying ? pauseIcon : playIcon}
                  className="w-5 h-5"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={forwardSound}>
                <Image source={forward} className="w-5 h-5" />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 44,
    height: 44,
  },
});
