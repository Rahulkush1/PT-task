class RetryService {
    constructor() {
      this.retryDelay = 1000; // Initial retry delay in milliseconds
    }
  
    async retryOperation(operation, maxRetries) {
      let retries = 0;
      while (retries < maxRetries) {
        try {
          return await operation();
        } catch (error) {
          retries++;
          if (retries >= maxRetries) throw error;
          console.log(`Retrying in ${this.retryDelay}ms...`);
          await this.delay(this.retryDelay);
          this.retryDelay *= 2; // Exponential backoff
        }
      }
    }
  
    delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
  }
  
  module.exports = new RetryService();
  