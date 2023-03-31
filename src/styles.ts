import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	blur: {
		width,
		position: "absolute",
		top: 50,
		left: 0,
		height,
		zIndex: 100,
	},
	sliderContainer: { position: "absolute", height, bottom: 0, right: 0 },
	sliderHeader: {
		fontSize: 30,
		fontWeight: "bold",
		color: "#333",
		textAlign: "center",
		marginTop: 16,
	},
	slider: {
		borderRadius: 12,
		backgroundColor: "white",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.51,
		shadowRadius: 13.16,
	},
	sliderItem: {
		borderRadius: 12,
		alignItems: "center",
		padding: 16,
		width,
	},
	button: {
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: "#2362C9",
		padding: 8,
		paddingHorizontal: 16,
		borderRadius: 12,
		marginTop: 36,
		flexDirection: "row",
		gap: 12,
		marginLeft: "auto",
	},
	image: {
		width: 120,
		height: 120,
		borderRadius: 80,
	},
	cardContainer: {
		flexDirection: "row",
		gap: 12,
		marginTop: 12,
	},
});
