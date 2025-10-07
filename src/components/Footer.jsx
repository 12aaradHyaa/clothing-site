import React from "react";

// Import Google Fonts dynamically
const FontLink = () => (
  <link
    href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Libre+Baskerville:wght@400;700&display=swap"
    rel="stylesheet"
  />
);

const Footer = () => {
  return (
    <>
      <FontLink />

      {/* Newsletter Section */}
      <section className="py-[60px] px-5 bg-black text-white text-center font-['Playfair_Display','Libre_Baskerville',serif]">
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-[2.5rem] mb-4">Stay Updated 🎀</h2>
          <p className="text-[1.2rem] mb-[30px] opacity-90">
            Subscribe to our newsletter for exclusive offers and latest collections
          </p>
          <div className="flex gap-4 max-w-[400px] mx-auto max-[1024px]:flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 py-[15px] px-5 rounded-full text-[1rem] outline-none border-none font-['Playfair_Display','Libre_Baskerville',serif]"
            />
            <button className="bg-[#2c3e50] text-white font-semibold py-[15px] px-[30px] rounded-full text-[1rem] transition-all duration-300 hover:bg-gradient-to-br hover:from-[#ff6b6b] hover:to-[#ee5a24] hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(255,107,107,0.3)]">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-[#333] py-[50px] px-5 border-t border-[#e0e0e0] font-['Playfair_Display','Libre_Baskerville',serif]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 mb-[30px] max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
            {/* Download App Section */}
            <div>
              <h3 className="text-[1.3rem] mb-5 text-[#2c3e50] font-semibold">Download Our APP</h3>
              <div className="flex flex-col gap-2.5 text-[#2c3e50]">
                <a href="#" className="pb-2 border-b border-[#e0e0e0] hover:text-[#ff6b6b]">Google Play Store</a>
                <a href="#" className="pb-2 border-b border-[#e0e0e0] hover:text-[#ff6b6b]">App Store</a>
              </div>
            </div>

            {/* Information */}
            <div>
              <h3 className="text-[1.3rem] mb-5 text-[#2c3e50] font-semibold">Information</h3>
              <ul className="list-none p-0">
                {["About Us","Blog","FAQs","Contact Us","Influencer Collab"].map((item, i) => (
                  <li key={i} className="mb-2.5">
                    <a href="#" className="text-[#666] hover:text-[#ff6b6b] transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-[1.3rem] mb-5 text-[#2c3e50] font-semibold">Quick Links</h3>
              <ul className="list-none p-0">
                {[
                  "Privacy Policy",
                  "Shipping & Delivery",
                  "Disclaimer",
                  "Return Policy",
                  "Refunds & Cancellations",
                  "Terms & Conditions",
                ].map((item, i) => (
                  <li key={i} className="mb-2.5">
                    <a href="#" className="text-[#666] hover:text-[#ff6b6b] transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <h3 className="text-[1.3rem] mb-5 text-[#2c3e50] font-semibold">Get In Touch</h3>
              <div className="text-[#666] leading-[1.6]">
                <p className="mb-[10px]">
                  <strong className="text-[#2c3e50]">Call or WhatsApp:</strong>{" "}
                  <a href="tel:+919999899908" className="text-[#ff6b6b] hover:underline">+91-99998 99908</a>
                </p>
                <p className="mb-[10px]">
                  <strong className="text-[#2c3e50]">Email Us:</strong>{" "}
                  <a href="mailto:info@nawazish.com" className="text-[#ff6b6b] hover:underline">info@nawazish.com</a>
                </p>
                <div className="my-[15px]">
                  <p><strong className="text-[#2c3e50]">Address:</strong></p>
                  <p>C-741, L Road, Mahanagar, Near Channilal Chauraha, Mahanagar Extension, Lucknow – 226006, Uttar Pradesh, India</p>
                </div>
                <a href="#" className="text-[#ff6b6b] font-medium inline-block mt-[10px] hover:underline">
                  Have Confusion? Frequently Ask Questions
                </a>
              </div>
            </div>
          </div>

          {/* Email Subscription Row */}
          <div className="flex items-center justify-between py-5 border-y border-[#e0e0e0] my-5 max-[1024px]:flex-col max-[1024px]:gap-4 max-[1024px]:text-center">
            <span className="text-[#4f4e4e] text-[1rem]">Subscribe & get special offers.</span>
            <div className="flex gap-[10px] items-center max-[1024px]:justify-center max-[480px]:flex-col">
              <input
                type="email"
                placeholder="Email"
                className="py-[10px] px-[15px] border border-[#ddd] rounded text-[0.9rem] w-[200px] outline-none focus:border-[#ff6b6b] max-[768px]:w-[180px] max-[480px]:w-full"
              />
              <button className="bg-[#ff6b6b] text-white border-none py-[10px] px-[15px] rounded text-[1rem] cursor-pointer transition-all hover:bg-[#e55a5a]">
                →
              </button>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="my-5 text-center">
            <div className="flex flex-wrap justify-center gap-[15px] items-center max-[768px]:gap-[12px] max-[480px]:gap-[10px]">
              {["Amazon", "Visa", "Mastercard", "PayPal", "Google Pay", "Apple Pay"].map((p, i) => (
                <span
                  key={i}
                  className="text-[#454444] text-[0.9rem] px-[10px] py-[5px] border border-[#e0e0e0] rounded bg-[#f9f9f9] max-[768px]:text-[0.8rem] max-[480px]:text-[0.75rem]"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Social Media & Copyright */}
          <div className="flex justify-between items-center pt-5 border-t border-[#e0e0e0] flex-wrap gap-5 max-[1024px]:flex-col max-[1024px]:text-center">
            <div className="flex gap-5 max-[480px]:flex-wrap max-[480px]:justify-center">
              {["Facebook", "Twitter", "Instagram", "YouTube", "Pinterest"].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-[#545454] text-[0.9rem] hover:text-[#ff6b6b] transition-colors max-[480px]:text-[0.85rem]"
                >
                  {s}
                </a>
              ))}
            </div>
            <p className="text-[#666] text-[0.9rem] m-0 max-[480px]:text-[0.8rem]">
              &copy; 2025 Nawazish, All rights reserved. Powered by NirvoTech.com
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
