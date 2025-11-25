import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User } from 'lucide-react';

import { classes, instructors } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props) {
  const classInfo = classes.find(c => c.slug === params.slug);

  if (!classInfo) {
    return {
      title: 'Class Not Found',
    };
  }

  return {
    title: `${classInfo.name} - Arohi Rhythms`,
    description: classInfo.description,
    openGraph: {
      title: `${classInfo.name} - Arohi Rhythms`,
      description: classInfo.description,
      url: `https://arohirhythms.in/classes/${classInfo.slug}`,
      images: [
        {
          url: `/og-image.jpg`, // Fallback or dynamic if available
          width: 1200,
          height: 630,
          alt: classInfo.name,
        },
      ],
    },
  };
}

export default function ClassDetailPage({ params }: Props) {
  const classInfo = classes.find(c => c.slug === params.slug);

  if (!classInfo) {
    notFound();
  }

  const instructor = instructors.find(i => i.id === classInfo.instructorId);
  const classImage = PlaceHolderImages.find(img => img.id === classInfo.imageId);
  const instructorImage = instructor ? PlaceHolderImages.find(img => img.id === instructor.imageId) : undefined;

  return (
    <div className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          <div className="md:col-span-2 space-y-6 md:space-y-8">
            {classImage && (
              <div className="aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                <Image
                  src={classImage.imageUrl}
                  alt={classImage.description}
                  data-ai-hint={classImage.imageHint}
                  width={1200}
                  height={675}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                {classInfo.name}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {classInfo.longDescription}
              </p>
            </div>
          </div>

          <div className="md:col-span-1 space-y-6">
            <Card className="shadow-xl border-border/50 hover:shadow-2xl transition-shadow">
              <CardHeader>
                <CardTitle className="font-headline text-xl">Class Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 md:gap-4 p-3 rounded-lg bg-primary/5">
                  <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm md:text-base text-muted-foreground">{classInfo.schedule}</span>
                </div>
                {instructor && (
                  <div className="flex items-center gap-3 md:gap-4 p-3 rounded-lg bg-primary/5">
                    <User className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm md:text-base text-muted-foreground">With {instructor.name}</span>
                  </div>
                )}
              </CardContent>
            </Card>

            {instructor && (
              <Card className="shadow-xl border-border/50 hover:shadow-2xl transition-shadow">
                <CardHeader>
                  <CardTitle className="font-headline text-xl">Your Instructor</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center gap-3 md:gap-4">
                  {instructorImage && (
                    <Avatar className="h-16 w-16 md:h-20 md:w-20 border-2 border-primary/20 flex-shrink-0">
                      <AvatarImage src={instructorImage.imageUrl} alt={instructor.name} data-ai-hint={instructorImage.imageHint} />
                      <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <h4 className="font-semibold text-base md:text-lg">{instructor.name}</h4>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{instructor.bio}</p>
                  </div>
                </CardContent>
              </Card>
            )}

            <Button size="lg" className="w-full shadow-lg hover:shadow-xl transition-all hover:scale-105" asChild>
              <Link href="/contact">Enroll Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return classes.map(c => ({
    slug: c.slug,
  }));
}
