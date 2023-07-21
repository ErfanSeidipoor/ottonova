import { EnvEnum } from './enum/env.enum';

export const checkEnv = () => {
  for (const envKey of Object.values(EnvEnum)) {
    if (typeof process.env[envKey] !== 'string') {
      throw new Error(`${envKey} must be Defined`);
    }
  }
};
