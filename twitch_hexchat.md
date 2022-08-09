## HEXCHAT / TWITCH

**Here's a method to chat in a twitch #channel with HexChat**

1. Get HexChat here (or your package manager): https://hexchat.github.io/

3. Click `Add` and name it Twitch or whatever.

4. Now click `Edit` and change the server/port up top to: `irc.chat.twitch.tv/6697`

5. Check `Use SSL for all the servers on this network`.

6. Uncheck `Use global user information` (you'll be using your twitch nick).

7. Change the `Login Method` to `Server password (/PASS password)`.

8. In `Password` paste in the token generated here: https://twitchapps.com/tmi/

_Additionally I'd uncheck `Connect to this network automatically`._

_You only need to set the `Nick name` which needs to be your Twitch nick._

9. Click `Close` then `Connect` and in the window that opens, you can type `/join #twitch_channel_name_here`.

    **If this is your first time running**, an extra window will pop up asking you if you want to join a channel. I like to tell this to never open and use the `/join` method (seen in 2nd image below).

![image](https://user-images.githubusercontent.com/118710/183577538-184d2ec7-0238-49f8-8de3-67b43b9227c4.png)

![image](https://user-images.githubusercontent.com/118710/183581873-993dd8f5-73f2-4376-ae29-d5342a140946.png)

### Want a different theme?

Learn where to put them here:

 - https://hexchat.readthedocs.io/en/latest/settings.html#config-files

And download them here:

 - https://hexchat.readthedocs.io/en/latest/appearance.html#theme-files

### Wanna stream in your own video player?

Check out **[Streamlink Twitch Gui](https://streamlink.github.io/streamlink-twitch-gui/)** aka _"Browse Twitch.tv and watch streams in your video player of choice"_

Get the latest installer here: https://github.com/streamlink/streamlink-twitch-gui/releases/latest

Once installed, if you use VLC on your system you're fine. If you use something like [mpv](https://mpv.io/) you'll need to go to Settings > Player, and select it from the dropdown.

![image](https://user-images.githubusercontent.com/118710/183580760-c8f3d199-9778-4f22-bd4a-010d4a11bf7b.png)
