'use client'

import { gsap } from "gsap"

export function FiveSectionGSAP() {
    return(
        <main className="w-full h-full">


            <div className="mt-[100px] w-screen h-full bg-gradient-to-tr from-green-300 via-green-800 to-green-950">
                <h1 className=" text-9xl text-black scale-100"> This is the GSAP Version</h1>
            </div>

            <section className="w-screen h-screen bg-lightGrey flex justify-center items-center">
                <h1 className=" text-9xl text-darkGrey">
                    Section 1
                </h1>
            </section>
            <section className="w-screen h-screen bg-darkGrey flex justify-center items-center">
                <h1 className=" text-9xl text-lightGrey">
                    Section 2
                </h1>
            </section>
            <section className="w-screen h-screen bg-lightGrey flex justify-center items-center">
                <h1 className=" text-9xl text-darkGrey">
                    Section 3
                </h1>
            </section>
            <section className="w-screen h-screen bg-darkGrey flex justify-center items-center">
                <h1 className=" text-9xl text-lightGrey">
                    Section 4
                </h1>
            </section>
            <section className="w-screen h-screen bg-lightGrey flex justify-center items-center">
                <h1 className=" text-9xl text-darkGrey">
                    Section 5
                </h1>
            </section>  
            
            
            {/* <div className="h-screen flex justify-center items-center">
                <h2> Again this is some text </h2>
            </div> */}
        </main>
    )

}