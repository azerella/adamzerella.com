# adamzerella
[![Build Status](https://travis-ci.org/adamzerella/adamzerella.svg?branch=master)](https://travis-ci.org/adamzerella/adamzerella)

> My personal website

### Install
```js
npm install
```

### Develop
```js
npm run dev
```

### Test
```js
npm test
```

### Build
Ensure "NODE_ENV" is set to production.
```shell
export NODE_ENV="production"
```

```js
npm run build
```

Minified code is then located under `../htdocs` from the project root.

### Deployment
This project is deployed to a [Bitnami Apache](https://docs.bitnami.com/virtual-machine/components/apache/) container hosted on [AWS Lightsail](https://aws.amazon.com/lightsail/)

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/adamzerella/adamzerella/blob/master/LICENSE.md) file for details.
