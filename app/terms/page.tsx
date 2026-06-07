import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Delta Roblox',
  description: 'Terms and Conditions for using Delta Executor. Please read these terms carefully before using our software.',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
      <h1 className="text-4xl font-bold mb-8 text-center">Terms & Conditions</h1>
      <div className="glass-card rounded-2xl p-8 md:p-12 space-y-6 text-gray-300 text-sm leading-relaxed">
        <p><strong>Last Updated:</strong> June 2026</p>
        
        <h2 className="text-xl font-bold text-white mt-6 mb-3">1. Acceptance of Terms</h2>
        <p>
          By downloading, installing, or using Delta Executor ("the Software"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, do not use the Software.
        </p>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">2. License to Use</h2>
        <p>
          Flextech Inc. grants you a personal, non-exclusive, non-transferable, limited license to download, install, and use the Software strictly in accordance with these terms. The Software is provided for educational and personal use.
        </p>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">3. User Responsibilities & Risks</h2>
        <p>
          You acknowledge that Delta Executor is a third-party modification tool. Using this Software in connection with the Roblox platform may violate the Roblox Terms of Service and could result in action taken against your Roblox account (including temporary or permanent bans).
        </p>
        <p>
          <strong>Flextech Inc. is not responsible for any bans, data loss, or damages resulting from your use of this Software. Use of a secondary/alternate account is strongly recommended.</strong>
        </p>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">4. Intellectual Property</h2>
        <p>
          Delta Executor and all related branding, logos, and features are the intellectual property of Flextech Inc. "Roblox" is a registered trademark of Roblox Corporation. We are not affiliated with, endorsed by, or sponsored by Roblox Corporation in any way.
        </p>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">5. Disclaimer of Warranties</h2>
        <p>
          The Software is provided "AS IS" and "AS AVAILABLE" without any warranties of any kind, whether express or implied. We do not guarantee that the Software will be error-free, uninterrupted, or perfectly secure against detection.
        </p>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">6. Modifications to the Software</h2>
        <p>
          We reserve the right to modify, suspend, or discontinue the Software (or any part thereof) at any time, with or without notice. We are not liable to you or any third party for any modification, suspension, or discontinuance of the Software.
        </p>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">7. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with standard international software distribution laws, without regard to conflict of law provisions.
        </p>
      </div>
    </div>
  );
}
