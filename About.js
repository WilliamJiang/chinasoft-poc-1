import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const A1 = (props) => (
    <Text>About - {props.name}</Text>
);

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: ['China', 'Canada', 'USA', 'Singapore', 'Japan']
        }
    }

    componentWillMount = () => {
        this.setState({
            countries: this.state.countries.concat('France')
        })
    }

    shouldComponentUpdate = () => {
        return false;
    }

    componentDidMount = () => {
        this.setState({
            countries: this.state.countries.concat('UK')
        })
    }

    render() {
        const list = this.state.countries.map(country => <A1 name={country} key={country}/>);
        return (
            <View style={styles.container}>
                {list}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
});