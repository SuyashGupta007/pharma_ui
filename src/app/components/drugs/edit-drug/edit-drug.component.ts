import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drugs } from 'src/app/models/drugs.model';
import { DrugsService } from 'src/app/services/drugs.service';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-edit-drug',
  templateUrl: './edit-drug.component.html',
  styleUrls: ['./edit-drug.component.scss']
})
export class EditDrugComponent implements OnInit {
  DrugDetails:Drugs={
    id:'',
    name:'',
    quantity:0 ,
    expiry_Date: new Date("Mon Dec 26 2023 "),
    price:0
  }

constructor(private route:ActivatedRoute,private drugService:DrugsService,private router:Router){}
 ngOnInit(): void {
   this.route.paramMap.subscribe({
    next:(params)=>{
     const id= params.get('id');
     if(id)
     {
       this.drugService.getDrug(id).subscribe({
              next:(response)=>{
                this.DrugDetails = response;
              }
       })
     }
    }
   })
 }
 updateDrug(){
  this.drugService.updateDrug(this.DrugDetails.id,this.DrugDetails).subscribe({
    next:(drug) =>{
      this.router.navigate(['drugs']);
    }

  });




 }

 deleteDrug(id:string){
    this.drugService.deleteDrug(id).subscribe({
      next:(response) =>{
        this.router.navigate(['drugs']);
      }
    });
 }
}
