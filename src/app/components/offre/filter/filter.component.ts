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
  minValue: number = 100;
  maxValue: number = 10000;
  options: Options = {
    floor: 0,
    ceil: 10000,
} 

  contracts:any = []
  categories:any = []
  states:any
  term:any
  offres!: any[];
  offresAll!:any[];
  totalResults:number = 0
  minSalaireRange!: number;
  maxSalaireRange!: number;
  
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
  changePrice(){
    console.log('price change',this.priceselection)
    let event=this.priceselection//event ta5th vide
    this.offre.getall().subscribe((res:any)=>{
      this.offresAll=res["data"]
      if(event !== undefined){// etha event mch far8a
        const listproductByprice=this.offresAll.filter((element:any)=> element.salaire >= event[0] && element.salaire <= event[1])
        this.offresAll=listproductByprice
        console.log('filter by price',this.offresAll)
        //owel haja order chatgbt
      
        //tzid subcategorie id f produit ykoun andou categorieid ref to  categorie
        // tzid champs lil produit coleurs
      }
    })
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
  filterBySalaireRange() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { minSalaire: this.minSalaireRange, maxSalaire: this.maxSalaireRange };

    this.http.post<any[]>('http://localhost:3000/offre/filter', body, { headers })
      .subscribe((data) => {
        this.offres = data;
      });
  }
 


}
