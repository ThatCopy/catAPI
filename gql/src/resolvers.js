const Cat = require("./models/Cat")
const { get } = require("mongoose")
async function getCat(){
    let res = await Cat.countDocuments()
    let random = Math.floor(Math.random() * res)
    return random
}
module.exports = resolvers = {
    Query: {
        hello: () => "Ahoj",
        cats: () => Cat.find(),
        cat: async () => Cat.findById(await getCat())
    },
    Mutation: {
        createCat: async (_, { _id, url, webpurl }) => {
          const cat = new Cat({ _id: _id, url: url, webpurl: webpurl })
          await cat.save()
          return cat
        }
    }
}

