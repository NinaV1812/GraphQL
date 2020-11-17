import {GraphQLServer } from "graphql-yoga"
const server = new GraphQLServer({
    typeDefs: `type Query {
        agent: User!
        agents: [User!]!
    }
        type User {
            id: ID!
        name: String!
        age: Int
        maried: Boolean
        average: Float
        }
    `,
    resolvers: {
        Query:{
            agent() {
                return{
            id: 1,
        
            name: "Nina",
            age: 24,
            maried: false,
            average: 5.0,
        }
    },
    agents() {
        return [
            {
                id: 1,
            
                name: "Nina",
                age: 24,
                maried: false,
                average: 5.0,
            },
            {
                id: 0,
            
                name: "Seteve",
                age: 34,
                maried: false,
                average: 5.0,
            },
            {
                id: 0,
            
                name: "Anna",
                age: 27,
                maried: false,
                average: 5.0,
            }

        ]
    }
        } 
    },
})

server.start(()=> {
    console.log("And running running")
})