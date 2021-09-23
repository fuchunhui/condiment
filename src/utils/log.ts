export interface ErrorBase {
  message: string;
}

export interface BankError extends ErrorBase {
  id: string;
}

export default {
  error(message: string): void { // TODO string
    console.error(message);
  }
};
