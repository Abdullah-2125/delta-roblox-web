import Link from 'next/link';
import { Download, Shield, Zap, Monitor, Smartphone, Globe, Code, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="pt-12 pb-20 text-center animate-fade-in relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background blur-2xl"></div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Delta Roblox <span className="text-primary">(Delta Executor)</span>
          <br className="hidden md:block" />
          <span className="text-3xl md:text-5xl text-gray-300 block mt-4">v2.720 – Download Latest Version [June 2026]</span>
        </h1>
        <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          The most powerful, cross-platform third-party script injector for Roblox. Run custom Lua scripts safely with our advanced execution engine.
        </p>
        <div className="flex flex-col justify-center items-center gap-4">
          <Link href="#download" className="bg-primary hover:bg-primaryHover text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] flex items-center gap-2">
            <Download size={24} /> Download For Android v.2.720
          </Link>
          <Link href="https://thedeltaroblox.com/wp-content/uploads/2026/06/Delta-Executor-iOS-v2.719.ipa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors underline underline-offset-4 flex items-center gap-2 mt-2">
            <Download size={16} /> Download iOS v2.719
          </Link>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="glass-card p-4 rounded-xl text-center">
            <p className="text-sm text-gray-400">Application Name</p>
            <p className="font-semibold text-lg">Delta Roblox</p>
          </div>
          <div className="glass-card p-4 rounded-xl text-center">
            <p className="text-sm text-gray-400">Latest Version</p>
            <p className="font-semibold text-lg text-primary">v2.7.20</p>
          </div>
          <div className="glass-card p-4 rounded-xl text-center">
            <p className="text-sm text-gray-400">Compatibility</p>
            <p className="font-semibold text-lg">Android 5.0+</p>
          </div>
          <div className="glass-card p-4 rounded-xl text-center">
            <p className="text-sm text-gray-400">Price</p>
            <p className="font-semibold text-lg">Free</p>
          </div>
        </div>
      </section>

      {/* What is Delta */}
      <section className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Code className="text-primary" size={32} /> What is Delta Roblox / Delta Executor?
        </h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Delta Roblox and Delta Executor are two names for the exact same tool. People searching for "Delta Roblox" associate it with the Roblox game platform, while "Delta Executor" is the product's official brand name developed and maintained by Flextech Inc. You might also hear it referred to as Delta X, Delta X Executor, Delta Mobile Executor, or simply the Delta APK. Regardless of what you call it, it all points to the same powerful Roblox utility app.
          </p>
          <p>
            A Roblox executor is essentially a third-party script injector that allows players to run custom Lua scripts inside Roblox games. The Roblox engine does not natively allow external code execution, so an executor like Delta bypasses that limitation through Roblox script injection — giving players access to features like auto farming, teleportation, speed boosts, ESP scripts, and much more that simply are not possible through standard gameplay.
          </p>
          <div className="bg-[#1a1a1a] p-6 rounded-xl border border-white/5 mt-6 border-l-4 border-l-primary">
            <h3 className="font-semibold text-white mb-2 flex items-center gap-2"><Zap size={20} className="text-primary"/> How it works</h3>
            <p className="text-sm">You open Delta Executor on your device and verify your Delta Key. Then you launch Roblox and join any supported game. Once inside, you tap the Inject button inside Delta, which connects the Delta Execution Engine to the Roblox engine's memory. From there, you paste or select a script from the Delta Script Hub and hit Execute. The script runs inside your game in real time through a controlled execution environment and sandbox execution model, which helps minimize detection and prevent runtime errors.</p>
          </div>
        </div>
      </section>

      {/* What's New */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">What's New in Delta Executor v2.720 <span className="text-gray-400 text-xl block mt-2">(May 2026 Update)</span></h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="glass-card rounded-2xl p-8">
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="mt-1 bg-primary/20 p-2 rounded-lg text-primary"><Zap size={24} /></div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Enhanced Performance Core</h3>
                  <p className="text-gray-400 text-sm mt-1">Faster script injection, optimized resource usage, and smoother overall performance.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 bg-primary/20 p-2 rounded-lg text-primary"><Code size={24} /></div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Extended API Library</h3>
                  <p className="text-gray-400 text-sm mt-1">Access to new functions for advanced script control and improved Roblox compatibility.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 bg-primary/20 p-2 rounded-lg text-primary"><Monitor size={24} /></div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Emulator Support</h3>
                  <p className="text-gray-400 text-sm mt-1">Improves emulator support for BlueStacks and LDPlayer, and enhances iOS 17+ compatibility.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 bg-primary/20 p-2 rounded-lg text-primary"><Shield size={24} /></div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Critical Stability Patches</h3>
                  <p className="text-gray-400 text-sm mt-1">Better anti-crash protection, resolving bugs and ensuring a smoother experience with a cleaner key system.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="glass-card rounded-2xl p-8 bg-gradient-to-br from-[#111] to-[#0a0a0a] flex items-center justify-center min-h-[300px]">
             {/* Placeholder for Delta update graphic */}
             <div className="text-center">
               <Shield size={64} className="text-primary mx-auto mb-4 opacity-80" />
               <p className="text-2xl font-bold">Delta 2.720</p>
               <p className="text-gray-400">The biggest update yet.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-3xl font-bold mb-10 text-center">Key Features of Delta Roblox Executor</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-xl hover:border-primary/50 transition-colors">
            <Zap className="text-primary mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Advanced Execution Engine</h3>
            <p className="text-gray-400 text-sm">Full Lua support, multi-script execution, built-in script editor, execution console, and auto-execute feature.</p>
          </div>
          <div className="glass-card p-6 rounded-xl hover:border-primary/50 transition-colors">
            <Globe className="text-primary mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Cross-Platform Compatibility</h3>
            <p className="text-gray-400 text-sm">Run Delta on Android, iOS, Windows, and Mac with APK, DMG, and PC support for different environments.</p>
          </div>
          <div className="glass-card p-6 rounded-xl hover:border-primary/50 transition-colors">
            <Monitor className="text-primary mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Performance & Stability</h3>
            <p className="text-gray-400 text-sm">Ultra FPS Mode for smoother gameplay, Quantum Crash Shield for crash prevention, and optimized memory handling.</p>
          </div>
          <div className="glass-card p-6 rounded-xl hover:border-primary/50 transition-colors">
            <Shield className="text-primary mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Security & Anti-Detection</h3>
            <p className="text-gray-400 text-sm">Safe APK verification, stealth mode, and reduced detection footprint during script execution.</p>
          </div>
          <div className="glass-card p-6 rounded-xl hover:border-primary/50 transition-colors">
            <Code className="text-primary mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Built-In CloudForge Library</h3>
            <p className="text-gray-400 text-sm">Cloud-based collection of ready-to-use scripts for popular games like Blox Fruits, Pet Simulator X, and Brookhaven RP.</p>
          </div>
          <div className="glass-card p-6 rounded-xl hover:border-primary/50 transition-colors">
            <Smartphone className="text-primary mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Access Optimization</h3>
            <p className="text-gray-400 text-sm">Faster key verification, streamlined access flow, and improved usability for users across all supported platforms.</p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Delta Executor vs Other Roblox Executors <span className="text-gray-400 text-xl block mt-2">(2026 Comparison)</span></h2>
        <div className="overflow-x-auto rounded-xl border border-white/10 glass-card">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1a1a1a] text-white">
                <th className="p-4 border-b border-white/10 font-semibold">Feature</th>
                <th className="p-4 border-b border-white/10 font-semibold text-primary">Best Option</th>
                <th className="p-4 border-b border-white/10 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 border-b border-white/5">Android Support</td>
                <td className="p-4 border-b border-white/5 font-medium">Delta, Arceus X, Hydrogen, Fluxus</td>
                <td className="p-4 border-b border-white/5">All supported</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 border-b border-white/5">iOS Support</td>
                <td className="p-4 border-b border-white/5 font-medium text-primary">Delta</td>
                <td className="p-4 border-b border-white/5">Only one with iOS support</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 border-b border-white/5">PC Support</td>
                <td className="p-4 border-b border-white/5 font-medium text-primary">Delta, Codex</td>
                <td className="p-4 border-b border-white/5">Supported</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 border-b border-white/5">Mac Support</td>
                <td className="p-4 border-b border-white/5 font-medium text-primary">Delta</td>
                <td className="p-4 border-b border-white/5">Supported</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 border-b border-white/5">Script Library</td>
                <td className="p-4 border-b border-white/5 font-medium text-primary">Delta</td>
                <td className="p-4 border-b border-white/5">Most complete library</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 border-b border-white/5">Free to Use</td>
                <td className="p-4 border-b border-white/5 font-medium">All Executors</td>
                <td className="p-4 border-b border-white/5">No cost</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 border-b border-white/5">Most Versatile</td>
                <td className="p-4 border-b border-white/5 font-medium text-primary">Delta</td>
                <td className="p-4 border-b border-white/5">Android, iOS, PC, Mac</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="glass-card rounded-3xl p-8 md:p-12 text-center border-primary/20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent -z-10 blur-xl"></div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Download Delta Roblox / Delta Executor</h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">Complete guide to downloading and installing Delta Executor on every supported platform. Choose your platform below to get started.</p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-[#1a1a1a] border border-white/10 p-6 rounded-2xl hover:border-primary/50 transition-all text-left group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Smartphone size={28} className="text-primary" />
                <h3 className="text-xl font-bold text-white">Android APK</h3>
              </div>
              <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-bold">v2.720</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">Requires Android 7.0+, 4GB RAM minimum. Android 8.0 with 6GB RAM recommended.</p>
            <button className="w-full bg-white/5 hover:bg-primary text-white font-medium py-3 rounded-xl transition-colors flex justify-center items-center gap-2 group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <Download size={18} /> Download for Android
            </button>
          </div>

          <div className="bg-[#1a1a1a] border border-white/10 p-6 rounded-2xl hover:border-primary/50 transition-all text-left group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Smartphone size={28} className="text-white" />
                <h3 className="text-xl font-bold text-white">iOS Support</h3>
              </div>
              <span className="text-xs bg-white/10 text-white px-2 py-1 rounded-full font-bold">iOS 17+</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">Direct install method available. Requires enterprise app trust setup in Settings.</p>
            <button className="w-full bg-white/5 hover:bg-white/10 text-white font-medium py-3 rounded-xl transition-colors flex justify-center items-center gap-2">
              <Download size={18} /> Download for iOS
            </button>
          </div>

          <div className="bg-[#1a1a1a] border border-white/10 p-6 rounded-2xl hover:border-primary/50 transition-all text-left group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Monitor size={28} className="text-blue-400" />
                <h3 className="text-xl font-bold text-white">Windows PC</h3>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-6">Download the EXE file. May require temporarily disabling Windows Defender during install.</p>
            <button className="w-full bg-white/5 hover:bg-white/10 text-white font-medium py-3 rounded-xl transition-colors flex justify-center items-center gap-2">
              <Download size={18} /> Download for Windows
            </button>
          </div>

          <div className="bg-[#1a1a1a] border border-white/10 p-6 rounded-2xl hover:border-primary/50 transition-all text-left group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Monitor size={28} className="text-gray-300" />
                <h3 className="text-xl font-bold text-white">Mac DMG</h3>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-6">Download the DMG file. Requires enabling app execution in Security & Privacy settings.</p>
            <button className="w-full bg-white/5 hover:bg-white/10 text-white font-medium py-3 rounded-xl transition-colors flex justify-center items-center gap-2">
              <Download size={18} /> Download for Mac
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto pb-10">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-2">What is Delta Roblox?</h3>
            <p className="text-gray-400 text-sm">It is another name for Delta Executor — a Roblox script execution tool developed by Flextech Inc.</p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-2">Are Delta Roblox and Delta Executor the Same?</h3>
            <p className="text-gray-400 text-sm">Yes, completely. They refer to the exact same product.</p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-2">Is Delta Executor Safe in 2026?</h3>
            <p className="text-gray-400 text-sm">From a device standpoint, yes — it uses Virus Total-verified APKs and sandbox execution. From a Roblox account standpoint, there is always some ban risk.</p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-2">Can Delta Executor Get You Banned?</h3>
            <p className="text-gray-400 text-sm">Yes, a Roblox ban risk exists. Using a secondary account is strongly recommended.</p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-2">Does Delta Executor Work on iPhone?</h3>
            <p className="text-gray-400 text-sm">Yes, on iOS 17+ via the direct install method and enterprise app trust setup.</p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-2">Why Is My Delta Key Not Working?</h3>
            <p className="text-gray-400 text-sm">It has most likely expired. Generate a new one through the Work.ink page.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
