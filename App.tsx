import { Text, View } from 'react-native';
import { useState } from 'react';
import games, { IGames } from "./src/data/games"
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import styles from "./AppStyles";
import Gamelist from './src/components/pages/GameList';

export default function App() {

  const [filteredGames, setFilteredGames] = useState<IGames[]>(games)

  const handleFilterChange = (filterText: String) => {
    const filtered = games.filter(game => game.name.toLowerCase().includes(filterText.toLowerCase()));
    setFilteredGames(filtered);
  }

  return (
    <View style={styles.container}>
      <Header onFilterChange={handleFilterChange} />
      <Gamelist games={filteredGames} />
      <Footer />
    </View>
  );
}

