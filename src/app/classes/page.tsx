import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { classes } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Our Classes - Arohi Rhythms',
  description: 'Explore all the music and singing classes offered at Arohi Rhythms.',
};

export default function ClassesPage() {
  return (
    <div className="py-12 md:py-24 lg:py-32">
      <div className="container max-w-screen-2xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">Our Classes</h1>
          <p className="mt-4 text-muted-foreground text-lg">
            Whether you're a beginner or an experienced musician, we have a class for you.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((cls) => {
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
    </div>
  );
}
