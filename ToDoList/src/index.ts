import "./style.css";
import "material-icons/iconfont/material-icons.css";
import { Tarefa } from "./Tarefa";
import { Prioridade } from "./Prioridade";
import { Lista } from "./Lista";

let t1 = new Tarefa("Escovar os dentes",Prioridade.alta);
let t2 = new Tarefa("Lavar Pratos",Prioridade.alta);
let t3 = new Tarefa("Sair de Casa",Prioridade.alta);

let lista = new Lista();
lista.addTarefa(t1, t2, t3);

const form:HTMLFormElement = <HTMLFormElement>document.getElementById("form");
const input:HTMLInputElement = <HTMLInputElement>document.getElementById("tf_2do");

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    let t = new Tarefa(input.value, Prioridade.baixa);
    lista.addTarefa(t);
    console.log(lista);
})


