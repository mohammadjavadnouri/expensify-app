import { createStore, combineReducers } from "redux";

const demoState = {
  expenses: [
    {
      id: "h25l2Bhk@lhkLHKw*&T%CVfwG*!jeJ%n",
      description: "Bahman Rent",
      note: "Final Payment for tha address.",
      amount: 5500000,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined,
  },
};
