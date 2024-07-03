
    export type RemoteKeys = 'federation_provider/Calculator';
    type PackageType<T> = T extends 'federation_provider/Calculator' ? typeof import('federation_provider/Calculator') :any;