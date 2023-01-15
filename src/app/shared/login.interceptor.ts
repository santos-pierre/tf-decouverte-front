import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable()
export class LoginInterceptor implements HttpInterceptor{

    constructor(private loginServe : LoginService){}

    intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>>{
        if(this.loginServe.isConnect){
            req = req.clone({
                headers : req.headers.set("Content-type", "application/json")
            })
            

            req = req.clone({
                headers : req.headers.set("bearer", `${localStorage.getItem("bearer")}`)
            })
        }
        
        return next.handle(req)
    }
}