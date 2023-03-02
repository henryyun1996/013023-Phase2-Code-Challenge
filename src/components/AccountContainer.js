import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
const transactionAPI = " http://localhost:8001/transactions"

function AccountContainer() {

  const[transactions, setTransactions] = useState([])
  const[filteredTransaction, setFilteredTransaction] = useState("")

  useEffect(() => {
    fetch(transactionAPI)
      .then(res => res.json())
      .then(setTransactions)
  }, [])

  function renderNewTransaction(date, description, category, amount) {
    const transactionObj = {
      date: date,
      description: description,
      category: category,
      amount: amount
    };
    fetch(transactionAPI, {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(transactionObj)
    })
    .then(res => res.json())
    .then(transaction => setTransactions([...transactions, transaction]))
  }

  const filteredTransactionList = transactions.filter((transaction) => transaction.description.toUpperCase().includes(filteredTransaction.toUpperCase()))

  return (
    <div>
      <Search filteredTransaction={filteredTransaction} setFilteredTransaction={setFilteredTransaction} />
      <AddTransactionForm renderNewTransaction={renderNewTransaction} />
      <TransactionsList transactions={filteredTransactionList} />
    </div>
  );
}

export default AccountContainer;
