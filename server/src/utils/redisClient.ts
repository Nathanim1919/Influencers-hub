import { createClient, RedisClientType } from 'redis';

class RedisClient {
  private client: RedisClientType;

  constructor() {
    this.client = createClient({
      url: process.env.REDIS_URL || 'redis://localhost:6379'
    });

    this.client.on('error', (error) => {
      console.error(`Redis client not connected to the server: ${error}`);
    });

    this.client.on('connect', () => {
      console.log('Redis client connected to the server');
    });

    this.client.on('reconnecting', () => {
      console.log('Redis client reconnecting to the server');
    });

    this.client.connect().catch((error) => {
      console.error(`Redis client connection error: ${error}`);
    });
  }

  isAlive(): boolean {
    return this.client.isOpen;
  }

  async get(key: string): Promise<string | null> {
    return await this.client.get(key);
  }

  async set(key: string, value: string): Promise<void> {
    console.log(`Setting key: ${key}, value: ${value}`);
    await this.client.set(key, value);
  }

  async del(key: string): Promise<void> {
    await this.client.del(key);
  }

  async hGetAll(key: string): Promise<Record<string, string>> {
    return await this.client.hGetAll(key);
  }

  async hSet(key: string, field: string, value: string): Promise<void> {
    await this.client.hSet(key, field, value);
  }

  async hDel(key: string, field: string): Promise<void> {
    await this.client.hDel(key, field);
  }

  async setEx(key: string, seconds: number, value: string): Promise<void> {
    await this.client.setEx(key, seconds, value);
  }
}

const redisClient = new RedisClient();
export default redisClient;
