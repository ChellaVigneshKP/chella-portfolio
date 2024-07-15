"use client"
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";


const RenderModel =({children,className,env})=>{
    return(
        <Canvas
        className={clsx("w-screen h-screen -z-10 relative",className)}
        shadows={false}
        dpr={[1,2]}>
            <Suspense fallback={null}>
                {children}
            </Suspense>
            <Environment preset={env}/>
        </Canvas>
    )
}

export default RenderModel