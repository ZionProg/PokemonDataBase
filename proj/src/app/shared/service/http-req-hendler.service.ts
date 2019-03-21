import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../model/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class HttpReqHendlerService {

  public myHttpClient:HttpClient;
  public name:string;
  public pokemon:Pokemon; 
  public needRoll:boolean; 

  constructor(httpClient:HttpClient) {
    this.myHttpClient = httpClient;
    this.pokemon = null;
    this.needRoll = false;
   }

   public getPokemon():Pokemon{
     return this.pokemon;
   }

   public getPokemonApi(name:string):void{
     this.needRoll = true;
    this.myHttpClient.get<Pokemon>("https://pokeapi.co/api/v2/pokemon/" + name.toLowerCase() + "/").subscribe(
      (res)=>{ this.pokemon = res; },
      (err)=>{ this.name = "pokomon " + "'" + name + "'" +" does not exists"; this.pokemon = null;}
  );
   }

   public getLocationApi(location:string):void{
    this.myHttpClient.get<Pokemon>(location).subscribe(
      (res)=>{ this.pokemon = res; },
      (err)=>{ this.name = "pokomon " + "'" + name + "'" +" does not exists"; this.pokemon = null;}
  );
   }
}
