"use client";

import { motion } from "framer-motion";
import { ShowcaseNavbar } from "@/components/ShowcaseNavbar";
import { Footer } from "@/components/Footer";

export default function TermsOfService() {
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
            Terms of Service
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
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 mb-4">
                By accessing or using BioHalo's website, services, and products,
                you agree to be bound by these Terms of Service. If you do not
                agree to all the terms and conditions, you may not access or use
                our services.
              </p>
              <p className="text-gray-700">
                We reserve the right to modify these terms at any time. Changes
                will be effective immediately upon posting on our website. Your
                continued use of our services constitutes your acceptance of the
                modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-darkGrey">
                2. Services Description
              </h2>
              <p className="text-gray-700 mb-4">
                BioHalo provides sustainable biotechnology solutions and
                services as described on our website. We may update, modify, or
                discontinue any aspect of our services at any time without prior
                notice.
              </p>
              <p className="text-gray-700">
                While we strive to ensure the accuracy of the information
                provided on our website, we make no warranties or
                representations regarding the completeness, reliability, or
                accuracy of this content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-darkGrey">
                3. User Responsibilities
              </h2>
              <p className="text-gray-700 mb-2">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>
                  Provide accurate and complete information when interacting
                  with our services
                </li>
                <li>
                  Use our services only for lawful purposes and in accordance
                  with these Terms
                </li>
                <li>
                  Respect the intellectual property rights of BioHalo and third
                  parties
                </li>
                <li>
                  Not engage in any activity that could harm, disable, or impair
                  our services
                </li>
                <li>
                  Not attempt to gain unauthorized access to any part of our
                  services or systems
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-darkGrey">
                4. Intellectual Property
              </h2>
              <p className="text-gray-700 mb-4">
                All content on the BioHalo website, including but not limited to
                text, graphics, logos, images, audio clips, digital downloads,
                and data compilations, is the property of BioHalo or its content
                suppliers and is protected by international copyright laws.
              </p>
              <p className="text-gray-700">
                You may not reproduce, distribute, modify, create derivative
                works of, publicly display, publicly perform, republish,
                download, store, or transmit any material from our website
                without our prior written consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-darkGrey">
                5. Limitation of Liability
              </h2>
              <p className="text-gray-700 mb-4">
                In no event shall BioHalo, its officers, directors, employees,
                or agents be liable for any indirect, punitive, incidental,
                special, or consequential damages arising out of or in any way
                connected with your use of our services, whether based on
                contract, tort, strict liability, or otherwise.
              </p>
              <p className="text-gray-700">
                BioHalo's total liability to you for any claims arising from or
                related to these Terms or your use of our services shall not
                exceed the amount paid by you, if any, for accessing our
                services during the twelve (12) months preceding the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-darkGrey">
                6. Indemnification
              </h2>
              <p className="text-gray-700">
                You agree to indemnify, defend, and hold harmless BioHalo, its
                affiliates, officers, directors, employees, and agents from and
                against any claims, liabilities, damages, losses, costs,
                expenses, or fees (including reasonable attorneys' fees) that
                arise from or relate to your use of our services or violation of
                these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-darkGrey">
                7. Governing Law
              </h2>
              <p className="text-gray-700">
                These Terms shall be governed by and construed in accordance
                with the laws of the jurisdiction in which BioHalo is
                established, without regard to its conflict of law provisions.
                Any legal action or proceeding arising out of or relating to
                these Terms shall be brought exclusively in the courts of that
                jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-darkGrey">
                8. Contact Us
              </h2>
              <p className="text-gray-700">
                If you have any questions or concerns about these Terms of
                Service, please contact us at{" "}
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
