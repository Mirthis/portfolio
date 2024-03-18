import React from "react";

const Pok = () => {
  return (
    <>
      <p>
        The app allows to browse Proof of knowledge NFTs and display the one
        owned by the user based on their wallet address.
      </p>
      <p>This was built as part of a job interview</p>
      <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
        Features
      </h2>
      <ul>
        <li>Web3 wallet connection</li>
        <li>
          Browse user owned NFTs, based on connected wallet, for the supported
          collections
        </li>
        <li> Browse all the NFTs for the supported collections</li>
        <li> NFT details for each token</li>
        <li> Basic pagination </li>
        <li> Media playback for video NFTs</li>
      </ul>
    </>
  );
};

export default Pok;
