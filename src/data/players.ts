import { Player } from '../types/game';

export const allPlayers: Player[] = [
  // Legendary Batsmen
  {
    name: "Virat Kohli",
    country: "India",
    position: "Batsman",
    batting: { Test: 8676, ODI: 13794, T20I: 4037 },
    bowling: { Test: 1, ODI: 4, T20I: 4 },
    image: "https://images.pexels.com/photos/3661405/pexels-photo-3661405.jpeg"
  },
  {
    name: "Babar Azam",
    country: "Pakistan",
    position: "Batsman",
    batting: { Test: 3359, ODI: 5729, T20I: 3485 },
    bowling: { Test: 0, ODI: 1, T20I: 0 },
    image: "https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg"
  },
  {
    name: "Steve Smith",
    country: "Australia",
    position: "Batsman",
    batting: { Test: 9685, ODI: 4378, T20I: 1067 },
    bowling: { Test: 17, ODI: 29, T20I: 8 },
    image: "https://images.pexels.com/photos/8007392/pexels-photo-8007392.jpeg"
  },
  {
    name: "Kane Williamson",
    country: "New Zealand",
    position: "Batsman",
    batting: { Test: 8743, ODI: 6173, T20I: 2107 },
    bowling: { Test: 29, ODI: 37, T20I: 12 },
    image: "https://images.pexels.com/photos/7551651/pexels-photo-7551651.jpeg"
  },
  {
    name: "Joe Root",
    country: "England",
    position: "Batsman",
    batting: { Test: 12377, ODI: 6109, T20I: 893 },
    bowling: { Test: 33, ODI: 32, T20I: 5 },
    image: "https://images.pexels.com/photos/8007403/pexels-photo-8007403.jpeg"
  },
  {
    name: "Rohit Sharma",
    country: "India",
    position: "Batsman",
    batting: { Test: 4301, ODI: 10866, T20I: 4026 },
    bowling: { Test: 2, ODI: 8, T20I: 1 },
    image: "https://images.pexels.com/photos/7551654/pexels-photo-7551654.jpeg"
  },
  {
    name: "David Warner",
    country: "Australia",
    position: "Batsman",
    batting: { Test: 8786, ODI: 6007, T20I: 3277 },
    bowling: { Test: 1, ODI: 0, T20I: 0 },
    image: "https://images.pexels.com/photos/8007395/pexels-photo-8007395.jpeg"
  },
  {
    name: "Quinton de Kock",
    country: "South Africa",
    position: "Wicket-keeper",
    batting: { Test: 3300, ODI: 5422, T20I: 2207 },
    bowling: { Test: 0, ODI: 0, T20I: 0 },
    image: "https://images.pexels.com/photos/7551648/pexels-photo-7551648.jpeg"
  },
  {
    name: "Rishabh Pant",
    country: "India",
    position: "Wicket-keeper",
    batting: { Test: 2271, ODI: 865, T20I: 987 },
    bowling: { Test: 0, ODI: 0, T20I: 0 },
    image: "https://images.pexels.com/photos/8007397/pexels-photo-8007397.jpeg"
  },
  {
    name: "Jos Buttler",
    country: "England",
    position: "Wicket-keeper",
    batting: { Test: 2281, ODI: 4120, T20I: 2983 },
    bowling: { Test: 0, ODI: 0, T20I: 0 },
    image: "https://images.pexels.com/photos/7551645/pexels-photo-7551645.jpeg"
  },

  // Legendary Bowlers
  {
    name: "Jasprit Bumrah",
    country: "India",
    position: "Bowler",
    batting: { Test: 117, ODI: 27, T20I: 11 },
    bowling: { Test: 159, ODI: 149, T20I: 89 },
    image: "https://images.pexels.com/photos/8007399/pexels-photo-8007399.jpeg"
  },
  {
    name: "Pat Cummins",
    country: "Australia",
    position: "Bowler",
    batting: { Test: 1000, ODI: 111, T20I: 56 },
    bowling: { Test: 269, ODI: 111, T20I: 42 },
    image: "https://images.pexels.com/photos/7551642/pexels-photo-7551642.jpeg"
  },
  {
    name: "Trent Boult",
    country: "New Zealand",
    position: "Bowler",
    batting: { Test: 679, ODI: 227, T20I: 43 },
    bowling: { Test: 317, ODI: 169, T20I: 62 },
    image: "https://images.pexels.com/photos/8007401/pexels-photo-8007401.jpeg"
  },
  {
    name: "Kagiso Rabada",
    country: "South Africa",
    position: "Bowler",
    batting: { Test: 711, ODI: 130, T20I: 47 },
    bowling: { Test: 298, ODI: 154, T20I: 60 },
    image: "https://images.pexels.com/photos/7551639/pexels-photo-7551639.jpeg"
  },
  {
    name: "Rashid Khan",
    country: "Afghanistan",
    position: "Bowler",
    batting: { Test: 397, ODI: 653, T20I: 370 },
    bowling: { Test: 34, ODI: 170, T20I: 145 },
    image: "https://images.pexels.com/photos/8007394/pexels-photo-8007394.jpeg"
  },
  {
    name: "Shaheen Afridi",
    country: "Pakistan",
    position: "Bowler",
    batting: { Test: 223, ODI: 89, T20I: 31 },
    bowling: { Test: 112, ODI: 101, T20I: 47 },
    image: "https://images.pexels.com/photos/7551636/pexels-photo-7551636.jpeg"
  },
  {
    name: "Yuzvendra Chahal",
    country: "India",
    position: "Bowler",
    batting: { Test: 18, ODI: 112, T20I: 73 },
    bowling: { Test: 1, ODI: 121, T20I: 96 },
    image: "https://images.pexels.com/photos/8007393/pexels-photo-8007393.jpeg"
  },
  {
    name: "Mitchell Starc",
    country: "Australia",
    position: "Bowler",
    batting: { Test: 1154, ODI: 346, T20I: 92 },
    bowling: { Test: 358, ODI: 302, T20I: 60 },
    image: "https://images.pexels.com/photos/7551633/pexels-photo-7551633.jpeg"
  },

  // All-rounders
  {
    name: "Ben Stokes",
    country: "England",
    position: "All-rounder",
    batting: { Test: 6568, ODI: 2919, T20I: 612 },
    bowling: { Test: 199, ODI: 74, T20I: 28 },
    image: "https://images.pexels.com/photos/8007390/pexels-photo-8007390.jpeg"
  },
  {
    name: "Ravindra Jadeja",
    country: "India",
    position: "All-rounder",
    batting: { Test: 3200, ODI: 2756, T20I: 515 },
    bowling: { Test: 294, ODI: 220, T20I: 54 },
    image: "https://images.pexels.com/photos/7551630/pexels-photo-7551630.jpeg"
  },
  {
    name: "Jason Holder",
    country: "West Indies",
    position: "All-rounder",
    batting: { Test: 2423, ODI: 1550, T20I: 385 },
    bowling: { Test: 161, ODI: 171, T20I: 43 },
    image: "https://images.pexels.com/photos/8007388/pexels-photo-8007388.jpeg"
  },
  {
    name: "Shakib Al Hasan",
    country: "Bangladesh",
    position: "All-rounder",
    batting: { Test: 4609, ODI: 7570, T20I: 2551 },
    bowling: { Test: 237, ODI: 317, T20I: 146 },
    image: "https://images.pexels.com/photos/7551627/pexels-photo-7551627.jpeg"
  },
  {
    name: "Glenn Maxwell",
    country: "Australia",
    position: "All-rounder",
    batting: { Test: 339, ODI: 3732, T20I: 2319 },
    bowling: { Test: 4, ODI: 56, T20I: 71 },
    image: "https://images.pexels.com/photos/8007385/pexels-photo-8007385.jpeg"
  },
  {
    name: "Andre Russell",
    country: "West Indies",
    position: "All-rounder",
    batting: { Test: 571, ODI: 1034, T20I: 1033 },
    bowling: { Test: 11, ODI: 42, T20I: 69 },
    image: "https://images.pexels.com/photos/7551624/pexels-photo-7551624.jpeg"
  },
  {
    name: "Hardik Pandya",
    country: "India",
    position: "All-rounder",
    batting: { Test: 532, ODI: 1456, T20I: 908 },
    bowling: { Test: 17, ODI: 70, T20I: 72 },
    image: "https://images.pexels.com/photos/8007383/pexels-photo-8007383.jpeg"
  },

  // Additional Quality Players
  {
    name: "Mohammad Rizwan",
    country: "Pakistan",
    position: "Wicket-keeper",
    batting: { Test: 1472, ODI: 1409, T20I: 3226 },
    bowling: { Test: 0, ODI: 0, T20I: 0 },
    image: "https://images.pexels.com/photos/7551621/pexels-photo-7551621.jpeg"
  },
  {
    name: "Jonny Bairstow",
    country: "England",
    position: "Wicket-keeper",
    batting: { Test: 5416, ODI: 4545, T20I: 1549 },
    bowling: { Test: 0, ODI: 0, T20I: 0 },
    image: "https://images.pexels.com/photos/8007381/pexels-photo-8007381.jpeg"
  },
  {
    name: "Marnus Labuschagne",
    country: "Australia",
    position: "Batsman",
    batting: { Test: 4114, ODI: 294, T20I: 36 },
    bowling: { Test: 3, ODI: 2, T20I: 0 },
    image: "https://images.pexels.com/photos/7551618/pexels-photo-7551618.jpeg"
  },
  {
    name: "Devon Conway",
    country: "New Zealand",
    position: "Batsman",
    batting: { Test: 1028, ODI: 1179, T20I: 1724 },
    bowling: { Test: 0, ODI: 0, T20I: 0 },
    image: "https://images.pexels.com/photos/8007379/pexels-photo-8007379.jpeg"
  },
  {
    name: "Tim Southee",
    country: "New Zealand",
    position: "Bowler",
    batting: { Test: 1327, ODI: 273, T20I: 99 },
    bowling: { Test: 391, ODI: 206, T20I: 156 },
    image: "https://images.pexels.com/photos/7551615/pexels-photo-7551615.jpeg"
  }
];