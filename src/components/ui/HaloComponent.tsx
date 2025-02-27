"use client";
import { useState } from "react";

export default function HaloComponent({ className }: { className?: string }) {
  return (
        <div className={`${className} flex items-center justify-center`}>
            <div className="w-full h-full bg-red-500/0 flex items-center justify-center">
                <div className="w-[80%] h-[80%] rounded-full border-2 border-black/5 m-auto flex items-center justify-center">
                    <p className="text-lg">PFAS</p>
                </div>
            </div>
        </div>
  );
}