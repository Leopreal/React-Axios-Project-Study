import blogFetch from "../axios/config"

import { useState } from "react" // GERENCIAR OS VALORES DO INPUT

import { useNavigate } from "react-router-dom" // USADO PARA FAZER O RE-DIRECT PARA A HOME QUANDO O USUARIO CRIAR UM POST


import "./New.css"



const New = () => {
    const navigate = useNavigate()

    const [title, setTitle] = useState();
    const [body, setBody] = useState();

    const createPost = async (e) => { // FUNÇÃO PARA A CRIAÇÃO DE UM POST
      e.preventDefault()

      const post = {title, body, userId: 1}

      await blogFetch.post("/posts", {
        body: post,
      })

      navigate("/")
    }

  return (
    <div className='new-post'>
      <h2>Inserir novo post</h2>
      <form onSubmit={(e) => createPost(e)}> 
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input 
          type="text" 
          name="title" 
          id='title' 
          placeholder='Digite o Título' 
          onChange={(e) => setTitle(e.target.value)}
          />

        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea 
          name="body" 
          id="body" 
          placeholder='digite o conteudo'
          onChange={(e) => setBody(e.target.value)}
          >
          </textarea>
        </div>
        <input type="submit" value="Criar Post" className='btn' />
      </form>


    </div>
  )
}

export default New