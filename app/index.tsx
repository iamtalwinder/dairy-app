import DairyCreated from "@/components/createdDairy/created-dairy";
import { Text, View } from "react-native";

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

