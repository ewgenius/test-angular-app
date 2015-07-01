class AuthService {
  constructor(localStorageService) {
    'ngInject';

    this.currentUser = null;
    this.authorized = false;
    this.localStorageService = localStorageService;
  }

  /**
   * perform login. checks user email
   * and password in local storage
   * @param  {string} email
   * @param  {string} password
   * @return true if user exists and password is right, or error description
   */
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

  /**
   * simple logout
   */
  logout() {
    this.currentUser = null;
    this.authorized = false;
  }

  /**
   * sign up user with specified email and password
   * in local storage
   * @param  {string} email
   * @param  {string} password
   */
  signup(email, password) {
    this.localStorageService.set(email, jhash.hash(password));
  }

  /**
   * checks if current user is authorized
   * @return {Boolean}
   */
  isAuthorized() {
    return this.authorized;
  }

}

export default AuthService;
