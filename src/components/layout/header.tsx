"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import logoImage from '@/components/logo-website.png';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/classes', label: 'Classes' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/20 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70 shadow-sm">
      <div className="container flex h-16 max-w-screen-2xl items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" className="mr-4 md:mr-8 flex items-center space-x-2 group">
          <div className="relative w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110 bg-transparent">
            <Image
              src={logoImage}
              alt="Arohi Rhythms"
              fill
              sizes="(max-width: 768px) 32px, 40px"
              className="object-contain bg-transparent"
              priority
            />
          </div>
          <span className="text-lg md:text-xl font-bold font-headline bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Arohi Rhythms
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className={cn(
                'transition-all hover:text-primary relative py-2',
                pathname === href ? 'text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary' : 'text-foreground/70'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end">
          <Button asChild className="hidden md:flex shadow-lg hover:shadow-xl transition-shadow">
            <Link href="/contact">Enroll Now</Link>
          </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="md:hidden"
                size="icon"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <SheetDescription className="sr-only">Main navigation and links</SheetDescription>
              <div className="flex flex-col h-full">
                  <div className="flex items-center p-6 border-b">
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="relative w-9 h-9 bg-transparent">
                      <Image
                        src={logoImage}
                        alt="Arohi Rhythms"
                        fill
                        sizes="36px"
                        className="object-contain bg-transparent"
                      />
                    </div>
                    <span className="text-xl font-bold font-headline bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Arohi Rhythms</span>
                  </Link>
                </div>
                <nav className="flex flex-col gap-6 p-6 text-lg font-medium">
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'transition-colors hover:text-primary py-2 border-l-2 pl-4',
                        pathname === href ? 'text-primary border-primary font-semibold' : 'text-foreground/80 border-transparent'
                      )}
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto p-6">
                  <Button asChild className="w-full shadow-lg" onClick={() => setIsMobileMenuOpen(false)}>
                    <Link href="/contact">Enroll Now</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
