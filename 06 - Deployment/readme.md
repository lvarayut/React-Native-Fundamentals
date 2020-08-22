## 06 Deployment

### Publishing to Expo

1. Go to the [Expo](https://expo.io/) and sign up for a new account

2. Replace the default `assets/icon.png` with our own `start/assets/icon.png`

3. In the `app.json`, set the `name` and `slug` properties:

   ```json
      {
         "expo": {
            "name": "Mystagram",
            "icon": "./assets/icon.png",
            "version": "1.0.0",
            "slug": "mystagram-application",
            ...
         }
      }
   ```

4. Publishing the application to Expo:

   ```bash
   expo publish
   ```

### Publishing to App Store

1. In the `app.json`, add the `bundleIdentifier` and `buildNumber` properties to the `ios` property:

   ```json
      {
         "expo": {
            "ios": {
               "bundleIdentifier": "com.companyname.appname",
               "buildNumber": "1.0.0"
            },
            ...
         }
      }
   ```

2. Publishing to App Store:

   ```bash
   expo build:ios
   ```

### Publishing to Play Store

1. In the `app.json`, set the `package` and `versionCode` properties to the `android` property:

   ```json
      {
         "expo": {
            "android": {
               "package": "com.companyname.appname",
               "versionCode": 1
            },
            ...
         }
      }
   ```

2. Publishing to App Store:

   ```bash
   expo build:android
   ```
