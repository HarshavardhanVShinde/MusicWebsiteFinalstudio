import { Music, Heart, Users, Sparkles, Calendar, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'About Us - Arohi Rhythms',
  description: 'Learn about Arohi Rhythms - where your musical journey begins and blossoms.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Welcome to Arohi Rhythms
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Where your musical journey begins and blossoms
            </p>
          </div>

          <Card className="border-border/50 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  We believe that music is more than just sound — it's a <span className="text-primary font-semibold">rhythm of life</span>, a <span className="text-primary font-semibold">voice of emotions</span>, and a <span className="text-primary font-semibold">bridge that connects hearts</span>. At Arohi Rhythms, we're here to guide you — whether you're picking up an instrument for the first time, discovering your vocal strength, or refining your craft to the next level.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Who We Are
              </h2>
            </div>
            <Card className="border-border/50 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Arohi Rhythms is a <span className="font-semibold text-foreground">community of passionate musicians</span>, dedicated educators, and inspired learners. We believe everyone has a melody inside, and our mission is to help you discover and express yours. With experienced instructors, state-of-the-art learning spaces (online and in-person), and a nurturing environment, we support every age and skill level to grow, perform, and connect through music.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                What We Offer
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-border/50 hover:shadow-xl transition-all hover:-translate-y-1 group">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-xl">Personalized Lessons</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Tailored to your goals — be it vocals, instrument, theory, performance, or production. Every student gets individual attention.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-xl transition-all hover:-translate-y-1 group">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <Sparkles className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-xl">Flexible Formats</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Choose from in-person classes, online sessions, or hybrid formats — whatever suits your schedule and learning style.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-xl transition-all hover:-translate-y-1 group">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-xl">All Ages Welcome</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    From young beginners to adult learners, we believe in lifelong musical growth. It's never too early or too late to start.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-xl transition-all hover:-translate-y-1 group">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-xl">Performance Opportunities</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We provide stage time, recitals, events, and collaborations to help you build confidence and showcase your progress.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-xl transition-all hover:-translate-y-1 group md:col-span-2">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <Music className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-xl">A Supportive Community</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    At Arohi Rhythms, you're not just a student — you're part of a musical family. We encourage collaboration, creativity, and belonging. Connect with fellow music lovers and grow together.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent shadow-xl">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <Award className="h-16 w-16 text-primary mx-auto" />
              <h3 className="text-2xl md:text-3xl font-headline font-bold">
                Let Your Rhythm Resonate
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Join us at Arohi Rhythms and discover the musician within you. Whether you dream of performing on stage or simply want to enjoy the beauty of music, we're here to support your journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  <Link href="/classes">Explore Classes</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
