import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LazyLoadScriptService {

  constructor() { }

  public loadScript(url: string) {
    return new Observable((observer) => {
      console.log('preparing to load...')
      let node = document.createElement('script');
      node.src = url;
      node.type = 'text/javascript';
      node.async = true;
      document.getElementsByTagName('head')[0].appendChild(node);
      observer.next(true);
      observer.complete();
    });

}
}
