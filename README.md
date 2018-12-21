# STOP BIKESHEDDING. GET WORKING.

## Getting Started

Tired of JS? Tired of dependency hell? Want to whip up something very quickly without having to mess around? Stop bikeshedding.

```
git clone https://github.com/gtklocker/boilerplate-js your-project-name/
cd your-project-name/
npm i
```

Edit `package.json` with your own name/urls and start working right away. You may want to remove the `.git/`, and even this `README.md`. Don't feel guilty, go ahead.

## Features

- **Testing**: We use [bmocha](https://github.com/bcoin-org/bmocha/), a lightweight implementation of mocha. It has no dependencies and it's fast.
- **Ready to Publish**: You probably only want to publish the code that lives in `lib/`. We've taken care of that for you. No one downloading your NPM package needs to see your cat gifs and videos or test fixtures.

## Structure

Stop bikeshedding. Get going by following these conventions I just made up. Some people use them, but you shouldn't care. Don't be afraid to stand out.

- `lib/**.js` for pure JS code
- `test/*-test.js` for tests
- `bin/*` for executable JS

## Type checking

I love Haskell. I love type safety. I sometimes use TypeScript or Flow. Want to use either? Think twice. Fork this and make it your own for all I care. But you probably shouldn't. If you really need type safety go write the thing in Haskell.

## Contributing

I don't know why you'd want to but sure, if that's your jam, make a PR. We'll have fun.

## Acknowledgments

* [Thanks `jest` for giving me gray hair](https://github.com/facebook/jest/issues/2441).
* [Thanks TypeScript for doing all you could but still giving me gray hair](https://github.com/NagRock/ts-mockito/issues/112).
* Thanks to all my colleagues who've spent countless hours putting up with me complaining about all software being broken.
