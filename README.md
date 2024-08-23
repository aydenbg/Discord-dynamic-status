

```markdown
# Discord Profile Website

Welcome to the **Discord Profile Website** project! This website dynamically displays your Discord profile status, activity, and rich presence details in a visually appealing format. The site also features a customizable starry background and social media links.

## Features

- **Live Discord Status**: Displays your current online status, activity, and rich presence details from your Discord profile.
- **Dynamic Starry Background**: A calming, animated starry sky that adds visual flair to your profile page.
- **Social Media Links**: Easily accessible social media icons with links to your profiles on Twitter, GitHub, Discord, and Email.
- **Responsive Design**: The website is designed to look great on any device, from desktop to mobile.

## Setup and Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)

### Clone the Repository

Start by cloning the repository from GitHub:

```bash
git clone https://github.com/your-username/discord-profile-website.git
cd discord-profile-website
```

### Install Dependencies

Navigate to the project directory and install the required dependencies:

```bash
npm install
```

### Configuration

1. **Create a `.env` file** in the root directory of the project and add your Discord Bot Token:

   ```env
   DISCORD_TOKEN=your-discord-bot-token-here
   ```

2. **Edit `src/config/config.js`** to set your Discord user ID, server ID, and social media links:

   ```javascript
   module.exports = {
       userId: 'your-discord-user-id',
       guildId: 'your-discord-server-id',
       socialLinks: {
           twitter: {
               url: 'https://twitter.com/yourprofile',
               visible: true
           },
           github: {
               url: 'https://github.com/yourprofile',
               visible: true
           },
           discord: {
               url: 'https://discord.com/users/youruserid',
               visible: true
           },
           email: {
               url: 'mailto:youremail@example.com',
               visible: true
           }
       }
   };
   ```

### Running the Project

To start the project, use the following command:

```bash
npm start
```

This will start both the Discord bot and the local server. You can view your Discord profile website by navigating to `http://localhost:3000` in your web browser.

### Deploying to GitHub Pages

1. **Build the Project**:

   ```bash
   npm run build
   ```

2. **Push to GitHub**:

   Ensure that your `build` folder is included in your repository, then push the changes to GitHub.

3. **Enable GitHub Pages**:

   Go to the repository's settings on GitHub and enable GitHub Pages, selecting the `gh-pages` branch as the source.

Your website will now be live on GitHub Pages!

## Usage

Once your website is up and running, it will automatically update your Discord status and activity. Customize the social media links and the starry background to make the page truly yours!

## Credits

This project was created by **aydenerrm** with assistance from **ChatGPT** by OpenAI.

The following were used:

- **Font Awesome** for the icons.
- **Discord.js** for providing the tools to interact with Discord.


---

Thank you for using the Discord Profile Website! If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.
```
