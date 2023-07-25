import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ContratService } from 'src/app/services/contrat.service';
import { OffreService } from 'src/app/services/offre.service';
import { PlaceService } from 'src/app/services/place.service';
import { Options } from '@angular-slider/ngx-slider';



@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
   
  priceselection=""
  minValue: number = 500;
  maxValue: number = 5000;
  options: Options = {
    floor: 500,
    ceil: 5000,
} 

  contracts:any = []
  categories:any = []
  states:any
  term:any
  offres!: any[];
  offresAll!:any[];
  totalResults:number = 0

  
  collapsedSalary: boolean = false;
  collapsedCategories: boolean = true;
  collapsedState: boolean = true;
  collapsedContract: boolean = true;
  hideAllCategories: boolean = true;
  hideAllState: boolean = true;
  filterInitialzed : boolean  = false
  constructor(
    private offre:OffreService,
    private contract:ContratService,
    private category:CategoryService,
    private place:PlaceService,
    private router:Router,
    private http: HttpClient) {
      this.router.events.subscribe((e: any) => {
        if (e instanceof NavigationEnd && this.filterInitialzed) {
            this.checkSelected()
        }
      });
     }

  ngOnInit(): void {
    this.getFilters()
  }
  changePrice() {
    console.log('price change', this.priceselection);
    const event = this.priceselection; // event ta5th vide
    console.log(event, "22");
  
    if (event !== undefined) {
      this.offre.getOffers().subscribe((res: any) => {
        console.log(res,"offres")
        this.offresAll = res["data"];
        const listproductByprice = this.offresAll.filter((element: any) => {
         
          console.log(event[0],"hhj")
          return element.salaire >= event[0] && element.salaire <= event[1];
          
        });
        this.offresAll = listproductByprice;
        console.log('filter by price', this.offresAll);
      });
    } else {
      // Handle the case when this.priceselection is undefined
      // For example, you could reset the list of offers or handle it in another way.
      console.log('this.priceselection is undefined');
    }
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
