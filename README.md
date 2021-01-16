# catAPI
catAPI is a RESTful and GraphQL API that will deliver photos with cats on demand.

https://catapi.thatcopy.pw/

## [Documentation](https://catapi.thatcopy.pw/docs.html)

## Node wrapper : https://www.npmjs.com/package/@thatcopy/catapi

#### To run catAPI:

`npm i`

Make a .env file in gql or rest, add your db like this

```env
DATABASE_URL="<your postgres uri>"
```

make a migration

`npx prisma migrate dev --name init --preview-feature`


and run it by

`npm run comp`

`npm run start`
