class Response {
    constructor(statusCode, httpStatus, message, data) {
      this.timestamp = new Date().toLocaleString(); // Use Date instead of DataTransfer
      this.statusCode = statusCode;
      this.httpStatus = httpStatus;
      this.message = message;
      this.data = data;
    }
  }
export default Response;
  