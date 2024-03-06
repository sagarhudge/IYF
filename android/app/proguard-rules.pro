# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
# Add project specific ProGuard rules here.
# You can control the set of applied configuration files using the
# proguardFiles setting in build.gradle.

# Keep the React Native libraries
-keep class com.facebook.** {*;}
-keep class com.swmansion.** {*;}

# Keep classes that are used in your React Native modules
-keep public class * extends com.facebook.react.bridge.JavaScriptModule {*;}
-keep public class * extends com.facebook.react.bridge.NativeModule {*;}
-keep public class * extends com.face
