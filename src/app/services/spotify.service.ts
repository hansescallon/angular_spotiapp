import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {

  }

   getNewReleases(){
    const headers = new HttpHeaders({'Authorization':'Bearer BQDNZRD5uaoOcT7fubVe0HjOaLJfwIQEQk4rUyffOhxgUb3BBIVRtnF_3EjCEykpAt9lGp2E10HwYuXmRqK8oA8e0uJIk0rWw-DhW_hra4_R3JZUZJI'});

    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers}).pipe(
          map((data:any) => {
            return data.albums.items;
          })

    );

   }

   getArtista(termino:string){
     console.log('en el service' + termino);
     const headers = new HttpHeaders({'Authorization':'Bearer BQDNZRD5uaoOcT7fubVe0HjOaLJfwIQEQk4rUyffOhxgUb3BBIVRtnF_3EjCEykpAt9lGp2E10HwYuXmRqK8oA8e0uJIk0rWw-DhW_hra4_R3JZUZJI'})
      return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=album`,{headers})
      .pipe(map((data:any) => {
        return data['albums'].items;
      }))
   }


}
