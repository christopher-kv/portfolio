import { Intro, JokeStyled, Response } from "../styles/Joke.styled"
import useAxiosGet from "../hooks/useAxiosGet"

export const NewJoke = () => {
    const res = useAxiosGet("https://v2.jokeapi.dev/Any")
    const data = {...res}   
    return (
        data
    )
}

export const Jokes = () =>{
    return(
        <JokeStyled>
            <Intro >
               
            </Intro>
            <Response>

            </Response>
        </JokeStyled>
    )
}