import { StyleSheet, Text, View, Button, Image, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { Switch } from '@ant-design/react-native';

const index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [faq, setFaq] = useState('');
  const [feedback, setFeedback] = useState<String[]>([]);
  const [isAlert, setIsAlert] = useState(true);
  const toggleDarkMode = () => {
    setIsDarkMode((previousState) => !previousState);
  };
  const toggleAlert = () => {
    setIsAlert((previousState) => !previousState);
  };
  const handlePress = () => {
    if (faq.trim()) {
      if (isAlert) {
        Alert.alert('Thank you for your feedback !', '', [
          {
            text: 'OK',
            style: 'cancel',
          },
        ]);
      }
      setFeedback([faq, ...feedback]);
      setFaq('');
    }
  };
  return (
    <View style={[styles.container, isDarkMode ? styles.darkBackground : styles.lightBackground]}>
      <View style={styles.wrapper}>
        {/* Information App */}

        <View style={styles.info}>
          <Image
            style={styles.image}
            source={{
              // uri: 'https://i.pinimg.com/564x/01/de/1f/01de1f6348effbf9871b6a39146b89c6.jpg',
              uri: 'https://i.pinimg.com/564x/6a/75/85/6a7585ef5eafe25ab3a4793e743f38ab.jpg',
            }}
          />

          <View>
            <Text style={[styles.name, isDarkMode ? styles.darkText : styles.lightText]}>
              React Native App
            </Text>
          </View>
        </View>

        {/* Switch Area */}

        <View>
          <View style={styles.switchArea}>
            <Text style={[styles.textNormal, isDarkMode ? styles.darkText : styles.lightText]}>
              Dark mode
            </Text>
            <Switch
              defaultChecked={isDarkMode}
              onChange={toggleDarkMode}
              trackColor={{
                false: '#767577',
                true: '#81b0ff',
              }}
              thumbColor={isDarkMode ? '#000' : '#fff'}
            />
          </View>

          <View style={styles.switchArea}>
            <Text style={[styles.textNormal, isDarkMode ? styles.darkText : styles.lightText]}>
              Notification
            </Text>
            <Switch
              defaultChecked={isAlert}
              onChange={toggleAlert}
              trackColor={{
                false: '#767577',
                true: '#81b0ff',
              }}
              thumbColor={isDarkMode ? '#000' : '#fff'}
            />
          </View>
        </View>

        {/* Feedback Area */}

        <View style={styles.feedbackArea}>
          <View>
            <Text style={[styles.textExtraNormal, isDarkMode ? styles.darkText : styles.lightText]}>
              Feedback
            </Text>
            <TextInput
              multiline={true}
              value={faq}
              onChangeText={setFaq}
              placeholder="Your feedback here..."
              placeholderTextColor={isDarkMode ? '#fff' : '#000'}
              cursorColor={isDarkMode ? '#fff' : '#2f2f2f'}
              style={[
                styles.textInput,
                isDarkMode
                  ? { borderColor: '#fff', backgroundColor: '#2f2f2f', color: '#fff' }
                  : { borderColor: 'rgba(0,0,0,0.1)', color: '#000' },
              ]}
            />
          </View>

          <View>
            <Button title="SEND FEEDBACK" onPress={handlePress} />
          </View>
        </View>

        {/* FAQ Area */}
        <View style={styles.faqArea}>
          <Text style={[styles.boldText, isDarkMode ? styles.darkText : styles.lightText]}>
            Frequently Asked Questions
          </Text>
          <View>
            {feedback.map((item, index) => (
              <Text style={[isDarkMode ? styles.darkText : styles.lightText, styles.textNormal]} key={index}>
                Q: {item}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  darkBackground: {
    backgroundColor: '#000',
  },
  lightBackground: {
    backgroundColor: '#fff',
  },
  darkText: {
    color: '#fff',
  },
  lightText: {
    color: '#000',
  },
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },

  wrapper: {
    flex: 1,
    alignItems: 'center',
    gap: 6,
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  image: {
    width: 140,
    height: 140,
    borderRadius: 1000,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  switch: {
    backgroundColor: '#7fffd4',
    color: '#000',
  },
  switchArea: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  textNormal: {
    fontSize: 16,
  },
  textExtraNormal: {
    fontSize: 18,
    fontWeight: '500',
  },
  boldText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  feedbackArea: {
    width: '100%',
    marginTop: 15,
  },
  textInput: {
    height: 120,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
    padding: 10,
    margin: 10,
    textAlignVertical: 'top',
  },
  faqArea: {
    width: '100%',
    marginTop: 15,
  },
});
