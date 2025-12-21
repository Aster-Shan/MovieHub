import { Button } from "@/components/ui/button"
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item"
import Image from "next/image"
const footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        {/* FAQ Section */}
        <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-700">
          <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <ul className="space-y-3 text-gray-500 dark:text-gray-400">
            <li>
              <strong>Q:</strong> Do I need an account to book a movie ticket? <br />
              <strong>A:</strong> No, our system allows booking without creating an account.
            </li>
            <li>
              <strong>Q:</strong> Can I cancel or modify my booking? <br />
              <strong>A:</strong> Yes, you can cancel or modify bookings within 24 hours of
              purchase.
            </li>
            <li>
              <strong>Q:</strong> How can I contact support? <br />
              <strong>A:</strong> You can reach us via our contact page or email
              support@example.com.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <Item>
            <ItemContent>
              <ItemTitle>Default Variant</ItemTitle>
              <ItemDescription>
                Standard styling with subtle background and borders.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="outline" size="sm">
                Open
              </Button>
            </ItemActions>
          </Item>
          <Item variant="outline">
            <ItemContent>
              <ItemTitle>Outline Variant</ItemTitle>
              <ItemDescription>
                Outlined style with clear borders and transparent background.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="outline" size="sm">
                Open
              </Button>
            </ItemActions>
          </Item>
          <Item variant="muted">
            <ItemContent>
              <ItemTitle>Muted Variant</ItemTitle>
              <ItemDescription>
                Subdued appearance with muted colors for secondary content.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="outline" size="sm">
                Open
              </Button>
            </ItemActions>
          </Item>
        </div>
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
                Resources
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="https://nextjs.org/" className="hover:underline">
                    Next.js
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://www.prisma.io/" className="hover:underline">
                    Prisma
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://ui.shadcn.com/" className="hover:underline">
                    Shadcn/ui
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Follow us
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://github.com/nainghtetlinn/movie-booking-system"
                    className="hover:underline">
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
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
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
            <a href="https://flowbite.com/" className="hover:underline">
              Movie Booking System™
            </a>
            . All Rights Reserved.
          </span>
          <div className="mt-4 flex sm:mt-0 sm:justify-center">
            {/* Social Icons */}
            {/* Keep your existing social icons here */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer
