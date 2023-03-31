import {
	SafeAreaView,
	Dimensions,
	View,
	NativeSyntheticEvent,
	NativeScrollEvent,
	FlatList,
	Platform,
} from "react-native";
import Animated, {
	interpolate,
	useAnimatedProps,
	useAnimatedStyle,
	useSharedValue,
} from "react-native-reanimated";
import FirstItem from "./src/components/Items/FirstItem";
import { styles } from "./src/styles";
import { Steps } from "./src/components/SliderItem";
import SecondItem from "./src/components/Items/SecondItem";
import { useMemo, useRef } from "react";
import { BlurView } from "expo-blur";
import AnimatedLottieView from "lottie-react-native";
import { StatusBar } from "expo-status-bar";
import LottieAnimation from "./src/components/lottie";

const { width, height } = Dimensions.get("window");

const AnimatedScrollView = Animated.createAnimatedComponent(FlatList);
const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

export default function App() {
	const steps: Steps[] = [
		{
			title: "Step 1",
			step: 1,
			height: height * 0.4,
			content: <FirstItem />,
		},
		{
			title: "Step 2",
			step: 2,
			height: height * 0.6,
			content: <SecondItem />,
		},
		{
			title: "Step 1",
			step: 1,
			height: height * 0.3,
			content: <FirstItem />,
		},
		{
			title: "Step 2",
			step: 2,
			height: height * 1,
			content: <SecondItem />,
		},
		{
			title: "Step 1",
			step: 1,
			height: height * 0.6,
			content: <FirstItem />,
		},
		{
			title: "Step 2",
			step: 2,
			height: height * 0.8,
			content: <SecondItem />,
		},
	];

	const scrollX = useSharedValue<number>(0);
	const play = useSharedValue<boolean>(false);
	const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
		const { x } = e.nativeEvent.contentOffset;
		scrollX.value = x;
		if (scrollX.value >= (steps.length + 1) * width) {
			play.value = true;
		}
	};

	const lottieRef = useRef<AnimatedLottieView>(null);

	const outputHeight = useMemo(
		() => steps.map((step) => step.height),
		[steps]
	);

	const outputBlur = useMemo(
		() =>
			steps
				.map(
					(_, index) =>
						((Platform.OS === "ios" ? 100 : 30) / steps.length) *
						index
				)
				.reverse(),
		[steps]
	);
	const input = useMemo(() => steps.map((_, index) => index * width), []);

	const rStyle = useAnimatedStyle(() => {
		const maxHeight = interpolate(
			scrollX.value,
			input,
			outputHeight,
			"clamp"
		);
		return {
			maxHeight,
		};
	});
	const aBlur = useAnimatedProps(() => {
		const blur = interpolate(scrollX.value, input, outputBlur, "clamp");
		return {
			intensity: blur,
		};
	});

	return (
		<View style={styles.container}>
			<StatusBar />

			<View
				style={{
					flex: 1,
					alignItems: "center",
					paddingTop: 50,
					position: "relative",
				}}
			>
				<AnimatedBlurView
					style={styles.blur}
					intensity={0}
					animatedProps={aBlur}
					tint={"dark"}
				/>
				<LottieAnimation play={play} />
			</View>
			<Animated.View style={[styles.sliderContainer, rStyle]}>
				<SafeAreaView />
				<AnimatedScrollView
					data={steps}
					renderItem={({ item }: any) => item.content}
					onScroll={handleScroll}
					scrollEventThrottle={16}
					showsHorizontalScrollIndicator={false}
					pagingEnabled
					style={[styles.slider]}
					horizontal
				/>
			</Animated.View>
		</View>
	);
}
