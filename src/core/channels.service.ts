import { Injectable} from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


export interface IFilter {
  sort: string,
  genre: string,
  count: number,
}

const DEFAULT_FILTER: IFilter = {
  sort: null,
  genre: null,
  count: 24,
}

@Injectable({ providedIn: 'root' })
export class ChannelsService {
  allData: BehaviorSubject<any> =  new BehaviorSubject<any>(null)
  filterData: BehaviorSubject<any> =  new BehaviorSubject<any>(null)
  filter: BehaviorSubject<any> =  new BehaviorSubject<any>(DEFAULT_FILTER)

  constructor(private httpClient: HttpClient) {
    this.httpClient.get("assets/data/data.json").subscribe(
      data =>  {
        this.allData.next(data)
        var oldFilter = JSON.parse(localStorage.getItem('filter'));
        if (oldFilter) {
          this.updateFilter(oldFilter)
        }
      });
  }

  updateFilter(filter: IFilter) {
    localStorage.setItem('filter', JSON.stringify(filter))
    this.filter.next(filter);
    this.getData();
  }

  getData(): void {
    var filter = this.filter.getValue();
    var data =  this.allData.getValue();
    
    if (filter.sort == 'asc') {
      this.ascSort(data)
    }

    if (filter.sort == 'dsc') {
      this.dscSort(data)
    }

    if (filter.genre) {
      this.filterByGenre(data, filter.genre);
    }

    this.selectCount(data, filter.count)

    this.filterData.next(data)
  }

  ascSort(data: Array<any>): void {
    data.sort(function(a, b){return a['name'] - b['name']});
  }

  dscSort(data: Array<any>): void {
    data.sort(function(a, b){return b['name'] - a['name']});
  }

  filterByGenre(data: Array<any>, genre: string): void {
    data = data.filter(element => element['genre'] == genre);
  }

  selectCount(data: Array<any>, count: number) {
    data = data.slice(0, count)
  }




  

}
