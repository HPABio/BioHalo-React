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
            <p className="text-gray-600 mb-6">Last Updated: March, 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-darkGrey">
                Introduction
              </h2>
              <p className="text-gray-700 mb-4">
                BioHalo is committed to protecting the privacy of our users.
                This Privacy Policy outlines the types of personal information
                ("data") we collect, how we use and protect that information,
                and your rights concerning your personal data. By using our
                services, you agree to the terms outlined in this Privacy
                Policy.
              </p>
              <p className="text-gray-700 mb-4">
                BioHalo ApS is the data controller. If you have any questions
                regarding our processing of your personal data, please contact
                us at:
              </p>
              <div className="text-gray-700 mb-4">
                <p>BioHalo ApS</p>
                <p>Rentemestervej 3</p>
                <p>2200 København, Denmark</p>
                <p>E-mail: info@BioHalo.io</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-darkGrey">
                Information We Collect
              </h2>
              <p className="text-gray-700 mb-4">
                We may collect and process the following types of regular
                personal information:
              </p>
              <p className="text-gray-700 mb-4">
                Personal Information: Name, email address, contact details, and
                any other information you provide voluntarily when using our
                services.
              </p>
              <p className="text-gray-700 mb-4">
                Usage Data: Information about your interaction with our website,
                applications, and services, including the pages you visit and
                the actions you take.
              </p>
              <p className="text-gray-700">
                BioHalo will as a starting point not process any sensitive or
                confidential information about you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-darkGrey">
                Purposes for the Processing and How We Use Your Data
              </h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect for various purposes,
                including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>
                  Providing and maintaining our services, cf. Article 6(1)(f) of
                  the GDPR
                </li>
                <li>
                  Improving and optimizing our website and services, cf. Article
                  6(1)(f) of the GDPR
                </li>
                <li>
                  Sending newsletters and promotional materials if you have
                  subscribed to our mailing list, cf. Article 6(1)(a) of the
                  GDPR
                </li>
                <li>
                  Responding to inquiries and providing customer support, cf.
                  Article 6(1)(f) of the GDPR
                </li>
                <li>Complying with legal obligations, cf. Article 6(1)(c)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-darkGrey">
                Third-Party Services
              </h2>
              <p className="text-gray-700 mb-4">
                In some instances, we disclose your personal data to BioHalo's
                business partners and suppliers, such as IT suppliers, marketing
                agencies, providers of customer satisfaction surveys, suppliers
                of newsletter services, etc. These business partners solely
                process the personal data on behalf of BioHalo and in accordance
                with BioHalo's instructions.
              </p>
              <p className="text-gray-700">
                We may also disclose your data to external third parties if we
                are required to do so or if it is part of our services provided
                to you. Such external third parties may be public authorities,
                advisors, accountants etc.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-darkGrey">
                Storage Period
              </h2>
              <p className="text-gray-700">
                BioHalo will process your personal data as long as it is
                necessary to fulfill the purpose. Thereafter, BioHalo will
                delete the information. This is only relevant if you subscribe
                to the newsletter. If you unsubscribe, then BioHalo will delete
                your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-darkGrey">
                Your Rights
              </h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>
                  Ask for access to the information that we process about you,
                  cf. Article 15 of the GDPR
                </li>
                <li>
                  Ask for correction if the information that we process about
                  you is incorrect, cf. Article 16 of the GDPR
                </li>
                <li>
                  Ask for deletion of your personal information, cf. Article 17
                  of the GDPR
                </li>
                <li>
                  You also have the right to object to the processing of your
                  personal data, cf. Article 21 of the GDPR
                </li>
              </ul>
              <p className="text-gray-700">
                When the processing is based on your consent, you always have
                the right to withdraw your consent. If you withdraw your
                consent, BioHalo must stop the processing of your personal data.
                To exercise these rights, please contact us at{" "}
                <a
                  href="mailto:info@BioHalo.io"
                  className="text-tealAccent hover:text-pinkAccent"
                >
                  info@BioHalo.io
                </a>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-darkGrey">
                Data Security
              </h2>
              <p className="text-gray-700">
                We take appropriate measures to protect your personal
                information from unauthorized access, disclosure, alteration,
                and destruction. However, no data transmission over the internet
                or storage system can be guaranteed as 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-darkGrey">
                Changes to this Privacy Policy
              </h2>
              <p className="text-gray-700">
                We may update this Privacy Policy periodically. Any changes will
                be effective upon posting the revised policy on our website. We
                encourage you to review this Privacy Policy regularly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-darkGrey">
                Cookies
              </h2>
              <p className="text-gray-700 mb-4">
                BioHalo prioritizes your privacy and security. We want to
                clarify that no personal information regarding you, the user, is
                stored in any way through our use of cookies.
              </p>
              <p className="text-gray-700 mb-4">
                The cookies employed on BioHalo are solely for enhancing your
                user experience, allowing us to better understand how you
                navigate our site and improve its functionality.
              </p>
              <p className="text-gray-700">
                By continuing to use BioHalo, you consent to the utilization of
                cookies for the sole purpose of enhancing your browsing
                experience. If you have any concerns or questions regarding our
                cookie usage, please don't hesitate to contact us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-darkGrey">
                Complaints
              </h2>
              <p className="text-gray-700 mb-4">
                If you wish to complain about BioHalo's processing of your
                personal data, please contact:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>
                  The Danish Data Protection Agency ("Datatilsynet"), Carl
                  Jacobsens vej 35, 2500 Valby
                </li>
                <li>Telephone number: 33 19 32 00</li>
                <li>E-mail: dt@datatilsynet.dk</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-darkGrey">
                Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our data practices, please contact us at{" "}
                <a
                  href="mailto:info@BioHalo.io"
                  className="text-tealAccent hover:text-pinkAccent"
                >
                  info@BioHalo.io
                </a>
                .
              </p>
              <p className="text-gray-700 italic">
                Thank you for trusting BioHalo with your information.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
