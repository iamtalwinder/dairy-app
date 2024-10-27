import React from "react";
import DairyCreated from "@/components/createdDairyList/created-dairy-list";
import { View } from "react-native";
import { DiaryProvider } from "@/context/DairyContext";

export default function Home() {
  return (
    <DiaryProvider>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DairyCreated />
      </View>
    </DiaryProvider>
  );
}

