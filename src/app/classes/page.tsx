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
    <div className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Our Classes</h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed px-4">
            Whether you're a beginner or an experienced musician, we have a class for you.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((cls) => {
            const classImage = PlaceHolderImages.find(img => img.id === cls.imageId);
            return (
              <Card key={cls.id} className="overflow-hidden group transition-all hover:shadow-2xl hover:-translate-y-1 border-border/50">
                <CardHeader className="p-0">
                  {classImage && (
                    <div className="aspect-video overflow-hidden relative">
                      <Image
                        src={classImage.imageUrl}
                        alt={classImage.description}
                        data-ai-hint={classImage.imageHint}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  )}
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-xl mb-3 group-hover:text-primary transition-colors">{cls.name}</CardTitle>
                  <CardDescription className="leading-relaxed">{cls.description}</CardDescription>
                  <Button asChild variant="link" className="px-0 mt-4 group/btn">
                    <Link href={`/classes/${cls.slug}`}>Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" /></Link>
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
