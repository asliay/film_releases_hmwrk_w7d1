const { default: FilmBox } = require("../containers/FilmBox")

const Film = ({title, release, url}) => {
    
    return (
        <>
            <li id="list-item">
                <a href={url}>
                    {title} ({release}) 
                </a>
            </li> 
        </>
    );
}

export default Film;