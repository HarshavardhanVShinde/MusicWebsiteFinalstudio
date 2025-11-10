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
    bio: 'A devoted practitioner of Hindustani classical music for over 15 years, trained in the sacred guru-shishya tradition. Specializes in Dhrupad and Khayal, with deep knowledge of raga theory, tala systems, and the spiritual dimensions of classical music. Dedicated to preserving and transmitting this ancient art form to the next generation of seekers.',
    imageId: 'instructor-one',
  },
];

export const classes: ClassInfo[] = [
  {
    id: 1,
    slug: 'raga-foundation',
    name: 'Raga Foundation & Swar Sadhana',
    description: 'Master the sacred foundation of Hindustani music through systematic raga learning and swar practice.',
    longDescription: 'Embark on the sacred journey of Raga mastery. Learn the fundamental swaras (Sa Re Ga Ma Pa Dha Ni), understand the intricate structure of ragas, and develop your voice through traditional swar sadhana. This foundational course covers aroha-avaroha, pakad, and the emotional essence (rasa) of each raga.',
    schedule: 'Mon & Wed, 6:00 PM - 7:30 PM',
    instructorId: 1,
    imageId: 'class-hindustani',
  },
  {
    id: 2,
    slug: 'tala-rhythmic-mastery',
    name: 'Tala & Rhythmic Mastery',
    description: 'Dive deep into the rhythmic soul of Hindustani music through comprehensive tala training.',
    longDescription: 'Explore the intricate world of talas - the rhythmic foundation of classical music. Master Teentaal, Ektaal, Jhaptaal, and other essential talas. Learn to keep sam, understand vibhag divisions, and develop internal rhythm through traditional clapping patterns and vocal percussion.',
    schedule: 'Tue & Thu, 5:30 PM - 7:00 PM',
    instructorId: 1,
    imageId: 'class-tabla',
  },
  {
    id: 3,
    slug: 'bandish-composition',
    name: 'Bandish & Classical Compositions',
    description: 'Learn traditional bandishes and develop the art of classical composition and improvisation.',
    longDescription: 'Immerse yourself in the treasure trove of classical bandishes. Study compositions in various ragas, understand the structure of sthayi and antara, and learn the art of alap, jor, and jhala. Develop skills in improvisation while maintaining the purity of each raga\'s character.',
    schedule: 'Wed & Fri, 7:00 PM - 8:30 PM',
    instructorId: 1,
    imageId: 'class-hindustani',
  },
  {
    id: 4,
    slug: 'dhrupad-ancient-tradition',
    name: 'Dhrupad - The Ancient Tradition',
    description: 'Experience the purest form of Hindustani classical music through the ancient art of Dhrupad.',
    longDescription: 'Delve into Dhrupad, the oldest surviving form of Hindustani classical music. Learn the meditative alap, understand the spiritual significance of each note, and practice the disciplined approach to raga elaboration. This advanced course emphasizes breath control, voice culture, and the philosophical aspects of music.',
    schedule: 'Sat, 4:00 PM - 6:00 PM',
    instructorId: 1,
    imageId: 'class-sitar',
  },
  {
    id: 5,
    slug: 'khayal-expression',
    name: 'Khayal & Emotional Expression',
    description: 'Master the art of Khayal singing with focus on emotional expression and melodic improvisation.',
    longDescription: 'Explore Khayal, the most popular form of Hindustani classical music. Learn to express emotions through ragas, master the techniques of meend, gamak, and taan. Understand the difference between vilambit and drut khayal, and develop your unique style of improvisation within traditional boundaries.',
    schedule: 'Sun, 10:00 AM - 12:00 PM',
    instructorId: 1,
    imageId: 'class-hindustani',
  },
];
