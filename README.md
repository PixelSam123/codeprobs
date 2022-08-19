# codeprobs

Coding problems collection

## Folder structure

```
.
└── {problem name}/
    └── {language name}/
        ├── src/
        │   ├── answer.js
        │   └── {other files}
        ├── test/
        │   ├── test.js
        │   └── {other files}
        ├── .codeprob_info.json
        ├── README.md
        ├── package.json
        └── {other files}
```

Files for each problem:

- `package.json` contains scripts for local testing, for example with `npm run test`
- `README.md` contains problem details and submission instructions
- `.codeprob_info.json` contains metadata for problem submission required by codeprobs_cli

## EXTREME CAUTION

Right below this you will see instructions to sign up. Please DO NOT USE A REAL PASSWORD for now.  
The server currently does not have security guarantees, YOU HAVE BEEN WARNED.

## Submission user details

### Using the CLI

The problem submission instructions will ask you to submit using a username and a password.

To sign up, run the command `codeprobs_cli user post <username> <password>`  
where `<username>` and `<password>` are as you desire. Please read the [EXTREME CAUTION](#extreme-caution) section if you haven't.

For more details on the CLI, such as fetching submitted answers and the user leaderboard,  
visit the [codeprobs_cli](https://github.com/PixelSam123/codeprobs_cli) repository.
