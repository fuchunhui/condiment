export interface ErrorBase {
  message: string;
}

export default {
  error(message: string): string {
    return message;
  }
};
