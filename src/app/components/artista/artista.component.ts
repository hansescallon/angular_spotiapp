import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {
  artista:any = {};
  topTracks:any[] = [];
  mostrarLoading:boolean = true;
constructor(private router:ActivatedRoute, private spotyService:SpotifyService){
  this.router.params.subscribe(params =>{
    console.log('en artista comoponente'+params['id']);
    spotyService.obtieneArtista(params['id']).subscribe((data:any)=>{
      this.artista = data;
      console.log('en el artista'+data);
      console.log(data);
      this.mostrarLoading = false;
    });

    this.getTopTracks(params['id']);

  }


  )


}

getTopTracks(id:string){
  this.spotyService.getTopTracks(id).subscribe((topTracks:any) =>{
    console.log(topTracks.tracks);
    this.topTracks = topTracks.tracks;
  })
}

}
