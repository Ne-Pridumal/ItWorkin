export type TCharacter = {
  created: Date;
  episode: string[];
  gender: Gender;
  id: number;
  image: string;
  location: Location;
  name: string;
  origin: Location;
  species: Species;
  status: Status;
  type: string;
  url: string;
}

type Gender = "Female" | "Male" | "unknown"

type Location = {
  name: string;
  url: string;
}

type Species = "Alien" | "Human"

type Status = "Alive" | "Dead" | "unknown"

