import { Component, OnInit,ViewChild } from '@angular/core';
import {LoadingController, IonSlides} from '@ionic/angular';

declare var google;

interface Marker {
  lat: number;
  lng: number;
  title: string;
  image: string;
  text: string;
  markerObj?: any;
}

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;

  infoWindowRef= null;

  mapRef = null;

  markers: Marker[] = [
    {
      lat: 9.9785926,
      lng: -84.8397306,
      title: 'Puntarenas',
      image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/e1/86/1f.jpg',
      text: 'Animi voluptatem, aliquid impedit ratione placeat necessitatibus quisquam molestiae obcaecati laudantium?'
    },
    {
      lat:  9.976523,
      lng: -84.8344252,
      title: 'Municipalidad de Puntarenas',
      image: 'https://lh5.googleusercontent.com/p/AF1QipMGZeu88O8uZvFOX9PKug7gz-VRhhiXQ78hAFZU=w408-h306-k-no',
      text: 'Animi voluptatem, aliquid impedit ratione placeat necessitatibus quisquam molestiae obcaecati laudantium?'
    },
    {
      lat: 10.0168198,
      lng: -84.7069933,
      title: 'San Miguel',
      image: 'data:image/jpeg;base64,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',
      text: 'Animi voluptatem, aliquid impedit ratione placeat necessitatibus quisquam molestiae obcaecati laudantium?'
    },
    {
      lat: 9.9766458,
      lng: -84.8288903,
      title: 'Parque Marino',
      image: 'https://lh5.googleusercontent.com/p/AF1QipOJOq3vm1Gfpa3d4dPR_ca2C240J_PBv701zRAE=w408-h544-k-no',
      text: 'Animi voluptatem, aliquid impedit ratione placeat necessitatibus quisquam molestiae obcaecati laudantium?'
    }
  ];

  constructor(
    private loadingCtrl: LoadingController) {
      this.infoWindowRef = new google.maps.InfoWindow(); }


  ngOnInit(){

    this.loadMap();
  }
  async loadMap() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    const mapEle: HTMLElement = document.getElementById("map");
    const marker = this.markers[0]
    this.mapRef= new google.maps.Map(mapEle,{
      center:{lat: marker.lat, lng: marker.lng},
      zoom:17
    });
    google.maps.event
    .addListenerOnce(this.mapRef,"idle",() => {
      loading.dismiss();
      this.loadMarkers();
    });
   
  }
  private addMaker(itemMarker: Marker) {
    const marker = new google.maps.Marker({
      position: { lat: itemMarker.lat, lng: itemMarker.lng },
      map: this.mapRef,
      title: itemMarker.title
    });
    return marker;
  }
  private loadMarkers(){
    this.markers.forEach(marker => {
      const markerObj = this.addMaker(marker);
      marker.markerObj = markerObj;
    });
  }

  async onSlideDidChange() {
    const currentSlide = await this.slides.getActiveIndex();
    const marker = this.markers[currentSlide];
    this.mapRef.panTo({lat: marker.lat, lng: marker.lng});

    const markerObj = marker.markerObj;

    this.infoWindowRef.setContent(marker.title);
    this.infoWindowRef.open(this.mapRef, markerObj);
  }


}