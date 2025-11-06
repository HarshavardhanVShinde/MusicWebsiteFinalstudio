export type Instructor = {
  id: number;
  name: string;
  bio: string;
  imageId: string;
};

export type ClassInfo = {
  id: number;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  schedule: string;
  instructorId: number;
  imageId: string;
};

export const instructors: Instructor[] = [
  {
    id: 1,
    name: 'Aria Sharma',
    bio: 'With over 15 years of experience in Hindustani classical music, Aria brings a deep passion and understanding of traditional vocal techniques.',
    imageId: 'instructor-one',
  },
  {
    id: 2,
    name: 'Ben Carter',
    bio: 'A graduate of Berklee College of Music, Ben specializes in contemporary Western vocals, from pop to jazz, focusing on performance and expression.',
    imageId: 'instructor-three',
  },
  {
    id: 3,
    name: 'Chloe Das',
    bio: 'Chloe is a versatile singer and performer with a love for Bollywood music. Her energetic classes make learning popular songs fun and engaging.',
    imageId: 'instructor-two',
  },
];

export const classes: ClassInfo[] = [
  {
    id: 1,
    slug: 'hindustani-classical-vocals',
    name: 'Hindustani Classical Vocals',
    description: 'Master the foundations of Indian classical music, from swaras to ragas.',
    longDescription: 'Our Hindustani Classical Vocal course offers comprehensive training in the fundamentals of this ancient art form. Students will learn about proper posture, breathing techniques, voice culture, and the intricate system of ragas and talas. This class is perfect for beginners and those looking to strengthen their classical base.',
    schedule: 'Mon & Wed, 6:00 PM - 7:00 PM',
    instructorId: 1,
    imageId: 'class-hindustani',
  },
  {
    id: 2,
    slug: 'western-vocal-techniques',
    name: 'Western Vocal Techniques',
    description: 'Explore contemporary singing styles, from pop and rock to R&B and jazz.',
    longDescription: 'This course covers a wide range of Western vocal styles. You will learn about vocal health, pitch control, harmonizing, and performance skills. We focus on helping you find your unique voice and building confidence to perform on stage.',
    schedule: 'Tue & Thu, 7:30 PM - 8:30 PM',
    instructorId: 2,
    imageId: 'class-western',
  },
  {
    id: 3,
    slug: 'bollywood-singing',
    name: 'Bollywood Singing',
    description: 'Learn to sing your favorite Bollywood hits with style and emotion.',
    longDescription: 'Dive into the vibrant world of Bollywood music! This class focuses on the vocal techniques and emotional expression required for film songs. From timeless classics to the latest chartbusters, you\'ll learn to sing with the flair of a playback singer.',
    schedule: 'Fri, 5:00 PM - 6:30 PM',
    instructorId: 3,
    imageId: 'class-bollywood',
  },
  {
    id: 4,
    slug: 'acoustic-guitar-basics',
    name: 'Acoustic Guitar Basics',
    description: 'Learn the fundamentals of acoustic guitar, from chords to strumming.',
    longDescription: 'Our beginner guitar course is designed to get you playing your favorite songs in no time. We cover basic chords, strumming patterns, and music theory in a fun and supportive environment. No prior experience is necessary!',
    schedule: 'Sat, 11:00 AM - 12:00 PM',
    instructorId: 2,
    imageId: 'class-guitar',
  },
];
