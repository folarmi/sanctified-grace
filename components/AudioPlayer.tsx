import { useContext, useEffect, useRef, useState } from "react";
import { Audio } from "expo-av";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import playIcon from "@/assets/images/playIcon.png";
import rewind from "@/assets/images/rewind.png";
import forward from "@/assets/images/forward.png";
import pauseIcon from "@/assets/images/pause.png";
import TailwindText from "./TailwindText";
import SingleSermon from "@/components/SingleSermon";
import { AppContext } from "@/context/AppContext";

export default function AudioPlayer({ nowPlaying }: any) {
  const scrollViewRef = useRef<ScrollView>(null);
  const [sound, setSound] = useState<any>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [status, setStatus] = useState<any>(null);
  const [progress, setProgress] = useState(0);
  const { isFullPlayer, setIsFullPlayer } = useContext(AppContext);

  //   async function togglePlayPause() {
  //     if (sound) {
  //       if (isPlaying) {
  //         await sound.pauseAsync();
  //       } else {
  //         await sound.playAsync();
  //       }
  //       setIsPlaying(!isPlaying);
  //     } else {
  //       const { sound } = await Audio.Sound.createAsync(
  //         {
  //           uri: nowPlaying?.audioUrl,
  //         },
  //         { shouldPlay: true }
  //       );
  //       setSound(sound);
  //       setIsPlaying(true);
  //     }
  //   }

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      {
        uri: nowPlaying?.audioUrl,
      },
      { shouldPlay: false },
      onPlaybackStatusUpdate
    );
    setSound(sound);
    setIsPlaying(true);
    await sound.playAsync();
  };

  const onPlaybackStatusUpdate = (status: any) => {
    setStatus(status);
    if (status.isLoaded && status.isPlaying) {
      const currentPosition = status.positionMillis;
      const totalDuration = status.durationMillis;
      const currentProgress = (currentPosition / totalDuration) * 100;
      setProgress(currentProgress);
    }
  };

  const stopSound = async () => {
    if (sound) {
      await sound.unloadAsync();
      setIsPlaying(false);
      setProgress(0);
    }
  };

  useEffect(() => {
    const fetchAudioInfo = async () => {
      try {
        const soundObject = new Audio.Sound();
        await soundObject.loadAsync({
          uri: nowPlaying?.audioUrl,
        });
        const status = await soundObject.getStatusAsync();
        setStatus(status);
      } catch (error) {
        console.error("Error fetching audio info:", error);
      }
    };
    fetchAudioInfo();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [nowPlaying?.audioUrl]);

  const scrollToTop = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  };

  return (
    <View
      style={{
        elevation: 5,
      }}
      className="abolute bottom-0 left-0 right-0 z-100 bg-white rounded-xl px-4 py-3"
    >
      {isFullPlayer ? (
        // <ScrollView ref={scrollViewRef}>
        <SingleSermon
          nowPlaying={nowPlaying}
          stopSound={stopSound}
          playSound={playSound}
          progress={progress}
          isPlaying={isPlaying}
          status={status}
        />
      ) : (
        // </ScrollView>
        <TouchableOpacity
          onPress={() => {
            setIsFullPlayer(true);
            // scrollToTop;
          }}
          className=""
          style={{ width: "100%" }}
        >
          <View className="flex flex-row justify-between items-center w-full">
            <View className="flex flex-row items-center">
              <View className="rounded-lg mr-2 overflow-hidden">
                <Image
                  source={{ uri: nowPlaying?.thumbnailUrl }}
                  style={styles.logo}
                />
              </View>

              <View>
                <TailwindText variant="bodyText4">
                  {nowPlaying?.title}
                </TailwindText>
                <TailwindText variant="footer" className="pt-[2px]">
                  {`${nowPlaying?.preacher?.first_name} ${nowPlaying?.preacher?.last_name}`}
                </TailwindText>
              </View>
            </View>

            <View className="flex flex-row">
              <TouchableOpacity className="mr-4">
                <Image source={rewind} className="w-5 h-5" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={isPlaying ? stopSound : playSound}
                className="mr-4"
              >
                <Image
                  source={isPlaying ? pauseIcon : playIcon}
                  className="w-5 h-5"
                />
              </TouchableOpacity>
              <TouchableOpacity>
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
