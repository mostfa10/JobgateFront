import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ContratService } from 'src/app/services/contrat.service';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  contracts:any = []
  categories:any = []
  states:any
  term:any
  totalResults:number = 0
  
  collapsedSalary: boolean = false;
  collapsedCategories: boolean = true;
  collapsedState: boolean = true;
  collapsedContract: boolean = true;
  hideAllCategories: boolean = true;
  hideAllState: boolean = true;
  filterInitialzed : boolean  = false
  constructor(
    private contract:ContratService,
    private category:CategoryService,
    private place:PlaceService,
    private router:Router) {
      this.router.events.subscribe((e: any) => {
        if (e instanceof NavigationEnd && this.filterInitialzed) {
            this.checkSelected()
        }
      });
     }

  ngOnInit(): void {
    this.getFilters()
  }

  async getFilters() {
    try {
      const [places, categories, contracts] = await Promise.all([
        this.place.allPlace().toPromise(),
        this.category.allCategory().toPromise(),
        this.contract.allcontrat().toPromise(),
      ]);
  
      this.states = places;
      this.categories = categories;
      this.contracts = contracts;
      this.checkSelected();
      this.filterInitialzed = true
    } catch (error) {
      console.error('Error retrieving filters:', error);
    }
  }
  checkSelected(){
    let paramMap = this.router.parseUrl(this.router.url).queryParams;
    Object.keys(paramMap).forEach(key => {
      if(key == 'states'){
        this.states.data = this.states.data.map((state:any) => {return {...state,checked:paramMap[key].includes(state.place)}})
      }
      if(key == 'categories')
      {
        this.categories.data = this.categories.data.map((cat:any) => {return {...cat,checked:paramMap[key].includes(cat.name)}})
      } 
      if(key == 'contracts')
      {
        this.contracts.data = this.contracts.data.map((contract:any) => {return {...contract,checked:paramMap[key].includes(contract.name)}})
      }    
    })
  }


  onShowAllCategories() {
    this.hideAllCategories = true;
  }

  onShowAllMark() {
    this.hideAllState = true;
  }

  closeFilterModal() {
  }


  onChangeFilter(block:any,filter:string,attr:string) {
    console.log('66')
    const checkedTypes = block.data.filter((item:any) => item.checked === true).map((item:any) => item[attr]);
    console.log(checkedTypes)
    let urlTree = this.router.parseUrl(this.router.url);
    if (checkedTypes.length > 0) {
      urlTree.queryParams[filter] =  checkedTypes.join()
    } else {
      delete urlTree.queryParams[filter];
    }
    this.router.navigateByUrl(urlTree); 
  }


}
