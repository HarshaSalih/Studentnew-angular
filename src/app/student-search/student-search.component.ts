import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent {

  constructor(private api:ApiService){}

  name=""
  searchData:any=[]

  readValues=()=>
  {
    let data={
      "name": this.name
  }
  console.log(data)
  this.api.searchStudent(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if (response.length==0) {
        alert("Invalid student name")
        
      } else {
        this.searchData=response
        
      }
    }
  )
  }

  readValue=(id:any)=>
  {
    let data:any={"id":id}
    this.api.deleteStudent(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success")
        {
          alert("Deleted successfully")
          this.searchData=[]
        }
      }
    )
  }


}
