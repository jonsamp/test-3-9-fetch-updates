# EAS Update fetch new update test

## Steps

1. Use `expo init` to create a new project
2. Run `expo install expo-updates`
3. Update **App.tsx** with code to fetch updates on app focus
4. Run `eas build:configure`
5. Run `eas update:configure`
6. Add `channel` and `simulator.ios` properties in **eas.json** under the `preview` build profile.
7. Create a simulator build with `eas build --profile preview --platform ios`

8. Load the app and watch the network requests. Make sure there are no new updates.
9. Publish an update, then re-focus the app. Watch network requests to see the update appear.
