#!/bin/sh

NAME=ripeka
DATE=$(date -d "today" +"%d%m%y_%H%M%S")
APK=./dist/platforms/android/app/build/outputs/apk/release/app-release.apk

mkdir -p ./apk/
APK_NAME=${NAME}_${DATE}.apk
cp ${APK} ./apk/${APK_NAME}
