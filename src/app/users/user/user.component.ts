import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from 'src/app/shared/model/model';
import { UserService } from 'src/app/shared/serices/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  singleUser!: Iuser|undefined
  userId: number= 1;
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = +this.route.snapshot.params['id']
    this.singleUser = this.userService.getSingleUser(this.userId)
  }

}
