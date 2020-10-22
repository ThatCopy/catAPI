const Cat = require("./models/Cat")
async function getCat(){
    let res = await Cat.countDocuments()
    let random = Math.floor(Math.random() * res)
    return random
}
module.exports = resolvers = {
    Query: {
        hello: () => "Hi",
        cats: () => Cat.find(),
        cat: async () => Cat.findById(await getCat()),
        catId: async (parent, args, context, info) => {
            console.log(args.id)
            console.log(await Cat.findById(1))
            return await Cat.findById(1)
        }
    }
}

