import { Injectable } from '@angular/core';
import{Feedback} from '../menu/shared/feedback';
import { Observable, of } from 'rxjs';
import {delay,catchError, map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {baseURL} from '../menu/shared/baseUrl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }











    submitFeedback(feedback:Feedback):Observable<Feedback>{
      const httpOptions={
        headers:new HttpHeaders({
          'Content-Type':'application/json',
      
        })
      }
      
        return this.http.post<Feedback>(baseURL+'feedback/',feedback,httpOptions).pipe(catchError(this.processHTTPMsgService.handleError));
      }
}