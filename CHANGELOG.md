# Changelog

## [2.0.0] - 2024-04-09

### 🚀 Major Changes
- Complete rewrite of the modal system for better stability and type safety
- Introduced new modal types: Simple, Styled, and Full Screen
- Improved TypeScript support with better type definitions
- New singleton pattern for `ModalController` ensuring consistent modal state

### ✨ New Features
- **Full Screen Modal Support**
  - Added `isFullScreen` prop for edge-to-edge modals
  - Proper handling of status bar and device safe areas
  - Background color customization through `containerStyle`

- **Enhanced Modal Types**
  - Simple Modal: Basic modal with minimal styling
  - Styled Modal: Pre-styled modal with animations
  - Full Screen Modal: Edge-to-edge modal support

- **Improved Animation System**
  - Smoother transitions between states
  - Customizable animation types per modal
  - Better handling of modal mounting/unmounting

### 💪 Improvements
- Better ref handling with `useImperativeHandle`
- Improved state management using `useStateWithCallback`
- Enhanced backdrop handling and touch events
- Better support for custom styling through `containerStyle`
- More consistent modal positioning and layout

### 🛠 Breaking Changes
- Changed modal ref handling system
- Updated modal show/hide method signatures
- Removed deprecated styling props in favor of `containerStyle`
- Changed default animation behavior
- Updated TypeScript definitions for stricter type checking

### 📚 Documentation
- Completely revamped documentation with detailed examples
- Added comprehensive usage guide
- Included best practices section
- Added performance optimization tips
- More code examples and use cases

### 🐛 Bug Fixes
- Fixed modal flickering issues
- Resolved background color inconsistencies
- Fixed full-screen modal layout issues
- Improved handling of modal state transitions
- Better error handling for modal operations

### 🧹 Maintenance
- Updated dependencies to latest versions
- Improved code organization
- Better TypeScript integration
- Enhanced error messages and debugging
- Removed deprecated code and methods

### 📱 Example App
- New example app showcasing all modal types
- Added more usage examples
- Improved demo animations
- Better code organization in examples

### 🔄 Migration Guide
To upgrade from 1.x to 2.0.0:

1. Update your imports:
```jsx
import GlobalModal, { ModalController } from "react-native-global-modal-2"
```

2. Update modal ref setup:
```jsx
const modalRef = useRef<GlobalModalRef>(null);

React.useEffect(() => {
  if (modalRef.current) {
    ModalController.setModalRef(modalRef);
  }
}, []);
```

3. Update modal show calls:
```jsx
// Old
modal.show(<Content />);

// New
ModalController.show({
  content: <Content />,
  // optional props
  isFullScreen: false,
  containerStyle: {},
  onShow: () => {},
  onHide: () => {},
});
```

### 📦 Dependencies
- React Native Modal: ^14.0.0-rc.1
- React: >=16.8.0
- React Native: >=0.59.0

For more detailed information, please refer to the [documentation](README.md). 