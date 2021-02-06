export {};

declare global {
  namespace Express {
    interface Request {
      session: {
        id: string,
        userid: string,
      },
      lang: string,
    }

    interface Response {

    }
  }
  const _lang: string;
  interface Window {
    _lang: string,
  }

  namespace NodeJS {
    interface Global {
      _lang: string,
    }
  }
}
