import React, { useEffect, useState } from "react";
import * as S from "./style";
const Dogs = () => {
  const [dadosApi, SetDadosApi] = useState([]);
  const [apiChegou, setApiChegou] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);
  const [dogDaVez, setDogDaVez] = useState({})
  const [dogEhEdicao, setDogEhEdicao] = useState(false)

  useEffect(() => {
    fetch("https://salty-harbor-83280.herokuapp.com/pets/dogs")
      .then((resposta) => resposta.json())
      .then((dados) => {
        SetDadosApi(dados.results);
        setApiChegou(true);
      });

    console.log(dadosApi);
  }, []);

  console.log(dadosApi);
  return (
    <S.Container>
      <S.Table>
        <thead>
          <tr>
            <th>nome</th>
            <th>raça</th>
            <th>idade</th>
            <th>gênero</th>
          </tr>
        </thead>
        <tbody>
          {!!dadosApi ? (
            dadosApi.map((dog) => {
              return (
                <tr onClick={() => {
                    setModalAberto(true)
                    setDogDaVez(dog)
                    setDogEhEdicao(true)
                }} key={dog.id}>
                  <td>{dog.nome}</td>
                  <td>{dog.raca}</td>
                  <td>{dog.idade > 0 ? dog.idade : "Recem nascido"}</td>
                  <td>{dog.genero === "male" ? "Macho " : "Femea"}</td>
                </tr>
              );
            })
          ) : (
            <p>carregando</p>
          )}
        </tbody>
      </S.Table>
      {modalAberto && (
        <S.Modal>
          <S.ModalContent>
            <button onClick={() => setModalAberto(false)}>x</button>
            <button onClick={()=> setDogEhEdicao()}>Editar</button>
            <input type='text' value={dogDaVez.nome} disabled={true} onChange={(e)=>{
                const value = e.target.value
                setDogDaVez({nome:value,...dogDaVez})
            }}/>
            <input type='text' value={dogDaVez.idade} disabled={true} onChange={(e)=>{
                const value = e.target.value
                setDogDaVez({idade:value,...dogDaVez})
            }} />
            <input type='text' value={dogDaVez.genero} disabled={true} onChange={(e)=>{
                const value = e.target.value
                setDogDaVez({genero:value,...dogDaVez})
            }}/>
            <input type='text' value={dogDaVez.raca} disabled={true} onChange={(e)=>{
                const value = e.target.value
                setDogDaVez({raca:value,...dogDaVez})
            }}/>
            <button onClick={()=> console.log(dogDaVez)}>Salvar </button>
          </S.ModalContent>
        </S.Modal>
      )}
    </S.Container>
  );
};

export default Dogs;
