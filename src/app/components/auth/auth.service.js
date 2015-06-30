class AuthService {
  constructor(localStorageService) {
    'ngInject';

    this.currentUser = null;
    this.authorized = false;
    this.localStorageService = localStorageService;
  }

  init() {

  }

  login(email, password) {
    var pass = this.localStorageService.get(email);
    if (pass === null) {
      return {
        code: 1,
        error: "user not found"
      };
    } else if (pass == jhash.hash(password)) {
      this.currentUser = {
        email: email
      };
      this.authorized = true;
      return true;
    } else {
      return {
        code: 2,
        error: "invalid password"
      };
    }
  }

  logout() {
    this.currentUser = null;
    this.authorized = false;
  }

  signup(email, password) {
    this.localStorageService.set(email, jhash.hash(password));
  }

  isAuthorized() {
    return this.authorized;
  }

}

export default AuthService;
