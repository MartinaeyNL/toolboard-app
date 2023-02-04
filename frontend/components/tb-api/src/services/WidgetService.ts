/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { models_Widget } from '../models/models_Widget';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WidgetService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get all widgets, locally and externally
     * Returns one json object with all available widgets
     * @returns models_Widget OK
     * @throws ApiError
     */
    public getWidgetAll(): CancelablePromise<Array<models_Widget>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/widget/all',
            errors: {
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Get HTML of a Widget
     * Returns html of the Widget with the smae ID
     * @param id Widget ID
     * @param file Optional file name
     * @returns any OK
     * @throws ApiError
     */
    public getWidgetEmbed(
id: string,
file?: string,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/widget/embed/{id}/{file}',
            path: {
                'id': id,
                'file': file,
            },
            errors: {
                404: `Not Found`,
                415: `Unsupported Media Type`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Get widget by ID
     * Returns a json object of the Widget with the smae ID
     * @param id Widget ID
     * @returns models_Widget OK
     * @throws ApiError
     */
    public getWidget(
id: string,
): CancelablePromise<models_Widget> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/widget/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

}
