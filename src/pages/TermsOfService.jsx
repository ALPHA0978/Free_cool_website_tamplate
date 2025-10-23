/**
 * Terms of Service Page
 * 
 * Legal terms and conditions for using our services.
 * 
 * @author Manish Raj
 * @version 1.0.0
 */

import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6">
        <div className="py-16">
          <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 15, 2024</p>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using our services, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Services Description</h2>
              <p className="text-muted-foreground mb-4">
                We provide software development services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Web application development</li>
                <li>Mobile application development</li>
                <li>Cloud solutions and infrastructure</li>
                <li>Technology consulting</li>
                <li>Maintenance and support services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
              <p className="text-muted-foreground mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Not engage in any harmful or disruptive activities</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
              <p className="text-muted-foreground mb-4">
                Payment terms are as follows:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Payments are due according to the agreed schedule</li>
                <li>Late payments may incur additional fees</li>
                <li>All prices are exclusive of applicable taxes</li>
                <li>Refunds are subject to our refund policy</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All intellectual property rights in our services and materials remain our property 
                or that of our licensors. Upon full payment, you receive the agreed-upon rights 
                to use the delivered software as specified in your project agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Confidentiality</h2>
              <p className="text-muted-foreground">
                We maintain strict confidentiality regarding your project information and business data. 
                We will not disclose any confidential information to third parties without your 
                explicit consent, except as required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                Our liability is limited to the amount paid for our services. We are not liable 
                for any indirect, incidental, special, or consequential damages arising from 
                the use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
              <p className="text-muted-foreground">
                Either party may terminate the service agreement with appropriate notice as 
                specified in the project contract. Upon termination, you remain responsible 
                for any outstanding payments.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>
              <p className="text-muted-foreground">
                These terms are governed by the laws of India. Any disputes will be resolved 
                through binding arbitration in accordance with local arbitration rules.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Changes will be effective 
                immediately upon posting. Your continued use of our services constitutes acceptance 
                of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these terms, please contact us at:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>Email: legal@novonixsoft.com</p>
                <p>Phone: +91 (55) ******7</p>
                <p>Address: 123 X-Street, Up, India 282007</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;