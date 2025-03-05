// File này là file mở rộng từ app.config được dùng để cấu hình server-side rendering (SSR) trong Angular
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering()],
}; // ĐỊnh nghĩa cấu hình

export const config = mergeApplicationConfig(appConfig, serverConfig);
