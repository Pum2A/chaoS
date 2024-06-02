import { Injectable } from "@angular/core";
import { BehaviorSubject, debounceTime } from "rxjs";

@Injectable({
    providedIn: "root",
  })
  export class LoadingService {
    private loadingSubject = new BehaviorSubject<boolean>(false);

  
      loading$ = this.loadingSubject.asObservable().pipe(debounceTime(100)); 
      private isLoading = false;

    
  loadingOn() {
    this.isLoading = true;
    this.loadingSubject.next(true);
  }
  
    loadingOff() {
        if (this.isLoading) {
          setTimeout(() => {
            this.loadingSubject.next(false);
            this.isLoading = false;
          }, 3000);
        }
      }
  }