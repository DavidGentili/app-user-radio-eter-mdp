import React from 'react'
import { motion } from 'framer-motion'

export default function PageTransition({ children, className }) {


    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 0.6 } }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
            className={className}
        >
            {children}
        </motion.main>
    )
}
