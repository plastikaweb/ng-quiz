import { InjectionToken } from '@angular/core';

export interface Environment {
  apiUrl: string;
}

export const ENVIRONMENT: InjectionToken<Environment> = new InjectionToken('ENVIRONMENT');
