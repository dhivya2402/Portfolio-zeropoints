export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-4">
              <span className="w-9 h-9 rounded-lg bg-white text-black flex items-center justify-center text-sm">
                ZP
              </span>
              ZeroPoint<span className="text-[#C1121F]">Labs</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building digital systems that help businesses grow.
            </p>
          </div>

          <div>
            <p className="font-semibold mb-4">Quick Links</p>
            <ul className="space-y-2.5 text-gray-400 text-sm">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-4">Services</p>
            <ul className="space-y-2.5 text-gray-400 text-sm">
              <li><a href="/services">Website Development</a></li>
              <li><a href="/services">Custom Software</a></li>
              <li><a href="/services">SEO</a></li>
              <li><a href="/services">Social Media Management</a></li>
              <li><a href="/services">Business Automation</a></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-4">Contact</p>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>hello@zeropointlabs.com</li>
              <li>+91 90253 14278</li>
              <li>Chennai, India</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-gray-500 text-xs pt-8">
          © {new Date().getFullYear()} ZeroPoint Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
