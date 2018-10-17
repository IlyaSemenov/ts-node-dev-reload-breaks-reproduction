This is a reproduction repository for <https://github.com/whitecolor/ts-node-dev/issues/37>.

# How to use

```
npm i -g yarn
yarn
yarn test
```

Wait for the compilation to finish, then change `test.ts` and you will only see:

```
[INFO] 14:13:47 Restarting: /Users/semenov/tmp/ts-node-dev-reload-breaks-reproduction/test.ts has been modified
```

but the script will not really restart.

Auto restarting on change will only work if you comment `builder.build()`. Once you uncomment it, the script will stop restarting.
