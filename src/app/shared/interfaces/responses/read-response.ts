import {ResponseTypeEnum} from '../../enums/response-type.enum';

// export type ResponseType = ResponseTypeEnum.DEED_HASHED
//     | ResponseTypeEnum.DEED_REGISTRATION_DEED
//     | ResponseTypeEnum.DOCUMENT_REGISTRY_HASH
//     | ResponseTypeEnum.PRIVATE_REGISTRY_DOCUMENT
//     | ResponseTypeEnum.TRANSACTION_PLATFORM_DEED
//     | ResponseTypeEnum.TRANSACTION_PLATFORM_DEED_SIMPLE
//     | ResponseTypeEnum.TRANSACTION_PLATFORM_SIMPLE_DEED;

export interface ReadResponse {
    deedType: ResponseTypeEnum;
    error: string;
}

export interface DeedResponse extends ReadResponse {
    deedType: ResponseTypeEnum.DEED_REGISTRATION_DEED;
    propertyAddress: string;
    propertyName: string;
    propertyPhysicalAddress: string;
    buyersNames: [{firstname: string; lastname: string}];
    buyersAddresses: [string];
    documentHash: string;
}

export interface DocumentRegistryHashResponse extends ReadResponse {
    deedType: ResponseTypeEnum.DOCUMENT_REGISTRY_HASH;
    hash: string;
    metaHash: string;
}

export interface RegistryDocumentResponse extends ReadResponse {
    deedType: ResponseTypeEnum.PRIVATE_REGISTRY_DOCUMENT;
    issuer: string;
    hash: string;
    registrationNumber: string;
    userId: number;
    deedDate: number;
    submissionDate: number;
    registrationDate: number;
    uploadDate: number;
}

export interface TransactionPlatformDeedResponse extends ReadResponse {
    deedType: ResponseTypeEnum.TRANSACTION_PLATFORM_DEED;
    propertyAddress: string;
    propertyName: string;
    propertyPhysicalAddress: string;
    buyersNames: [{firstname: string; lastname: string}];
    buyersAddresses: [string];
}

export interface DeedSimpleResponse extends ReadResponse {
    deedType: ResponseTypeEnum.TRANSACTION_PLATFORM_DEED_SIMPLE;
    propertyAddress: string;
    propertyName: string;
    propertyPhysicalAddress: string;
    buyersNames: [{firstname: string; lastname: string}];
    buyersAddresses: [string];
    isLoadedDocument?: boolean;
}

export interface SimpleDeedResponse extends ReadResponse {
    propertyAddress: string;
    propertyName: string;
    propertyPhysicalAddress: string;
    buyersNames: [{firstname: string; lastname: string}];
    buyersAddresses: [string];
    sellersNames: [{firstname: string; lastname: string}];
    sellersAddresses: [string];
}

export interface DeedHashedResponse extends ReadResponse {
    deedType: ResponseTypeEnum.DEED_HASHED;
    hash: string;
}
