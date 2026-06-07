import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Delta Roblox',
  description: 'Learn more about Flextech Inc., the team behind Delta Executor, the most popular and powerful Roblox script injector.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
      <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
      <div className="glass-card rounded-2xl p-8 md:p-12 space-y-6 text-gray-300 leading-relaxed">
        <p>
          Welcome to <strong className="text-white">Delta Roblox</strong>, the home of the world's most advanced and reliable Roblox executor. Developed and maintained by the dedicated team at Flextech Inc., Delta Executor has grown to become the industry standard for cross-platform script injection in 2026.
        </p>
        <p>
          Our mission is simple: to provide gamers with a safe, powerful, and accessible tool to enhance their Roblox experience. We believe that players should have the freedom to customize their gameplay, which is why we offer our core executor completely free to use across Android, iOS, Windows, and Mac.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Why We Stand Out</h2>
        <p>
          Delta’s popularity is no accident. We have built our reputation on a combination of proven stability, frequent updates, and genuine community investment. Our Delta Stable Build consistently delivers smooth, crash-free sessions. We push performance patches and security updates constantly to ensure compatibility immediately after every Roblox update.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Our Community</h2>
        <p>
          The Delta Discord Server is the heart of our operations, hosting hundreds of thousands of active members. It is a place where users share scripts, report bugs directly to developers, and support one another. This level of engagement allows us to continually improve and remain the #1 choice for Roblox players worldwide.
        </p>
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="font-semibold text-white">Delta Roblox by Flextech Inc.</p>
          <p className="text-sm mt-2">Empowering gamers since our inception.</p>
        </div>
      </div>
    </div>
  );
}
