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
    slug: 'palta-meru-khand',
    name: 'Palta & Meru Khand',
    description: 'Develop vocal agility and flexibility through systematic palta exercises and meru khand patterns.',
    longDescription: 'Master the art of palta and meru khand - essential vocal exercises that build agility, clarity, and command over swaras. Practice ascending and descending patterns, develop speed and precision in note transitions, and strengthen your vocal technique through these traditional training methods.',
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
    slug: 'swarmalika',
    name: 'Swarmalika',
    description: 'Learn beautiful melodic patterns and garlands of notes that enhance musical expression.',
    longDescription: 'Explore swarmalika - garlands of melodic patterns that weave together to create beautiful musical phrases. Practice intricate note patterns, develop ear training, and learn to create flowing melodic lines. This course enhances your ability to embellish and ornament your singing.',
    schedule: 'Sat, 10:00 AM - 11:30 AM',
    instructorId: 1,
    imageId: 'class-hindustani',
  },
  {
    id: 5,
    slug: 'bollywood-songs',
    name: 'Bollywood Songs',
    description: 'Master popular Bollywood melodies with proper technique and emotional expression.',
    longDescription: 'Learn to sing your favorite Bollywood songs with proper classical technique and contemporary style. Understand film music composition, master voice modulation, develop expression, and learn breathing techniques specific to film songs. From classic melodies to modern hits, develop versatility in your singing.',
    schedule: 'Sun, 2:00 PM - 3:30 PM',
    instructorId: 1,
    imageId: 'class-hindustani',
  },
  {
    id: 6,
    slug: 'adhunik-bengali',
    name: 'Modern Bengali Songs',
    description: 'Explore the rich tradition of modern Bengali music and contemporary compositions.',
    longDescription: 'Dive into the beautiful world of Adhunik Bengali songs - modern Bengali compositions that blend classical sensibilities with contemporary themes. Learn iconic songs from legendary Bengali composers, understand the unique Bengali musical style, and develop the ability to express deep emotions through these melodious compositions.',
    schedule: 'Fri, 6:00 PM - 7:30 PM',
    instructorId: 1,
    imageId: 'class-hindustani',
  },
  {
    id: 7,
    slug: 'bhajans',
    name: 'Bhajans in Bengali & Hindi',
    description: 'Learn devotional bhajans in Bengali and Hindi to express spiritual devotion through music.',
    longDescription: 'Immerse yourself in the divine world of bhajans - devotional songs that express love and devotion to the divine. Learn traditional and contemporary bhajans in both Bengali and Hindi, understand the spiritual meaning behind each composition, and develop the ability to sing with devotion and emotional depth.',
    schedule: 'Thu, 7:00 PM - 8:30 PM',
    instructorId: 1,
    imageId: 'class-hindustani',
  },
  {
    id: 8,
    slug: 'rabindra-sangeet',
    name: 'Rabindra Sangeet',
    description: 'Master the timeless compositions of Rabindranath Tagore with authentic style and expression.',
    longDescription: 'Study Rabindra Sangeet - the profound musical compositions of Nobel laureate Rabindranath Tagore. Learn the unique raga-based melodies, understand the deep poetry and philosophy, and master the authentic Santiniketan style of rendition. Explore songs across various themes - seasons, devotion, love, and patriotism.',
    schedule: 'Tue & Sat, 4:00 PM - 5:30 PM',
    instructorId: 1,
    imageId: 'class-hindustani',
  },
  {
    id: 9,
    slug: 'nazrul-geeti',
    name: 'Nazrul Geeti',
    description: 'Learn the revolutionary and romantic compositions of Kazi Nazrul Islam.',
    longDescription: 'Explore Nazrul Geeti - the passionate and diverse musical legacy of Kazi Nazrul Islam, the Rebel Poet of Bengal. Learn his revolutionary songs, romantic compositions, and devotional pieces. Master the distinctive style that blends classical ragas with folk elements, and understand the historical and cultural context of these powerful songs.',
    schedule: 'Mon, 5:00 PM - 6:30 PM',
    instructorId: 1,
    imageId: 'class-hindustani',
  },
];
