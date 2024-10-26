import React from "react";
import DairyCreated from "@/components/createdDairyList/created-dairy-list";
import { View } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}  
    >
      <DairyCreated />
    </View>
  );
}

