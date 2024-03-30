import React from 'react'
import './NewPost.css'

const NewPost = () => {
    return (
        <div className='new-post'>
            <form>
                <div className='form-control'>
                    <label htmlFor="title">Título:</label>
                    <input type="text" name="title" id='title' placeholder="Digite o título do seu post" />
                </div>
                <div className='form-control'>
                    <label htmlFor="body">Conteúdo:</label>
                    <textarea name="body" id="body" placeholder='Digite o conteúdo'></textarea>
                </div>
                <input type="submit" value="Criar Post" className='btn' />
            </form>
        </div>
    )
}

export default NewPost