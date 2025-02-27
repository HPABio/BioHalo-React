'use client'

import { useEffect } from 'react';

export function ScreenSizeDEVTOOL() {
    return (
        <main>
            <div className="fixed top-[10%] right-5 w-[60px] h-[60px] bg-red-500/0 flex flex-row items-center justify-center gap-4 z-[100]">
                    <div className="md:hidden flex w-[50px] h-[50px] rounded-full bg-red-500  items-center justify-center">
                    SM
                    </div>
                    <div className="hidden md:flex lg:hidden w-[50px] h-[50px] rounded-full bg-yellow-500  items-center justify-center">
                    MD
                    </div>
                    <div className="hidden lg:flex xl:hidden w-[50px] h-[50px] rounded-full bg-green-500  items-center justify-center">
                    LG
                    </div>
                    <div className="hidden xl:flex 2xl:hidden w-[50px] h-[50px] rounded-full bg-blue-500  items-center justify-center">
                    XL
                    </div>
                    <div className="hidden 2xl:flex w-[50px] h-[50px] rounded-full bg-purple-500  items-center justify-center">
                    2XL
                    </div>
                </div>
        </main>
    )
}

