import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

const StoryEditor: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [image, setImage] = useState<string | null>(null);

  const pickImage = () => {
    console.log("Resim seçme işlemi burada olacak.");
    // Örneğin react-native-image-picker kullanılabilir
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Text>Bir resim seçin</Text>
        )}
      </TouchableOpacity>
      <TextInput
        style={styles.textInput}
        placeholder="Hikaye metni ekle..."
        onChangeText={(value) => setText(value)}
        value={text}
      />
      <Button title="Kaydet" onPress={() => console.log("Hikaye kaydedildi")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  imagePicker: {
    height: 200,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default StoryEditor;
