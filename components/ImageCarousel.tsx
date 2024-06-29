import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Image,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import midYear from "@/assets/images/midYear.png";
import todayBibleReading from "@/assets/images/todayBibleReading.png";
import newPodCastEpisode from "@/assets/images/newPodCastEpisode.png";
import { screenWidth } from "@/utils";

const { width: viewportWidth } = Dimensions.get("window");

const testImages = [midYear, todayBibleReading, newPodCastEpisode];

type props = {
  images: any[];
};

const ImageCarousel = ({ images }: props) => {
  const scrollViewRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event: any) => {
    const x = event.nativeEvent.contentOffset.x;
    setCurrentIndex(Math.round(x / screenWidth));
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollViewRef.current.scrollTo({
        x: (currentIndex - 1) * screenWidth,
        animated: true,
      });
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      scrollViewRef.current.scrollTo({
        x: (currentIndex + 1) * screenWidth,
        animated: true,
      });
    }
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

  return (
    <View className="flex-1 justify-center items-center">
      <ScrollView
        horizontal
        ref={scrollViewRef}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        className="w-full"
      >
        {testImages.map((image, index) => (
          <View
            className="flex-1 justify-center items-center"
            key={index}
            style={{ width: screenWidth }}
          >
            <Image
              source={image}
              style={{ width: screenWidth - 60, height: 200 }}
            />
          </View>
        ))}
      </ScrollView>
      <View className="flex-row mt-4">
        {testImages.map((_, index) => (
          <View
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${
              currentIndex === index ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </View>

      <View className="flex-row mt-4">
        <TouchableOpacity
          onPress={handlePrev}
          className="px-4 py-2 bg-gray-300 rounded-lg mx-2"
        >
          <Text className="text-lg">Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleNext}
          className="px-4 py-2 bg-gray-300 rounded-lg mx-2"
        >
          <Text className="text-lg">Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImageCarousel;
