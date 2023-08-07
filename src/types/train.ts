export type Train = {
  name: string,
  description: string,
  characteristics: [{
    speed: number,
    force: number,
    engineAmperage: number,
  }]
}