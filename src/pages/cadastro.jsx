export default function Cadastro(){
    return(
     <div className="cadastro">
        <form method="POST" class="formCadastro">
        <h1>Cadastrar</h1>
        <p></p>
        <label for="email">Titulo</label><br></br>
        <input type="email" placeholder="Digite seu titulo" autofocus="true" />
        <br></br>
        <label for="email">Imagem  </label>
        <br></br>
        <input type="hidden" name="MAX_FILE_SIZE" value="4194304" />
        <input type="file" /><br></br>
        <label for="password">Conteúdo</label><br></br>
        <input textarea placeholder="Digite" />
        <br></br>
        <div className="botaoEnviar">
            <input type="submit" value="Enviar" class="btn" />
            </div>
            </form>
     
     </div>

    )
}

