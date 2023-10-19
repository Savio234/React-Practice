    const nums = [1, 2, 3, 4, 5, 6]
    const squared = nums.map(num => {
        return (
            num * num
        )
    })
    console.log('Square of the numbers = ', squared)
    const names = ['alice', 'ronke', 'grace', 'bob', 'bernard']
    const capitalize = names.map(name => {
        return (
            name[0].toUpperCase() + name.slice(1)
        )
    })
    console.log('Capitalized form of names are = ', capitalize)

    const pokemon = ['Barbossa', 'Jack Sparrow', 'Calypso']
    const htmlTags = pokemon.map(poke => {
        return (
            `<p>${poke}</p>`
        )
    })
    console.log('Tags', htmlTags)
    
// eslint-disable-next-line
export default  [
    {
        id: 1,
        Setup: "I got my daughter a fridge for her birthday",
        Punchline: "I can't wait too see her face lit up when she opens it",
        bg: "blue",
        upVotes: 35,
        downVotes: 1
    },
    {
        id: 2,
        Setup: "How did the hacker escape the police?",
        Punchline: "He just ransomware",
        bg: "#4EC264",
        upVotes: 20,
        downVotes: 5
    },
    {
        id: 3,
        Setup: "Why don't pirates travel on mountain roads?",
        Punchline: "Scurvy",
        bg: "purple",
        upVotes: 8,
        downVotes: 4
    },
    {
        id: 4,
        Setup: "Why do bees stay in the hive in winter?",
        Punchline: "Swarm",
        bg: "indigo",
        upVotes: 9,
        downVotes: 5
    },
    {
        id: 5,
        Setup: "What's the best thing about Switzerland",
        Punchline: "I don't know but the flag is a big plus.",
        bg: "#06060B",
        upVotes: 15,
        downVotes: 5
    },
    {
        id: 6,
        Setup: "How weak could he possibly be?",
        Punchline: "",
        bg: "#EA445A",
        upVotes: 5,
        downVotes: 10
    },
    {
        id: 7,
        Setup: "",
        Punchline: "Its hard to explainthings to kleptomaniacs because they take things seriously",
        bg: "orange",
        upVotes: 4,
        downVotes: 14
    }
]