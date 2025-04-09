<img alt="React Native Global Modal" src="assets/logo.png" width="1050"/>

[![React Native Global Modal](https://img.shields.io/badge/-%F0%9F%8C%8D%20Global%20modal%20and%20callable%20from%20anywhere%20on%20the%20app%20for%20React%20Native-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-global-modal-2)

[![npm version](https://img.shields.io/npm/v/react-native-global-modal-2.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-global-modal-2)
[![npm](https://img.shields.io/npm/dt/react-native-global-modal-2.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-global-modal-2)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Global Modal Demo" src="assets/for-docs/react-native-global-modal-2.gif" width="360"/>
</p>

# Features

✨ Global Modal Accessible from Anywhere in Your App
🎯 Three Modal Types Out of the Box:
  - Simple Modal
  - Styled Modal with Animations
  - Full Screen Modal
🎨 Fully Customizable Styling
🔄 Smooth Animations
📱 iOS and Android Support

# Installation

Add the dependency:

```bash
npm i react-native-global-modal-2
```

## Peer Dependencies

<details>
<summary>Click to expand</summary>

```json
"react-native-modal": "^13.0.1"
```
</details>

# Usage

## Import

```jsx
import GlobalModal, { ModalController } from "react-native-global-modal-2"
```

## Basic Setup

First, import the necessary components:

```jsx
import GlobalModal, { ModalController } from "react-native-global-modal-2"
```

Add the `GlobalModal` component to your app's root:

```jsx
// App.tsx or your root component
import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import GlobalModal, { ModalController, GlobalModalRef } from "react-native-global-modal-2";

const App = () => {
  const modalRef = useRef<GlobalModalRef>(null);

  React.useEffect(() => {
    if (modalRef.current) {
      ModalController.setModalRef(modalRef);
    }
  }, []);

  return (
    <NavigationContainer>
      <MainStack />
      <GlobalModal
        ref={modalRef}
        animationIn="fadeIn"
        animationOut="fadeOut"
        onBackdropPress={ModalController.hide}
      />
    </NavigationContainer>
  );
};
```

## Modal Types and Examples

### 1. Simple Modal

Basic modal with minimal styling:

```jsx
import { ModalController } from "react-native-global-modal-2";

const showSimpleModal = () => {
  ModalController.show({
    content: (
      <View style={styles.modalContent}>
        <Text style={styles.title}>Simple Modal</Text>
        <Text style={styles.text}>This is a simple modal example</Text>
        <Button title="Close" onPress={() => ModalController.hide()} />
      </View>
    ),
  });
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    marginBottom: 20,
    textAlign: 'center',
  },
});
```

### 2. Styled Modal

Modal with custom styling and animations:

```jsx
const showStyledModal = () => {
  ModalController.show({
    content: (
      <View style={styles.styledContent}>
        <Text style={styles.styledTitle}>Styled Modal</Text>
        <Text style={styles.styledText}>
          Custom styled modal with beautiful design
        </Text>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => ModalController.hide()}>
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
      </View>
    ),
  });
};

const styles = StyleSheet.create({
  styledContent: {
    backgroundColor: '#4A90E2',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  styledTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  styledText: {
    color: '#fff',
    marginBottom: 24,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#4A90E2',
    fontWeight: '600',
  },
});
```

### 3. Full Screen Modal

Modal that covers the entire screen:

```jsx
const showFullScreenModal = () => {
  ModalController.show({
    content: (
      <View style={styles.fullScreenContent}>
        <Text style={styles.fullScreenTitle}>Full Screen Modal</Text>
        <Text style={styles.fullScreenText}>
          This modal takes up the entire screen
        </Text>
        <TouchableOpacity
          style={styles.fullScreenButton}
          onPress={() => ModalController.hide()}>
          <Text style={styles.fullScreenButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    ),
    isFullScreen: true,
    containerStyle: {
      backgroundColor: '#fff',
    },
  });
};

const styles = StyleSheet.create({
  fullScreenContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  fullScreenTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  fullScreenText: {
    fontSize: 18,
    marginBottom: 24,
    textAlign: 'center',
  },
  fullScreenButton: {
    backgroundColor: '#102B43',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  fullScreenButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
```

## Advanced Usage

### Custom Animations

You can customize the modal animations using any animation type from `react-native-modal`:

```jsx
<GlobalModal
  animationIn="slideInUp"  // or fadeIn, bounceIn, etc.
  animationOut="slideOutDown"  // or fadeOut, bounceOut, etc.
  animationInTiming={500}  // animation duration in ms
  animationOutTiming={500}
  backdropTransitionInTiming={500}
  backdropTransitionOutTiming={500}
/>
```

### Modal with Form

Example of a modal containing a form:

```jsx
const showFormModal = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Handle form submission
    console.log({ name, email });
    ModalController.hide();
  };

  ModalController.show({
    content: (
      <View style={styles.formContent}>
        <Text style={styles.formTitle}>Contact Form</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    ),
  });
};
```

### Modal with Loading State

Example of a loading modal:

```jsx
const showLoadingModal = () => {
  ModalController.show({
    content: (
      <View style={styles.loadingContent}>
        <ActivityIndicator size="large" color="#4A90E2" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    ),
  });

  // Hide the modal after some async operation
  setTimeout(() => {
    ModalController.hide();
  }, 2000);
};
```

### Handling Modal Lifecycle

You can use the `onShow` and `onHide` callbacks:

```jsx
ModalController.show({
  content: <YourModalContent />,
  onShow: () => {
    console.log('Modal shown');
    // Perform actions when modal is shown
  },
  onHide: () => {
    console.log('Modal hidden');
    // Clean up or perform actions when modal is hidden
  },
});
```

## Best Practices

1. **Modal Reference**: Always set up the modal reference in your root component to ensure it's accessible throughout your app.

2. **Error Handling**: Handle cases where the modal reference might not be set:
```jsx
const showModal = () => {
  try {
    ModalController.show({
      content: <YourContent />,
    });
  } catch (error) {
    console.warn('Failed to show modal:', error);
  }
};
```

3. **Styling**: Keep modal styles consistent throughout your app by defining a common style theme:
```jsx
const modalStyles = {
  content: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  // ... other common styles
};
```

4. **Performance**: For modals with complex content, consider using `useMemo` or `useCallback`:
```jsx
const ModalContent = React.memo(() => {
  const handlePress = useCallback(() => {
    // Handle press
  }, []);

  return (
    <View>
      <Text>Complex Modal Content</Text>
      <Button onPress={handlePress} title="Action" />
    </View>
  );
});
```

## Configuration

### GlobalModal Props

| Property      | Type       | Description                                     |
|--------------|:----------:|-------------------------------------------------|
| defaultStyle | ViewStyle  | Default style for the modal container           |
| animationIn  | string    | Entry animation type (e.g., "fadeIn", "slideInDown") |
| animationOut | string    | Exit animation type (e.g., "fadeOut", "slideOutUp") |
| ...rest      | ModalProps | Any prop from react-native-modal                |

### ModalData Props

| Property       | Type       | Description                                     |
|---------------|:----------:|-------------------------------------------------|
| content       | ReactNode  | Modal content to display                        |
| isFullScreen  | boolean   | Whether to show as full screen modal            |
| containerStyle| ViewStyle | Style for the modal container                   |
| onShow        | function  | Callback when modal is shown                    |
| onHide        | function  | Callback when modal is hidden                   |

## Styling Examples

### Simple Modal
```jsx
const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
});
```

### Styled Modal
```jsx
const styles = StyleSheet.create({
  styledContent: {
    backgroundColor: '#4A90E2',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
```

### Full Screen Modal
```jsx
const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

## Example Project

To run the example project:

1. Clone the repository
2. Navigate to the example directory
3. Run:
```bash
npm install
npx pod-install  # for iOS
npm run ios/android
```

## Future Plans

- [x] ~~LICENSE~~
- [x] ~~Custom Layout Feature~~
- [x] Full Screen Modal Support
- [ ] More built-in modal types
  - [ ] Alert Modal
  - [ ] Action Sheet Modal
  - [ ] Bottom Sheet Modal
- [ ] Gesture Controls
- [ ] Accessibility Improvements
- [ ] More Examples and Documentation

## Credits 

- Design inspiration: [Patrick Marx](https://dribbble.com/shots/10762430/attachments/2430949?mode=media)
- Original concept: [Roycechua's global modal example](https://github.com/roycechua/rn-global-modal-control-example)

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Global Modal is available under the MIT license. See the LICENSE file for more info.
