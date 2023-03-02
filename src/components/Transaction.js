import React from "react";

function Transaction({ transaction, deleteTransaction }) {
  const {id, date, description, category, amount} = transaction

  function handleDelete() {
    deleteTransaction(id)
  }

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button onClick={handleDelete}>X</button>
      </td>
    </tr>
  );
}

export default Transaction;
