
import { ByProjectKeyReviewsKeyByKeyRequestBuilder } from './ByProjectKeyReviewsKeyByKeyRequestBuilder'
import { ByProjectKeyReviewsByIDRequestBuilder } from './ByProjectKeyReviewsByIDRequestBuilder'
import { ReviewDraft } from './../../models/Review'
import { ReviewPagedQueryResponse } from './../../models/Review'
import { Review } from './../../models/Review'
import { Middleware } from './../../base/common-types'
import { ApiRequest } from './../../base/requests-utils'

export class ByProjectKeyReviewsRequestBuilder {

    
      constructor(
        protected readonly args: {
          pathArgs: {
                projectKey: string
           },
          middlewares: Middleware[];
        }
      ) {}
    
    withKey(
       childPathArgs: {
           key: string
       }
    ): ByProjectKeyReviewsKeyByKeyRequestBuilder {
       return new ByProjectKeyReviewsKeyByKeyRequestBuilder(
             {
                pathArgs: {
                   ...this.args.pathArgs,
                   ...childPathArgs
                },
                middlewares: this.args.middlewares
             }
       )
    }
    
    withId(
       childPathArgs: {
           ID: string
       }
    ): ByProjectKeyReviewsByIDRequestBuilder {
       return new ByProjectKeyReviewsByIDRequestBuilder(
             {
                pathArgs: {
                   ...this.args.pathArgs,
                   ...childPathArgs
                },
                middlewares: this.args.middlewares
             }
       )
    }
    
    
    get(
        methodArgs?:{
           
           queryArgs?: {
              expand?: string
              where?: string
              sort?: string
              limit?: number
              offset?: number
              withTotal?: boolean
           },
           headers?: {
              [key:string]:string
           },
        }): ApiRequest<ReviewPagedQueryResponse> {
       return new ApiRequest<ReviewPagedQueryResponse>(
           {
              baseURL: 'https://api.sphere.io',
              method: 'GET',
              uriTemplate: '/{projectKey}/reviews',
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
            body: ReviewDraft,
            headers?: {
               [key:string]:string
            },
         }): ApiRequest<Review> {
       return new ApiRequest<Review>(
           {
              baseURL: 'https://api.sphere.io',
              method: 'POST',
              uriTemplate: '/{projectKey}/reviews',
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
    

}