const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const TOKEN = process.env['TOKEN']
const CLIENT_ID = process.env['CLIENT_ID']
const GUILD_ID = process.env['GUILD_ID']

const commands = [{
  name: 'ping',
  description: 'Replies with Pong!'
},{
  name: 'deez',
  description: 'Replies with NUTZ!'
}]; 

const rest = new REST({ version: '9' }).setToken(TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();