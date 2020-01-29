export enum ResponseTypeEnum {
    TRANSACTION_PLATFORM_DEED = 'TRANSACTION_PLATFORM_DEED',
    TRANSACTION_PLATFORM_DEED_SIMPLE = 'TRANSACTION_PLATFORM_DEED_SIMPLE',
    TRANSACTION_PLATFORM_SIMPLE_DEED = 'TRANSACTION_PLATFORM_SIMPLE_DEED',
    DEED_HASHED = 'DEED_HASHED', // Reading DeedHashed contract (Cross-platform)
    DEED_REGISTRATION_DEED = 'DEED_REGISTRATION_DEED', // LEGACY response for Deed Registration Tool. Reads DeedWrapper contract.
    // LEGACY response for Title Registry. Reads RegistryDocument, PropertyLocation, Party
    PRIVATE_REGISTRY_DOCUMENT = 'PRIVATE_REGISTRY_DOCUMENT',
    DOCUMENT_REGISTRY_HASH = 'DOCUMENT_REGISTRY_HASH' //  Reading an entry directly from DocumentRegistry contract using txHash.
}
