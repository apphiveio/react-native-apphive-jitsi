import {
  NativeModules,
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-apphive-jitsi' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

type ApphiveJitsiProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'ApphiveJitsiView';

export const ApphiveJitsiView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<ApphiveJitsiProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };

type UserInfo = {
    displayName?: string;
    email?: string;
    avatar?: string;
}

type JitsiMeetModule = {
    call: (url: string, userInfo?: UserInfo) => void;
    audioCall: (url: string, userInfo?: UserInfo) => void;
}

const ApphiveJitsiMeetModule: JitsiMeetModule = NativeModules.ApphiveJitsiMeetModule

const simpleCall = ApphiveJitsiMeetModule.call
const simpleAudioCall = ApphiveJitsiMeetModule.audioCall

ApphiveJitsiMeetModule.call = (url: string, userInfo?: UserInfo) => {
    userInfo = userInfo || {};
    simpleCall(url, userInfo);
}

ApphiveJitsiMeetModule.audioCall = (url: string, userInfo?: UserInfo) => {
    userInfo = userInfo || {};
    simpleAudioCall(url, userInfo);
}

export const ApphiveJitsiMeet = ApphiveJitsiMeetModule
