import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
// import { AuthenticationService } from '../services/authentication/authentication.service';
import { LocalStorageService } from './local-storage.service';
import { environment } from '../environments/environment.prod';
import { ApplicationSettings } from '@nativescript/core';
// import { RouterExtensions } from '@nativescript/angular';

@Injectable()

export class ExtendedHttpInterceptor implements HttpInterceptor {
    constructor(
        public router: Router, 
        private _localStorageService: LocalStorageService,
        // private _routerExtensions: RouterExtensions,
        // private _authenticationService: AuthenticationService
    ) { 
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const appVersion = environment.appVersion;
        const token = this._getToken();
        const url = this._getUrl(request.url);
        // const tenant_id = this._getTenant();
            
        request = request.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                // 'X-Tenant': tenant_id
            }
        });

        return next.handle(request).pipe(
            tap((ev: HttpEvent<any>) => {
                if (ev instanceof HttpResponse) {
                   
                }
            }),
            catchError(response => {
                if (response instanceof HttpErrorResponse) {
                    if (response.status === 401) {
                        this._clearToken();
                    }
                }
    
                return throwError(response);
            })
        );
    }

    private _clearToken() {
        ApplicationSettings.remove('currentUser');
    }

    private _getToken(): string {
        let token = '';
        let new_token = ApplicationSettings.getString('token');
        let tmp_token = ApplicationSettings.getString('tmp_token');
        
        if (new_token) token = JSON.parse(new_token);
        else if (tmp_token) token = JSON.parse(tmp_token);
        
        return token;
    }

    private _getUrl(origin_url: string): string {
        let url = origin_url;

        let tenant_domain = ApplicationSettings.getString('tenant_domain');
        if (tenant_domain) {
            tenant_domain = JSON.parse(tenant_domain);
            const appUrl = environment.appUrl;

            url = url.replace(appUrl, tenant_domain);
        }
        
        return url;
    }

    private _getTenant(): string {
        let tenant_id = this._localStorageService.get('tenant_id');
        if(!tenant_id) { 
            tenant_id = ' '; 
        }

        return tenant_id;
    }

}
