import { Component } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})

export class FavoriteComponent {

  isFavoriteStar = true;
  isFavoriteHeart = true;

  onClickStar() {
    console.log("Star is clicked");
    this.isFavoriteStar = !this.isFavoriteStar;
  }

  onClickHeart(){
    console.log("Heart is clicked");
    this.isFavoriteHeart = !this.isFavoriteHeart;
  }
}
