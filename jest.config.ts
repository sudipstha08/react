/** @type {import('ts-jest').JestConfigWithTsJest} */
import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  preset: 'ts-jest',
  // / transform: {
    //   "^.+\\.(tsx|ts)?$": "ts-jest",
    // },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};

export default config;