import { CloseIcon, IncomeIcon, OutcomeIcon } from '@assets/icons';
import {
  Modal,
  ModalClose,
  ModalContent,
  ModalTitle,
  ModalTrigger,
} from '@components/Modal';
import { useTransactionMutation } from '@services/transactions';
import { FormEvent, useState } from 'react';
import * as S from './styles';

export function NewTransactionModal() {
  const createTransaction = useTransactionMutation();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState<'income' | 'outcome'>('income');

  async function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();

    await createTransaction.mutateAsync({
      title,
      category,
      amount,
      type,
    });

    setTitle('');
    setCategory('');
    setAmount(0);
    setType('income');

    setIsOpenModal(false);
  }

  return (
    <Modal open={isOpenModal} onOpenChange={setIsOpenModal}>
      <ModalTrigger asChild>
        <S.Button>Nova Transação</S.Button>
      </ModalTrigger>
      <ModalContent css={{ $$maxWidth: '600px' }} forceMount>
        <ModalTitle>Cadastrar transação</ModalTitle>

        <S.FormGroup onSubmit={handleCreateNewTransaction}>
          <S.InputField
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <S.InputField
            type="number"
            placeholder="Valor"
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
          />

          <S.InputGroup>
            <S.RadioBox
              type="button"
              onClick={() => setType('income')}
              active={type === 'income'}
              css={{ $$activeColor: 'hsla(147, 80%, 36%, 0.1)' }}
            >
              <IncomeIcon />
              <span>Entrada</span>
            </S.RadioBox>

            <S.RadioBox
              type="button"
              onClick={() => setType('outcome')}
              active={type === 'outcome'}
              css={{ $$activeColor: 'hsla(350, 78%, 54%, 0.1)' }}
            >
              <OutcomeIcon />
              <span>Saída</span>
            </S.RadioBox>
          </S.InputGroup>

          <S.InputField
            type="text"
            placeholder="Categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <S.Button
            aria-label="Close"
            type="submit"
            color="green"
            css={{ height: '$16', mt: '$2' }}
          >
            Cadastrar
          </S.Button>
        </S.FormGroup>

        <ModalClose asChild>
          <S.CloseButton>
            <CloseIcon />
          </S.CloseButton>
        </ModalClose>
      </ModalContent>
    </Modal>
  );
}
