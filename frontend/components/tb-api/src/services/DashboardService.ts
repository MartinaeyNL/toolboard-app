/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { models_Dashboard } from '../models/models_Dashboard';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DashboardService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create a new Dashboard
     * Stores the body dashboard object as a new entry in the database
     * @param dashboard The dashboard to create
     * @returns models_Dashboard Created
     * @throws ApiError
     */
    public postDashboard(
dashboard: models_Dashboard,
): CancelablePromise<models_Dashboard> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/dashboard',
            body: dashboard,
            errors: {
                400: `ok`,
                500: `ok`,
            },
        });
    }

    /**
     * Get all dashboards
     * Returns one json object with all dashboards in the database
     * @returns models_Dashboard OK
     * @throws ApiError
     */
    public getDashboardAll(): CancelablePromise<Array<models_Dashboard>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/dashboard/all',
            errors: {
                500: `ok`,
            },
        });
    }

}
