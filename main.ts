import { Notice, Plugin } from 'obsidian';

// Remember to rename these classes and interfaces!

export default class UserInputPlugin extends Plugin {
	async onload() {
		
		this.addRibbonIcon("smile", "my new smile ribssbon example",() => {
			new Notice("smile ribbon example");
		})

		this.addCommand({
			id:"adding love emoji",
			name: "add love emojis",
			editorCallback: (editor, view) => {
				const newVal = editor.getValue().replace(/good/gm, (match) => match + "💓")
				editor.setValue(newVal);
			}

		});

	}
}