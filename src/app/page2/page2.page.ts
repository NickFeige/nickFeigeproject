import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

constructor(){}
 // movieData: any = [];
 // constructor(private service: MovieService) { }
  ngOnInit() {
   // this.service.GetMovieData().subscribe(
     // (data) => {
      //this.movieData = data.Search;
     // console.log(this.movieData);
   //   });
  }

}
