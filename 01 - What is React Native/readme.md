## 01 What is React Native?

<div align="center">
   <img width="250" alt="Final result" src="https://user-images.githubusercontent.com/4281887/91627659-03462c80-e9e3-11ea-8755-57001cc03a0c.png">
</div>

### Setting up the project

1. Install the Expo CLI globally on your local machine. It contains a lot of commands to manage a React Native project:

   ```bash
   npm install expo-cli --global
   ```

2. Create a new React Native application using the expo command line. The following command automatically runs the npm install command. Therefore, you do not need to install the dependencies separately

   ```bash
   expo init react-native-app --name mystagram --npm

   # Choose the "blank" option
   ```

3. Start a server

   ```bash
   cd react-native-app

   npm start
   ```

4. Open the Metro Bundler in the browser using http://localhost:19002

5. Install the Expo application on your phone, then open the camera application and scan the QR code to open the React Native application

### Installing simulators

IOS Simulator:

1.  Install XCode in order to use the IOS Simulator
2.  After installing it, go to Preference > Locations > Select Command Line Tools

Android Simulator:

1. Install Android Studio
2. Put the following code in the ~/.bashrc or ~/.bashprofile (NOTE: if you are using zsh, put the code in the .zshrc instead
   1. export ANDROID_SDK=/Users/<user>/Library/Android/sdk
   2. export PATH=/Users/<user>/Library/Android/sdk/platform-tools:\$PATH
3. Open the Android Studio Application
4. On the welcome page, go to Configure > AVD Manager > Select a device > Select OS (Click Download) > Next until finish
5. Click the Play button to run the simulator

Running on the simulators:

1. Open the Metro Bundler in the browser using http://localhost:19002
2. Click on either "Run on iOS simulator" or "Run on Android device/emulator"
3. Open the application on your simulators

### Exploring the project structure

1. Open the project in your editor and explore the project structure

2. Understand the tools used inside the project

3. In `App.js`, replace the content in the `Text` component with:
   ```jsx
   <Text>Learning React Native!!</Text>
   ```
