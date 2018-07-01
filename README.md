# adamzerella.com

[![CircleCI](https://circleci.com/gh/adamzerella/adamzerella.svg?style=svg)](https://circleci.com/gh/adamzerella/adamzerella)
[![GitHub stars](https://img.shields.io/github/stars/adamzerella/adamzerella.svg)](https://github.com/adamzerella/adamzerella/stargazers)
[![GitHub license](https://img.shields.io/github/license/adamzerella/adamzerella.svg)](https://github.com/adamzerella/adamzerella/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/adamzerella/adamzerella.svg)](https://github.com/adamzerella/adamzerella/issues)

> Source code for the static website of [adamzerella.com](https://adamzerella.com)

### Install

```node
# NPM
npm install

# Yarn
yarn install
```

### Develop

Will launch a local development server with hot reloading:

```node
# NPM
npm dev

# Yarn
yarn dev
```

### Build

Generate the static bundle under `./build`

```node
# NPM
npm build

# Yarn
yarn build
```

### Deployment
This project is automatically deployed to a [Bitnami Apache](https://docs.bitnami.com/virtual-machine/components/apache/) container hosted on [AWS Lightsail](https://aws.amazon.com/lightsail/). The automatic deployment (CI) is done with `CircleCi` watching the master branch.

## License

This project is licensed under the MIT License - see the [LICENSE](https://raw.githubusercontent.com/adamzerella/adamzerella/master/LICENSE) file for details.
