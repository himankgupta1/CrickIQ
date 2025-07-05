import { Player } from '../types/game';
import batsmanImg from './batsman.png';
import bowlerImg from './bowler.png';
import allrounderImg from './all-rounder.png';


export const allPlayers: Player[] = [
    {
  name: "Virat Kohli",
  country: "India",
  position: "Batsman",
  batting: { Test: 8676, ODI: 13794, IPL: 8661 },
  bowling: { Test: 1, ODI: 4, IPL: 4 },
  image: batsmanImg
},
{
  name: "Babar Azam",
  country: "Pakistan",
  position: "Batsman",
  batting: { Test: 3772, ODI: 5729, IPL: 0 },
  bowling: { Test: 0, ODI: 1, IPL: 0 },
  image: batsmanImg
},
{
  name: "Steve Smith",
  country: "Australia",
  position: "Batsman",
  batting: { Test: 9685, ODI: 4378, IPL: 2485 },
  bowling: { Test: 19, ODI: 29, IPL: 0 },
  image: batsmanImg
},
{
  name: "Kane Williamson",
  country: "New Zealand",
  position: "Batsman",
  batting: { Test: 8743, ODI: 6173, IPL: 2128 },
  bowling: { Test: 29, ODI: 37, IPL: 0 },
  image: batsmanImg
},
{
  name: "Joe Root",
  country: "England",
  position: "Batsman",
  batting: { Test: 12377, ODI: 6109, IPL: 10 },
  bowling: { Test: 33, ODI: 32, IPL: 0 },
  image: batsmanImg
},
{
  name: "Rohit Sharma",
  country: "India",
  position: "Batsman",
  batting: { Test: 4301, ODI: 10866, IPL: 7046 },
  bowling: { Test: 2, ODI: 8, IPL: 15 },
  image: batsmanImg
},
{
  name: "David Warner",
  country: "Australia",
  position: "Batsman",
  batting: { Test: 8786, ODI: 6007, IPL: 6565 },
  bowling: { Test: 1, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Quinton de Kock",
  country: "South Africa",
  position: "Batsman",
  batting: { Test: 3300, ODI: 5422, IPL: 3309 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Rishabh Pant",
  country: "India",
  position: "Batsman",
  batting: { Test: 2271, ODI: 865, IPL: 3553 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Jos Buttler",
  country: "England",
  position: "Batsman",
  batting: { Test: 2281, ODI: 4120, IPL: 4120 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Jasprit Bumrah",
  country: "India",
  position: "Bowler",
  batting: { Test: 117, ODI: 27, IPL: 69 },
  bowling: { Test: 159, ODI: 149, IPL: 183 },
  image: bowlerImg
},
{
  name: "Pat Cummins",
  country: "Australia",
  position: "Bowler",
  batting: { Test: 1000, ODI: 111, IPL: 612 },
  bowling: { Test: 269, ODI: 111, IPL: 79 },
  image: bowlerImg
},
{
  name: "Trent Boult",
  country: "New Zealand",
  position: "Bowler",
  batting: { Test: 679, ODI: 227, IPL: 85 },
  bowling: { Test: 317, ODI: 169, IPL: 143 },
  image: bowlerImg
},
{
  name: "Kagiso Rabada",
  country: "South Africa",
  position: "Bowler",
  batting: { Test: 711, ODI: 130, IPL: 215 },
  bowling: { Test: 298, ODI: 154, IPL: 119 },
  image: bowlerImg
},
{
  name: "Rashid Khan",
  country: "Afghanistan",
  position: "Bowler",
  batting: { Test: 397, ODI: 653, IPL: 585 },
  bowling: { Test: 34, ODI: 170, IPL: 158 },
  image: bowlerImg
},{
  name: "Shaheen Afridi",
  country: "Pakistan",
  position: "Bowler",
  batting: { Test: 223, ODI: 89, IPL: 0 },
  bowling: { Test: 113, ODI: 104, IPL: 0 },
  image: bowlerImg
},
{
  name: "Yuzvendra Chahal",
  country: "India",
  position: "Bowler",
  batting: { Test: 18, ODI: 112, IPL: 37 },
  bowling: { Test: 1, ODI: 121, IPL: 221 },
  image: bowlerImg
},
{
  name: "Mitchell Starc",
  country: "Australia",
  position: "Bowler",
  batting: { Test: 1154, ODI: 346, IPL: 111 },
  bowling: { Test: 358, ODI: 236, IPL: 65 },
  image: bowlerImg
},
{
  name: "Ben Stokes",
  country: "England",
  position: "All-rounder",
  batting: { Test: 6312, ODI: 3464, IPL: 935 },
  bowling: { Test: 197, ODI: 74, IPL: 28 },
  image: allrounderImg
},
{
  name: "Ravindra Jadeja",
  country: "India",
  position: "All-rounder",
  batting: { Test: 3200, ODI: 2756, IPL: 3260 },
  bowling: { Test: 294, ODI: 220, IPL: 170 },
  image: allrounderImg
},
{
  name: "Jason Holder",
  country: "West Indies",
  position: "All-rounder",
  batting: { Test: 2898, ODI: 1958, IPL: 259 },
  bowling: { Test: 161, ODI: 157, IPL: 53 },
  image: allrounderImg
},
{
  name: "Shakib Al Hasan",
  country: "Bangladesh",
  position: "All-rounder",
  batting: { Test: 4454, ODI: 7570, IPL: 793 },
  bowling: { Test: 237, ODI: 317, IPL: 63 },
  image: allrounderImg
},
{
  name: "Glenn Maxwell",
  country: "Australia",
  position: "All-rounder",
  batting: { Test: 339, ODI: 3892, IPL: 2819 },
  bowling: { Test: 4, ODI: 60, IPL: 41 },
  image: allrounderImg
},
{
  name: "Andre Russell",
  country: "West Indies",
  position: "All-rounder",
  batting: { Test: 571, ODI: 1034, IPL: 2651 },
  bowling: { Test: 11, ODI: 42, IPL: 123 },
  image: allrounderImg
},
{
  name: "Hardik Pandya",
  country: "India",
  position: "All-rounder",
  batting: { Test: 532, ODI: 1756, IPL: 2749 },
  bowling: { Test: 17, ODI: 82, IPL: 78 },
  image: allrounderImg
},
{
  name: "Mohammad Rizwan",
  country: "Pakistan",
  position: "Batsman",
  batting: { Test: 3023, ODI: 2202, IPL: 0 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Jonny Bairstow",
  country: "England",
  position: "Batsman",
  batting: { Test: 5416, ODI: 4545, IPL: 1674 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Marnus Labuschagne",
  country: "Australia",
  position: "Batsman",
  batting: { Test: 4114, ODI: 847, IPL: 0 },
  bowling: { Test: 3, ODI: 2, IPL: 0 },
  image: batsmanImg
},{
  name: "Devon Conway",
  country: "New Zealand",
  position: "Batsman",
  batting: { Test: 1028, ODI: 1179, IPL: 1080 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Tim Southee",
  country: "New Zealand",
  position: "Bowler",
  batting: { Test: 1327, ODI: 273, IPL: 120 },
  bowling: { Test: 391, ODI: 210, IPL: 47 },
  image: bowlerImg
},
{
  name: "Jacob Bethell",
  country: "England",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 67 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Scott Boland",
  country: "Australia",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 0 },
  bowling: { Test: 33, ODI: 0, IPL: 2 },
  image: bowlerImg
},
{
  name: "Sean Abbott",
  country: "Australia",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 22 },
  bowling: { Test: 0, ODI: 0, IPL: 1 },
  image: bowlerImg
},
{
  name: "Corbin Bosch",
  country: "South Africa",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 47 },
  bowling: { Test: 0, ODI: 0, IPL: 1 },
  image: bowlerImg
},
{
  name: "Alex Carey",
  country: "Australia",
  position: "Batsman",
  batting: { Test: 2449, ODI: 2014, IPL: 32 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Shivnarine Chanderpaul",
  country: "West Indies",
  position: "Batsman",
  batting: { Test: 11867, ODI: 8778, IPL: 25 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Andrew Flintoff",
  country: "England",
  position: "All-rounder",
  batting: { Test: 3845, ODI: 3394, IPL: 62 },
  bowling: { Test: 226, ODI: 169, IPL: 2 },
  image: allrounderImg
},
{
  name: "Will O'Rourke",
  country: "New Zealand",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 0 },
  bowling: { Test: 0, ODI: 0, IPL: 6 },
  image: bowlerImg
},
{
  name: "Urvil Patel",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 68 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Adil Rashid",
  country: "England",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 22 },
  bowling: { Test: 0, ODI: 0, IPL: 2 },
  image: bowlerImg
},
{
  name: "Shoaib Akhtar",
  country: "Pakistan",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 2 },
  bowling: { Test: 178, ODI: 247, IPL: 5 },
  image: bowlerImg
},
{
  name: "Rassie van der Dussen",
  country: "South Africa",
  position: "Batsman",
  batting: { Test: 1719, ODI: 2224, IPL: 22 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Xavier Bartlett",
  country: "Australia",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 11 },
  bowling: { Test: 0, ODI: 0, IPL: 2 },
  image: bowlerImg
},
{
  name: "Michael Bracewell",
  country: "New Zealand",
  position: "All-rounder",
  batting: { Test: 0, ODI: 0, IPL: 58 },
  bowling: { Test: 0, ODI: 0, IPL: 6 },
  image: allrounderImg
},
{
  name: "Kamindu Mendis",
  country: "Sri Lanka",
  position: "All-rounder",
  batting: { Test: 0, ODI: 0, IPL: 92 },
  bowling: { Test: 0, ODI: 0, IPL: 2 },
  image: allrounderImg
},
{
  name: "Robin Peterson",
  country: "South Africa",
  position: "Bowler",
  batting: { Test: 923, ODI: 790, IPL: 32 },
  bowling: { Test: 35, ODI: 46, IPL: 3 },
  image: bowlerImg
},
{
  name: "Vignesh Puthur",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 0 },
  bowling: { Test: 0, ODI: 0, IPL: 6 },
  image: bowlerImg
},
{
  name: "Shaik Rasheed",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 71 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Tabraiz Shamsi",
  country: "South Africa",
  position: "Bowler",
  batting: { Test: 0, ODI: 4, IPL: 2 },
  bowling: { Test: 1, ODI: 72, IPL: 3 },
  image: bowlerImg
},
{
  name: "Suryansh Shedge",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 7 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Arjun Tendulkar",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 13 },
  bowling: { Test: 0, ODI: 0, IPL: 3 },
  image: bowlerImg
},
{
  name: "Mark Wood",
  country: "England",
  position: "Bowler",
  batting: { Test: 151, ODI: 70, IPL: 12 },
  bowling: { Test: 104, ODI: 74, IPL: 11 },
  image: bowlerImg
},
{
  name: "Nandre Burger",
  country: "South Africa",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 0 },
  bowling: { Test: 11, ODI: 5, IPL: 7 },
  image: bowlerImg
},
{
  name: "Michael Clarke",
  country: "Australia",
  position: "Batsman",
  batting: { Test: 8643, ODI: 7981, IPL: 98 },
  bowling: { Test: 31, ODI: 57, IPL: 2 },
  image: batsmanImg
},
{
  name: "Sheldon Cottrell",
  country: "West Indies",
  position: "Bowler",
  batting: { Test: 0, ODI: 21, IPL: 0 },
  bowling: { Test: 0, ODI: 48, IPL: 6 },
  image: bowlerImg
},
{
  name: "Alex Hales",
  country: "England",
  position: "Batsman",
  batting: { Test: 573, ODI: 2419, IPL: 148 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Matt Henry",
  country: "New Zealand",
  position: "Bowler",
  batting: { Test: 75, ODI: 43, IPL: 0 },
  bowling: { Test: 131, ODI: 141, IPL: 2 },
  image: bowlerImg
},
{
  name: "Kamran Akmal",
  country: "Pakistan",
  position: "Batsman",
  batting: { Test: 3238, ODI: 3235, IPL: 128 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Usman Khawaja",
  country: "Australia",
  position: "Batsman",
  batting: { Test: 5277, ODI: 1554, IPL: 127 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Matthew Short",
  country: "Australia",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 117 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Odean Smith",
  country: "West Indies",
  position: "All-rounder",
  batting: { Test: 0, ODI: 128, IPL: 51 },
  bowling: { Test: 0, ODI: 12, IPL: 6 },
  image: allrounderImg
},
{
  name: "Billy Stanlake",
  country: "Australia",
  position: "Bowler",
  batting: { Test: 0, ODI: 2, IPL: 5 },
  bowling: { Test: 0, ODI: 7, IPL: 7 },
  image: bowlerImg
},
{
  name: "Reece Topley",
  country: "England",
  position: "Bowler",
  batting: { Test: 0, ODI: 12, IPL: 3 },
  bowling: { Test: 0, ODI: 58, IPL: 5 },
  image: bowlerImg
},
{
  name: "Umar Gul",
  country: "Pakistan",
  position: "Bowler",
  batting: { Test: 101, ODI: 155, IPL: 39 },
  bowling: { Test: 163, ODI: 179, IPL: 12 },
  image: bowlerImg
},
{
  name: "Vishnu Vinod",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 56 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Ayush Mhatre",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 240 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Eshan Malinga",
  country: "Sri Lanka",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 0 },
  bowling: { Test: 0, ODI: 0, IPL: 13 },
  image: bowlerImg
},
{
  name: "Liam Plunkett",
  country: "England",
  position: "Bowler",
  batting: { Test: 28, ODI: 146, IPL: 1 },
  bowling: { Test: 0, ODI: 135, IPL: 4 },
  image: bowlerImg
},
{
  name: "Dwaine Pretorius",
  country: "South Africa",
  position: "All-rounder",
  batting: { Test: 83, ODI: 261, IPL: 44 },
  bowling: { Test: 7, ODI: 34, IPL: 6 },
  image: allrounderImg
},
{
  name: "Salman Butt",
  country: "Pakistan",
  position: "Batsman",
  batting: { Test: 2889, ODI: 2725, IPL: 193 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Shoaib Malik",
  country: "Pakistan",
  position: "All-rounder",
  batting: { Test: 3443, ODI: 7534, IPL: 52 },
  bowling: { Test: 21, ODI: 158, IPL: 2 },
  image: allrounderImg
},
{
  name: "D'Arcy Short",
  country: "Australia",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 115 },
  bowling: { Test: 0, ODI: 0, IPL: 1 },
  image: batsmanImg
},
{
  name: "Vaibhav Suryavanshi",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 252 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Ish Sodhi",
  country: "New Zealand",
  position: "Bowler",
  batting: { Test: 86, ODI: 22, IPL: 7 },
  bowling: { Test: 46, ODI: 43, IPL: 9 },
  image: bowlerImg
},
{
  name: "Shai Hope",
  country: "West Indies",
  position: "Batsman",
  batting: { Test: 3245, ODI: 4545, IPL: 183 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Sandeep Lamichhane",
  country: "Nepal",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 0 },
  bowling: { Test: 0, ODI: 112, IPL: 13 },
  image: bowlerImg
},
{
  name: "Makhaya Ntini",
  country: "South Africa",
  position: "Bowler",
  batting: { Test: 699, ODI: 294, IPL: 11 },
  bowling: { Test: 390, ODI: 266, IPL: 7 },
  image: bowlerImg
},
{
  name: "KS Bharat",
  country: "India",
  position: "Batsman",
  batting: { Test: 129, ODI: 0, IPL: 199 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Shivil Kaushik",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 0 },
  bowling: { Test: 0, ODI: 0, IPL: 6 },
  image: bowlerImg
},
{
  name: "Tymal Mills",
  country: "England",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 8 },
  bowling: { Test: 0, ODI: 0, IPL: 11 },
  image: bowlerImg
},
{
  name: "Adam Milne",
  country: "New Zealand",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 23 },
  bowling: { Test: 0, ODI: 0, IPL: 7 },
  image: bowlerImg
},
{
  name: "Ricky Ponting",
  country: "Australia",
  position: "Batsman",
  batting: { Test: 13378, ODI: 13704, IPL: 91 },
  bowling: { Test: 5, ODI: 3, IPL: 0 },
  image: batsmanImg
},
{
  name: "Shahid Afridi",
  country: "Pakistan",
  position: "All-rounder",
  batting: { Test: 1716, ODI: 8064, IPL: 81 },
  bowling: { Test: 48, ODI: 395, IPL: 9 },
  image: allrounderImg
},
{
  name: "Atharva Taide",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 260 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Anshul Kamboj",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 16 },
  bowling: { Test: 0, ODI: 0, IPL: 10 },
  image: bowlerImg
},
{
  name: "Harry Brook",
  country: "England",
  position: "Batsman",
  batting: { Test: 1181, ODI: 123, IPL: 190 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Josh Inglis",
  country: "Australia",
  position: "Batsman",
  batting: { Test: 74, ODI: 227, IPL: 278 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Sohail Tanvir",
  country: "Pakistan",
  position: "Bowler",
  batting: { Test: 74, ODI: 144, IPL: 36 },
  bowling: { Test: 0, ODI: 71, IPL: 22 },
  image: bowlerImg
},
{
  name: "Samuel Badree",
  country: "West Indies",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 13 },
  bowling: { Test: 0, ODI: 0, IPL: 11 },
  image: bowlerImg
},
{
  name: "Fazalhaq Farooqi",
  country: "Afghanistan",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 5 },
  bowling: { Test: 0, ODI: 0, IPL: 6 },
  image: bowlerImg
},
{
  name: "Ravi Rampaul",
  country: "West Indies",
  position: "Bowler",
  batting: { Test: 184, ODI: 238, IPL: 51 },
  bowling: { Test: 9, ODI: 117, IPL: 14 },
  image: bowlerImg
},
{
  name: "Shubham Dubey",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 139 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Digvesh Rathi",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 1 },
  bowling: { Test: 0, ODI: 0, IPL: 14 },
  image: bowlerImg
},
{
  name: "Martin Guptill",
  country: "New Zealand",
  position: "Batsman",
  batting: { Test: 2586, ODI: 7346, IPL: 270 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Kyle Jamieson",
  country: "New Zealand",
  position: "Bowler",
  batting: { Test: 372, ODI: 42, IPL: 65 },
  bowling: { Test: 72, ODI: 18, IPL: 14 },
  image: bowlerImg
},
{
  name: "Kyle Mayers",
  country: "West Indies",
  position: "Batsman",
  batting: { Test: 1264, ODI: 515, IPL: 379 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Colin Munro",
  country: "New Zealand",
  position: "Batsman",
  batting: { Test: 346, ODI: 1271, IPL: 177 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Shaun Pollock",
  country: "South Africa",
  position: "Bowler",
  batting: { Test: 3781, ODI: 3519, IPL: 147 },
  bowling: { Test: 421, ODI: 393, IPL: 11 },
  image: bowlerImg
},
{
  name: "Rasikh Dar",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 40 },
  bowling: { Test: 0, ODI: 0, IPL: 10 },
  image: bowlerImg
},
{
  name: "Sameer Rizvi",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 172 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Akash Deep",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 25 },
  bowling: { Test: 0, ODI: 0, IPL: 10 },
  image: bowlerImg
},
{
  name: "Gerald Coetzee",
  country: "South Africa",
  position: "Bowler",
  batting: { Test: 62, ODI: 0, IPL: 31 },
  bowling: { Test: 20, ODI: 0, IPL: 15 },
  image: bowlerImg
},
{
  name: "Glenn McGrath",
  country: "Australia",
  position: "Bowler",
  batting: { Test: 641, ODI: 115, IPL: 4 },
  bowling: { Test: 563, ODI: 381, IPL: 12 },
  image: bowlerImg
},
{
  name: "Vipraj Nigam",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 142 },
  bowling: { Test: 0, ODI: 0, IPL: 11 },
  image: bowlerImg
},
{
  name: "Ryan Rickelton",
  country: "South Africa",
  position: "Batsman",
  batting: { Test: 269, ODI: 0, IPL: 388 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Simarjeet Singh",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 10 },
  bowling: { Test: 0, ODI: 0, IPL: 11 },
  image: bowlerImg
},
{
  name: "Swapnil Singh",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 51 },
  bowling: { Test: 0, ODI: 0, IPL: 7 },
  image: bowlerImg
},
{
  name: "Aniket Verma",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 236 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Jake Fraser-McGurk",
  country: "Australia",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 385 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Colin Ingram",
  country: "South Africa",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 205 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Daryl Mitchell",
  country: "New Zealand",
  position: "All-rounder",
  batting: { Test: 1234, ODI: 987, IPL: 351 },
  bowling: { Test: 5, ODI: 12, IPL: 1 },
  image: allrounderImg
},
{
  name: "Kane Richardson",
  country: "Australia",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 36 },
  bowling: { Test: 0, ODI: 0, IPL: 19 },
  image: bowlerImg
},
{
  name: "Marlon Samuels",
  country: "West Indies",
  position: "All-rounder",
  batting: { Test: 3917, ODI: 5606, IPL: 161 },
  bowling: { Test: 41, ODI: 89, IPL: 9 },
  image: allrounderImg
},
{
  name: "Matthew Wade",
  country: "Australia",
  position: "Batsman",
  batting: { Test: 1613, ODI: 1237, IPL: 183 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Hashim Amla",
  country: "South Africa",
  position: "Batsman",
  batting: { Test: 9282, ODI: 8113, IPL: 577 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Azmatullah Omarzai",
  country: "Afghanistan",
  position: "All-rounder",
  batting: { Test: 0, ODI: 0, IPL: 99 },
  bowling: { Test: 0, ODI: 0, IPL: 12 },
  image: allrounderImg
},
{
  name: "Carlos Brathwaite",
  country: "West Indies",
  position: "All-rounder",
  batting: { Test: 0, ODI: 0, IPL: 181 },
  bowling: { Test: 0, ODI: 0, IPL: 13 },
  image: allrounderImg
},
{
  name: "Dewald Brevis",
  country: "South Africa",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 455 },
  bowling: { Test: 0, ODI: 0, IPL: 1 },
  image: batsmanImg
},
{
  name: "Joginder Sharma",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 36 },
  bowling: { Test: 0, ODI: 0, IPL: 12 },
  image: bowlerImg
},
{
  name: "Mukesh Choudhary",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 6 },
  bowling: { Test: 0, ODI: 0, IPL: 17 },
  image: bowlerImg
},
{
  name: "Lungi Ngidi",
  country: "South Africa",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 0 },
  bowling: { Test: 57, ODI: 55, IPL: 29 },
  image: bowlerImg
},
{
  name: "Daniel Sams",
  country: "Australia",
  position: "All-rounder",
  batting: { Test: 0, ODI: 0, IPL: 44 },
  bowling: { Test: 0, ODI: 0, IPL: 14 },
  image: allrounderImg
},
{
  name: "Vijaykumar Vyshak",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 14 },
  bowling: { Test: 0, ODI: 0, IPL: 17 },
  image: bowlerImg
},
{
  name: "Priyansh Arya",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 475 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Jason Behrendorff",
  country: "Australia",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 6 },
  bowling: { Test: 0, ODI: 0, IPL: 19 },
  image: bowlerImg
},
{
  name: "Nathan Ellis",
  country: "Australia",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 19 },
  bowling: { Test: 0, ODI: 0, IPL: 19 },
  image: bowlerImg
},
{
  name: "Ben Hilfenhaus",
  country: "Australia",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 0 },
  bowling: { Test: 99, ODI: 29, IPL: 22 },
  image: bowlerImg
},
{
  name: "Akash Madhwal",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 8 },
  bowling: { Test: 0, ODI: 0, IPL: 23 },
  image: bowlerImg
},
{
  name: "Riley Meredith",
  country: "Australia",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 0 },
  bowling: { Test: 0, ODI: 0, IPL: 19 },
  image: bowlerImg
},
{
  name: "Naveen-ul-Haq",
  country: "Afghanistan",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 18 },
  bowling: { Test: 0, ODI: 0, IPL: 25 },
  image: bowlerImg
},
{
  name: "Jacob Oram",
  country: "New Zealand",
  position: "All-rounder",
  batting: { Test: 1780, ODI: 2434, IPL: 106 },
  bowling: { Test: 60, ODI: 173, IPL: 9 },
  image: allrounderImg
},
{
  name: "Rachin Ravindra",
  country: "New Zealand",
  position: "All-rounder",
  batting: { Test: 820, ODI: 820, IPL: 413 },
  bowling: { Test: 8, ODI: 18, IPL: 0 },
  image: allrounderImg
},
{
  name: "Romario Shepherd",
  country: "West Indies",
  position: "All-rounder",
  batting: { Test: 0, ODI: 0, IPL: 185 },
  bowling: { Test: 0, ODI: 0, IPL: 10 },
  image: allrounderImg
},
{
  name: "Rahmanullah Gurbaz",
  country: "Afghanistan",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 363 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "James Franklin",
  country: "New Zealand",
  position: "All-rounder",
  batting: { Test: 808, ODI: 1260, IPL: 327 },
  bowling: { Test: 82, ODI: 81, IPL: 9 },
  image: allrounderImg
},
{
  name: "VVS Laxman",
  country: "India",
  position: "Batsman",
  batting: { Test: 8781, ODI: 2338, IPL: 282 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Mujeeb Ur Rahman",
  country: "Afghanistan",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 12 },
  bowling: { Test: 0, ODI: 0, IPL: 20 },
  image: bowlerImg
},
{
  name: "Sachin Baby",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 144 },
  bowling: { Test: 0, ODI: 0, IPL: 2 },
  image: batsmanImg
},
{
  name: "Ankit Sharma",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 72 },
  bowling: { Test: 0, ODI: 0, IPL: 11 },
  image: bowlerImg
},
{
  name: "Unmukt Chand",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 300 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Ben Cutting",
  country: "Australia",
  position: "All-rounder",
  batting: { Test: 0, ODI: 0, IPL: 238 },
  bowling: { Test: 0, ODI: 0, IPL: 10 },
  image: allrounderImg
},
{
  name: "Brad Hogg",
  country: "Australia",
  position: "Bowler",
  batting: { Test: 269, ODI: 202, IPL: 22 },
  bowling: { Test: 17, ODI: 156, IPL: 23 },
  image: bowlerImg
},
{
  name: "Will Jacks",
  country: "England",
  position: "All-rounder",
  batting: { Test: 0, ODI: 0, IPL: 463 },
  bowling: { Test: 0, ODI: 0, IPL: 8 },
  image: allrounderImg
},
{
  name: "Jason Roy",
  country: "England",
  position: "Batsman",
  batting: { Test: 0, ODI: 4271, IPL: 614 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Shaun Tait",
  country: "Australia",
  position: "Bowler",
  batting: { Test: 30, ODI: 28, IPL: 23 },
  bowling: { Test: 5, ODI: 62, IPL: 23 },
  image: bowlerImg
},
{
  name: "Yash Thakur",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 0 },
  bowling: { Test: 0, ODI: 0, IPL: 25 },
  image: bowlerImg
},
{
  name: "Roelof van der Merwe",
  country: "Netherlands",
  position: "All-rounder",
  batting: { Test: 0, ODI: 0, IPL: 159 },
  bowling: { Test: 0, ODI: 0, IPL: 21 },
  image: allrounderImg
},
{
  name: "Chris Woakes",
  country: "England",
  position: "All-rounder",
  batting: { Test: 1773, ODI: 1236, IPL: 78 },
  bowling: { Test: 149, ODI: 170, IPL: 30 },
  image: allrounderImg
},
{
  name: "Angkrish Raghuvanshi",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 463 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Alzarri Joseph",
  country: "West Indies",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 27 },
  bowling: { Test: 0, ODI: 0, IPL: 21 },
  image: bowlerImg
},
{
  name: "Rilee Rossouw",
  country: "South Africa",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 473 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Darren Sammy",
  country: "West Indies",
  position: "All-rounder",
  batting: { Test: 1323, ODI: 1871, IPL: 295 },
  bowling: { Test: 8, ODI: 44, IPL: 11 },
  image: allrounderImg
},
{
  name: "Adam Zampa",
  country: "Australia",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 15 },
  bowling: { Test: 0, ODI: 0, IPL: 31 },
  image: bowlerImg
},
{
  name: "Azhar Mahmood",
  country: "Pakistan",
  position: "All-rounder",
  batting: { Test: 900, ODI: 978, IPL: 388 },
  bowling: { Test: 39, ODI: 123, IPL: 29 },
  image: allrounderImg
},
{
  name: "Naman Dhir",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 392 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Sherfane Rutherford",
  country: "West Indies",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 397 },
  bowling: { Test: 0, ODI: 0, IPL: 1 },
  image: batsmanImg
},
{
  name: "Owais Shah",
  country: "England",
  position: "Batsman",
  batting: { Test: 384, ODI: 1834, IPL: 506 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Arshdeep Singh",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 2 },
  bowling: { Test: 0, ODI: 0, IPL: 28 },
  image: bowlerImg
},
{
  name: "Paul Valthaty",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 505 },
  bowling: { Test: 0, ODI: 0, IPL: 7 },
  image: batsmanImg
},
{
  name: "Anuj Rawat",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 318 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Ashutosh Sharma",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 393 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Ravi Bopara",
  country: "England",
  position: "All-rounder",
  batting: { Test: 2695, ODI: 2695, IPL: 531 },
  bowling: { Test: 1, ODI: 40, IPL: 11 },
  image: allrounderImg
},
{
  name: "Mohammad Nabi",
  country: "Afghanistan",
  position: "All-rounder",
  batting: { Test: 33, ODI: 3115, IPL: 215 },
  bowling: { Test: 1, ODI: 158, IPL: 15 },
  image: allrounderImg
},
{
  name: "Mohsin Khan",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 25 },
  bowling: { Test: 0, ODI: 0, IPL: 27 },
  image: bowlerImg
},
{
  name: "Barinder Sran",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 10 },
  bowling: { Test: 0, ODI: 0, IPL: 18 },
  image: bowlerImg
},
{
  name: "Hanuma Vihari",
  country: "India",
  position: "Batsman",
  batting: { Test: 839, ODI: 0, IPL: 284 },
  bowling: { Test: 0, ODI: 0, IPL: 1 },
  image: batsmanImg
},
{
  name: "Basil Thampi",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 32 },
  bowling: { Test: 0, ODI: 0, IPL: 22 },
  image: bowlerImg
},
{
  name: "Kevon Cooper",
  country: "West Indies",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 116 },
  bowling: { Test: 0, ODI: 0, IPL: 33 },
  image: bowlerImg
},
{
  name: "Colin de Grandhomme",
  country: "New Zealand",
  position: "All-rounder",
  batting: { Test: 1432, ODI: 742, IPL: 303 },
  bowling: { Test: 49, ODI: 30, IPL: 6 },
  image: allrounderImg
},
{
  name: "Sai Kishore",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 18 },
  bowling: { Test: 0, ODI: 0, IPL: 32 },
  image: bowlerImg
},
{
  name: "Umran Malik",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 23 },
  bowling: { Test: 0, ODI: 0, IPL: 29 },
  image: bowlerImg
},
{
  name: "Doug Bollinger",
  country: "Australia",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 21 },
  bowling: { Test: 50, ODI: 62, IPL: 37 },
  image: bowlerImg
},
{
  name: "Evin Lewis",
  country: "West Indies",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 654 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Abhinav Manohar",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 292 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Ramesh Powar",
  country: "India",
  position: "Bowler",
  batting: { Test: 16, ODI: 46, IPL: 67 },
  bowling: { Test: 6, ODI: 34, IPL: 13 },
  image: bowlerImg
},
{
  name: "Nitish Reddy",
  country: "India",
  position: "All-rounder",
  batting: { Test: 0, ODI: 0, IPL: 485 }, // No intl Test/ODI records found
  bowling: { Test: 0, ODI: 0, IPL: 5 },
  image: allrounderImg
},
{
  name: "Cameron Green",
  country: "Australia",
  position: "All-rounder",
  batting: { Test: 1391, ODI: 518, IPL: 707 },
  bowling: { Test: 23, ODI: 16, IPL: 16 },
  image: allrounderImg
},
{
  name: "Mohammad Kaif",
  country: "India",
  position: "Batsman",
  batting: { Test: 624, ODI: 2753, IPL: 259 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Rovman Powell",
  country: "West Indies",
  position: "Batsman",
  batting: { Test: 5, ODI: 834, IPL: 365 },
  bowling: { Test: 0, ODI: 1, IPL: 1 },
  image: batsmanImg
},
{
  name: "Cheteshwar Pujara",
  country: "India",
  position: "Batsman",
  batting: { Test: 7195, ODI: 51, IPL: 390 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Ankit Rajpoot",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 26 },
  bowling: { Test: 0, ODI: 0, IPL: 24 },
  image: bowlerImg
},
{
  name: "Jesse Ryder",
  country: "New Zealand",
  position: "All-rounder",
  batting: { Test: 1269, ODI: 1362, IPL: 604 },
  bowling: { Test: 12, ODI: 6, IPL: 8 },
  image: allrounderImg
},
{
  name: "Lendl Simmons",
  country: "West Indies",
  position: "Batsman",
  batting: { Test: 0, ODI: 1518, IPL: 1079 },
  bowling: { Test: 0, ODI: 0, IPL: 1 },
  image: batsmanImg
},
{
  name: "Graeme Smith",
  country: "South Africa",
  position: "Batsman",
  batting: { Test: 9265, ODI: 6989, IPL: 739 },
  bowling: { Test: 8, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Ryan ten Doeschate",
  country: "Netherlands",
  position: "All-rounder",
  batting: { Test: 0, ODI: 1541, IPL: 326 },
  bowling: { Test: 0, ODI: 55, IPL: 2 },
  image: allrounderImg
},
{
  name: "Corey Anderson",
  country: "New Zealand",
  position: "All-rounder",
  batting: { Test: 246, ODI: 1109, IPL: 538 },
  bowling: { Test: 0, ODI: 60, IPL: 11 },
  image: allrounderImg
},
{
  name: "Sam Billings",
  country: "England",
  position: "Batsman",
  batting: { Test: 30, ODI: 677, IPL: 503 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Sanath Jayasuriya",
  country: "Sri Lanka",
  position: "All-rounder",
  batting: { Test: 6973, ODI: 13430, IPL: 768 },
  bowling: { Test: 98, ODI: 323, IPL: 13 },
  image: allrounderImg
},
{
  name: "Andrew Tye",
  country: "Australia",
  position: "Bowler",
  batting: { Test: 0, ODI: 17, IPL: 91 },
  bowling: { Test: 0, ODI: 28, IPL: 42 },
  image: bowlerImg
},
{
  name: "Mark Boucher",
  country: "South Africa",
  position: "Batsman",
  batting: { Test: 5515, ODI: 4686, IPL: 394 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Abhishek Porel",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 661 }, // No Test/ODI records found
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Ramandeep Singh",
  country: "India",
  position: "All-rounder",
  batting: { Test: 0, ODI: 0, IPL: 217 }, // No Test/ODI records found
  bowling: { Test: 0, ODI: 0, IPL: 6 },
  image: allrounderImg
},
{
  name: "Mitchell Santner",
  country: "New Zealand",
  position: "All-rounder",
  batting: { Test: 810, ODI: 1038, IPL: 110 },
  bowling: { Test: 43, ODI: 89, IPL: 25 },
  image: allrounderImg
},
{
  name: "Vaibhav Arora",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 9 },
  bowling: { Test: 0, ODI: 4, IPL: 36 },
  image: bowlerImg
},
{
  name: "Matthew Hayden",
  country: "Australia",
  position: "Batsman",
  batting: { Test: 8625, ODI: 6133, IPL: 1107 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Mukesh Kumar",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 10 },
  bowling: { Test: 0, ODI: 12, IPL: 36 },
  image: bowlerImg
},
{
  name: "Matheesha Pathirana",
  country: "Sri Lanka",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 0 },
  bowling: { Test: 0, ODI: 31, IPL: 47 },
  image: bowlerImg
},
{
  name: "Navdeep Saini",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 4, IPL: 33 },
  bowling: { Test: 0, ODI: 6, IPL: 23 },
  image: bowlerImg
},
{
  name: "Shivam Mavi",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 51 },
  bowling: { Test: 0, ODI: 4, IPL: 30 },
  image: bowlerImg
},
{
  name: "Tristan Stubbs",
  country: "South Africa",
  position: "Batsman",
  batting: { Test: 0, ODI: 403, IPL: 705 },
  bowling: { Test: 0, ODI: 0, IPL: 4 },
  image: batsmanImg
},
{
  name: "Parvinder Awana",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 5 },
  bowling: { Test: 0, ODI: 0, IPL: 39 },
  image: bowlerImg
},
{
  name: "Wayne Parnell",
  country: "South Africa",
  position: "All-rounder",
  batting: { Test: 209, ODI: 679, IPL: 65 },
  bowling: { Test: 15, ODI: 99, IPL: 35 },
  image: allrounderImg
},
{
  name: "Pravin Tambe",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 18 },
  bowling: { Test: 0, ODI: 0, IPL: 28 },
  image: bowlerImg
},
{
  name: "Johan Botha",
  country: "South Africa",
  position: "All-rounder",
  batting: { Test: 411, ODI: 772, IPL: 409 },
  bowling: { Test: 17, ODI: 72, IPL: 25 },
  image: allrounderImg
},
{
  name: "Chris Jordan",
  country: "England",
  position: "All-rounder",
  batting: { Test: 51, ODI: 286, IPL: 81 },
  bowling: { Test: 1, ODI: 24, IPL: 30 },
  image: allrounderImg
},
{
  name: "Harshit Rana",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 59 }, // No Test/ODI records found
  bowling: { Test: 0, ODI: 0, IPL: 40 },
  image: bowlerImg
},
{
  name: "Phil Salt",
  country: "England",
  position: "Batsman",
  batting: { Test: 167, ODI: 549, IPL: 1056 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Daniel Vettori",
  country: "New Zealand",
  position: "All-rounder",
  batting: { Test: 4531, ODI: 2253, IPL: 121 },
  bowling: { Test: 362, ODI: 305, IPL: 28 },
  image: allrounderImg
},
{
  name: "Marco Jansen",
  country: "South Africa",
  position: "All-rounder",
  batting: { Test: 544, ODI: 144, IPL: 141 },
  bowling: { Test: 59, ODI: 18, IPL: 36 },
  image: allrounderImg
},
{
  name: "Aditya Tare",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 339 }, // No Test/ODI records found
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Herschelle Gibbs",
  country: "South Africa",
  position: "Batsman",
  batting: { Test: 6167, ODI: 8094, IPL: 886 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Krishnappa Gowtham",
  country: "India",
  position: "All-rounder",
  batting: { Test: 0, ODI: 0, IPL: 247 }, // No Test/ODI records found
  bowling: { Test: 0, ODI: 0, IPL: 21 },
  image: allrounderImg
},
{
  name: "Kevin Pietersen",
  country: "England",
  position: "Batsman",
  batting: { Test: 8181, ODI: 4440, IPL: 1001 },
  bowling: { Test: 7, ODI: 7, IPL: 7 },
  image: batsmanImg
},
{
  name: "Nehal Wadhera",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 719 }, // No Test/ODI records found
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Wanindu Hasaranga",
  country: "Sri Lanka",
  position: "All-rounder",
  batting: { Test: 196, ODI: 384, IPL: 81 },
  bowling: { Test: 4, ODI: 56, IPL: 46 },
  image: allrounderImg
},
{
  name: "Ryan Harris",
  country: "Australia",
  position: "Bowler",
  batting: { Test: 603, ODI: 116, IPL: 117 },
  bowling: { Test: 113, ODI: 44, IPL: 45 },
  image: bowlerImg
},
{
  name: "Mayank Markande",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 48 },
  bowling: { Test: 0, ODI: 0, IPL: 37 },
  image: bowlerImg
},
{
  name: "Noor Ahmad",
  country: "Afghanistan",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 20 },
  bowling: { Test: 0, ODI: 12, IPL: 48 },
  image: bowlerImg
},
{
  name: "Thisara Perera",
  country: "Sri Lanka",
  position: "All-rounder",
  batting: { Test: 203, ODI: 2338, IPL: 422 },
  bowling: { Test: 1, ODI: 175, IPL: 31 },
  image: allrounderImg
},
{
  name: "S Aravind",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 59 },
  bowling: { Test: 0, ODI: 2, IPL: 45 },
  image: bowlerImg
},
{
  name: "Travis Head",
  country: "Australia",
  position: "Batsman",
  batting: { Test: 3077, ODI: 1679, IPL: 1146 },
  bowling: { Test: 4, ODI: 7, IPL: 2 },
  image: batsmanImg
},
{
  name: "Brett Lee",
  country: "Australia",
  position: "Bowler",
  batting: { Test: 1451, ODI: 1176, IPL: 124 },
  bowling: { Test: 310, ODI: 380, IPL: 25 },
  image: bowlerImg
},
{
  name: "Maheesh Theekshana",
  country: "Sri Lanka",
  position: "Bowler",
  batting: { Test: 0, ODI: 5, IPL: 17 },
  bowling: { Test: 0, ODI: 35, IPL: 36 },
  image: bowlerImg
},
{
  name: "Manvinder Bisla",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 798 }, // No Test/ODI records found
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Nathan Coulter-Nile",
  country: "Australia",
  position: "Bowler",
  batting: { Test: 0, ODI: 344, IPL: 82 },
  bowling: { Test: 0, ODI: 72, IPL: 48 },
  image: bowlerImg
},
{
  name: "Rishi Dhawan",
  country: "India",
  position: "All-rounder",
  batting: { Test: 0, ODI: 126, IPL: 210 },
  bowling: { Test: 0, ODI: 12, IPL: 25 },
  image: allrounderImg
},
{
  name: "Josh Hazlewood",
  country: "Australia",
  position: "Bowler",
  batting: { Test: 439, ODI: 68, IPL: 19 },
  bowling: { Test: 262, ODI: 119, IPL: 57 },
  image: bowlerImg
},
{
  name: "Andrew Symonds",
  country: "Australia",
  position: "All-rounder",
  batting: { Test: 1462, ODI: 5088, IPL: 974 },
  bowling: { Test: 24, ODI: 133, IPL: 20 },
  image: allrounderImg
},
{
  name: "George Bailey",
  country: "Australia",
  position: "Batsman",
  batting: { Test: 1490, ODI: 3044, IPL: 663 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Mahipal Lomror",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 39, IPL: 527 },
  bowling: { Test: 0, ODI: 0, IPL: 1 },
  image: batsmanImg
},
{
  name: "Sai Sudharsan",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 127, IPL: 1793 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Gurkeerat Singh Mann",
  country: "India",
  position: "All-rounder",
  batting: { Test: 0, ODI: 153, IPL: 511 },
  bowling: { Test: 0, ODI: 4, IPL: 5 },
  image: allrounderImg
},
{
  name: "Shashank Singh",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 773 }, // No Test/ODI records found
  bowling: { Test: 0, ODI: 0, IPL: 1 },
  image: batsmanImg
},
{
  name: "Ajit Agarkar",
  country: "India",
  position: "Bowler",
  batting: { Test: 571, ODI: 1269, IPL: 179 },
  bowling: { Test: 58, ODI: 288, IPL: 29 },
  image: bowlerImg
},
{
  name: "Dhruv Jurel",
  country: "India",
  position: "Batsman",
  batting: { Test: 208, ODI: 0, IPL: 680 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Anil Kumble",
  country: "India",
  position: "Bowler",
  batting: { Test: 2506, ODI: 938, IPL: 35 },
  bowling: { Test: 619, ODI: 337, IPL: 45 },
  image: bowlerImg
},
{
  name: "Chris Lynn",
  country: "Australia",
  position: "Batsman",
  batting: { Test: 0, ODI: 75, IPL: 1329 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Rajat Patidar",
  country: "India",
  position: "Batsman",
  batting: { Test: 97, ODI: 0, IPL: 1111 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Pradeep Sangwan",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 26 },
  bowling: { Test: 0, ODI: 0, IPL: 38 },
  image: bowlerImg
},
{
  name: "Yash Dayal",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 4 },
  bowling: { Test: 0, ODI: 5, IPL: 41 },
  image: bowlerImg
},
{
  name: "Tirumalasetti Suman",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 676 },
  bowling: { Test: 0, ODI: 0, IPL: 6 },
  image: batsmanImg
},
{
  name: "Murugan Ashwin",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 35 },
  bowling: { Test: 0, ODI: 0, IPL: 35 },
  image: bowlerImg
},
{
  name: "Manpreet Gony",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 99 },
  bowling: { Test: 0, ODI: 2, IPL: 37 },
  image: bowlerImg
},
{
  name: "Rahul Sharma",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 66 },
  bowling: { Test: 0, ODI: 6, IPL: 40 },
  image: bowlerImg
},
{
  name: "S Sreesanth",
  country: "India",
  position: "Bowler",
  batting: { Test: 222, ODI: 41, IPL: 34 },
  bowling: { Test: 87, ODI: 75, IPL: 40 },
  image: bowlerImg
},
{
  name: "Tushar Deshpande",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 28 },
  bowling: { Test: 0, ODI: 0, IPL: 51 },
  image: bowlerImg
},
{
  name: "Cameron White",
  country: "Australia",
  position: "Batsman",
  batting: { Test: 1465, ODI: 2072, IPL: 954 },
  bowling: { Test: 0, ODI: 12, IPL: 1 },
  image: batsmanImg
},
{
  name: "Anrich Nortje",
  country: "South Africa",
  position: "Bowler",
  batting: { Test: 144, ODI: 29, IPL: 49 },
  bowling: { Test: 70, ODI: 44, IPL: 61 },
  image: bowlerImg
},
{
  name: "Daniel Christian",
  country: "Australia",
  position: "All-rounder",
  batting: { Test: 0, ODI: 639, IPL: 460 },
  bowling: { Test: 0, ODI: 36, IPL: 38 },
  image: allrounderImg
},
{
  name: "Lockie Ferguson",
  country: "New Zealand",
  position: "Bowler",
  batting: { Test: 0, ODI: 22, IPL: 72 },
  bowling: { Test: 0, ODI: 48, IPL: 51 },
  image: bowlerImg
},
{
  name: "Harpreet Brar",
  country: "India",
  position: "All-rounder",
  batting: { Test: 0, ODI: 0, IPL: 244 },
  bowling: { Test: 0, ODI: 0, IPL: 35 },
  image: allrounderImg
},
{
  name: "Heinrich Klaasen",
  country: "South Africa",
  position: "Batsman",
  batting: { Test: 247, ODI: 1546, IPL: 1480 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Liam Livingstone",
  country: "England",
  position: "All-rounder",
  batting: { Test: 82, ODI: 426, IPL: 1051 },
  bowling: { Test: 0, ODI: 8, IPL: 13 },
  image: allrounderImg
},
{
  name: "Angelo Mathews",
  country: "Sri Lanka",
  position: "All-rounder",
  batting: { Test: 7161, ODI: 5865, IPL: 724 },
  bowling: { Test: 33, ODI: 120, IPL: 27 },
  image: allrounderImg
},
{
  name: "Tim David",
  country: "Australia",
  position: "Batsman",
  batting: { Test: 0, ODI: 78, IPL: 846 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Sarfaraz Khan",
  country: "India",
  position: "Batsman",
  batting: { Test: 200, ODI: 0, IPL: 585 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Pawan Negi",
  country: "India",
  position: "All-rounder",
  batting: { Test: 0, ODI: 19, IPL: 365 },
  bowling: { Test: 0, ODI: 1, IPL: 34 },
  image: allrounderImg
},
{
  name: "Prabhsimran Singh",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 1305 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Varun Aaron",
  country: "India",
  position: "Bowler",
  batting: { Test: 44, ODI: 12, IPL: 50 },
  bowling: { Test: 18, ODI: 11, IPL: 44 },
  image: bowlerImg
},
{
  name: "Jofra Archer",
  country: "England",
  position: "Bowler",
  batting: { Test: 155, ODI: 27, IPL: 262 },
  bowling: { Test: 42, ODI: 42, IPL: 59 },
  image: bowlerImg
},
{
  name: "Tillakaratne Dilshan",
  country: "Sri Lanka",
  position: "All-rounder",
  batting: { Test: 5492, ODI: 10290, IPL: 1153 },
  bowling: { Test: 39, ODI: 106, IPL: 5 },
  image: allrounderImg
},
{
  name: "Shreyas Gopal",
  country: "India",
  position: "All-rounder",
  batting: { Test: 0, ODI: 0, IPL: 180 },
  bowling: { Test: 0, ODI: 0, IPL: 52 },
  image: allrounderImg
},
{
  name: "Mitchell Johnson",
  country: "Australia",
  position: "Bowler",
  batting: { Test: 2065, ODI: 951, IPL: 160 },
  bowling: { Test: 313, ODI: 239, IPL: 61 },
  image: bowlerImg
},
{
  name: "Tilak Varma",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 189, IPL: 1499 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Siddarth Kaul",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 20 },
  bowling: { Test: 0, ODI: 13, IPL: 58 },
  image: bowlerImg
},
{
  name: "Mitchell Marsh",
  country: "Australia",
  position: "All-rounder",
  batting: { Test: 1286, ODI: 2214, IPL: 1293 },
  bowling: { Test: 23, ODI: 54, IPL: 37 },
  image: allrounderImg
},
{
  name: "Shahrukh Khan",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 732 },
  bowling: { Test: 0, ODI: 0, IPL: 1 },
  image: batsmanImg
},
{
  name: "Jitesh Sharma",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 991 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Ross Taylor",
  country: "New Zealand",
  position: "Batsman",
  batting: { Test: 7683, ODI: 8607, IPL: 1017 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Shane Warne",
  country: "Australia",
  position: "Bowler",
  batting: { Test: 3154, ODI: 1018, IPL: 198 },
  bowling: { Test: 708, ODI: 293, IPL: 57 },
  image: bowlerImg
},
{
  name: "Ayush Badoni",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 963 },
  bowling: { Test: 0, ODI: 0, IPL: 4 },
  image: batsmanImg
},
{
  name: "Murali Kartik",
  country: "India",
  position: "Bowler",
  batting: { Test: 126, ODI: 126, IPL: 113 },
  bowling: { Test: 24, ODI: 37, IPL: 31 },
  image: bowlerImg
},
{
  name: "Mitchell McClenaghan",
  country: "New Zealand",
  position: "Bowler",
  batting: { Test: 0, ODI: 10, IPL: 91 },
  bowling: { Test: 0, ODI: 82, IPL: 71 },
  image: bowlerImg
},
{
  name: "Manan Vohra",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 1083 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Aiden Markram",
  country: "South Africa",
  position: "All-rounder",
  batting: { Test: 2281, ODI: 1737, IPL: 1440 },
  bowling: { Test: 8, ODI: 9, IPL: 6 },
  image: allrounderImg
},
{
  name: "Shahbaz Ahmed",
  country: "India",
  position: "All-rounder",
  batting: { Test: 0, ODI: 0, IPL: 545 },
  bowling: { Test: 0, ODI: 0, IPL: 22 },
  image: allrounderImg
},
{
  name: "Sourav Ganguly",
  country: "India",
  position: "All-rounder",
  batting: { Test: 7212, ODI: 11363, IPL: 1349 },
  bowling: { Test: 32, ODI: 100, IPL: 10 },
  image: allrounderImg
},
{
  name: "Michael Hussey",
  country: "Australia",
  position: "Batsman",
  batting: { Test: 6235, ODI: 5442, IPL: 1977 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Imran Tahir",
  country: "South Africa",
  position: "Bowler",
  batting: { Test: 57, ODI: 39, IPL: 33 },
  bowling: { Test: 57, ODI: 173, IPL: 82 },
  image: bowlerImg
},
{
  name: "Shadab Jakati",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 28 },
  bowling: { Test: 0, ODI: 0, IPL: 47 },
  image: bowlerImg
},
{
  name: "Rinku Singh",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 128, IPL: 1099 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "James Faulkner",
  country: "Australia",
  position: "All-rounder",
  batting: { Test: 45, ODI: 1042, IPL: 527 },
  bowling: { Test: 0, ODI: 96, IPL: 59 },
  image: allrounderImg
},
{
  name: "Mustafizur Rahman",
  country: "Bangladesh",
  position: "Bowler",
  batting: { Test: 28, ODI: 45, IPL: 13 },
  bowling: { Test: 36, ODI: 159, IPL: 65 },
  image: bowlerImg
},
{
  name: "Moises Henriques",
  country: "Australia",
  position: "All-rounder",
  batting: { Test: 224, ODI: 671, IPL: 1000 },
  bowling: { Test: 3, ODI: 38, IPL: 42 },
  image: allrounderImg
},
{
  name: "Venkatesh Iyer",
  country: "India",
  position: "All-rounder",
  batting: { Test: 0, ODI: 24, IPL: 1468 },
  bowling: { Test: 0, ODI: 0, IPL: 3 },
  image: allrounderImg
},
{
  name: "Abdul Samad",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 741 },
  bowling: { Test: 0, ODI: 0, IPL: 2 },
  image: batsmanImg
},
{
  name: "T Natarajan",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 3 },
  bowling: { Test: 0, ODI: 25, IPL: 67 },
  image: bowlerImg
},
{
  name: "Munaf Patel",
  country: "India",
  position: "Bowler",
  batting: { Test: 86, ODI: 53, IPL: 39 },
  bowling: { Test: 35, ODI: 86, IPL: 74 },
  image: bowlerImg
},
{
  name: "Sam Curran",
  country: "England",
  position: "All-rounder",
  batting: { Test: 815, ODI: 526, IPL: 997 },
  bowling: { Test: 47, ODI: 42, IPL: 59 },
  image: allrounderImg
},
{
  name: "David Hussey",
  country: "Australia",
  position: "All-rounder",
  batting: { Test: 0, ODI: 1796, IPL: 1322 },
  bowling: { Test: 0, ODI: 29, IPL: 8 },
  image: allrounderImg
},
{
  name: "Brad Hodge",
  country: "Australia",
  position: "Batsman",
  batting: { Test: 503, ODI: 575, IPL: 1400 },
  bowling: { Test: 0, ODI: 0, IPL: 17 },
  image: batsmanImg
},
{
  name: "Muttiah Muralitharan",
  country: "Sri Lanka",
  position: "Bowler",
  batting: { Test: 1261, ODI: 674, IPL: 20 },
  bowling: { Test: 800, ODI: 534, IPL: 63 },
  image: bowlerImg
},
{
  name: "Prasidh Krishna",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 9 },
  bowling: { Test: 0, ODI: 29, IPL: 74 },
  image: bowlerImg
},
{
  name: "Washington Sundar",
  country: "India",
  position: "All-rounder",
  batting: { Test: 469, ODI: 238, IPL: 511 },
  bowling: { Test: 6, ODI: 16, IPL: 39 },
  image: allrounderImg
},
{
  name: "Yashasvi Jaiswal",
  country: "India",
  position: "Batsman",
  batting: { Test: 1028, ODI: 0, IPL: 2166 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Morne Morkel",
  country: "South Africa",
  position: "Bowler",
  batting: { Test: 944, ODI: 259, IPL: 126 },
  bowling: { Test: 309, ODI: 188, IPL: 77 },
  image: bowlerImg
},
{
  name: "Khaleel Ahmed",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 2 },
  bowling: { Test: 0, ODI: 15, IPL: 89 },
  image: bowlerImg
},
{
  name: "Ruturaj Gaikwad",
  country: "India",
  position: "Batsman",
  batting: { Test: 17, ODI: 135, IPL: 2502 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Shaun Marsh",
  country: "Australia",
  position: "Batsman",
  batting: { Test: 2265, ODI: 2773, IPL: 2477 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Kumar Sangakkara",
  country: "Sri Lanka",
  position: "Batsman",
  batting: { Test: 12400, ODI: 14234, IPL: 1687 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Shahbaz Nadeem",
  country: "India",
  position: "Bowler",
  batting: { Test: 51, ODI: 0, IPL: 39 },
  bowling: { Test: 8, ODI: 0, IPL: 48 },
  image: bowlerImg
},
{
  name: "Lakshmipathy Balaji",
  country: "India",
  position: "Bowler",
  batting: { Test: 185, ODI: 76, IPL: 36 },
  bowling: { Test: 27, ODI: 34, IPL: 76 },
  image: bowlerImg
},
{
  name: "Moeen Ali",
  country: "England",
  position: "All-rounder",
  batting: { Test: 3094, ODI: 2218, IPL: 1167 },
  bowling: { Test: 204, ODI: 102, IPL: 41 },
  image: allrounderImg
},
{
  name: "Devdutt Padikkal",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 27, IPL: 1806 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Avesh Khan",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 62 },
  bowling: { Test: 0, ODI: 8, IPL: 87 },
  image: bowlerImg
},
{
  name: "Abhishek Sharma",
  country: "India",
  position: "All-rounder",
  batting: { Test: 0, ODI: 0, IPL: 1816 },
  bowling: { Test: 0, ODI: 0, IPL: 11 },
  image: allrounderImg
},
{
  name: "Ravi Bishnoi",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 45 },
  bowling: { Test: 0, ODI: 0, IPL: 72 },
  image: bowlerImg
},
{
  name: "Ashok Dinda",
  country: "India",
  position: "Bowler",
  batting: { Test: 51, ODI: 25, IPL: 26 },
  bowling: { Test: 2, ODI: 12, IPL: 69 },
  image: bowlerImg
},
{
  name: "Vijay Shankar",
  country: "India",
  position: "All-rounder",
  batting: { Test: 0, ODI: 223, IPL: 1233 },
  bowling: { Test: 0, ODI: 4, IPL: 9 },
  image: allrounderImg
},
{
  name: "Sachin Tendulkar",
  country: "India",
  position: "Batsman",
  batting: { Test: 15921, ODI: 18426, IPL: 2334 },
  bowling: { Test: 46, ODI: 154, IPL: 0 },
  image: batsmanImg
},
{
  name: "Rahul Chahar",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 129 },
  bowling: { Test: 0, ODI: 5, IPL: 75 },
  image: bowlerImg
},
{
  name: "Shivam Dube",
  country: "India",
  position: "All-rounder",
  batting: { Test: 0, ODI: 176, IPL: 1859 },
  bowling: { Test: 0, ODI: 3, IPL: 5 },
  image: allrounderImg
},
{
  name: "Prithvi Shaw",
  country: "India",
  position: "Batsman",
  batting: { Test: 339, ODI: 189, IPL: 1892 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Adam Gilchrist",
  country: "Australia",
  position: "Batsman",
  batting: { Test: 5570, ODI: 9619, IPL: 2069 },
  bowling: { Test: 0, ODI: 0, IPL: 1 },
  image: batsmanImg
},
{
  name: "Mahela Jayawardene",
  country: "Sri Lanka",
  position: "Batsman",
  batting: { Test: 11814, ODI: 12650, IPL: 1802 },
  bowling: { Test: 6, ODI: 8, IPL: 0 },
  image: batsmanImg
},
{
  name: "Chris Morris",
  country: "South Africa",
  position: "All-rounder",
  batting: { Test: 173, ODI: 511, IPL: 618 },
  bowling: { Test: 12, ODI: 34, IPL: 95 },
  image: allrounderImg
},
{
  name: "Arshdeep Singh",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 31 },
  bowling: { Test: 0, ODI: 30, IPL: 97 },
  image: bowlerImg
},
{
  name: "RP Singh",
  country: "India",
  position: "Bowler",
  batting: { Test: 126, ODI: 117, IPL: 52 },
  bowling: { Test: 40, ODI: 69, IPL: 90 },
  image: bowlerImg
},
{
  name: "JP Duminy",
  country: "South Africa",
  position: "All-rounder",
  batting: { Test: 2103, ODI: 5117, IPL: 2029 },
  bowling: { Test: 0, ODI: 69, IPL: 23 },
  image: allrounderImg
},
{
  name: "Eoin Morgan",
  country: "England",
  position: "Batsman",
  batting: { Test: 700, ODI: 7701, IPL: 1405 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Karun Nair",
  country: "India",
  position: "Batsman",
  batting: { Test: 374, ODI: 46, IPL: 1694 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Riyan Parag",
  country: "India",
  position: "All-rounder",
  batting: { Test: 0, ODI: 0, IPL: 1566 },
  bowling: { Test: 0, ODI: 0, IPL: 7 },
  image: allrounderImg
},
{
  name: "Varun Chakravarthy",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 26 },
  bowling: { Test: 0, ODI: 0, IPL: 100 },
  image: bowlerImg
},
{
  name: "Shimron Hetmyer",
  country: "West Indies",
  position: "Batsman",
  batting: { Test: 447, ODI: 1508, IPL: 1482 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Ashish Nehra",
  country: "India",
  position: "Bowler",
  batting: { Test: 250, ODI: 141, IPL: 41 },
  bowling: { Test: 44, ODI: 157, IPL: 106 },
  image: bowlerImg
},
{
  name: "Rahul Dravid",
  country: "India",
  position: "Batsman",
  batting: { Test: 13288, ODI: 10889, IPL: 2174 },
  bowling: { Test: 1, ODI: 4, IPL: 0 },
  image: batsmanImg
},
{
  name: "Nicholas Pooran",
  country: "West Indies",
  position: "Batsman",
  batting: { Test: 126, ODI: 2185, IPL: 2293 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Karn Sharma",
  country: "India",
  position: "Bowler",
  batting: { Test: 4, ODI: 0, IPL: 352 },
  bowling: { Test: 4, ODI: 0, IPL: 83 },
  image: bowlerImg
},
{
  name: "Albie Morkel",
  country: "South Africa",
  position: "All-rounder",
  batting: { Test: 0, ODI: 782, IPL: 974 },
  bowling: { Test: 0, ODI: 50, IPL: 85 },
  image: allrounderImg
},
{
  name: "Dwayne Smith",
  country: "West Indies",
  position: "All-rounder",
  batting: { Test: 70, ODI: 1564, IPL: 2385 },
  bowling: { Test: 0, ODI: 27, IPL: 26 },
  image: allrounderImg
},
{
  name: "Aaron Finch",
  country: "Australia",
  position: "Batsman",
  batting: { Test: 278, ODI: 5406, IPL: 2091 },
  bowling: { Test: 0, ODI: 0, IPL: 1 },
  image: batsmanImg
},
{
  name: "Dhawal Kulkarni",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 12, IPL: 104 },
  bowling: { Test: 0, ODI: 19, IPL: 86 },
  image: bowlerImg
},
{
  name: "Pragyan Ojha",
  country: "India",
  position: "Bowler",
  batting: { Test: 89, ODI: 0, IPL: 16 },
  bowling: { Test: 113, ODI: 21, IPL: 89 },
  image: bowlerImg
},
{
  name: "Saurabh Tiwary",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 49, IPL: 1494 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "S Badrinath",
  country: "India",
  position: "Batsman",
  batting: { Test: 63, ODI: 79, IPL: 1441 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Rajat Bhatia",
  country: "India",
  position: "All-rounder",
  batting: { Test: 0, ODI: 16, IPL: 342 },
  bowling: { Test: 0, ODI: 0, IPL: 71 },
  image: allrounderImg
},
{
  name: "Stuart Binny",
  country: "India",
  position: "All-rounder",
  batting: { Test: 194, ODI: 230, IPL: 880 },
  bowling: { Test: 3, ODI: 20, IPL: 22 },
  image: allrounderImg
},
{
  name: "Deepak Chahar",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 30, IPL: 117 },
  bowling: { Test: 0, ODI: 16, IPL: 88 },
  image: bowlerImg
},
{
  name: "Kedar Jadhav",
  country: "India",
  position: "Batsman",
  batting: { Test: 102, ODI: 1389, IPL: 1208 },
  bowling: { Test: 0, ODI: 27, IPL: 0 },
  image: batsmanImg
},
{
  name: "Dale Steyn",
  country: "South Africa",
  position: "Bowler",
  batting: { Test: 1251, ODI: 365, IPL: 167 },
  bowling: { Test: 439, ODI: 196, IPL: 97 },
  image: bowlerImg
},
{
  name: "Jacques Kallis",
  country: "South Africa",
  position: "All-rounder",
  batting: { Test: 13289, ODI: 11579, IPL: 2427 },
  bowling: { Test: 292, ODI: 273, IPL: 65 },
  image: allrounderImg
},
{
  name: "Kuldeep Yadav",
  country: "India",
  position: "Bowler",
  batting: { Test: 143, ODI: 33, IPL: 201 },
  bowling: { Test: 34, ODI: 167, IPL: 102 },
  image: bowlerImg
},
{
  name: "Manoj Tiwary",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 287, IPL: 1695 },
  bowling: { Test: 0, ODI: 0, IPL: 1 },
  image: batsmanImg
},
{
  name: "Zaheer Khan",
  country: "India",
  position: "Bowler",
  batting: { Test: 610, ODI: 238, IPL: 117 },
  bowling: { Test: 311, ODI: 282, IPL: 102 },
  image: bowlerImg
},
{
  name: "Rahul Tripathi",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 2291 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Irfan Pathan",
  country: "India",
  position: "All-rounder",
  batting: { Test: 1105, ODI: 1544, IPL: 1139 },
  bowling: { Test: 100, ODI: 173, IPL: 80 },
  image: allrounderImg
},
{
  name: "Virender Sehwag",
  country: "India",
  position: "Batsman",
  batting: { Test: 8586, ODI: 8273, IPL: 2728 },
  bowling: { Test: 40, ODI: 96, IPL: 6 },
  image: batsmanImg
},
{
  name: "Shardul Thakur",
  country: "India",
  position: "All-rounder",
  batting: { Test: 347, ODI: 205, IPL: 325 },
  bowling: { Test: 63, ODI: 33, IPL: 107 },
  image: allrounderImg
},
{
  name: "R Vinay Kumar",
  country: "India",
  position: "Bowler",
  batting: { Test: 49, ODI: 46, IPL: 310 },
  bowling: { Test: 1, ODI: 38, IPL: 105 },
  image: bowlerImg
},
{
  name: "Murali Vijay",
  country: "India",
  position: "Batsman",
  batting: { Test: 3982, ODI: 339, IPL: 2619 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Mohammed Siraj",
  country: "India",
  position: "Bowler",
  batting: { Test: 101, ODI: 8, IPL: 112 },
  bowling: { Test: 59, ODI: 43, IPL: 109 },
  image: bowlerImg
},
{
  name: "Rahul Tewatia",
  country: "India",
  position: "All-rounder",
  batting: { Test: 0, ODI: 0, IPL: 1112 },
  bowling: { Test: 0, ODI: 0, IPL: 32 },
  image: allrounderImg
},
{
  name: "Brendon McCullum",
  country: "New Zealand",
  position: "Batsman",
  batting: { Test: 6453, ODI: 6083, IPL: 2880 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Marcus Stoinis",
  country: "Australia",
  position: "All-rounder",
  batting: { Test: 0, ODI: 1394, IPL: 2026 },
  bowling: { Test: 0, ODI: 40, IPL: 44 },
  image: allrounderImg
},
{
  name: "Mandeep Singh",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 37, IPL: 1706 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Jaydev Unadkat",
  country: "India",
  position: "Bowler",
  batting: { Test: 33, ODI: 4, IPL: 197 },
  bowling: { Test: 8, ODI: 0, IPL: 110 },
  image: bowlerImg
},
{
  name: "Naman Ojha",
  country: "India",
  position: "Batsman",
  batting: { Test: 56, ODI: 35, IPL: 1554 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Ishant Sharma",
  country: "India",
  position: "Bowler",
  batting: { Test: 785, ODI: 72, IPL: 57 },
  bowling: { Test: 311, ODI: 115, IPL: 96 },
  image: bowlerImg
},
{
  name: "Nitish Rana",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 0, IPL: 2853 },
  bowling: { Test: 0, ODI: 0, IPL: 10 },
  image: batsmanImg
},
{
  name: "Shubman Gill",
  country: "India",
  position: "Batsman",
  batting: { Test: 2048, ODI: 2775, IPL: 3866 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Ishan Kishan",
  country: "India",
  position: "Batsman",
  batting: { Test: 78, ODI: 933, IPL: 2998 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Praveen Kumar",
  country: "India",
  position: "Bowler",
  batting: { Test: 222, ODI: 292, IPL: 340 },
  bowling: { Test: 27, ODI: 77, IPL: 90 },
  image: bowlerImg
},
{
  name: "Mohammed Shami",
  country: "India",
  position: "Bowler",
  batting: { Test: 755, ODI: 203, IPL: 84 },
  bowling: { Test: 229, ODI: 195, IPL: 133 },
  image: bowlerImg
},
{
  name: "Harshal Patel",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 270 },
  bowling: { Test: 0, ODI: 11, IPL: 151 },
  image: bowlerImg
},
{
  name: "Mohit Sharma",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 31, IPL: 125 },
  bowling: { Test: 0, ODI: 31, IPL: 134 },
  image: bowlerImg
},
{
  name: "Lasith Malinga",
  country: "Sri Lanka",
  position: "Bowler",
  batting: { Test: 275, ODI: 56, IPL: 88 },
  bowling: { Test: 101, ODI: 338, IPL: 170 },
  image: bowlerImg
},
{
  name: "Deepak Hooda",
  country: "India",
  position: "All-rounder",
  batting: { Test: 0, ODI: 153, IPL: 1496 },
  bowling: { Test: 0, ODI: 0, IPL: 10 },
  image: allrounderImg
},
{
  name: "Mayank Agarwal",
  country: "India",
  position: "Batsman",
  batting: { Test: 1488, ODI: 86, IPL: 2756 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Yuvraj Singh",
  country: "India",
  position: "All-rounder",
  batting: { Test: 1900, ODI: 8701, IPL: 2750 },
  bowling: { Test: 9, ODI: 111, IPL: 36 },
  image: allrounderImg
},
{
  name: "Shreyas Iyer",
  country: "India",
  position: "Batsman",
  batting: { Test: 666, ODI: 2331, IPL: 3731 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Sandeep Sharma",
  country: "India",
  position: "Bowler",
  batting: { Test: 0, ODI: 0, IPL: 60 },
  bowling: { Test: 0, ODI: 0, IPL: 146 },
  image: bowlerImg
},
{
  name: "Parthiv Patel",
  country: "India",
  position: "Batsman",
  batting: { Test: 934, ODI: 736, IPL: 2848 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "David Miller",
  country: "South Africa",
  position: "Batsman",
  batting: { Test: 36, ODI: 4295, IPL: 3077 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Chris Gayle",
  country: "West Indies",
  position: "All-rounder",
  batting: { Test: 7214, ODI: 10480, IPL: 4965 },
  bowling: { Test: 32, ODI: 167, IPL: 18 },
  image: allrounderImg
},
{
  name: "Krunal Pandya",
  country: "India",
  position: "All-rounder",
  batting: { Test: 0, ODI: 186, IPL: 1756 },
  bowling: { Test: 0, ODI: 5, IPL: 93 },
  image: allrounderImg
},
{
  name: "KL Rahul",
  country: "India",
  position: "Batsman",
  batting: { Test: 2844, ODI: 2265, IPL: 5222 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Shane Watson",
  country: "Australia",
  position: "All-rounder",
  batting: { Test: 3731, ODI: 5757, IPL: 3874 },
  bowling: { Test: 75, ODI: 168, IPL: 92 },
  image: allrounderImg
},
{
  name: "Umesh Yadav",
  country: "India",
  position: "Bowler",
  batting: { Test: 205, ODI: 111, IPL: 208 },
  bowling: { Test: 170, ODI: 111, IPL: 144 },
  image: bowlerImg
},
{
  name: "Faf du Plessis",
  country: "South Africa",
  position: "Batsman",
  batting: { Test: 4163, ODI: 5507, IPL: 4773 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Gautam Gambhir",
  country: "India",
  position: "Batsman",
  batting: { Test: 4154, ODI: 5238, IPL: 4217 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Dwayne Bravo",
  country: "West Indies",
  position: "All-rounder",
  batting: { Test: 2200, ODI: 2968, IPL: 1560 },
  bowling: { Test: 86, ODI: 199, IPL: 183 },
  image: allrounderImg
},
{
  name: "Amit Mishra",
  country: "India",
  position: "Bowler",
  batting: { Test: 220, ODI: 43, IPL: 381 },
  bowling: { Test: 76, ODI: 64, IPL: 174 },
  image: bowlerImg
},
{
  name: "Axar Patel",
  country: "India",
  position: "All-rounder",
  batting: { Test: 505, ODI: 384, IPL: 1916 },
  bowling: { Test: 50, ODI: 59, IPL: 128 },
  image: allrounderImg
},
{
  name: "Harbhajan Singh",
  country: "India",
  position: "Bowler",
  batting: { Test: 2225, ODI: 1237, IPL: 833 },
  bowling: { Test: 417, ODI: 269, IPL: 150 },
  image: bowlerImg
},
{
  name: "Suryakumar Yadav",
  country: "India",
  position: "Batsman",
  batting: { Test: 164, ODI: 511, IPL: 4311 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Wriddhiman Saha",
  country: "India",
  position: "Batsman",
  batting: { Test: 1353, ODI: 41, IPL: 2934 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Manish Pandey",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 566, IPL: 3942 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Yusuf Pathan",
  country: "India",
  position: "All-rounder",
  batting: { Test: 0, ODI: 810, IPL: 3204 },
  bowling: { Test: 0, ODI: 33, IPL: 42 },
  image: allrounderImg
},
{
  name: "Sanju Samson",
  country: "India",
  position: "Batsman",
  batting: { Test: 0, ODI: 510, IPL: 4704 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "AB de Villiers",
  country: "South Africa",
  position: "Batsman",
  batting: { Test: 8765, ODI: 9577, IPL: 5162 },
  bowling: { Test: 2, ODI: 7, IPL: 0 },
  image: batsmanImg
},
{
  name: "Sunil Narine",
  country: "West Indies",
  position: "All-rounder",
  batting: { Test: 0, ODI: 238, IPL: 1780 },
  bowling: { Test: 0, ODI: 92, IPL: 192 },
  image: allrounderImg
},
{
  name: "Kieron Pollard",
  country: "West Indies",
  position: "All-rounder",
  batting: { Test: 0, ODI: 2706, IPL: 3412 },
  bowling: { Test: 0, ODI: 55, IPL: 69 },
  image: allrounderImg
},
{
  name: "Bhuvneshwar Kumar",
  country: "India",
  position: "Bowler",
  batting: { Test: 552, ODI: 126, IPL: 320 },
  bowling: { Test: 63, ODI: 141, IPL: 198 },
  image: bowlerImg
},
{
  name: "Piyush Chawla",
  country: "India",
  position: "Bowler",
  batting: { Test: 280, ODI: 67, IPL: 624 },
  bowling: { Test: 47, ODI: 32, IPL: 192 },
  image: bowlerImg
},
{
  name: "Ajinkya Rahane",
  country: "India",
  position: "Batsman",
  batting: { Test: 5077, ODI: 2962, IPL: 5032 },
  bowling: { Test: 0, ODI: 0, IPL: 1 },
  image: batsmanImg
},
{
  name: "Ambati Rayudu",
  country: "India",
  position: "Batsman",
  batting: { Test: 42, ODI: 1694, IPL: 4348 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Suresh Raina",
  country: "India",
  position: "All-rounder",
  batting: { Test: 768, ODI: 5615, IPL: 5528 },
  bowling: { Test: 0, ODI: 36, IPL: 25 },
  image: allrounderImg
},
{
  name: "Robin Uthappa",
  country: "India",
  position: "Batsman",
  batting: { Test: 49, ODI: 934, IPL: 4952 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "Ravichandran Ashwin",
  country: "India",
  position: "All-rounder",
  batting: { Test: 3309, ODI: 675, IPL: 833 },
  bowling: { Test: 516, ODI: 156, IPL: 187 },
  image: allrounderImg
},
{
  name: "Shikhar Dhawan",
  country: "India",
  position: "Batsman",
  batting: { Test: 2315, ODI: 6793, IPL: 6769 },
  bowling: { Test: 0, ODI: 0, IPL: 4 },
  image: batsmanImg
},
{
  name: "Dinesh Karthik",
  country: "India",
  position: "Batsman",
  batting: { Test: 1025, ODI: 1752, IPL: 4842 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
{
  name: "MS Dhoni",
  country: "India",
  position: "Batsman",
  batting: { Test: 4876, ODI: 10773, IPL: 5439 },
  bowling: { Test: 0, ODI: 0, IPL: 0 },
  image: batsmanImg
},
];
