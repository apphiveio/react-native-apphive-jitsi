package com.reactnativeapphivejitsi;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class ApphiveJitsiPackage implements ReactPackage, ApphiveJitsiMeetViewReference {
    private ApphiveJitsiMeetView jitsiMeetViewRef = null;

    public void setJitsiMeetView(ApphiveJitsiMeetView newView) {
        this.jitsiMeetViewRef = newView;
    }

    public ApphiveJitsiMeetView getJitsiMeetView() {
        return this.jitsiMeetViewRef;
    }

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new ApphiveJitsiMeetModule(reactContext, this));
        return modules;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Arrays.<ViewManager>asList(new ApphiveJitsiMeetViewManager(reactContext, this));
    }
}
