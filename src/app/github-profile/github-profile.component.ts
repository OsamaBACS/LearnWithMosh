import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css'],
})
export class GithubProfileComponent implements OnInit {

  constructor(private router: Router) {}

  submit(){
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest'}
    });
  }

  ngOnInit() {
    //This is the actual paramMap object and not Observable
    // let id = this.route.snapshot.paramMap.get('id');
    // console.log(id);
    // this.route.paramMap.subscribe((params) => {
    //   //let id = Number(params.get('id'));
    //   console.log(params.get('id'));
    // });
  }
}
