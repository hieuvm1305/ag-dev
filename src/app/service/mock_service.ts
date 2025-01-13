import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { UserLogin } from "../store/user/user.state";
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
}