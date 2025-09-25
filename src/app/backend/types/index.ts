// Backend type definitions
export interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
}

export interface ServerConfig {
  port: number;
  nodeEnv: string;
  corsOrigin: string;
}

export interface RequestContext {
  userId?: string;
  sessionId?: string;
  ip: string;
  userAgent: string;
}
