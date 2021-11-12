import React, { Component } from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			input: '',
			cons: 0,
			vow: 0,
			char: 0,
		};
	}

	analyzeWord = () => {
		let input = this.state.input;
		let cons = 0;
		let vow = 0;
		let char = 0;

		char = input.length;

		for (let i = 0; i <= input.length; i++) {
			if (input.charAt(i).match(/[aeiouAEIOU]/)) {
				vow++;
			} else if (
				input
					.charAt(i)
					.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)
			) {
				cons++;
			}
			this.setState({ char: char, vow: vow, cons: cons });
		}
	};

	render() {
		return (
			<View style={Styles.containers}>
			<View style={Styles.container}>
				<Text style={Styles.welcome}>A Word Analyzer</Text>
				<TextInput
					onChangeText={(input) => this.setState({ input })}
					style={Styles.buttons}
					placeholder='Input'
				/>
				<Button
					onPress={this.analyzeWord}
					title='Analyze!'
				/>
				<Text style={Styles.instructions}>
					Words : {this.state.input}
				</Text>
				<Text style={Styles.instructions}>
					No. of Consonants : {this.state.cons}
				</Text>
				<Text style={Styles.instructions}>
					No. of Vowels : {this.state.vow}
				</Text>
				<Text style={Styles.instructions}>
					No. of Characters : {this.state.char}
				</Text>
			</View>
			</View>
		);
	}
}

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#FFFFFF',
	},
	containers: {
		flex: 1,
		border: '2px solid #000',
		justifyContent: 'center',
		alignItems: 'center',
	},
	welcome: {
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center',
		margin: 5,
	},
	instructions: {
		textAlign: 'left',
		marginBottom: 5,
	},
	buttons: {
		border: '1px solid #000',
		backgroundColor: '#fff',
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
		padding: 5,
	},
});
