import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import 'rxjs/add/observable/combineLatest';
// import 'rxjs/add/operator/map';
import { map, switchMap } from 'rxjs/operators';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css'],
})
export class GithubFollowersComponent implements OnInit {
  followers: any;

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService
  ) {}

  ngOnInit() {
    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(
        switchMap((compined) => {
          let id = compined[0].get('id');
          let page = compined[1].get('page');

          return this.service.getAll();
        })
      )
      .subscribe((followers) => (this.followers = followers));

    //this.route.paramMap.subscribe((params) => {});
    // let id = this.route.snapshot.paramMap.get('id');

    //this.route.queryParamMap.subscribe((query) => {});
    // let page = this.route.snapshot.queryParamMap.get('page');
  }
}
