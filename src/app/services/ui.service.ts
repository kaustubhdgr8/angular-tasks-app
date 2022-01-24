import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddForm: boolean = false;
  private subject: Subject<any> = new Subject<any>();

  constructor() {}

  showHideAddForm(): void {
    this.showAddForm = !this.showAddForm;
    this.subject.next(this.showAddForm);
  }

  onShowToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
