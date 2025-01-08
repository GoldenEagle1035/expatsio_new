'use client';

import { createAppKit } from '@reown/appkit/react'
import { mainnet, bscTestnet } from '@reown/appkit/networks'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

import { QueryClient } from '@tanstack/react-query'

const projectId = "97b2da2ba373a81bf789edbfc4d7bb18";

export const queryClient = new QueryClient()

const metadata = {
   name: 'Expatsio',
   description: 'Expatsio',
   url: 'https://expatsio-nft.vercel.app',
   icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const networks = [mainnet, bscTestnet]

export const wagmiAdapter = new WagmiAdapter({
   networks,
   projectId
})

createAppKit({
   adapters: [wagmiAdapter],
   networks: [mainnet, bscTestnet],
   metadata,
   projectId,
   features: {
      analytics: true,
   }
})
