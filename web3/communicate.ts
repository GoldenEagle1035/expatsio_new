import { readContract, writeContract, waitForTransactionReceipt } from '@wagmi/core'
import abi from './abis/ExpatsioNFT.json'
import { wagmiAdapter } from "@/lib/config"
import { collectionAddress } from "./config"

export const waitTransactionConfirm = async (tx: `0x${string}`) => {
    try {
        const result = await waitForTransactionReceipt(wagmiAdapter.wagmiConfig, { hash: tx });
        return result;
    } catch (error) {
        return { error }
    }
}

export const readWhitelistStage = async () => {
    try {
        const result = await readContract(wagmiAdapter.wagmiConfig, {
            abi,
            address: collectionAddress,
            functionName: 'whitelistActive',
        })
        return result;
    } catch (error) {
        return { error }
    }
}

export const readCanMint = async (minter: string) => {
    try {
        const result = await readContract(wagmiAdapter.wagmiConfig, {
            abi,
            address: collectionAddress,
            functionName: 'canMint',
            args: [minter]
        })
        return result;
    } catch (error) {
        return { error }
    }
}

export const executeMint = async (value: bigint) => {
    try {
        console.log("executeMint", value);
        const result = await writeContract(wagmiAdapter.wagmiConfig, {
            abi,
            address: collectionAddress,
            functionName: 'mint',
            value,
            args: [],
        })

        console.log("executeMint result", result);
        return result;
    } catch (error) {
        return { error }
    }
}

export const executeBatchMint = async (mintCount: number, value: bigint) => {
    try {
        console.log("executeBatchMint", value);
        const result = await writeContract(wagmiAdapter.wagmiConfig, {
            abi,
            address: collectionAddress,
            functionName: 'batchMint',
            value,
            args: [mintCount],
        })

        console.log("executeMint result", result);
        return result;
    } catch (error) {
        return { error }
    }
}