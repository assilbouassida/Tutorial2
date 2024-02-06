import React from "react";
class Greeting extends React.Component{
  render(){
    const prenom='Assil';
  const Nom='Bouassida';
    return (
      <>
        <h1>Bonjour {prenom} {Nom}</h1>
        <p>Bienvenue dans mon app react !</p>
        <p>La date  et l heure actulles sont {new Date().toDateString()}</p>
      </>
    )
  }
}

export default Greeting