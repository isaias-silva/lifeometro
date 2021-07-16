import React from "react";
//
class Center extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: undefined,
      idade: undefined,
      peso: undefined,
      altura: undefined,
      checar: 0,
    };
    this.calcular = this.calcular.bind(this);
  }

  calcular() {
    if (this.state.checar === 0) {
     //calcular a vida
     
     
     
      this.setState({ checar: 1 });
    } else if (this.state.checar === 1) {
      //voltar a tela e zerar tudo;

      this.setState({ checar: 0 });
    }
  }

  render() {
    if (this.state.checar === 0) {
      return (
        <div className="center">
          <h2>Lifeometro</h2>
          <div id="formulario">
            <label>
              nome:
              <input
                type="text"
                id="nome"
                name="nome"
                onChange={(event) => {
                  this.setState({ nome: event.target.value });
                }}
              />
            </label>
            <label>
              idade:
              <input
                type="number"
                id="idade"
                name="idade"
                onChange={(event) => {
                  this.setState({ idade: event.target.value });
                }}
              />
            </label>

            <label>
              peso(kg):
              <input
                type="number"
                id="peso"
                name="peso"
                onChange={(event) => {
                  this.setState({ peso: event.target.value });
                }}
              />
            </label>
            <label>
              altura(m):
              <input
                type="number"
                id="altura"
                name="altura"
                onChange={(event) => {
                  this.setState({ altura: event.target.value });
                }}
              />
            </label>
            <button onClick={this.calcular}>clique</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="center">
          <h2>Lifeometro</h2>
          <div id="tela-second">
            <div id="result"></div>

            <button onClick={this.calcular}>clique</button>
          </div>
        </div>
      );
    }
  }
}

export default Center;
