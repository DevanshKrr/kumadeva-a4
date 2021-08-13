export default interface Video {
  id: string,
  thumbnail_360_url:string,
  title:string,
  created_time:number,
  views_total:number,
  "owner.username":string,
  "owner.avatar_80_url": string
}