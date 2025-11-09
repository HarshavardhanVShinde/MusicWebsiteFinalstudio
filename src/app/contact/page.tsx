import { ContactForm } from '@/components/contact-form';
import { Mail, Phone } from 'lucide-react';

export const metadata = {
  title: 'Contact Us - Arohi Rhythms',
  description: 'Get in touch with Arohi Rhythms for enrollments, inquiries, or any other questions.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Get in Touch</h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                We'd love to hear from you! Whether you're ready to enroll or just have a few questions, please don't hesitate to reach out.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors group">
                <div className="p-2 md:p-3 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                  <Mail className="h-5 w-5 md:h-6 md:w-6 text-primary group-hover:text-white" />
                </div>
                <a href="mailto:contact@arohirhythms.com" className="text-sm md:text-lg hover:text-primary transition-colors font-medium break-all">contact@arohirhythms.com</a>
              </div>
              <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors group">
                <div className="p-2 md:p-3 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                  <Phone className="h-5 w-5 md:h-6 md:w-6 text-primary group-hover:text-white" />
                </div>
                <a href="tel:+1234567890" className="text-sm md:text-lg hover:text-primary transition-colors font-medium">(123) 456-7890</a>
              </div>
            </div>
          </div>
          <div className="bg-card p-6 md:p-8 rounded-2xl shadow-xl border border-border/50">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
