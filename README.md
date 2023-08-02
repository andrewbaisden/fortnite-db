# Fortnite db

A Fortnite database app for checking weapons from the game.

![Fortnite DB App](/img/fortnite-db.png 'Fortnite DB App')

## Install and Setup

Clone this repo to your local machine and `cd` into the root directory for the `client` and `server` folders. Then run the command `npm install` to install the package dependencies.

## Running the App

There are two servers one for the backend server and one for the client frontend.

To start the backend run the command `npm run start` in the server folder.

To start the frontend run the command `npm run dev` in the client folder.

The GraphQL API server is running on port 8080 [http://localhost:8080/graphql](http://localhost:8080/graphql)

Here is a sample GraphQL query.

```graphql
{
  inventorys {
    id
    name
    type
    weaponType
    itemRarity
    img
    information {
      damage
      critialHitChance
      critialHitDamage
      fireRate
      magazineSize
      range
      durabilty
      reloadTime
      ammoCost
      impact
    }
  }
}
```

The Next.js App is running on port 3000 [http://localhost:3000/](http://localhost:3000/)

The deprecated folder has the old codebase the latest codebase uses Next.js + GraphQL.
