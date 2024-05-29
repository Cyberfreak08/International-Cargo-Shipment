import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollToSectionSubject = new Subject<string>();
  scrollToSection$ = this.scrollToSectionSubject.asObservable();

  scrollToSection(section: string) {
    this.scrollToSectionSubject.next(section);
  }
}
