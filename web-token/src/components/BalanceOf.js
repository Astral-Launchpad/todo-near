// src/components/BalanceOf.js
import { useState } from "react";
import * as nearAPI from "near-api-js";
const {
  utils: {
    format: { formatNearAmount },
  },
} = nearAPI;

const BalanceOf = ({ contract }) => {
  const [balance, setBalance] = useState("");
  const [address, setAddress] = useState("astral.testnet");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    // invoke the smart contract's ft_balance_of method
    const _balance = await contract.ft_balance_of({ account_id: address });
    // setAddress("");
    setLoading(false);

    // print the balance to the console
    console.log("my balance", _balance);
    setBalance(_balance);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Check Balance Of"
          value={address}
          onChange={({ target }) => setAddress(target.value)}
        />
        <button disabled={loading}>Check</button>
      </form>
      {balance}
    </>
  );
};

export default BalanceOf;
