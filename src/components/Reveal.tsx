'use client';

import React, {useRef, useEffect} from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface props{
    children: JSX.Element,
    width?: 'fit-content' | '100%'
}

const Reveal = ({children, width= 'fit-content'} : props) => {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: false})  //set optional parameter {once: true} if you want it to animate only once

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView){
            mainControls.start('visible')
        } else {
            mainControls.start('hidden');
        }
    }, [isInView, mainControls])

    return(
        <div ref={ref} className={`relative w-[${width}]`}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0}
                }}
                initial='hidden'
                animate={mainControls}
                transition={{
                    duration: 0.3
                }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default Reveal;