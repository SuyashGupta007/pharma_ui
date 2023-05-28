import { Component, OnInit } from '@angular/core';
import { Drugs } from 'src/app/models/drugs.model';
import { DrugsService } from 'src/app/services/drugs.service';

@Component({
  selector: 'app-drugs-list',
  templateUrl: './drugs-list.component.html',
  styleUrls: ['./drugs-list.component.scss']
})
export class DrugsListComponent implements OnInit {
  drugs:Drugs[] = [];
  constructor(private drugsService:DrugsService){}
  ngOnInit(): void {
    this.drugsService.getAllDrugs().subscribe({
      next: (drugs) =>{
        this.drugs = drugs;
      },
      error:(response)=>{
        console.log(response);
      }
    })

  }
}
