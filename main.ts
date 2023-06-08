import { Notice, Plugin, TFolder } from 'obsidian';
import { ExampleSettingTab } from 'settings';

// Remember to rename these classes and interfaces!

interface UserInoutPluginSettings {
  dailyNotesPath: string;
}

const DEFAULT_SETTINGS: Partial<UserInoutPluginSettings> = {
  dailyNotesPath: 'DailyNotes',
};

export default class UserInputPlugin extends Plugin {
  settings: UserInoutPluginSettings;

  async onload() {
    await this.loadSettings();
    this.addSettingTab(new ExampleSettingTab(this.app, this));
    
    this.addRibbonIcon('smile', 'my new smile ribssbon example', () => {
      new Notice('smile ribbon example');
    });

    this.addCommand({
      id: 'adding love emoji',
      name: 'add love emojis',
      editorCallback: (editor, view) => {
        const newVal = editor.getValue().replace(/good/gm, (match) => match + '💓');
        editor.setValue(newVal);
      },
    });

    this.addCommand({
      id: 'add-mising-daily-notes',
      name: 'add missing daily notes',
      callback: () => {
        new Notice("daily notes path is " + this.settings.dailyNotesPath);
      },
    });
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
      await this.saveData(this.settings);
  }
}
                      