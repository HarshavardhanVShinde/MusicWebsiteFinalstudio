import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Users, Award } from 'lucide-react';
import { classes } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Classical Singing Courses | Hindustani Vocal Training | Arohi Rhythms',
  description: 'Learn classical singing with expert-led Hindustani vocal courses. Personalised training in ragas, talas, and authentic Indian classical music techniques. Enrol for trial classes today.',
  keywords: 'classical singing courses, Hindustani vocal training, Indian classical music classes, raga training, vocal music lessons, classical singing',
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tight">
            Classical Singing Courses & Hindustani Vocal Training
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Master the art of Indian classical music with personalised coaching from experienced instructors. From beginner ragas to advanced tala compositions, discover your authentic voice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="border-primary/20 hover:shadow-xl transition-all">
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-headline">Personalised Attention</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">Small batch sizes ensure individual focus on your vocal development and technique</p>
            </CardContent>
          </Card>
          <Card className="border-primary/20 hover:shadow-xl transition-all">
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-headline">Flexible Timings</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">Choose from morning, evening, or weekend batches that fit your schedule</p>
            </CardContent>
          </Card>
          <Card className="border-primary/20 hover:shadow-xl transition-all">
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-headline">Certified Training</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">Learn from certified instructors with 15+ years of performance experience</p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Our Course Offerings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((cls) => {
              const classImage = PlaceHolderImages.find(img => img.id === cls.imageId);
              return (
                <Card key={cls.id} className="overflow-hidden group transition-all hover:shadow-2xl hover:-translate-y-1">
                  <CardHeader className="p-0">
                    {classImage && (
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={classImage.imageUrl}
                          alt={classImage.description}
                          width={600}
                          height={400}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="font-headline text-xl mb-3">{cls.name}</CardTitle>
                    <CardDescription className="mb-4">{cls.description}</CardDescription>
                    <Button asChild variant="link" className="px-0">
                      <Link href={`/classes/${cls.slug}`}>View Details <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <Card className="bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
          <CardContent className="p-8 md:p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Ready to Begin Your Musical Journey?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Book a free trial class and experience the Arohi Rhythms difference. No commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="shadow-lg">
                <Link href="/contact">Book Free Trial</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/online-classes">Explore Online Classes</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
