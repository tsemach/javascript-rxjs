/**  
 * from: https://codeburst.io/rxjs-by-example-part-2-8c6eda15bd7f
 * 
 * <description>
 * The return value from the subscribe function is called a Subscription. 
 * The key feature of a Subscription is that it has a method, unsubscribe.
 * Calling unsubscribe simply calls the function that is returned from 
 * the function supplied to create; in the following case clearing the interval. 
 * </description>
 * 
 * <output>
 * hi
 * hi
 * hi
 * hi
 * </output>
 */

// eslint no-console: "off" 
import { Observable } from 'rxjs/Observable';
const myObservable = Observable.create((observer) => {
  const intervalID = setInterval(() => {
    observer.next('hi');
  }, 1000);
  return () => {
    clearInterval(intervalID);
  };
});
const mySubscription = myObservable.subscribe(o => console.log(o));
setTimeout(() => mySubscription.unsubscribe(), 5000);
