import { useContext } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import playIcon from "@/assets/images/playIcon.png";
import rewind from "@/assets/images/rewind.png";
import forward from "@/assets/images/forward.png";
import pauseIcon from "@/assets/images/pause.png";
import TailwindText from "./TailwindText";
import SingleSermon from "@/components/SingleSermon";
import { AppContext } from "@/context/AppContext";
import { AudioPlayerContext } from "@/context/AudioPlayerContext";
import Slider from "@react-native-community/slider";
import SinglePodcast from "./SinglePodcast";

export default function PodcastAudioPlayer({}: any) {
  const { isFullPlayer, setIsFullPlayer } = useContext(AppContext);
  const {
    playlist,
    currentIndex,
    playPauseSound,
    rewindSound,
    forwardSound,
    isPlaying,
    status,
    onSeekSliderValueChange,
  } = useContext(AudioPlayerContext);

  return (
    <View
      style={{
        elevation: 5,
      }}
      className="abolute bottom-0 left-0 right-0 z-100 bg-white dark:bg-black rounded-xl"
    >
      {isFullPlayer ? (
        <SinglePodcast />
      ) : (
        <>
          <TouchableOpacity
            onPress={() => {
              setIsFullPlayer(true);
              // scrollToTop;
            }}
            className=""
            style={{
              width: "100%",
              paddingHorizontal: 12,
              paddingVertical: 16,
            }}
          >
            <View className="flex flex-row justify-between items-center w-full">
              <View className="flex flex-row items-center">
                <View className="rounded-lg mr-2 overflow-hidden">
                  <Image
                    source={{ uri: playlist?.[currentIndex]?.thumbnailUrl }}
                    style={styles.logo}
                  />
                </View>

                <View>
                  <TailwindText variant="bodyText4">
                    {playlist?.[currentIndex]?.title}
                  </TailwindText>
                  <TailwindText variant="footer" className="pt-[2px]">
                    {`${playlist?.[currentIndex]?.preacher?.first_name} ${playlist?.[currentIndex]?.preacher?.last_name}`}
                  </TailwindText>
                </View>
              </View>

              <View className="flex flex-row">
                <TouchableOpacity onPress={rewindSound} className="mr-4">
                  <Image source={rewind} className="w-5 h-5" />
                </TouchableOpacity>
                <TouchableOpacity onPress={playPauseSound} className="mr-4 ">
                  <Image
                    source={isPlaying ? pauseIcon : playIcon}
                    className="w-5 h-[23px]"
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={forwardSound}>
                  <Image source={forward} className="w-5 h-5" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
          <Slider
            className="w-full"
            minimumValue={0}
            maximumValue={1}
            value={status.positionMillis / status.durationMillis}
            onSlidingComplete={onSeekSliderValueChange}
            minimumTrackTintColor="#F9AF1C"
            maximumTrackTintColor="#ffffff63"
            thumbTintColor="transparent"
            style={{ height: 0, transform: [{ scaleY: 1 }] }}
          />
        </>
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
