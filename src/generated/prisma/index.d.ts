
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model JobOrder
 * 
 */
export type JobOrder = $Result.DefaultSelection<Prisma.$JobOrderPayload>
/**
 * Model Visa
 * 
 */
export type Visa = $Result.DefaultSelection<Prisma.$VisaPayload>
/**
 * Model Applicant
 * 
 */
export type Applicant = $Result.DefaultSelection<Prisma.$ApplicantPayload>
/**
 * Model Passport
 * 
 */
export type Passport = $Result.DefaultSelection<Prisma.$PassportPayload>
/**
 * Model Application
 * 
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>
/**
 * Model Permission
 * 
 */
export type Permission = $Result.DefaultSelection<Prisma.$PermissionPayload>
/**
 * Model ObjectPermission
 * 
 */
export type ObjectPermission = $Result.DefaultSelection<Prisma.$ObjectPermissionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  RECRUITMENT: 'RECRUITMENT',
  PROCESSING: 'PROCESSING',
  MANAGEMENT: 'MANAGEMENT'
};

export type Role = (typeof Role)[keyof typeof Role]


export const JobOrderStatus: {
  NEW: 'NEW',
  IN_PROGRESS: 'IN_PROGRESS',
  CLOSED: 'CLOSED'
};

export type JobOrderStatus = (typeof JobOrderStatus)[keyof typeof JobOrderStatus]


export const VisaStatus: {
  BLANK: 'BLANK',
  ASSIGNED: 'ASSIGNED',
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED',
  REVOKED: 'REVOKED'
};

export type VisaStatus = (typeof VisaStatus)[keyof typeof VisaStatus]


export const PermissionSubjectType: {
  USER: 'USER',
  ROLE: 'ROLE'
};

export type PermissionSubjectType = (typeof PermissionSubjectType)[keyof typeof PermissionSubjectType]


export const PermissionEffect: {
  ALLOW: 'ALLOW',
  DENY: 'DENY'
};

export type PermissionEffect = (typeof PermissionEffect)[keyof typeof PermissionEffect]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type JobOrderStatus = $Enums.JobOrderStatus

export const JobOrderStatus: typeof $Enums.JobOrderStatus

export type VisaStatus = $Enums.VisaStatus

export const VisaStatus: typeof $Enums.VisaStatus

export type PermissionSubjectType = $Enums.PermissionSubjectType

export const PermissionSubjectType: typeof $Enums.PermissionSubjectType

export type PermissionEffect = $Enums.PermissionEffect

