## 04 Navigations

<div align="center">
   <img width="250" alt="Final result" src="https://user-images.githubusercontent.com/4281887/91638026-be4be580-ea36-11ea-851e-a7f4a388a195.png">
</div>

### Installing dependencies

1. Install React Navigation dependencies:

   ```bash
   npm install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/stack --save
   ```

2. Install dependencies using Expo to make sure that they are compatible with the current Expo version:

   ```bash
   expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
   ```

### Setting up routes in the App component

1. Import the `NavigationContainer` and the `DefaultTheme` from the `@react-navigation/native` package

2. Import the `createBottomTabNavigator` from the `@react-navigation/bottom-tabs` package

3. Create a navigator object:

   ```jsx
   const { Navigator, Screen } = createBottomTabNavigator();
   ```

4. Under the `Navbar` component, setup routes by using the `NavigationContainer`, `Navigator` and `Screen` components:

   ```jsx
   <NavigationContainer>
     <Navigator>
       <Screen
         name="About"
         component={AboutScreen}
         options={{
           tabBarIcon: ({ size, color }) => (
             <MaterialIcons name="person" size={size} color={color} />
           )
         }}
       />
     </Navigator>
   </NavigationContainer>
   ```

   > Note that the code also sets the `tabBarIcon` to customize the tab button. The `MaterialIcons` component can be imported from the built-in `@expo/vector-icons` package

5. Under the `NavigationContainer`, remove the rendered `AboutScreen` component, since it is already rendered inside the navigation

6. Run the project and notice the default gray background color

### Customizing the default theme

1. In the App component, create a `theme` object containing a customized background color:

   ```jsx
   const theme = {
     ...DefaultTheme,
     colors: {
       ...DefaultTheme.colors,
       background: 'white'
     }
   };
   ```

2. Add a `theme` property to the `NavigationContainer` and pass the `theme` object to it

3. Run the project and notice the background color changed to white

### Home component

1. Create a `HomeScreen` component inside the `screens` folder. It should render the following structure:

   ```jsx
      ├── View
      │   ├── Text (containing "Home Screen")

   ```

2. In the `App` component, setup the `HomeScreen` as a default page. It should also have a custom icon named `home` using the `MaterialIcons` component

### Cleanup unused styles

1. In the `App` component, completely remove the styles
