import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "../../styles";

type Props = {};

const SecondItem = (props: Props) => {
	return (
		<View style={styles.sliderItem}>
			<Text style={styles.sliderHeader}>Step 2</Text>
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
			<View
				style={[
					styles.cardContainer,
					{
						flexDirection: "row-reverse",
						marginTop: 32,
					},
				]}
			>
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
		</View>
	);
};

export default SecondItem;
