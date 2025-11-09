import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Mic, Music, Users } from 'lucide-react';

import { classes, instructors } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');
  const featuredClasses = classes.slice(0, 3);

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              data-ai-hint="A girl singing passionately in a dark, moody environment with dramatic lighting, professional photography, blurred background, bokeh effect"
              fill
              className="object-cover blur-sm scale-105 brightness-[0.35]"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="container max-w-screen-2xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto space-y-6 md:space-y-8">
              <h1 className="text-4xl font-headline font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
                Unlock Your Voice,<br />Unleash Your Talent
              </h1>
              <p className="mt-4 md:mt-6 text-lg sm:text-xl md:text-2xl text-white/95 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 px-4">
                Join Arohi Rhythms to embark on a transformative musical journey. Our expert instructors are here to guide you every step of the way.
              </p>
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 px-4">
                <Button asChild size="lg" className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 shadow-2xl hover:scale-105 transition-transform">
                  <Link href="/classes">Explore Classes</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-transform">
                  <Link href="/contact">Enroll Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Why Choose Arohi Rhythms?</h2>
            <p className="mt-6 text-muted-foreground text-lg md:text-xl leading-relaxed">
              Immerse yourself in the rich heritage of Indian classical music with personalized guidance, authentic techniques, and a nurturing environment designed to help you discover your true musical voice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-border/50 hover:shadow-xl transition-all hover:-translate-y-1 group">
              <CardHeader className="space-y-4">
                <div className="mx-auto bg-gradient-to-br from-primary/20 to-primary/5 p-5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">Expert Classical Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">Learn from experienced instructors deeply rooted in Indian classical traditions, offering personalized attention to help you master ragas, talas, and authentic vocal techniques.</p>
              </CardContent>
            </Card>
            <Card className="border-border/50 hover:shadow-xl transition-all hover:-translate-y-1 group">
              <CardHeader className="space-y-4">
                <div className="mx-auto bg-gradient-to-br from-primary/20 to-primary/5 p-5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                  <Music className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">Traditional Meets Modern</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">Experience the perfect blend of time-honored classical methods with contemporary teaching approaches, making ancient art forms accessible and engaging for today's learners.</p>
              </CardContent>
            </Card>
            <Card className="border-border/50 hover:shadow-xl transition-all hover:-translate-y-1 group">
              <CardHeader className="space-y-4">
                <div className="mx-auto bg-gradient-to-br from-primary/20 to-primary/5 p-5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                  <Mic className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">Performance & Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">Build confidence through regular recitals, concerts, and collaborative sessions. We provide a supportive platform to showcase your progress and connect with fellow music enthusiasts.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="classes" className="py-12 md:py-24 lg:py-32">
        <div className="container max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div className="text-left max-w-3xl">
              <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Featured Classes</h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Find the perfect class to start your musical journey.
              </p>
            </div>
            <Button asChild variant="outline" className="mt-4 md:mt-0">
              <Link href="/classes">View All Classes <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredClasses.map((cls) => {
              const classImage = PlaceHolderImages.find(img => img.id === cls.imageId);
              return (
                <Card key={cls.id} className="overflow-hidden group transition-shadow hover:shadow-xl">
                  <CardHeader className="p-0">
                    {classImage && (
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={classImage.imageUrl}
                          alt={classImage.description}
                          data-ai-hint={classImage.imageHint}
                          width={600}
                          height={400}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="font-headline text-xl mb-2">{cls.name}</CardTitle>
                    <CardDescription>{cls.description}</CardDescription>
                    <Button asChild variant="link" className="px-0 mt-4">
                      <Link href={`/classes/${cls.slug}`}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="instructors" className="py-12 md:py-24 lg:py-32">
        <div className="container max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Your Guide to Musical Excellence</h2>
            <p className="mt-6 text-muted-foreground text-lg md:text-xl leading-relaxed">
              Learn from accomplished artists who bring years of performance experience and a deep passion for nurturing the next generation of classical musicians.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            {instructors.map((instructor) => {
              const instructorImage = PlaceHolderImages.find(img => img.id === instructor.imageId);
              return (
                <Card key={instructor.id} className="border-border/50 shadow-xl hover:shadow-2xl transition-all">
                  <CardContent className="p-8 md:p-10">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                      {instructorImage && (
                        <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-background ring-4 ring-primary/20 shadow-lg flex-shrink-0">
                          <AvatarImage src={instructorImage.imageUrl} alt={instructor.name} data-ai-hint={instructorImage.imageHint} />
                          <AvatarFallback className="text-3xl">{instructor.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      )}
                      <div className="text-center md:text-left space-y-4">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-headline font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">{instructor.name}</h3>
                          <p className="text-sm text-primary font-medium mt-1">Lead Instructor & Founder</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                            <Music className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium">15+ Years Performance Experience</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                            <Users className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium">7 Years Classical Music Expertise</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-base">{instructor.bio}</p>
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
  );
}
