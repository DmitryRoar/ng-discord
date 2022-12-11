import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'

interface ISignIn {
  email: string
  password: string
}

interface ISignUp {}

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  signIn(data): void {
    // return this.http.post()
  }
}
