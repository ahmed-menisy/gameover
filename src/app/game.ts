export interface Game {
  id?: number;
  title?: string;
  thumbnail?: string;
  short_description?: string;
  game_url?: string;
  genre?: string;
  platform?: string;
  publisher?: string;
  developer?: string;
  release_date?: string;
  freetogame_profile_url?: string;
  status?: string;
  description?: string;
  Publisher?: string;
  screenshots?: [{ id: number; image: string }];
  minimum_system_requirements?: any;
}
