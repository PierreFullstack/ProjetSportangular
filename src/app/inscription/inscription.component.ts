import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { UsercoService } from './../userco.service';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  user : User = new User();
  show=false;
  alluser;
  constructor(private router: Router, 
  private http: Http,
  private myservice: UsercoService) { }
  pseudotest=0;
  mailtest=0;

  showMessage = false;
  showMessage2 = false;
  showMessage3 = false;
  ngOnInit() {
  }

inscrire(){
  console.log('Tentative inscritption');
  this.show=false;
  this.showMessage=false;
  this.showMessage2=false;
  this.showMessage3=false;
  this.pseudotest=0;
  this.mailtest=0;

  if(this.user.nom!=null && this.user.prenom!=null && this.user.mail!=null && this.user.mdp!=null && this.user.pseudo!=null) {
      this.http.get('http://localhost:8080/user').subscribe(reponse =>{
        this.alluser=reponse.json();
            for(let user of this.alluser) {
              if (user.pseudo == this.user.pseudo) {
                this.pseudotest=1;}
              else if (user.mail == this.user.mail) {
                this.mailtest=1;}
              }
              if(this.pseudotest==1){
                this.showMessage2 = true;   //pseudo existe
                this.router.navigate(['/inscription']);
              }
              else if(this.mailtest==1){
                  this.showMessage3 = true;   // mail existe
                  this.router.navigate(['/inscription']);
              }
              else{
                  this.http.post('http://localhost:8080/user',this.user).subscribe(reponse =>{
                  this.alluser=reponse.json();})
                  this.router.navigate(['/inscription']);
                  this.showMessage = true;    // valid
              }
            })
        }   
  else {
    this.show = true;   // pas tout rempli
  }


}


}



      /*
      if(this.userrep.pseudo != this.user.pseudo && this.userrep.mail != this.user.mail ){
        this.http.post('http://localhost:8080/user',this.user).subscribe(data=>{
            console.log(data);
            this.showMessage = true;
          }
          , err=>{
            console.log(err);    
        });

      }else{
        this.showMessage2 = true;   // déjà inscrit
      }
  });
}

  else{this.show = true;}   // remplissez tous les champs

} 
}*/
