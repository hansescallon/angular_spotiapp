import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  artistaBuscado : any[] = [];
  mostrarLoading:boolean = false;
  constructor(private spotify:SpotifyService){

  }

  buscar(termino:string){
    console.log(termino);
    this.mostrarLoading = true;
    this.spotify.getArtista(termino).subscribe(
      (artista:any) => {
        console.log(artista);
        console.log(artista);
        this.artistaBuscado = artista.albums.items;
        this.mostrarLoading = false;
      }
    );
  }


}

