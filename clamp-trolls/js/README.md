# clamp-trolls

## Problem details

Streamers are becoming really angry! They keep getting donation messages with repeated symbols like this:

```
@@@@@@@@@@@@@@@@@@@ :):):):):):):)
```

The text-to-speech engines will read them out like 'at symbol at symbol at symbol at symbol..., smiley face smiley face'... you get the point.
Your task is to create a function that will clamp down the trolls. It should handle:

1. Obvious examples using symbols

```
clampTrolls('@@@@@@@@@@@@@@@@@@@ :):):):):):):)', 4) // '@@@@ :):):):)'
clampTrolls(':):):):):)', 2) // ':):)'
clampTrolls('In-between normal @@@@@@@@@@ text', 3) // 'In-between normal @@@ text'
```

2. Manual repetition of substrings

```
clampTrolls('your smiley face smiley face smiley face smiley face', 2) // 'your smiley face smiley face'
```

Please help them before they throw their phones in rage!

## Submission instructions

### Using the CLI

Run the command `codeprobs_cli answer post src/answer.js <username> <password>`.  
Details about your username and password can be read from the root README of this repo.
