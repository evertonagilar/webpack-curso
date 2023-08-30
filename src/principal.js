import Pessoa from "./pessoa";
import './modulos/moduloA'
import './assets'  // importa automaticamente o index.js desta pasta

const pessoa = new Pessoa();
console.log(pessoa.cumprimentar())
