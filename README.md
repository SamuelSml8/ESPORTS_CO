<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

The Esports Tournament Management API aims to provide a comprehensive solution for managing and organizing esports tournaments in Colombia. The API will cater to various stakeholders, including tournament organizers, participants, and spectators, enabling seamless interaction and effective tournament administration.

## Features
Tournament Management:

- Create new tournaments (/tournament/create, POST)
- Update existing tournaments (/tournament/update/:id, PUT)
- Delete tournaments (/tournament/delete/:id, DELETE)
- Retrieve all tournaments (/tournament/all, GET)
- (Potentially) Add players to tournaments (/tournament/add-player/:playerId/:tournamentId, POST)

Player Management:

- (Potentially) Create players (/players/create, POST) - Inferred from controller name
- (Potentially) Update player information (/players/update/:id, PUT) - Inferred from controller name
- (Potentially) Retrieve all players (/players/all, GET) - Inferred from controller name
- (Potentially) Retrieve a specific player (/players/:id, GET) - Inferred from controller name


# Installation

## 1. Clone this repository
```bash
# HTTP
$ git clone https://github.com/Riwi-io-Medellin/Gamification-Auth.git

# SSH
$ git clone git@github.com:Riwi-io-Medellin/Gamification-Auth.git
```

## 2. Install dependencies
```bash
$ npm install
# or
$ npm i
```

## 4. Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Endpoints
Prefix: (Assuming no specific prefix based on the log)

Tournaments:
```bash
/create (POST): Creates a new tournament.
/update/:id (PUT): Updates an existing tournament by ID.
/delete/:id (DELETE): Deletes a tournament by ID.
/all (GET): Retrieves all tournaments.
/add-player/:playerId/:tournamentId (POST): (Potentially) Adds a player to a tournament.
```

Players: (Assuming these endpoints exist based on controller name)
```bash
/create (POST): (Potentially) Creates a new player.
/update/:id (PUT): (Potentially) Updates a player by ID.
/all (GET): (Potentially) Retrieves all players.
/id (GET): (Potentially) Retrieves a specific player by ID.
```
# Swagger
``` bash
http://localhost:{PORT}/api-doc
```

# Postman collection

[Auth Postman]()

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
