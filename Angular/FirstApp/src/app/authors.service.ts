import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }

  getAuthors() {
    return ["Kazi Nazrul Islam", "Dan Brown", "William S"];
  }

}
