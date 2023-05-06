// diferença entre spreed e sem spreed na rota
// com spreed posso pegar o quem vem depois tbem e joga tudo dentro do ...nextauth
// ex:http://localhost:3000/api/auth/teste/test2/4
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"


export const authOptions = {
    providers:[
        GithubProvider({
            clientID: "",
            clientSecret: "",
        })
    ]
}

export default NextAuth(authOptions)