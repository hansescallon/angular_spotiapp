import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitizer:DomSanitizer) {

  }

  transform(value: string, ...args: unknown[]): SafeResourceUrl {

    let url:string = "https://open.spotify.com/embed?uri="+value;

    console.log("la url den domseguro es: "+url);
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
