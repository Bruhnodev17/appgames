import { View, Text, FlatList } from "react-native";
import GameCard from "../../GameCard";
import { IGames } from "../../../data/games";
import styles from "./styles"

interface GameListprops{
    games:  IGames[]
};

interface ItemList {
    item: IGames
}

function Gamelist({games}: GameListprops) {

    const renderGame = ({item}:  ItemList) => (
        <GameCard game={item}/>
    )

    return (
        <View style={styles.content} >
            <Text style={styles.title}>Jogos Adicionados Recentemente</Text>
            <FlatList
            style={styles.flatList}
            showsVerticalScrollIndicator={false}
            data={games}
            renderItem={renderGame}
            keyExtractor={item => String(item.id)}
            />
        </View>
    )
}


export default Gamelist;