import {
  Injectable,
  OnModuleInit,
  OnApplicationShutdown,
} from '@nestjs/common';

@Injectable()
export class DatabaseService {
  private isConnected = false;

  onModuleInit() {
    this.isConnected = true;
    console.log('Database Service initialized and connected to the database.');
  }

  onApplicationShutdown(signal: string) {
    this.isConnected = false;
    console.log(
      `Database Service is shutting down and disconnected from the database. Signal ${signal}`,
    );
  }

  getStatus() {
    return this.isConnected ? 'Connected' : 'Disconnected';
  }
}
