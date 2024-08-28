import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cancionesNuevas: any[] = [];
  mostrarLoading:boolean = true;
  constructor(private spotify:SpotifyService){
    this.spotify.getNewReleases().subscribe(
      (data:any) =>{
        console.log(data);
        this.cancionesNuevas = data.albums.items;
        this.mostrarLoading = false;
      }
    );

  }

}
