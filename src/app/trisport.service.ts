import { Injectable } from '@angular/core';
import { Sport } from './Sport';

@Injectable({
  providedIn: 'root'
})
export class TrisportService {

  tennis = new Sport(1, true);
  foot = new Sport(2, true);
  volley = new Sport(3, true);
  basket = new Sport(4, true);
  badminton = new Sport(5, true);
  course = new Sport(6, true);

  constructor() { }

  showtennis(){this.tennis.affiche=true};
  hidetennis(){this.tennis.affiche=false};

  showfoot(){this.foot.affiche=true};
  hidefoot(){this.foot.affiche=false};

  showvolley(){this.volley.affiche=true};
  hidevolley(){this.volley.affiche=false};

  showbasket(){this.basket.affiche=true};
  hidebasket(){this.basket.affiche=false};

  showbadminton(){this.badminton.affiche=true};
  hidebadminton(){this.badminton.affiche=false};

  showcourse(){this.course.affiche=true};
  hidecourse(){this.course.affiche=false};

}
