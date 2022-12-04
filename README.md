<img alt="React Native Animated Modal" src="assets/logo.png" width="1050"/>

[![React Native Animated Modal](https://img.shields.io/badge/-Extremely%20easy%20to%20create%20a%20React%20Native%20Component%20Library%20with%20both%20Stateful%20and%20Functional%20Component%20Examples-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-animated-modal)

[![npm version](https://img.shields.io/npm/v/react-native-animated-modal.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-animated-modal)
[![npm](https://img.shields.io/npm/dt/react-native-animated-modal.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-animated-modal)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Animated Modal"
        src="assets/Screenshots/typescript.jpg" />
</p>

# Installation

Add the dependency:

```bash
npm i react-native-animated-modal
```

## Peer dependencies

```json
"react-native-modal": "^13.0.1"
```

# Usage

## Import

```jsx
import AnimatedModal, { AnimatedModalController } from "react-native-animated-modal"
```

## Fundamental Usage

```jsx
<AnimatedModal
    title="Update available"
    description="A new software version is available for download"
    primaryButtonText="Update"
    outlineButtonText="Not now"
    onPrimaryButtonPress={() => {}}
    onOutlineButtonPress={() => {}}
/>
```


### Customized Example

You can use any props from `react-native-modal` with prop drilling

```jsx 
<AnimatedModal
    animationIn="fadeIn"
    animationOut="fadeOut"
    title="Update available"
    description="A new software version is available for download"
    primaryButtonText="Update"
    outlineButtonText="Not now"
    onPrimaryButtonPress={() => {}}
    onOutlineButtonPress={() => {}}
    onBackdropPress={AnimatedModalController.hide}
    onShow={() => {
      console.log('onShow');
    }}
    onHide={() => {
      console.log('onHide');
    }}
/>
```

## Example Project 😍

You can check out the example project 🥰

Simply run

- `npm i`
- `react-native run-ios/android`

should work of the example project.

# Configuration - Props

## Fundamentals

| Property             |   Type   |  Default  | Description                                     |
|----------------------|:--------:| :-------: |-------------------------------------------------|
| title                |  string  | undefined | change the title                                |
| description          |  string  | undefined | change the descrition                           |
| primaryButtonText    |  string  | undefined | change the primary button's text                |
| onPrimaryButtonPress | function | undefined | set function when the primary button is pressed |
| onOutlineButtonPress | function | undefined | set function when the primary button is pressed |

## Customization (Optionals)

| Property       |    Type     |  Default  | Description                                                       |
| -------------- |:-----------:|:---------:|-------------------------------------------------------------------|
| style          |  ViewStyle  |  default  | set or override the style object for the main container           |
| buttonsContainerStyle    |  ViewStyle  |  default  | set or override the style object for the buttons' container style |
| TouchableComponent |  component  | Pressable | set your own component instead of default `Pressable` component   |
| buttonProps | ButtonProps |  default  | change button's props **(primary button)**                        |
| outlineButtonProps | OutlineButtonProps |  default  | change button's props **(outline button)**                        |


## Customization [Button] Component

| Property           |   Type    |  Default  | Description                                            |
|--------------------|:---------:|:---------:|--------------------------------------------------------|
| title              |  string   | undefined | change the title                                       |
| onPress | function  | undefined | set your function                                      |
| style              | ViewStyle |  default  | set or override the style object for the main container |
| textStyle          | TextStyle |  default  | set or override the style object for the text style    |


## Customization [OutlineButton] Component

| Property           |   Type    |  Default  | Description                                            |
|--------------------|:---------:|:---------:|--------------------------------------------------------|
| title              |  string   | undefined | change the title                                       |
| onPress | function  | undefined | set your function                                      |
| style              | ViewStyle |  default  | set or override the style object for the main container |
| textStyle          | TextStyle |  default  | set or override the style object for the text style    |

## Future Plans

- [x] ~~LICENSE~~
- [ ] More built-in modal types
  - [ ] Notification Type
  - [ ] One Button
  - [ ] One Outline Button
- [ ] Custom Layout Feature
- [ ] Write an article about the lib on Medium

## Credits 

I heavily inspired the design by [Patrick Marx](https://dribbble.com/shots/10762430/attachments/2430949?mode=media)
Thank you so much sir 🥳

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Animated Modal is available under the MIT license. See the LICENSE file for more info.
