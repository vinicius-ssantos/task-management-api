export class TaskDto {
    id:string;
    title:string;
    description:string;
    status:string;
    expitarionDate:Date;
}

export interface FindAllParameters {
    title:string;
    status:string;
}