import * as estree from '@kadira/storybook';

declare module '@kadira/storybook' {
    export function linkTo(story: string): any;
    export function action(a: string, opts?: any): any;
}