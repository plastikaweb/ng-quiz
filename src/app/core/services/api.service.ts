import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable()
export abstract class ApiService<T, P = unknown | null> {
  private readonly httpClient = inject(HttpClient);
  protected abstract endPoint: string;

  protected mapListResponse(data: unknown): T {
    return data as T;
  }

  getList(params?: P): Observable<T> {
    return this.httpClient
      .get(`${this.endPoint}`, {
        ...(params && { params: this.getHttpParams(params) }),
      })
      .pipe(map(this.mapListResponse), catchError(this.handleError));
  }

  private getHttpParams(params?: P): HttpParams {
    let httpClientParams: HttpParams = new HttpParams();

    Object.entries(params || {}).forEach(([key, value]) => {
      httpClientParams = httpClientParams.set(key, `${value}`);
    });

    return httpClientParams;
  }

  private handleError({ error }: HttpErrorResponse): Observable<never> {
    return throwError(() => error);
  }
}
