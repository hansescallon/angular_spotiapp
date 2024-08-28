import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {

  }
  getQuery(termino:string){
    const headers = new HttpHeaders({'Authorization':'Bearer BQAc5B3YNr5xLRhabtYNOqz7MmWjVC2PGQzZ8SLNGJ-kSvcS8ZyN5syY21gqfzekfNMmXVUfCVERVS6HUQ6RNpP0jIEki3zlQekFFOVHEk-2oIzvbPQ'});
    const url:string  = 'https://api.spotify.com/v1/';
    return this.http.get(url+termino,{headers})/*.pipe(
          map((data:any) => {
            return data.albums.items;
          })
    );*/
  }

   getNewReleases(){
    return this.getQuery('browse/new-releases');
   }

   getArtista(termino:string){
     console.log('en el service' + termino);
     return this.getQuery('search?q='+termino+'&type=album');
   }

   obtieneArtista(id:string){
    return this.getQuery('artists/'+id);
   }

  getTopTracks(id:string){
    return this.getQuery('artists/'+id+'/top-tracks');
  }


}
