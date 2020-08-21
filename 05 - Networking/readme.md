## 05 Networking

<div align="center">
   <img width="250" alt="Final result" src="https://user-images.githubusercontent.com/4281887/91653397-b2116800-eaca-11ea-9d7d-234c3d8eff3c.png">
</div>

### Installing dependencies

1. Install [axios](https://github.com/axios/axios) that is used to handle requests

   ```bash
   npm install axios --save
   ```

### HomeScreen

1. Create a state called `photos` with an empty array as a default state

2. Fetch photos from the [https://picsum.photos/v2/list?limit=50](https://picsum.photos/v2/list?limit=50). After retrieving the photos data, set the new state to the retrieved photos

   > Note that fetching data is a side effect, therefore, it needs to be done using the `useEffect` hook

3. Replace the rendered `Text` component with the `FlatList` component. It should render the photos. Each photo should render the `Text` component containing the photo's author

4. Open the project. Notice that it shows the vertical scrollbar while scrolling down the page

5. Add the `showsVerticalScrollIndicator` property to the `FlatList` component and set it to `false` in order to disable the vertical scrollbar

### Photo component

1. Create a `Photo` component inside the `components` folder. It should accept a `photo` as a property and render the following structure:

   ```jsx
      ├── View
      │   ├── Image (source={{ uri: photo.download_url }})
      │   ├── View
      │   │   └── View
      │   │   │   └── MaterialIcons (name="person-pin" size={15})
      │   │   │   └── Text (displaying photo's author)
      │   │   └── Text (displaying photo's width and photo's height)
   ```

2. Create a `StyleSheet` object containing the following CSS:

   ```jsx
      container: {
         margin: 15,
         overflow: 'hidden',

         borderWidth: 1,
         borderRadius: 10,
         borderColor: '#dbdbdb'
      },
      image: {
         width: '100%',
         height: 200
      },
      description: {
         margin: 10
      },
      author: {
         flexDirection: 'row',
         alignItems: 'center'
      },
      authorName: {
         fontSize: 15,
         fontWeight: 'bold',
         marginLeft: 2
      },
      size: {
         fontSize: 10,
         color: '#8e8e8e',
         marginTop: 5
      }
   ```

3. Apply styles to the components using the following structure:

   ```jsx
      ├── View (container)
      │   ├── Image (image)
      │   ├── View (description)
      │   │   └── View (author)
      │   │   │   └── MaterialIcons
      │   │   │   └── Text (authorName)
      │   │   └── Text (size)
   ```

4. In the `HomeScreen` component, the `FlatList` component should render the `Photo` component instead of the `Text` component

### PhotoDetailScreen component

1. Create a `PhotoDetailScreen ` component inside the `screens` folder. It should render the following structure:

   ```jsx
      ├── View
      │   ├── Text (containing "Photo Detail Screen")
   ```

### Setting up nested routes

1. Create a folder called `navigators` in the root directory

2. Create a `HomeNavigator` component inside the `navigators` folder

3. Import the `createStackNavigator` from the `@react-navigation/stack` package

4. Create a navigator object:

   ```jsx
   const { Navigator, Screen } = createStackNavigator();
   ```

5. Setup the routes using the following structure:

   ```jsx
      ├── Navigator
      │   ├── Screen (name="Home", component={HomeScreen})
      │   ├── Screen (name="PhotoDetail", component={PhotoDetailScreen})
   ```

6. In the `App` component, update the `Screen` component to render the `HomeNavigator` component instead of the `HomeScreen` component

### Binding an onPress event in the Photo component

1. Accept another property called `onPress`

2. Replace the most outer `View` component with the `TouchableOpacity` component

3. Bind the `onPress` event to the `TouchableOpacity` component and pass the `onPress` property as its value

### Handling the onPress event in the HomeScreen component

1. Accept another property called `navigation`

2. Create an `onPress` function that should navigate to the `PhotoDetail` screen. When a photo is pressed, it should pass the photo object to the `Photo` component

3. Pass the `onPress` function to the `Photo` component

### Create a reusable List component

1. Create a `List` component inside the `components` folder. It should accept `title` and `value` as properties and render the following structure:

   ```jsx
      ├── View
      │   ├── Text (containing the `title` property)
      │   ├── Text (containing the `value` property)
   ```

2. Create a `StyleSheet` object containing the following CSS:

   ```jsx
      container: {
         borderColor: '#dbdbdb',
         borderTopWidth: 1,

         flexDirection: 'row',
         justifyContent: 'space-between',

         padding: 15,
         marginHorizontal: 15,
         fontSize: 15
      },
      value: {
         color: '#86868b'
      }
   ```

3. Apply styles to the components using the following structure:

   ```jsx
      ├── View (container)
      │   ├── Text
      │   ├── Text (value)
   ```

### Rendering the photo details in the PhotoDetailScreen component

1. Update the `PhotoDetailScreen` component to accept a `route` property

2. Get the `photo` object from the `route.params`

3. Render the following structure:

   ```jsx
      ├── View
      │   ├── Image (source={{ uri: photo.download_url }})
      │   ├── List (title="Id", value={photo.id})
      │   ├── List (title="Author", value={photo.author})
      │   ├── List (title="Width", value={photo.width})
      │   ├── List (title="Height", value={photo.height})
      │   ├── List (title="URL", value={photo.url})
   ```

4. Create a `StyleSheet` object containing the following CSS:

   ```jsx
      image: {
         width: '100%',
         height: 300
      }
   ```

5. Apply styles to the components using the following structure:

   ```jsx
      ├── View
      │   ├── Image (image)
      │   ├── List
      │   ├── List
      │   ├── List
      │   ├── List
      │   ├── List
   ```

### Bonus

1. Notice that the page currently displays the screen header, such as "Home" or "PhotoDetail". This comes from the Stack Navigator. You can switch it off by updating the `HomeNavigator` component:

   ```jsx
   <Navigator screenOptions={{ headerShown: false }}>...</Navigator>
   ```

2. By default the Stack Navigator applies a slide effect when opening a new page. You can make it slides from the bottom of the screen by adding the `mode` property:

   ```jsx
   <Navigator mode="modal" screenOptions={{ headerShown: false }}>
     ...
   </Navigator>
   ```
