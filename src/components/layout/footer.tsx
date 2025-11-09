import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import logoImage from '@/components/logo-website.png';

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-b from-card to-secondary/30">
      <div className="container max-w-screen-2xl py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="flex flex-col gap-4 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative w-12 h-12 bg-transparent">
                  <Image
                    src={logoImage}
                    alt="Arohi Rhythms"
                    fill
                    sizes="48px"
                    className="object-contain bg-transparent transition-transform group-hover:scale-110"
                  />
                </div>
              <span className="text-2xl font-bold font-headline bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Arohi Rhythms
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Nurturing musical excellence through authentic Indian classical training and personalized guidance.
            </p>
          </div>
          
          <div>
            <h3 className="font-headline font-semibold mb-4 text-base">Quick Links</h3>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block">Home</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link href="/classes" className="text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block">Classes</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline font-semibold mb-4 text-base">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-primary transition-colors">(123) 456-7890</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:info@arohirhythms.com" className="text-sm text-muted-foreground hover:text-primary transition-colors break-all">info@arohirhythms.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Mumbai, India</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline font-semibold mb-4 text-base">Connect With Us</h3>
            <div className="flex flex-wrap gap-3 mb-4">
              <Link href="#" aria-label="Facebook" className="p-2.5 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all hover:scale-110">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" aria-label="Instagram" className="p-2.5 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all hover:scale-110">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" aria-label="YouTube" className="p-2.5 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all hover:scale-110">
                <Youtube className="h-4 w-4" />
              </Link>
              <Link href="#" aria-label="Twitter" className="p-2.5 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all hover:scale-110">
                <Twitter className="h-4 w-4" />
              </Link>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Follow us for updates, performances, and musical inspiration.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} Arohi Rhythms. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
