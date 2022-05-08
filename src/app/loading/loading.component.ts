import { Component, Input, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  // @Input()
  isLoading: boolean = false;

  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loadingService.loadingEvent.subscribe(
      event => {
        this.isLoading = event;
      })
  }

}
