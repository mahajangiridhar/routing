import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from '../shared/model/model';
import { UserService } from '../shared/serices/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userArr! : Iuser[]
  userId:number = 1;
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.userArr = this.userService.getAllUser()
    
  }
  gotoProducts(){
    this.router.navigate(["/products"])
  }
}
