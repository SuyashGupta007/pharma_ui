import { Component, NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Drugs } from 'src/app/models/drugs.model';
import { DrugsService } from 'src/app/services/drugs.service';

@Component({
  selector: 'app-add-drug',
  templateUrl: './add-drug.component.html',
  styleUrls: ['./add-drug.component.scss']
})

export class AddDrugComponent {
 addDrugRequest: Drugs={
  id:'',
  name:'',
  quantity:0 ,
  expiry_Date: new Date("Mon Dec 26 2023 "),
  price:0
 };
 constructor (private drugService:DrugsService,private router:Router){}

 addDrug(){
  this.drugService.addDrug(this.addDrugRequest).subscribe({
    next:(drug) =>{
      this.router.navigate(['drugs']);
    }
  });
 }
}
