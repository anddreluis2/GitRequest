import { useEffect, useState } from "react"
import styles from './App.scss'
import {AiFillStar} from 'react-icons/Ai'
import {BsGithub} from 'react-icons/bs'
function App() {
  

  const [repositories, setRepositories] = useState([])

  const [user, setUser] = useState('')

  function getRepo(e){
      e.preventDefault()
    
      fetch(`https://api.github.com/users/${user}/repos`)
        .then(resp => resp.json())
        .then(data => {setRepositories(data)})
        .catch((err) => console.log(err)
       
        )}

  return (
    <div className="div">
      <form className="form"> 
        <input className="input" type="text" onChange = {e => setUser (e.target.value)}  placeholder="Digite o user:"></input>
        <button className="btn" type="Submit" onClick={getRepo}>Enviar</button>
      </form>
      <div className="reposit">
      <h1 className="Titulo"><BsGithub/> {repositories[0]?.owner?.login}</h1>
      <ul className="repos">
        {repositories.map(repo => {
          return (
            <li className="repos" key={repo.full_name}>
              <p>{repo.name} - {repo.stargazers_count} <AiFillStar/></p>
            </li>
          )
        })}
      </ul>
      </div>
      </div> 
  )
}

export default App