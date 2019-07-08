import React from 'react'
import { StyleSheet, Platform, Image, Text, View, TouchableHighlight } from 'react-native'
import { firebase } from '../config/firebase'

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.signOut = this.signOut.bind(this);
        this.state = { currentUser: null };
    }

    componentDidMount() {
        const {currentUser} = firebase.auth();
        this.setState({currentUser});
    }

    signOut() {
        firebase.auth().signOut()
            .then(() => this.props.navigation.navigate('Loading'))
            .catch(error => this.setState({ errorMessage: error.message }));
    }

    render() {
        const { currentUser } = this.state;
        return (
            <View style={styles.container}>
                <Text>
                    Hi {currentUser && currentUser.email}!
                </Text>
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="white"
                    onPress={() => this.signOut()}>
                    <Text style={styles.buttonText}>SignOut</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'blue',
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    }
});
