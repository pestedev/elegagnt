class Token {
  constructor() {
    this._accessToken = null;
  }

  async get() {
    if (this._accessToken) {
      return Promise.resolve(this._accessToken);
    }

    const accessToken = localStorage.getItem('ACCESS_TOKEN') || false;
    return accessToken;
  }

  set({token}) {
    this._accessToken = token;
    return localStorage.setItem('ACCESS_TOKEN', token);
  }

  clear() {
    this._accessToken = null;
    return localStorage.removeItem('ACCESS_TOKEN');
  }
}

export default new Token();
