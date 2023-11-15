import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';



@Injectable({
  providedIn: 'root'
})
export class GifsService {


  public gifList : Gif[] = []

  private _tagsHistory: string[] = [];
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs'

  private apiKey : string = '6ilngMJZF2G712uEZpGVongknkvpsQWI'


  constructor( private http : HttpClient){

    this.loadLocalStorage();


  }



  get tagsHistory(){

    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string){
    tag = tag.toLowerCase()
    const indexFound = this._tagsHistory.findIndex(i => i === tag)
    // console.log(indexFound);

    if (indexFound >= 0){

      this._tagsHistory.splice(indexFound, 1)

    }


    this._tagsHistory.unshift(tag);

    this._tagsHistory = this._tagsHistory.splice(0,10)

    this.saveLocalStorage()

  }

  private saveLocalStorage() : void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory))
  }

  private loadLocalStorage() : void {
    if (!localStorage.getItem('history' )) return ;

    this._tagsHistory = JSON.parse(localStorage.getItem('history' )!)
    if (this._tagsHistory.length === 0) return;
    this.searchTag( this._tagsHistory[0]);
  }



  public searchTag( tag : string) : void {



    if (tag.length === 0) return ;

    this.organizeHistory(tag)

const params = new HttpParams()
                  .set('api_key', this.apiKey)
                  .set('limit', '10')
                  .set('q', tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search?`, {params}).subscribe( resp => {
      this.gifList = resp.data
      // console.log(this.gifList);
    })

    // console.log(this.tagsHistory);
  }

}
