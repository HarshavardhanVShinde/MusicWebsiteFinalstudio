import { ContactForm } from '@/components/contact-form';
import { Mail, Phone } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Book Free Trial Music Class Online | Arohi Rhythms Kolkata',
  description: 'Book free trial Hindustani classical music class. Contact best music academy in Kolkata. Online & offline classes available. Call now or fill form. Enroll today.',
  keywords: ['book music class', 'free trial music class', 'contact music academy kolkata', 'enroll music classes online', 'classical music admission'],
  openGraph: {
    title: 'Contact Arohi Rhythms | Book Free Trial Music Class',
    description: 'Book free trial Hindustani classical music class in Kolkata',
    url: 'https://arohirhythms.in/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20 pb-12 md:pt-24 lg:pt-32 md:pb-16 lg:pb-24 bg-gradient-to-br from-musical-cream/60 via-background to-musical-cream/40 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-16 text-8xl text-musical-gold musical-float">♪</div>
        <div className="absolute bottom-32 right-20 text-7xl text-musical-bronze musical-float" style={{ animationDelay: '2s' }}>♫</div>
        <div className="absolute top-1/2 right-1/4 text-6xl text-musical-gold musical-float" style={{ animationDelay: '4s' }}>♪</div>
        <div className="absolute bottom-1/4 left-1/3 text-5xl text-musical-bronze musical-float" style={{ animationDelay: '3s' }}>♫</div>
      </div>
      <div className="container max-w-screen-2xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          <div className="space-y-8 md:space-y-10">
            <div className="space-y-6">
              <div className="ornamental-border pb-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-wide bg-gradient-to-r from-musical-gold via-primary to-musical-bronze bg-clip-text text-transparent shimmer-text mb-4">Connect With Our Sangam</h1>
                <div className="w-28 h-1 bg-gradient-to-r from-transparent via-musical-gold to-transparent mb-6"></div>
              </div>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-body">
                We are blessed to hear from every soul drawn to the <em className="text-musical-bronze font-semibold">sacred art of classical music</em>! Whether you&rsquo;re ready to begin your divine journey or seek guidance on our offerings, we welcome you with open hearts and musical spirits.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4 md:gap-6 p-4 md:p-6 rounded-2xl bg-gradient-to-r from-musical-gold/10 via-primary/5 to-musical-bronze/10 hover:from-musical-gold/20 hover:to-musical-bronze/20 transition-all group musical-card">
                <div className="flex-shrink-0 musical-pulse">
                  <Mail className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-musical-bronze font-semibold mb-1 font-body">Sacred Communication</span>
                  <a href="mailto:contact@arohirhythms.com" className="text-base md:text-lg hover:text-musical-gold transition-colors font-medium break-all font-body">contact@arohirhythms.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 md:gap-6 p-4 md:p-6 rounded-2xl bg-gradient-to-r from-musical-bronze/10 via-primary/5 to-musical-gold/10 hover:from-musical-bronze/20 hover:to-musical-gold/20 transition-all group musical-card">
                <div className="flex-shrink-0 musical-pulse" style={{ animationDelay: '1s' }}>
                  <Phone className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-musical-gold font-semibold mb-1 font-body">Divine Connection</span>
                  <a href="tel:+919474010622" className="text-base md:text-lg hover:text-musical-bronze transition-colors font-medium font-body">+91 9474010622</a>
                </div>
              </div>
            </div>
          </div>
          <div className="musical-card p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-4 right-4 text-5xl text-musical-gold/20">♪</div>
            <div className="absolute bottom-4 left-4 text-4xl text-musical-bronze/20">♫</div>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-display font-bold bg-gradient-to-r from-musical-gold to-musical-bronze bg-clip-text text-transparent mb-2">Begin Your Sacred Journey</h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-musical-gold to-musical-bronze mx-auto"></div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
