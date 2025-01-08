"use client";

import { WagmiConfig } from 'wagmi'
import { QueryClientProvider } from '@tanstack/react-query'
import { wagmiAdapter, queryClient } from "@/lib/config";

type Props = {
    children: React.ReactNode;
};

export default function Providers({ children }: Props) {

    return (
        <WagmiConfig config={wagmiAdapter.wagmiConfig}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </WagmiConfig>
    );
}