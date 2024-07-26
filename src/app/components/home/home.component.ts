import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  paises: any[] = [];
  constructor(private http: HttpClient){
    http.get('https://restcountries.com/v3.1/lang/spanish').subscribe(
      (respuesta:any) => {
        this.paises = respuesta;
        console.log(this.paises);

      }

    );
  }

}
