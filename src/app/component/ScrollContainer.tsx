import { useRef } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";

import About from "../section/About";
import Contact from "../section/Contact";
import Home from "../section/Home";
import More from "../section/More";
import Project from "../section/Project";

const { height } = Dimensions.get("window");

export default function ScrollContainer() {
    const scrollRef = useRef<ScrollView>(null);

    const scrollToAbout = () => {
        scrollRef.current?.scrollTo({ y: height, animated: true });
    };

    return (
        <ScrollView
            ref={scrollRef}
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <View style={[styles.page, { backgroundColor: "#000000" }]}>
                <Home onNavigateToAbout={scrollToAbout} />
            </View>

            <View style={[styles.page, { backgroundColor: "#000000" }]}>
                <About />
            </View>

            <View style={[styles.page, { backgroundColor: "#000000" }]}>
                <Project />
            </View>

            <View style={[styles.page, { backgroundColor: "#000000" }]}>
                <More />
            </View>

            <View style={[styles.page, { backgroundColor: "#000000" }]}>
                <Contact />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    page: {
        height,
        justifyContent: "center",
        alignItems: "center",
    },
});