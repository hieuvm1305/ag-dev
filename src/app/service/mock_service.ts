import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { UserLogin, UserInfo } from "../store/user/user.state";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root',
})

export class MockService {
    constructor(
        private http: HttpClient
    ) {}
    getProduct() {
        let url = `${environment.apiURL}/product`
        return this.http.get(url)
    }
    logIn(data: UserLogin) {
        let url = `${environment.apiURL}/user`
        return this.http.post(url, data)
    }
    getUser() {
        console.log('call api');
        let url = `${environment.apiURL}/user`
        return this.http.get(url)
    }
}