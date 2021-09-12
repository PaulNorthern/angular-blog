import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from "../../shared/posts.service";
import {Post} from "../../shared/interfaces";
import {Subscription} from "rxjs";
import {AlertService} from "../shared/services/alert.service";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  posts: Post[] = []
  // @ts-ignore
  pSub: Subscription
  // @ts-ignore
  dSub: Subscription
  searchStr = ''

  constructor(
    private postsService: PostsService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.pSub = this.postsService.getAll().subscribe(posts => {
      console.log(posts, '+')
      this.posts = posts
    })
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }

    if (this.dSub) {
      this.dSub.unsubscribe()
    }
  }

  remove(id: string | undefined) {
    if (!id) {
      return
    }
    this.dSub = this.postsService.remove(id).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== id)
      this.alertService.warning('Post was successful deleted')
    })
  }
}














