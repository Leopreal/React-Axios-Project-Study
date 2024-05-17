import blogFetch from '../axios/config'

import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import "./Home.css"

import React from 'react'

const Home = () => {
    const [posts, setPosts] = useState([])

    const getPosts = async() => { // FUNÇÃO ASSINCRONA PARA PEGAR OS DADOS
    
        try {
            const response = await blogFetch.get("/posts") // resgatando os dados da API e colocando a resposta na variavel response

            const data = response.data; // colocando na variavel data a resposta puxando a data

            setPosts(data)


        } catch (error) {
            console.log(error)
        }


    }

    useEffect(() => { // COORDENA A RE-RENDERIZAÇÃO DO COMPONENTE

        getPosts()

    }, [])


  return (
    <div>
        <h1>Ultimos Posts</h1>
        {posts.length === 0 ? (<p>Carregando...</p>) : ( // SE POSTS.LENGHT FOR IGUAL A 0, OU SEJA, NAO EXISTIR POST, SENAO EXECUTA A FUNÇÃO
            posts.map((post) => (
                <div className="post" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <Link to={`/posts/${post.id}`} className="btn">Ler Mais</Link>
                </div>
            ))
        )}
    </div>
  )
}

export default Home