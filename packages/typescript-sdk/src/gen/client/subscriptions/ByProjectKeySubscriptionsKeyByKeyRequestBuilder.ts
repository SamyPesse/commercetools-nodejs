
import { SubscriptionUpdate } from './../../models/Subscription'
import { Subscription } from './../../models/Subscription'
import { Middleware } from './../../base/common-types'
import { ApiRequest } from './../../base/requests-utils'

export class ByProjectKeySubscriptionsKeyByKeyRequestBuilder {

    
      constructor(
        protected readonly args: {
          pathArgs: {
                projectKey: string,
                key: string
           },
          middlewares: Middleware[];
        }
      ) {}
    
    get(
        methodArgs?:{
           
           queryArgs?: {
              expand?: string
           },
           headers?: {
              [key:string]:string
           },
        }): ApiRequest<Subscription> {
       return new ApiRequest<Subscription>(
           {
              baseURL: 'https://api.sphere.io',
              method: 'GET',
              uriTemplate: '/{projectKey}/subscriptions/key={key}',
              pathVariables: this.args.pathArgs,
              headers: {
                  ...(methodArgs || {} as any).headers
              },
              queryParams: (methodArgs || {} as any).queryArgs,
           },
           this.args.middlewares
       )
    }
    
    post(
         methodArgs:{
            
            queryArgs?: {
               expand?: string
            },
            body: SubscriptionUpdate,
            headers?: {
               [key:string]:string
            },
         }): ApiRequest<Subscription> {
       return new ApiRequest<Subscription>(
           {
              baseURL: 'https://api.sphere.io',
              method: 'POST',
              uriTemplate: '/{projectKey}/subscriptions/key={key}',
              pathVariables: this.args.pathArgs,
              headers: {
                  'Content-Type': 'application/json',
                  ...(methodArgs || {} as any).headers
              },
              queryParams: (methodArgs || {} as any).queryArgs,
              body: (methodArgs || {} as any).body,
           },
           this.args.middlewares
       )
    }
    
    delete(
           methodArgs:{
              
              queryArgs: {
                 version: number
                 expand?: string
              },
              headers?: {
                 [key:string]:string
              },
           }): ApiRequest<Subscription> {
       return new ApiRequest<Subscription>(
           {
              baseURL: 'https://api.sphere.io',
              method: 'DELETE',
              uriTemplate: '/{projectKey}/subscriptions/key={key}',
              pathVariables: this.args.pathArgs,
              headers: {
                  ...(methodArgs || {} as any).headers
              },
              queryParams: (methodArgs || {} as any).queryArgs,
           },
           this.args.middlewares
       )
    }
    

}