import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  @Output()
  loadingEvent: EventEmitter<boolean> = new EventEmitter();

  constructor() { 

  }

  open() {
    this.loadingEvent.emit(true);
  }

  close() {
    this.loadingEvent.emit(false);
  }
}
