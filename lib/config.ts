'use client';

import { http, createStorage, cookieStorage } from 'wagmi'
import { mainnet, bscTestnet } from 'wagmi/chains'
import { Chain, getDefaultConfig } from '@rainbow-me/rainbowkit'

const projectId = "97b2da2ba373a81bf789edbfc4d7bb18";

const supportedChains: Chain[] = [bscTestnet];

export const config = getDefaultConfig({
   appName: "Expatsio",
   projectId,
   chains: supportedChains as any,
   ssr: true,
   storage: createStorage({
    storage: cookieStorage,
   }),
  transports: supportedChains.reduce((obj, chain) => ({ ...obj, [chain.id]: http() }), {})
 });