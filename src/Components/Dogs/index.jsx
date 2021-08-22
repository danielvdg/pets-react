import React,{useEffect, useState} from 'react'
import * as S from './style'
const Dogs = () => {

    const [dadosApi,SetDadosApi] = useState([])
    const [apiChegou,setApiChegou] = useState(false)

    useEffect(()=>{
        fetch('https://salty-harbor-83280.herokuapp.com/pets/dogs')
        .then((resposta)=> resposta.json())
        .then((dados)=> {SetDadosApi(dados.results)
        setApiChegou(true)}
        )
        
        console.log(dadosApi);
    },[])
    
    console.log(dadosApi);
    return (
        <S.Container>
            {!!dadosApi && apiChegou ? (
                dadosApi.map((item)=>{
                    console.log(item.nome);
                })
            ) : (<p>Carregando</p>)}
        </S.Container>
    )
}

export default Dogs;
