import "regenerator-runtime/runtime";
import React from "react";
import PropTypes from "prop-types";
import TokenMetaData from "./components/TokenMetaData";
import BalanceOf from "./components/BalanceOf";
import * as nearAPI from "near-api-js";
const {
  utils: {
    format: { formatNearAmount },
  },
} = nearAPI;

const App = ({ contract, currentUser, nearConfig, wallet }) => {
  const signIn = () => {
    wallet.requestSignIn(nearConfig.contractName, "NEAR ToDo List");
  };

  const signOut = () => {
    wallet.signOut();
    window.location.replace(window.location.origin + window.location.pathname);
  };

  return (
    <>
      <h1>NEAR New Token App</h1>
      {currentUser ? (
        <div>
          <h2>
            Account ID: {currentUser.accountId}{" "}
            <button onClick={signOut}>Log out</button>
          </h2>
          <h3>Account balance: {formatNearAmount(currentUser.balance, 4)} Near</h3>

          <TokenMetaData contract={contract} />
          <hr />
          <BalanceOf contract={contract} />
        </div>
      ) : (
        <div>
          Sign In To Use The App: <button onClick={signIn}>Log in</button>
        </div>
      )}
    </>
  );
};

App.propTypes = {
  contract: PropTypes.shape({
    create: PropTypes.func.isRequired,
  }).isRequired,
  currentUser: PropTypes.shape({
    accountId: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired,
  }),
  nearConfig: PropTypes.shape({
    contractName: PropTypes.string.isRequired,
  }).isRequired,
  wallet: PropTypes.shape({
    requestSignIn: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
  }).isRequired,
};

export default App;
