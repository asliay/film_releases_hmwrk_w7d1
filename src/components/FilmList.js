import Film from "./Film"

const FilmList = ({films}) => {
    
    const filmNodes = films.map((film) => {
        return (
            <Film title={film.title}
                  release={film.release}
                  url={film.url}
                  key={film.id}/>
        )
    });

    return (
        <>
            <h1>Upcoming Film Releases</h1>
            <hr/>
                <ul i="film-list">
                    {filmNodes}
                </ul>
            <hr/>
            <h3><a href="https://www.imdb.com/calendar/?region=gb">More Upcoming Releases</a></h3>
        </>
    )
}

export default FilmList;