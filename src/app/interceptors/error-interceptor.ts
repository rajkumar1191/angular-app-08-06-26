import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, retry, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: any)=>{
      console.log('Http Error:', error)

      if(error.status == 401){
        console.log('Unauthorized')
      }
      
      if(error.status == 404){
        console.log('not found')
      }
      
      return throwError(() => error);
    })
  )
};
