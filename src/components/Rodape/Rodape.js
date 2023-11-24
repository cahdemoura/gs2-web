import React from 'react'
import style from './Rodape.module.css'

const Rodape = () => {
    const teamMembers = [
        { name: 'Caique De Moura', rm: '99474', role: 'Front-end e Python' },
        { name: 'Diego Oliveira Borges Reis', rm: '550309', role: 'Java' },
        { name: 'Matheus Valero Colim', rm: '99669', role: 'Software Design e Tx' },
        { name: 'Paulo Cesa Ribeiro Rodrigues Pontes', rm: '99615', role: 'Banco de Dados e Java + Springboot' },
        { name: 'Saulo Gomes Fonseca', rm: '99878', role: 'Chatbot e Inteligência Artificial' },
        // Adicione mais membros conforme necessário
      ]
    
    return (
        <div className={style.footer}>
        <ul className={style.memberList}>
          {teamMembers.map((member, index) => (
            <li key={index} className={style.member}>
              <strong>{member.name}</strong> - RM: {member.rm} | Cargo: {member.role}
            </li>
          ))}
        </ul>
      </div>
    )
}

export default Rodape