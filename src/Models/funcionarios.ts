import { db } from '../db';

export class Funcionarios {
    private id: number;
    private nome: string;
    private cargo: string;
    private salario: number;
  
    constructor(id: number, nome: string, cargo:string, salario:number) {
      this.id = id;
      this.nome = nome;
      this.cargo = cargo;
      this.salario = salario;
    }

    static async getAll() {
        const [rows] = await db.query('SELECT * FROM FUNCIONARIOS');
        return rows;
      }
    
      static async getById(id: number) {
        const [rows] = await db.query('SELECT * FROM FUNCIONARIOS WHERE ID = ?', [id]);
        return rows;
      }
    
      static async create(nome: string, cargo:string, salario:number) {
        const [result] = await db.query('INSERT INTO FUNCIONARIOS (NOME, DESCRICAO) VALUES (?, ?)', [nome, preco, descricao, ingredientes:[]]);
        return result;
      }
    
      static async update(id: number, nome: string, cargo:string, salario:number) {
        const [result] = await db.query('UPDATE FUNCIONARIOS SET NOME = ?, DESCRICAO = ? WHERE ID = ?', [nome, descricao, id]);
        return result;
      }
    
      static async delete(id: number) {
        const [result] = await db.query('DELETE FROM FUNCIONARIOS WHERE ID = ?', [id]);
        return result;
      }
}