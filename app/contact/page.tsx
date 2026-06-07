import { Metadata } from 'next';
import { Mail, MessageSquare, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Delta Roblox',
  description: 'Get in touch with the Delta Executor support team. Join our Discord or send us a message for help with installation or script execution.',
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
        Need help with Delta Executor? Have a business inquiry? Get in touch with our team through the channels below.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="glass-card rounded-2xl p-8 hover:border-primary/50 transition-colors">
          <MessageSquare className="text-primary mb-4" size={32} />
          <h2 className="text-2xl font-bold mb-3">Discord Community</h2>
          <p className="text-gray-400 text-sm mb-6">
            The fastest way to get support is through our official Discord server. Join hundreds of thousands of members to get help, share scripts, and report bugs.
          </p>
          <button className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-6 py-3 rounded-xl font-medium transition-colors w-full">
            Join Delta Discord
          </button>
        </div>

        <div className="glass-card rounded-2xl p-8 hover:border-primary/50 transition-colors">
          <Mail className="text-primary mb-4" size={32} />
          <h2 className="text-2xl font-bold mb-3">Email Support</h2>
          <p className="text-gray-400 text-sm mb-6">
            For business inquiries, DMCA requests, or partnership opportunities, please reach out to our official email address.
          </p>
          <a href="mailto:contact@delta-executor.com" className="block text-center border border-white/20 hover:border-primary text-white hover:text-primary px-6 py-3 rounded-xl font-medium transition-colors w-full">
            contact@delta-executor.com
          </a>
        </div>
      </div>

      <div className="glass-card rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <HelpCircle className="text-primary" size={28} />
          <h2 className="text-2xl font-bold">Frequently Asked Support Questions</h2>
        </div>
        <div className="space-y-4">
          <div className="bg-[#1a1a1a] p-4 rounded-xl border border-white/5">
            <h3 className="font-semibold text-white">Delta is stuck on the loading screen. What do I do?</h3>
            <p className="text-sm text-gray-400 mt-2">Clear the app cache on Android or reinstall using the latest APK. Ensure your internet connection is stable.</p>
          </div>
          <div className="bg-[#1a1a1a] p-4 rounded-xl border border-white/5">
            <h3 className="font-semibold text-white">I get an 'Invalid Key' error.</h3>
            <p className="text-sm text-gray-400 mt-2">Your key has expired. Delta keys last for 24 hours (unless you have Premium). Please generate a new key through the Work.ink page.</p>
          </div>
          <div className="bg-[#1a1a1a] p-4 rounded-xl border border-white/5">
            <h3 className="font-semibold text-white">Roblox Upgrade Error</h3>
            <p className="text-sm text-gray-400 mt-2">This means Roblox pushed a new patch and your current Delta version is out of date. Download the latest version (v2.720) from our home page.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
