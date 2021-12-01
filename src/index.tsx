import {
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
