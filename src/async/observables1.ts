import { Observable } from "rxjs";

const observable = new Observable<number>((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
  subscriber.next(4); // This will no be printed as it is completed

  //cleanup function
  return () => {
    console.log("completed or Unsubscribed"); //this will be printe when the observable is completed or unsubscribed
  };
});

observable.subscribe((value) => console.log(value));
