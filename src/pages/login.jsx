export default function Login(){
    return(
     <div className="login">
        <form method="POST" class="formLogin">
        <h1>Login</h1>
        <p>Digite seus dados</p>
        <label for="email">E-mail</label>
        <input type="email" placeholder="Digite seu e-mail" autofocus="true" />
        <label for="password">Senha</label>
            <input type="password" placeholder="Digite seu e-mail" />
            <a href="/">Esqueci minha senha</a>
            <input type="submit" value="Acessar" class="btn" />
            </form>
     </div>

    )
}

