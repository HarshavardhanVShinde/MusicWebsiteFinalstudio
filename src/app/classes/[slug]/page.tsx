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
    <div className="py-12 md:py-24">
      <div className="container max-w-screen-2xl">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="md:col-span-2">
            {classImage && (
              <div className="aspect-video rounded-lg overflow-hidden mb-8 shadow-lg">
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
            <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl mb-4">
              {classInfo.name}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {classInfo.longDescription}
            </p>
          </div>

          <div className="md:col-span-1 space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline">Class Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-4">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>{classInfo.schedule}</span>
                </div>
                {instructor && (
                    <div className="flex items-center gap-4">
                        <User className="h-5 w-5 text-primary" />
                        <span>With {instructor.name}</span>
                    </div>
                )}
              </CardContent>
            </Card>

            {instructor && (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline">Your Instructor</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center gap-4">
                  {instructorImage && (
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={instructorImage.imageUrl} alt={instructor.name} data-ai-hint={instructorImage.imageHint}/>
                      <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <h4 className="font-semibold">{instructor.name}</h4>
                    <p className="text-sm text-muted-foreground">{instructor.bio}</p>
                  </div>
                </CardContent>
              </Card>
            )}

            <Button size="lg" className="w-full" asChild>
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
