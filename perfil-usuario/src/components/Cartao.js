function Cartao(props){
    return(
        <div>
            <p>Olá {props.nome}, seja bem vindo!</p>
            <img src={props.foto} alt="xxx"/>
            <p>Você exerce a profissão de {props.prof}!</p>
            <p>O usuário está cursando o ténico em informática para internet no período da tarde e o técnico em administração no período da noite, na ETEC Profª Maria Cristina Medeiros</p>
        </div>
    )
}

export default Cartao