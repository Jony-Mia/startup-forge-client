'use client';
import { Geist, Geist_Mono } from "next/font/google";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

 const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('');

  const tableOfContents = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'data-collection', label: 'Data Collection' },
    { id: 'usage', label: 'How We Use Data' },
    { id: 'sharing', label: 'Information Sharing' },
    { id: 'security', label: 'Security Measures' },
    { id: 'rights', label: 'Your Rights' },
    { id: 'cookies', label: 'Cookie Policy' },
    { id: 'contact', label: 'Contact Us' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentId = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 120) {
          currentId = section.getAttribute('id') || '';
        }
      });

      setActiveSection(currentId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen bg-surface text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed ${geistSans.className} `}>
      
      {/* TopNavBar */}
    

      {/* Main Layout */}
      <main className="pt-32 pb-24 px-4 md:px-margin-desktop max-w-max-width mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sticky Sidebar Navigation */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 space-y-6">
              <h3 className="text-[12px] leading-[16px] tracking-widest font-semibold uppercase text-primary">
                Table of Contents
              </h3>
              <nav className="flex flex-col gap-4">
                {tableOfContents.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <Link
                      key={item.id}
                      href={`#${item.id}`}
                      className={`text-[14px] leading-[20px] border-l-2 pl-4 transition-all ${
                        isActive
                          ? 'text-primary font-bold border-primary'
                          : 'text-secondary font-medium border-transparent hover:text-primary hover:border-primary-container'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              
              <div className="pt-8 border-t border-outline-variant">
                <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant">
                  <p className="text-[12px] leading-[16px] font-semibold text-secondary mb-2">Last Updated</p>
                  <p className="text-[16px] leading-[24px] font-semibold text-on-surface">October 24, 2024</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Content Area */}
          <article className="lg:col-span-9 max-w-3xl">
            <header className="mb-12">
              <h1 className="text-[48px] leading-[56px] tracking-[-0.02em] font-bold text-on-surface mb-6">
                Privacy Policy
              </h1>
              <p className="text-[18px] leading-[28px] text-secondary">
                At StartupForge, we prioritize the protection of your intellectual property and personal data. This policy outlines how we handle your information with the same precision and care we apply to helping you build your next venture.
              </p>
            </header>

            <div className="prose-content text-[16px] leading-[24px]">
              <section id="introduction">
                <h2>1. Introduction</h2>
                <p>
                  StartupForge (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the StartupForge platform. This Privacy Policy informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
                </p>
                <p>
                  We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.
                </p>
              </section>

              <section id="data-collection">
                <h2>2. Data Collection</h2>
                <p>
                  We collect several different types of information for various purposes to provide and improve our Service to you:
                </p>
                <ul>
                  <li><strong>Personal Identification Information:</strong> Email address, first name and last name, phone number, and address.</li>
                  <li><strong>Usage Data:</strong> Information on how the Service is accessed and used, including your IP address, browser type, and time spent on pages.</li>
                  <li><strong>Startup Metadata:</strong> Project descriptions, industry categories, and team structure provided during the innovation process.</li>
                </ul>
              </section>

              <section id="usage">
                <h2>3. How We Use Data</h2>
                <p>StartupForge uses the collected data for various purposes:</p>
                <ul>
                  <li>To provide and maintain our innovative platform.</li>
                  <li>To notify you about changes to our Service.</li>
                  <li>To allow you to participate in interactive features of our Service.</li>
                  <li>To provide customer support and gather analysis or valuable information so that we can improve our Service.</li>
                  <li>To monitor the usage of our Service and detect, prevent and address technical issues.</li>
                </ul>
              </section>

              {/* Illustrative Image Break */}
              <div className="my-12 rounded-xl overflow-hidden border border-outline-variant aspect-video">
                <div 
                  className="w-full h-full bg-cover bg-center" 
                  aria-label="A clean, minimalist high-key photograph of a modern glass office interior with soft natural light streaming in. The image features a sleek white desk with a single laptop and a small succulent, embodying a professional, transparent, and high-trust corporate environment. The palette is dominated by whites, light grays, and subtle orange accents in the distance."
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA88HJhxd0TaoZEXHXq5cE0F8f-GlsDvgEzPaNOEQpeJbuy4EAAUEYtKsGWc15BVycRvL3pHH65MOv2Wx4329kBynbQYdWB_rHA-_W2VMAlbTBf8Iky6-8VDWfqzHD-ag9o8UQtRbbSxBjiDkmQWpXH3xfGHN9PndVuQHl0IJxEypM7ikqeS-YV7L0Ol_6Ghw4c9YkE4a8BP_F3KZ_C2mQ3QI5xJgpu0g9FJ2qEeN_YyJnfvMQXT__JUqiOR7FEVkeSFvOQ-f88Gw')" }}
                />
              </div>

              <section id="sharing">
                <h2>4. Information Sharing</h2>
                <p>
                  We do not sell your personal data to third parties. We may disclose your personal data in the good faith belief that such action is necessary to:
                </p>
                <ul>
                  <li>Comply with a legal obligation.</li>
                  <li>Protect and defend the rights or property of StartupForge.</li>
                  <li>Prevent or investigate possible wrongdoing in connection with the Service.</li>
                  <li>Protect the personal safety of users of the Service or the public.</li>
                </ul>
              </section>

              <section id="security">
                <h2>5. Security Measures</h2>
                <p>
                  The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, including AES-256 encryption at rest and TLS 1.3 for data in transit, we cannot guarantee its absolute security.
                </p>
              </section>

              <section id="rights">
                <h2>6. Your Rights</h2>
                <p>Depending on your location, you may have the following rights regarding your data:</p>
                <ul>
                  <li>The right to access, update or delete the information we have on you.</li>
                  <li>The right of rectification.</li>
                  <li>The right to object.</li>
                  <li>The right of restriction.</li>
                  <li>The right to data portability.</li>
                  <li>The right to withdraw consent.</li>
                </ul>
              </section>

              <section id="cookies">
                <h2>7. Cookie Policy</h2>
                <p>
                  We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </section>

              <section className="mt-16 p-8 bg-surface-container-lowest border border-outline-variant rounded-xl" id="contact">
                <h2 className="mt-0 text-[24px] leading-[32px] font-semibold text-primary">Contact Us</h2>
                <p className="mb-6">If you have any questions about this Privacy Policy, please contact our Data Protection Officer:</p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-secondary">
                    <span className="material-symbols-outlined text-primary">mail</span>
                    <span className="text-[14px] leading-[20px] font-medium">privacy@startupforge.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-secondary">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                    <span className="text-[14px] leading-[20px] font-medium">101 Innovation Way, San Francisco, CA 94105</span>
                  </div>
                </div>
              </section>
            </div>
          </article>
        </div>
      </main>
      
    </div>
  );
}