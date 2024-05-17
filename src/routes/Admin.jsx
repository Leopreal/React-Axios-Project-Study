import blogFetch from "../axios/config"

import { useState, useEffect } from "react"

import { Link } from "react-router-dom"

import './Admin.css'

const Admin = () => {
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

    const deletePost = async(id) => {

        await blogFetch.delete(`/posts/${id}`)

        const filteredPosts = posts.filter((post) => post.id !== id)

        setPosts(filteredPosts)

    }

    useEffect(() => {
        getPosts()
    }, [])


  return (
    <div className="admin">
        <h1>Gereciar Posts</h1>
        {posts.length === 0 ? (<p>Carregando...</p>) : (
            posts.map((post) => (
                <div className="post" key={post.id}>
                    <h2>{post.title}</h2>
                    <div className="actions">
                        <Link className="btn edit-btn" to={`/posts/edit/${post.id}`}>Editar</Link>
                        <button className="btn delete-btn" onClick={() => deletePost(post.id)}>Excluir</button>
                    </div>
                </div>
            ))
        )}
    </div>
  )
}

export default Admin