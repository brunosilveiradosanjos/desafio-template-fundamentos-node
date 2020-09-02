import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

// 2 passo:
// * criação da interface de requisição
interface Request {
  title: string,
  value: number,
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  // * ajustar método execute para receber as variáveis desestruturadas
  public execute({ title, value, type }: Request): Transaction {
    // TODO

    // Regra de negócio, validação de saldo

    const { total } = this.transactionsRepository.getBalance();

    if (type == 'outcome' && value > total) {
      throw new Error('You don`t have enough money bro')
    }

    const transaction = this.transactionsRepository.create({
      title,
      value,
      type
    });
    return transaction;
  }


}

export default CreateTransactionService;
