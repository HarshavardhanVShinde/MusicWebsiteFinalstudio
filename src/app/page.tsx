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
      <section className="relative w-full pt-14">
        <div className="relative h-[60vh] md:h-[80vh]">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              data-ai-hint={heroImage.imageHint}
              fill
              className="object-cover object-top"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="container max-w-screen-2xl">
          <div className="relative -mt-32 md:-mt-48 lg:-mt-64 z-10 max-w-3xl">
            <h1 className="text-4xl font-headline font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
              Unlock Your Voice, Unleash Your Talent
            </h1>
            <p className="mt-6 text-lg text-white/90 md:text-xl [text-shadow:0_1px_2px_rgba(0,0,0,0.4)]">
              Join Arohi Rhythms to embark on a transformative musical journey. Our expert instructors are here to guide you every step of the way.
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg">
                <Link href="/classes">Explore Classes</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact">Enroll Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container max-w-screen-2xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Why Choose Arohi Rhythms?</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              We offer a unique blend of traditional techniques and modern teaching methods to nurture your musical abilities.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline pt-4">Expert Instructors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Learn from passionate and experienced musicians dedicated to your growth.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  <Music className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline pt-4">Diverse Curriculum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">From classical to contemporary, explore a wide range of musical styles.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  <Mic className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline pt-4">Performance Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Showcase your talent at our regular student concerts and events.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="classes" className="py-12 md:py-24 lg:py-32">
        <div className="container max-w-screen-2xl">
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

      <section id="instructors" className="py-12 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container max-w-screen-2xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Meet Our Instructors</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Our teachers are accomplished artists with a passion for music education.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor) => {
              const instructorImage = PlaceHolderImages.find(img => img.id === instructor.imageId);
              return (
                <Card key={instructor.id} className="text-center">
                  <CardContent className="pt-6">
                    {instructorImage && (
                      <Avatar className="h-24 w-24 mx-auto mb-4 border-4 border-background ring-2 ring-primary">
                        <AvatarImage src={instructorImage.imageUrl} alt={instructor.name} data-ai-hint={instructorImage.imageHint} />
                        <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    )}
                    <h3 className="text-xl font-headline font-semibold">{instructor.name}</h3>
                    <p className="text-muted-foreground mt-2 px-4">{instructor.bio}</p>
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
