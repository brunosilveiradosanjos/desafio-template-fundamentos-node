import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  // TODO
  try {
    const transactions = transactionsRepository.all();
    const balance = transactionsRepository.getBalance();

    return response.json({ transactions, balance });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    // TODO

    // 1 passo:
    // * receber requisição
    const { title, value, type } = request.body;

    console.log(title);

    // * criar transaction service, que cuidará da nossa regra de negócio
    const createTransaction = new CreateTransactionService(
      transactionsRepository
    );

    // * executar nosso método execute, que vai criar nossa transação
    const transaction = createTransaction.execute({
      title,
      value,
      type
    });

    // retornar a transaction que será criada
    return response.json(transaction);

  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
