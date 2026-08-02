import GradientText from '@/reactbitComponent/GradientText/GradientText';
import ShinyText from '@/reactbitComponent/ShinyText/ShinyText';
import { StyleSheet, Text, View } from "react-native";


interface HomeProps {
    onNavigateToAbout?: () => void;
}

export default function Home({ onNavigateToAbout }: HomeProps) {

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>Chuhong Wang</Text>
                <GradientText
                    colors={["#5227FF", "#FF9FFC", "#B497CF"]}
                    animationSpeed={8}
                    showBorder={false}
                    className="custom-class"
                    fontSize={140}
                    fontWeight="light"
                    fontFamily="Arial"
                >
                    Design Portfolio
                </GradientText>
            </View>
            <View style={styles.shinyTextContainer}>
                <ShinyText
                    text="View My Work"
                    speed={2}
                    delay={0}
                    color="#b5b5b5"
                    shineColor="#ffffff"
                    spread={120}
                    direction="left"
                    yoyo={false}
                    pauseOnHover={false}
                    disabled={false}
                    onClick={onNavigateToAbout}
                />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 220,
    },

    text: {
        fontSize: 20,
        fontWeight: "light",
        color: "#FFFFFF",
        fontFamily: "Arial",
        alignSelf: "center",
    },

    shinyTextContainer: {
        alignItems: "center",
    },
});
