/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { models_DashboardWidgetLocation } from './models_DashboardWidgetLocation';
import type { models_Widget } from './models_Widget';

export type models_DashboardWidget = {
    createdAt?: string;
    dashboardId?: number;
    description?: string;
    displayName?: string;
    id?: number;
    location?: models_DashboardWidgetLocation;
    locationId?: number;
    updatedAt?: string;
    widget?: models_Widget;
    widgetId?: number;
};
