import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import logoImage from '@/components/logo-website.png';

export function Footer() {
  return (
    <footer className="border-t border-musical-gold/20 bg-gradient-to-b from-musical-cream/50 via-card to-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-8 left-16 text-6xl text-musical-gold musical-float">♪</div>
        <div className="absolute bottom-12 right-20 text-5xl text-musical-bronze musical-float" style={{animationDelay: '2s'}}>♫</div>
        <div className="absolute top-20 right-1/3 text-4xl text-musical-gold musical-float" style={{animationDelay: '4s'}}>♪</div>
      </div>
      <div className="container max-w-screen-2xl py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
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
              <span className="text-2xl font-bold font-display bg-gradient-to-r from-musical-gold via-primary to-musical-bronze bg-clip-text text-transparent">
                Arohi Rhythms
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed font-body">
              Nurturing musical souls through the sacred art of <em className="text-musical-bronze">Hindustani classical music</em> and the timeless tradition of personalized <strong>guru-shishya</strong> guidance.
            </p>
          </div>
          
          <div>
            <h3 className="font-display font-semibold mb-6 text-lg text-musical-bronze">Sacred Pathways</h3>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-musical-gold transition-all hover:translate-x-1 inline-block font-body flex items-center gap-2"><span className="text-musical-gold/50">♪</span> Home</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-musical-gold transition-all hover:translate-x-1 inline-block font-body flex items-center gap-2"><span className="text-musical-bronze/50">♫</span> About Us</Link></li>
              <li><Link href="/classes" className="text-sm text-muted-foreground hover:text-musical-gold transition-all hover:translate-x-1 inline-block font-body flex items-center gap-2"><span className="text-musical-gold/50">♪</span> Classes</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-musical-gold transition-all hover:translate-x-1 inline-block font-body flex items-center gap-2"><span className="text-musical-bronze/50">♫</span> Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold mb-6 text-lg text-musical-bronze">Connect With Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-musical-gold mt-0.5 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-musical-gold transition-colors font-body">(123) 456-7890</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-musical-bronze mt-0.5 flex-shrink-0" />
                <a href="mailto:info@arohirhythms.com" className="text-sm text-muted-foreground hover:text-musical-gold transition-colors break-all font-body">info@arohirhythms.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-musical-gold mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground font-body">Kolkata, India</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold mb-6 text-lg text-musical-bronze">Musical Community</h3>
            <div className="flex flex-wrap gap-3 mb-4">
              <Link href="#" aria-label="Facebook" className="p-3 rounded-full bg-musical-gold/10 hover:bg-musical-gold hover:text-white transition-all hover:scale-110 musical-pulse">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Instagram" className="p-3 rounded-full bg-musical-bronze/10 hover:bg-musical-bronze hover:text-white transition-all hover:scale-110 musical-pulse" style={{animationDelay: '0.5s'}}>
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="YouTube" className="p-3 rounded-full bg-musical-gold/10 hover:bg-musical-gold hover:text-white transition-all hover:scale-110 musical-pulse" style={{animationDelay: '1s'}}>
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Twitter" className="p-3 rounded-full bg-musical-bronze/10 hover:bg-musical-bronze hover:text-white transition-all hover:scale-110 musical-pulse" style={{animationDelay: '1.5s'}}>
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed font-body">
              Join our community for <em className="text-musical-bronze">divine performances</em>, classical insights, and musical inspiration.
            </p>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-musical-gold/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground text-center md:text-left font-body">
              &copy; {new Date().getFullYear()} Arohi Rhythms. All rights reserved. <span className="text-musical-gold">♪</span> Preserving Classical Traditions <span className="text-musical-bronze">♫</span>
            </p>
            <div className="flex gap-6 text-xs text-muted-foreground font-body">
              <Link href="#" className="hover:text-musical-gold transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-musical-gold transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
