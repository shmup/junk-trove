## IRSSI / TWITCH

**Here's a method to chat in a twitch #channel with IRSSI**

Get your oauth token here: https://twitchapps.com/tmi/

**Server block**
```
server = {
    address = "irc.chat.twitch.tv";
    chatnet = "twitch";
    port = "6697";
    password = "oauth:changeme";
    use_ssl = "yes";
    ssl_verify = "yes";
    autoconnect = "no";
}
```

**Chatnet block**
```
chatnets = {
  twitch = {
    type = "IRC";
    nick = "your_twitch_username";
  };
}
```

I like to `/connect twitch` and `/disconnect twitch` as necessary.

Alternatively, just set `autoconnect = "yes"`.

Anyway, now you can `/j #twitch_channel_name`
