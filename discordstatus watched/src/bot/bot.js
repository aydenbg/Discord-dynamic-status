const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();
const { userId, guildId } = require('../config/config');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMembers
    ]
});

let userStatus = 'offline';
let userActivity = 'None';
let avatarUrl = '';
let richPresenceDetails = 'None';

client.once('ready', async () => {
    try {
        const guild = await client.guilds.fetch(guildId);
        const member = await guild.members.fetch(userId);

        if (member.presence) {
            userStatus = member.presence.status || 'offline';
            avatarUrl = member.user.displayAvatarURL({ format: 'png', dynamic: true });

            if (member.presence.activities.length > 0) {
                const activity = member.presence.activities[0];

                userActivity = activity.name || 'None';
                richPresenceDetails = activity.details || 'No additional details';

                if (activity.state) {
                    richPresenceDetails += ` - ${activity.state}`;
                }

                if (activity.timestamps) {
                    const startTime = activity.timestamps.start ? new Date(activity.timestamps.start).toLocaleTimeString() : null;
                    const endTime = activity.timestamps.end ? new Date(activity.timestamps.end).toLocaleTimeString() : null;
                    richPresenceDetails += ` - ${startTime ? `Started at ${startTime}` : ''}${endTime ? `, Ends at ${endTime}` : ''}`;
                }

                if (activity.assets) {
                    console.log('Rich Presence Assets:', activity.assets);
                }
            }
        } else {
            console.log('Presence data not available.');
        }
    } catch (error) {
        console.error('Error fetching user presence:', error);
    }
});

client.login(process.env.DISCORD_TOKEN);

function getUserStatus() {
    return { 
        status: userStatus, 
        activity: userActivity, 
        avatarUrl: avatarUrl,
        richPresenceDetails: richPresenceDetails
    };
}

module.exports = { getUserStatus };
