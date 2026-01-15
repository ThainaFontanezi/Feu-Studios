export interface Game {
  id: number
  title: string
  genre: string
  platform: string
  releaseYear: number
  image: string
}

export const games: Game[] = [
  {
    id: 1,
    title: "The Legend of Zelda: Breath of the Wild",
    genre: "Aventura",
    platform: "Nintendo Switch",
    releaseYear: 2017,
    image: "https://upload.wikimedia.org/wikipedia/en/0/0b/The_Legend_of_Zelda_Breath_of_the_Wild.jpg"
  },
  {
    id: 2,
    title: "God of War",
    genre: "Ação",
    platform: "PlayStation",
    releaseYear: 2018,
    image: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg"
  },
  {
    id: 3,
    title: "Minecraft",
    genre: "Sandbox",
    platform: "Multiplataforma",
    releaseYear: 2011,
    image: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png"
  }
]