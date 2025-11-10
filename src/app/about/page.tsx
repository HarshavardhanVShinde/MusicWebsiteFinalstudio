import { Music, Heart, Users, Sparkles, Calendar, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | Best Classical Music Academy Kolkata | Arohi Rhythms',
  description: 'Top Hindustani classical music school in Kolkata. Guru-shishya parampara tradition. Expert vocal training, raga & tala classes. Online & offline music lessons. Join our musical family.',
  keywords: ['best music academy kolkata', 'classical music school', 'hindustani music teacher', 'guru shishya parampara', 'music classes kolkata'],
  openGraph: {
    title: 'About Arohi Rhythms | Classical Music Academy Kolkata',
    description: 'Best Hindustani classical music school in Kolkata with guru-shishya tradition',
    url: 'https://arohirhythms.in/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-musical-cream/50 via-background to-musical-cream/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-8xl text-musical-gold musical-float">♪</div>
        <div className="absolute top-40 right-20 text-6xl text-musical-bronze musical-float" style={{animationDelay: '2s'}}>♫</div>
        <div className="absolute bottom-32 left-1/4 text-7xl text-musical-gold musical-float" style={{animationDelay: '4s'}}>♪</div>
        <div className="absolute bottom-20 right-1/3 text-5xl text-musical-bronze musical-float" style={{animationDelay: '3s'}}>♫</div>
      </div>
      <div className="container max-w-screen-2xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-8">
            <div className="ornamental-border pb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-wide bg-gradient-to-r from-musical-gold via-primary to-musical-bronze bg-clip-text text-transparent shimmer-text mb-6">
                Welcome to Arohi Rhythms
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-musical-gold to-transparent mx-auto mb-8"></div>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-body max-w-3xl mx-auto">
              Where your <em className="text-musical-bronze font-semibold">sacred musical journey</em> begins and blossoms into divine artistry
            </p>
          </div>

          <Card className="musical-card shadow-2xl relative overflow-hidden">
            <div className="absolute top-4 right-4 text-6xl text-musical-gold/20">♪</div>
            <div className="absolute bottom-4 left-4 text-5xl text-musical-bronze/20">♫</div>
            <CardContent className="p-10 md:p-14 relative z-10">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-body text-center">
                  We believe that music is more than just sound — it's the <span className="text-musical-gold font-semibold">sacred rhythm of life</span>, the <span className="text-musical-bronze font-semibold">divine voice of emotions</span>, and the <span className="text-primary font-semibold">eternal bridge that connects souls</span>. At Arohi Rhythms, we honor the ancient tradition of <strong>guru-shishya parampara</strong> to guide you on your musical odyssey.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div className="text-center">
              <h2 className="section-title mb-6">
                Our Sacred Mission
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-musical-bronze to-transparent mx-auto mb-8"></div>
            </div>
            <Card className="musical-card shadow-2xl relative overflow-hidden">
              <div className="absolute top-4 left-4 text-5xl text-musical-bronze/20">♫</div>
              <CardContent className="p-10 md:p-14 relative z-10">
                <p className="text-lg text-muted-foreground leading-relaxed font-body text-center">
                  Arohi Rhythms is a <span className="font-semibold text-musical-gold">sacred community of devoted musicians</span>, revered gurus, and passionate disciples. We believe every soul carries a divine melody within, and our mission is to awaken and nurture this <em className="text-musical-bronze">inner music</em>. Through the blessed tradition of classical training, we support every seeker to discover their unique voice in the eternal symphony of <strong className="text-primary">Hindustani classical music</strong>.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <h2 className="section-title mb-6">
                Our Sacred Offerings
              </h2>
              <div className="w-28 h-1 bg-gradient-to-r from-transparent via-musical-gold to-transparent mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="musical-card hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute top-2 right-2 text-4xl text-musical-gold/10 group-hover:text-musical-gold/20 transition-colors">♪</div>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="group-hover:scale-110 transition-transform musical-pulse">
                      <Heart className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-display text-xl">Sacred Personalized Training</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed font-body">
                    Crafted with devotion to your spiritual and musical goals — whether <em className="text-musical-bronze">classical vocals</em>, instrumental mastery, or performance artistry. Each disciple receives individual <strong>guru</strong> attention.
                  </p>
                </CardContent>
              </Card>

              <Card className="musical-card hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute top-2 right-2 text-4xl text-musical-bronze/10 group-hover:text-musical-bronze/20 transition-colors">♫</div>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="group-hover:scale-110 transition-transform musical-pulse" style={{animationDelay: '0.5s'}}>
                      <Sparkles className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-display text-xl">Divine Learning Paths</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed font-body">
                    Experience the sacred art through <em className="text-musical-gold">intimate in-person sessions</em>, blessed online darshans, or harmonious hybrid formats — honoring your life's rhythm and devotional practice.
                  </p>
                </CardContent>
              </Card>

              <Card className="musical-card hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute top-2 right-2 text-4xl text-musical-gold/10 group-hover:text-musical-gold/20 transition-colors">♪</div>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="group-hover:scale-110 transition-transform musical-pulse" style={{animationDelay: '1s'}}>
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-display text-xl">Universal Musical Embrace</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed font-body">
                    From young <em className="text-musical-bronze">musical saplings</em> to mature seekers, we honor the eternal truth that music transcends age. The divine melody calls to every soul, at every stage of life's journey.
                  </p>
                </CardContent>
              </Card>

              <Card className="musical-card hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute top-2 right-2 text-4xl text-musical-bronze/10 group-hover:text-musical-bronze/20 transition-colors">♫</div>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="group-hover:scale-110 transition-transform musical-pulse" style={{animationDelay: '1.5s'}}>
                      <Calendar className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-display text-xl">Sacred Performance Platforms</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed font-body">
                    We create blessed opportunities for <em className="text-musical-gold">divine expression</em> through intimate recitals, classical concerts, and collaborative musical celebrations to nurture confidence and share your artistic growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="musical-card hover:-translate-y-2 group md:col-span-2 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-6xl text-musical-gold/10 group-hover:text-musical-gold/20 transition-colors">♪</div>
                <div className="absolute bottom-4 left-4 text-5xl text-musical-bronze/10 group-hover:text-musical-bronze/20 transition-colors">♫</div>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="group-hover:scale-110 transition-transform musical-pulse" style={{animationDelay: '2s'}}>
                      <Music className="h-9 w-9 text-primary" />
                    </div>
                    <CardTitle className="font-display text-2xl">A Sacred Musical Sangam</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed font-body text-lg">
                    At Arohi Rhythms, you transcend being merely a student — you become part of our <em className="text-musical-bronze font-semibold">sacred musical family</em>. We nurture collaboration, divine creativity, and spiritual belonging. Connect with fellow <strong className="text-primary">classical music devotees</strong> and ascend together in this eternal art form.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="musical-card bg-gradient-to-br from-musical-gold/10 via-primary/5 to-musical-bronze/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-6 left-6 text-5xl text-musical-gold/20">♪</div>
            <div className="absolute bottom-6 right-6 text-4xl text-musical-bronze/20">♫</div>
            <CardContent className="p-10 md:p-14 text-center space-y-8 relative z-10">
              <Award className="h-20 w-20 text-musical-gold mx-auto musical-pulse" />
              <h3 className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-musical-gold via-primary to-musical-bronze bg-clip-text text-transparent">
                Let Your Soul's Melody Resonate
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-body">
                Join our sacred musical <em className="text-musical-bronze font-semibold">sangam</em> at Arohi Rhythms and awaken the divine musician within your soul. Whether you aspire to grace the concert stage or simply wish to commune with the eternal beauty of <strong className="text-primary">classical music</strong>, we are honored to guide your spiritual and artistic journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
                <Button asChild size="lg" className="musical-button shadow-2xl font-semibold">
                  <Link href="/classes">
                    <span className="mr-2">♪</span>
                    Explore Sacred Classes
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-musical-gold/50 hover:border-musical-gold hover:bg-musical-gold/10 transition-all duration-300 font-semibold">
                  <Link href="/contact">
                    <span className="mr-2">♫</span>
                    Begin Your Journey
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
