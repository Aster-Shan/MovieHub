"use client"
import TitleTypography from "@/components/TitleTypography"

const TermsAndConditions = () => {
  return (
    <section className="container mx-auto my-12 px-4 md:px-8">
      <TitleTypography>Terms and Conditions</TitleTypography>

      <p className="mt-4">
        Welcome to MovieHub. By using our website (“Site”) and services, you agree to comply with
        and be bound by the following terms and conditions. Please read these carefully. If you do
        not agree, you should not use our Site.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">1. Use of Our Site</h2>
      <p className="mt-2">
        You may use our Site for personal, non-commercial purposes only. You agree not to use the
        Site for any unlawful or prohibited activities, including violating any applicable laws or
        regulations.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">2. Intellectual Property</h2>
      <p className="mt-2">
        All content on this Site, including text, images, graphics, logos, and videos, is owned by
        MovieHub or its licensors. You may not reproduce, distribute, or create derivative works
        without our prior written permission.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">3. Account Registration</h2>
      <p className="mt-2">
        Some services require you to register an account. You must provide accurate and complete
        information, keep your login details secure, and notify us immediately of any unauthorized
        use of your account.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">4. Bookings and Payments</h2>
      <p className="mt-2">
        By booking tickets or services through our Site, you agree to provide accurate payment
        details. Payments are processed securely, and refunds are subject to our Refund Policy.
        MovieHub is not responsible for errors caused by incorrect data entry.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">5. Limitation of Liability</h2>
      <p className="mt-2">
        MovieHub is not liable for any indirect, incidental, or consequential loss arising from your
        use of our Site or services. While we strive to provide accurate information, we do not
        guarantee that the Site will be error-free or uninterrupted.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">6. Third-Party Links</h2>
      <p className="mt-2">
        Our Site may include links to third-party websites. These are provided for convenience, and
        MovieHubis not responsible for the content or privacy practices of third parties.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">7. Privacy</h2>
      <p className="mt-2">
        Your use of the Site is also governed by our{" "}
        <a href="/policy" className="text-primary underline">
          Privacy Policy
        </a>
        , which explains how we collect, use, and protect your personal data.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">8. Changes to Terms</h2>
      <p className="mt-2">
        We may update these Terms and Conditions from time to time. Any changes will be posted on
        this page, and your continued use of the Site constitutes acceptance of the updated terms.
      </p>

      <p className="mt-8 text-sm text-gray-500">Last Updated: 21/12/2025| MovieHub</p>
    </section>
  )
}

export default TermsAndConditions
