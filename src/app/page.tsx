import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Mic, Music, Users } from 'lucide-react';

import { classes, instructors } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const metadata = {
  title: 'Classical Singing Lessons Online | Hindustani Vocal Training | Arohi Rhythms',
  description: 'Transform your voice with guided Hindustani classical singing lessons delivered live online and in Kolkata studios. Progress through ragas, talas, and performance coaching with personalised attention and a clear curriculum.',
  keywords: [
    'hindustani classical singing lessons',
    'online vocal training',
    'classical singing classes kolkata',
    'learn ragas online',
    'tala training for singers',
    'indian classical music school',
    'beginner to advanced vocal classes',
    'guru shishya teaching method',
    'live online music lessons',
    'hindustani vocal coach'
  ],
  openGraph: {
    title: 'Arohi Rhythms | Hindustani Classical Singing Lessons Online',
    description: 'Personalised Hindustani classical voice training with structured ragas, talas, and performance mentorship.',
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
  const faqItems = [
    {
      question: 'Who can join the classical singing lessons?',
      answer: 'We teach absolute beginners, intermediate hobbyists, and performing vocalists. Every learner completes a vocal health and range assessment so the curriculum can be tailored to their current level.'
    },
    {
      question: 'Do I need to be in Kolkata to study with Arohi Rhythms?',
      answer: 'No. Students worldwide can join live online batches via HD streaming and guided practice recordings. Learners in Kolkata can optionally attend hybrid in-person intensives.'
    },
    {
      question: 'What styles of Hindustani music are covered?',
      answer: 'The core syllabus covers swar sadhana, raga development, tala literacy, Dhrupad, Khayal, and Thumri. Electives focus on performance preparation, microphone techniques, and songwriting with classical roots.'
    },
    {
      question: 'How is progress measured during the course?',
      answer: 'Each student receives quarterly progress reviews, personalised riyaaz plans, and performance rubrics that capture pitch stability, improvisation accuracy, rhythmic clarity, and presentation confidence.'
    }
  ];
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
              <div className="absolute top-40 right-20 text-7xl text-musical-bronze musical-float" style={{ animationDelay: '2s' }}>♫</div>
              <div className="absolute bottom-32 left-1/4 text-8xl text-musical-gold musical-float" style={{ animationDelay: '4s' }}>♪</div>
              <div className="absolute bottom-20 right-1/3 text-6xl text-musical-bronze musical-float" style={{ animationDelay: '3s' }}>♫</div>
            </div>
          </div>
          <div className="relative min-h-screen flex items-center justify-center pt-20 pb-16">
            <div className="container max-w-screen-2xl px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-6xl mx-auto space-y-8 md:space-y-12 lg:space-y-16 mt-4 md:mt-8">
                <div className="relative">
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-8xl text-musical-gold/20 musical-float hidden md:block">
                    ॐ
                  </div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-6xl text-musical-gold/30 musical-float" style={{ animationDelay: '1s' }}>
                    ♪
                  </div>
                  <div className="relative inline-block">
                    <div className="absolute -inset-2 bg-gradient-to-r from-musical-gold/20 via-transparent to-musical-bronze/20 rounded-3xl blur-xl opacity-50"></div>
                    <h1 className="relative text-3xl font-display font-bold tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl animate-in fade-in slide-in-from-bottom-4 duration-1000 leading-tight">
                      <span className="block mb-4 uppercase tracking-[0.3em] text-sm sm:text-base text-musical-gold drop-shadow-lg">
                        Blessed by Maa Saraswati
                      </span>
                      <span className="block bg-gradient-to-r from-musical-gold via-white to-musical-gold bg-clip-text text-transparent shimmer-text drop-shadow-2xl">
                        Hindustani Classical Music Training
                      </span>
                      <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl mt-6 font-body italic text-musical-gold/95 drop-shadow-lg">
                        Sacred Vocal Tradition • Live Online Classes • Kolkata Studios
                      </span>
                    </h1>
                  </div>
                  <div className="absolute -bottom-8 right-1/4 text-4xl text-musical-bronze/30 musical-float" style={{ animationDelay: '1s' }}>
                    ♫
                  </div>
                  <div className="absolute -bottom-12 left-1/4 text-5xl text-musical-gold/20 musical-float" style={{ animationDelay: '2s' }}>
                    ♪
                  </div>
                </div>

                <div className="relative px-4">
                  <div className="text-center space-y-8">
                    <div className="relative inline-block">
                      <div className="absolute -inset-1 bg-gradient-to-r from-musical-gold/10 via-transparent to-musical-bronze/10 rounded-2xl blur-lg"></div>
                      <p className="relative text-lg sm:text-xl md:text-2xl text-white/95 max-w-5xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 font-body font-medium drop-shadow-lg">
                        Immerse yourself in the divine art of <strong className="text-musical-gold font-bold">Hindustani Shastriya Sangeet</strong> through the sacred <em className="text-musical-bronze font-semibold">guru-shishya parampara</em>.
                        Journey through ragas, talas, and vocal mastery under Maa Saraswati's blessings.
                      </p>
                    </div>
                  </div>

                  <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                    <div className="text-center space-y-4 group min-h-48 md:min-h-64 flex flex-col items-center justify-center">
                      <div className="relative inline-block">
                        <div className="absolute -inset-2 bg-musical-gold/20 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                        <div className="relative text-6xl text-musical-gold drop-shadow-lg group-hover:scale-110 transition-transform duration-500">♪</div>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-display font-bold text-musical-gold drop-shadow-lg">Raga Sadhana</h3>
                      <p className="text-xl text-white/90 leading-relaxed font-body">Explore the soul of classical ragas and their divine emotions</p>
                    </div>

                    <div className="text-center space-y-4 group min-h-48 md:min-h-64 flex flex-col items-center justify-center">
                      <div className="relative inline-block">
                        <div className="absolute -inset-2 bg-musical-bronze/20 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                        <div className="relative text-6xl text-musical-bronze drop-shadow-lg group-hover:scale-110 transition-transform duration-500">♫</div>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-display font-bold text-musical-bronze drop-shadow-lg">Tala Abhyas</h3>
                      <p className="text-xl text-white/90 leading-relaxed font-body">Master sacred rhythmic cycles rooted in ancient tradition</p>
                    </div>

                    <div className="text-center space-y-4 group min-h-48 md:min-h-64 flex flex-col items-center justify-center">
                      <div className="relative inline-block">
                        <div className="absolute -inset-2 bg-musical-gold/20 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                        <div className="relative text-6xl text-musical-gold drop-shadow-lg group-hover:scale-110 transition-transform duration-500">♪</div>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-display font-bold text-musical-gold drop-shadow-lg">Guru-Shishya Tradition</h3>
                      <p className="text-xl text-white/90 leading-relaxed font-body">Learn through the revered guru-student teaching method</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 md:mt-20 lg:mt-24 flex flex-col sm:flex-row gap-4 md:gap-8 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400 px-4">
                  <Button asChild size="default" className="musical-button text-base md:text-lg px-6 md:px-8 lg:px-12 py-5 md:py-6 lg:py-8 shadow-2xl font-semibold hover:scale-105 transition-all duration-300">
                    <Link href="/classes">
                      <span className="mr-3 text-xl">♪</span>
                      Begin Your Journey
                      <span className="ml-3 text-xl">♪</span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="default" className="text-base md:text-lg px-8 md:px-12 py-6 md:py-8 bg-white/20 backdrop-blur-sm border-3 border-white/50 text-white hover:bg-white/30 hover:border-white/70 transition-all duration-300 font-semibold shadow-xl hover:scale-105">
                    <Link href="/contact">
                      <span className="mr-3 text-xl">♫</span>
                      Free Trial Class
                      <span className="ml-3 text-xl">♫</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-background to-musical-cream/40 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-16 left-20 text-7xl text-musical-gold musical-float hidden md:block">♪</div>
            <div className="absolute bottom-20 right-16 text-6xl text-musical-bronze musical-float hidden md:block" style={{ animationDelay: '2s' }}>♫</div>
          </div>
          <div className="container max-w-screen-2xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
              <div className="lg:w-1/2 relative animate-in fade-in slide-in-from-left-8 duration-1000">
                <div className="relative w-full max-w-md mx-auto">
                  <div className="absolute -inset-4 bg-gradient-to-r from-musical-gold/30 via-musical-bronze/30 to-musical-gold/30 rounded-full blur-2xl opacity-50 musical-pulse"></div>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-musical-gold/30 hover:scale-105 transition-transform duration-500 cursor-pointer">
                    <Image
                      src="/saraswati-maa.png"
                      alt="Maa Saraswati - Goddess of Music and Knowledge"
                      width={600}
                      height={800}
                      className="object-cover w-full"
                      priority
                      quality={85}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-musical-gold/20 via-transparent to-transparent"></div>
                  </div>
                  <div className="absolute -top-8 -right-8 text-6xl text-musical-gold animate-bounce opacity-70">♪</div>
                  <div className="absolute -bottom-6 -left-6 text-5xl text-musical-bronze animate-bounce opacity-70" style={{ animationDelay: '1s' }}>♫</div>
                </div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-left space-y-6 animate-in fade-in slide-in-from-right-8 duration-1000">
                <div className="inline-block">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold bg-gradient-to-r from-musical-gold via-musical-bronze to-musical-gold bg-clip-text text-transparent mb-2 leading-tight py-2">
                    या कुन्देन्दुतुषारहारधवला
                  </h2>
                  <p className="text-lg text-muted-foreground italic font-body">Yā Kundendu Tusāra Hāra Dhavalā</p>
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-musical-gold to-musical-bronze mx-auto lg:mx-0"></div>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-lg font-body">
                  <p>
                    We bow before <strong className="text-musical-bronze">Maa Saraswati</strong>, the divine embodiment of music, wisdom, and learning.
                    With her sacred <em className="text-primary">veena</em>, she guides every note, every raga, and every soul seeking the path of <strong className="text-primary">Shastriya Sangeet</strong>.
                  </p>
                  <p>
                    In Hindustani classical music, we don't merely learn techniques—we receive <strong className="text-musical-bronze">divine grace</strong>.
                    Each practice session is a <em className="text-primary">sadhana</em>, each lesson a blessing, each performance an offering at Her lotus feet.
                  </p>
                  <div className="pt-4 border-t border-musical-gold/20">
                    <div className="relative inline-block">
                      <div className="absolute -inset-2 bg-gradient-to-r from-musical-gold/10 via-transparent to-musical-bronze/10 rounded-xl blur-lg"></div>
                      <p className="relative text-xl font-display italic text-musical-bronze font-semibold leading-relaxed">
                        "संगीत सीखना केवल कला नहीं, बल्कि आध्यात्मिक यात्रा है।"
                      </p>
                    </div>
                    <p className="text-sm mt-3 opacity-80 font-body italic text-center">
                      Learning music is not just an art, but a spiritual journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-14 lg:py-16 xl:py-20 bg-gradient-to-b from-musical-cream/50 via-secondary/30 to-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 text-8xl text-musical-gold musical-float">♪</div>
            <div className="absolute top-40 right-20 text-6xl text-musical-bronze musical-float" style={{ animationDelay: '2s' }}>♫</div>
            <div className="absolute bottom-32 left-1/4 text-7xl text-musical-gold musical-float" style={{ animationDelay: '4s' }}>♪</div>
            <div className="absolute bottom-20 right-1/3 text-5xl text-musical-bronze musical-float" style={{ animationDelay: '3s' }}>♫</div>
          </div>
          <div className="container max-w-screen-2xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-6xl mx-auto mb-20 relative z-10">
              <div className="ornamental-border pb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-foreground via-musical-bronze to-foreground bg-clip-text text-transparent mb-6">
                  Hindustani Classical Music — The Timeless Framework
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-musical-gold to-transparent mx-auto mb-8"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="text-left">
                  <h3 className="text-2xl font-display font-bold text-musical-bronze mb-4">Raga Architecture — The Essence of Melody</h3>
                  <p className="text-muted-foreground leading-relaxed font-body">
                    <strong className="text-primary">Ragas</strong> blend artistry and science. Each melodic framework carries a specific aroha-avaroha, highlighted notes (vadi-samvadi), and an ideal time of day that shapes the listener&rsquo;s emotion. Understanding those guardrails helps vocalists improvise with confidence while staying authentic to the tradition.
                  </p>
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-display font-bold text-musical-bronze mb-4">The Power of Talas — Rhythm With Purpose</h3>
                  <p className="text-muted-foreground leading-relaxed font-body">
                    <strong className="text-primary">Talas</strong> create the pulse that anchors every performance. From the symmetrical Teentaal to the intricate Ektaal, each cycle emphasises the sam—the return point that realigns melody, rhythm, and intent. Training your inner laya makes improvisation, stagecraft, and collaborative music-making significantly stronger.
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
                  <CardTitle className="font-display text-2xl text-center leading-relaxed pt-2">Authentic Guru–Shishya Mentorship</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground leading-relaxed text-center font-body">
                    Experience the <strong className="text-primary">guru-shishya parampara</strong> as a modern coaching model. Mentors guide technique, mindset, and practice design so singers internalise core concepts, expand range, and stay accountable through structured sadhana.
                  </p>
                </CardContent>
              </Card>
              <Card className="musical-card hover:-translate-y-2 group relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                <div className="absolute top-0 right-0 text-6xl text-musical-bronze/10 group-hover:text-musical-bronze/20 transition-colors">♫</div>
                <CardHeader className="space-y-6 relative z-10">
                  <div className="mx-auto w-fit group-hover:scale-110 transition-transform musical-pulse" style={{ animationDelay: '0.5s' }}>
                    <Music className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="font-display text-2xl text-center leading-relaxed pt-2">Comprehensive Classical Curriculum</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground leading-relaxed text-center font-body">
                    Master <strong className="text-primary">Shastriya Sangeet</strong> from foundational swar sadhana to advanced raga vistaar. The syllabus spans Dhrupad, Khayal, Thumri, voice culture, improvisation, and stage readiness so you build an adaptable gayaki.
                  </p>
                </CardContent>
              </Card>
              <Card className="musical-card hover:-translate-y-2 group relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                <div className="absolute top-0 right-0 text-6xl text-musical-gold/10 group-hover:text-musical-gold/20 transition-colors">♪</div>
                <CardHeader className="space-y-6 relative z-10">
                  <div className="mx-auto w-fit group-hover:scale-110 transition-transform musical-pulse" style={{ animationDelay: '1s' }}>
                    <Mic className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="font-display text-2xl text-center leading-relaxed pt-2">Artistry, Mindfulness & Confidence</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground leading-relaxed text-center font-body">
                    <strong className="text-primary">Shastriya Sangeet</strong> elevates both technique and intuition. Focused riyaz, mindful breath work, and reflective listening nurture creative confidence so every rendition feels purposeful and emotionally resonant.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="classes" className="py-12 md:py-14 lg:py-16 xl:py-20 bg-gradient-to-b from-background to-musical-cream/30 relative">
          <div className="absolute inset-0 opacity-3">
            <div className="absolute top-16 right-16 text-9xl text-musical-gold musical-float" style={{ animationDelay: '1s' }}>♪</div>
            <div className="absolute bottom-24 left-12 text-7xl text-musical-bronze musical-float" style={{ animationDelay: '3s' }}>♫</div>
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
                    <h3 className="text-3xl md:text-4xl font-display font-bold mb-2">Hindustani Classical Vocal Performance</h3>
                    <p className="text-lg md:text-xl opacity-90">The timeless art celebrated by generations of maestros</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="musical-card p-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-3xl text-musical-gold">♪</span>
                    <h4 className="text-xl font-display font-bold text-musical-bronze">Swar Sadhana — Vocal Conditioning</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed font-body mb-4">
                    Master the core techniques of <strong className="text-primary">Hindustani gayaki</strong> including pranayama-inspired breathing, voice culture drills, and articulate saptaswaras for steady pitch.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground font-body">
                    <li className="flex items-center gap-2"><span className="text-musical-gold">•</span> <strong>Swar Sadhana:</strong> Daily intonation drills for range and stability</li>
                    <li className="flex items-center gap-2"><span className="text-musical-bronze">•</span> <strong>Alankars:</strong> Melodic patterns that polish agility</li>
                    <li className="flex items-center gap-2"><span className="text-musical-gold">•</span> <strong>Breathwork:</strong> Adapted yogic techniques for stamina</li>
                  </ul>
                </Card>

                <Card className="musical-card p-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-3xl text-musical-bronze">♫</span>
                    <h4 className="text-xl font-display font-bold text-musical-bronze">Classical Bandishes & Repertoire</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed font-body mb-4">
                    Learn traditional <strong className="text-primary">bandishes</strong> preserved through guru-shishya parampara so you internalise phrasing, dynamics, and storytelling straight from the gharana roots.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground font-body">
                    <li className="flex items-center gap-2"><span className="text-musical-bronze">•</span> <strong>Khayal:</strong> Improvisation within expansive ragas</li>
                    <li className="flex items-center gap-2"><span className="text-musical-gold">•</span> <strong>Dhrupad:</strong> Meditative compositions focused on purity</li>
                    <li className="flex items-center gap-2"><span className="text-musical-bronze">•</span> <strong>Thumri:</strong> Expressive, lyrical storytelling</li>
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

        <section id="instructors" className="py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-musical-cream/30 to-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-32 left-8 text-8xl text-musical-bronze musical-float">♫</div>
            <div className="absolute bottom-40 right-16 text-9xl text-musical-gold musical-float" style={{ animationDelay: '2s' }}>♪</div>
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
                Our revered gurus bring not just technical mastery, but the divine grace to awaken the musician within each disciple&rsquo;s soul.
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
                          <div className="w-full md:w-2/5 flex-shrink-0">
                            <div className="relative aspect-square w-full max-w-xs mx-auto md:max-w-none rounded-lg overflow-hidden border-4 border-background ring-4 ring-primary/20 shadow-lg">
                              <Image
                                src={instructorImage.imageUrl}
                                alt={instructor.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 40vw"
                              />
                            </div>
                          </div>
                        )}
                        <div className="text-center md:text-left space-y-4 flex-1">
                          <div>
                            <h3 className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-musical-gold via-primary to-musical-bronze bg-clip-text text-transparent shimmer-text">{instructor.name}</h3>
                            <p className="text-base text-musical-bronze font-semibold mt-2 font-body italic leading-relaxed pt-1">Founding Mentor & Artistic Director</p>
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

        <section id="faq" className="py-12 md:py-14 lg:py-16 xl:py-20 bg-gradient-to-b from-background via-musical-cream/20 to-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-12 left-16 text-6xl text-musical-gold musical-float">♪</div>
            <div className="absolute bottom-16 right-12 text-6xl text-musical-bronze musical-float" style={{ animationDelay: '1.5s' }}>♫</div>
          </div>
          <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16 space-y-4 md:space-y-6">
              <div className="ornamental-border pb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-foreground via-musical-bronze to-foreground bg-clip-text text-transparent mb-4">
                  Frequently Asked Questions
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-musical-gold to-transparent mx-auto mb-8"></div>
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-body max-w-3xl mx-auto">
                Clear answers about enrolment, curriculum, formats, and how we measure growth in Hindustani classical vocals.
              </p>
            </div>

            <div className="w-full">
              <Accordion type="single" collapsible className="space-y-3 md:space-y-4 max-w-5xl mx-auto">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={item.question}
                    value={`faq-${index}`}
                    className="musical-card overflow-hidden rounded-2xl border-2 border-musical-gold/20 bg-card/50 hover:border-musical-gold/40 hover:bg-card/80 transition-all duration-300 data-[state=open]:shadow-xl data-[state=open]:border-musical-gold/40 data-[state=open]:bg-gradient-to-r data-[state=open]:from-card data-[state=open]:via-card data-[state=open]:to-musical-cream/5"
                  >
                    <AccordionTrigger className="px-4 md:px-8 py-5 md:py-6 text-left hover:no-underline group data-[state=open]:bg-gradient-to-r data-[state=open]:from-musical-gold/5 data-[state=open]:via-transparent data-[state=open]:to-musical-bronze/5">
                      <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                        <span className="text-2xl md:text-3xl text-musical-gold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">♪</span>
                        <span className="text-base md:text-lg font-display font-bold text-foreground group-hover:text-musical-bronze transition-colors text-left leading-snug break-words">
                          {item.question}
                        </span>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="px-4 md:px-8 py-5 md:py-6 bg-gradient-to-br from-transparent via-musical-cream/5 to-transparent border-t border-musical-gold/20">
                      <div className="flex gap-3 md:gap-4">
                        <span className="text-xl md:text-2xl text-musical-bronze flex-shrink-0 mt-1 group-data-[state=open]:animate-pulse">♫</span>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-body">
                          {item.answer}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mt-16 md:mt-20 lg:mt-24 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <div className="relative inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-musical-gold/20 via-primary/10 to-musical-bronze/20 rounded-3xl blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative rounded-3xl bg-gradient-to-br from-musical-gold/15 via-card to-musical-bronze/10 p-8 md:p-12 border-2 border-musical-gold/30 hover:border-musical-gold/60 hover:shadow-2xl transition-all duration-300 group">
                  <div className="absolute top-4 right-6 text-4xl text-musical-gold/20 group-hover:text-musical-gold/40 transition-colors">♪</div>
                  <div className="absolute bottom-4 left-6 text-3xl text-musical-bronze/20 group-hover:text-musical-bronze/40 transition-colors">♫</div>

                  <div className="relative z-10 space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold bg-gradient-to-r from-musical-gold via-foreground to-musical-bronze bg-clip-text text-transparent mb-3">
                        Ready to Begin Your Sacred Journey?
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-musical-gold via-musical-bronze to-musical-gold mx-auto mb-4"></div>
                    </div>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-body max-w-2xl mx-auto">
                      Still have questions? Our team is here to guide you through every step of your Hindustani classical music training. Connect with us today!
                    </p>
                    <Button asChild size="lg" className="musical-button text-base md:text-lg px-8 md:px-12 py-6 md:py-7 shadow-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 group/btn">
                      <Link href="/contact" className="flex items-center gap-3">
                        <span className="text-xl group-hover/btn:animate-bounce">♪</span>
                        Get in Touch
                        <span className="text-xl group-hover/btn:animate-bounce" style={{ animationDelay: '0.1s' }}>♫</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
