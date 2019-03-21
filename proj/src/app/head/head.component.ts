import { Component, OnInit } from '@angular/core';
import { HttpReqHendlerService } from '../shared/service/http-req-hendler.service';
import { Pokemon } from '../shared/model/Pokemon';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  public name:string;
  public myReqHendler:HttpReqHendlerService;

  constructor(reqHendler:HttpReqHendlerService) {
    this.myReqHendler = reqHendler;
    this.name = ""
   }

  ngOnInit() {
  }

  public showPokemon():void{
    this.myReqHendler.getPokemonApi(this.name);
  }
}
