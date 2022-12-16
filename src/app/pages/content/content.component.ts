import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = "https://www.themarysue.com/wp-content/uploads/2022/03/avengers-endgame-iron-man-infinity-stones.jpeg?resize=1200%2C749";
  contentTitle: string = "Title";
  contentDescription: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales nunc sit amet ligula dapibus, in vehicula dolor interdum. Nunc congue orci eget dolor ornare dictum. Nunc et sapien in leo ullamcorper pellentesque. Phasellus semper, lectus a convallis ultrices, nulla libero scelerisque metus, vel aliquet eros orci quis libero. Suspendisse at risus dui. Quisque varius lacus eget massa varius, nec malesuada eros convallis. In vitae leo vestibulum, aliquam lacus eget, pellentesque diam. Donec blandit urna diam, lobortis ultricies nisi porta quis. Donec tristique dolor eu purus eleifend, in laoreet turpis tristique. Quisque iaculis neque nec venenatis ornare. Pellentesque dui lectus, egestas non fermentum suscipit, condimentum id ex. Cras bibendum elementum ipsum, nec tristique tellus rhoncus ac.";
  private id:string | null = "0";

  constructor( private route:ActivatedRoute ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get('Id'));
    this.setValuesToComponent(this.id);

  }

  setValuesToComponent(id:string | null) {
    const result = dataFake.filter(article => article.id.toString() == id)[0];

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photo;
  }

}
