import { Observable, filter, map } from "rxjs";

const observable = new Observable<number>((subscriber) => {
  let count = 0;
  const intervalId = setInterval(() => {
    subscriber.next(count++);
  }, 1000);

  return () => {
    clearInterval(intervalId);
    console.log("Unsubscribed");
  };
}).pipe(
  map((value) => Math.pow(value, 2)),
  filter((value) => value % 2 !== 0)
);

const subscription1 = observable.subscribe((value) =>
  console.log(`Subscriptor1: ${value}`)
);
const subscription2 = observable.subscribe((value) =>
  console.log(`Subscriptor2: ${value}`)
);
const subscription3 = observable.subscribe((value) =>
  console.log(`Subscriptor3: ${value}\n`)
);

setTimeout(() => {
  subscription1.unsubscribe();
  subscription2.unsubscribe();
  subscription3.unsubscribe();
}, 5000);
