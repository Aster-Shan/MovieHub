import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"
import Link from "next/link"
import { FaEnvelope, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa"
const footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        {/* FAQ Section */}
        <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-700">
          <h2 className="mb-4 text-lg font-semibold text-red-500 dark:text-white">
            Frequently Asked Questions
          </h2>
          <ul className="space-y-3 text-gray-500 dark:text-gray-400"></ul>
        </div>

        {/*Accordion*/}
        <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>How can I request a refund for my booking?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Refund requests are possible for eligible tickets. You can submit a refund form from
                your
                <strong> Bookings Dashboard</strong> or email our support team at
                <strong> support@example.com</strong>.
              </p>
              <p>
                Refund approval depends on cinema rules, showtime deadlines, and ticket type. Most
                refunds are processed within <strong>3–7 business days</strong>.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Can I cancel or change my booking after payment?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Yes! Bookings can be modified or cancelled up to{" "}
                <strong>2 hours before showtime</strong>. You can change seats, update showtimes, or
                cancel entirely through your dashboard.
              </p>
              <p>
                Cancellation fees may apply depending on the theatre partner and day of the week.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Do I need an account to buy a movie ticket?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                No account is required for quick bookings. However, creating an account gives you
                access to:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-sm">
                <li>Faster checkout experience</li>
                <li>View and download past ticket receipts</li>
                <li>Access loyalty points and rewards</li>
                <li>Save preferred cinemas and payment methods</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>How do I receive my movie ticket?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Once payment is completed, tickets are instantly sent to your email and also
                available in your account dashboard under <strong>&quot;My Tickets&quot;</strong>.
              </p>
              <p>You can show the QR code at the cinema counter to enter.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>We accept all major payment methods, including:</p>
              <ul className="list-disc space-y-2 pl-6 text-sm">
                <li>Credit/Debit Cards (Visa, MasterCard, Amex)</li>
                <li>UPI / Digital Wallets</li>
                <li>Net Banking</li>
                <li>Gift Cards & Promo Codes</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Is my payment information secure?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Absolutely. We use bank-grade SSL encryption and never store your full card details.
              </p>
              <p>Our system meets PCI-DSS and industry security standards.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/** Contact Footer */}
        <div className="mt-10 lg:flex lg:justify-between">
          <div className="mb-6 lg:mb-0">
            <a href="/" className="flex items-center">
              <Image
                src="https://flowbite.com/docs/images/logo.svg"
                className="me-3 aspect-square"
                width={32}
                height={32}
                alt="FlowBite Logo"
              />
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                Movie Booking System
              </span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Follow us
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4 flex items-center space-x-2">
                  <FaFacebookF className="text-blue-600" />
                  <a href="" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li className="mb-4 flex items-center space-x-2">
                  <FaInstagram className="text-pink-500" />
                  <a href="" className="hover:underline">
                    Instagram
                  </a>
                </li>
                <li className="mb-4 flex items-center space-x-2">
                  <FaEnvelope className="text-gray-700" />
                  <a href="" className="hover:underline">
                    Email
                  </a>
                </li>
                <li className="mb-4 flex items-center space-x-2">
                  <FaTiktok className="text-black" />
                  <a href="" className="hover:underline">
                    Tiktok
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Resources
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="https://github.com/Aster-Shan/MovieHub" className="hover:underline">
                    Github
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Legal
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="/policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a href="/tnc" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        {/* Footer Bottom */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © {new Date().getFullYear()}{" "}
            <a href="" className="hover:underline">
              Movie Booking System™
            </a>
            . All Rights Reserved.
          </span>
          <div className="mt-4 flex sm:mt-0 sm:justify-center"></div>
        </div>
      </div>
    </footer>
  )
}

export default footer
