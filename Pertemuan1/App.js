import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#EFF5F5", paddingHorizontal: 25 }}>

      {/* Profile */}
      <View style={{ alignItems: "center", marginTop: 50 }}>
        <Image source={require("./assets/profile-pic.png")} style={{ width: 150, height: 150, borderRadius: 100, overflow: 'hidden', flex: 1, alignItems: "center" }} resizeMode="center" />
      </View>
      <View style={{ alignItems: "center", marginTop: 16 }}>
        <Text style={{ fontWeight: 400, fontSize: 36 }}>Adrian Adhari</Text>
        <Text style={{ fontWeight: 600, color: "#AEB5BC", fontSize: 20 }}>Full-Stack Developer</Text>
      </View>
      {/* Profile */}


      {/* Stats */}
      <View style={{ flexDirection: "row", marginTop: 26 }}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ fontSize: 24 }}>3</Text>
          <Text style={styles.subText}>PROJECTS</Text>
        </View>
        <View style={{ flex: 1, alignItems: "center", borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }}>
          <Text style={{ fontSize: 24 }}>1,042</Text>
          <Text style={styles.subText}>Followers</Text>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ fontSize: 24 }}>369</Text>
          <Text style={styles.subText}>Following</Text>
        </View>
      </View>
      {/* Stats */}


      {/* Post */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 32 }}>
        <View style={styles.mediaImageContainer}>
          <Image source={require("./assets/1.jpeg")} resizeMode="cover" style={{ borderWidth: 1, borderColor: 'black' }} />
        </View>
        <View style={styles.mediaImageContainer}>
          <Image source={require("./assets/2.jpeg")} resizeMode="cover" />
        </View>
        <View style={styles.mediaImageContainer}>
          <Image source={require("./assets/3.png")} resizeMode="cover" />
        </View>
      </ScrollView>
      {/* Post */}


      {/* Skills */}
      <View style={{ marginTop: 20 }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 26, fontWeight: 800 }}>My Skills</Text>
        </View>
        <View>
          <Text style={{ color: "#41444B", fontWeight: 300, marginBottom: 4 }}>Web Development</Text>
          <View style={styles.recentItem}>
            <View style={styles.activityIndicator} />
            <View>
              <Text style={[styles.subText, { fontSize: 10 }]}>HTML</Text>
            </View>
          </View>
          <View style={styles.recentItem}>
            <View style={styles.activityIndicator} />
            <View>
              <Text style={[styles.subText, { fontSize: 10 }]}>CSS</Text>
            </View>
          </View>
          <View style={styles.recentItem}>
            <View style={styles.activityIndicator} />
            <View>
              <Text style={[styles.subText, { fontSize: 10 }]}>Javascript</Text>
            </View>
          </View>
          <View style={styles.recentItem}>
            <View style={styles.activityIndicator} />
            <View>
              <Text style={[styles.subText, { fontSize: 10 }]}>TailwindCSS</Text>
            </View>
          </View>
          <View style={styles.recentItem}>
            <View style={styles.activityIndicator} />
            <View>
              <Text style={[styles.subText, { fontSize: 10 }]}>Bootstrap</Text>
            </View>
          </View>
          <View style={styles.recentItem}>
            <View style={styles.activityIndicator} />
            <View>
              <Text style={[styles.subText, { fontSize: 10 }]}>PHP</Text>
            </View>
          </View>
          <View style={styles.recentItem}>
            <View style={styles.activityIndicator} />
            <View>
              <Text style={[styles.subText, { fontSize: 10 }]}>Laravel</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={{ color: "#41444B", fontWeight: 300, marginBottom: 4 }}>Mobile Apps Development</Text>
          <View style={styles.recentItem}>
            <View style={styles.activityIndicator} />
            <View>
              <Text style={[styles.subText, { fontSize: 10 }]}>Java</Text>
            </View>
          </View>
          <View style={styles.recentItem}>
            <View style={styles.activityIndicator} />
            <View>
              <Text style={[styles.subText, { fontSize: 10 }]}>Kotlin</Text>
            </View>
          </View>
          <View style={styles.recentItem}>
            <View style={styles.activityIndicator} />
            <View>
              <Text style={[styles.subText, { fontSize: 10 }]}>ReactNative</Text>
            </View>
          </View>
          <View style={styles.recentItem}>
            <View style={styles.activityIndicator} />
            <View>
              <Text style={[styles.subText, { fontSize: 10 }]}>FIREBASE</Text>
            </View>
          </View>
        </View>
      </View>
      {/* Skills */}


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500"
  },
  mediaImageContainer: {
    width: 300,
    height: 150,
    overflow: 'hidden',
    marginRight: 10
  },
  recentItem: {
    flexDirection: "row",
    marginBottom: 4
  },
  activityIndicator: {
    backgroundColor: "#CABFAB",
    padding: 4,
    height: 6,
    width: 6,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20
  }
});