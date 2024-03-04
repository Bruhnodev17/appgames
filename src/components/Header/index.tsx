import { View, Text, TextInput } from "react-native";
import { useState } from "react";
import styles from "./styles";

function Header() {
    const [filter, setFilter] = useState<string>("");

    const handleFilter = (text: string) => {
        setFilter(text);
    }

    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Top Games</Text>
            <TextInput
            style={styles.input}
            placeholder="Filtrar Por Nome"
            value={filter}
            onChangeText={handleFilter}
            />
        </View>
    )
};

export default Header;