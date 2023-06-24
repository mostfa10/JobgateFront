import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-top-search',
  templateUrl: './topsearch.component.html',
  styleUrls: ['./topsearch.component.css']
})
export class TopsearchComponent implements OnInit {

  categories!: any
  SearchFrom!:FormGroup
  constructor(
    private formB:FormBuilder,
    private route:Router,
    private category:CategoryService) { 
    this.SearchFrom = this.formB.group(
      {
        states:  [''],
        keyword:  [''],
        categories: [[]]
      })
  }

  ngOnInit(): void {
    this.getCategories()
  }
  
  getCategories(){
    this.category.allCategory().subscribe((categories:any) => {
      this.categories = categories.data
      console.log(categories)
    })
  }
  search(){
    let searchQuery = ''
    // Object.keys(this.SearchFrom.value).forEach(key => {
    //   if(key != 'categories' && this.SearchFrom.value[key] != '' ){
    //     searchQuery += '&'+key+"=' + this.SearchFrom.value[key]
    //   }
    //   if(key == 'categories' && this.SearchFrom.value[key].length > 0) {
    //     searchQuery += '&' + this.SearchFrom.value[key].join(',')
    //   }
    // })

    this.route.navigate(['offre'],{queryParams: this.SearchFrom.value})
  }
}