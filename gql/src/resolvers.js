const Cat = require("./models/Cat")
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
    }
}

