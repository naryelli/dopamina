export default function BlogAdm(){
    return(
        <div className="titulo">
            <h1>AREA DO ADMINISTRADOR</h1>
            <p>Cadastro</p>
            <input type="submit" value="Editar" class="btn" />
        <div className="blog">
        <form method="POST" class="formBlogAdm">
        <img src="roupa blog.png"></img>
        <p>Acesse nosso aplicativo e <br/>confira os descontos da semana.</p>
            <input type="submit" value="Acessar" class="btn" />
            </form>
            <div>
            <form method="POST" class="formBlogAdm">
        <img src="marmita blog.png"></img>
        <p>Acesse nosso aplicativo e <br/>confira os descontos da semana.</p>
            <input type="submit" value="Acessar" class="btn" />
            </form>
            </div>
            <div>
            <form method="POST" class="formBlogAdm">
        <img src="suplemento blog.png"></img>
        <p>Acesse nosso aplicativo e <br/>confira os descontos da semana.</p>
            <input type="submit" value="Acessar" class="btn" />
            </form>
            </div>
     </div>
     </div>
    )
}