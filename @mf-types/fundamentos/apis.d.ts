
    export type RemoteKeys = 'fundamentos/Calculator' | 'fundamentos/megaApp';
    type PackageType<T> = T extends 'fundamentos/megaApp' ? typeof import('fundamentos/megaApp') :T extends 'fundamentos/Calculator' ? typeof import('fundamentos/Calculator') :any;