export const PermissionEffect: typeof $Enums.PermissionEffect

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobOrder`: Exposes CRUD operations for the **JobOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobOrders
    * const jobOrders = await prisma.jobOrder.findMany()
    * ```
    */
  get jobOrder(): Prisma.JobOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visa`: Exposes CRUD operations for the **Visa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Visas
    * const visas = await prisma.visa.findMany()
    * ```
    */
  get visa(): Prisma.VisaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.applicant`: Exposes CRUD operations for the **Applicant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applicants
    * const applicants = await prisma.applicant.findMany()
    * ```
    */
  get applicant(): Prisma.ApplicantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passport`: Exposes CRUD operations for the **Passport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Passports
    * const passports = await prisma.passport.findMany()
    * ```
    */
  get passport(): Prisma.PassportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.PermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.objectPermission`: Exposes CRUD operations for the **ObjectPermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ObjectPermissions
    * const objectPermissions = await prisma.objectPermission.findMany()
    * ```
    */
  get objectPermission(): Prisma.ObjectPermissionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Client: 'Client',
    JobOrder: 'JobOrder',
    Visa: 'Visa',
    Applicant: 'Applicant',
    Passport: 'Passport',
    Application: 'Application',
    Permission: 'Permission',
    ObjectPermission: 'ObjectPermission'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "client" | "jobOrder" | "visa" | "applicant" | "passport" | "application" | "permission" | "objectPermission"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      JobOrder: {
        payload: Prisma.$JobOrderPayload<ExtArgs>
        fields: Prisma.JobOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOrderPayload>
          }
          findFirst: {
            args: Prisma.JobOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOrderPayload>
          }
          findMany: {
            args: Prisma.JobOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOrderPayload>[]
          }
          create: {
            args: Prisma.JobOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOrderPayload>
          }
          createMany: {
            args: Prisma.JobOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOrderPayload>[]
          }
          delete: {
            args: Prisma.JobOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOrderPayload>
          }
          update: {
            args: Prisma.JobOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOrderPayload>
          }
          deleteMany: {
            args: Prisma.JobOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOrderPayload>[]
          }
          upsert: {
            args: Prisma.JobOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOrderPayload>
          }
          aggregate: {
            args: Prisma.JobOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobOrder>
          }
          groupBy: {
            args: Prisma.JobOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobOrderCountArgs<ExtArgs>
            result: $Utils.Optional<JobOrderCountAggregateOutputType> | number
          }
        }
      }
      Visa: {
        payload: Prisma.$VisaPayload<ExtArgs>
        fields: Prisma.VisaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaPayload>
          }
          findFirst: {
            args: Prisma.VisaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaPayload>
          }
          findMany: {
            args: Prisma.VisaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaPayload>[]
          }
          create: {
            args: Prisma.VisaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaPayload>
          }
          createMany: {
            args: Prisma.VisaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaPayload>[]
          }
          delete: {
            args: Prisma.VisaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaPayload>
          }
          update: {
            args: Prisma.VisaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaPayload>
          }
          deleteMany: {
            args: Prisma.VisaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaPayload>[]
          }
          upsert: {
            args: Prisma.VisaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaPayload>
          }
          aggregate: {
            args: Prisma.VisaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisa>
          }
          groupBy: {
            args: Prisma.VisaGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisaGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisaCountArgs<ExtArgs>
            result: $Utils.Optional<VisaCountAggregateOutputType> | number
          }
        }
      }
      Applicant: {
        payload: Prisma.$ApplicantPayload<ExtArgs>
        fields: Prisma.ApplicantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>
          }
          findFirst: {
            args: Prisma.ApplicantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>
          }
          findMany: {
            args: Prisma.ApplicantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>[]
          }
          create: {
            args: Prisma.ApplicantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>
          }
          createMany: {
            args: Prisma.ApplicantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>[]
          }
          delete: {
            args: Prisma.ApplicantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>
          }
          update: {
            args: Prisma.ApplicantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>
          }
          deleteMany: {
            args: Prisma.ApplicantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>[]
          }
          upsert: {
            args: Prisma.ApplicantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>
          }
          aggregate: {
            args: Prisma.ApplicantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplicant>
          }
          groupBy: {
            args: Prisma.ApplicantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicantCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicantCountAggregateOutputType> | number
          }
        }
      }
      Passport: {
        payload: Prisma.$PassportPayload<ExtArgs>
        fields: Prisma.PassportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PassportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PassportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportPayload>
          }
          findFirst: {
            args: Prisma.PassportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PassportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportPayload>
          }
          findMany: {
            args: Prisma.PassportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportPayload>[]
          }
          create: {
            args: Prisma.PassportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportPayload>
          }
          createMany: {
            args: Prisma.PassportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PassportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportPayload>[]
          }
          delete: {
            args: Prisma.PassportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportPayload>
          }
          update: {
            args: Prisma.PassportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportPayload>
          }
          deleteMany: {
            args: Prisma.PassportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PassportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PassportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportPayload>[]
          }
          upsert: {
            args: Prisma.PassportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportPayload>
          }
          aggregate: {
            args: Prisma.PassportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePassport>
          }
          groupBy: {
            args: Prisma.PassportGroupByArgs<ExtArgs>
            result: $Utils.Optional<PassportGroupByOutputType>[]
          }
          count: {
            args: Prisma.PassportCountArgs<ExtArgs>
            result: $Utils.Optional<PassportCountAggregateOutputType> | number
          }
        }
      }
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>
        fields: Prisma.ApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
      Permission: {
        payload: Prisma.$PermissionPayload<ExtArgs>
        fields: Prisma.PermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findFirst: {
            args: Prisma.PermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findMany: {
            args: Prisma.PermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          create: {
            args: Prisma.PermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          createMany: {
            args: Prisma.PermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          delete: {
            args: Prisma.PermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          update: {
            args: Prisma.PermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          deleteMany: {
            args: Prisma.PermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          upsert: {
            args: Prisma.PermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.PermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
      ObjectPermission: {
        payload: Prisma.$ObjectPermissionPayload<ExtArgs>
        fields: Prisma.ObjectPermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObjectPermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectPermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObjectPermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectPermissionPayload>
          }
          findFirst: {
            args: Prisma.ObjectPermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectPermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObjectPermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectPermissionPayload>
          }
          findMany: {
            args: Prisma.ObjectPermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectPermissionPayload>[]
          }
          create: {
            args: Prisma.ObjectPermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectPermissionPayload>
          }
          createMany: {
            args: Prisma.ObjectPermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ObjectPermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectPermissionPayload>[]
          }
          delete: {
            args: Prisma.ObjectPermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectPermissionPayload>
          }
          update: {
            args: Prisma.ObjectPermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectPermissionPayload>
          }
          deleteMany: {
            args: Prisma.ObjectPermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ObjectPermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ObjectPermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectPermissionPayload>[]
          }
          upsert: {
            args: Prisma.ObjectPermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectPermissionPayload>
          }
          aggregate: {
            args: Prisma.ObjectPermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateObjectPermission>
          }
          groupBy: {
            args: Prisma.ObjectPermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ObjectPermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObjectPermissionCountArgs<ExtArgs>
            result: $Utils.Optional<ObjectPermissionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    client?: ClientOmit
    jobOrder?: JobOrderOmit
    visa?: VisaOmit
    applicant?: ApplicantOmit
    passport?: PassportOmit
    application?: ApplicationOmit
    permission?: PermissionOmit
    objectPermission?: ObjectPermissionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    jobOrders: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOrders?: boolean | ClientCountOutputTypeCountJobOrdersArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountJobOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobOrderWhereInput
  }


  /**
   * Count Type JobOrderCountOutputType
   */

  export type JobOrderCountOutputType = {
    visas: number
    applications: number
  }

  export type JobOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visas?: boolean | JobOrderCountOutputTypeCountVisasArgs
    applications?: boolean | JobOrderCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * JobOrderCountOutputType without action
   */
  export type JobOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOrderCountOutputType
     */
    select?: JobOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobOrderCountOutputType without action
   */
  export type JobOrderCountOutputTypeCountVisasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisaWhereInput
  }

  /**
   * JobOrderCountOutputType without action
   */
  export type JobOrderCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }


  /**
   * Count Type ApplicantCountOutputType
   */

  export type ApplicantCountOutputType = {
    applications: number
  }

  export type ApplicantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | ApplicantCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * ApplicantCountOutputType without action
   */
  export type ApplicantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicantCountOutputType
     */
    select?: ApplicantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApplicantCountOutputType without action
   */
  export type ApplicantCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }


  /**
   * Count Type PermissionCountOutputType
   */

  export type PermissionCountOutputType = {
    objectPermissions: number
  }

  export type PermissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    objectPermissions?: boolean | PermissionCountOutputTypeCountObjectPermissionsArgs
  }

  // Custom InputTypes
  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionCountOutputType
     */
    select?: PermissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeCountObjectPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObjectPermissionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstname: string
    lastname: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "lastname" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstname: string
      lastname: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    primaryContact: string | null
    areaCode: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    primaryContact: string | null
    areaCode: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    email: number
    primaryContact: number
    areaCode: number
    phoneNumber: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    primaryContact?: true
    areaCode?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    primaryContact?: true
    areaCode?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    primaryContact?: true
    areaCode?: true
    phoneNumber?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    name: string
    email: string
    primaryContact: string
    areaCode: string
    phoneNumber: string
    address: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    primaryContact?: boolean
    areaCode?: boolean
    phoneNumber?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobOrders?: boolean | Client$jobOrdersArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    primaryContact?: boolean
    areaCode?: boolean
    phoneNumber?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    primaryContact?: boolean
    areaCode?: boolean
    phoneNumber?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    primaryContact?: boolean
    areaCode?: boolean
    phoneNumber?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "primaryContact" | "areaCode" | "phoneNumber" | "address" | "createdAt" | "updatedAt", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOrders?: boolean | Client$jobOrdersArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      jobOrders: Prisma.$JobOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      primaryContact: string
      areaCode: string
      phoneNumber: string
      address: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobOrders<T extends Client$jobOrdersArgs<ExtArgs> = {}>(args?: Subset<T, Client$jobOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly name: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly primaryContact: FieldRef<"Client", 'String'>
    readonly areaCode: FieldRef<"Client", 'String'>
    readonly phoneNumber: FieldRef<"Client", 'String'>
    readonly address: FieldRef<"Client", 'Json'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.jobOrders
   */
  export type Client$jobOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOrder
     */
    select?: JobOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOrder
     */
    omit?: JobOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOrderInclude<ExtArgs> | null
    where?: JobOrderWhereInput
    orderBy?: JobOrderOrderByWithRelationInput | JobOrderOrderByWithRelationInput[]
    cursor?: JobOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobOrderScalarFieldEnum | JobOrderScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model JobOrder
   */

  export type AggregateJobOrder = {
    _count: JobOrderCountAggregateOutputType | null
    _avg: JobOrderAvgAggregateOutputType | null
    _sum: JobOrderSumAggregateOutputType | null
    _min: JobOrderMinAggregateOutputType | null
    _max: JobOrderMaxAggregateOutputType | null
  }

  export type JobOrderAvgAggregateOutputType = {
    salary: number | null
    headcount: number | null
  }

  export type JobOrderSumAggregateOutputType = {
    salary: number | null
    headcount: number | null
  }

  export type JobOrderMinAggregateOutputType = {
    id: string | null
    employer: string | null
    position: string | null
    salary: number | null
    currency: string | null
    headcount: number | null
    status: $Enums.JobOrderStatus | null
    clientId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobOrderMaxAggregateOutputType = {
    id: string | null
    employer: string | null
    position: string | null
    salary: number | null
    currency: string | null
    headcount: number | null
    status: $Enums.JobOrderStatus | null
    clientId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobOrderCountAggregateOutputType = {
    id: number
    employer: number
    position: number
    salary: number
    currency: number
    headcount: number
    location: number
    status: number
    clientId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobOrderAvgAggregateInputType = {
    salary?: true
    headcount?: true
  }

  export type JobOrderSumAggregateInputType = {
    salary?: true
    headcount?: true
  }

  export type JobOrderMinAggregateInputType = {
    id?: true
    employer?: true
    position?: true
    salary?: true
    currency?: true
    headcount?: true
    status?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobOrderMaxAggregateInputType = {
    id?: true
    employer?: true
    position?: true
    salary?: true
    currency?: true
    headcount?: true
    status?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobOrderCountAggregateInputType = {
    id?: true
    employer?: true
    position?: true
    salary?: true
    currency?: true
    headcount?: true
    location?: true
    status?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobOrder to aggregate.
     */
    where?: JobOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobOrders to fetch.
     */
    orderBy?: JobOrderOrderByWithRelationInput | JobOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobOrders
    **/
    _count?: true | JobOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobOrderMaxAggregateInputType
  }

  export type GetJobOrderAggregateType<T extends JobOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateJobOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobOrder[P]>
      : GetScalarType<T[P], AggregateJobOrder[P]>
  }




  export type JobOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobOrderWhereInput
    orderBy?: JobOrderOrderByWithAggregationInput | JobOrderOrderByWithAggregationInput[]
    by: JobOrderScalarFieldEnum[] | JobOrderScalarFieldEnum
    having?: JobOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobOrderCountAggregateInputType | true
    _avg?: JobOrderAvgAggregateInputType
    _sum?: JobOrderSumAggregateInputType
    _min?: JobOrderMinAggregateInputType
    _max?: JobOrderMaxAggregateInputType
  }

  export type JobOrderGroupByOutputType = {
    id: string
    employer: string
    position: string
    salary: number
    currency: string
    headcount: number
    location: JsonValue
    status: $Enums.JobOrderStatus
    clientId: string
    createdAt: Date
    updatedAt: Date
    _count: JobOrderCountAggregateOutputType | null
    _avg: JobOrderAvgAggregateOutputType | null
    _sum: JobOrderSumAggregateOutputType | null
    _min: JobOrderMinAggregateOutputType | null
    _max: JobOrderMaxAggregateOutputType | null
  }

  type GetJobOrderGroupByPayload<T extends JobOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobOrderGroupByOutputType[P]>
            : GetScalarType<T[P], JobOrderGroupByOutputType[P]>
        }
      >
    >


  export type JobOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employer?: boolean
    position?: boolean
    salary?: boolean
    currency?: boolean
    headcount?: boolean
    location?: boolean
    status?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    visas?: boolean | JobOrder$visasArgs<ExtArgs>
    applications?: boolean | JobOrder$applicationsArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    _count?: boolean | JobOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobOrder"]>

  export type JobOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employer?: boolean
    position?: boolean
    salary?: boolean
    currency?: boolean
    headcount?: boolean
    location?: boolean
    status?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobOrder"]>

  export type JobOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employer?: boolean
    position?: boolean
    salary?: boolean
    currency?: boolean
    headcount?: boolean
    location?: boolean
    status?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobOrder"]>

  export type JobOrderSelectScalar = {
    id?: boolean
    employer?: boolean
    position?: boolean
    salary?: boolean
    currency?: boolean
    headcount?: boolean
    location?: boolean
    status?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employer" | "position" | "salary" | "currency" | "headcount" | "location" | "status" | "clientId" | "createdAt" | "updatedAt", ExtArgs["result"]["jobOrder"]>
  export type JobOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visas?: boolean | JobOrder$visasArgs<ExtArgs>
    applications?: boolean | JobOrder$applicationsArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    _count?: boolean | JobOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type JobOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $JobOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobOrder"
    objects: {
      visas: Prisma.$VisaPayload<ExtArgs>[]
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employer: string
      position: string
      salary: number
      currency: string
      headcount: number
      location: Prisma.JsonValue
      status: $Enums.JobOrderStatus
      clientId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobOrder"]>
    composites: {}
  }

  type JobOrderGetPayload<S extends boolean | null | undefined | JobOrderDefaultArgs> = $Result.GetResult<Prisma.$JobOrderPayload, S>

  type JobOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobOrderCountAggregateInputType | true
    }

  export interface JobOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobOrder'], meta: { name: 'JobOrder' } }
    /**
     * Find zero or one JobOrder that matches the filter.
     * @param {JobOrderFindUniqueArgs} args - Arguments to find a JobOrder
     * @example
     * // Get one JobOrder
     * const jobOrder = await prisma.jobOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobOrderFindUniqueArgs>(args: SelectSubset<T, JobOrderFindUniqueArgs<ExtArgs>>): Prisma__JobOrderClient<$Result.GetResult<Prisma.$JobOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobOrderFindUniqueOrThrowArgs} args - Arguments to find a JobOrder
     * @example
     * // Get one JobOrder
     * const jobOrder = await prisma.jobOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, JobOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobOrderClient<$Result.GetResult<Prisma.$JobOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOrderFindFirstArgs} args - Arguments to find a JobOrder
     * @example
     * // Get one JobOrder
     * const jobOrder = await prisma.jobOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobOrderFindFirstArgs>(args?: SelectSubset<T, JobOrderFindFirstArgs<ExtArgs>>): Prisma__JobOrderClient<$Result.GetResult<Prisma.$JobOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOrderFindFirstOrThrowArgs} args - Arguments to find a JobOrder
     * @example
     * // Get one JobOrder
     * const jobOrder = await prisma.jobOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, JobOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobOrderClient<$Result.GetResult<Prisma.$JobOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobOrders
     * const jobOrders = await prisma.jobOrder.findMany()
     * 
     * // Get first 10 JobOrders
     * const jobOrders = await prisma.jobOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobOrderWithIdOnly = await prisma.jobOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobOrderFindManyArgs>(args?: SelectSubset<T, JobOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobOrder.
     * @param {JobOrderCreateArgs} args - Arguments to create a JobOrder.
     * @example
     * // Create one JobOrder
     * const JobOrder = await prisma.jobOrder.create({
     *   data: {
     *     // ... data to create a JobOrder
     *   }
     * })
     * 
     */
    create<T extends JobOrderCreateArgs>(args: SelectSubset<T, JobOrderCreateArgs<ExtArgs>>): Prisma__JobOrderClient<$Result.GetResult<Prisma.$JobOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobOrders.
     * @param {JobOrderCreateManyArgs} args - Arguments to create many JobOrders.
     * @example
     * // Create many JobOrders
     * const jobOrder = await prisma.jobOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobOrderCreateManyArgs>(args?: SelectSubset<T, JobOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobOrders and returns the data saved in the database.
     * @param {JobOrderCreateManyAndReturnArgs} args - Arguments to create many JobOrders.
     * @example
     * // Create many JobOrders
     * const jobOrder = await prisma.jobOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobOrders and only return the `id`
     * const jobOrderWithIdOnly = await prisma.jobOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, JobOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobOrder.
     * @param {JobOrderDeleteArgs} args - Arguments to delete one JobOrder.
     * @example
     * // Delete one JobOrder
     * const JobOrder = await prisma.jobOrder.delete({
     *   where: {
     *     // ... filter to delete one JobOrder
     *   }
     * })
     * 
     */
    delete<T extends JobOrderDeleteArgs>(args: SelectSubset<T, JobOrderDeleteArgs<ExtArgs>>): Prisma__JobOrderClient<$Result.GetResult<Prisma.$JobOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobOrder.
     * @param {JobOrderUpdateArgs} args - Arguments to update one JobOrder.
     * @example
     * // Update one JobOrder
     * const jobOrder = await prisma.jobOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobOrderUpdateArgs>(args: SelectSubset<T, JobOrderUpdateArgs<ExtArgs>>): Prisma__JobOrderClient<$Result.GetResult<Prisma.$JobOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobOrders.
     * @param {JobOrderDeleteManyArgs} args - Arguments to filter JobOrders to delete.
     * @example
     * // Delete a few JobOrders
     * const { count } = await prisma.jobOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobOrderDeleteManyArgs>(args?: SelectSubset<T, JobOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobOrders
     * const jobOrder = await prisma.jobOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobOrderUpdateManyArgs>(args: SelectSubset<T, JobOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobOrders and returns the data updated in the database.
     * @param {JobOrderUpdateManyAndReturnArgs} args - Arguments to update many JobOrders.
     * @example
     * // Update many JobOrders
     * const jobOrder = await prisma.jobOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobOrders and only return the `id`
     * const jobOrderWithIdOnly = await prisma.jobOrder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, JobOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobOrder.
     * @param {JobOrderUpsertArgs} args - Arguments to update or create a JobOrder.
     * @example
     * // Update or create a JobOrder
     * const jobOrder = await prisma.jobOrder.upsert({
     *   create: {
     *     // ... data to create a JobOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobOrder we want to update
     *   }
     * })
     */
    upsert<T extends JobOrderUpsertArgs>(args: SelectSubset<T, JobOrderUpsertArgs<ExtArgs>>): Prisma__JobOrderClient<$Result.GetResult<Prisma.$JobOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOrderCountArgs} args - Arguments to filter JobOrders to count.
     * @example
     * // Count the number of JobOrders
     * const count = await prisma.jobOrder.count({
     *   where: {
     *     // ... the filter for the JobOrders we want to count
     *   }
     * })
    **/
    count<T extends JobOrderCountArgs>(
      args?: Subset<T, JobOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobOrderAggregateArgs>(args: Subset<T, JobOrderAggregateArgs>): Prisma.PrismaPromise<GetJobOrderAggregateType<T>>

    /**
     * Group by JobOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobOrderGroupByArgs['orderBy'] }
        : { orderBy?: JobOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobOrder model
   */
  readonly fields: JobOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    visas<T extends JobOrder$visasArgs<ExtArgs> = {}>(args?: Subset<T, JobOrder$visasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applications<T extends JobOrder$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, JobOrder$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobOrder model
   */
  interface JobOrderFieldRefs {
    readonly id: FieldRef<"JobOrder", 'String'>
    readonly employer: FieldRef<"JobOrder", 'String'>
    readonly position: FieldRef<"JobOrder", 'String'>
    readonly salary: FieldRef<"JobOrder", 'Int'>
    readonly currency: FieldRef<"JobOrder", 'String'>
    readonly headcount: FieldRef<"JobOrder", 'Int'>
    readonly location: FieldRef<"JobOrder", 'Json'>
    readonly status: FieldRef<"JobOrder", 'JobOrderStatus'>
    readonly clientId: FieldRef<"JobOrder", 'String'>
    readonly createdAt: FieldRef<"JobOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"JobOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobOrder findUnique
   */
  export type JobOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOrder
     */
    select?: JobOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOrder
     */
    omit?: JobOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOrderInclude<ExtArgs> | null
    /**
     * Filter, which JobOrder to fetch.
     */
    where: JobOrderWhereUniqueInput
  }

  /**
   * JobOrder findUniqueOrThrow
   */
  export type JobOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOrder
     */
    select?: JobOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOrder
     */
    omit?: JobOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOrderInclude<ExtArgs> | null
    /**
     * Filter, which JobOrder to fetch.
     */
    where: JobOrderWhereUniqueInput
  }

  /**
   * JobOrder findFirst
   */
  export type JobOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOrder
     */
    select?: JobOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOrder
     */
    omit?: JobOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOrderInclude<ExtArgs> | null
    /**
     * Filter, which JobOrder to fetch.
     */
    where?: JobOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobOrders to fetch.
     */
    orderBy?: JobOrderOrderByWithRelationInput | JobOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobOrders.
     */
    cursor?: JobOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobOrders.
     */
    distinct?: JobOrderScalarFieldEnum | JobOrderScalarFieldEnum[]
  }

  /**
   * JobOrder findFirstOrThrow
   */
  export type JobOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOrder
     */
    select?: JobOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOrder
     */
    omit?: JobOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOrderInclude<ExtArgs> | null
    /**
     * Filter, which JobOrder to fetch.
     */
    where?: JobOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobOrders to fetch.
     */
    orderBy?: JobOrderOrderByWithRelationInput | JobOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobOrders.
     */
    cursor?: JobOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobOrders.
     */
    distinct?: JobOrderScalarFieldEnum | JobOrderScalarFieldEnum[]
  }

  /**
   * JobOrder findMany
   */
  export type JobOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOrder
     */
    select?: JobOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOrder
     */
    omit?: JobOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOrderInclude<ExtArgs> | null
    /**
     * Filter, which JobOrders to fetch.
     */
    where?: JobOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobOrders to fetch.
     */
    orderBy?: JobOrderOrderByWithRelationInput | JobOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobOrders.
     */
    cursor?: JobOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobOrders.
     */
    skip?: number
    distinct?: JobOrderScalarFieldEnum | JobOrderScalarFieldEnum[]
  }

  /**
   * JobOrder create
   */
  export type JobOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOrder
     */
    select?: JobOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOrder
     */
    omit?: JobOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a JobOrder.
     */
    data: XOR<JobOrderCreateInput, JobOrderUncheckedCreateInput>
  }

  /**
   * JobOrder createMany
   */
  export type JobOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobOrders.
     */
    data: JobOrderCreateManyInput | JobOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobOrder createManyAndReturn
   */
  export type JobOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOrder
     */
    select?: JobOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobOrder
     */
    omit?: JobOrderOmit<ExtArgs> | null
    /**
     * The data used to create many JobOrders.
     */
    data: JobOrderCreateManyInput | JobOrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobOrder update
   */
  export type JobOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOrder
     */
    select?: JobOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOrder
     */
    omit?: JobOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a JobOrder.
     */
    data: XOR<JobOrderUpdateInput, JobOrderUncheckedUpdateInput>
    /**
     * Choose, which JobOrder to update.
     */
    where: JobOrderWhereUniqueInput
  }

  /**
   * JobOrder updateMany
   */
  export type JobOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobOrders.
     */
    data: XOR<JobOrderUpdateManyMutationInput, JobOrderUncheckedUpdateManyInput>
    /**
     * Filter which JobOrders to update
     */
    where?: JobOrderWhereInput
    /**
     * Limit how many JobOrders to update.
     */
    limit?: number
  }

  /**
   * JobOrder updateManyAndReturn
   */
  export type JobOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOrder
     */
    select?: JobOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobOrder
     */
    omit?: JobOrderOmit<ExtArgs> | null
    /**
     * The data used to update JobOrders.
     */
    data: XOR<JobOrderUpdateManyMutationInput, JobOrderUncheckedUpdateManyInput>
    /**
     * Filter which JobOrders to update
     */
    where?: JobOrderWhereInput
    /**
     * Limit how many JobOrders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobOrder upsert
   */
  export type JobOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOrder
     */
    select?: JobOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOrder
     */
    omit?: JobOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the JobOrder to update in case it exists.
     */
    where: JobOrderWhereUniqueInput
    /**
     * In case the JobOrder found by the `where` argument doesn't exist, create a new JobOrder with this data.
     */
    create: XOR<JobOrderCreateInput, JobOrderUncheckedCreateInput>
    /**
     * In case the JobOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobOrderUpdateInput, JobOrderUncheckedUpdateInput>
  }

  /**
   * JobOrder delete
   */
  export type JobOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOrder
     */
    select?: JobOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOrder
     */
    omit?: JobOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOrderInclude<ExtArgs> | null
    /**
     * Filter which JobOrder to delete.
     */
    where: JobOrderWhereUniqueInput
  }

  /**
   * JobOrder deleteMany
   */
  export type JobOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobOrders to delete
     */
    where?: JobOrderWhereInput
    /**
     * Limit how many JobOrders to delete.
     */
    limit?: number
  }

  /**
   * JobOrder.visas
   */
  export type JobOrder$visasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visa
     */
    select?: VisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visa
     */
    omit?: VisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaInclude<ExtArgs> | null
    where?: VisaWhereInput
    orderBy?: VisaOrderByWithRelationInput | VisaOrderByWithRelationInput[]
    cursor?: VisaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisaScalarFieldEnum | VisaScalarFieldEnum[]
  }

  /**
   * JobOrder.applications
   */
  export type JobOrder$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * JobOrder without action
   */
  export type JobOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOrder
     */
    select?: JobOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOrder
     */
    omit?: JobOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOrderInclude<ExtArgs> | null
  }


  /**
   * Model Visa
   */

  export type AggregateVisa = {
    _count: VisaCountAggregateOutputType | null
    _min: VisaMinAggregateOutputType | null
    _max: VisaMaxAggregateOutputType | null
  }

  export type VisaMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    issuedBy: string | null
    position: string | null
    validFrom: Date | null
    validUntil: Date | null
    status: $Enums.VisaStatus | null
    jobOrderId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VisaMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    issuedBy: string | null
    position: string | null
    validFrom: Date | null
    validUntil: Date | null
    status: $Enums.VisaStatus | null
    jobOrderId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VisaCountAggregateOutputType = {
    id: number
    identifier: number
    issuedBy: number
    position: number
    validFrom: number
    validUntil: number
    status: number
    jobOrderId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VisaMinAggregateInputType = {
    id?: true
    identifier?: true
    issuedBy?: true
    position?: true
    validFrom?: true
    validUntil?: true
    status?: true
    jobOrderId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VisaMaxAggregateInputType = {
    id?: true
    identifier?: true
    issuedBy?: true
    position?: true
    validFrom?: true
    validUntil?: true
    status?: true
    jobOrderId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VisaCountAggregateInputType = {
    id?: true
    identifier?: true
    issuedBy?: true
    position?: true
    validFrom?: true
    validUntil?: true
    status?: true
    jobOrderId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VisaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visa to aggregate.
     */
    where?: VisaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visas to fetch.
     */
    orderBy?: VisaOrderByWithRelationInput | VisaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Visas
    **/
    _count?: true | VisaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisaMaxAggregateInputType
  }

  export type GetVisaAggregateType<T extends VisaAggregateArgs> = {
        [P in keyof T & keyof AggregateVisa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisa[P]>
      : GetScalarType<T[P], AggregateVisa[P]>
  }




  export type VisaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisaWhereInput
    orderBy?: VisaOrderByWithAggregationInput | VisaOrderByWithAggregationInput[]
    by: VisaScalarFieldEnum[] | VisaScalarFieldEnum
    having?: VisaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisaCountAggregateInputType | true
    _min?: VisaMinAggregateInputType
    _max?: VisaMaxAggregateInputType
  }

  export type VisaGroupByOutputType = {
    id: string
    identifier: string
    issuedBy: string
    position: string
    validFrom: Date
    validUntil: Date
    status: $Enums.VisaStatus
    jobOrderId: string
    createdAt: Date
    updatedAt: Date
    _count: VisaCountAggregateOutputType | null
    _min: VisaMinAggregateOutputType | null
    _max: VisaMaxAggregateOutputType | null
  }

  type GetVisaGroupByPayload<T extends VisaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisaGroupByOutputType[P]>
            : GetScalarType<T[P], VisaGroupByOutputType[P]>
        }
      >
    >


  export type VisaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    issuedBy?: boolean
    position?: boolean
    validFrom?: boolean
    validUntil?: boolean
    status?: boolean
    jobOrderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobOrder?: boolean | JobOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visa"]>

  export type VisaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    issuedBy?: boolean
    position?: boolean
    validFrom?: boolean
    validUntil?: boolean
    status?: boolean
    jobOrderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobOrder?: boolean | JobOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visa"]>

  export type VisaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    issuedBy?: boolean
    position?: boolean
    validFrom?: boolean
    validUntil?: boolean
    status?: boolean
    jobOrderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobOrder?: boolean | JobOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visa"]>

  export type VisaSelectScalar = {
    id?: boolean
    identifier?: boolean
    issuedBy?: boolean
    position?: boolean
    validFrom?: boolean
    validUntil?: boolean
    status?: boolean
    jobOrderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VisaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "issuedBy" | "position" | "validFrom" | "validUntil" | "status" | "jobOrderId" | "createdAt" | "updatedAt", ExtArgs["result"]["visa"]>
  export type VisaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOrder?: boolean | JobOrderDefaultArgs<ExtArgs>
  }
  export type VisaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOrder?: boolean | JobOrderDefaultArgs<ExtArgs>
  }
  export type VisaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOrder?: boolean | JobOrderDefaultArgs<ExtArgs>
  }

  export type $VisaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Visa"
    objects: {
      jobOrder: Prisma.$JobOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      issuedBy: string
      position: string
      validFrom: Date
      validUntil: Date
      status: $Enums.VisaStatus
      jobOrderId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["visa"]>
    composites: {}
  }

  type VisaGetPayload<S extends boolean | null | undefined | VisaDefaultArgs> = $Result.GetResult<Prisma.$VisaPayload, S>

  type VisaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisaCountAggregateInputType | true
    }

  export interface VisaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Visa'], meta: { name: 'Visa' } }
    /**
     * Find zero or one Visa that matches the filter.
     * @param {VisaFindUniqueArgs} args - Arguments to find a Visa
     * @example
     * // Get one Visa
     * const visa = await prisma.visa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisaFindUniqueArgs>(args: SelectSubset<T, VisaFindUniqueArgs<ExtArgs>>): Prisma__VisaClient<$Result.GetResult<Prisma.$VisaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Visa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisaFindUniqueOrThrowArgs} args - Arguments to find a Visa
     * @example
     * // Get one Visa
     * const visa = await prisma.visa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisaFindUniqueOrThrowArgs>(args: SelectSubset<T, VisaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisaClient<$Result.GetResult<Prisma.$VisaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaFindFirstArgs} args - Arguments to find a Visa
     * @example
     * // Get one Visa
     * const visa = await prisma.visa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisaFindFirstArgs>(args?: SelectSubset<T, VisaFindFirstArgs<ExtArgs>>): Prisma__VisaClient<$Result.GetResult<Prisma.$VisaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaFindFirstOrThrowArgs} args - Arguments to find a Visa
     * @example
     * // Get one Visa
     * const visa = await prisma.visa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisaFindFirstOrThrowArgs>(args?: SelectSubset<T, VisaFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisaClient<$Result.GetResult<Prisma.$VisaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Visas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Visas
     * const visas = await prisma.visa.findMany()
     * 
     * // Get first 10 Visas
     * const visas = await prisma.visa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visaWithIdOnly = await prisma.visa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisaFindManyArgs>(args?: SelectSubset<T, VisaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Visa.
     * @param {VisaCreateArgs} args - Arguments to create a Visa.
     * @example
     * // Create one Visa
     * const Visa = await prisma.visa.create({
     *   data: {
     *     // ... data to create a Visa
     *   }
     * })
     * 
     */
    create<T extends VisaCreateArgs>(args: SelectSubset<T, VisaCreateArgs<ExtArgs>>): Prisma__VisaClient<$Result.GetResult<Prisma.$VisaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Visas.
     * @param {VisaCreateManyArgs} args - Arguments to create many Visas.
     * @example
     * // Create many Visas
     * const visa = await prisma.visa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisaCreateManyArgs>(args?: SelectSubset<T, VisaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Visas and returns the data saved in the database.
     * @param {VisaCreateManyAndReturnArgs} args - Arguments to create many Visas.
     * @example
     * // Create many Visas
     * const visa = await prisma.visa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Visas and only return the `id`
     * const visaWithIdOnly = await prisma.visa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisaCreateManyAndReturnArgs>(args?: SelectSubset<T, VisaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Visa.
     * @param {VisaDeleteArgs} args - Arguments to delete one Visa.
     * @example
     * // Delete one Visa
     * const Visa = await prisma.visa.delete({
     *   where: {
     *     // ... filter to delete one Visa
     *   }
     * })
     * 
     */
    delete<T extends VisaDeleteArgs>(args: SelectSubset<T, VisaDeleteArgs<ExtArgs>>): Prisma__VisaClient<$Result.GetResult<Prisma.$VisaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Visa.
     * @param {VisaUpdateArgs} args - Arguments to update one Visa.
     * @example
     * // Update one Visa
     * const visa = await prisma.visa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisaUpdateArgs>(args: SelectSubset<T, VisaUpdateArgs<ExtArgs>>): Prisma__VisaClient<$Result.GetResult<Prisma.$VisaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Visas.
     * @param {VisaDeleteManyArgs} args - Arguments to filter Visas to delete.
     * @example
     * // Delete a few Visas
     * const { count } = await prisma.visa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisaDeleteManyArgs>(args?: SelectSubset<T, VisaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Visas
     * const visa = await prisma.visa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisaUpdateManyArgs>(args: SelectSubset<T, VisaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visas and returns the data updated in the database.
     * @param {VisaUpdateManyAndReturnArgs} args - Arguments to update many Visas.
     * @example
     * // Update many Visas
     * const visa = await prisma.visa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Visas and only return the `id`
     * const visaWithIdOnly = await prisma.visa.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VisaUpdateManyAndReturnArgs>(args: SelectSubset<T, VisaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Visa.
     * @param {VisaUpsertArgs} args - Arguments to update or create a Visa.
     * @example
     * // Update or create a Visa
     * const visa = await prisma.visa.upsert({
     *   create: {
     *     // ... data to create a Visa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Visa we want to update
     *   }
     * })
     */
    upsert<T extends VisaUpsertArgs>(args: SelectSubset<T, VisaUpsertArgs<ExtArgs>>): Prisma__VisaClient<$Result.GetResult<Prisma.$VisaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Visas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaCountArgs} args - Arguments to filter Visas to count.
     * @example
     * // Count the number of Visas
     * const count = await prisma.visa.count({
     *   where: {
     *     // ... the filter for the Visas we want to count
     *   }
     * })
    **/
    count<T extends VisaCountArgs>(
      args?: Subset<T, VisaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Visa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VisaAggregateArgs>(args: Subset<T, VisaAggregateArgs>): Prisma.PrismaPromise<GetVisaAggregateType<T>>

    /**
     * Group by Visa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VisaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisaGroupByArgs['orderBy'] }
        : { orderBy?: VisaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VisaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Visa model
   */
  readonly fields: VisaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Visa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobOrder<T extends JobOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobOrderDefaultArgs<ExtArgs>>): Prisma__JobOrderClient<$Result.GetResult<Prisma.$JobOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Visa model
   */
  interface VisaFieldRefs {
    readonly id: FieldRef<"Visa", 'String'>
    readonly identifier: FieldRef<"Visa", 'String'>
    readonly issuedBy: FieldRef<"Visa", 'String'>
    readonly position: FieldRef<"Visa", 'String'>
    readonly validFrom: FieldRef<"Visa", 'DateTime'>
    readonly validUntil: FieldRef<"Visa", 'DateTime'>
    readonly status: FieldRef<"Visa", 'VisaStatus'>
    readonly jobOrderId: FieldRef<"Visa", 'String'>
    readonly createdAt: FieldRef<"Visa", 'DateTime'>
    readonly updatedAt: FieldRef<"Visa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Visa findUnique
   */
  export type VisaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visa
     */
    select?: VisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visa
     */
    omit?: VisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaInclude<ExtArgs> | null
    /**
     * Filter, which Visa to fetch.
     */
    where: VisaWhereUniqueInput
  }

  /**
   * Visa findUniqueOrThrow
   */
  export type VisaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visa
     */
    select?: VisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visa
     */
    omit?: VisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaInclude<ExtArgs> | null
    /**
     * Filter, which Visa to fetch.
     */
    where: VisaWhereUniqueInput
  }

  /**
   * Visa findFirst
   */
  export type VisaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visa
     */
    select?: VisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visa
     */
    omit?: VisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaInclude<ExtArgs> | null
    /**
     * Filter, which Visa to fetch.
     */
    where?: VisaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visas to fetch.
     */
    orderBy?: VisaOrderByWithRelationInput | VisaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visas.
     */
    cursor?: VisaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visas.
     */
    distinct?: VisaScalarFieldEnum | VisaScalarFieldEnum[]
  }

  /**
   * Visa findFirstOrThrow
   */
  export type VisaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visa
     */
    select?: VisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visa
     */
    omit?: VisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaInclude<ExtArgs> | null
    /**
     * Filter, which Visa to fetch.
     */
    where?: VisaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visas to fetch.
     */
    orderBy?: VisaOrderByWithRelationInput | VisaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visas.
     */
    cursor?: VisaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visas.
     */
    distinct?: VisaScalarFieldEnum | VisaScalarFieldEnum[]
  }

  /**
   * Visa findMany
   */
  export type VisaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visa
     */
    select?: VisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visa
     */
    omit?: VisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaInclude<ExtArgs> | null
    /**
     * Filter, which Visas to fetch.
     */
    where?: VisaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visas to fetch.
     */
    orderBy?: VisaOrderByWithRelationInput | VisaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Visas.
     */
    cursor?: VisaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visas.
     */
    skip?: number
    distinct?: VisaScalarFieldEnum | VisaScalarFieldEnum[]
  }

  /**
   * Visa create
   */
  export type VisaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visa
     */
    select?: VisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visa
     */
    omit?: VisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaInclude<ExtArgs> | null
    /**
     * The data needed to create a Visa.
     */
    data: XOR<VisaCreateInput, VisaUncheckedCreateInput>
  }

  /**
   * Visa createMany
   */
  export type VisaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Visas.
     */
    data: VisaCreateManyInput | VisaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Visa createManyAndReturn
   */
  export type VisaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visa
     */
    select?: VisaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visa
     */
    omit?: VisaOmit<ExtArgs> | null
    /**
     * The data used to create many Visas.
     */
    data: VisaCreateManyInput | VisaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Visa update
   */
  export type VisaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visa
     */
    select?: VisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visa
     */
    omit?: VisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaInclude<ExtArgs> | null
    /**
     * The data needed to update a Visa.
     */
    data: XOR<VisaUpdateInput, VisaUncheckedUpdateInput>
    /**
     * Choose, which Visa to update.
     */
    where: VisaWhereUniqueInput
  }

  /**
   * Visa updateMany
   */
  export type VisaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Visas.
     */
    data: XOR<VisaUpdateManyMutationInput, VisaUncheckedUpdateManyInput>
    /**
     * Filter which Visas to update
     */
    where?: VisaWhereInput
    /**
     * Limit how many Visas to update.
     */
    limit?: number
  }

  /**
   * Visa updateManyAndReturn
   */
  export type VisaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visa
     */
    select?: VisaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visa
     */
    omit?: VisaOmit<ExtArgs> | null
    /**
     * The data used to update Visas.
     */
    data: XOR<VisaUpdateManyMutationInput, VisaUncheckedUpdateManyInput>
    /**
     * Filter which Visas to update
     */
    where?: VisaWhereInput
    /**
     * Limit how many Visas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Visa upsert
   */
  export type VisaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visa
     */
    select?: VisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visa
     */
    omit?: VisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaInclude<ExtArgs> | null
    /**
     * The filter to search for the Visa to update in case it exists.
     */
    where: VisaWhereUniqueInput
    /**
     * In case the Visa found by the `where` argument doesn't exist, create a new Visa with this data.
     */
    create: XOR<VisaCreateInput, VisaUncheckedCreateInput>
    /**
     * In case the Visa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisaUpdateInput, VisaUncheckedUpdateInput>
  }

  /**
   * Visa delete
   */
  export type VisaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visa
     */
    select?: VisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visa
     */
    omit?: VisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaInclude<ExtArgs> | null
    /**
     * Filter which Visa to delete.
     */
    where: VisaWhereUniqueInput
  }

  /**
   * Visa deleteMany
   */
  export type VisaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visas to delete
     */
    where?: VisaWhereInput
    /**
     * Limit how many Visas to delete.
     */
    limit?: number
  }

  /**
   * Visa without action
   */
  export type VisaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visa
     */
    select?: VisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visa
     */
    omit?: VisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaInclude<ExtArgs> | null
  }


  /**
   * Model Applicant
   */

  export type AggregateApplicant = {
    _count: ApplicantCountAggregateOutputType | null
    _min: ApplicantMinAggregateOutputType | null
    _max: ApplicantMaxAggregateOutputType | null
  }

  export type ApplicantMinAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
    areaCode: string | null
    phoneNumber: string | null
    resumeURL: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicantMaxAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
    areaCode: string | null
    phoneNumber: string | null
    resumeURL: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicantCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    email: number
    password: number
    areaCode: number
    phoneNumber: number
    resumeURL: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApplicantMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    areaCode?: true
    phoneNumber?: true
    resumeURL?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicantMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    areaCode?: true
    phoneNumber?: true
    resumeURL?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicantCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    areaCode?: true
    phoneNumber?: true
    resumeURL?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApplicantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applicant to aggregate.
     */
    where?: ApplicantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applicants to fetch.
     */
    orderBy?: ApplicantOrderByWithRelationInput | ApplicantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applicants
    **/
    _count?: true | ApplicantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicantMaxAggregateInputType
  }

  export type GetApplicantAggregateType<T extends ApplicantAggregateArgs> = {
        [P in keyof T & keyof AggregateApplicant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplicant[P]>
      : GetScalarType<T[P], AggregateApplicant[P]>
  }




  export type ApplicantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicantWhereInput
    orderBy?: ApplicantOrderByWithAggregationInput | ApplicantOrderByWithAggregationInput[]
    by: ApplicantScalarFieldEnum[] | ApplicantScalarFieldEnum
    having?: ApplicantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicantCountAggregateInputType | true
    _min?: ApplicantMinAggregateInputType
    _max?: ApplicantMaxAggregateInputType
  }

  export type ApplicantGroupByOutputType = {
    id: string
    firstname: string
    lastname: string
    email: string
    password: string
    areaCode: string
    phoneNumber: string
    resumeURL: string | null
    createdAt: Date
    updatedAt: Date
    _count: ApplicantCountAggregateOutputType | null
    _min: ApplicantMinAggregateOutputType | null
    _max: ApplicantMaxAggregateOutputType | null
  }

  type GetApplicantGroupByPayload<T extends ApplicantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicantGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicantGroupByOutputType[P]>
        }
      >
    >


  export type ApplicantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    areaCode?: boolean
    phoneNumber?: boolean
    resumeURL?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applications?: boolean | Applicant$applicationsArgs<ExtArgs>
    passport?: boolean | Applicant$passportArgs<ExtArgs>
    _count?: boolean | ApplicantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicant"]>

  export type ApplicantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    areaCode?: boolean
    phoneNumber?: boolean
    resumeURL?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["applicant"]>

  export type ApplicantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    areaCode?: boolean
    phoneNumber?: boolean
    resumeURL?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["applicant"]>

  export type ApplicantSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    areaCode?: boolean
    phoneNumber?: boolean
    resumeURL?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApplicantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "lastname" | "email" | "password" | "areaCode" | "phoneNumber" | "resumeURL" | "createdAt" | "updatedAt", ExtArgs["result"]["applicant"]>
  export type ApplicantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | Applicant$applicationsArgs<ExtArgs>
    passport?: boolean | Applicant$passportArgs<ExtArgs>
    _count?: boolean | ApplicantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApplicantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ApplicantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ApplicantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Applicant"
    objects: {
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
      passport: Prisma.$PassportPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstname: string
      lastname: string
      email: string
      password: string
      areaCode: string
      phoneNumber: string
      resumeURL: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["applicant"]>
    composites: {}
  }

  type ApplicantGetPayload<S extends boolean | null | undefined | ApplicantDefaultArgs> = $Result.GetResult<Prisma.$ApplicantPayload, S>

  type ApplicantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicantCountAggregateInputType | true
    }

  export interface ApplicantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Applicant'], meta: { name: 'Applicant' } }
    /**
     * Find zero or one Applicant that matches the filter.
     * @param {ApplicantFindUniqueArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicantFindUniqueArgs>(args: SelectSubset<T, ApplicantFindUniqueArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Applicant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicantFindUniqueOrThrowArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicantFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Applicant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantFindFirstArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicantFindFirstArgs>(args?: SelectSubset<T, ApplicantFindFirstArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Applicant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantFindFirstOrThrowArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicantFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applicants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applicants
     * const applicants = await prisma.applicant.findMany()
     * 
     * // Get first 10 Applicants
     * const applicants = await prisma.applicant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicantWithIdOnly = await prisma.applicant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicantFindManyArgs>(args?: SelectSubset<T, ApplicantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Applicant.
     * @param {ApplicantCreateArgs} args - Arguments to create a Applicant.
     * @example
     * // Create one Applicant
     * const Applicant = await prisma.applicant.create({
     *   data: {
     *     // ... data to create a Applicant
     *   }
     * })
     * 
     */
    create<T extends ApplicantCreateArgs>(args: SelectSubset<T, ApplicantCreateArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applicants.
     * @param {ApplicantCreateManyArgs} args - Arguments to create many Applicants.
     * @example
     * // Create many Applicants
     * const applicant = await prisma.applicant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicantCreateManyArgs>(args?: SelectSubset<T, ApplicantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applicants and returns the data saved in the database.
     * @param {ApplicantCreateManyAndReturnArgs} args - Arguments to create many Applicants.
     * @example
     * // Create many Applicants
     * const applicant = await prisma.applicant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applicants and only return the `id`
     * const applicantWithIdOnly = await prisma.applicant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicantCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Applicant.
     * @param {ApplicantDeleteArgs} args - Arguments to delete one Applicant.
     * @example
     * // Delete one Applicant
     * const Applicant = await prisma.applicant.delete({
     *   where: {
     *     // ... filter to delete one Applicant
     *   }
     * })
     * 
     */
    delete<T extends ApplicantDeleteArgs>(args: SelectSubset<T, ApplicantDeleteArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Applicant.
     * @param {ApplicantUpdateArgs} args - Arguments to update one Applicant.
     * @example
     * // Update one Applicant
     * const applicant = await prisma.applicant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicantUpdateArgs>(args: SelectSubset<T, ApplicantUpdateArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applicants.
     * @param {ApplicantDeleteManyArgs} args - Arguments to filter Applicants to delete.
     * @example
     * // Delete a few Applicants
     * const { count } = await prisma.applicant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicantDeleteManyArgs>(args?: SelectSubset<T, ApplicantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applicants
     * const applicant = await prisma.applicant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicantUpdateManyArgs>(args: SelectSubset<T, ApplicantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applicants and returns the data updated in the database.
     * @param {ApplicantUpdateManyAndReturnArgs} args - Arguments to update many Applicants.
     * @example
     * // Update many Applicants
     * const applicant = await prisma.applicant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applicants and only return the `id`
     * const applicantWithIdOnly = await prisma.applicant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApplicantUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Applicant.
     * @param {ApplicantUpsertArgs} args - Arguments to update or create a Applicant.
     * @example
     * // Update or create a Applicant
     * const applicant = await prisma.applicant.upsert({
     *   create: {
     *     // ... data to create a Applicant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Applicant we want to update
     *   }
     * })
     */
    upsert<T extends ApplicantUpsertArgs>(args: SelectSubset<T, ApplicantUpsertArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantCountArgs} args - Arguments to filter Applicants to count.
     * @example
     * // Count the number of Applicants
     * const count = await prisma.applicant.count({
     *   where: {
     *     // ... the filter for the Applicants we want to count
     *   }
     * })
    **/
    count<T extends ApplicantCountArgs>(
      args?: Subset<T, ApplicantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Applicant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicantAggregateArgs>(args: Subset<T, ApplicantAggregateArgs>): Prisma.PrismaPromise<GetApplicantAggregateType<T>>

    /**
     * Group by Applicant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicantGroupByArgs['orderBy'] }
        : { orderBy?: ApplicantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Applicant model
   */
  readonly fields: ApplicantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Applicant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applications<T extends Applicant$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Applicant$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    passport<T extends Applicant$passportArgs<ExtArgs> = {}>(args?: Subset<T, Applicant$passportArgs<ExtArgs>>): Prisma__PassportClient<$Result.GetResult<Prisma.$PassportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Applicant model
   */
  interface ApplicantFieldRefs {
    readonly id: FieldRef<"Applicant", 'String'>
    readonly firstname: FieldRef<"Applicant", 'String'>
    readonly lastname: FieldRef<"Applicant", 'String'>
    readonly email: FieldRef<"Applicant", 'String'>
    readonly password: FieldRef<"Applicant", 'String'>
    readonly areaCode: FieldRef<"Applicant", 'String'>
    readonly phoneNumber: FieldRef<"Applicant", 'String'>
    readonly resumeURL: FieldRef<"Applicant", 'String'>
    readonly createdAt: FieldRef<"Applicant", 'DateTime'>
    readonly updatedAt: FieldRef<"Applicant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Applicant findUnique
   */
  export type ApplicantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * Filter, which Applicant to fetch.
     */
    where: ApplicantWhereUniqueInput
  }

  /**
   * Applicant findUniqueOrThrow
   */
  export type ApplicantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * Filter, which Applicant to fetch.
     */
    where: ApplicantWhereUniqueInput
  }

  /**
   * Applicant findFirst
   */
  export type ApplicantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * Filter, which Applicant to fetch.
     */
    where?: ApplicantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applicants to fetch.
     */
    orderBy?: ApplicantOrderByWithRelationInput | ApplicantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applicants.
     */
    cursor?: ApplicantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applicants.
     */
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[]
  }

  /**
   * Applicant findFirstOrThrow
   */
  export type ApplicantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * Filter, which Applicant to fetch.
     */
    where?: ApplicantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applicants to fetch.
     */
    orderBy?: ApplicantOrderByWithRelationInput | ApplicantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applicants.
     */
    cursor?: ApplicantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applicants.
     */
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[]
  }

  /**
   * Applicant findMany
   */
  export type ApplicantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * Filter, which Applicants to fetch.
     */
    where?: ApplicantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applicants to fetch.
     */
    orderBy?: ApplicantOrderByWithRelationInput | ApplicantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applicants.
     */
    cursor?: ApplicantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applicants.
     */
    skip?: number
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[]
  }

  /**
   * Applicant create
   */
  export type ApplicantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * The data needed to create a Applicant.
     */
    data: XOR<ApplicantCreateInput, ApplicantUncheckedCreateInput>
  }

  /**
   * Applicant createMany
   */
  export type ApplicantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applicants.
     */
    data: ApplicantCreateManyInput | ApplicantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Applicant createManyAndReturn
   */
  export type ApplicantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * The data used to create many Applicants.
     */
    data: ApplicantCreateManyInput | ApplicantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Applicant update
   */
  export type ApplicantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * The data needed to update a Applicant.
     */
    data: XOR<ApplicantUpdateInput, ApplicantUncheckedUpdateInput>
    /**
     * Choose, which Applicant to update.
     */
    where: ApplicantWhereUniqueInput
  }

  /**
   * Applicant updateMany
   */
  export type ApplicantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applicants.
     */
    data: XOR<ApplicantUpdateManyMutationInput, ApplicantUncheckedUpdateManyInput>
    /**
     * Filter which Applicants to update
     */
    where?: ApplicantWhereInput
    /**
     * Limit how many Applicants to update.
     */
    limit?: number
  }

  /**
   * Applicant updateManyAndReturn
   */
  export type ApplicantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * The data used to update Applicants.
     */
    data: XOR<ApplicantUpdateManyMutationInput, ApplicantUncheckedUpdateManyInput>
    /**
     * Filter which Applicants to update
     */
    where?: ApplicantWhereInput
    /**
     * Limit how many Applicants to update.
     */
    limit?: number
  }

  /**
   * Applicant upsert
   */
  export type ApplicantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * The filter to search for the Applicant to update in case it exists.
     */
    where: ApplicantWhereUniqueInput
    /**
     * In case the Applicant found by the `where` argument doesn't exist, create a new Applicant with this data.
     */
    create: XOR<ApplicantCreateInput, ApplicantUncheckedCreateInput>
    /**
     * In case the Applicant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicantUpdateInput, ApplicantUncheckedUpdateInput>
  }

  /**
   * Applicant delete
   */
  export type ApplicantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * Filter which Applicant to delete.
     */
    where: ApplicantWhereUniqueInput
  }

  /**
   * Applicant deleteMany
   */
  export type ApplicantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applicants to delete
     */
    where?: ApplicantWhereInput
    /**
     * Limit how many Applicants to delete.
     */
    limit?: number
  }

  /**
   * Applicant.applications
   */
  export type Applicant$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Applicant.passport
   */
  export type Applicant$passportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passport
     */
    select?: PassportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passport
     */
    omit?: PassportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassportInclude<ExtArgs> | null
    where?: PassportWhereInput
  }

  /**
   * Applicant without action
   */
  export type ApplicantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
  }


  /**
   * Model Passport
   */

  export type AggregatePassport = {
    _count: PassportCountAggregateOutputType | null
    _min: PassportMinAggregateOutputType | null
    _max: PassportMaxAggregateOutputType | null
  }

  export type PassportMinAggregateOutputType = {
    id: string | null
    passportNumber: string | null
    issuedBy: string | null
    validFrom: Date | null
    validUntil: Date | null
    passportURL: string | null
    applicantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PassportMaxAggregateOutputType = {
    id: string | null
    passportNumber: string | null
    issuedBy: string | null
    validFrom: Date | null
    validUntil: Date | null
    passportURL: string | null
    applicantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PassportCountAggregateOutputType = {
    id: number
    passportNumber: number
    issuedBy: number
    validFrom: number
    validUntil: number
    passportURL: number
    applicantId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PassportMinAggregateInputType = {
    id?: true
    passportNumber?: true
    issuedBy?: true
    validFrom?: true
    validUntil?: true
    passportURL?: true
    applicantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PassportMaxAggregateInputType = {
    id?: true
    passportNumber?: true
    issuedBy?: true
    validFrom?: true
    validUntil?: true
    passportURL?: true
    applicantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PassportCountAggregateInputType = {
    id?: true
    passportNumber?: true
    issuedBy?: true
    validFrom?: true
    validUntil?: true
    passportURL?: true
    applicantId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PassportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Passport to aggregate.
     */
    where?: PassportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passports to fetch.
     */
    orderBy?: PassportOrderByWithRelationInput | PassportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PassportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Passports
    **/
    _count?: true | PassportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PassportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PassportMaxAggregateInputType
  }

  export type GetPassportAggregateType<T extends PassportAggregateArgs> = {
        [P in keyof T & keyof AggregatePassport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassport[P]>
      : GetScalarType<T[P], AggregatePassport[P]>
  }




  export type PassportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PassportWhereInput
    orderBy?: PassportOrderByWithAggregationInput | PassportOrderByWithAggregationInput[]
    by: PassportScalarFieldEnum[] | PassportScalarFieldEnum
    having?: PassportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PassportCountAggregateInputType | true
    _min?: PassportMinAggregateInputType
    _max?: PassportMaxAggregateInputType
  }

  export type PassportGroupByOutputType = {
    id: string
    passportNumber: string
    issuedBy: string
    validFrom: Date
    validUntil: Date
    passportURL: string
    applicantId: string
    createdAt: Date
    updatedAt: Date
    _count: PassportCountAggregateOutputType | null
    _min: PassportMinAggregateOutputType | null
    _max: PassportMaxAggregateOutputType | null
  }

  type GetPassportGroupByPayload<T extends PassportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PassportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PassportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PassportGroupByOutputType[P]>
            : GetScalarType<T[P], PassportGroupByOutputType[P]>
        }
      >
    >


  export type PassportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passportNumber?: boolean
    issuedBy?: boolean
    validFrom?: boolean
    validUntil?: boolean
    passportURL?: boolean
    applicantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passport"]>

  export type PassportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passportNumber?: boolean
    issuedBy?: boolean
    validFrom?: boolean
    validUntil?: boolean
    passportURL?: boolean
    applicantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passport"]>

  export type PassportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passportNumber?: boolean
    issuedBy?: boolean
    validFrom?: boolean
    validUntil?: boolean
    passportURL?: boolean
    applicantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passport"]>

  export type PassportSelectScalar = {
    id?: boolean
    passportNumber?: boolean
    issuedBy?: boolean
    validFrom?: boolean
    validUntil?: boolean
    passportURL?: boolean
    applicantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PassportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "passportNumber" | "issuedBy" | "validFrom" | "validUntil" | "passportURL" | "applicantId" | "createdAt" | "updatedAt", ExtArgs["result"]["passport"]>
  export type PassportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }
  export type PassportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }
  export type PassportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }

  export type $PassportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Passport"
    objects: {
      applicant: Prisma.$ApplicantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      passportNumber: string
      issuedBy: string
      validFrom: Date
      validUntil: Date
      passportURL: string
      applicantId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["passport"]>
    composites: {}
  }

  type PassportGetPayload<S extends boolean | null | undefined | PassportDefaultArgs> = $Result.GetResult<Prisma.$PassportPayload, S>

  type PassportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PassportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PassportCountAggregateInputType | true
    }

  export interface PassportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Passport'], meta: { name: 'Passport' } }
    /**
     * Find zero or one Passport that matches the filter.
     * @param {PassportFindUniqueArgs} args - Arguments to find a Passport
     * @example
     * // Get one Passport
     * const passport = await prisma.passport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PassportFindUniqueArgs>(args: SelectSubset<T, PassportFindUniqueArgs<ExtArgs>>): Prisma__PassportClient<$Result.GetResult<Prisma.$PassportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Passport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PassportFindUniqueOrThrowArgs} args - Arguments to find a Passport
     * @example
     * // Get one Passport
     * const passport = await prisma.passport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PassportFindUniqueOrThrowArgs>(args: SelectSubset<T, PassportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PassportClient<$Result.GetResult<Prisma.$PassportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Passport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassportFindFirstArgs} args - Arguments to find a Passport
     * @example
     * // Get one Passport
     * const passport = await prisma.passport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PassportFindFirstArgs>(args?: SelectSubset<T, PassportFindFirstArgs<ExtArgs>>): Prisma__PassportClient<$Result.GetResult<Prisma.$PassportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Passport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassportFindFirstOrThrowArgs} args - Arguments to find a Passport
     * @example
     * // Get one Passport
     * const passport = await prisma.passport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PassportFindFirstOrThrowArgs>(args?: SelectSubset<T, PassportFindFirstOrThrowArgs<ExtArgs>>): Prisma__PassportClient<$Result.GetResult<Prisma.$PassportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Passports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Passports
     * const passports = await prisma.passport.findMany()
     * 
     * // Get first 10 Passports
     * const passports = await prisma.passport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passportWithIdOnly = await prisma.passport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PassportFindManyArgs>(args?: SelectSubset<T, PassportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Passport.
     * @param {PassportCreateArgs} args - Arguments to create a Passport.
     * @example
     * // Create one Passport
     * const Passport = await prisma.passport.create({
     *   data: {
     *     // ... data to create a Passport
     *   }
     * })
     * 
     */
    create<T extends PassportCreateArgs>(args: SelectSubset<T, PassportCreateArgs<ExtArgs>>): Prisma__PassportClient<$Result.GetResult<Prisma.$PassportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Passports.
     * @param {PassportCreateManyArgs} args - Arguments to create many Passports.
     * @example
     * // Create many Passports
     * const passport = await prisma.passport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PassportCreateManyArgs>(args?: SelectSubset<T, PassportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Passports and returns the data saved in the database.
     * @param {PassportCreateManyAndReturnArgs} args - Arguments to create many Passports.
     * @example
     * // Create many Passports
     * const passport = await prisma.passport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Passports and only return the `id`
     * const passportWithIdOnly = await prisma.passport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PassportCreateManyAndReturnArgs>(args?: SelectSubset<T, PassportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Passport.
     * @param {PassportDeleteArgs} args - Arguments to delete one Passport.
     * @example
     * // Delete one Passport
     * const Passport = await prisma.passport.delete({
     *   where: {
     *     // ... filter to delete one Passport
     *   }
     * })
     * 
     */
    delete<T extends PassportDeleteArgs>(args: SelectSubset<T, PassportDeleteArgs<ExtArgs>>): Prisma__PassportClient<$Result.GetResult<Prisma.$PassportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Passport.
     * @param {PassportUpdateArgs} args - Arguments to update one Passport.
     * @example
     * // Update one Passport
     * const passport = await prisma.passport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PassportUpdateArgs>(args: SelectSubset<T, PassportUpdateArgs<ExtArgs>>): Prisma__PassportClient<$Result.GetResult<Prisma.$PassportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Passports.
     * @param {PassportDeleteManyArgs} args - Arguments to filter Passports to delete.
     * @example
     * // Delete a few Passports
     * const { count } = await prisma.passport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PassportDeleteManyArgs>(args?: SelectSubset<T, PassportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Passports
     * const passport = await prisma.passport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PassportUpdateManyArgs>(args: SelectSubset<T, PassportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passports and returns the data updated in the database.
     * @param {PassportUpdateManyAndReturnArgs} args - Arguments to update many Passports.
     * @example
     * // Update many Passports
     * const passport = await prisma.passport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Passports and only return the `id`
     * const passportWithIdOnly = await prisma.passport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PassportUpdateManyAndReturnArgs>(args: SelectSubset<T, PassportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Passport.
     * @param {PassportUpsertArgs} args - Arguments to update or create a Passport.
     * @example
     * // Update or create a Passport
     * const passport = await prisma.passport.upsert({
     *   create: {
     *     // ... data to create a Passport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Passport we want to update
     *   }
     * })
     */
    upsert<T extends PassportUpsertArgs>(args: SelectSubset<T, PassportUpsertArgs<ExtArgs>>): Prisma__PassportClient<$Result.GetResult<Prisma.$PassportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Passports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassportCountArgs} args - Arguments to filter Passports to count.
     * @example
     * // Count the number of Passports
     * const count = await prisma.passport.count({
     *   where: {
     *     // ... the filter for the Passports we want to count
     *   }
     * })
    **/
    count<T extends PassportCountArgs>(
      args?: Subset<T, PassportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PassportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Passport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PassportAggregateArgs>(args: Subset<T, PassportAggregateArgs>): Prisma.PrismaPromise<GetPassportAggregateType<T>>

    /**
     * Group by Passport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PassportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PassportGroupByArgs['orderBy'] }
        : { orderBy?: PassportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PassportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPassportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Passport model
   */
  readonly fields: PassportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Passport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PassportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applicant<T extends ApplicantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicantDefaultArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Passport model
   */
  interface PassportFieldRefs {
    readonly id: FieldRef<"Passport", 'String'>
    readonly passportNumber: FieldRef<"Passport", 'String'>
    readonly issuedBy: FieldRef<"Passport", 'String'>
    readonly validFrom: FieldRef<"Passport", 'DateTime'>
    readonly validUntil: FieldRef<"Passport", 'DateTime'>
    readonly passportURL: FieldRef<"Passport", 'String'>
    readonly applicantId: FieldRef<"Passport", 'String'>
    readonly createdAt: FieldRef<"Passport", 'DateTime'>
    readonly updatedAt: FieldRef<"Passport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Passport findUnique
   */
  export type PassportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passport
     */
    select?: PassportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passport
     */
    omit?: PassportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassportInclude<ExtArgs> | null
    /**
     * Filter, which Passport to fetch.
     */
    where: PassportWhereUniqueInput
  }

  /**
   * Passport findUniqueOrThrow
   */
  export type PassportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passport
     */
    select?: PassportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passport
     */
    omit?: PassportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassportInclude<ExtArgs> | null
    /**
     * Filter, which Passport to fetch.
     */
    where: PassportWhereUniqueInput
  }

  /**
   * Passport findFirst
   */
  export type PassportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passport
     */
    select?: PassportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passport
     */
    omit?: PassportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassportInclude<ExtArgs> | null
    /**
     * Filter, which Passport to fetch.
     */
    where?: PassportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passports to fetch.
     */
    orderBy?: PassportOrderByWithRelationInput | PassportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passports.
     */
    cursor?: PassportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passports.
     */
    distinct?: PassportScalarFieldEnum | PassportScalarFieldEnum[]
  }

  /**
   * Passport findFirstOrThrow
   */
  export type PassportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passport
     */
    select?: PassportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passport
     */
    omit?: PassportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassportInclude<ExtArgs> | null
    /**
     * Filter, which Passport to fetch.
     */
    where?: PassportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passports to fetch.
     */
    orderBy?: PassportOrderByWithRelationInput | PassportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passports.
     */
    cursor?: PassportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passports.
     */
    distinct?: PassportScalarFieldEnum | PassportScalarFieldEnum[]
  }

  /**
   * Passport findMany
   */
  export type PassportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passport
     */
    select?: PassportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passport
     */
    omit?: PassportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassportInclude<ExtArgs> | null
    /**
     * Filter, which Passports to fetch.
     */
    where?: PassportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passports to fetch.
     */
    orderBy?: PassportOrderByWithRelationInput | PassportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Passports.
     */
    cursor?: PassportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passports.
     */
    skip?: number
    distinct?: PassportScalarFieldEnum | PassportScalarFieldEnum[]
  }

  /**
   * Passport create
   */
  export type PassportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passport
     */
    select?: PassportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passport
     */
    omit?: PassportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassportInclude<ExtArgs> | null
    /**
     * The data needed to create a Passport.
     */
    data: XOR<PassportCreateInput, PassportUncheckedCreateInput>
  }

  /**
   * Passport createMany
   */
  export type PassportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Passports.
     */
    data: PassportCreateManyInput | PassportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Passport createManyAndReturn
   */
  export type PassportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passport
     */
    select?: PassportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Passport
     */
    omit?: PassportOmit<ExtArgs> | null
    /**
     * The data used to create many Passports.
     */
    data: PassportCreateManyInput | PassportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Passport update
   */
  export type PassportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passport
     */
    select?: PassportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passport
     */
    omit?: PassportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassportInclude<ExtArgs> | null
    /**
     * The data needed to update a Passport.
     */
    data: XOR<PassportUpdateInput, PassportUncheckedUpdateInput>
    /**
     * Choose, which Passport to update.
     */
    where: PassportWhereUniqueInput
  }

  /**
   * Passport updateMany
   */
  export type PassportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Passports.
     */
    data: XOR<PassportUpdateManyMutationInput, PassportUncheckedUpdateManyInput>
    /**
     * Filter which Passports to update
     */
    where?: PassportWhereInput
    /**
     * Limit how many Passports to update.
     */
    limit?: number
  }

  /**
   * Passport updateManyAndReturn
   */
  export type PassportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passport
     */
    select?: PassportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Passport
     */
    omit?: PassportOmit<ExtArgs> | null
    /**
     * The data used to update Passports.
     */
    data: XOR<PassportUpdateManyMutationInput, PassportUncheckedUpdateManyInput>
    /**
     * Filter which Passports to update
     */
    where?: PassportWhereInput
    /**
     * Limit how many Passports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Passport upsert
   */
  export type PassportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passport
     */
    select?: PassportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passport
     */
    omit?: PassportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassportInclude<ExtArgs> | null
    /**
     * The filter to search for the Passport to update in case it exists.
     */
    where: PassportWhereUniqueInput
    /**
     * In case the Passport found by the `where` argument doesn't exist, create a new Passport with this data.
     */
    create: XOR<PassportCreateInput, PassportUncheckedCreateInput>
    /**
     * In case the Passport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PassportUpdateInput, PassportUncheckedUpdateInput>
  }

  /**
   * Passport delete
   */
  export type PassportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passport
     */
    select?: PassportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passport
     */
    omit?: PassportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassportInclude<ExtArgs> | null
    /**
     * Filter which Passport to delete.
     */
    where: PassportWhereUniqueInput
  }

  /**
   * Passport deleteMany
   */
  export type PassportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Passports to delete
     */
    where?: PassportWhereInput
    /**
     * Limit how many Passports to delete.
     */
    limit?: number
  }

  /**
   * Passport without action
   */
  export type PassportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passport
     */
    select?: PassportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passport
     */
    omit?: PassportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassportInclude<ExtArgs> | null
  }


  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: string | null
    applicantId: string | null
    jobOrderId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: string | null
    applicantId: string | null
    jobOrderId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    applicantId: number
    jobOrderId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApplicationMinAggregateInputType = {
    id?: true
    applicantId?: true
    jobOrderId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    applicantId?: true
    jobOrderId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    applicantId?: true
    jobOrderId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    id: string
    applicantId: string
    jobOrderId: string
    createdAt: Date
    updatedAt: Date
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicantId?: boolean
    jobOrderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
    jobOrder?: boolean | JobOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicantId?: boolean
    jobOrderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
    jobOrder?: boolean | JobOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicantId?: boolean
    jobOrderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
    jobOrder?: boolean | JobOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectScalar = {
    id?: boolean
    applicantId?: boolean
    jobOrderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicantId" | "jobOrderId" | "createdAt" | "updatedAt", ExtArgs["result"]["application"]>
  export type ApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
    jobOrder?: boolean | JobOrderDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
    jobOrder?: boolean | JobOrderDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
    jobOrder?: boolean | JobOrderDefaultArgs<ExtArgs>
  }

  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {
      applicant: Prisma.$ApplicantPayload<ExtArgs>
      jobOrder: Prisma.$JobOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      applicantId: string
      jobOrderId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["application"]>
    composites: {}
  }

  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = $Result.GetResult<Prisma.$ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFindUniqueArgs>(args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFindFirstArgs>(args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationFindManyArgs>(args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
     */
    create<T extends ApplicationCreateArgs>(args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationCreateManyArgs>(args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDeleteArgs>(args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationUpdateArgs>(args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDeleteManyArgs>(args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationUpdateManyArgs>(args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications and returns the data updated in the database.
     * @param {ApplicationUpdateManyAndReturnArgs} args - Arguments to update many Applications.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationUpsertArgs>(args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Application model
   */
  readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applicant<T extends ApplicantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicantDefaultArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    jobOrder<T extends JobOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobOrderDefaultArgs<ExtArgs>>): Prisma__JobOrderClient<$Result.GetResult<Prisma.$JobOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Application model
   */
  interface ApplicationFieldRefs {
    readonly id: FieldRef<"Application", 'String'>
    readonly applicantId: FieldRef<"Application", 'String'>
    readonly jobOrderId: FieldRef<"Application", 'String'>
    readonly createdAt: FieldRef<"Application", 'DateTime'>
    readonly updatedAt: FieldRef<"Application", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }

  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Application createManyAndReturn
   */
  export type ApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
  }

  /**
   * Application updateManyAndReturn
   */
  export type ApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }

  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to delete.
     */
    limit?: number
  }

  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
  }


  /**
   * Model Permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PermissionMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permission to aggregate.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithAggregationInput | PermissionOrderByWithAggregationInput[]
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum
    having?: PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }

  export type PermissionGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: PermissionCountAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type PermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    objectPermissions?: boolean | Permission$objectPermissionsArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["permission"]>
  export type PermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    objectPermissions?: boolean | Permission$objectPermissionsArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permission"
    objects: {
      objectPermissions: Prisma.$ObjectPermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["permission"]>
    composites: {}
  }

  type PermissionGetPayload<S extends boolean | null | undefined | PermissionDefaultArgs> = $Result.GetResult<Prisma.$PermissionPayload, S>

  type PermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface PermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permission'], meta: { name: 'Permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionFindUniqueArgs>(args: SelectSubset<T, PermissionFindUniqueArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionFindFirstArgs>(args?: SelectSubset<T, PermissionFindFirstArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissionFindManyArgs>(args?: SelectSubset<T, PermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
     */
    create<T extends PermissionCreateArgs>(args: SelectSubset<T, PermissionCreateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permissions.
     * @param {PermissionCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionCreateManyArgs>(args?: SelectSubset<T, PermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permissions and returns the data saved in the database.
     * @param {PermissionCreateManyAndReturnArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
     */
    delete<T extends PermissionDeleteArgs>(args: SelectSubset<T, PermissionDeleteArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionUpdateArgs>(args: SelectSubset<T, PermissionUpdateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionDeleteManyArgs>(args?: SelectSubset<T, PermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionUpdateManyArgs>(args: SelectSubset<T, PermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions and returns the data updated in the database.
     * @param {PermissionUpdateManyAndReturnArgs} args - Arguments to update many Permissions.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, PermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
     */
    upsert<T extends PermissionUpsertArgs>(args: SelectSubset<T, PermissionUpsertArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permission model
   */
  readonly fields: PermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    objectPermissions<T extends Permission$objectPermissionsArgs<ExtArgs> = {}>(args?: Subset<T, Permission$objectPermissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjectPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Permission model
   */
  interface PermissionFieldRefs {
    readonly id: FieldRef<"Permission", 'String'>
    readonly name: FieldRef<"Permission", 'String'>
    readonly description: FieldRef<"Permission", 'String'>
    readonly createdAt: FieldRef<"Permission", 'DateTime'>
    readonly updatedAt: FieldRef<"Permission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Permission findUnique
   */
  export type PermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findUniqueOrThrow
   */
  export type PermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findFirst
   */
  export type PermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findFirstOrThrow
   */
  export type PermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission create
   */
  export type PermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Permission.
     */
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
  }

  /**
   * Permission createMany
   */
  export type PermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission createManyAndReturn
   */
  export type PermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission update
   */
  export type PermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Permission.
     */
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
    /**
     * Choose, which Permission to update.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission updateManyAndReturn
   */
  export type PermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Permission to update in case it exists.
     */
    where: PermissionWhereUniqueInput
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     */
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
  }

  /**
   * Permission delete
   */
  export type PermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter which Permission to delete.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to delete.
     */
    limit?: number
  }

  /**
   * Permission.objectPermissions
   */
  export type Permission$objectPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectPermission
     */
    select?: ObjectPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectPermission
     */
    omit?: ObjectPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectPermissionInclude<ExtArgs> | null
    where?: ObjectPermissionWhereInput
    orderBy?: ObjectPermissionOrderByWithRelationInput | ObjectPermissionOrderByWithRelationInput[]
    cursor?: ObjectPermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObjectPermissionScalarFieldEnum | ObjectPermissionScalarFieldEnum[]
  }

  /**
   * Permission without action
   */
  export type PermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
  }


  /**
   * Model ObjectPermission
   */

  export type AggregateObjectPermission = {
    _count: ObjectPermissionCountAggregateOutputType | null
    _min: ObjectPermissionMinAggregateOutputType | null
    _max: ObjectPermissionMaxAggregateOutputType | null
  }

  export type ObjectPermissionMinAggregateOutputType = {
    id: string | null
    permissionId: string | null
    subjectId: string | null
    subjectType: $Enums.PermissionSubjectType | null
    objectId: string | null
    effect: $Enums.PermissionEffect | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ObjectPermissionMaxAggregateOutputType = {
    id: string | null
    permissionId: string | null
    subjectId: string | null
    subjectType: $Enums.PermissionSubjectType | null
    objectId: string | null
    effect: $Enums.PermissionEffect | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ObjectPermissionCountAggregateOutputType = {
    id: number
    permissionId: number
    subjectId: number
    subjectType: number
    objectId: number
    effect: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ObjectPermissionMinAggregateInputType = {
    id?: true
    permissionId?: true
    subjectId?: true
    subjectType?: true
    objectId?: true
    effect?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ObjectPermissionMaxAggregateInputType = {
    id?: true
    permissionId?: true
    subjectId?: true
    subjectType?: true
    objectId?: true
    effect?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ObjectPermissionCountAggregateInputType = {
    id?: true
    permissionId?: true
    subjectId?: true
    subjectType?: true
    objectId?: true
    effect?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ObjectPermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ObjectPermission to aggregate.
     */
    where?: ObjectPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObjectPermissions to fetch.
     */
    orderBy?: ObjectPermissionOrderByWithRelationInput | ObjectPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObjectPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObjectPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObjectPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ObjectPermissions
    **/
    _count?: true | ObjectPermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObjectPermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObjectPermissionMaxAggregateInputType
  }

  export type GetObjectPermissionAggregateType<T extends ObjectPermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateObjectPermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObjectPermission[P]>
      : GetScalarType<T[P], AggregateObjectPermission[P]>
  }




  export type ObjectPermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObjectPermissionWhereInput
    orderBy?: ObjectPermissionOrderByWithAggregationInput | ObjectPermissionOrderByWithAggregationInput[]
    by: ObjectPermissionScalarFieldEnum[] | ObjectPermissionScalarFieldEnum
    having?: ObjectPermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObjectPermissionCountAggregateInputType | true
    _min?: ObjectPermissionMinAggregateInputType
    _max?: ObjectPermissionMaxAggregateInputType
  }

  export type ObjectPermissionGroupByOutputType = {
    id: string
    permissionId: string
    subjectId: string
    subjectType: $Enums.PermissionSubjectType
    objectId: string
    effect: $Enums.PermissionEffect
    createdAt: Date
    updatedAt: Date
    _count: ObjectPermissionCountAggregateOutputType | null
    _min: ObjectPermissionMinAggregateOutputType | null
    _max: ObjectPermissionMaxAggregateOutputType | null
  }

  type GetObjectPermissionGroupByPayload<T extends ObjectPermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObjectPermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObjectPermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObjectPermissionGroupByOutputType[P]>
            : GetScalarType<T[P], ObjectPermissionGroupByOutputType[P]>
        }
      >
    >


  export type ObjectPermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    permissionId?: boolean
    subjectId?: boolean
    subjectType?: boolean
    objectId?: boolean
    effect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["objectPermission"]>

  export type ObjectPermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    permissionId?: boolean
    subjectId?: boolean
    subjectType?: boolean
    objectId?: boolean
    effect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["objectPermission"]>

  export type ObjectPermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    permissionId?: boolean
    subjectId?: boolean
    subjectType?: boolean
    objectId?: boolean
    effect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["objectPermission"]>

  export type ObjectPermissionSelectScalar = {
    id?: boolean
    permissionId?: boolean
    subjectId?: boolean
    subjectType?: boolean
    objectId?: boolean
    effect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ObjectPermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "permissionId" | "subjectId" | "subjectType" | "objectId" | "effect" | "createdAt" | "updatedAt", ExtArgs["result"]["objectPermission"]>
  export type ObjectPermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }
  export type ObjectPermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }
  export type ObjectPermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }

  export type $ObjectPermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ObjectPermission"
    objects: {
      permission: Prisma.$PermissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      permissionId: string
      subjectId: string
      subjectType: $Enums.PermissionSubjectType
      objectId: string
      effect: $Enums.PermissionEffect
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["objectPermission"]>
    composites: {}
  }

  type ObjectPermissionGetPayload<S extends boolean | null | undefined | ObjectPermissionDefaultArgs> = $Result.GetResult<Prisma.$ObjectPermissionPayload, S>

  type ObjectPermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ObjectPermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ObjectPermissionCountAggregateInputType | true
    }

  export interface ObjectPermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ObjectPermission'], meta: { name: 'ObjectPermission' } }
    /**
     * Find zero or one ObjectPermission that matches the filter.
     * @param {ObjectPermissionFindUniqueArgs} args - Arguments to find a ObjectPermission
     * @example
     * // Get one ObjectPermission
     * const objectPermission = await prisma.objectPermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ObjectPermissionFindUniqueArgs>(args: SelectSubset<T, ObjectPermissionFindUniqueArgs<ExtArgs>>): Prisma__ObjectPermissionClient<$Result.GetResult<Prisma.$ObjectPermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ObjectPermission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ObjectPermissionFindUniqueOrThrowArgs} args - Arguments to find a ObjectPermission
     * @example
     * // Get one ObjectPermission
     * const objectPermission = await prisma.objectPermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ObjectPermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, ObjectPermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ObjectPermissionClient<$Result.GetResult<Prisma.$ObjectPermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ObjectPermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectPermissionFindFirstArgs} args - Arguments to find a ObjectPermission
     * @example
     * // Get one ObjectPermission
     * const objectPermission = await prisma.objectPermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ObjectPermissionFindFirstArgs>(args?: SelectSubset<T, ObjectPermissionFindFirstArgs<ExtArgs>>): Prisma__ObjectPermissionClient<$Result.GetResult<Prisma.$ObjectPermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ObjectPermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectPermissionFindFirstOrThrowArgs} args - Arguments to find a ObjectPermission
     * @example
     * // Get one ObjectPermission
     * const objectPermission = await prisma.objectPermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ObjectPermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, ObjectPermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ObjectPermissionClient<$Result.GetResult<Prisma.$ObjectPermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ObjectPermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectPermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ObjectPermissions
     * const objectPermissions = await prisma.objectPermission.findMany()
     * 
     * // Get first 10 ObjectPermissions
     * const objectPermissions = await prisma.objectPermission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const objectPermissionWithIdOnly = await prisma.objectPermission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ObjectPermissionFindManyArgs>(args?: SelectSubset<T, ObjectPermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjectPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ObjectPermission.
     * @param {ObjectPermissionCreateArgs} args - Arguments to create a ObjectPermission.
     * @example
     * // Create one ObjectPermission
     * const ObjectPermission = await prisma.objectPermission.create({
     *   data: {
     *     // ... data to create a ObjectPermission
     *   }
     * })
     * 
     */
    create<T extends ObjectPermissionCreateArgs>(args: SelectSubset<T, ObjectPermissionCreateArgs<ExtArgs>>): Prisma__ObjectPermissionClient<$Result.GetResult<Prisma.$ObjectPermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ObjectPermissions.
     * @param {ObjectPermissionCreateManyArgs} args - Arguments to create many ObjectPermissions.
     * @example
     * // Create many ObjectPermissions
     * const objectPermission = await prisma.objectPermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ObjectPermissionCreateManyArgs>(args?: SelectSubset<T, ObjectPermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ObjectPermissions and returns the data saved in the database.
     * @param {ObjectPermissionCreateManyAndReturnArgs} args - Arguments to create many ObjectPermissions.
     * @example
     * // Create many ObjectPermissions
     * const objectPermission = await prisma.objectPermission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ObjectPermissions and only return the `id`
     * const objectPermissionWithIdOnly = await prisma.objectPermission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ObjectPermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, ObjectPermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjectPermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ObjectPermission.
     * @param {ObjectPermissionDeleteArgs} args - Arguments to delete one ObjectPermission.
     * @example
     * // Delete one ObjectPermission
     * const ObjectPermission = await prisma.objectPermission.delete({
     *   where: {
     *     // ... filter to delete one ObjectPermission
     *   }
     * })
     * 
     */
    delete<T extends ObjectPermissionDeleteArgs>(args: SelectSubset<T, ObjectPermissionDeleteArgs<ExtArgs>>): Prisma__ObjectPermissionClient<$Result.GetResult<Prisma.$ObjectPermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ObjectPermission.
     * @param {ObjectPermissionUpdateArgs} args - Arguments to update one ObjectPermission.
     * @example
     * // Update one ObjectPermission
     * const objectPermission = await prisma.objectPermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ObjectPermissionUpdateArgs>(args: SelectSubset<T, ObjectPermissionUpdateArgs<ExtArgs>>): Prisma__ObjectPermissionClient<$Result.GetResult<Prisma.$ObjectPermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ObjectPermissions.
     * @param {ObjectPermissionDeleteManyArgs} args - Arguments to filter ObjectPermissions to delete.
     * @example
     * // Delete a few ObjectPermissions
     * const { count } = await prisma.objectPermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ObjectPermissionDeleteManyArgs>(args?: SelectSubset<T, ObjectPermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ObjectPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectPermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ObjectPermissions
     * const objectPermission = await prisma.objectPermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ObjectPermissionUpdateManyArgs>(args: SelectSubset<T, ObjectPermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ObjectPermissions and returns the data updated in the database.
     * @param {ObjectPermissionUpdateManyAndReturnArgs} args - Arguments to update many ObjectPermissions.
     * @example
     * // Update many ObjectPermissions
     * const objectPermission = await prisma.objectPermission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ObjectPermissions and only return the `id`
     * const objectPermissionWithIdOnly = await prisma.objectPermission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ObjectPermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, ObjectPermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjectPermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ObjectPermission.
     * @param {ObjectPermissionUpsertArgs} args - Arguments to update or create a ObjectPermission.
     * @example
     * // Update or create a ObjectPermission
     * const objectPermission = await prisma.objectPermission.upsert({
     *   create: {
     *     // ... data to create a ObjectPermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ObjectPermission we want to update
     *   }
     * })
     */
    upsert<T extends ObjectPermissionUpsertArgs>(args: SelectSubset<T, ObjectPermissionUpsertArgs<ExtArgs>>): Prisma__ObjectPermissionClient<$Result.GetResult<Prisma.$ObjectPermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ObjectPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectPermissionCountArgs} args - Arguments to filter ObjectPermissions to count.
     * @example
     * // Count the number of ObjectPermissions
     * const count = await prisma.objectPermission.count({
     *   where: {
     *     // ... the filter for the ObjectPermissions we want to count
     *   }
     * })
    **/
    count<T extends ObjectPermissionCountArgs>(
      args?: Subset<T, ObjectPermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObjectPermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ObjectPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectPermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ObjectPermissionAggregateArgs>(args: Subset<T, ObjectPermissionAggregateArgs>): Prisma.PrismaPromise<GetObjectPermissionAggregateType<T>>

    /**
     * Group by ObjectPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectPermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ObjectPermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObjectPermissionGroupByArgs['orderBy'] }
        : { orderBy?: ObjectPermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ObjectPermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObjectPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ObjectPermission model
   */
  readonly fields: ObjectPermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ObjectPermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObjectPermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    permission<T extends PermissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermissionDefaultArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ObjectPermission model
   */
  interface ObjectPermissionFieldRefs {
    readonly id: FieldRef<"ObjectPermission", 'String'>
    readonly permissionId: FieldRef<"ObjectPermission", 'String'>
    readonly subjectId: FieldRef<"ObjectPermission", 'String'>
    readonly subjectType: FieldRef<"ObjectPermission", 'PermissionSubjectType'>
    readonly objectId: FieldRef<"ObjectPermission", 'String'>
    readonly effect: FieldRef<"ObjectPermission", 'PermissionEffect'>
    readonly createdAt: FieldRef<"ObjectPermission", 'DateTime'>
    readonly updatedAt: FieldRef<"ObjectPermission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ObjectPermission findUnique
   */
  export type ObjectPermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectPermission
     */
    select?: ObjectPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectPermission
     */
    omit?: ObjectPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectPermissionInclude<ExtArgs> | null
    /**
     * Filter, which ObjectPermission to fetch.
     */
    where: ObjectPermissionWhereUniqueInput
  }

  /**
   * ObjectPermission findUniqueOrThrow
   */
  export type ObjectPermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectPermission
     */
    select?: ObjectPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectPermission
     */
    omit?: ObjectPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectPermissionInclude<ExtArgs> | null
    /**
     * Filter, which ObjectPermission to fetch.
     */
    where: ObjectPermissionWhereUniqueInput
  }

  /**
   * ObjectPermission findFirst
   */
  export type ObjectPermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectPermission
     */
    select?: ObjectPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectPermission
     */
    omit?: ObjectPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectPermissionInclude<ExtArgs> | null
    /**
     * Filter, which ObjectPermission to fetch.
     */
    where?: ObjectPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObjectPermissions to fetch.
     */
    orderBy?: ObjectPermissionOrderByWithRelationInput | ObjectPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ObjectPermissions.
     */
    cursor?: ObjectPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObjectPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObjectPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ObjectPermissions.
     */
    distinct?: ObjectPermissionScalarFieldEnum | ObjectPermissionScalarFieldEnum[]
  }

  /**
   * ObjectPermission findFirstOrThrow
   */
  export type ObjectPermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectPermission
     */
    select?: ObjectPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectPermission
     */
    omit?: ObjectPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectPermissionInclude<ExtArgs> | null
    /**
     * Filter, which ObjectPermission to fetch.
     */
    where?: ObjectPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObjectPermissions to fetch.
     */
    orderBy?: ObjectPermissionOrderByWithRelationInput | ObjectPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ObjectPermissions.
     */
    cursor?: ObjectPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObjectPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObjectPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ObjectPermissions.
     */
    distinct?: ObjectPermissionScalarFieldEnum | ObjectPermissionScalarFieldEnum[]
  }

  /**
   * ObjectPermission findMany
   */
  export type ObjectPermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectPermission
     */
    select?: ObjectPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectPermission
     */
    omit?: ObjectPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectPermissionInclude<ExtArgs> | null
    /**
     * Filter, which ObjectPermissions to fetch.
     */
    where?: ObjectPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObjectPermissions to fetch.
     */
    orderBy?: ObjectPermissionOrderByWithRelationInput | ObjectPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ObjectPermissions.
     */
    cursor?: ObjectPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObjectPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObjectPermissions.
     */
    skip?: number
    distinct?: ObjectPermissionScalarFieldEnum | ObjectPermissionScalarFieldEnum[]
  }

  /**
   * ObjectPermission create
   */
  export type ObjectPermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectPermission
     */
    select?: ObjectPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectPermission
     */
    omit?: ObjectPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectPermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a ObjectPermission.
     */
    data: XOR<ObjectPermissionCreateInput, ObjectPermissionUncheckedCreateInput>
  }

  /**
   * ObjectPermission createMany
   */
  export type ObjectPermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ObjectPermissions.
     */
    data: ObjectPermissionCreateManyInput | ObjectPermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ObjectPermission createManyAndReturn
   */
  export type ObjectPermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectPermission
     */
    select?: ObjectPermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectPermission
     */
    omit?: ObjectPermissionOmit<ExtArgs> | null
    /**
     * The data used to create many ObjectPermissions.
     */
    data: ObjectPermissionCreateManyInput | ObjectPermissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectPermissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ObjectPermission update
   */
  export type ObjectPermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectPermission
     */
    select?: ObjectPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectPermission
     */
    omit?: ObjectPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectPermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a ObjectPermission.
     */
    data: XOR<ObjectPermissionUpdateInput, ObjectPermissionUncheckedUpdateInput>
    /**
     * Choose, which ObjectPermission to update.
     */
    where: ObjectPermissionWhereUniqueInput
  }

  /**
   * ObjectPermission updateMany
   */
  export type ObjectPermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ObjectPermissions.
     */
    data: XOR<ObjectPermissionUpdateManyMutationInput, ObjectPermissionUncheckedUpdateManyInput>
    /**
     * Filter which ObjectPermissions to update
     */
    where?: ObjectPermissionWhereInput
    /**
     * Limit how many ObjectPermissions to update.
     */
    limit?: number
  }

  /**
   * ObjectPermission updateManyAndReturn
   */
  export type ObjectPermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectPermission
     */
    select?: ObjectPermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectPermission
     */
    omit?: ObjectPermissionOmit<ExtArgs> | null
    /**
     * The data used to update ObjectPermissions.
     */
    data: XOR<ObjectPermissionUpdateManyMutationInput, ObjectPermissionUncheckedUpdateManyInput>
    /**
     * Filter which ObjectPermissions to update
     */
    where?: ObjectPermissionWhereInput
    /**
     * Limit how many ObjectPermissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectPermissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ObjectPermission upsert
   */
  export type ObjectPermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectPermission
     */
    select?: ObjectPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectPermission
     */
    omit?: ObjectPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectPermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the ObjectPermission to update in case it exists.
     */
    where: ObjectPermissionWhereUniqueInput
    /**
     * In case the ObjectPermission found by the `where` argument doesn't exist, create a new ObjectPermission with this data.
     */
    create: XOR<ObjectPermissionCreateInput, ObjectPermissionUncheckedCreateInput>
    /**
     * In case the ObjectPermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObjectPermissionUpdateInput, ObjectPermissionUncheckedUpdateInput>
  }

  /**
   * ObjectPermission delete
   */
  export type ObjectPermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectPermission
     */
    select?: ObjectPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectPermission
     */
    omit?: ObjectPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectPermissionInclude<ExtArgs> | null
    /**
     * Filter which ObjectPermission to delete.
     */
    where: ObjectPermissionWhereUniqueInput
  }

  /**
   * ObjectPermission deleteMany
   */
  export type ObjectPermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ObjectPermissions to delete
     */
    where?: ObjectPermissionWhereInput
    /**
     * Limit how many ObjectPermissions to delete.
     */
    limit?: number
  }

  /**
   * ObjectPermission without action
   */
  export type ObjectPermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectPermission
     */
    select?: ObjectPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjectPermission
     */
    omit?: ObjectPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectPermissionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    primaryContact: 'primaryContact',
    areaCode: 'areaCode',
    phoneNumber: 'phoneNumber',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const JobOrderScalarFieldEnum: {
    id: 'id',
    employer: 'employer',
    position: 'position',
    salary: 'salary',
    currency: 'currency',
    headcount: 'headcount',
    location: 'location',
    status: 'status',
    clientId: 'clientId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobOrderScalarFieldEnum = (typeof JobOrderScalarFieldEnum)[keyof typeof JobOrderScalarFieldEnum]


  export const VisaScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    issuedBy: 'issuedBy',
    position: 'position',
    validFrom: 'validFrom',
    validUntil: 'validUntil',
    status: 'status',
    jobOrderId: 'jobOrderId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VisaScalarFieldEnum = (typeof VisaScalarFieldEnum)[keyof typeof VisaScalarFieldEnum]


  export const ApplicantScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    password: 'password',
    areaCode: 'areaCode',
    phoneNumber: 'phoneNumber',
    resumeURL: 'resumeURL',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApplicantScalarFieldEnum = (typeof ApplicantScalarFieldEnum)[keyof typeof ApplicantScalarFieldEnum]


  export const PassportScalarFieldEnum: {
    id: 'id',
    passportNumber: 'passportNumber',
    issuedBy: 'issuedBy',
    validFrom: 'validFrom',
    validUntil: 'validUntil',
    passportURL: 'passportURL',
    applicantId: 'applicantId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PassportScalarFieldEnum = (typeof PassportScalarFieldEnum)[keyof typeof PassportScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    applicantId: 'applicantId',
    jobOrderId: 'jobOrderId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const ObjectPermissionScalarFieldEnum: {
    id: 'id',
    permissionId: 'permissionId',
    subjectId: 'subjectId',
    subjectType: 'subjectType',
    objectId: 'objectId',
    effect: 'effect',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ObjectPermissionScalarFieldEnum = (typeof ObjectPermissionScalarFieldEnum)[keyof typeof ObjectPermissionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'JobOrderStatus'
   */
  export type EnumJobOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobOrderStatus'>
    


  /**
   * Reference to a field of type 'JobOrderStatus[]'
   */
  export type ListEnumJobOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobOrderStatus[]'>
    


  /**
   * Reference to a field of type 'VisaStatus'
   */
  export type EnumVisaStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VisaStatus'>
    


  /**
   * Reference to a field of type 'VisaStatus[]'
   */
  export type ListEnumVisaStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VisaStatus[]'>
    


  /**
   * Reference to a field of type 'PermissionSubjectType'
   */
  export type EnumPermissionSubjectTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PermissionSubjectType'>
    


  /**
   * Reference to a field of type 'PermissionSubjectType[]'
   */
  export type ListEnumPermissionSubjectTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PermissionSubjectType[]'>
    


  /**
   * Reference to a field of type 'PermissionEffect'
   */
  export type EnumPermissionEffectFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PermissionEffect'>
    


  /**
   * Reference to a field of type 'PermissionEffect[]'
   */
  export type ListEnumPermissionEffectFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PermissionEffect[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstname?: StringWithAggregatesFilter<"User"> | string
    lastname?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    primaryContact?: StringFilter<"Client"> | string
    areaCode?: StringFilter<"Client"> | string
    phoneNumber?: StringFilter<"Client"> | string
    address?: JsonFilter<"Client">
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    jobOrders?: JobOrderListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    primaryContact?: SortOrder
    areaCode?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobOrders?: JobOrderOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    email?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    primaryContact?: StringFilter<"Client"> | string
    areaCode?: StringFilter<"Client"> | string
    phoneNumber?: StringFilter<"Client"> | string
    address?: JsonFilter<"Client">
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    jobOrders?: JobOrderListRelationFilter
  }, "id" | "name" | "email">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    primaryContact?: SortOrder
    areaCode?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    name?: StringWithAggregatesFilter<"Client"> | string
    email?: StringWithAggregatesFilter<"Client"> | string
    primaryContact?: StringWithAggregatesFilter<"Client"> | string
    areaCode?: StringWithAggregatesFilter<"Client"> | string
    phoneNumber?: StringWithAggregatesFilter<"Client"> | string
    address?: JsonWithAggregatesFilter<"Client">
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type JobOrderWhereInput = {
    AND?: JobOrderWhereInput | JobOrderWhereInput[]
    OR?: JobOrderWhereInput[]
    NOT?: JobOrderWhereInput | JobOrderWhereInput[]
    id?: StringFilter<"JobOrder"> | string
    employer?: StringFilter<"JobOrder"> | string
    position?: StringFilter<"JobOrder"> | string
    salary?: IntFilter<"JobOrder"> | number
    currency?: StringFilter<"JobOrder"> | string
    headcount?: IntFilter<"JobOrder"> | number
    location?: JsonFilter<"JobOrder">
    status?: EnumJobOrderStatusFilter<"JobOrder"> | $Enums.JobOrderStatus
    clientId?: StringFilter<"JobOrder"> | string
    createdAt?: DateTimeFilter<"JobOrder"> | Date | string
    updatedAt?: DateTimeFilter<"JobOrder"> | Date | string
    visas?: VisaListRelationFilter
    applications?: ApplicationListRelationFilter
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type JobOrderOrderByWithRelationInput = {
    id?: SortOrder
    employer?: SortOrder
    position?: SortOrder
    salary?: SortOrder
    currency?: SortOrder
    headcount?: SortOrder
    location?: SortOrder
    status?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    visas?: VisaOrderByRelationAggregateInput
    applications?: ApplicationOrderByRelationAggregateInput
    client?: ClientOrderByWithRelationInput
  }

  export type JobOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobOrderWhereInput | JobOrderWhereInput[]
    OR?: JobOrderWhereInput[]
    NOT?: JobOrderWhereInput | JobOrderWhereInput[]
    employer?: StringFilter<"JobOrder"> | string
    position?: StringFilter<"JobOrder"> | string
    salary?: IntFilter<"JobOrder"> | number
    currency?: StringFilter<"JobOrder"> | string
    headcount?: IntFilter<"JobOrder"> | number
    location?: JsonFilter<"JobOrder">
    status?: EnumJobOrderStatusFilter<"JobOrder"> | $Enums.JobOrderStatus
    clientId?: StringFilter<"JobOrder"> | string
    createdAt?: DateTimeFilter<"JobOrder"> | Date | string
    updatedAt?: DateTimeFilter<"JobOrder"> | Date | string
    visas?: VisaListRelationFilter
    applications?: ApplicationListRelationFilter
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id">

  export type JobOrderOrderByWithAggregationInput = {
    id?: SortOrder
    employer?: SortOrder
    position?: SortOrder
    salary?: SortOrder
    currency?: SortOrder
    headcount?: SortOrder
    location?: SortOrder
    status?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobOrderCountOrderByAggregateInput
    _avg?: JobOrderAvgOrderByAggregateInput
    _max?: JobOrderMaxOrderByAggregateInput
    _min?: JobOrderMinOrderByAggregateInput
    _sum?: JobOrderSumOrderByAggregateInput
  }

  export type JobOrderScalarWhereWithAggregatesInput = {
    AND?: JobOrderScalarWhereWithAggregatesInput | JobOrderScalarWhereWithAggregatesInput[]
    OR?: JobOrderScalarWhereWithAggregatesInput[]
    NOT?: JobOrderScalarWhereWithAggregatesInput | JobOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobOrder"> | string
    employer?: StringWithAggregatesFilter<"JobOrder"> | string
    position?: StringWithAggregatesFilter<"JobOrder"> | string
    salary?: IntWithAggregatesFilter<"JobOrder"> | number
    currency?: StringWithAggregatesFilter<"JobOrder"> | string
    headcount?: IntWithAggregatesFilter<"JobOrder"> | number
    location?: JsonWithAggregatesFilter<"JobOrder">
    status?: EnumJobOrderStatusWithAggregatesFilter<"JobOrder"> | $Enums.JobOrderStatus
    clientId?: StringWithAggregatesFilter<"JobOrder"> | string
    createdAt?: DateTimeWithAggregatesFilter<"JobOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobOrder"> | Date | string
  }

  export type VisaWhereInput = {
    AND?: VisaWhereInput | VisaWhereInput[]
    OR?: VisaWhereInput[]
    NOT?: VisaWhereInput | VisaWhereInput[]
    id?: StringFilter<"Visa"> | string
    identifier?: StringFilter<"Visa"> | string
    issuedBy?: StringFilter<"Visa"> | string
    position?: StringFilter<"Visa"> | string
    validFrom?: DateTimeFilter<"Visa"> | Date | string
    validUntil?: DateTimeFilter<"Visa"> | Date | string
    status?: EnumVisaStatusFilter<"Visa"> | $Enums.VisaStatus
    jobOrderId?: StringFilter<"Visa"> | string
    createdAt?: DateTimeFilter<"Visa"> | Date | string
    updatedAt?: DateTimeFilter<"Visa"> | Date | string
    jobOrder?: XOR<JobOrderScalarRelationFilter, JobOrderWhereInput>
  }

  export type VisaOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    issuedBy?: SortOrder
    position?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    status?: SortOrder
    jobOrderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobOrder?: JobOrderOrderByWithRelationInput
  }

  export type VisaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    identifier?: string
    AND?: VisaWhereInput | VisaWhereInput[]
    OR?: VisaWhereInput[]
    NOT?: VisaWhereInput | VisaWhereInput[]
    issuedBy?: StringFilter<"Visa"> | string
    position?: StringFilter<"Visa"> | string
    validFrom?: DateTimeFilter<"Visa"> | Date | string
    validUntil?: DateTimeFilter<"Visa"> | Date | string
    status?: EnumVisaStatusFilter<"Visa"> | $Enums.VisaStatus
    jobOrderId?: StringFilter<"Visa"> | string
    createdAt?: DateTimeFilter<"Visa"> | Date | string
    updatedAt?: DateTimeFilter<"Visa"> | Date | string
    jobOrder?: XOR<JobOrderScalarRelationFilter, JobOrderWhereInput>
  }, "id" | "identifier">

  export type VisaOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    issuedBy?: SortOrder
    position?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    status?: SortOrder
    jobOrderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VisaCountOrderByAggregateInput
    _max?: VisaMaxOrderByAggregateInput
    _min?: VisaMinOrderByAggregateInput
  }

  export type VisaScalarWhereWithAggregatesInput = {
    AND?: VisaScalarWhereWithAggregatesInput | VisaScalarWhereWithAggregatesInput[]
    OR?: VisaScalarWhereWithAggregatesInput[]
    NOT?: VisaScalarWhereWithAggregatesInput | VisaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Visa"> | string
    identifier?: StringWithAggregatesFilter<"Visa"> | string
    issuedBy?: StringWithAggregatesFilter<"Visa"> | string
    position?: StringWithAggregatesFilter<"Visa"> | string
    validFrom?: DateTimeWithAggregatesFilter<"Visa"> | Date | string
    validUntil?: DateTimeWithAggregatesFilter<"Visa"> | Date | string
    status?: EnumVisaStatusWithAggregatesFilter<"Visa"> | $Enums.VisaStatus
    jobOrderId?: StringWithAggregatesFilter<"Visa"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Visa"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Visa"> | Date | string
  }

  export type ApplicantWhereInput = {
    AND?: ApplicantWhereInput | ApplicantWhereInput[]
    OR?: ApplicantWhereInput[]
    NOT?: ApplicantWhereInput | ApplicantWhereInput[]
    id?: StringFilter<"Applicant"> | string
    firstname?: StringFilter<"Applicant"> | string
    lastname?: StringFilter<"Applicant"> | string
    email?: StringFilter<"Applicant"> | string
    password?: StringFilter<"Applicant"> | string
    areaCode?: StringFilter<"Applicant"> | string
    phoneNumber?: StringFilter<"Applicant"> | string
    resumeURL?: StringNullableFilter<"Applicant"> | string | null
    createdAt?: DateTimeFilter<"Applicant"> | Date | string
    updatedAt?: DateTimeFilter<"Applicant"> | Date | string
    applications?: ApplicationListRelationFilter
    passport?: XOR<PassportNullableScalarRelationFilter, PassportWhereInput> | null
  }

  export type ApplicantOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    areaCode?: SortOrder
    phoneNumber?: SortOrder
    resumeURL?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applications?: ApplicationOrderByRelationAggregateInput
    passport?: PassportOrderByWithRelationInput
  }

  export type ApplicantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    password?: string
    phoneNumber?: string
    AND?: ApplicantWhereInput | ApplicantWhereInput[]
    OR?: ApplicantWhereInput[]
    NOT?: ApplicantWhereInput | ApplicantWhereInput[]
    firstname?: StringFilter<"Applicant"> | string
    lastname?: StringFilter<"Applicant"> | string
    areaCode?: StringFilter<"Applicant"> | string
    resumeURL?: StringNullableFilter<"Applicant"> | string | null
    createdAt?: DateTimeFilter<"Applicant"> | Date | string
    updatedAt?: DateTimeFilter<"Applicant"> | Date | string
    applications?: ApplicationListRelationFilter
    passport?: XOR<PassportNullableScalarRelationFilter, PassportWhereInput> | null
  }, "id" | "email" | "password" | "phoneNumber">

  export type ApplicantOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    areaCode?: SortOrder
    phoneNumber?: SortOrder
    resumeURL?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApplicantCountOrderByAggregateInput
    _max?: ApplicantMaxOrderByAggregateInput
    _min?: ApplicantMinOrderByAggregateInput
  }

  export type ApplicantScalarWhereWithAggregatesInput = {
    AND?: ApplicantScalarWhereWithAggregatesInput | ApplicantScalarWhereWithAggregatesInput[]
    OR?: ApplicantScalarWhereWithAggregatesInput[]
    NOT?: ApplicantScalarWhereWithAggregatesInput | ApplicantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Applicant"> | string
    firstname?: StringWithAggregatesFilter<"Applicant"> | string
    lastname?: StringWithAggregatesFilter<"Applicant"> | string
    email?: StringWithAggregatesFilter<"Applicant"> | string
    password?: StringWithAggregatesFilter<"Applicant"> | string
    areaCode?: StringWithAggregatesFilter<"Applicant"> | string
    phoneNumber?: StringWithAggregatesFilter<"Applicant"> | string
    resumeURL?: StringNullableWithAggregatesFilter<"Applicant"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Applicant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Applicant"> | Date | string
  }

  export type PassportWhereInput = {
    AND?: PassportWhereInput | PassportWhereInput[]
    OR?: PassportWhereInput[]
    NOT?: PassportWhereInput | PassportWhereInput[]
    id?: StringFilter<"Passport"> | string
    passportNumber?: StringFilter<"Passport"> | string
    issuedBy?: StringFilter<"Passport"> | string
    validFrom?: DateTimeFilter<"Passport"> | Date | string
    validUntil?: DateTimeFilter<"Passport"> | Date | string
    passportURL?: StringFilter<"Passport"> | string
    applicantId?: StringFilter<"Passport"> | string
    createdAt?: DateTimeFilter<"Passport"> | Date | string
    updatedAt?: DateTimeFilter<"Passport"> | Date | string
    applicant?: XOR<ApplicantScalarRelationFilter, ApplicantWhereInput>
  }

  export type PassportOrderByWithRelationInput = {
    id?: SortOrder
    passportNumber?: SortOrder
    issuedBy?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    passportURL?: SortOrder
    applicantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applicant?: ApplicantOrderByWithRelationInput
  }

  export type PassportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    passportNumber?: string
    applicantId?: string
    AND?: PassportWhereInput | PassportWhereInput[]
    OR?: PassportWhereInput[]
    NOT?: PassportWhereInput | PassportWhereInput[]
    issuedBy?: StringFilter<"Passport"> | string
    validFrom?: DateTimeFilter<"Passport"> | Date | string
    validUntil?: DateTimeFilter<"Passport"> | Date | string
    passportURL?: StringFilter<"Passport"> | string
    createdAt?: DateTimeFilter<"Passport"> | Date | string
    updatedAt?: DateTimeFilter<"Passport"> | Date | string
    applicant?: XOR<ApplicantScalarRelationFilter, ApplicantWhereInput>
  }, "id" | "passportNumber" | "applicantId">

  export type PassportOrderByWithAggregationInput = {
    id?: SortOrder
    passportNumber?: SortOrder
    issuedBy?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    passportURL?: SortOrder
    applicantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PassportCountOrderByAggregateInput
    _max?: PassportMaxOrderByAggregateInput
    _min?: PassportMinOrderByAggregateInput
  }

  export type PassportScalarWhereWithAggregatesInput = {
    AND?: PassportScalarWhereWithAggregatesInput | PassportScalarWhereWithAggregatesInput[]
    OR?: PassportScalarWhereWithAggregatesInput[]
    NOT?: PassportScalarWhereWithAggregatesInput | PassportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Passport"> | string
    passportNumber?: StringWithAggregatesFilter<"Passport"> | string
    issuedBy?: StringWithAggregatesFilter<"Passport"> | string
    validFrom?: DateTimeWithAggregatesFilter<"Passport"> | Date | string
    validUntil?: DateTimeWithAggregatesFilter<"Passport"> | Date | string
    passportURL?: StringWithAggregatesFilter<"Passport"> | string
    applicantId?: StringWithAggregatesFilter<"Passport"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Passport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Passport"> | Date | string
  }

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    id?: StringFilter<"Application"> | string
    applicantId?: StringFilter<"Application"> | string
    jobOrderId?: StringFilter<"Application"> | string
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
    applicant?: XOR<ApplicantScalarRelationFilter, ApplicantWhereInput>
    jobOrder?: XOR<JobOrderScalarRelationFilter, JobOrderWhereInput>
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    applicantId?: SortOrder
    jobOrderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applicant?: ApplicantOrderByWithRelationInput
    jobOrder?: JobOrderOrderByWithRelationInput
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    applicantId_jobOrderId?: ApplicationApplicantIdJobOrderIdCompoundUniqueInput
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    applicantId?: StringFilter<"Application"> | string
    jobOrderId?: StringFilter<"Application"> | string
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
    applicant?: XOR<ApplicantScalarRelationFilter, ApplicantWhereInput>
    jobOrder?: XOR<JobOrderScalarRelationFilter, JobOrderWhereInput>
  }, "id" | "applicantId_jobOrderId">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    applicantId?: SortOrder
    jobOrderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Application"> | string
    applicantId?: StringWithAggregatesFilter<"Application"> | string
    jobOrderId?: StringWithAggregatesFilter<"Application"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
  }

  export type PermissionWhereInput = {
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    id?: StringFilter<"Permission"> | string
    name?: StringFilter<"Permission"> | string
    description?: StringNullableFilter<"Permission"> | string | null
    createdAt?: DateTimeFilter<"Permission"> | Date | string
    updatedAt?: DateTimeFilter<"Permission"> | Date | string
    objectPermissions?: ObjectPermissionListRelationFilter
  }

  export type PermissionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    objectPermissions?: ObjectPermissionOrderByRelationAggregateInput
  }

  export type PermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    description?: StringNullableFilter<"Permission"> | string | null
    createdAt?: DateTimeFilter<"Permission"> | Date | string
    updatedAt?: DateTimeFilter<"Permission"> | Date | string
    objectPermissions?: ObjectPermissionListRelationFilter
  }, "id" | "name">

  export type PermissionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PermissionCountOrderByAggregateInput
    _max?: PermissionMaxOrderByAggregateInput
    _min?: PermissionMinOrderByAggregateInput
  }

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    OR?: PermissionScalarWhereWithAggregatesInput[]
    NOT?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Permission"> | string
    name?: StringWithAggregatesFilter<"Permission"> | string
    description?: StringNullableWithAggregatesFilter<"Permission"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Permission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Permission"> | Date | string
  }

  export type ObjectPermissionWhereInput = {
    AND?: ObjectPermissionWhereInput | ObjectPermissionWhereInput[]
    OR?: ObjectPermissionWhereInput[]
    NOT?: ObjectPermissionWhereInput | ObjectPermissionWhereInput[]
    id?: StringFilter<"ObjectPermission"> | string
    permissionId?: StringFilter<"ObjectPermission"> | string
    subjectId?: StringFilter<"ObjectPermission"> | string
    subjectType?: EnumPermissionSubjectTypeFilter<"ObjectPermission"> | $Enums.PermissionSubjectType
    objectId?: StringFilter<"ObjectPermission"> | string
    effect?: EnumPermissionEffectFilter<"ObjectPermission"> | $Enums.PermissionEffect
    createdAt?: DateTimeFilter<"ObjectPermission"> | Date | string
    updatedAt?: DateTimeFilter<"ObjectPermission"> | Date | string
    permission?: XOR<PermissionScalarRelationFilter, PermissionWhereInput>
  }

  export type ObjectPermissionOrderByWithRelationInput = {
    id?: SortOrder
    permissionId?: SortOrder
    subjectId?: SortOrder
    subjectType?: SortOrder
    objectId?: SortOrder
    effect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    permission?: PermissionOrderByWithRelationInput
  }

  export type ObjectPermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    unique_object_permission?: ObjectPermissionUnique_object_permissionCompoundUniqueInput
    AND?: ObjectPermissionWhereInput | ObjectPermissionWhereInput[]
    OR?: ObjectPermissionWhereInput[]
    NOT?: ObjectPermissionWhereInput | ObjectPermissionWhereInput[]
    permissionId?: StringFilter<"ObjectPermission"> | string
    subjectId?: StringFilter<"ObjectPermission"> | string
    subjectType?: EnumPermissionSubjectTypeFilter<"ObjectPermission"> | $Enums.PermissionSubjectType
    objectId?: StringFilter<"ObjectPermission"> | string
    effect?: EnumPermissionEffectFilter<"ObjectPermission"> | $Enums.PermissionEffect
    createdAt?: DateTimeFilter<"ObjectPermission"> | Date | string
    updatedAt?: DateTimeFilter<"ObjectPermission"> | Date | string
    permission?: XOR<PermissionScalarRelationFilter, PermissionWhereInput>
  }, "id" | "unique_object_permission">

  export type ObjectPermissionOrderByWithAggregationInput = {
    id?: SortOrder
    permissionId?: SortOrder
    subjectId?: SortOrder
    subjectType?: SortOrder
    objectId?: SortOrder
    effect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ObjectPermissionCountOrderByAggregateInput
    _max?: ObjectPermissionMaxOrderByAggregateInput
    _min?: ObjectPermissionMinOrderByAggregateInput
  }

  export type ObjectPermissionScalarWhereWithAggregatesInput = {
    AND?: ObjectPermissionScalarWhereWithAggregatesInput | ObjectPermissionScalarWhereWithAggregatesInput[]
    OR?: ObjectPermissionScalarWhereWithAggregatesInput[]
    NOT?: ObjectPermissionScalarWhereWithAggregatesInput | ObjectPermissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ObjectPermission"> | string
    permissionId?: StringWithAggregatesFilter<"ObjectPermission"> | string
    subjectId?: StringWithAggregatesFilter<"ObjectPermission"> | string
    subjectType?: EnumPermissionSubjectTypeWithAggregatesFilter<"ObjectPermission"> | $Enums.PermissionSubjectType
    objectId?: StringWithAggregatesFilter<"ObjectPermission"> | string
    effect?: EnumPermissionEffectWithAggregatesFilter<"ObjectPermission"> | $Enums.PermissionEffect
    createdAt?: DateTimeWithAggregatesFilter<"ObjectPermission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ObjectPermission"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    id?: string
    name: string
    email: string
    primaryContact: string
    areaCode: string
    phoneNumber: string
    address: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    jobOrders?: JobOrderCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    primaryContact: string
    areaCode: string
    phoneNumber: string
    address: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    jobOrders?: JobOrderUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    primaryContact?: StringFieldUpdateOperationsInput | string
    areaCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobOrders?: JobOrderUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    primaryContact?: StringFieldUpdateOperationsInput | string
    areaCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobOrders?: JobOrderUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    name: string
    email: string
    primaryContact: string
    areaCode: string
    phoneNumber: string
    address: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    primaryContact?: StringFieldUpdateOperationsInput | string
    areaCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    primaryContact?: StringFieldUpdateOperationsInput | string
    areaCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobOrderCreateInput = {
    id?: string
    employer: string
    position: string
    salary: number
    currency: string
    headcount: number
    location: JsonNullValueInput | InputJsonValue
    status: $Enums.JobOrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    visas?: VisaCreateNestedManyWithoutJobOrderInput
    applications?: ApplicationCreateNestedManyWithoutJobOrderInput
    client: ClientCreateNestedOneWithoutJobOrdersInput
  }

  export type JobOrderUncheckedCreateInput = {
    id?: string
    employer: string
    position: string
    salary: number
    currency: string
    headcount: number
    location: JsonNullValueInput | InputJsonValue
    status: $Enums.JobOrderStatus
    clientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    visas?: VisaUncheckedCreateNestedManyWithoutJobOrderInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutJobOrderInput
  }

  export type JobOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employer?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    headcount?: IntFieldUpdateOperationsInput | number
    location?: JsonNullValueInput | InputJsonValue
    status?: EnumJobOrderStatusFieldUpdateOperationsInput | $Enums.JobOrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visas?: VisaUpdateManyWithoutJobOrderNestedInput
    applications?: ApplicationUpdateManyWithoutJobOrderNestedInput
    client?: ClientUpdateOneRequiredWithoutJobOrdersNestedInput
  }

  export type JobOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employer?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    headcount?: IntFieldUpdateOperationsInput | number
    location?: JsonNullValueInput | InputJsonValue
    status?: EnumJobOrderStatusFieldUpdateOperationsInput | $Enums.JobOrderStatus
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visas?: VisaUncheckedUpdateManyWithoutJobOrderNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutJobOrderNestedInput
  }

  export type JobOrderCreateManyInput = {
    id?: string
    employer: string
    position: string
    salary: number
    currency: string
    headcount: number
    location: JsonNullValueInput | InputJsonValue
    status: $Enums.JobOrderStatus
    clientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    employer?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    headcount?: IntFieldUpdateOperationsInput | number
    location?: JsonNullValueInput | InputJsonValue
    status?: EnumJobOrderStatusFieldUpdateOperationsInput | $Enums.JobOrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employer?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    headcount?: IntFieldUpdateOperationsInput | number
    location?: JsonNullValueInput | InputJsonValue
    status?: EnumJobOrderStatusFieldUpdateOperationsInput | $Enums.JobOrderStatus
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisaCreateInput = {
    id?: string
    identifier: string
    issuedBy: string
    position: string
    validFrom: Date | string
    validUntil: Date | string
    status: $Enums.VisaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    jobOrder: JobOrderCreateNestedOneWithoutVisasInput
  }

  export type VisaUncheckedCreateInput = {
    id?: string
    identifier: string
    issuedBy: string
    position: string
    validFrom: Date | string
    validUntil: Date | string
    status: $Enums.VisaStatus
    jobOrderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    issuedBy?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumVisaStatusFieldUpdateOperationsInput | $Enums.VisaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobOrder?: JobOrderUpdateOneRequiredWithoutVisasNestedInput
  }

  export type VisaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    issuedBy?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumVisaStatusFieldUpdateOperationsInput | $Enums.VisaStatus
    jobOrderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisaCreateManyInput = {
    id?: string
    identifier: string
    issuedBy: string
    position: string
    validFrom: Date | string
    validUntil: Date | string
    status: $Enums.VisaStatus
    jobOrderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    issuedBy?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumVisaStatusFieldUpdateOperationsInput | $Enums.VisaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    issuedBy?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumVisaStatusFieldUpdateOperationsInput | $Enums.VisaStatus
    jobOrderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicantCreateInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    password: string
    areaCode: string
    phoneNumber: string
    resumeURL?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    passport?: PassportCreateNestedOneWithoutApplicantInput
  }

  export type ApplicantUncheckedCreateInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    password: string
    areaCode: string
    phoneNumber: string
    resumeURL?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    passport?: PassportUncheckedCreateNestedOneWithoutApplicantInput
  }

  export type ApplicantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    areaCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    resumeURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    passport?: PassportUpdateOneWithoutApplicantNestedInput
  }

  export type ApplicantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    areaCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    resumeURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    passport?: PassportUncheckedUpdateOneWithoutApplicantNestedInput
  }

  export type ApplicantCreateManyInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    password: string
    areaCode: string
    phoneNumber: string
    resumeURL?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    areaCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    resumeURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    areaCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    resumeURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassportCreateInput = {
    id?: string
    passportNumber: string
    issuedBy: string
    validFrom: Date | string
    validUntil: Date | string
    passportURL: string
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant: ApplicantCreateNestedOneWithoutPassportInput
  }

  export type PassportUncheckedCreateInput = {
    id?: string
    passportNumber: string
    issuedBy: string
    validFrom: Date | string
    validUntil: Date | string
    passportURL: string
    applicantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PassportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    passportNumber?: StringFieldUpdateOperationsInput | string
    issuedBy?: StringFieldUpdateOperationsInput | string
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    passportURL?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantUpdateOneRequiredWithoutPassportNestedInput
  }

  export type PassportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    passportNumber?: StringFieldUpdateOperationsInput | string
    issuedBy?: StringFieldUpdateOperationsInput | string
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    passportURL?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassportCreateManyInput = {
    id?: string
    passportNumber: string
    issuedBy: string
    validFrom: Date | string
    validUntil: Date | string
    passportURL: string
    applicantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PassportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    passportNumber?: StringFieldUpdateOperationsInput | string
    issuedBy?: StringFieldUpdateOperationsInput | string
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    passportURL?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    passportNumber?: StringFieldUpdateOperationsInput | string
    issuedBy?: StringFieldUpdateOperationsInput | string
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    passportURL?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant: ApplicantCreateNestedOneWithoutApplicationsInput
    jobOrder: JobOrderCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateInput = {
    id?: string
    applicantId: string
    jobOrderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantUpdateOneRequiredWithoutApplicationsNestedInput
    jobOrder?: JobOrderUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    jobOrderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateManyInput = {
    id?: string
    applicantId: string
    jobOrderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    jobOrderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    objectPermissions?: ObjectPermissionCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    objectPermissions?: ObjectPermissionUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    objectPermissions?: ObjectPermissionUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    objectPermissions?: ObjectPermissionUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObjectPermissionCreateInput = {
    id?: string
    subjectId: string
    subjectType: $Enums.PermissionSubjectType
    objectId: string
    effect?: $Enums.PermissionEffect
    createdAt?: Date | string
    updatedAt?: Date | string
    permission: PermissionCreateNestedOneWithoutObjectPermissionsInput
  }

  export type ObjectPermissionUncheckedCreateInput = {
    id?: string
    permissionId: string
    subjectId: string
    subjectType: $Enums.PermissionSubjectType
    objectId: string
    effect?: $Enums.PermissionEffect
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ObjectPermissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    subjectType?: EnumPermissionSubjectTypeFieldUpdateOperationsInput | $Enums.PermissionSubjectType
    objectId?: StringFieldUpdateOperationsInput | string
    effect?: EnumPermissionEffectFieldUpdateOperationsInput | $Enums.PermissionEffect
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: PermissionUpdateOneRequiredWithoutObjectPermissionsNestedInput
  }

  export type ObjectPermissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    subjectType?: EnumPermissionSubjectTypeFieldUpdateOperationsInput | $Enums.PermissionSubjectType
    objectId?: StringFieldUpdateOperationsInput | string
    effect?: EnumPermissionEffectFieldUpdateOperationsInput | $Enums.PermissionEffect
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObjectPermissionCreateManyInput = {
    id?: string
    permissionId: string
    subjectId: string
    subjectType: $Enums.PermissionSubjectType
    objectId: string
    effect?: $Enums.PermissionEffect
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ObjectPermissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    subjectType?: EnumPermissionSubjectTypeFieldUpdateOperationsInput | $Enums.PermissionSubjectType
    objectId?: StringFieldUpdateOperationsInput | string
    effect?: EnumPermissionEffectFieldUpdateOperationsInput | $Enums.PermissionEffect
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObjectPermissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    subjectType?: EnumPermissionSubjectTypeFieldUpdateOperationsInput | $Enums.PermissionSubjectType
    objectId?: StringFieldUpdateOperationsInput | string
    effect?: EnumPermissionEffectFieldUpdateOperationsInput | $Enums.PermissionEffect
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type JobOrderListRelationFilter = {
    every?: JobOrderWhereInput
    some?: JobOrderWhereInput
    none?: JobOrderWhereInput
  }

  export type JobOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    primaryContact?: SortOrder
    areaCode?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    primaryContact?: SortOrder
    areaCode?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    primaryContact?: SortOrder
    areaCode?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumJobOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobOrderStatus | EnumJobOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobOrderStatus[] | ListEnumJobOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobOrderStatus[] | ListEnumJobOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobOrderStatusFilter<$PrismaModel> | $Enums.JobOrderStatus
  }

  export type VisaListRelationFilter = {
    every?: VisaWhereInput
    some?: VisaWhereInput
    none?: VisaWhereInput
  }

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput
    some?: ApplicationWhereInput
    none?: ApplicationWhereInput
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type VisaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobOrderCountOrderByAggregateInput = {
    id?: SortOrder
    employer?: SortOrder
    position?: SortOrder
    salary?: SortOrder
    currency?: SortOrder
    headcount?: SortOrder
    location?: SortOrder
    status?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobOrderAvgOrderByAggregateInput = {
    salary?: SortOrder
    headcount?: SortOrder
  }

  export type JobOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    employer?: SortOrder
    position?: SortOrder
    salary?: SortOrder
    currency?: SortOrder
    headcount?: SortOrder
    status?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobOrderMinOrderByAggregateInput = {
    id?: SortOrder
    employer?: SortOrder
    position?: SortOrder
    salary?: SortOrder
    currency?: SortOrder
    headcount?: SortOrder
    status?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobOrderSumOrderByAggregateInput = {
    salary?: SortOrder
    headcount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumJobOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobOrderStatus | EnumJobOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobOrderStatus[] | ListEnumJobOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobOrderStatus[] | ListEnumJobOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobOrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumJobOrderStatusFilter<$PrismaModel>
  }

  export type EnumVisaStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VisaStatus | EnumVisaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VisaStatus[] | ListEnumVisaStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VisaStatus[] | ListEnumVisaStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVisaStatusFilter<$PrismaModel> | $Enums.VisaStatus
  }

  export type JobOrderScalarRelationFilter = {
    is?: JobOrderWhereInput
    isNot?: JobOrderWhereInput
  }

  export type VisaCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    issuedBy?: SortOrder
    position?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    status?: SortOrder
    jobOrderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisaMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    issuedBy?: SortOrder
    position?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    status?: SortOrder
    jobOrderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisaMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    issuedBy?: SortOrder
    position?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    status?: SortOrder
    jobOrderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumVisaStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VisaStatus | EnumVisaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VisaStatus[] | ListEnumVisaStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VisaStatus[] | ListEnumVisaStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVisaStatusWithAggregatesFilter<$PrismaModel> | $Enums.VisaStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVisaStatusFilter<$PrismaModel>
    _max?: NestedEnumVisaStatusFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PassportNullableScalarRelationFilter = {
    is?: PassportWhereInput | null
    isNot?: PassportWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApplicantCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    areaCode?: SortOrder
    phoneNumber?: SortOrder
    resumeURL?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicantMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    areaCode?: SortOrder
    phoneNumber?: SortOrder
    resumeURL?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicantMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    areaCode?: SortOrder
    phoneNumber?: SortOrder
    resumeURL?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ApplicantScalarRelationFilter = {
    is?: ApplicantWhereInput
    isNot?: ApplicantWhereInput
  }

  export type PassportCountOrderByAggregateInput = {
    id?: SortOrder
    passportNumber?: SortOrder
    issuedBy?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    passportURL?: SortOrder
    applicantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PassportMaxOrderByAggregateInput = {
    id?: SortOrder
    passportNumber?: SortOrder
    issuedBy?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    passportURL?: SortOrder
    applicantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PassportMinOrderByAggregateInput = {
    id?: SortOrder
    passportNumber?: SortOrder
    issuedBy?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    passportURL?: SortOrder
    applicantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationApplicantIdJobOrderIdCompoundUniqueInput = {
    applicantId: string
    jobOrderId: string
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    jobOrderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    jobOrderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    jobOrderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ObjectPermissionListRelationFilter = {
    every?: ObjectPermissionWhereInput
    some?: ObjectPermissionWhereInput
    none?: ObjectPermissionWhereInput
  }

  export type ObjectPermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PermissionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermissionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPermissionSubjectTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionSubjectType | EnumPermissionSubjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionSubjectType[] | ListEnumPermissionSubjectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissionSubjectType[] | ListEnumPermissionSubjectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionSubjectTypeFilter<$PrismaModel> | $Enums.PermissionSubjectType
  }

  export type EnumPermissionEffectFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionEffect | EnumPermissionEffectFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionEffect[] | ListEnumPermissionEffectFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissionEffect[] | ListEnumPermissionEffectFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionEffectFilter<$PrismaModel> | $Enums.PermissionEffect
  }

  export type PermissionScalarRelationFilter = {
    is?: PermissionWhereInput
    isNot?: PermissionWhereInput
  }

  export type ObjectPermissionUnique_object_permissionCompoundUniqueInput = {
    subjectId: string
    subjectType: $Enums.PermissionSubjectType
    objectId: string
    permissionId: string
  }

  export type ObjectPermissionCountOrderByAggregateInput = {
    id?: SortOrder
    permissionId?: SortOrder
    subjectId?: SortOrder
    subjectType?: SortOrder
    objectId?: SortOrder
    effect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ObjectPermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    permissionId?: SortOrder
    subjectId?: SortOrder
    subjectType?: SortOrder
    objectId?: SortOrder
    effect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ObjectPermissionMinOrderByAggregateInput = {
    id?: SortOrder
    permissionId?: SortOrder
    subjectId?: SortOrder
    subjectType?: SortOrder
    objectId?: SortOrder
    effect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPermissionSubjectTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionSubjectType | EnumPermissionSubjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionSubjectType[] | ListEnumPermissionSubjectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissionSubjectType[] | ListEnumPermissionSubjectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionSubjectTypeWithAggregatesFilter<$PrismaModel> | $Enums.PermissionSubjectType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPermissionSubjectTypeFilter<$PrismaModel>
    _max?: NestedEnumPermissionSubjectTypeFilter<$PrismaModel>
  }

  export type EnumPermissionEffectWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionEffect | EnumPermissionEffectFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionEffect[] | ListEnumPermissionEffectFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissionEffect[] | ListEnumPermissionEffectFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionEffectWithAggregatesFilter<$PrismaModel> | $Enums.PermissionEffect
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPermissionEffectFilter<$PrismaModel>
    _max?: NestedEnumPermissionEffectFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type JobOrderCreateNestedManyWithoutClientInput = {
    create?: XOR<JobOrderCreateWithoutClientInput, JobOrderUncheckedCreateWithoutClientInput> | JobOrderCreateWithoutClientInput[] | JobOrderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: JobOrderCreateOrConnectWithoutClientInput | JobOrderCreateOrConnectWithoutClientInput[]
    createMany?: JobOrderCreateManyClientInputEnvelope
    connect?: JobOrderWhereUniqueInput | JobOrderWhereUniqueInput[]
  }

  export type JobOrderUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<JobOrderCreateWithoutClientInput, JobOrderUncheckedCreateWithoutClientInput> | JobOrderCreateWithoutClientInput[] | JobOrderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: JobOrderCreateOrConnectWithoutClientInput | JobOrderCreateOrConnectWithoutClientInput[]
    createMany?: JobOrderCreateManyClientInputEnvelope
    connect?: JobOrderWhereUniqueInput | JobOrderWhereUniqueInput[]
  }

  export type JobOrderUpdateManyWithoutClientNestedInput = {
    create?: XOR<JobOrderCreateWithoutClientInput, JobOrderUncheckedCreateWithoutClientInput> | JobOrderCreateWithoutClientInput[] | JobOrderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: JobOrderCreateOrConnectWithoutClientInput | JobOrderCreateOrConnectWithoutClientInput[]
    upsert?: JobOrderUpsertWithWhereUniqueWithoutClientInput | JobOrderUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: JobOrderCreateManyClientInputEnvelope
    set?: JobOrderWhereUniqueInput | JobOrderWhereUniqueInput[]
    disconnect?: JobOrderWhereUniqueInput | JobOrderWhereUniqueInput[]
    delete?: JobOrderWhereUniqueInput | JobOrderWhereUniqueInput[]
    connect?: JobOrderWhereUniqueInput | JobOrderWhereUniqueInput[]
    update?: JobOrderUpdateWithWhereUniqueWithoutClientInput | JobOrderUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: JobOrderUpdateManyWithWhereWithoutClientInput | JobOrderUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: JobOrderScalarWhereInput | JobOrderScalarWhereInput[]
  }

  export type JobOrderUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<JobOrderCreateWithoutClientInput, JobOrderUncheckedCreateWithoutClientInput> | JobOrderCreateWithoutClientInput[] | JobOrderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: JobOrderCreateOrConnectWithoutClientInput | JobOrderCreateOrConnectWithoutClientInput[]
    upsert?: JobOrderUpsertWithWhereUniqueWithoutClientInput | JobOrderUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: JobOrderCreateManyClientInputEnvelope
    set?: JobOrderWhereUniqueInput | JobOrderWhereUniqueInput[]
    disconnect?: JobOrderWhereUniqueInput | JobOrderWhereUniqueInput[]
    delete?: JobOrderWhereUniqueInput | JobOrderWhereUniqueInput[]
    connect?: JobOrderWhereUniqueInput | JobOrderWhereUniqueInput[]
    update?: JobOrderUpdateWithWhereUniqueWithoutClientInput | JobOrderUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: JobOrderUpdateManyWithWhereWithoutClientInput | JobOrderUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: JobOrderScalarWhereInput | JobOrderScalarWhereInput[]
  }

  export type VisaCreateNestedManyWithoutJobOrderInput = {
    create?: XOR<VisaCreateWithoutJobOrderInput, VisaUncheckedCreateWithoutJobOrderInput> | VisaCreateWithoutJobOrderInput[] | VisaUncheckedCreateWithoutJobOrderInput[]
    connectOrCreate?: VisaCreateOrConnectWithoutJobOrderInput | VisaCreateOrConnectWithoutJobOrderInput[]
    createMany?: VisaCreateManyJobOrderInputEnvelope
    connect?: VisaWhereUniqueInput | VisaWhereUniqueInput[]
  }

  export type ApplicationCreateNestedManyWithoutJobOrderInput = {
    create?: XOR<ApplicationCreateWithoutJobOrderInput, ApplicationUncheckedCreateWithoutJobOrderInput> | ApplicationCreateWithoutJobOrderInput[] | ApplicationUncheckedCreateWithoutJobOrderInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutJobOrderInput | ApplicationCreateOrConnectWithoutJobOrderInput[]
    createMany?: ApplicationCreateManyJobOrderInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type ClientCreateNestedOneWithoutJobOrdersInput = {
    create?: XOR<ClientCreateWithoutJobOrdersInput, ClientUncheckedCreateWithoutJobOrdersInput>
    connectOrCreate?: ClientCreateOrConnectWithoutJobOrdersInput
    connect?: ClientWhereUniqueInput
  }

  export type VisaUncheckedCreateNestedManyWithoutJobOrderInput = {
    create?: XOR<VisaCreateWithoutJobOrderInput, VisaUncheckedCreateWithoutJobOrderInput> | VisaCreateWithoutJobOrderInput[] | VisaUncheckedCreateWithoutJobOrderInput[]
    connectOrCreate?: VisaCreateOrConnectWithoutJobOrderInput | VisaCreateOrConnectWithoutJobOrderInput[]
    createMany?: VisaCreateManyJobOrderInputEnvelope
    connect?: VisaWhereUniqueInput | VisaWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutJobOrderInput = {
    create?: XOR<ApplicationCreateWithoutJobOrderInput, ApplicationUncheckedCreateWithoutJobOrderInput> | ApplicationCreateWithoutJobOrderInput[] | ApplicationUncheckedCreateWithoutJobOrderInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutJobOrderInput | ApplicationCreateOrConnectWithoutJobOrderInput[]
    createMany?: ApplicationCreateManyJobOrderInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumJobOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobOrderStatus
  }

  export type VisaUpdateManyWithoutJobOrderNestedInput = {
    create?: XOR<VisaCreateWithoutJobOrderInput, VisaUncheckedCreateWithoutJobOrderInput> | VisaCreateWithoutJobOrderInput[] | VisaUncheckedCreateWithoutJobOrderInput[]
    connectOrCreate?: VisaCreateOrConnectWithoutJobOrderInput | VisaCreateOrConnectWithoutJobOrderInput[]
    upsert?: VisaUpsertWithWhereUniqueWithoutJobOrderInput | VisaUpsertWithWhereUniqueWithoutJobOrderInput[]
    createMany?: VisaCreateManyJobOrderInputEnvelope
    set?: VisaWhereUniqueInput | VisaWhereUniqueInput[]
    disconnect?: VisaWhereUniqueInput | VisaWhereUniqueInput[]
    delete?: VisaWhereUniqueInput | VisaWhereUniqueInput[]
    connect?: VisaWhereUniqueInput | VisaWhereUniqueInput[]
    update?: VisaUpdateWithWhereUniqueWithoutJobOrderInput | VisaUpdateWithWhereUniqueWithoutJobOrderInput[]
    updateMany?: VisaUpdateManyWithWhereWithoutJobOrderInput | VisaUpdateManyWithWhereWithoutJobOrderInput[]
    deleteMany?: VisaScalarWhereInput | VisaScalarWhereInput[]
  }

  export type ApplicationUpdateManyWithoutJobOrderNestedInput = {
    create?: XOR<ApplicationCreateWithoutJobOrderInput, ApplicationUncheckedCreateWithoutJobOrderInput> | ApplicationCreateWithoutJobOrderInput[] | ApplicationUncheckedCreateWithoutJobOrderInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutJobOrderInput | ApplicationCreateOrConnectWithoutJobOrderInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutJobOrderInput | ApplicationUpsertWithWhereUniqueWithoutJobOrderInput[]
    createMany?: ApplicationCreateManyJobOrderInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutJobOrderInput | ApplicationUpdateWithWhereUniqueWithoutJobOrderInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutJobOrderInput | ApplicationUpdateManyWithWhereWithoutJobOrderInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type ClientUpdateOneRequiredWithoutJobOrdersNestedInput = {
    create?: XOR<ClientCreateWithoutJobOrdersInput, ClientUncheckedCreateWithoutJobOrdersInput>
    connectOrCreate?: ClientCreateOrConnectWithoutJobOrdersInput
    upsert?: ClientUpsertWithoutJobOrdersInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutJobOrdersInput, ClientUpdateWithoutJobOrdersInput>, ClientUncheckedUpdateWithoutJobOrdersInput>
  }

  export type VisaUncheckedUpdateManyWithoutJobOrderNestedInput = {
    create?: XOR<VisaCreateWithoutJobOrderInput, VisaUncheckedCreateWithoutJobOrderInput> | VisaCreateWithoutJobOrderInput[] | VisaUncheckedCreateWithoutJobOrderInput[]
    connectOrCreate?: VisaCreateOrConnectWithoutJobOrderInput | VisaCreateOrConnectWithoutJobOrderInput[]
    upsert?: VisaUpsertWithWhereUniqueWithoutJobOrderInput | VisaUpsertWithWhereUniqueWithoutJobOrderInput[]
    createMany?: VisaCreateManyJobOrderInputEnvelope
    set?: VisaWhereUniqueInput | VisaWhereUniqueInput[]
    disconnect?: VisaWhereUniqueInput | VisaWhereUniqueInput[]
    delete?: VisaWhereUniqueInput | VisaWhereUniqueInput[]
    connect?: VisaWhereUniqueInput | VisaWhereUniqueInput[]
    update?: VisaUpdateWithWhereUniqueWithoutJobOrderInput | VisaUpdateWithWhereUniqueWithoutJobOrderInput[]
    updateMany?: VisaUpdateManyWithWhereWithoutJobOrderInput | VisaUpdateManyWithWhereWithoutJobOrderInput[]
    deleteMany?: VisaScalarWhereInput | VisaScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutJobOrderNestedInput = {
    create?: XOR<ApplicationCreateWithoutJobOrderInput, ApplicationUncheckedCreateWithoutJobOrderInput> | ApplicationCreateWithoutJobOrderInput[] | ApplicationUncheckedCreateWithoutJobOrderInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutJobOrderInput | ApplicationCreateOrConnectWithoutJobOrderInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutJobOrderInput | ApplicationUpsertWithWhereUniqueWithoutJobOrderInput[]
    createMany?: ApplicationCreateManyJobOrderInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutJobOrderInput | ApplicationUpdateWithWhereUniqueWithoutJobOrderInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutJobOrderInput | ApplicationUpdateManyWithWhereWithoutJobOrderInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type JobOrderCreateNestedOneWithoutVisasInput = {
    create?: XOR<JobOrderCreateWithoutVisasInput, JobOrderUncheckedCreateWithoutVisasInput>
    connectOrCreate?: JobOrderCreateOrConnectWithoutVisasInput
    connect?: JobOrderWhereUniqueInput
  }

  export type EnumVisaStatusFieldUpdateOperationsInput = {
    set?: $Enums.VisaStatus
  }

  export type JobOrderUpdateOneRequiredWithoutVisasNestedInput = {
    create?: XOR<JobOrderCreateWithoutVisasInput, JobOrderUncheckedCreateWithoutVisasInput>
    connectOrCreate?: JobOrderCreateOrConnectWithoutVisasInput
    upsert?: JobOrderUpsertWithoutVisasInput
    connect?: JobOrderWhereUniqueInput
    update?: XOR<XOR<JobOrderUpdateToOneWithWhereWithoutVisasInput, JobOrderUpdateWithoutVisasInput>, JobOrderUncheckedUpdateWithoutVisasInput>
  }

  export type ApplicationCreateNestedManyWithoutApplicantInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type PassportCreateNestedOneWithoutApplicantInput = {
    create?: XOR<PassportCreateWithoutApplicantInput, PassportUncheckedCreateWithoutApplicantInput>
    connectOrCreate?: PassportCreateOrConnectWithoutApplicantInput
    connect?: PassportWhereUniqueInput
  }

  export type ApplicationUncheckedCreateNestedManyWithoutApplicantInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type PassportUncheckedCreateNestedOneWithoutApplicantInput = {
    create?: XOR<PassportCreateWithoutApplicantInput, PassportUncheckedCreateWithoutApplicantInput>
    connectOrCreate?: PassportCreateOrConnectWithoutApplicantInput
    connect?: PassportWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ApplicationUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutApplicantInput | ApplicationUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutApplicantInput | ApplicationUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutApplicantInput | ApplicationUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type PassportUpdateOneWithoutApplicantNestedInput = {
    create?: XOR<PassportCreateWithoutApplicantInput, PassportUncheckedCreateWithoutApplicantInput>
    connectOrCreate?: PassportCreateOrConnectWithoutApplicantInput
    upsert?: PassportUpsertWithoutApplicantInput
    disconnect?: PassportWhereInput | boolean
    delete?: PassportWhereInput | boolean
    connect?: PassportWhereUniqueInput
    update?: XOR<XOR<PassportUpdateToOneWithWhereWithoutApplicantInput, PassportUpdateWithoutApplicantInput>, PassportUncheckedUpdateWithoutApplicantInput>
  }

  export type ApplicationUncheckedUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutApplicantInput | ApplicationUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutApplicantInput | ApplicationUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutApplicantInput | ApplicationUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type PassportUncheckedUpdateOneWithoutApplicantNestedInput = {
    create?: XOR<PassportCreateWithoutApplicantInput, PassportUncheckedCreateWithoutApplicantInput>
    connectOrCreate?: PassportCreateOrConnectWithoutApplicantInput
    upsert?: PassportUpsertWithoutApplicantInput
    disconnect?: PassportWhereInput | boolean
    delete?: PassportWhereInput | boolean
    connect?: PassportWhereUniqueInput
    update?: XOR<XOR<PassportUpdateToOneWithWhereWithoutApplicantInput, PassportUpdateWithoutApplicantInput>, PassportUncheckedUpdateWithoutApplicantInput>
  }

  export type ApplicantCreateNestedOneWithoutPassportInput = {
    create?: XOR<ApplicantCreateWithoutPassportInput, ApplicantUncheckedCreateWithoutPassportInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutPassportInput
    connect?: ApplicantWhereUniqueInput
  }

  export type ApplicantUpdateOneRequiredWithoutPassportNestedInput = {
    create?: XOR<ApplicantCreateWithoutPassportInput, ApplicantUncheckedCreateWithoutPassportInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutPassportInput
    upsert?: ApplicantUpsertWithoutPassportInput
    connect?: ApplicantWhereUniqueInput
    update?: XOR<XOR<ApplicantUpdateToOneWithWhereWithoutPassportInput, ApplicantUpdateWithoutPassportInput>, ApplicantUncheckedUpdateWithoutPassportInput>
  }

  export type ApplicantCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<ApplicantCreateWithoutApplicationsInput, ApplicantUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutApplicationsInput
    connect?: ApplicantWhereUniqueInput
  }

  export type JobOrderCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<JobOrderCreateWithoutApplicationsInput, JobOrderUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: JobOrderCreateOrConnectWithoutApplicationsInput
    connect?: JobOrderWhereUniqueInput
  }

  export type ApplicantUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<ApplicantCreateWithoutApplicationsInput, ApplicantUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutApplicationsInput
    upsert?: ApplicantUpsertWithoutApplicationsInput
    connect?: ApplicantWhereUniqueInput
    update?: XOR<XOR<ApplicantUpdateToOneWithWhereWithoutApplicationsInput, ApplicantUpdateWithoutApplicationsInput>, ApplicantUncheckedUpdateWithoutApplicationsInput>
  }

  export type JobOrderUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<JobOrderCreateWithoutApplicationsInput, JobOrderUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: JobOrderCreateOrConnectWithoutApplicationsInput
    upsert?: JobOrderUpsertWithoutApplicationsInput
    connect?: JobOrderWhereUniqueInput
    update?: XOR<XOR<JobOrderUpdateToOneWithWhereWithoutApplicationsInput, JobOrderUpdateWithoutApplicationsInput>, JobOrderUncheckedUpdateWithoutApplicationsInput>
  }

  export type ObjectPermissionCreateNestedManyWithoutPermissionInput = {
    create?: XOR<ObjectPermissionCreateWithoutPermissionInput, ObjectPermissionUncheckedCreateWithoutPermissionInput> | ObjectPermissionCreateWithoutPermissionInput[] | ObjectPermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: ObjectPermissionCreateOrConnectWithoutPermissionInput | ObjectPermissionCreateOrConnectWithoutPermissionInput[]
    createMany?: ObjectPermissionCreateManyPermissionInputEnvelope
    connect?: ObjectPermissionWhereUniqueInput | ObjectPermissionWhereUniqueInput[]
  }

  export type ObjectPermissionUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: XOR<ObjectPermissionCreateWithoutPermissionInput, ObjectPermissionUncheckedCreateWithoutPermissionInput> | ObjectPermissionCreateWithoutPermissionInput[] | ObjectPermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: ObjectPermissionCreateOrConnectWithoutPermissionInput | ObjectPermissionCreateOrConnectWithoutPermissionInput[]
    createMany?: ObjectPermissionCreateManyPermissionInputEnvelope
    connect?: ObjectPermissionWhereUniqueInput | ObjectPermissionWhereUniqueInput[]
  }

  export type ObjectPermissionUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<ObjectPermissionCreateWithoutPermissionInput, ObjectPermissionUncheckedCreateWithoutPermissionInput> | ObjectPermissionCreateWithoutPermissionInput[] | ObjectPermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: ObjectPermissionCreateOrConnectWithoutPermissionInput | ObjectPermissionCreateOrConnectWithoutPermissionInput[]
    upsert?: ObjectPermissionUpsertWithWhereUniqueWithoutPermissionInput | ObjectPermissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: ObjectPermissionCreateManyPermissionInputEnvelope
    set?: ObjectPermissionWhereUniqueInput | ObjectPermissionWhereUniqueInput[]
    disconnect?: ObjectPermissionWhereUniqueInput | ObjectPermissionWhereUniqueInput[]
    delete?: ObjectPermissionWhereUniqueInput | ObjectPermissionWhereUniqueInput[]
    connect?: ObjectPermissionWhereUniqueInput | ObjectPermissionWhereUniqueInput[]
    update?: ObjectPermissionUpdateWithWhereUniqueWithoutPermissionInput | ObjectPermissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: ObjectPermissionUpdateManyWithWhereWithoutPermissionInput | ObjectPermissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: ObjectPermissionScalarWhereInput | ObjectPermissionScalarWhereInput[]
  }

  export type ObjectPermissionUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<ObjectPermissionCreateWithoutPermissionInput, ObjectPermissionUncheckedCreateWithoutPermissionInput> | ObjectPermissionCreateWithoutPermissionInput[] | ObjectPermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: ObjectPermissionCreateOrConnectWithoutPermissionInput | ObjectPermissionCreateOrConnectWithoutPermissionInput[]
    upsert?: ObjectPermissionUpsertWithWhereUniqueWithoutPermissionInput | ObjectPermissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: ObjectPermissionCreateManyPermissionInputEnvelope
    set?: ObjectPermissionWhereUniqueInput | ObjectPermissionWhereUniqueInput[]
    disconnect?: ObjectPermissionWhereUniqueInput | ObjectPermissionWhereUniqueInput[]
    delete?: ObjectPermissionWhereUniqueInput | ObjectPermissionWhereUniqueInput[]
    connect?: ObjectPermissionWhereUniqueInput | ObjectPermissionWhereUniqueInput[]
    update?: ObjectPermissionUpdateWithWhereUniqueWithoutPermissionInput | ObjectPermissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: ObjectPermissionUpdateManyWithWhereWithoutPermissionInput | ObjectPermissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: ObjectPermissionScalarWhereInput | ObjectPermissionScalarWhereInput[]
  }

  export type PermissionCreateNestedOneWithoutObjectPermissionsInput = {
    create?: XOR<PermissionCreateWithoutObjectPermissionsInput, PermissionUncheckedCreateWithoutObjectPermissionsInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutObjectPermissionsInput
    connect?: PermissionWhereUniqueInput
  }

  export type EnumPermissionSubjectTypeFieldUpdateOperationsInput = {
    set?: $Enums.PermissionSubjectType
  }

  export type EnumPermissionEffectFieldUpdateOperationsInput = {
    set?: $Enums.PermissionEffect
  }

  export type PermissionUpdateOneRequiredWithoutObjectPermissionsNestedInput = {
    create?: XOR<PermissionCreateWithoutObjectPermissionsInput, PermissionUncheckedCreateWithoutObjectPermissionsInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutObjectPermissionsInput
    upsert?: PermissionUpsertWithoutObjectPermissionsInput
    connect?: PermissionWhereUniqueInput
    update?: XOR<XOR<PermissionUpdateToOneWithWhereWithoutObjectPermissionsInput, PermissionUpdateWithoutObjectPermissionsInput>, PermissionUncheckedUpdateWithoutObjectPermissionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumJobOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobOrderStatus | EnumJobOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobOrderStatus[] | ListEnumJobOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobOrderStatus[] | ListEnumJobOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobOrderStatusFilter<$PrismaModel> | $Enums.JobOrderStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumJobOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobOrderStatus | EnumJobOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobOrderStatus[] | ListEnumJobOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobOrderStatus[] | ListEnumJobOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobOrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumJobOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumVisaStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VisaStatus | EnumVisaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VisaStatus[] | ListEnumVisaStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VisaStatus[] | ListEnumVisaStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVisaStatusFilter<$PrismaModel> | $Enums.VisaStatus
  }

  export type NestedEnumVisaStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VisaStatus | EnumVisaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VisaStatus[] | ListEnumVisaStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VisaStatus[] | ListEnumVisaStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVisaStatusWithAggregatesFilter<$PrismaModel> | $Enums.VisaStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVisaStatusFilter<$PrismaModel>
    _max?: NestedEnumVisaStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPermissionSubjectTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionSubjectType | EnumPermissionSubjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionSubjectType[] | ListEnumPermissionSubjectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissionSubjectType[] | ListEnumPermissionSubjectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionSubjectTypeFilter<$PrismaModel> | $Enums.PermissionSubjectType
  }

  export type NestedEnumPermissionEffectFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionEffect | EnumPermissionEffectFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionEffect[] | ListEnumPermissionEffectFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissionEffect[] | ListEnumPermissionEffectFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionEffectFilter<$PrismaModel> | $Enums.PermissionEffect
  }

  export type NestedEnumPermissionSubjectTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionSubjectType | EnumPermissionSubjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionSubjectType[] | ListEnumPermissionSubjectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissionSubjectType[] | ListEnumPermissionSubjectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionSubjectTypeWithAggregatesFilter<$PrismaModel> | $Enums.PermissionSubjectType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPermissionSubjectTypeFilter<$PrismaModel>
    _max?: NestedEnumPermissionSubjectTypeFilter<$PrismaModel>
  }

  export type NestedEnumPermissionEffectWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionEffect | EnumPermissionEffectFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionEffect[] | ListEnumPermissionEffectFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissionEffect[] | ListEnumPermissionEffectFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionEffectWithAggregatesFilter<$PrismaModel> | $Enums.PermissionEffect
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPermissionEffectFilter<$PrismaModel>
    _max?: NestedEnumPermissionEffectFilter<$PrismaModel>
  }

  export type JobOrderCreateWithoutClientInput = {
    id?: string
    employer: string
    position: string
    salary: number
    currency: string
    headcount: number
    location: JsonNullValueInput | InputJsonValue
    status: $Enums.JobOrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    visas?: VisaCreateNestedManyWithoutJobOrderInput
    applications?: ApplicationCreateNestedManyWithoutJobOrderInput
  }

  export type JobOrderUncheckedCreateWithoutClientInput = {
    id?: string
    employer: string
    position: string
    salary: number
    currency: string
    headcount: number
    location: JsonNullValueInput | InputJsonValue
    status: $Enums.JobOrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    visas?: VisaUncheckedCreateNestedManyWithoutJobOrderInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutJobOrderInput
  }

  export type JobOrderCreateOrConnectWithoutClientInput = {
    where: JobOrderWhereUniqueInput
    create: XOR<JobOrderCreateWithoutClientInput, JobOrderUncheckedCreateWithoutClientInput>
  }

  export type JobOrderCreateManyClientInputEnvelope = {
    data: JobOrderCreateManyClientInput | JobOrderCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type JobOrderUpsertWithWhereUniqueWithoutClientInput = {
    where: JobOrderWhereUniqueInput
    update: XOR<JobOrderUpdateWithoutClientInput, JobOrderUncheckedUpdateWithoutClientInput>
    create: XOR<JobOrderCreateWithoutClientInput, JobOrderUncheckedCreateWithoutClientInput>
  }

  export type JobOrderUpdateWithWhereUniqueWithoutClientInput = {
    where: JobOrderWhereUniqueInput
    data: XOR<JobOrderUpdateWithoutClientInput, JobOrderUncheckedUpdateWithoutClientInput>
  }

  export type JobOrderUpdateManyWithWhereWithoutClientInput = {
    where: JobOrderScalarWhereInput
    data: XOR<JobOrderUpdateManyMutationInput, JobOrderUncheckedUpdateManyWithoutClientInput>
  }

  export type JobOrderScalarWhereInput = {
    AND?: JobOrderScalarWhereInput | JobOrderScalarWhereInput[]
    OR?: JobOrderScalarWhereInput[]
    NOT?: JobOrderScalarWhereInput | JobOrderScalarWhereInput[]
    id?: StringFilter<"JobOrder"> | string
    employer?: StringFilter<"JobOrder"> | string
    position?: StringFilter<"JobOrder"> | string
    salary?: IntFilter<"JobOrder"> | number
    currency?: StringFilter<"JobOrder"> | string
    headcount?: IntFilter<"JobOrder"> | number
    location?: JsonFilter<"JobOrder">
    status?: EnumJobOrderStatusFilter<"JobOrder"> | $Enums.JobOrderStatus
    clientId?: StringFilter<"JobOrder"> | string
    createdAt?: DateTimeFilter<"JobOrder"> | Date | string
    updatedAt?: DateTimeFilter<"JobOrder"> | Date | string
  }

  export type VisaCreateWithoutJobOrderInput = {
    id?: string
    identifier: string
    issuedBy: string
    position: string
    validFrom: Date | string
    validUntil: Date | string
    status: $Enums.VisaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisaUncheckedCreateWithoutJobOrderInput = {
    id?: string
    identifier: string
    issuedBy: string
    position: string
    validFrom: Date | string
    validUntil: Date | string
    status: $Enums.VisaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisaCreateOrConnectWithoutJobOrderInput = {
    where: VisaWhereUniqueInput
    create: XOR<VisaCreateWithoutJobOrderInput, VisaUncheckedCreateWithoutJobOrderInput>
  }

  export type VisaCreateManyJobOrderInputEnvelope = {
    data: VisaCreateManyJobOrderInput | VisaCreateManyJobOrderInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationCreateWithoutJobOrderInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant: ApplicantCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutJobOrderInput = {
    id?: string
    applicantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationCreateOrConnectWithoutJobOrderInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutJobOrderInput, ApplicationUncheckedCreateWithoutJobOrderInput>
  }

  export type ApplicationCreateManyJobOrderInputEnvelope = {
    data: ApplicationCreateManyJobOrderInput | ApplicationCreateManyJobOrderInput[]
    skipDuplicates?: boolean
  }

  export type ClientCreateWithoutJobOrdersInput = {
    id?: string
    name: string
    email: string
    primaryContact: string
    areaCode: string
    phoneNumber: string
    address: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUncheckedCreateWithoutJobOrdersInput = {
    id?: string
    name: string
    email: string
    primaryContact: string
    areaCode: string
    phoneNumber: string
    address: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientCreateOrConnectWithoutJobOrdersInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutJobOrdersInput, ClientUncheckedCreateWithoutJobOrdersInput>
  }

  export type VisaUpsertWithWhereUniqueWithoutJobOrderInput = {
    where: VisaWhereUniqueInput
    update: XOR<VisaUpdateWithoutJobOrderInput, VisaUncheckedUpdateWithoutJobOrderInput>
    create: XOR<VisaCreateWithoutJobOrderInput, VisaUncheckedCreateWithoutJobOrderInput>
  }

  export type VisaUpdateWithWhereUniqueWithoutJobOrderInput = {
    where: VisaWhereUniqueInput
    data: XOR<VisaUpdateWithoutJobOrderInput, VisaUncheckedUpdateWithoutJobOrderInput>
  }

  export type VisaUpdateManyWithWhereWithoutJobOrderInput = {
    where: VisaScalarWhereInput
    data: XOR<VisaUpdateManyMutationInput, VisaUncheckedUpdateManyWithoutJobOrderInput>
  }

  export type VisaScalarWhereInput = {
    AND?: VisaScalarWhereInput | VisaScalarWhereInput[]
    OR?: VisaScalarWhereInput[]
    NOT?: VisaScalarWhereInput | VisaScalarWhereInput[]
    id?: StringFilter<"Visa"> | string
    identifier?: StringFilter<"Visa"> | string
    issuedBy?: StringFilter<"Visa"> | string
    position?: StringFilter<"Visa"> | string
    validFrom?: DateTimeFilter<"Visa"> | Date | string
    validUntil?: DateTimeFilter<"Visa"> | Date | string
    status?: EnumVisaStatusFilter<"Visa"> | $Enums.VisaStatus
    jobOrderId?: StringFilter<"Visa"> | string
    createdAt?: DateTimeFilter<"Visa"> | Date | string
    updatedAt?: DateTimeFilter<"Visa"> | Date | string
  }

  export type ApplicationUpsertWithWhereUniqueWithoutJobOrderInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutJobOrderInput, ApplicationUncheckedUpdateWithoutJobOrderInput>
    create: XOR<ApplicationCreateWithoutJobOrderInput, ApplicationUncheckedCreateWithoutJobOrderInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutJobOrderInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutJobOrderInput, ApplicationUncheckedUpdateWithoutJobOrderInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutJobOrderInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutJobOrderInput>
  }

  export type ApplicationScalarWhereInput = {
    AND?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    OR?: ApplicationScalarWhereInput[]
    NOT?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    id?: StringFilter<"Application"> | string
    applicantId?: StringFilter<"Application"> | string
    jobOrderId?: StringFilter<"Application"> | string
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
  }

  export type ClientUpsertWithoutJobOrdersInput = {
    update: XOR<ClientUpdateWithoutJobOrdersInput, ClientUncheckedUpdateWithoutJobOrdersInput>
    create: XOR<ClientCreateWithoutJobOrdersInput, ClientUncheckedCreateWithoutJobOrdersInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutJobOrdersInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutJobOrdersInput, ClientUncheckedUpdateWithoutJobOrdersInput>
  }

  export type ClientUpdateWithoutJobOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    primaryContact?: StringFieldUpdateOperationsInput | string
    areaCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateWithoutJobOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    primaryContact?: StringFieldUpdateOperationsInput | string
    areaCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobOrderCreateWithoutVisasInput = {
    id?: string
    employer: string
    position: string
    salary: number
    currency: string
    headcount: number
    location: JsonNullValueInput | InputJsonValue
    status: $Enums.JobOrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationCreateNestedManyWithoutJobOrderInput
    client: ClientCreateNestedOneWithoutJobOrdersInput
  }

  export type JobOrderUncheckedCreateWithoutVisasInput = {
    id?: string
    employer: string
    position: string
    salary: number
    currency: string
    headcount: number
    location: JsonNullValueInput | InputJsonValue
    status: $Enums.JobOrderStatus
    clientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutJobOrderInput
  }

  export type JobOrderCreateOrConnectWithoutVisasInput = {
    where: JobOrderWhereUniqueInput
    create: XOR<JobOrderCreateWithoutVisasInput, JobOrderUncheckedCreateWithoutVisasInput>
  }

  export type JobOrderUpsertWithoutVisasInput = {
    update: XOR<JobOrderUpdateWithoutVisasInput, JobOrderUncheckedUpdateWithoutVisasInput>
    create: XOR<JobOrderCreateWithoutVisasInput, JobOrderUncheckedCreateWithoutVisasInput>
    where?: JobOrderWhereInput
  }

  export type JobOrderUpdateToOneWithWhereWithoutVisasInput = {
    where?: JobOrderWhereInput
    data: XOR<JobOrderUpdateWithoutVisasInput, JobOrderUncheckedUpdateWithoutVisasInput>
  }

  export type JobOrderUpdateWithoutVisasInput = {
    id?: StringFieldUpdateOperationsInput | string
    employer?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    headcount?: IntFieldUpdateOperationsInput | number
    location?: JsonNullValueInput | InputJsonValue
    status?: EnumJobOrderStatusFieldUpdateOperationsInput | $Enums.JobOrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUpdateManyWithoutJobOrderNestedInput
    client?: ClientUpdateOneRequiredWithoutJobOrdersNestedInput
  }

  export type JobOrderUncheckedUpdateWithoutVisasInput = {
    id?: StringFieldUpdateOperationsInput | string
    employer?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    headcount?: IntFieldUpdateOperationsInput | number
    location?: JsonNullValueInput | InputJsonValue
    status?: EnumJobOrderStatusFieldUpdateOperationsInput | $Enums.JobOrderStatus
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutJobOrderNestedInput
  }

  export type ApplicationCreateWithoutApplicantInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    jobOrder: JobOrderCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutApplicantInput = {
    id?: string
    jobOrderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationCreateOrConnectWithoutApplicantInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput>
  }

  export type ApplicationCreateManyApplicantInputEnvelope = {
    data: ApplicationCreateManyApplicantInput | ApplicationCreateManyApplicantInput[]
    skipDuplicates?: boolean
  }

  export type PassportCreateWithoutApplicantInput = {
    id?: string
    passportNumber: string
    issuedBy: string
    validFrom: Date | string
    validUntil: Date | string
    passportURL: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PassportUncheckedCreateWithoutApplicantInput = {
    id?: string
    passportNumber: string
    issuedBy: string
    validFrom: Date | string
    validUntil: Date | string
    passportURL: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PassportCreateOrConnectWithoutApplicantInput = {
    where: PassportWhereUniqueInput
    create: XOR<PassportCreateWithoutApplicantInput, PassportUncheckedCreateWithoutApplicantInput>
  }

  export type ApplicationUpsertWithWhereUniqueWithoutApplicantInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutApplicantInput, ApplicationUncheckedUpdateWithoutApplicantInput>
    create: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutApplicantInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutApplicantInput, ApplicationUncheckedUpdateWithoutApplicantInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutApplicantInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutApplicantInput>
  }

  export type PassportUpsertWithoutApplicantInput = {
    update: XOR<PassportUpdateWithoutApplicantInput, PassportUncheckedUpdateWithoutApplicantInput>
    create: XOR<PassportCreateWithoutApplicantInput, PassportUncheckedCreateWithoutApplicantInput>
    where?: PassportWhereInput
  }

  export type PassportUpdateToOneWithWhereWithoutApplicantInput = {
    where?: PassportWhereInput
    data: XOR<PassportUpdateWithoutApplicantInput, PassportUncheckedUpdateWithoutApplicantInput>
  }

  export type PassportUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    passportNumber?: StringFieldUpdateOperationsInput | string
    issuedBy?: StringFieldUpdateOperationsInput | string
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    passportURL?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassportUncheckedUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    passportNumber?: StringFieldUpdateOperationsInput | string
    issuedBy?: StringFieldUpdateOperationsInput | string
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    passportURL?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicantCreateWithoutPassportInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    password: string
    areaCode: string
    phoneNumber: string
    resumeURL?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
  }

  export type ApplicantUncheckedCreateWithoutPassportInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    password: string
    areaCode: string
    phoneNumber: string
    resumeURL?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
  }

  export type ApplicantCreateOrConnectWithoutPassportInput = {
    where: ApplicantWhereUniqueInput
    create: XOR<ApplicantCreateWithoutPassportInput, ApplicantUncheckedCreateWithoutPassportInput>
  }

  export type ApplicantUpsertWithoutPassportInput = {
    update: XOR<ApplicantUpdateWithoutPassportInput, ApplicantUncheckedUpdateWithoutPassportInput>
    create: XOR<ApplicantCreateWithoutPassportInput, ApplicantUncheckedCreateWithoutPassportInput>
    where?: ApplicantWhereInput
  }

  export type ApplicantUpdateToOneWithWhereWithoutPassportInput = {
    where?: ApplicantWhereInput
    data: XOR<ApplicantUpdateWithoutPassportInput, ApplicantUncheckedUpdateWithoutPassportInput>
  }

  export type ApplicantUpdateWithoutPassportInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    areaCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    resumeURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
  }

  export type ApplicantUncheckedUpdateWithoutPassportInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    areaCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    resumeURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
  }

  export type ApplicantCreateWithoutApplicationsInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    password: string
    areaCode: string
    phoneNumber: string
    resumeURL?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    passport?: PassportCreateNestedOneWithoutApplicantInput
  }

  export type ApplicantUncheckedCreateWithoutApplicationsInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    password: string
    areaCode: string
    phoneNumber: string
    resumeURL?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    passport?: PassportUncheckedCreateNestedOneWithoutApplicantInput
  }

  export type ApplicantCreateOrConnectWithoutApplicationsInput = {
    where: ApplicantWhereUniqueInput
    create: XOR<ApplicantCreateWithoutApplicationsInput, ApplicantUncheckedCreateWithoutApplicationsInput>
  }

  export type JobOrderCreateWithoutApplicationsInput = {
    id?: string
    employer: string
    position: string
    salary: number
    currency: string
    headcount: number
    location: JsonNullValueInput | InputJsonValue
    status: $Enums.JobOrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    visas?: VisaCreateNestedManyWithoutJobOrderInput
    client: ClientCreateNestedOneWithoutJobOrdersInput
  }

  export type JobOrderUncheckedCreateWithoutApplicationsInput = {
    id?: string
    employer: string
    position: string
    salary: number
    currency: string
    headcount: number
    location: JsonNullValueInput | InputJsonValue
    status: $Enums.JobOrderStatus
    clientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    visas?: VisaUncheckedCreateNestedManyWithoutJobOrderInput
  }

  export type JobOrderCreateOrConnectWithoutApplicationsInput = {
    where: JobOrderWhereUniqueInput
    create: XOR<JobOrderCreateWithoutApplicationsInput, JobOrderUncheckedCreateWithoutApplicationsInput>
  }

  export type ApplicantUpsertWithoutApplicationsInput = {
    update: XOR<ApplicantUpdateWithoutApplicationsInput, ApplicantUncheckedUpdateWithoutApplicationsInput>
    create: XOR<ApplicantCreateWithoutApplicationsInput, ApplicantUncheckedCreateWithoutApplicationsInput>
    where?: ApplicantWhereInput
  }

  export type ApplicantUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: ApplicantWhereInput
    data: XOR<ApplicantUpdateWithoutApplicationsInput, ApplicantUncheckedUpdateWithoutApplicationsInput>
  }

  export type ApplicantUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    areaCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    resumeURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passport?: PassportUpdateOneWithoutApplicantNestedInput
  }

  export type ApplicantUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    areaCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    resumeURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passport?: PassportUncheckedUpdateOneWithoutApplicantNestedInput
  }

  export type JobOrderUpsertWithoutApplicationsInput = {
    update: XOR<JobOrderUpdateWithoutApplicationsInput, JobOrderUncheckedUpdateWithoutApplicationsInput>
    create: XOR<JobOrderCreateWithoutApplicationsInput, JobOrderUncheckedCreateWithoutApplicationsInput>
    where?: JobOrderWhereInput
  }

  export type JobOrderUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: JobOrderWhereInput
    data: XOR<JobOrderUpdateWithoutApplicationsInput, JobOrderUncheckedUpdateWithoutApplicationsInput>
  }

  export type JobOrderUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    employer?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    headcount?: IntFieldUpdateOperationsInput | number
    location?: JsonNullValueInput | InputJsonValue
    status?: EnumJobOrderStatusFieldUpdateOperationsInput | $Enums.JobOrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visas?: VisaUpdateManyWithoutJobOrderNestedInput
    client?: ClientUpdateOneRequiredWithoutJobOrdersNestedInput
  }

  export type JobOrderUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    employer?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    headcount?: IntFieldUpdateOperationsInput | number
    location?: JsonNullValueInput | InputJsonValue
    status?: EnumJobOrderStatusFieldUpdateOperationsInput | $Enums.JobOrderStatus
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visas?: VisaUncheckedUpdateManyWithoutJobOrderNestedInput
  }

  export type ObjectPermissionCreateWithoutPermissionInput = {
    id?: string
    subjectId: string
    subjectType: $Enums.PermissionSubjectType
    objectId: string
    effect?: $Enums.PermissionEffect
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ObjectPermissionUncheckedCreateWithoutPermissionInput = {
    id?: string
    subjectId: string
    subjectType: $Enums.PermissionSubjectType
    objectId: string
    effect?: $Enums.PermissionEffect
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ObjectPermissionCreateOrConnectWithoutPermissionInput = {
    where: ObjectPermissionWhereUniqueInput
    create: XOR<ObjectPermissionCreateWithoutPermissionInput, ObjectPermissionUncheckedCreateWithoutPermissionInput>
  }

  export type ObjectPermissionCreateManyPermissionInputEnvelope = {
    data: ObjectPermissionCreateManyPermissionInput | ObjectPermissionCreateManyPermissionInput[]
    skipDuplicates?: boolean
  }

  export type ObjectPermissionUpsertWithWhereUniqueWithoutPermissionInput = {
    where: ObjectPermissionWhereUniqueInput
    update: XOR<ObjectPermissionUpdateWithoutPermissionInput, ObjectPermissionUncheckedUpdateWithoutPermissionInput>
    create: XOR<ObjectPermissionCreateWithoutPermissionInput, ObjectPermissionUncheckedCreateWithoutPermissionInput>
  }

  export type ObjectPermissionUpdateWithWhereUniqueWithoutPermissionInput = {
    where: ObjectPermissionWhereUniqueInput
    data: XOR<ObjectPermissionUpdateWithoutPermissionInput, ObjectPermissionUncheckedUpdateWithoutPermissionInput>
  }

  export type ObjectPermissionUpdateManyWithWhereWithoutPermissionInput = {
    where: ObjectPermissionScalarWhereInput
    data: XOR<ObjectPermissionUpdateManyMutationInput, ObjectPermissionUncheckedUpdateManyWithoutPermissionInput>
  }

  export type ObjectPermissionScalarWhereInput = {
    AND?: ObjectPermissionScalarWhereInput | ObjectPermissionScalarWhereInput[]
    OR?: ObjectPermissionScalarWhereInput[]
    NOT?: ObjectPermissionScalarWhereInput | ObjectPermissionScalarWhereInput[]
    id?: StringFilter<"ObjectPermission"> | string
    permissionId?: StringFilter<"ObjectPermission"> | string
    subjectId?: StringFilter<"ObjectPermission"> | string
    subjectType?: EnumPermissionSubjectTypeFilter<"ObjectPermission"> | $Enums.PermissionSubjectType
    objectId?: StringFilter<"ObjectPermission"> | string
    effect?: EnumPermissionEffectFilter<"ObjectPermission"> | $Enums.PermissionEffect
    createdAt?: DateTimeFilter<"ObjectPermission"> | Date | string
    updatedAt?: DateTimeFilter<"ObjectPermission"> | Date | string
  }

  export type PermissionCreateWithoutObjectPermissionsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionUncheckedCreateWithoutObjectPermissionsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionCreateOrConnectWithoutObjectPermissionsInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutObjectPermissionsInput, PermissionUncheckedCreateWithoutObjectPermissionsInput>
  }

  export type PermissionUpsertWithoutObjectPermissionsInput = {
    update: XOR<PermissionUpdateWithoutObjectPermissionsInput, PermissionUncheckedUpdateWithoutObjectPermissionsInput>
    create: XOR<PermissionCreateWithoutObjectPermissionsInput, PermissionUncheckedCreateWithoutObjectPermissionsInput>
    where?: PermissionWhereInput
  }

  export type PermissionUpdateToOneWithWhereWithoutObjectPermissionsInput = {
    where?: PermissionWhereInput
    data: XOR<PermissionUpdateWithoutObjectPermissionsInput, PermissionUncheckedUpdateWithoutObjectPermissionsInput>
  }

  export type PermissionUpdateWithoutObjectPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateWithoutObjectPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobOrderCreateManyClientInput = {
    id?: string
    employer: string
    position: string
    salary: number
    currency: string
    headcount: number
    location: JsonNullValueInput | InputJsonValue
    status: $Enums.JobOrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobOrderUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    employer?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    headcount?: IntFieldUpdateOperationsInput | number
    location?: JsonNullValueInput | InputJsonValue
    status?: EnumJobOrderStatusFieldUpdateOperationsInput | $Enums.JobOrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visas?: VisaUpdateManyWithoutJobOrderNestedInput
    applications?: ApplicationUpdateManyWithoutJobOrderNestedInput
  }

  export type JobOrderUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    employer?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    headcount?: IntFieldUpdateOperationsInput | number
    location?: JsonNullValueInput | InputJsonValue
    status?: EnumJobOrderStatusFieldUpdateOperationsInput | $Enums.JobOrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visas?: VisaUncheckedUpdateManyWithoutJobOrderNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutJobOrderNestedInput
  }

  export type JobOrderUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    employer?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    headcount?: IntFieldUpdateOperationsInput | number
    location?: JsonNullValueInput | InputJsonValue
    status?: EnumJobOrderStatusFieldUpdateOperationsInput | $Enums.JobOrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisaCreateManyJobOrderInput = {
    id?: string
    identifier: string
    issuedBy: string
    position: string
    validFrom: Date | string
    validUntil: Date | string
    status: $Enums.VisaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationCreateManyJobOrderInput = {
    id?: string
    applicantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisaUpdateWithoutJobOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    issuedBy?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumVisaStatusFieldUpdateOperationsInput | $Enums.VisaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisaUncheckedUpdateWithoutJobOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    issuedBy?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumVisaStatusFieldUpdateOperationsInput | $Enums.VisaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisaUncheckedUpdateManyWithoutJobOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    issuedBy?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumVisaStatusFieldUpdateOperationsInput | $Enums.VisaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUpdateWithoutJobOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutJobOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyWithoutJobOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateManyApplicantInput = {
    id?: string
    jobOrderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobOrder?: JobOrderUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobOrderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobOrderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObjectPermissionCreateManyPermissionInput = {
    id?: string
    subjectId: string
    subjectType: $Enums.PermissionSubjectType
    objectId: string
    effect?: $Enums.PermissionEffect
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ObjectPermissionUpdateWithoutPermissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    subjectType?: EnumPermissionSubjectTypeFieldUpdateOperationsInput | $Enums.PermissionSubjectType
    objectId?: StringFieldUpdateOperationsInput | string
    effect?: EnumPermissionEffectFieldUpdateOperationsInput | $Enums.PermissionEffect
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObjectPermissionUncheckedUpdateWithoutPermissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    subjectType?: EnumPermissionSubjectTypeFieldUpdateOperationsInput | $Enums.PermissionSubjectType
    objectId?: StringFieldUpdateOperationsInput | string
    effect?: EnumPermissionEffectFieldUpdateOperationsInput | $Enums.PermissionEffect
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObjectPermissionUncheckedUpdateManyWithoutPermissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    subjectType?: EnumPermissionSubjectTypeFieldUpdateOperationsInput | $Enums.PermissionSubjectType
    objectId?: StringFieldUpdateOperationsInput | string
    effect?: EnumPermissionEffectFieldUpdateOperationsInput | $Enums.PermissionEffect
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}