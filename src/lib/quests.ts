interface Quest {
  id: number;
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  points: number;
  hint: string;
}

export const Quests: Quest[] = [
  {
    id: 1,
    title: "Find a Red Car",
    description:
      "Take a photo with a red car. It could be a parked car, taxi, or vehicle on the street",
    difficulty: "easy",
    points: 100,
    hint: "Check parking lots or main streets - cars are usually parked there",
  },
  {
    id: 2,
    title: "Pizza Time",
    description:
      "Find a pizzeria and take a photo in front of it. Bonus: order a traditional pizza",
    difficulty: "easy",
    points: 120,
    hint: "Look for restaurants with 'Pizza' sign - check downtown or tourist streets",
  },
  {
    id: 3,
    title: "Street Art Hunter",
    description: "Find interesting graffiti or street art and pose next to it",
    difficulty: "easy",
    points: 110,
    hint: "Alternative neighborhoods, alleys and pedestrian passages usually have the best street art",
  },
  {
    id: 4,
    title: "Cafe with a View",
    description:
      "Sit in a cafe with a nice view, order a drink and take an atmospheric photo",
    difficulty: "medium",
    points: 150,
    hint: "Look for cafes on rooftops, by windows or in squares with views of main attractions",
  },
  {
    id: 5,
    title: "Local Market",
    description:
      "Visit a traditional market or bazaar, buy something and take a photo against the stalls",
    difficulty: "easy",
    points: 130,
    hint: "Markets usually operate in the morning - look for them in the old town",
  },
  {
    id: 6,
    title: "Historic Church",
    description:
      "Find a beautiful church, cathedral or temple and take a respectful photo",
    difficulty: "medium",
    points: 140,
    hint: "Churches are usually located in city centers and stand out with their architecture",
  },
  {
    id: 7,
    title: "Bridge or Pier",
    description:
      "Take an artistic photo from a bridge, pier or passage over water",
    difficulty: "medium",
    points: 160,
    hint: "Look for a river, canal, lake - almost every city has something like that",
  },
  {
    id: 8,
    title: "Street Cat",
    description:
      "Find and photograph a cat on the street - it could be on the sidewalk, balcony or window",
    difficulty: "easy",
    points: 100,
    hint: "Cats love peaceful areas, parks and old neighborhoods",
  },
  {
    id: 9,
    title: "Dogs on a Walk",
    description: "Pose next to a dog or a dog being walked",
    difficulty: "easy",
    points: 110,
    hint: "Parks, waterfronts and popular streets are ideal - especially early in the morning",
  },
  {
    id: 10,
    title: "Neon at Night",
    description:
      "Take a photo against a glowing neon sign, bar or shop in the evening",
    difficulty: "medium",
    points: 140,
    hint: "Active neighborhoods, bars and shops have neons - best at night",
  },
  {
    id: 11,
    title: "Phone Booth",
    description:
      "Find a traditional public telephone booth and pose next to it",
    difficulty: "hard",
    points: 180,
    hint: "These devices are rare in the age of smartphones - look in old neighborhoods or tourist centers",
  },
  {
    id: 12,
    title: "Sunset Moment",
    description:
      "Take a beautiful sunset photo with a characteristic city element",
    difficulty: "medium",
    points: 170,
    hint: "Find tall buildings, rooftops, a beach or park - wait for the golden hour",
  },
  {
    id: 13,
    title: "Public Transport",
    description:
      "Pose next to local public transport - taxi, bus, tram or train",
    difficulty: "easy",
    points: 120,
    hint: "Public transport is everywhere - wait at a stop or parking area",
  },
  {
    id: 14,
    title: "Portrait Mural",
    description: "Find a mural with a human portrait and pose next to it",
    difficulty: "medium",
    points: 150,
    hint: "Look in artistic neighborhoods, tunnels or on building walls",
  },
  {
    id: 15,
    title: "Park with Fountain",
    description: "Visit a park with a fountain and pose next to it",
    difficulty: "easy",
    points: 130,
    hint: "Parks are in every city - fountains are their ornament",
  },
  {
    id: 16,
    title: "Monument or Statue",
    description: "Find a monument, statue or column and pose respectfully",
    difficulty: "medium",
    points: 145,
    hint: "The main square or city center usually has statues of historical figures",
  },
  {
    id: 17,
    title: "Bookstore Selfie",
    description: "Visit a bookstore and pose between the book shelves",
    difficulty: "easy",
    points: 125,
    hint: "Bookstores are located on main streets and shopping centers",
  },
  {
    id: 18,
    title: "Photogenic Stairs",
    description: "Find interesting or beautiful stairs and pose on them",
    difficulty: "medium",
    points: 155,
    hint: "Old neighborhoods, parks and tourist areas have interesting stairs",
  },
  {
    id: 19,
    title: "Artistic Alley",
    description:
      "Capture a street full of colors, decorations or artistic elements",
    difficulty: "medium",
    points: 160,
    hint: "Look for decorated streets, passages or shopping alleys",
  },
  {
    id: 20,
    title: "City Bike",
    description: "Take a photo on a city bike or next to a bike station",
    difficulty: "easy",
    points: 130,
    hint: "Bike-sharing systems are popular in modern cities",
  },
  {
    id: 21,
    title: "Traditional Bakery",
    description:
      "Visit a local bakery, buy fresh bread or pastries and pose with them",
    difficulty: "easy",
    points: 135,
    hint: "Traditional bakeries are in every city - go in the morning for the best pastries",
  },
  {
    id: 22,
    title: "Artistic Door",
    description:
      "Find a beautifully painted or decorative door and pose in front of it",
    difficulty: "easy",
    points: 140,
    hint: "Old neighborhoods and historic districts have colorful, characteristic doors",
  },
  {
    id: 23,
    title: "Local Delicatessen",
    description:
      "Enter a specialty shop (cheese, wine, chocolate) and pose at the counter while buying something",
    difficulty: "medium",
    points: 160,
    hint: "Look for shops with local food - they might be hidden on side streets",
  },
  {
    id: 24,
    title: "Heart Graffiti",
    description: "Find heart-shaped graffiti and pose romantically next to it",
    difficulty: "easy",
    points: 120,
    hint: "Heart graffiti is usually found in popular selfie spots",
  },
  {
    id: 25,
    title: "Artistic Window Display",
    description: "Pose against a beautifully decorated shop window",
    difficulty: "easy",
    points: 130,
    hint: "Concentrated on main shopping streets - especially during holiday season",
  },
  {
    id: 26,
    title: "Medieval Castle",
    description:
      "Find a medieval castle or fortification and take a photo of it or in front of it",
    difficulty: "medium",
    points: 160,
    hint: "Castles are common in European countryside and hilltops - check tourist guides",
  },
  {
    id: 27,
    title: "Cobblestone Street",
    description: "Find a charming cobblestone street and take a photo on it",
    difficulty: "easy",
    points: 120,
    hint: "Old town districts almost always have cobblestone streets",
  },
  {
    id: 28,
    title: "Town Square",
    description:
      "Pose in the center of a town square with historic buildings around",
    difficulty: "easy",
    points: 130,
    hint: "Every European town has a central square (plaza, plac, place)",
  },
  {
    id: 29,
    title: "Half-Timbered House",
    description: "Find and photograph a traditional half-timbered building",
    difficulty: "medium",
    points: 150,
    hint: "Common in Germany, France, and Central Europe - look in old quarters",
  },
  {
    id: 30,
    title: "Train Station",
    description: "Take a photo inside or in front of a historic train station",
    difficulty: "easy",
    points: 120,
    hint: "Train stations are usually architecturally interesting and centrally located",
  },
  {
    id: 31,
    title: "Vintage Tram",
    description: "Take a photo on or next to a historic tram/streetcar",
    difficulty: "medium",
    points: 145,
    hint: "Many European cities still operate vintage trams - check schedules and routes",
  },
  {
    id: 32,
    title: "Christmas Market",
    description:
      "Visit a Christmas market, buy something and pose with decorations",
    difficulty: "medium",
    points: 155,
    hint: "European Christmas markets are magical - December is the best time",
  },
  {
    id: 33,
    title: "Beer Hall or Pub",
    description:
      "Sit in a traditional European beer hall or pub and toast to the camera",
    difficulty: "easy",
    points: 135,
    hint: "Beer halls are iconic in Germany, Czech Republic, Austria - look for local breweries",
  },
  {
    id: 34,
    title: "Canal Gondola",
    description: "Take a photo on or next to a gondola or canal boat",
    difficulty: "hard",
    points: 190,
    hint: "Venice and some other European cities have canal systems - gondolas are iconic",
  },
  {
    id: 35,
    title: "Ancient Roman Ruins",
    description:
      "Find and photograph ancient Roman ruins or archaeological sites",
    difficulty: "hard",
    points: 200,
    hint: "Look in Mediterranean countries - Rome, Athens, Greece have many ruins",
  },
  {
    id: 36,
    title: "Historic City Walls",
    description:
      "Walk along historic city fortification walls and take a scenic photo",
    difficulty: "medium",
    points: 155,
    hint: "Many European medieval cities still have preserved walls around their old towns",
  },
  {
    id: 37,
    title: "Flower-Filled Balcony",
    description:
      "Photograph a building with beautiful flowers on the balconies",
    difficulty: "easy",
    points: 125,
    hint: "Mediterranean and Alpine regions are known for flower decorations on buildings",
  },
  {
    id: 38,
    title: "Outdoor Cafe Scene",
    description:
      "Sit at an outdoor cafe, order a local specialty and take a cozy photo",
    difficulty: "easy",
    points: 140,
    hint: "European outdoor cafe culture is strong - especially in France, Italy, and Spain",
  },
  {
    id: 39,
    title: "Traditional Market Hall",
    description:
      "Visit a covered market hall with local produce and artisan goods",
    difficulty: "medium",
    points: 150,
    hint: "Most European cities have historic covered markets - great for local food shopping",
  },
  {
    id: 40,
    title: "Bicycle with Basket",
    description:
      "Find and pose with a traditional European bike with a flower basket",
    difficulty: "easy",
    points: 130,
    hint: "Common sight in Netherlands, Denmark, and other Northern European countries",
  },
];
