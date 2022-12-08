import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent {

  constructor(private api:ApiService){
    api.fetchStudent().subscribe(
      (response)=>
      {
        this.student=response;
      }
    )
  }



  student:any=[]

}
