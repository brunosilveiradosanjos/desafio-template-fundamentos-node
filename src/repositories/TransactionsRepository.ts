import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

// 3 passo:
// * interface de criação da transação

interface CreateTransactionDTO {
  title: string,
  value: number,
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
  }

  public getBalance(): Balance {
    // TODO
  }

  // * a model é responsável pela criação de um novo objeto
  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    // TODO
    const transaction = new Transaction({
      title,
      value,
      type
    });
    // * armazernar transaction
    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
