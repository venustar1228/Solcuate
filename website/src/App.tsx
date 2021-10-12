import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useMemo } from "react";
import Home from "./Home";
import Intro from "./Home/Intro";
import Roadmap from "./Roadmap/Roadmap";
import './Home/Intro.css';


import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router } from 'react-router-dom'

import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Footer from './Footer/Footer';

const treasury = new anchor.web3.PublicKey(
  process.env.REACT_APP_TREASURY_ADDRESS!
);

const config = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_CONFIG!
);

const candyMachineId = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_ID!
);

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const theme = createTheme({
  palette: {
    type: 'dark',
  },
  overrides: {
    MuiButtonBase: {
      root: {
        justifyContent: 'flex-start',
      },
    },
    MuiButton: {
      root: {
        textTransform: undefined,
        padding: '12px 16px',
      },
      startIcon: {
        marginRight: 8,
      },
      endIcon: {
        marginLeft: 8,
      },
    },
  },
});

function App() {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSlopeWallet(),
      getSolflareWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network })
    ],
    []
  );

  return (
    <Router>
      <Navbar />
      <div className="home_section" id="intro">
        <div className="home_grid">
          <div className="home_intro">
            <div className="home_header">
              Solcuate
            </div>
            <div className="home_description">
              <text>Solcuate is a collection of 10 Nft's of cutie cate {"\n"}
                (solcutecate solcuteate solcuate ....)</text>
              <div className="mint">
                <ThemeProvider theme={theme}>
                  <ConnectionProvider endpoint={endpoint}>
                    <WalletProvider wallets={wallets} autoConnect={true}>
                      <WalletDialogProvider>
                        <Home
                          candyMachineId={candyMachineId}
                          config={config}
                          connection={connection}
                          startDate={startDateSeed}
                          treasury={treasury}
                          txTimeout={txTimeout}
                        />
                      </WalletDialogProvider>
                    </WalletProvider>
                  </ConnectionProvider>
                </ThemeProvider>
              </div>
            </div>
          </div>
          <div className="home_image">
            <img src="images/cat.gif" alt='cat' className='img_cat' />
          </div>
        </div>
      </div>
      <Roadmap />
      <Footer />
    </Router >
  );
}

export default App;
