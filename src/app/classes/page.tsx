import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { classes } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Music Classes | Arohi Rhythms Kolkata | Hindustani Classical Vocal Training Online',
  description: 'Best music classes at Arohi Rhythms Kolkata & online. Learn Hindustani classical singing - ragas, talas, dhrupad, khayal, thumri. Beginner to advanced vocal training. Expert teachers. Free trial class.',
  keywords: [
    'music classes',
    'singing classes',
    'music classes kolkata',
    'classical music classes',
    'hindustani classical music classes',
    'arohi rhythms classes',
    'vocal music classes',
    'raga training online',
    'raga classes',
    'tala classes',
    'tala training',
    'vocal music lessons',
    'classical singing course',
    'classical singing classes kolkata',
    'dhrupad khayal training',
    'thumri classes',
    'online music classes india',
    'music school kolkata',
    'best music classes india',
    'hindustani vocal training'
  ],
  openGraph: {
    title: 'Hindustani Classical Music Classes | Raga Tala Training',
    description: 'Learn ragas, talas, dhrupad, khayal online. Expert Hindustani classical training',
    url: 'https://arohirhythms.in/classes',
  },
};

export default function ClassesPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'class-hindustani');

  return (
    <div className="min-h-screen pt-20 pb-12 md:pt-24 lg:pt-32 md:pb-16 lg:pb-24 bg-gradient-to-b from-background via-musical-cream/40 to-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 right-16 text-9xl text-musical-gold musical-float" style={{ animationDelay: '1s' }}>♪</div>
        <div className="absolute bottom-24 left-12 text-7xl text-musical-bronze musical-float" style={{ animationDelay: '3s' }}>♫</div>
        <div className="absolute top-1/3 left-1/4 text-6xl text-musical-gold musical-float" style={{ animationDelay: '5s' }}>♪</div>
        <div className="absolute bottom-1/3 right-1/4 text-8xl text-musical-bronze musical-float" style={{ animationDelay: '2s' }}>♫</div>
      </div>
      <article className="container max-w-screen-2xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-10 md:mb-12 lg:mb-16 space-y-6 md:space-y-8">
          <div className="ornamental-border pb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-wide bg-gradient-to-r from-musical-gold via-primary to-musical-bronze bg-clip-text text-transparent shimmer-text mb-6">Hindustani Classical Music</h1>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-musical-gold to-transparent mx-auto mb-8"></div>
          </div>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-body max-w-4xl mx-auto">
            Immerse yourself in the ancient and sacred tradition of <strong className="text-primary">Hindustani Classical Music</strong> - a divine art form that has been passed down through generations via the sacred <em className="text-musical-bronze font-semibold">guru-shishya parampara</em>.
          </p>
        </div>

        {heroImage && (
          <div className="mb-16 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="aspect-video md:aspect-[21/9] relative">
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              <div className="absolute bottom-8 left-8 text-white">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">The Sacred Art of Classical Music</h2>
                <p className="text-lg md:text-xl opacity-90">Where every note carries the wisdom of centuries</p>
              </div>
            </div>
          </div>
        )}

        <div className="mb-16">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-musical-gold via-primary to-musical-bronze bg-clip-text text-transparent mb-6">What You'll Learn in Our Classes</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-musical-gold to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground leading-relaxed font-body">Master the sacred techniques and musical expressions that form the heart of Hindustani classical singing</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="musical-card hover:-translate-y-2 group relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="absolute top-4 right-4 text-5xl text-musical-gold/20">♪</div>
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl text-musical-gold">♪</span>
                  <CardTitle className="font-display text-xl">Raga Foundation</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed font-body text-sm">
                  Master the sacred foundation of Hindustani music through systematic <strong className="text-primary">raga learning and swar practice</strong>. Learn fundamental swaras and understand the intricate structure of ragas.
                </p>
              </CardContent>
            </Card>

            <Card className="musical-card hover:-translate-y-2 group relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
              <div className="absolute top-4 right-4 text-5xl text-musical-bronze/20">♫</div>
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl text-musical-bronze">♫</span>
                  <CardTitle className="font-display text-xl">Palta & Meru Khand</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed font-body text-sm">
                  Develop vocal agility and flexibility through systematic <strong className="text-primary">palta exercises and meru khand patterns</strong>. Build speed, precision, and command over swaras.
                </p>
              </CardContent>
            </Card>

            <Card className="musical-card hover:-translate-y-2 group relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              <div className="absolute top-4 right-4 text-5xl text-musical-gold/20">♪</div>
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl text-musical-gold">♪</span>
                  <CardTitle className="font-display text-xl">Bandish & Compositions</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed font-body text-sm">
                  Learn traditional <strong className="text-primary">bandishes and classical compositions</strong>. Study compositions in various ragas and develop the art of improvisation.
                </p>
              </CardContent>
            </Card>

            <Card className="musical-card hover:-translate-y-2 group relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <div className="absolute top-4 right-4 text-5xl text-musical-bronze/20">♫</div>
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl text-musical-bronze">♫</span>
                  <CardTitle className="font-display text-xl">Swarmalika</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed font-body text-sm">
                  Learn beautiful <strong className="text-primary">melodic patterns and garlands of notes</strong>. Practice intricate note patterns and create flowing melodic lines.
                </p>
              </CardContent>
            </Card>

            <Card className="musical-card hover:-translate-y-2 group relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="absolute top-4 right-4 text-5xl text-musical-gold/20">♪</div>
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl text-musical-gold">♪</span>
                  <CardTitle className="font-display text-xl">Bollywood Songs</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed font-body text-sm">
                  Master popular <strong className="text-primary">Bollywood melodies</strong> with proper classical technique and contemporary style. From classic to modern hits.
                </p>
              </CardContent>
            </Card>

            <Card className="musical-card hover:-translate-y-2 group relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
              <div className="absolute top-4 right-4 text-5xl text-musical-bronze/20">♫</div>
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl text-musical-bronze">♫</span>
                  <CardTitle className="font-display text-xl">Modern Bengali Songs</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed font-body text-sm">
                  Explore the rich tradition of <strong className="text-primary">Adhunik Bengali music</strong>. Learn iconic songs that blend classical sensibilities with contemporary themes.
                </p>
              </CardContent>
            </Card>

            <Card className="musical-card hover:-translate-y-2 group relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-600">
              <div className="absolute top-4 right-4 text-5xl text-musical-gold/20">♪</div>
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl text-musical-gold">♪</span>
                  <CardTitle className="font-display text-xl">Bhajans (Bengali & Hindi)</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed font-body text-sm">
                  Learn <strong className="text-primary">devotional bhajans</strong> in Bengali and Hindi. Express spiritual devotion through music with traditional and contemporary compositions.
                </p>
              </CardContent>
            </Card>

            <Card className="musical-card hover:-translate-y-2 group relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
              <div className="absolute top-4 right-4 text-5xl text-musical-bronze/20">♫</div>
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl text-musical-bronze">♫</span>
                  <CardTitle className="font-display text-xl">Rabindra Sangeet</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed font-body text-sm">
                  Master the timeless <strong className="text-primary">compositions of Rabindranath Tagore</strong>. Learn the unique raga-based melodies with authentic Santiniketan style.
                </p>
              </CardContent>
            </Card>

            <Card className="musical-card hover:-translate-y-2 group relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-800">
              <div className="absolute top-4 right-4 text-5xl text-musical-gold/20">♪</div>
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl text-musical-gold">♪</span>
                  <CardTitle className="font-display text-xl">Nazrul Geeti</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed font-body text-sm">
                  Learn the <strong className="text-primary">revolutionary and romantic compositions of Kazi Nazrul Islam</strong>. Master the distinctive style that blends classical ragas with folk elements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="musical-card p-10 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-display font-bold text-musical-bronze mb-4">Classical Forms & Traditions</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-musical-gold to-musical-bronze mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-fit mx-auto mb-4">
                <span className="text-4xl text-primary">♪</span>
              </div>
              <h4 className="font-display text-xl font-semibold mb-2">Dhrupad</h4>
              <p className="text-sm text-muted-foreground font-body">The oldest and most austere form, emphasizing pure notes and spiritual depth through meditative alap.</p>
            </div>
            <div className="text-center">
              <div className="w-fit mx-auto mb-4">
                <span className="text-4xl text-primary">♫</span>
              </div>
              <h4 className="font-display text-xl font-semibold mb-2">Khayal</h4>
              <p className="text-sm text-muted-foreground font-body">The most popular form allowing creative improvisation while maintaining raga purity and emotional expression.</p>
            </div>
            <div className="text-center">
              <div className="w-fit mx-auto mb-4">
                <span className="text-4xl text-primary">♪</span>
              </div>
              <h4 className="font-display text-xl font-semibold mb-2">Thumri</h4>
              <p className="text-sm text-muted-foreground font-body">A lighter classical form focusing on romantic and devotional themes with graceful melodic ornamentations.</p>
            </div>
          </div>
        </Card>


        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-10 md:mb-12 lg:mb-16">
          <Card className="musical-card p-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl text-musical-gold">♪</span>
              <h3 className="text-2xl font-display font-bold text-musical-bronze">The Science of Ragas</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed font-body mb-4">
              <strong className="text-primary">Ragas</strong> are the melodic frameworks that form the foundation of Hindustani classical music. Each raga is a complete musical entity with its own personality, emotional content, and spiritual significance.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground font-body">
              <li className="flex items-center gap-2"><span className="text-musical-gold">•</span> <strong>Aroha-Avaroha:</strong> Ascending and descending note patterns</li>
              <li className="flex items-center gap-2"><span className="text-musical-bronze">•</span> <strong>Vadi-Samvadi:</strong> Principal and secondary notes</li>
              <li className="flex items-center gap-2"><span className="text-musical-gold">•</span> <strong>Pakad:</strong> Characteristic phrases that define the raga</li>
              <li className="flex items-center gap-2"><span className="text-musical-bronze">•</span> <strong>Rasa:</strong> The emotional essence and mood</li>
            </ul>
          </Card>

          <Card className="musical-card p-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl text-musical-bronze">♫</span>
              <h3 className="text-2xl font-display font-bold text-musical-bronze">The Rhythm of Talas</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed font-body mb-4">
              <strong className="text-primary">Talas</strong> represent the cyclical nature of time in music. They provide the rhythmic foundation upon which melodies dance and create the framework for musical expression.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground font-body">
              <li className="flex items-center gap-2"><span className="text-musical-bronze">•</span> <strong>Teentaal:</strong> 16-beat cycle, most common in classical music</li>
              <li className="flex items-center gap-2"><span className="text-musical-gold">•</span> <strong>Ektaal:</strong> 12-beat cycle with complex divisions</li>
              <li className="flex items-center gap-2"><span className="text-musical-bronze">•</span> <strong>Jhaptaal:</strong> 10-beat cycle with unique structure</li>
              <li className="flex items-center gap-2"><span className="text-musical-gold">•</span> <strong>Sam:</strong> The first beat where melody and rhythm unite</li>
            </ul>
          </Card>
        </div>



        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-lg font-semibold transition-all duration-300">
            <Link href="/contact">
              <span className="mr-2">♪</span>
              Begin Your Classical Journey
              <span className="ml-2">♪</span>
            </Link>
          </Button>
        </div>
      </article>
    </div>
  );
}
