import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "../../styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";

type Props = {};

const FirstItem = (props: Props) => {
	return (
		<View style={styles.sliderItem}>
			<Text style={styles.sliderHeader}>Step 1</Text>
			<View style={styles.cardContainer}>
				<Image
					source={{
						uri: "https://picsum.photos/200/300",
					}}
					style={styles.image}
				/>
				<Text style={{ flex: 1 }}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Soluta dignissimos expedita facere doloribus quos
					laboriosam, praesentium quidem modi laborum iure quam
					reprehenderit ex dicta incidunt impedit voluptas dolores
					enim ipsam.
				</Text>
			</View>
			<TouchableOpacity activeOpacity={0.6} style={styles.button}>
				<Text style={{ color: "white", fontSize: 16 }}>Next</Text>
				<Ionicons name="chevron-forward" size={32} color="white" />
			</TouchableOpacity>
		</View>
	);
};

export default FirstItem;
