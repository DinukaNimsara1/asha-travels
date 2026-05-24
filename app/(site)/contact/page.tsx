import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { siteConfig } from '@/lib/constants';
import PageHero from '@/components/shared/PageHero';
import LeadForm from '@/components/forms/LeadForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch for a free travel quote. We respond within 24 hours.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        backgroundImage="/images/hero.png" // using hero.png since we didn't generate a specific contact hero
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Details */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900">
              Contact Information
            </h2>
            <p className="text-slate-500 mt-2 mb-8">
              We&apos;d love to hear from you. Our travel consultants are always ready to help you plan your next adventure.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0 text-teal-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-slate-900">Our Office</h3>
                  <p className="text-slate-600 mt-1">{siteConfig.address}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0 text-teal-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-slate-900">Phone</h3>
                  <p className="text-slate-600 mt-1">{siteConfig.phone}</p>
                  <p className="text-slate-600">WhatsApp: {siteConfig.whatsappNumber}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0 text-teal-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-slate-900">Email</h3>
                  <a href={`mailto:${siteConfig.email}`} className="text-teal-600 hover:underline mt-1 block">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0 text-teal-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-slate-900">Working Hours</h3>
                  <p className="text-slate-600 mt-1">{siteConfig.workingHours}</p>
                  <p className="text-slate-500 text-sm mt-0.5">Closed on Sundays and Public Holidays</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-10 rounded-xl overflow-hidden shadow-md border border-slate-100 h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798467128004!2d79.86124197499678!3d6.914682093088716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596b5df1c0c5%3A0x8b0e2fbcb1e24f6e!2sColombo%2003!5e0!3m2!1sen!2slk!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Asha Travels Location"
              ></iframe>
            </div>
          </div>

          {/* Lead Form */}
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8">
            <h2 className="font-serif text-2xl font-bold text-slate-900">
              Request a Quote
            </h2>
            <p className="text-slate-500 mt-2 mb-8">
              Fill in the form and we&apos;ll get back to you within 24 hours.
            </p>
            <LeadForm />
          </div>

        </div>
      </div>
    </>
  );
}
