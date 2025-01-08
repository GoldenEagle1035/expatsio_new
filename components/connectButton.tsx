"use client";

import { useEffect, useRef } from "react";
import { useAppKit } from '@reown/appkit/react'
import { useAccount, useDisconnect } from "wagmi";
import { middleEllipsis } from "@/lib/utils";

export const ConnectBtn = () => {
    const { isConnecting, address, isConnected, chain } = useAccount();

    const { open } = useAppKit()
    const { disconnect } = useDisconnect();

    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;
    }, []);

    if (!isConnected) {
        return (
            <button
                className="jersey hover:border-b-[10px] transition-all text-white duration-300 bg-gradient-to-r from-[#D424FB] to-[#18E8EC] border-2 border-white 2xl:p-3 lg:p-2 p-1 font-normal 2xl:w-[240px] lg:w-[150px] w-[90px] rounded-lg uppercase 2xl:text-5xl text-base"
                onClick={async () => {
                    if (isConnected) {
                        disconnect();
                    }
                    open();
                }}
                disabled={isConnecting}
            >
                {isConnecting ? 'Connecting...' : 'Connect'}
            </button>
        );
    }

    if (isConnected && !chain) {
        return (
            <button className="jersey hover:border-b-[10px] transition-all text-white duration-300 bg-gradient-to-r from-[#D424FB] to-[#18E8EC] border-2 border-white 2xl:p-3 lg:p-2 p-1 font-normal 2xl:w-[240px] lg:w-[150px] w-[90px] rounded-lg uppercase 2xl:text-5xl text-base" onClick={async () => { open() }}>
                Wrong network
            </button>
        );
    }

    return (
        <button
            className="jersey hover:border-b-[10px] transition-all text-white duration-300 bg-gradient-to-r from-[#D424FB] to-[#18E8EC] border-2 border-white 2xl:p-3 lg:p-2 p-1 font-normal 2xl:w-[240px] lg:w-[150px] w-[90px] rounded-lg uppercase 2xl:text-5xl text-base"
            onClick={async () => open()}
        >
            {middleEllipsis(address as string, 4)}
        </button>
    );
};