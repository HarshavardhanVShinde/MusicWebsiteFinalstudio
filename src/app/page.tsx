import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Mic, Music, Users } from 'lucide-react';

import { classes, instructors } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const metadata = {
  title: 'Hindustani Classical Music Classes Online | Vocal Training Kolkata | Arohi Rhythms',
  description: 'Learn Hindustani classical singing online from Kolkata. Expert raga, tala training. Online/offline music classes. Guru-shishya parampara. Free trial class. Best classical music academy.',
  keywords: ['hindustani classical music classes', 'online music classes', 'classical singing classes kolkata', 'raga training online', 'tala practice', 'vocal music classes', 'indian classical music online', 'guru shishya parampara', 'music classes near me', 'best music academy kolkata'],
  openGraph: {
    title: 'Hindustani Classical Music Classes Online | Arohi Rhythms',
    description: 'Learn Hindustani classical singing online. Expert raga & tala training. Free trial class.',
    url: 'https://arohirhythms.in',
    type: 'website',
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicSchool',
    name: 'Arohi Rhythms',
    description: 'Learn Hindustani classical singing with personalised coaching',
    url: 'https://arohirhythms.in',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kolkata',
      addressCountry: 'IN',
    },
    offers: {
      '@type': 'Offer',
      category: 'Music Education',
      availability: 'https://schema.org/InStock',
    },
  };
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <div className="flex flex-col">
      <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-musical-cream/60 via-background to-musical-cream/40">
        <div className="absolute inset-0">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              data-ai-hint="A girl singing passionately in a dark, moody environment with dramatic lighting, professional photography, blurred background, bokeh effect"
              fill
              className="object-cover blur-[2px] scale-105 brightness-[0.4] sepia-[0.3] opacity-70"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/40 via-amber-800/30 to-background/85" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-16 text-9xl text-musical-gold musical-float">♪</div>
            <div className="absolute top-40 right-20 text-7xl text-musical-bronze musical-float" style={{animationDelay: '2s'}}>♫</div>
            <div className="absolute bottom-32 left-1/4 text-8xl text-musical-gold musical-float" style={{animationDelay: '4s'}}>♪</div>
            <div className="absolute bottom-20 right-1/3 text-6xl text-musical-bronze musical-float" style={{animationDelay: '3s'}}>♫</div>
          </div>
        </div>
        <div className="relative min-h-screen flex items-center justify-center pt-20 pb-16">
          <div className="container max-w-screen-2xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-5xl mx-auto space-y-8 md:space-y-12 mt-8">
              <div className="relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-6xl text-musical-gold/30 musical-float">
                  ♪
                </div>
                <h1 className="text-3xl font-display font-bold tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl animate-in fade-in slide-in-from-bottom-4 duration-1000 leading-tight">
                  <span className="block mb-3">माँ सरस्वती की कृपा से</span>
                  <span className="block bg-gradient-to-r from-musical-gold via-white to-musical-gold bg-clip-text text-transparent shimmer-text">
                    Hindustani Classical Music
                  </span>
                  <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-6 font-body italic text-white/90">
                    Learn Ragas & Talas
                  </span>
                </h1>
                <div className="absolute -bottom-8 right-1/4 text-4xl text-musical-bronze/30 musical-float" style={{animationDelay: '1s'}}>
                  ♫
                </div>
              </div>
              <div className="relative px-4">
                <div className="text-center space-y-6">
                  <p className="text-lg sm:text-xl md:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 font-body">
                    Learn classical music with traditional guru-student teaching. Master ragas, talas, and singing with expert guidance.
                  </p>
                </div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                  <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/30 backdrop-blur-md border-2 border-white/50 shadow-2xl hover:bg-white/40 transition-all">
                    <span className="text-5xl text-musical-gold drop-shadow-lg">♪</span>
                    <span className="text-xl font-bold text-white drop-shadow">Raga Training</span>
                    <span className="text-base text-white/95 text-center leading-relaxed">Learn classical ragas and their emotions</span>
                  </div>
                  <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/30 backdrop-blur-md border-2 border-white/50 shadow-2xl hover:bg-white/40 transition-all">
                    <span className="text-5xl text-musical-bronze drop-shadow-lg">♫</span>
                    <span className="text-xl font-bold text-white drop-shadow">Tala Practice</span>
                    <span className="text-base text-white/95 text-center leading-relaxed">Master rhythmic cycles and timing</span>
                  </div>
                  <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/30 backdrop-blur-md border-2 border-white/50 shadow-2xl hover:bg-white/40 transition-all">
                    <span className="text-5xl text-musical-gold drop-shadow-lg">♪</span>
                    <span className="text-xl font-bold text-white drop-shadow">Expert Teaching</span>
                    <span className="text-base text-white/95 text-center leading-relaxed">Traditional guru-student method</span>
                  </div>
                </div>
              </div>
              <div className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 px-4">
                <Button asChild size="lg" className="musical-button text-base md:text-lg px-8 md:px-10 py-6 md:py-7 shadow-2xl font-semibold">
                  <Link href="/classes">
                    <span className="mr-2">♪</span>
                    Begin Your Journey
                    <span className="ml-2">♪</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base md:text-lg px-8 md:px-10 py-6 md:py-7 bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/30 hover:border-white/60 transition-all duration-300 font-semibold shadow-lg">
                  <Link href="/contact">
                    <span className="mr-2">♫</span>
                    Free Trial Class
                    <span className="ml-2">♫</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28 lg:py-36 bg-gradient-to-b from-musical-cream/50 via-secondary/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 text-8xl text-musical-gold musical-float">♪</div>
          <div className="absolute top-40 right-20 text-6xl text-musical-bronze musical-float" style={{animationDelay: '2s'}}>♫</div>
          <div className="absolute bottom-32 left-1/4 text-7xl text-musical-gold musical-float" style={{animationDelay: '4s'}}>♪</div>
          <div className="absolute bottom-20 right-1/3 text-5xl text-musical-bronze musical-float" style={{animationDelay: '3s'}}>♫</div>
        </div>
        <div className="container max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto mb-20 relative z-10">
            <div className="ornamental-border pb-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-foreground via-musical-bronze to-foreground bg-clip-text text-transparent mb-6">
                Hindustani Shastriya Sangeet - The Divine Science
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-musical-gold to-transparent mx-auto mb-8"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="text-left">
                <h3 className="text-2xl font-display font-bold text-musical-bronze mb-4">रागों का रहस्य - The Essence of Ragas</h3>
                <p className="text-muted-foreground leading-relaxed font-body">
                  <strong className="text-primary">Ragas</strong> are divine manifestations, each carrying the blessings of different deities and cosmic energies. 
                  Every raga has its sacred <em className="text-musical-gold">aroha-avaroha</em> (आरोह-अवरोह), 
                  <em className="text-musical-bronze">vadi-samvadi</em> (वादी-संवादी), and prescribed <strong>prahar</strong> (प्रहर) that aligns the soul with universal consciousness.
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-display font-bold text-musical-bronze mb-4">तालों की शक्ति - The Power of Talas</h3>
                <p className="text-muted-foreground leading-relaxed font-body">
                  <strong className="text-primary">Talas</strong> embody the eternal rhythm of creation, preservation, and destruction - the cosmic dance of Lord Shiva. 
                  From the majestic <em className="text-musical-gold">Teentaal</em> (तीनताल) to the intricate <em className="text-musical-bronze">Ektaal</em> (एकताल), 
                  each tala maintains the sacred <strong>sam</strong> (सम) - the divine moment where time, melody, and consciousness unite.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 relative z-10">
            <Card className="musical-card hover:-translate-y-2 group relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="absolute top-0 right-0 text-6xl text-musical-gold/10 group-hover:text-musical-gold/20 transition-colors">♪</div>
              <CardHeader className="space-y-6 relative z-10">
                <div className="mx-auto w-fit group-hover:scale-110 transition-transform musical-pulse">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="font-display text-2xl text-center leading-relaxed pt-2">पवित्र गुरु-शिष्य परम्परा</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed text-center font-body">
                  Experience the blessed <strong className="text-primary">guru-shishya parampara</strong> where divine knowledge flows from the guru's heart to the shishya's soul. 
                  Our revered <em className="text-musical-bronze">acharyas</em> don't merely teach - they awaken the inner musician through 
                  <strong>sadhana</strong> (साधना), ensuring each disciple attains both technical excellence and spiritual elevation.
                </p>
              </CardContent>
            </Card>
            <Card className="musical-card hover:-translate-y-2 group relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              <div className="absolute top-0 right-0 text-6xl text-musical-bronze/10 group-hover:text-musical-bronze/20 transition-colors">♫</div>
              <CardHeader className="space-y-6 relative z-10">
                <div className="mx-auto w-fit group-hover:scale-110 transition-transform musical-pulse" style={{animationDelay: '0.5s'}}>
                  <Music className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="font-display text-2xl text-center leading-relaxed pt-2">सम्पूर्ण शास्त्रीय शिक्षा</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed text-center font-body">
                  Master the complete spectrum of <strong className="text-primary">Shastriya Sangeet</strong> - from foundational <em className="text-musical-gold">swar sadhana</em> (स्वर साधना) 
                  to advanced <em className="text-musical-bronze">raga vistaar</em> (राग विस्तार). Learn <strong>Dhrupad, Khayal, Thumri</strong>, and other divine forms 
                  while discovering your unique <strong>gayaki</strong> (गायकी) within this eternal tradition.
                </p>
              </CardContent>
            </Card>
            <Card className="musical-card hover:-translate-y-2 group relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <div className="absolute top-0 right-0 text-6xl text-musical-gold/10 group-hover:text-musical-gold/20 transition-colors">♪</div>
              <CardHeader className="space-y-6 relative z-10">
                <div className="mx-auto w-fit group-hover:scale-110 transition-transform musical-pulse" style={{animationDelay: '1s'}}>
                  <Mic className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="font-display text-2xl text-center leading-relaxed pt-2">आध्यात्मिक जागृति</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed text-center font-body">
                  <strong className="text-primary">Shastriya Sangeet</strong> transcends mere performance - it is the path to <strong>moksha</strong> (मोक्ष). 
                  Through devoted <em className="text-musical-bronze">riyaz</em> (रियाज़) and sincere <em className="text-musical-gold">sadhana</em> (साधना), 
                  experience how music becomes the divine bridge connecting the <strong>jivatma</strong> (जीवात्मा) with <strong>paramatma</strong> (परमात्मा).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="classes" className="py-16 md:py-28 lg:py-36 bg-gradient-to-b from-background to-musical-cream/30 relative">
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-16 right-16 text-9xl text-musical-gold musical-float" style={{animationDelay: '1s'}}>♪</div>
          <div className="absolute bottom-24 left-12 text-7xl text-musical-bronze musical-float" style={{animationDelay: '3s'}}>♫</div>
        </div>
        <div className="container max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16 relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="text-left max-w-4xl">
              <h2 className="text-2xl font-display font-bold tracking-wide sm:text-3xl lg:text-4xl bg-gradient-to-r from-foreground via-musical-bronze to-foreground bg-clip-text text-transparent mb-4 leading-tight py-2">
                Classical Music Training
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-musical-gold to-musical-bronze mb-6"></div>
              <p className="text-muted-foreground text-lg md:text-xl font-body leading-relaxed">
                Discover the divine pathway blessed by <em className="text-musical-bronze">Maa Saraswati</em> to begin your sacred musical journey.
              </p>
            </div>
            <Button asChild variant="outline" className="mt-6 md:mt-0 border-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300">
              <Link href="/classes" className="font-semibold">
                <span className="mr-2">♪</span>
                Explore All Classes 
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative z-10">
            <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="aspect-video md:aspect-[21/9] relative">
                <Image
                  src={PlaceHolderImages.find(img => img.id === 'class-hindustani')?.imageUrl || ''}
                  alt="Hindustani Classical Music"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-2">हिन्दुस्तानी शास्त्रीय गायन</h3>
                  <p className="text-lg md:text-xl opacity-90">The divine art blessed by Goddess Saraswati</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="musical-card p-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl text-musical-gold">♪</span>
                  <h4 className="text-xl font-display font-bold text-musical-bronze">स्वर साधना - Vocal Sadhana</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed font-body mb-4">
                  Master the sacred techniques of <strong className="text-primary">Hindustani gayaki</strong> including <em>pranayama</em> (प्राणायाम), voice culture, and the divine articulation of <strong>saptaswaras</strong> (सप्तस्वर).
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground font-body">
                  <li className="flex items-center gap-2"><span className="text-musical-gold">•</span> <strong>स्वर साधना:</strong> Daily practice of divine swaras</li>
                  <li className="flex items-center gap-2"><span className="text-musical-bronze">•</span> <strong>अलंकार:</strong> Sacred melodic patterns for voice development</li>
                  <li className="flex items-center gap-2"><span className="text-musical-gold">•</span> <strong>प्राणायाम:</strong> Breath control techniques from yoga</li>
                </ul>
              </Card>

              <Card className="musical-card p-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl text-musical-bronze">♫</span>
                  <h4 className="text-xl font-display font-bold text-musical-bronze">शास्त्रीय बंदिशें - Classical Bandishes</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed font-body mb-4">
                  Learn sacred <strong className="text-primary">bandishes</strong> and divine compositions preserved through centuries in the blessed <em>guru-shishya parampara</em>, each carrying the spiritual essence of great maestros.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground font-body">
                  <li className="flex items-center gap-2"><span className="text-musical-bronze">•</span> <strong>ख्याल:</strong> The art of creative improvisation within raga</li>
                  <li className="flex items-center gap-2"><span className="text-musical-gold">•</span> <strong>ध्रुपद:</strong> Ancient meditative form of divine praise</li>
                  <li className="flex items-center gap-2"><span className="text-musical-bronze">•</span> <strong>ठुमरी:</strong> Expressive devotional singing</li>
                </ul>
              </Card>
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-lg font-semibold transition-all duration-300">
                <Link href="/classes">
                  <span className="mr-2">♪</span>
                  Explore Classical Training
                  <span className="ml-2">♪</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="instructors" className="py-16 md:py-28 lg:py-36 bg-gradient-to-b from-musical-cream/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-32 left-8 text-8xl text-musical-bronze musical-float">♫</div>
          <div className="absolute bottom-40 right-16 text-9xl text-musical-gold musical-float" style={{animationDelay: '2s'}}>♪</div>
        </div>
        <div className="container max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto mb-20 relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="ornamental-border pb-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-foreground via-musical-bronze to-foreground bg-clip-text text-transparent mb-6 leading-tight py-2">
                Meet Your Guru
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-musical-gold to-transparent mx-auto mb-8"></div>
            </div>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-body max-w-4xl mx-auto">
              In the blessed tradition of <em className="text-musical-bronze font-semibold">guru-shishya parampara</em>, 
              receive guidance from accomplished <strong className="text-primary">sangeet acharyas</strong> who are the living embodiments of centuries-old musical wisdom. 
              Our revered gurus bring not just technical mastery, but the divine grace to awaken the musician within each disciple's soul.
            </p>
          </div>
          <div className="max-w-4xl mx-auto relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            {instructors.map((instructor) => {
              const instructorImage = PlaceHolderImages.find(img => img.id === instructor.imageId);
              return (
                <Card key={instructor.id} className="musical-card shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-5xl text-musical-gold/20">♪</div>
                  <div className="absolute bottom-4 left-4 text-4xl text-musical-bronze/20">♫</div>
                  <CardContent className="p-10 md:p-12 relative z-10">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                      {instructorImage && (
                        <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-background ring-4 ring-primary/20 shadow-lg flex-shrink-0">
                          <AvatarImage src={instructorImage.imageUrl} alt={instructor.name} data-ai-hint={instructorImage.imageHint} />
                          <AvatarFallback className="text-3xl">{instructor.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      )}
                      <div className="text-center md:text-left space-y-4">
                        <div>
                          <h3 className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-musical-gold via-primary to-musical-bronze bg-clip-text text-transparent shimmer-text">{instructor.name}</h3>
                          <p className="text-base text-musical-bronze font-semibold mt-2 font-body italic leading-relaxed pt-1">पूज्य गुरुजी एवं संस्थापक - Revered Guru & Founder</p>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground">
                            <span className="text-musical-gold text-lg">♪</span>
                            <span className="text-base font-medium font-body">15+ Years of Sacred Musical Sadhana</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground">
                            <span className="text-musical-bronze text-lg">♫</span>
                            <span className="text-base font-medium font-body">Vidwan in Hindustani Shastriya Sangeet</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-lg font-body">{instructor.bio}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
