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

export const url = 'https://cdn.jsdelivr.net/npm/vamtiger-organization-welcome-json-ld@latest/build/vamtiger-organization-welcome-json-ld.js';