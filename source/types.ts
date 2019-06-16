export enum ScriptType {
    jsonLd = 'application/ld+json',
    json = 'application/json'
}

export interface IAnyObject {
    [key: string]: any;
}

export interface ILoadScript {
    type: ScriptType;
    url: string;
    data: IAnyObject;
}

export const url = 'https://vamtiger-project.github.io/vamtiger-organization-welcome-json-ld/build/vamtiger-organization-welcome-json-ld.js';
