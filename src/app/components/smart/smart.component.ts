import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.scss']
})
export class SmartComponent implements OnInit {
users: any[] | any;
constructor(private service: SharedService) {}
ngOnInit(): void {
  this.service.getUsers().subscribe((data) => {
    this.users = data;
  });}
}
