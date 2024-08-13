import { db } from '../db';

export class Cardapio {
    private id: number;
    private nome: string;
    private preco: number;
    private descricao: string;
    private ingredientes: [];
  
    constructor(id: number, nome: string, preco:number, descricao:string, ingredientes:[]) {
      this.id = id;
      this.nome = nome;
      this.preco = preco;
      this.descricao = descricao;
      this.ingredientes = ingredientes;

    }

    static async getAll() {
        const [rows] = await db.query('SELECT * FROM CARDAPIO');
        return rows;
      }
    
      static async getById(id: number) {
        const [rows] = await db.query('SELECT * FROM CARDAPIO WHERE ID = ?', [id]);
        return rows;
      }
    
      static async create(nome: string, preco:number, descricao:string, ingredientes:[]) {
        const [result] = await db.query('INSERT INTO CARDAPIO (NOME, DESCRICAO) VALUES (?, ?)', [nome, preco, descricao, ingredientes:[]]);
        return result;
      }
    
      static async update(id: number, nome: string, preco:number, descricao:string, ingredientes:[]) {
        const [result] = await db.query('UPDATE CARDAPIO SET NOME = ?, DESCRICAO = ? WHERE ID = ?', [nome, descricao, id]);
        return result;
      }
    
      static async delete(id: number) {
        const [result] = await db.query('DELETE FROM CARDAPIO WHERE ID = ?', [id]);
        return result;
      }
}