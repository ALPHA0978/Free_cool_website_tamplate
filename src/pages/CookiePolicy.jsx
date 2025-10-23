/**
 * Cookie Policy Page
 * 
 * Information about cookie usage and user preferences.
 * 
 * @author Manish Raj
 * @version 1.0.0
 */

import React from "react";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6">
        <div className="py-16">
          <h1 className="text-5xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 15, 2024</p>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. What Are Cookies</h2>
              <p className="text-muted-foreground">
                Cookies are small text files that are placed on your computer or mobile device 
                when you visit our website. They are widely used to make websites work more 
                efficiently and provide information to website owners.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. How We Use Cookies</h2>
              <p className="text-muted-foreground mb-4">
                We use cookies for several purposes:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>To ensure our website functions properly</li>
                <li>To remember your preferences and settings</li>
                <li>To analyze website traffic and usage patterns</li>
                <li>To improve user experience</li>
                <li>To provide personalized content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Types of Cookies We Use</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Essential Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies are necessary for the website to function and cannot be switched 
                  off. They are usually set in response to actions made by you such as setting 
                  your privacy preferences or logging in.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Analytics Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies help us understand how visitors interact with our website by 
                  collecting and reporting information anonymously. This helps us improve 
                  our website's performance.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Functional Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies enable enhanced functionality and personalization, such as 
                  remembering your preferences and providing personalized content.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Marketing Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies track your online activity to help advertisers deliver more 
                  relevant advertising or to limit how many times you see an ad.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Third-Party Cookies</h2>
              <p className="text-muted-foreground mb-4">
                We may use third-party services that place cookies on your device:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Google Analytics for website analytics</li>
                <li>Social media platforms for sharing functionality</li>
                <li>Customer support tools</li>
                <li>Marketing and advertising platforms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Managing Cookies</h2>
              <p className="text-muted-foreground mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Browser settings: Most browsers allow you to control cookies through settings</li>
                <li>Cookie preferences: Use our cookie preference center when available</li>
                <li>Opt-out tools: Use third-party opt-out tools for advertising cookies</li>
                <li>Delete cookies: You can delete existing cookies from your browser</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Cookie Retention</h2>
              <p className="text-muted-foreground mb-4">
                Cookies are retained for different periods:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Session cookies: Deleted when you close your browser</li>
                <li>Persistent cookies: Remain until they expire or you delete them</li>
                <li>Analytics cookies: Typically retained for 2 years</li>
                <li>Marketing cookies: Retention varies by provider</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Impact of Disabling Cookies</h2>
              <p className="text-muted-foreground">
                Disabling cookies may affect your experience on our website. Some features 
                may not work properly, and you may not be able to access certain areas 
                or receive personalized content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Updates to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this cookie policy from time to time to reflect changes in 
                technology, legislation, or our business practices. Please check this 
                page regularly for updates.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>Email: privacy@novonixsoft.com</p>
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

export default CookiePolicy;