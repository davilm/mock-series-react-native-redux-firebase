import React from 'react';
import { 
    StyleSheet,
    View,
    TextInput,
    Text,
    Button,
    ActivityIndicator,
    Alert,
} from 'react-native';

import firebase from '@firebase/app';
import '@firebase/auth';

import { connect } from 'react-redux';

import { tryLogin } from '../actions';

import FormRow from '../components/FormRow';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mail: '',
            password: '',
            isLoading: false,
            message: '',
        }
    }
    
    componentDidMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyBiton8U8F6LkTGCuEK57oBj6cVxGzJy6U",
            authDomain: "series-d26d4.firebaseapp.com",
            databaseURL: "https://series-d26d4.firebaseio.com",
            projectId: "series-d26d4",
            storageBucket: "series-d26d4.appspot.com",
            messagingSenderId: "636393721890",
            appId: "1:636393721890:web:d29fd75e947337c977ba7b"
          };

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig)
        }
    }

    onChangeHandler(field, value) {
        this.setState({
            [field]:value
        });
    }

    tryLogin() {
		this.setState({ isLoading: true, message: '' });
		const { mail: email, password } = this.state;

		this.props.tryLogin({ email, password })
			.then(user => {
				if (user)
					return this.props.navigation.replace('Main');

				this.setState({
					isLoading: false,
					message: ''
				});
			})
			.catch(error => {
				this.setState({
					isLoading: false,
					message: this.getMessageByErrorCode(error.code)
				});
			});
	}

    getMEssageByErrorCode(errorCode) {
        switch (errorCode) {
            case 'auth/wrong-password':
                return 'Senha incorreta';
            case 'auth/user-not-found':
                return 'Usuário não encontrado';
            default:
                return 'Erro desconhecido';
        }
    }

    renderMessage() {
        const { message } = this.state;
        if (!message)
            return null;
        return (
            <View>
                <Text>{message}</Text>
            </View>
        )
    }
    renderButton() {
        if (this.state.isLoading)
            return <ActivityIndicator />
        return (
            <Button
                title="Entrar"
                onPress={() => this.tryLogin() }
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FormRow first>
                    <TextInput 
                        style={styles.input}
                        placeholder="user@mail.com"
                        value={this.state.mail}
                        onChangeText={value => this.onChangeHandler('mail', value)}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </FormRow>
                <FormRow last>
                    <TextInput 
                        style={styles.input}
                        placeholder="******"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={value =>this.onChangeHandler('password', value)}
                    />
                </FormRow>
                { this.renderButton() }
                { this.renderMessage() }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10
    },
    input: {
        //paddingLeft: 5,
        //paddingRight: 5,
        //paddingBottom: 10,
    },
});

export default connect(null,  { tryLogin })(LoginPage);