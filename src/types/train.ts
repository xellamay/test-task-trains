export type TrainCharacteristics = {
  speed: number,
  force: number,
  engineAmperage: number,
}

export type Train = {
  id: string;
  name: string,
  description: string,
  characteristics: TrainCharacteristics[]
}