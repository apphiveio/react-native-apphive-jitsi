# react-native-apphive-jitsi

An interface to connect to jitsi sdk, for now the library only adds the jitsi sdk on android

## Important:
Only tested on react-native@0.66.x, use on your own risk

## Installation

```sh
npm install react-native-apphive-jitsi
```

### Android instalation

Add the next line on android/build.gradle

```
allprojects {
    repositories {
        .... All your other configs

        // Add the next maven dependency, if not the build process will not work
        maven {
            url("https://github.com/jitsi/jitsi-maven-repository/raw/master/releases")
        }
    }
}
```

## Usage

No usage at the moment, only sdk is installed on android

## License

MIT
