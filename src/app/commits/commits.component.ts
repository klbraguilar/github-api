import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.css']
})
export class CommitsComponent implements OnInit {
  commitInformation: any[] = [];
  constructor(private serviceService:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.serviceService.listCommits()
    .subscribe(
      data => {
      console.log(data);
      
      this.commitInformation = data
    }, 
      error => {
        console.log('Error: ', error)
      }
    )
  }

}
