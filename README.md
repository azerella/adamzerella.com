# adamzerella.com

[![CircleCI](https://circleci.com/gh/adamzerella/adamzerella.svg?style=svg)](https://circleci.com/gh/adamzerella/adamzerella)
[![GitHub stars](https://img.shields.io/github/stars/adamzerella/adamzerella.svg)](https://github.com/adamzerella/adamzerella/stargazers)
[![GitHub license](https://img.shields.io/github/license/adamzerella/adamzerella.svg)](https://github.com/adamzerella/adamzerella/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/adamzerella/adamzerella.svg)](https://github.com/adamzerella/adamzerella/issues)

> Source code for the static website of [adamzerella.com](https://adamzerella.com)

# Prerequisites

This project requires for you to have [NodeJS LTS](https://nodejs.org/en/) installed, which at the time of writing is `v8.11.3`. Additionally, this project preferences [Yarn](https://yarnpkg.com/lang/en/) over NPM.

# Installation

```node
# Yarn
yarn install
```

# Develop

Will launch a local development server with hot reloading:

```node
# Yarn
yarn dev
```

# Build

Generate the static bundle under `build/`

```node
# Yarn
yarn build
```

# Deployment

This project is automatically deployed to a [Bitnami Apache](https://docs.bitnami.com/virtual-machine/components/apache/) container hosted on [AWS Lightsail](https://aws.amazon.com/lightsail/). The automatic deployment (CI) is done with `CircleCi` watching the master branch.

# License

This project is licensed under the MIT License - see the [LICENSE](https://raw.githubusercontent.com/adamzerella/adamzerella/master/LICENSE) file for details.

# Contributors

<div style="display:inline;">
  <img width="64" height="64" href="https://github.com/adamzerella" src="https://avatars0.githubusercontent.com/u/1501560?s=460&v=4" alt="Adam A. Zerella"/>
</div>
