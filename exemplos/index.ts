

let nome:string = "Ana";
let idade: number = 22;
let ocupado: boolean = true;
let filhos: string[] = ["Clarisse", "Vicente"];

console.log(`Meu Nome é ${nome}`);
console.log(`Minha idade é ${idade} anos`);
console.log(`Meus filhos são ${filhos}`);

function somar(a: number, b:number):number{
    return a+b;
}

//criando um enum
enum estadoCivil{
    casado = "Casado", 
    solteiro = "Solteiro",
    viuvo = "Viuvo",
    divorciado = "Divorciado",
    uniaoEstavel = "Uniao Estavel"
}

let estCivil: estadoCivil;

estCivil = estadoCivil.casado;
// estCivil = estadoCivil.viuvo;

console.log(estCivil);

// definição de classe
class Pessoa{
    private _nome: string;
    private _idade: number;

    public constructor(nome:string, idade:number){
        this._nome = nome;
        this._idade = idade;
    }

    public get nome(){
        return this._nome;
    }
    public get idade(){
        return this._idade;
    }


}


interface Produto{
    nome:string,
    categoria:number,
    id:number,
    addAoEstoque:(n:number) => void
}

let shampoo:Produto = {
    nome:"Palmolive",
    categoria: 2,
    id:1,
    addAoEstoque:(n:number) => {}
}

class ProdutoDeViagem implements Produto{
    nome:string;
    categoria:number;
    id:number;
    addAoEstoque(n:number){
        console.log(`Adicionar ${n} ao estoque`);
    }
}

let pv = new ProdutoDeViagem();