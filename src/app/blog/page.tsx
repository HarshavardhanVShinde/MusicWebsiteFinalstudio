import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Classical Music Blog | Tips & Guides for Singers | Arohi Rhythms',
  description: 'Expert tips, practice routines, and guides for learning Indian classical music. Read our blog for vocal techniques, raga tutorials, and music learning advice.',
  keywords: 'classical music blog, singing tips, Hindustani music guide, vocal practice routine, raga learning, music education blog',
};

const blogPosts = [
  {
    slug: 'best-practice-routine-beginners-indian-classical-singing-30-day-plan',
    title: 'Best Practice Routine for Beginners in Indian Classical Singing — 30 Day Plan',
    excerpt: 'A structured 30-day practice schedule to build your foundation in Hindustani classical vocals. Learn daily exercises for voice culture, swaras, and basic ragas.',
    date: '2024-01-15',
    category: 'Practice Tips',
  },
  {
    slug: 'how-to-choose-right-raga-for-your-voice-type',
    title: 'How to Choose the Right Raga for Your Voice Type',
    excerpt: 'Discover which ragas suit your vocal range and timbre. Learn about voice classification in Indian classical music and how to select ragas that showcase your strengths.',
    date: '2024-01-10',
    category: 'Technique',
  },
  {
    slug: '7-breathing-exercises-classical-singers',
    title: '7 Breathing Exercises Every Classical Singer Must Practice',
    excerpt: 'Master pranayama and breathing techniques essential for classical singing. Improve your breath control, stamina, and vocal power with these daily exercises.',
    date: '2024-01-05',
    category: 'Vocal Health',
  },
  {
    slug: 'understanding-tala-system-beginners-guide',
    title: 'Understanding the Tala System: A Beginners Guide',
    excerpt: 'Demystify the rhythmic framework of Indian classical music. Learn about common talas like Teentaal, Ektaal, and Jhaptaal with simple explanations.',
    date: '2023-12-28',
    category: 'Music Theory',
  },
  {
    slug: 'online-vs-offline-music-classes-which-is-better',
    title: 'Online vs Offline Music Classes: Which Is Better for You?',
    excerpt: 'Compare the benefits of learning music online versus in-person. Find out which format suits your learning style, schedule, and goals.',
    date: '2023-12-20',
    category: 'Learning Tips',
  },
  {
    slug: 'top-5-mistakes-beginner-classical-singers-make',
    title: 'Top 5 Mistakes Beginner Classical Singers Make (And How to Avoid Them)',
    excerpt: 'Learn from common pitfalls that slow down progress. Discover what mistakes to avoid in your classical singing journey and how to practice effectively.',
    date: '2023-12-15',
    category: 'Beginner Guide',
  },
  {
    slug: 'how-to-maintain-vocal-health-during-monsoon',
    title: 'How to Maintain Vocal Health During Monsoon Season',
    excerpt: 'Protect your voice during humid weather. Essential tips for singers to prevent throat infections, maintain vocal clarity, and practice safely.',
    date: '2023-12-10',
    category: 'Vocal Health',
  },
  {
    slug: 'introduction-to-raga-yaman-beginners',
    title: 'Introduction to Raga Yaman for Beginners',
    excerpt: 'Start your raga journey with Yaman, one of the most popular evening ragas. Learn its structure, characteristic phrases, and simple compositions.',
    date: '2023-12-05',
    category: 'Raga Tutorial',
  },
  {
    slug: 'benefits-of-learning-classical-music-for-children',
    title: 'Benefits of Learning Classical Music for Children',
    excerpt: 'Discover how classical music training enhances cognitive development, discipline, and creativity in children. Why start young matters.',
    date: '2023-11-28',
    category: 'For Parents',
  },
  {
    slug: 'how-to-prepare-for-your-first-music-performance',
    title: 'How to Prepare for Your First Music Performance',
    excerpt: 'Overcome stage fright and deliver a confident performance. Practical tips for rehearsal, mental preparation, and handling performance anxiety.',
    date: '2023-11-20',
    category: 'Performance',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20 pb-12 md:pt-24 lg:pt-32 md:pb-16 lg:pb-24">
      <div className="container max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-10 lg:mb-12 space-y-4 md:space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tight">
            Classical Music Blog
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Expert tips, practice guides, and insights to help you master Indian classical music. Learn from experienced instructors and accelerate your musical journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="overflow-hidden group transition-all hover:shadow-2xl hover:-translate-y-1 border-border/50">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  <span className="ml-auto text-primary font-medium">{post.category}</span>
                </div>
                <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed mb-4">{post.excerpt}</CardDescription>
                <Button asChild variant="link" className="px-0 group/btn">
                  <Link href={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-16 bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
          <CardContent className="p-8 md:p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Ready to Start Your Musical Journey?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join Arohi Rhythms and learn from experienced instructors. Book your free trial class today.
            </p>
            <Button asChild size="lg" className="shadow-lg">
              <Link href="/contact">Book Free Trial</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
