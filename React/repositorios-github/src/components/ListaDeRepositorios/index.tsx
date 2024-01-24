import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ListaDeRepositorios(){
    const [repositorios, setRepositorios] = useState<any>([]);

    useEffect(() => {
        async function carregaRepositorios (){
            const resposta = await fetch("https://api.github.com/users/dudxp/repos");
            const repositorios = await resposta.json()
            if (repositorios) {
                setRepositorios(repositorios);
            }}
            carregaRepositorios()
    }, [])

    repositorios.map( (repositorio: any) => {
        console.log(repositorio.name)
    }) 

    return (
        <ul>
            {
                repositorios.map( (repositorio: any) => 
                {
                    const uniqueId = uuidv4();
                    if (repositorio !== undefined){
                        return (
                            <li key={uniqueId}>
                                {repositorio.name}
                            </li>
                        );
                    }
                    else 
                    {
                        return null
                    }
                }) 
            }
        </ul>
    )
}

export default ListaDeRepositorios;