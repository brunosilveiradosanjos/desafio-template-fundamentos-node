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
    return this.transactions;

  }

  public getBalance(): Balance {
    // TODO
    const { income, outcome } = this.transactions.reduce((accumulator: Balance, transaction: Transaction) => {
      switch (transaction.type) {
        case 'income': accumulator.income += transaction.value;
          break;
        case 'outcome': accumulator.outcome += transaction.value;
          break;
        default:
          break;
      }
      // slower solution
      // accumulator.total = accumulator.income - accumulator.outcome;
      return accumulator;
    }, {
      income: 0,
      outcome: 0,
      total: 0
    })
    const total = income - outcome;
    return { total, income, outcome };
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
