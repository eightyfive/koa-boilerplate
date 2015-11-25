# koa-boilerplate
My (very opiniated) Koa boilerplate:

- [kontainer-di](https://github.com/redradix/kontainer) (Dependency Injection),
- [Bookshelf](https://github.com/tgriesser/bookshelf),
- [passport](https://github.com/jaredhanson/passport),
- [Gulp](https://github.com/gulpjs/gulp),
- [PM2](https://github.com/Unitech/pm2) [deploy](http://pm2.keymetrics.io/docs/usage/deployment/)

## Install

This will only download the latest files (without repo).
```
$ git clone --depth=1 git@github.com:eightyfive/koa-boilerplate.git my-new-app && rm -rf my-new-app/.git
```

## Dependency Injection

Everything is organized around the concept of Dependency Injection with the help of [kontainer-di-lazy](https://github.com/eightyfive/kontainer-di-lazy):

```js
  // shared/config/prod.json
  "di": {
    "aliases": {
      "bookshelf": "shared/services/bookshelf",
      "models": "shared/services/models",
      "swig": "shared/services/swig",
      "base.model": "shared/models/base-model",
      "user.model": "@auth/user-model"
    },
    "namespaces": {
      "auth": "shared/components/auth"
    }
  }

  // frontend/config/prod.json (merged)
  "di": {
    "namespaces": {
      "controllers": "frontend/controllers",
      "services": "frontend/services"
    }
  }
```

## Folder structure

Two distinct apps live in this boilerplate. The reason is I always find myself in the need to write some backend (even small) that goes hand in hand with my frontend.

So the folder structure goes like this:

```
backend/
  config/
  controllers/
  services/
  app.js
  server.js
frontend/
  config/
  controllers/
  services/
  app.js
  server.js
shared/
  components/
  config/
  models/
  services/
  _app.js
```

### `components` folder

This is where live self-contained so-called components. An example of that is the `auth` component shipped with this boilerplate (active in the `backend` app).

## Dev
Two distinct gulp tasks will start related app (with `nodemon`) and watch all `**/*.js` files

- `gulp front`
- `gulp back`
