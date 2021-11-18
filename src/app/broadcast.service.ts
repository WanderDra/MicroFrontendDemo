import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {

  broadcast$ = new Subject<string>();

  constructor() { 
  }
}
