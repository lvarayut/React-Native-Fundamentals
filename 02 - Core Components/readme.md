## 02 Core Components

<div align="center">
   <img width="250" alt="Final result" src="https://user-images.githubusercontent.com/4281887/91628722-d72fa900-e9ec-11ea-8a77-9f523ab6f844.png">
</div>

### Navbar component

1. Copy the `logo.png` from the `start/assets` folder to your `assets` folder

2. Create a folder called `components` in the root directory

3. Create a `Navbar` component inside the `components` folder. It should render the following structure:

   ```jsx
      ├── SafeAreaView
      │   ├── Image (1)
   ```

   1. The `Image` component should render the `logo.png`

4. In the `App` component, remove everything inside the return statement and render only the `Navbar` component
5. Discuss the result
6. In the `Navbar` component, replace the `View` component with the `SafeAreaView` component

### AboutScreen component

1. Create a folder called `screens` in the root directory

2. Create a `AboutScreen` component inside the `screens` folder. It should render the following structure:

   ```jsx
      ├── ScrollView
      │   ├── Image (1)
      │   ├── View
      │   │   └── Text (2)
      │   │   └── Text (2)
      │   │   └── Text (2)
      │   ├── View
      │   │   ├── FontAwesome (3)
      │   │   └── FontAwesome (3)
      │   │   └── FontAwesome (3)
   ```

   1. The `Image` component should render a photo from the `https://picsum.photos/id/590/200/200` URL.
      > Note that the photo will not show up since the width and height have not been set yet. We will do it in the next lesson
   2. The `Text` components should contain very long texts
   3. Import the `FontAwesome` component from the `@expo/vector-icons`. Then, render it three times with the `facebook-square`, `twitter-square`, and `youtube-square` icon names

3. Render the `AboutScreen` component in the `App` component.

   > Note that you will need to use the Fragment component to wrap both Navbar and AboutScreen components

4. Discuss the result, then replace the most outer `View` component with the `ScrollView` component

5. Notice the scrolling indicator displayed in Android. You can add the `showsVerticalScrollIndicator` property to the `ScrollView` component and set it to false
