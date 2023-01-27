import type { Tab } from '@/types/Tabs';

export const recommendedFilm = 'Fury';

export const films: Tab[] = [
  {
    id: 'trending',
    title: 'Trending',
    content: [
      'Back to the Future',
      'Interstellar',
      'Gladiator',
      'Lord of the rings',
      'The Green Mile',
      'Forrest Gump',
      'Léon',
      'Pulp Fiction',
    ],
  },
  {
    id: 'topRated',
    title: 'Top Rated',
    content: [
      'Avatar',
      'Titanic',
      'Fury',
      'Lord of the rings',
      'The Green Mile',
      'Forrest Gump',
      'Léon',
      'Pulp Fiction',
    ],
  },
  {
    id: 'newArrivals',
    title: 'New Arrivals',
    content: [
      'The Prestige',
      'The Matrix',
      'Hachi',
      'Lord of the rings',
      'The Green Mile',
      'Forrest Gump',
      'Léon',
      'Pulp Fiction',
    ],
  },
];
