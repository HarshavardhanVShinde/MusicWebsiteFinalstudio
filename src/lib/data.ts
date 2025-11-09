export type Instructor = {
  id: number;
  name: string;
  bio: string;
  imageId: string;
};

export type ClassInfo = {
  id: number;
  slug: string;
  name:string;
  description: string;
  longDescription: string;
  schedule: string;
  instructorId: number;
  imageId: string;
};

export const instructors: Instructor[] = [
  {
    id: 1,
    name: 'Shreya Sadhu',
    bio: 'Over 15 years of experience in singing and performing, with 7 years dedicated to classical music. Passionate about nurturing talent and sharing the beauty of Indian classical traditions.',
    imageId: 'instructor-one',
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
    slug: 'sitar-essentials',
    name: 'Sitar Essentials',
    description: 'Begin your journey with the enchanting sounds of the sitar.',
    longDescription: 'This beginner-friendly course introduces you to the sitar, one of the most iconic instruments of Indian classical music. You will learn the basics of holding the instrument, fingerings, and playing simple melodies.',
    schedule: 'Tue, 5:00 PM - 6:00 PM',
    instructorId: 4,
    imageId: 'class-sitar',
  },
  {
    id: 5,
    slug: 'tabla-rhythms',
    name: 'Tabla Rhythms',
    description: 'Discover the rhythmic heartbeat of Indian music with the tabla.',
    longDescription: 'Learn the fundamental bols (strokes) and taals (rhythmic cycles) of the tabla. This course is designed for absolute beginners and provides a solid foundation for accompanying and solo performance.',
    schedule: 'Thu, 6:00 PM - 7:00 PM',
    instructorId: 1,
    imageId: 'class-tabla',
  },
];
