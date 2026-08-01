import { StyleSheet, View } from "react-native";
import OptionWheel from '../reactbitComponent/OptionWheel';
import SideRays from '../reactbitComponent/SideRays';
import SplitText from "../reactbitComponent/SplitText";

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};


export default function Index() {
  return (
    <View style={styles.container}>
      {/* Background layer - fixed to the viewport so SideRays always fills
          the entire screen, regardless of the container's height */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
        <SideRays
          speed={2.5}
          rayColor1="#EAB308"
          rayColor2="#96c8ff"
          intensity={2}
          spread={2}
          origin="top-right"
          tilt={0}
          saturation={1.5}
          blend={0.75}
          falloff={1.6}
          opacity={1}
        />
      </div>

      {/* Foreground content layer - stacked above the background */}
      <View style={styles.content}>
        <OptionWheel
          items={['Ambient', 'House', 'Techno', 'Jazz', 'Lo-Fi', 'Synthwave']}
          defaultSelected={2}
          textColor="#a6a6a6"
          activeColor="#ffffff"
          side="left"
          fontSize={3}
          spacing={1.4}
          curve={1}
          tilt={6}
          blur={2}
          fade={0.25}
          smoothing={200}
          inset={80}
          loop={false}
          draggable
          soundUrl="/assets/sounds/click-soft.mp3"
          soundVolume={0.5}
          onChange={(index, item) => console.log(index, item)}
        />
        <View>
          <SplitText
            text="Hello, you!"
            className="text-2xl font-semibold text-center"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c0c0c",
    overflow: "hidden",
  },
  // Foreground layer containing the interactive content
  content: {
    flex: 1,
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
