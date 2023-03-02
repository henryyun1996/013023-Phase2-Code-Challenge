import React from "react";

function Search({ filteredTransaction, setFilteredTransaction }) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={filteredTransaction}
        onChange={(e) => setFilteredTransaction(e.target.value)}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
