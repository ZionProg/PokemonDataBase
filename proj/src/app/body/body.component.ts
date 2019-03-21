import { Component, OnInit } from '@angular/core';
import { HttpReqHendlerService } from '../shared/service/http-req-hendler.service';
import { Pokemon } from '../shared/model/Pokemon';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public myReqHendler: HttpReqHendlerService;


  constructor(reqHendler: HttpReqHendlerService) {
    this.myReqHendler = reqHendler;
  }

  public loadRolls():void{
    if(!this.myReqHendler.needRoll)
      return;

      this.myReqHendler.needRoll = false;
      
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  }

  ngOnInit() {
  }

}
