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

export default function AudioPlayer({}: // nowPlaying,
// playlist,
any) {
  const { isFullPlayer, setIsFullPlayer } = useContext(AppContext);
  const {
    playlist,
    currentIndex,
    playPauseSound,
    rewindSound,
    forwardSound,
    isPlaying,
  } = useContext(AudioPlayerContext);

  return (
    <View
      style={{
        elevation: 5,
      }}
      className="abolute bottom-0 left-0 right-0 z-100 bg-white rounded-xl"
    >
      {isFullPlayer ? (
        <SingleSermon />
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
