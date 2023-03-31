import { View, Text } from "react-native";
import React from "react";
import Animated, {
	interpolate,
	useAnimatedStyle,
} from "react-native-reanimated";

export type Steps = {
	title: string;
	step: number;
	height: number;
	content: React.ReactNode;
};

type Props = {
	index: number;
	scrollX: Animated.SharedValue<number>;
	changeHeight: Animated.SharedValue<number>;
	height: Steps["height"];
	content: Steps["content"];
};

const SliderItem = ({
	index,
	scrollX,
	height,
	changeHeight,
	content,
}: Props) => {
	changeHeight.value = interpolate(
		scrollX.value,
		[index * 375, (index + 1) * 375],
		[height, height],
		"clamp"
	);
	return <View>{content}</View>;
};

export default SliderItem;
