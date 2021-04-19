export class Comment {
    id:number=0;
    name:string='';
    image:string='';
    content:string='';
    date:string='';
}

export class PostComment{
    slug:string | null='';
    userid:string | null='';
    content:string='';
}
