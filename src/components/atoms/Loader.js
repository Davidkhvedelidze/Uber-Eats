import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Modal,
  Image,
  ActivityIndicator,
} from "react-native";

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: this.props.isLoading,
    };
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      isLoading: nextProps.isLoading,
    };
  }

  render() {
    return (
      <Modal
        transparent={true}
        animationType={"none"}
        visible={this.state.isLoading}
        style={{ zIndex: 1100 }}
      >
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#55837D" />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default Loader;
