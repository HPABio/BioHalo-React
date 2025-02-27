'use client'

import { motion } from 'framer-motion'
import { Mail, ArrowRight } from 'lucide-react'
import styles from '@/components/customCSS/ModernCard1.module.css'

export function BentoContact() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group col-span-1 row-span-1 relative overflow-hidden rounded-3xl bg-darkGrey p-6 cursor-pointer"
    >
      <div className="h-full flex flex-col justify-between">
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
          <Mail className="w-5 h-5 text-white" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
          <div className="flex items-center gap-2 text-white/80">
            <span className="text-sm">Contact us</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  )
} 

export function BentoContact2() {
  return (
    <>
<div className={styles.outer}>
<div className={styles.dot}></div>
<div className={styles.card}>
  <div className={styles.ray}></div>
  <div className={styles.text}>750k</div>
      
  <div className={`${styles.line} ${styles.topl}`}></div>
  <div className={`${styles.line} ${styles.leftl}`}></div>
  <div className={`${styles.line} ${styles.bottoml}`}></div>
  <div className={`${styles.line} ${styles.rightl}`}></div>
</div>
</div>



<motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group col-span-1 row-span-1 relative overflow-hidden rounded-3xl bg-darkGrey p-6 cursor-pointer"
    >
      <div className="h-full flex flex-col justify-between">
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
          <Mail className="w-5 h-5 text-white" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
          <div className="flex items-center gap-2 text-white/80">
            <span className="text-sm">Contact us</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
    </>
  )
}