# s1-ui

## Building on Windows
NPM on Windows may have trouble downloading dependencies. This appears to be due to the length of directory names created in the default NPM Cache location. To fix this problem run:
```
npm config set cache C:\npm --global
```

## Parallel development
When adding features or making bug fixes, it can be useful to make changes in S1-UI and another application in parallel. This is relatively easy using [yarn link](https://yarnpkg.com/lang/en/docs/cli/link/). You will need to run `yarn link` in this project's `dist` directory and in the application's root directory. The linked library can be built on demand and used with hot reloading.

### Linking S1-UI
- In the root directory run `yarn build:development` to create a development build
- Change to the build directory with `cd dist`
- Link the built library with `yarn link`. If this command has been run before, you may see a warning that can be ignored.

### Building S1-UI on demand
- In the root directory run `yarn build:dev-env`. This watches the file system and creates a development build in response to changes. These changes will automatically be picked up when the library is linked.

### Link to S1-UI
- In the root directory of your application run `yarn link s1-ui`

### Hot reloading S1-UI changes
- Follow all the steps above, then run your application with hot reloading enabled. For example, in the `s1-ui-demo` application run `yarn open:src`.

#### [CHANGELOG](./CHANGELOG.md)
