import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {

  name=""
  admno=""
  rollno=""
  college=""

  constructor(private api:ApiService){}


  readValues=()=>
  {
    let data:any={"name":this.name,"admno":this.admno,"rollno":this.rollno,"college":this.college}
    console.log(data)

    this.api.addStudent(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success")
        {
          alert("Patient added successfully")
          this.name=""
          this.admno=""
          this.rollno=""
          this.college=""
          
        }
        else{
          alert("Something went wrong")
        }
      }
    )
  }

  }


