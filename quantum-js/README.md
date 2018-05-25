# x_team_quantum_js

Really simple Angular 5 demonstration along with the great:

# Getting Set Up

Angular 5 now includes a snazzy CLI that helps do a lot (including running a test or dev server).

To use this example :

```bash
    $ npm i
    $ npm run build
    $ npm run start
```

Sometimes the hot re-loading will get "snagged" just `taskill` or terminate the Node instance and use the commands above to inject the fresh code!

```bash
    $ npm run stop-win
    $ npm run stop-linux
```

# Configuration Overview

`./.angular-cli.json` configures Angular-CLI.

`./tsconfig.json` configures Typescript globally - `./src/tsconfig.app.json` for a specific application.

`./polyfills.ts` provides backwards compatibility via shim for browsers to use newer JavaScript and Styling technologies.

`./src/typings.d.ts` is a Typescript definition configuration file. Basically, in this specific instance, to include a third-party module, you must also include type definitions for that module to be used. That includes using NodeJS modules (which require configuration to ensure interoperability with Typescript).

`Test` and `Production` specific configuration is available in `./src/environments/..`.

The entry-point for app compilation is `./src/entry.ts`.

# Great Learning Resources

[AcademiaBinaria](https://github.com/AcademiaBinaria/angular5)

[kdechant's outstanding http facade demo](https://github.com/kdechant/angular5-httpclient-demo)
