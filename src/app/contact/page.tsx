import { ContactForm } from '@/components/contact-form';
import { Mail, Phone } from 'lucide-react';

export const metadata = {
  title: 'Contact Us - Arohi Rhythms',
  description: 'Get in touch with Arohi Rhythms for enrollments, inquiries, or any other questions.',
};

export default function ContactPage() {
  return (
    <div className="py-12 md:py-24 lg:py-32">
      <div className="container max-w-screen-2xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">Get in Touch</h1>
            <p className="mt-4 text-muted-foreground text-lg">
              We'd love to hear from you! Whether you're ready to enroll or just have a few questions, please don't hesitate to reach out.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <a href="mailto:contact@arohirhythms.com" className="text-lg hover:text-primary transition-colors">contact@arohirhythms.com</a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <a href="tel:+1234567890" className="text-lg hover:text-primary transition-colors">(123) 456-7890</a>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
