# x_team_quantum_js

Really simple Angular 5 demonstration.

I last worked with Angular 2 when it was in ALPHA... oh yeah.

Angular 5 demonstrates a much more mature evolution of the framework.

This was put together in an evening on and off without my having really looked at Angular at all since Angular 2... so many pre-emptive apologies and take this example for what it's worth :)

# Getting Set Up

Angular 5 now inludes a snazzy CLI that helps do a lot (including running a test or dev server).

To use this example :

```bash
    $ npm i
    $ npm run build
    $ npm run start
```

Sometimes the hot re-loading will get "snagged" just `taskill` or terminate the Node instance and use the commands above to inject the fresh code!

# Configuration

`./.angular-cli.json` configures Angular-CLI.

`./tsconfig.json` configures Typescript globally - `./src/tsconfig.app.json` for a specific application.

`./polyfills.ts` provides backwards compatibility via shim for browsers to use newer JavaScript and Styling technologies.

`./src/typings.d.ts` is a Typescript definition configuration file. Basically, in this specific instance, to include a third-party module, you must also include type definitions for that module to be used. That includes using NodeJS modules (which require configuration to ensure interoperability with Typescript).

`Test` and `Production` specific configuration is available in `./src/environments/..`.

The entry-point for app compilation is `./src/entry.ts`.

# Angular 5 Basics

`Modules` contain one or more components (similar to the original Angular 1 modular architecture). `Components` live in `modules`.

Apps are bootstrapped and are done so in the main `entry` file.

Services are annotated with the `@Injectable()` decorator. They are now injected into the constructor of their relavent component:

```
    constructor(private http:HttpClient) {  }
```

Make sure to not infringe on existing default namespaces! Use `CustomTableComponent` with selector `custom-table` as opposed to `TableComponent` and `table`.

See also: https://github.com/angular/angular/issues/20101

`Routes` are linked to their relevant `components`.

# Terminology

Remember that `polyfills` are `shims` whose specific purpose is to provide modern technology in a backwards compatible way for a browser (whereas a `shim` is any layer of abstraction providing for some functionality in a required way).

# Testing

The Angular 5 CLI abstracts a lot of the testing and development:

```bash
    $ npm run e2e
    $ npm run test
    $ npm run lint
```

These execute end to end testig using Proctractor, unit testing via Karma (or whatever framework you supply), and linting. 

# Shout Outs

https://github.com/AcademiaBinaria/angular5

https://github.com/kdechant/angular5-httpclient-demo

For Http Facade:

https://github.com/kdechant/angular5-httpclient-demo/blob/master/src/app/demo.service.ts
