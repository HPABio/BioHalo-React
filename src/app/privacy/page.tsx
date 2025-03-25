"use client";

import { motion } from "framer-motion";
import { ShowcaseNavbar } from "@/components/ShowcaseNavbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-lightGrey">
      <ShowcaseNavbar />

      <div className="pt-32 pb-20 px-4 md:px-8 lg:px-16 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 pb-6 bg-gradient-to-r from-tealAccent to-pinkAccent bg-clip-text text-transparent">
            Privacy Policy
          </h1>

          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <p className="text-gray-600 mb-6">
              Last Updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-darkGrey">
                1. Introduction
              </h2>
              <p className="text-gray-700 mb-4">
                At BioHalo, we value your privacy and are committed to
                protecting your personal data. This Privacy Policy explains how
                we collect, use, and safeguard your information when you visit
                our website or use our services.
              </p>
              <p className="text-gray-700">
                We reserve the right to update this policy at any time. We will
                notify you of any changes by posting the new policy on this page
                and updating the "Last Updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-darkGrey">
                2. Information We Collect
              </h2>
              <p className="text-gray-700 mb-4">
                <strong>Personal Information:</strong> We may collect personal
                information that you provide to us, such as your name, email
                address, phone number, and company information when you fill out
                a contact form or subscribe to our newsletter.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Usage Data:</strong> We automatically collect certain
                information about how you interact with our website, including
                your IP address, browser type, pages visited, and time spent on
                our site.
              </p>
              <p className="text-gray-700">
                <strong>Cookies:</strong> We use cookies and similar tracking
                technologies to enhance your experience on our website and
                collect information about how you use it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-darkGrey">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-2">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>
                  Send you updates, marketing communications, and other
                  information about our products and services
                </li>
                <li>
                  Monitor and analyze trends, usage, and activities in
                  connection with our website
                </li>
                <li>
                  Detect, investigate, and prevent fraudulent transactions and
                  other illegal activities
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-darkGrey">
                4. Data Security
              </h2>
              <p className="text-gray-700">
                We implement appropriate technical and organizational measures
                to protect your personal data against unauthorized or unlawful
                processing, accidental loss, destruction, or damage. However, no
                method of transmission over the Internet or electronic storage
                is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-darkGrey">
                5. Your Rights
              </h2>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have certain rights
                regarding your personal data, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Right to access the personal data we hold about you</li>
                <li>Right to rectification of inaccurate or incomplete data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restrict processing of your data</li>
                <li>Right to data portability</li>
                <li>
                  Right to object to processing based on legitimate interests
                </li>
              </ul>
              <p className="text-gray-700">
                To exercise any of these rights, please contact us using the
                information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-darkGrey">
                6. Contact Us
              </h2>
              <p className="text-gray-700">
                If you have any questions or concerns about this Privacy Policy,
                please contact us at{" "}
                <a
                  href="mailto:info@biohalo.io"
                  className="text-tealAccent hover:text-pinkAccent"
                >
                  info@biohalo.io
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
