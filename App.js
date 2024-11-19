import React from 'react';
import {
    View,
    Text,
    Image,
    SectionList,
    Button,
    TouchableOpacity,
    StatusBar,
    StyleSheet,
    Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const pokemon = [
    {
        data: [
            {
                name: 'Squirtle',
                power: 'Skull Bash',
                imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_7.png',
            },
            {
                name: 'Wartortle',
                power: 'Spinning Attack',
                imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_11-2x.png',
            },
        ],
        title: 'Water',
        bgcolor: 'skyblue',
        icon: 'water',
    },
    {
        data: [
            {name: 'Charmeleon', power: 'Fire Blast', imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_5.png'},
            {name: 'Charizard', power: 'Explosive Vortex', imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_6.png'},
        ],
        title: 'Fire',
        bgcolor: 'orangered',
        icon: 'fire',
    },
    {
        data: [
            {name: 'Bulbasaur', power: 'Leech Seed', imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_1.png'},
            {name: 'Ivysaur', power: 'Vine Whip, Leech Seed', imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_2.png'},
        ],
        title: 'Earth',
        bgcolor: 'yellowgreen',
        icon: 'earth',
    },
];

const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.itemContainer}>
            <Image
                source={{uri: item.imageUrl}}
                style={styles.image}
            />
            <View style={styles.itemContainer}>
                <Text style={styles.name}>Name: {item.name}</Text>
                <Text>Power: {item.power}</Text>
            </View>
        </TouchableOpacity>
    );
};

const App = () => {
    return (
        <View style={styles.container}>
            <Button
                title="Add Pokemon"
                onPress={() => {
                    Alert.alert('Added Pokemon!');
                }}
            />
            <StatusBar barStyle="dark-content" />
            <SectionList
                sections={pokemon}
                renderItem={renderItem}
                renderSectionHeader={({section: {title, bgcolor, icon}}) => (
                    <View style={[styles.sectionHeader, {backgroundColor: bgcolor}]}>
                        <Text style={styles.sectionTitle}>{title}</Text>
                        {icon && <Icon name={icon} size={24} color="#fff" style={styles.sectionIcon} />}
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 10,
    },
    sectionIcon: {
        marginRight: 8,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#E6E6FA',
        borderColor: 'black',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E6E6FA',
        paddingRight: 50,
    },
    name: {
        flex: 1,
        fontSize: 16,
        textAlign: 'left',
        flexDirection: 'row',
    },
    image: {
        width: 100,
        height: 140,
        flexDirection: 'row',
    },
});

export default App;
