import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../../services/authentication/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user!: any;

  constructor(private _auth: AuthService, private $router: Router) { }

  ngOnInit(): void {
    if(!this._auth.getLoggedStatus()) {
      this.$router.navigate(['']);
      alert("You must be logged first")
      return ;    
    }

    this.user = this._auth.getCurrentUser();
  }

}
