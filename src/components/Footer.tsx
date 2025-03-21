'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import logo from '@/assets/images/logo.png'

export function Footer() {
  return (
    <footer className="bg-darkGrey text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image 
                src={logo}
                alt="BioHalo Logo"
                width={80}
                height={80}
                quality={100}
                className="w-auto h-10"
              />
            </div>
            <p className="text-gray-400">
              Innovating sustainable solutions for a better future
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-mintAccent">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-mintAccent">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-mintAccent">
                  Team
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <a href="mailto:info@biohalo.io" className="hover:text-mintAccent">
                  info@biohalo.io
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-mintAccent">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-mintAccent">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BioHalo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
