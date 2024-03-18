import React from "react";

const Perfi = () => {
  return (
    <>
      <p>
        Perfi is a personal finance app that leverage open banking to retrieve
        transactions data from financial institution accounts, and provide
        spending stats.
      </p>
      <p>
        This is the first full-stack app I build and only a demo is available as
        due to some regulatory complexity related to handling financial data I
        decided to abandon the project.
      </p>
      <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
        Features
      </h2>
      <ul>
        <li>
          Connect to financial institutions and retrieve accounts (UK only))
        </li>
        <li>
          Retrieve accounts and display basic stats (balance, recent spending)
          and categorized transactions
        </li>
        <li>List transactions by category, month, account</li>
        <li>Display aggregated view of spending data using charts</li>
        <li>
          Exclude/include individual transactions or all transactions in a
          specific category from spending view
        </li>
        <li>
          Assign individual or similar transactions to a different category
          (based on name and merchant)
        </li>
        <li>Update category assignment algorithm based on user choices</li>
      </ul>
    </>
  );
};

export default Perfi;
