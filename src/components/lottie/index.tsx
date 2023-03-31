import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { memo, useEffect, useRef } from "react";
import AnimatedLottieView from "lottie-react-native";
import Animated from "react-native-reanimated";

type Props = {
	play: Animated.SharedValue<boolean>;
};

const { width, height } = Dimensions.get("window");

const LottieAnimation = ({ play }: Props) => {
	const lottieRef = useRef<AnimatedLottieView>(null);

	useEffect(() => {
		if (play.value) {
			// lottieRef.current?.play();
		}
	}, []);

	return (
		<AnimatedLottieView
			ref={lottieRef}
			style={{ width, height: width }}
			source={require("../../assets/lottie.json")}
		/>
	);
};

export default memo(LottieAnimation, (prev, next) => {
	return prev.play === next.play;
});

const styles = StyleSheet.create({});
