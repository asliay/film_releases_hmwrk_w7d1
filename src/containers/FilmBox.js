import {useState} from "react"
import FilmList from "../components/FilmList"

const FilmBox = () => {
   
    const initialState = [
        {
            id: 1,
            title: "Wonder Woman 1984",
            release: "Dec 2020",
            url: "https://www.imdb.com/title/tt7126948/?ref_=nv_sr_srsg_0"
        },
        {
            id: 2,
            title: "Black Widow",
            release: "May 2021",
            url: "https://www.imdb.com/title/tt1321510/?ref_=rlm" 
        },
        {
            id: 3,
            title: "In The Heights",
            release: "July 2021",
            url: "https://www.imdb.com/title/tt1321510/?ref_=rlm" 
        },
    ];

    const [films, setFilms] = useState(initialState);
        return (
            <>
                <FilmList films={films} />
            </>
        );
}

export default FilmBox;