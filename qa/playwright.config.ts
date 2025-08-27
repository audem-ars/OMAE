import { defineConfig } from '@playwright/test';
export default defineConfig({ testDir:'./tests', use:{ headless:true, baseURL:'http://localhost:4173' }, reporter:[['list']], timeout:30000 });
