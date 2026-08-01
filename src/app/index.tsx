import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LightRays from "../reactbitComponent/LightRays";
import OptionWheel from '../reactbitComponent/OptionWheel';


export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Background layer - fixed to the viewport so SideRays always fills
          the entire screen, regardless of the container's height */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#B497CF"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>
      {/* 全局菜单按钮已移至根布局 _layout.tsx（所有页面共享） */}
      {/* StaggeredMenu - isFixed pins the header (toggle button) to the
          viewport's top-right corner. No in-flow wrapper here: a position:fixed
          element escapes its parent anyway, so a wrapping <View> with padding
          has no effect. The menu handles its own safe insets internally. */}

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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // SafeAreaView wraps all elements with 24px padding on top of the safe-area insets.
  safeArea: {
    flex: 1,
    padding: 24,
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
