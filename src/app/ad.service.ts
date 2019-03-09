import { Injectable } from '@angular/core';
import{AngularFireDatabase, AngularFireObject}from 'angularfire2/database'
export class AdListing{
  title = 'Your Title'
  content = 'Ad Content'
  price = 5.00

}
@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor(private db: AngularFireDatabase) { }
  createAd(): AngularFireObject<AdListing>{
    const adDefault = new AdListing()
    const adKey = this.db.list('/ads').push(adDefault).key
    return this.db.object('/ads/'+adKey)
  }
  updateAd(ad: AngularFireObject<AdListing>, data:any){
    return ad.update(data)
  }
}
