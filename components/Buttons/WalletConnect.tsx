'use client'
import React from 'react'
import { ConnectButton } from "thirdweb/react";
import { lightTheme } from 'thirdweb/react';


import { Address } from 'thirdweb';
import {
	CHAIN,
	accountAbstraction,
	appMetadata,
	client,
	contract,
	wallets,
} from "@/utils/constants";


const WalletConnect = ({title}:any) => {
  return (
    <div> <ConnectButton
    client={client}
    appMetadata={appMetadata}
    wallets={wallets}
    accountAbstraction={accountAbstraction}
    supportedNFTs={{
      [CHAIN.id]: [contract.address as Address],
    }}
    chain={CHAIN}
    connectButton={{
      label: title,
    }}

    connectModal={{ size: "compact" }}
    theme={lightTheme({
      colors: {
        borderColor: "#8f6bcc",
        accentText: "#4a5e7d",
        skeletonBg: "#624578",
        primaryButtonBg: "#01A8F6",
        tooltipBg: "#4f2da4",
      },
    })}
  /></div>
  )
}

export default WalletConnect