import { Student } from "./Student";

export class Complaint{
    id:number;
    complaintType: String;
    description: String;
    response:String;
    status: String;
    timeStamp: String;
    studentDetails: Student;
}