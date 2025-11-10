import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { classes } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Hindustani Classical Music Classes | Raga Tala Training Online | Arohi Rhythms',
  description: 'Online Hindustani classical singing classes. Learn ragas, talas, dhrupad, khayal, thumri. Beginner to advanced vocal training. Expert teachers. Enroll now for free trial.',
  keywords: ['hindustani classical music classes', 'raga training online', 'tala classes', 'vocal music lessons', 'classical singing course', 'dhrupad khayal training', 'online music classes india'],
  openGraph: {
    title: 'Hindustani Classical Music Classes | Raga Tala Training',
    description: 'Learn ragas, talas, dhrupad, khayal online. Expert Hindustani classical training',
    url: 'https://arohirhythms.in/classes',
  },
};

export default function ClassesPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'class-hindustani');

  return (
    <div className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-background via-musical-cream/40 to-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 right-16 text-9xl text-musical-gold musical-float" style={{animationDelay: '1s'}}>♪</div>
        <div className="absolute bottom-24 left-12 text-7xl text-musical-bronze musical-float" style={{animationDelay: '3s'}}>♫</div>
        <div className="absolute top-1/3 left-1/4 text-6xl text-musical-gold musical-float" style={{animationDelay: '5s'}}>♪</div>
        <div className="absolute bottom-1/3 right-1/4 text-8xl text-musical-bronze musical-float" style={{animationDelay: '2s'}}>♫</div>
      </div>
      <article className="container max-w-screen-2xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-16 space-y-8">
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

        <div className="grid md:grid-cols-2 gap-12 mb-16">
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
