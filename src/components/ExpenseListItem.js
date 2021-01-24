import React from "react";

const ExpenseListItem = ({ description, amount, createdAt }) => (
  <div>
    <h4>{description}</h4>
    <p>
      {amount} - {createdAt}
    </p>
  </div>
);

export default ExpenseListItem;
