/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { models_DashboardWidget } from './models_DashboardWidget';

export type models_Dashboard = {
    createdAt?: string;
    description?: string;
    displayName?: string;
    id?: number;
    updatedAt?: string;
    widgets?: Array<models_DashboardWidget>;
};
