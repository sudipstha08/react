export interface ISpell {
  index: string
  name: string
  desc: string
  level: number
  range: string
  attack_type: string
  school: { name: string }
  casting_time: string
  duration: string
}