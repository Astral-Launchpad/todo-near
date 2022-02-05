// src/components/TokenMetaData.js
import { useEffect, useState } from "react";

const TokenMetaData = ({ contract }) => {
  const [ftMetadata, setFtMetadata] = useState({});

  useEffect(() => {
    // every second after the component first mounts
    // update the data of ft_metadata by invoking the get
    // method on the smart contract
    const id = setInterval(() => {
      contract.ft_metadata().then((ft_metadata) => setFtMetadata(ft_metadata));
    }, 1000);

    return () => clearInterval(id);
  }, [contract]);

  return (
    <>
      <h3>ftMetadata:</h3>
      <p>{JSON.stringify(ftMetadata || {})}</p>
    </>
  );
};

export default TokenMetaData;
