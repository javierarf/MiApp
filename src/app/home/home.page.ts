import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario: string='';
  password:string='';

  constructor(private router:Router, private activaterouter:ActivatedRoute, private alertController:AlertController) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
      this.usuario = navigation.extras.state['usuario'];
      this.password = navigation.extras.state['password'];
      }
    }

  ngOnInit(){
  }  

  }



