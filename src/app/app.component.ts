import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge } from 'rxjs';
import { ChannelsService, IFilter } from 'src/core/channels.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'mts-test-app';

  sortControl: FormControl = new FormControl('');
  filterControl: FormControl = new FormControl('');
  countControl: FormControl = new FormControl('');

  constructor(private channelsService: ChannelsService) {

  }

  sortOptions = [
    {
      name: 'Сортировка',
      value: null
    },
    {
      name: 'По возрастанию',
      value: 'asc'
    },
    {
      name: 'По убыванию',
      value: 'dsc'
    },
  ]

  genres = [
    {
      name: 'Все',
      value: null,
    },
    {
      name: 'Жанр 1',
      value: 'Жанр 1'
    },
    {
      name: 'Жанр 2',
      value: 'Жанр 2'
    },
  ]

  ngOnInit() {
    this.channelsService.filter.pipe(
      take(1)
    )
      .subscribe(data => {
        this.filterControl.setValue(data['genre']);
        this.countControl.setValue(data['count']);
        this.sortControl.setValue(data['sortControl']);
      })

    merge(
      this.filterControl.valueChanges,
      this.countControl.valueChanges,
      this.sortControl.valueChanges,
    ).subscribe((data) => {
      console.log(data)

      var filter: IFilter = {
        sort: this.sortControl.value,
        genre: this.filterControl.value,
        count: this.countControl.value,
      }

      this.channelsService.updateFilter(filter)
    }
    )
  }



  ngOnDestroy() {

  }
}