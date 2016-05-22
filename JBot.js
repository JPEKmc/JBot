/**
 * Created by JPEK on 5/22/16.
 */
var _Version = (0.1);
var Discord = require (discord.js);
var bot = new Discord.Client();
bot.on("message", function(message) {
if(message.contect === "/hello")
    {
        bot.reply(message, "Hi there! My name is JBot; I'm a Discord Bot written by JPEK_!")

    }
});
bot.setPlayingGame("JBot " + _Version);
bot.loginWithToken("wtokenHere");
