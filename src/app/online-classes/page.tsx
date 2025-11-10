import Link from 'next/link';
import { Video, Headphones, Calendar, Clock, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Online Music Classes from Home | Live Hindustani Vocal Lessons | Arohi Rhythms',
  description: 'Learn classical singing from home with live online music classes. Personalised Hindustani vocal training, recorded practice sessions, and flexible schedules. Book your trial today.',
  keywords: 'online music classes, learn music from home, online singing lessons, virtual music classes, Hindustani vocal online, online classical music training',
};

export default function OnlineClassesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tight">
            Online Music Classes from Home
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Experience world-class Hindustani vocal training from the comfort of your home. Live interactive sessions, personalised feedback, and flexible schedules designed for busy learners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-primary/20 hover:shadow-xl transition-all">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Video className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">Live Interactive Lessons</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Connect with your instructor in real-time through high-quality video sessions. Get instant feedback on your technique, pitch, and expression just like in-person classes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:shadow-xl transition-all">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Headphones className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">Recorded Practice Sessions</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Access recordings of your lessons anytime. Review techniques, practice at your own pace, and track your progress with our comprehensive student portal.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:shadow-xl transition-all">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">Flexible Scheduling</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Choose class timings that suit your lifestyle. Morning, afternoon, evening, or weekend slots available. Reschedule easily when life gets busy.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:shadow-xl transition-all">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">Student Portal Access</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Your personalised dashboard with lesson recordings, practice materials, progress reports, and direct messaging with your instructor.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-8">Why Choose Online Classes?</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Learn from anywhere in India or abroad',
              'Save time on commute and travel costs',
              'Same quality instruction as in-person classes',
              'Perfect for working professionals and students',
              'Access to recorded sessions for revision',
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-8">What Our Students Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-primary/20">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "The online classes are so convenient! I can learn classical singing from my home in Bangalore. The recordings help me practice daily."
                </p>
                <p className="font-semibold">— Priya Sharma, Software Engineer</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Shreya ma'am gives such personalised attention even in online sessions. My raga understanding has improved tremendously in just 3 months."
                </p>
                <p className="font-semibold">— Rahul Desai, College Student</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "As a working mother, online classes are perfect. I can learn during my lunch break. The flexibility is amazing!"
                </p>
                <p className="font-semibold">— Anjali Mehta, Marketing Manager</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
          <CardContent className="p-8 md:p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Start Learning from Home Today</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Book your free trial online class. Experience our teaching methodology and see if it's the right fit for you. No credit card required.
            </p>
            <div className="space-y-4">
              <p className="text-2xl font-bold text-primary">₹2,500/month • 8 sessions • 45 mins each</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="shadow-lg">
                  <Link href="/contact">Book Free Trial Class</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/courses">View All Courses</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
