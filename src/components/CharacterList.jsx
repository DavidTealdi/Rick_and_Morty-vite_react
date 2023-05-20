import { useEffect, useState } from "react"
import Character from "./Character"

function NavPage( { page, setPage } ) {
    return (
        <header className="d-flex justify-content-between align-items-center">
            
            <button className="btn btn-primary btn-sm" onClick={() => setPage(page - 1)} >
                
                volver Pagina 
            
            </button>
            
            <p>Pagina: {page}</p>
            
            <button className="btn btn-primary btn-sm" onClick={() => setPage(page + 1)} >
                
                Pagina siguiente 
            
            </button>
        
        </header>
    )
}

function CharacterLinst() {

    const [characters, setCharacter] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)

    useEffect(() => {

        async function fetchData() {
        const respose = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        
        const data = await respose.json()

        setLoading(false)

        setCharacter(data.results)
        }

        fetchData()
        
    }, [page])


    return (
        <div className="container">

            <NavPage page={page} setPage={setPage}/>

            {
                loading ? (
                    <h1>Loadig...</h1> 
                ) : (
                    <div className="row">
                        {
                            characters.map(element => {
                                return (
                                    <div className="col-md-4" key={element.id}>
                                        <Character character={element} />
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }

            <NavPage page={page} setPage={setPage}/>
        </div>
    )
}

export default CharacterLinst