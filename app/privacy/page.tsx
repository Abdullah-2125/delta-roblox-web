import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Delta Roblox',
  description: 'Privacy Policy for Delta Executor. Learn how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
      <div className="glass-card rounded-2xl p-8 md:p-12 space-y-6 text-gray-300 text-sm leading-relaxed">
        <p><strong>Last Updated:</strong> June 2026</p>
        
        <h2 className="text-xl font-bold text-white mt-6 mb-3">1. Information We Collect</h2>
        <p>
          When you use Delta Executor (developed by Flextech Inc.), we may collect non-personally identifiable information such as your device type, operating system version, and anonymous crash reports to help us improve the stability of our application.
        </p>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">2. How We Use Your Information</h2>
        <p>
          The information we collect is strictly used to:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Provide, maintain, and improve the Delta Executor service.</li>
          <li>Debug crashes and optimize the Quantum Crash Shield and Execution Engine.</li>
          <li>Verify your Delta Key system status.</li>
        </ul>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">3. CloudForge Library & Scripts</h2>
        <p>
          Scripts executed through Delta are run locally on your device in a sandboxed environment. If you use Delta Premium's cloud sync features, your saved scripts are securely stored in our cloud infrastructure to sync across your devices. We do not analyze or share your private scripts.
        </p>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">4. Third-Party Services</h2>
        <p>
          Our application may contain links to third-party services (such as key generation systems like Work.ink). These third-party sites have their own privacy policies, and we do not accept any responsibility or liability for their policies.
        </p>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">5. Data Security</h2>
        <p>
          We implement industry-standard security measures to protect the information we collect. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee its absolute security.
        </p>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">6. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
        </p>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">7. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us via our official Discord server or email support.
        </p>
      </div>
    </div>
  );
}
