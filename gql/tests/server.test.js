const { createTestClient } = require('apollo-server-testing');
const { ApolloServer, gql} = require("apollo-server")
require("dotenv").config()
const mongoose = require('mongoose');
const typeDefs = require("../src/typedefs")
const resolvers = require("../src/resolvers")
const Mongo = process.env.MONGO || require("../env").mongodb


test('gql shit help me', async () => {
	const server = new ApolloServer({ typeDefs, resolvers });

	await mongoose.connect(Mongo, {useNewUrlParser: true, useUnifiedTopology: true})
	
	const app = createTestClient(server);
	
	const catIdRes = await app.query({query: gql`query getcat {
		catId(id: 1) {
			_id
			x
			y
			url
			webpurl
		}
	}
	`});

	const catsRes = await app.query({query: gql`query getcat {
		cats{
			_id
			x
			y
			url
			webpurl
		}
	}
	`});

	const catRes = await app.query({query: gql`query getcat {
		cat{
			_id
			x
			y
			url
			webpurl
		}
	}
	`});

	expect(catIdRes.data.catId).toEqual({ "_id": 1, "x": 45.41, "y": 66.32, "url": "https://i.thatcopy.pw/cat/XwHHC9j.jpg", "webpurl": "https://i.thatcopy.pw/cat-webp/XwHHC9j.webp" });

	expect(catsRes.data.cats.length).toBeTruthy();

	expect(catRes.data.cat).toBeTruthy();
});
