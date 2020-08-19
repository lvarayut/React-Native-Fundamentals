## 03 Styling & Layout

<div align="center">
   <img width="250" alt="Final result" src="https://user-images.githubusercontent.com/4281887/91634375-25a76c80-ea1a-11ea-91d4-ccc5459dfc94.png">
</div>

### Navbar component

1. Create a `StyleSheet` object containing the following CSS:

   ```jsx
      container: {
         borderBottomWidth: 1,
         borderColor: '#dbdbdb',

         flexDirection: 'row',
         justifyContent: 'center',

         paddingVertical: 10
      },
      logo: {
         width: 120,
         height: 50,

         resizeMode: 'contain'
      }
   ```

2. Apply styles to the components using the following structure:

   ```jsx
      ├── SafeAreaView (container)
      │   ├── Image (logo)
   ```

3. Take time to understand the styles

### AboutScreen component

1. Create a `StyleSheet` object containing the following CSS:

   ```jsx
      image: {
         width: '100%',
         height: 300
      },
      textContainer: {
         margin: 15
      },
      social: {
         flexDirection: 'row',
         justifyContent: 'center'
      },
      icon: {
         margin: 10
      }
   ```

2. Apply styles to the components using the following structure:

   ```jsx
      ├── ScrollView
      │   ├── Image (image)
      │   ├── View (textContainer)
      │   │   └── Text
      │   │   └── Text
      │   │   └── Text
      │   ├── View (social)
      │   │   ├── FontAwesome (icon)
      │   │   └── FontAwesome (icon)
      │   │   └── FontAwesome (icon)
   ```

3. Take time to understand the styles
