import { View, Text } from "react-native";
import { IGames } from "../../data/games";

interface GameCardProps{
    game: IGames
}

function  GameCard ({game}: GameCardProps){
    return(
        <View>
            <Text>Game Card</Text>
        </View>
    )
};

export default GameCard;