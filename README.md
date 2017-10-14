# GitWar App
Web enabled application to view the github users and to compare the contribution of each
user among others.

# Requirements
  - Visual Studio Code or any IDE
  - Node

### Installation
##### Server
- Clone the repository https://github.com/sajeetharan/GitWar
- Navigate to GitWar Folder
```sh
 C:\GitWar\server>
```
 - Run npm install
```sh
 C:\GitWar\server>npm install
```
 - Run node server.js

##### Client App
 - Navigate to public Folder
```sh
 C:\GitWar\public>
```
 - Run npm install -g @angular/cli@latest
```sh
 C:\GitWar\public>npm install -g @angular/cli@latest
```
 - Run npm install
```sh
 C:\GitWar\public>npm install
```
 - Add access_token generated from git developer account inside GitWar/src/environments/environment.ts
```
export const environment = {
  production: false,
  apiUrl: 'e3fe83bbb20a95f4b17df7d431a161310813d701'
};

```
 - Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files
```sh
 C:\GitWar\public>ng serve
```
### Build

 - Run ng build to build the project. The build artifacts will be stored in the dist/ directory. Use the -prod flag for a production build.
```sh
 C:\GitWar\public>ng build
```
### Unit tests
 - Run ng test to execute the unit tests via Karma.
```sh
 C:\GitWar\public>ng test
```
  - Test coverage results
Run ng test --single-run --code-coverage and see the generated coverage results under AccountsPortalApp /coverage/index.html
```sh
 C:\GitWar\public>ng test --single-run --code-coverage
```

### e2e tests
 - Run ng e2e  to execute the end to end testing using protractor
```sh
 C:\GitWar\public>ng e2e
```

## Usage
 

## Features
(i)  User can view his profile information by typing github username
(ii)


### Todos
 - Write MORE Tests

License
----

MIT

**Free Software, Hell Yeah!**
 
