
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
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model rating_user
 * 
 */
export type rating_user = $Result.DefaultSelection<Prisma.$rating_userPayload>
/**
 * Model rating_com
 * 
 */
export type rating_com = $Result.DefaultSelection<Prisma.$rating_comPayload>
/**
 * Model contact
 * 
 */
export type contact = $Result.DefaultSelection<Prisma.$contactPayload>
/**
 * Model category
 * 
 */
export type category = $Result.DefaultSelection<Prisma.$categoryPayload>
/**
 * Model experience
 * 
 */
export type experience = $Result.DefaultSelection<Prisma.$experiencePayload>
/**
 * Model career
 * 
 */
export type career = $Result.DefaultSelection<Prisma.$careerPayload>
/**
 * Model user_career
 * 
 */
export type user_career = $Result.DefaultSelection<Prisma.$user_careerPayload>
/**
 * Model job
 * 
 */
export type job = $Result.DefaultSelection<Prisma.$jobPayload>
/**
 * Model history
 * 
 */
export type history = $Result.DefaultSelection<Prisma.$historyPayload>
/**
 * Model job_exp
 * 
 */
export type job_exp = $Result.DefaultSelection<Prisma.$job_expPayload>
/**
 * Model bookmark
 * 
 */
export type bookmark = $Result.DefaultSelection<Prisma.$bookmarkPayload>
/**
 * Model post
 * 
 */
export type post = $Result.DefaultSelection<Prisma.$postPayload>

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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.rating_user`: Exposes CRUD operations for the **rating_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rating_users
    * const rating_users = await prisma.rating_user.findMany()
    * ```
    */
  get rating_user(): Prisma.rating_userDelegate<ExtArgs>;

  /**
   * `prisma.rating_com`: Exposes CRUD operations for the **rating_com** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rating_coms
    * const rating_coms = await prisma.rating_com.findMany()
    * ```
    */
  get rating_com(): Prisma.rating_comDelegate<ExtArgs>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.contactDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.categoryDelegate<ExtArgs>;

  /**
   * `prisma.experience`: Exposes CRUD operations for the **experience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experiences
    * const experiences = await prisma.experience.findMany()
    * ```
    */
  get experience(): Prisma.experienceDelegate<ExtArgs>;

  /**
   * `prisma.career`: Exposes CRUD operations for the **career** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Careers
    * const careers = await prisma.career.findMany()
    * ```
    */
  get career(): Prisma.careerDelegate<ExtArgs>;

  /**
   * `prisma.user_career`: Exposes CRUD operations for the **user_career** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_careers
    * const user_careers = await prisma.user_career.findMany()
    * ```
    */
  get user_career(): Prisma.user_careerDelegate<ExtArgs>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.job.findMany()
    * ```
    */
  get job(): Prisma.jobDelegate<ExtArgs>;

  /**
   * `prisma.history`: Exposes CRUD operations for the **history** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Histories
    * const histories = await prisma.history.findMany()
    * ```
    */
  get history(): Prisma.historyDelegate<ExtArgs>;

  /**
   * `prisma.job_exp`: Exposes CRUD operations for the **job_exp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Job_exps
    * const job_exps = await prisma.job_exp.findMany()
    * ```
    */
  get job_exp(): Prisma.job_expDelegate<ExtArgs>;

  /**
   * `prisma.bookmark`: Exposes CRUD operations for the **bookmark** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookmarks
    * const bookmarks = await prisma.bookmark.findMany()
    * ```
    */
  get bookmark(): Prisma.bookmarkDelegate<ExtArgs>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.postDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.12.1
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    user: 'user',
    rating_user: 'rating_user',
    rating_com: 'rating_com',
    contact: 'contact',
    category: 'category',
    experience: 'experience',
    career: 'career',
    user_career: 'user_career',
    job: 'job',
    history: 'history',
    job_exp: 'job_exp',
    bookmark: 'bookmark',
    post: 'post'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'rating_user' | 'rating_com' | 'contact' | 'category' | 'experience' | 'career' | 'user_career' | 'job' | 'history' | 'job_exp' | 'bookmark' | 'post'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      rating_user: {
        payload: Prisma.$rating_userPayload<ExtArgs>
        fields: Prisma.rating_userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rating_userFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rating_userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rating_userFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rating_userPayload>
          }
          findFirst: {
            args: Prisma.rating_userFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rating_userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rating_userFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rating_userPayload>
          }
          findMany: {
            args: Prisma.rating_userFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rating_userPayload>[]
          }
          create: {
            args: Prisma.rating_userCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rating_userPayload>
          }
          createMany: {
            args: Prisma.rating_userCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.rating_userDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rating_userPayload>
          }
          update: {
            args: Prisma.rating_userUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rating_userPayload>
          }
          deleteMany: {
            args: Prisma.rating_userDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.rating_userUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.rating_userUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rating_userPayload>
          }
          aggregate: {
            args: Prisma.Rating_userAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRating_user>
          }
          groupBy: {
            args: Prisma.rating_userGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Rating_userGroupByOutputType>[]
          }
          count: {
            args: Prisma.rating_userCountArgs<ExtArgs>,
            result: $Utils.Optional<Rating_userCountAggregateOutputType> | number
          }
        }
      }
      rating_com: {
        payload: Prisma.$rating_comPayload<ExtArgs>
        fields: Prisma.rating_comFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rating_comFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rating_comPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rating_comFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rating_comPayload>
          }
          findFirst: {
            args: Prisma.rating_comFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rating_comPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rating_comFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rating_comPayload>
          }
          findMany: {
            args: Prisma.rating_comFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rating_comPayload>[]
          }
          create: {
            args: Prisma.rating_comCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rating_comPayload>
          }
          createMany: {
            args: Prisma.rating_comCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.rating_comDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rating_comPayload>
          }
          update: {
            args: Prisma.rating_comUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rating_comPayload>
          }
          deleteMany: {
            args: Prisma.rating_comDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.rating_comUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.rating_comUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rating_comPayload>
          }
          aggregate: {
            args: Prisma.Rating_comAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRating_com>
          }
          groupBy: {
            args: Prisma.rating_comGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Rating_comGroupByOutputType>[]
          }
          count: {
            args: Prisma.rating_comCountArgs<ExtArgs>,
            result: $Utils.Optional<Rating_comCountAggregateOutputType> | number
          }
        }
      }
      contact: {
        payload: Prisma.$contactPayload<ExtArgs>
        fields: Prisma.contactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.contactFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.contactFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          findFirst: {
            args: Prisma.contactFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.contactFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          findMany: {
            args: Prisma.contactFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contactPayload>[]
          }
          create: {
            args: Prisma.contactCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          createMany: {
            args: Prisma.contactCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.contactDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          update: {
            args: Prisma.contactUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          deleteMany: {
            args: Prisma.contactDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.contactUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.contactUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.contactGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.contactCountArgs<ExtArgs>,
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      category: {
        payload: Prisma.$categoryPayload<ExtArgs>
        fields: Prisma.categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findFirst: {
            args: Prisma.categoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findMany: {
            args: Prisma.categoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          create: {
            args: Prisma.categoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          createMany: {
            args: Prisma.categoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.categoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          update: {
            args: Prisma.categoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          deleteMany: {
            args: Prisma.categoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.categoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.categoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.categoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      experience: {
        payload: Prisma.$experiencePayload<ExtArgs>
        fields: Prisma.experienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.experienceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$experiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.experienceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>
          }
          findFirst: {
            args: Prisma.experienceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$experiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.experienceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>
          }
          findMany: {
            args: Prisma.experienceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>[]
          }
          create: {
            args: Prisma.experienceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>
          }
          createMany: {
            args: Prisma.experienceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.experienceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>
          }
          update: {
            args: Prisma.experienceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>
          }
          deleteMany: {
            args: Prisma.experienceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.experienceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.experienceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>
          }
          aggregate: {
            args: Prisma.ExperienceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateExperience>
          }
          groupBy: {
            args: Prisma.experienceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.experienceCountArgs<ExtArgs>,
            result: $Utils.Optional<ExperienceCountAggregateOutputType> | number
          }
        }
      }
      career: {
        payload: Prisma.$careerPayload<ExtArgs>
        fields: Prisma.careerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.careerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$careerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.careerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$careerPayload>
          }
          findFirst: {
            args: Prisma.careerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$careerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.careerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$careerPayload>
          }
          findMany: {
            args: Prisma.careerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$careerPayload>[]
          }
          create: {
            args: Prisma.careerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$careerPayload>
          }
          createMany: {
            args: Prisma.careerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.careerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$careerPayload>
          }
          update: {
            args: Prisma.careerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$careerPayload>
          }
          deleteMany: {
            args: Prisma.careerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.careerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.careerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$careerPayload>
          }
          aggregate: {
            args: Prisma.CareerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCareer>
          }
          groupBy: {
            args: Prisma.careerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CareerGroupByOutputType>[]
          }
          count: {
            args: Prisma.careerCountArgs<ExtArgs>,
            result: $Utils.Optional<CareerCountAggregateOutputType> | number
          }
        }
      }
      user_career: {
        payload: Prisma.$user_careerPayload<ExtArgs>
        fields: Prisma.user_careerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_careerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_careerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_careerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_careerPayload>
          }
          findFirst: {
            args: Prisma.user_careerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_careerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_careerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_careerPayload>
          }
          findMany: {
            args: Prisma.user_careerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_careerPayload>[]
          }
          create: {
            args: Prisma.user_careerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_careerPayload>
          }
          createMany: {
            args: Prisma.user_careerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.user_careerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_careerPayload>
          }
          update: {
            args: Prisma.user_careerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_careerPayload>
          }
          deleteMany: {
            args: Prisma.user_careerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.user_careerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.user_careerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_careerPayload>
          }
          aggregate: {
            args: Prisma.User_careerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser_career>
          }
          groupBy: {
            args: Prisma.user_careerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<User_careerGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_careerCountArgs<ExtArgs>,
            result: $Utils.Optional<User_careerCountAggregateOutputType> | number
          }
        }
      }
      job: {
        payload: Prisma.$jobPayload<ExtArgs>
        fields: Prisma.jobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.jobFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.jobFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobPayload>
          }
          findFirst: {
            args: Prisma.jobFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.jobFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobPayload>
          }
          findMany: {
            args: Prisma.jobFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobPayload>[]
          }
          create: {
            args: Prisma.jobCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobPayload>
          }
          createMany: {
            args: Prisma.jobCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.jobDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobPayload>
          }
          update: {
            args: Prisma.jobUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobPayload>
          }
          deleteMany: {
            args: Prisma.jobDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.jobUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.jobUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobPayload>
          }
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateJob>
          }
          groupBy: {
            args: Prisma.jobGroupByArgs<ExtArgs>,
            result: $Utils.Optional<JobGroupByOutputType>[]
          }
          count: {
            args: Prisma.jobCountArgs<ExtArgs>,
            result: $Utils.Optional<JobCountAggregateOutputType> | number
          }
        }
      }
      history: {
        payload: Prisma.$historyPayload<ExtArgs>
        fields: Prisma.historyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.historyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$historyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.historyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$historyPayload>
          }
          findFirst: {
            args: Prisma.historyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$historyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.historyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$historyPayload>
          }
          findMany: {
            args: Prisma.historyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$historyPayload>[]
          }
          create: {
            args: Prisma.historyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$historyPayload>
          }
          createMany: {
            args: Prisma.historyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.historyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$historyPayload>
          }
          update: {
            args: Prisma.historyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$historyPayload>
          }
          deleteMany: {
            args: Prisma.historyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.historyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.historyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$historyPayload>
          }
          aggregate: {
            args: Prisma.HistoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHistory>
          }
          groupBy: {
            args: Prisma.historyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.historyCountArgs<ExtArgs>,
            result: $Utils.Optional<HistoryCountAggregateOutputType> | number
          }
        }
      }
      job_exp: {
        payload: Prisma.$job_expPayload<ExtArgs>
        fields: Prisma.job_expFieldRefs
        operations: {
          findUnique: {
            args: Prisma.job_expFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$job_expPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.job_expFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$job_expPayload>
          }
          findFirst: {
            args: Prisma.job_expFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$job_expPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.job_expFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$job_expPayload>
          }
          findMany: {
            args: Prisma.job_expFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$job_expPayload>[]
          }
          create: {
            args: Prisma.job_expCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$job_expPayload>
          }
          createMany: {
            args: Prisma.job_expCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.job_expDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$job_expPayload>
          }
          update: {
            args: Prisma.job_expUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$job_expPayload>
          }
          deleteMany: {
            args: Prisma.job_expDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.job_expUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.job_expUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$job_expPayload>
          }
          aggregate: {
            args: Prisma.Job_expAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateJob_exp>
          }
          groupBy: {
            args: Prisma.job_expGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Job_expGroupByOutputType>[]
          }
          count: {
            args: Prisma.job_expCountArgs<ExtArgs>,
            result: $Utils.Optional<Job_expCountAggregateOutputType> | number
          }
        }
      }
      bookmark: {
        payload: Prisma.$bookmarkPayload<ExtArgs>
        fields: Prisma.bookmarkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bookmarkFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bookmarkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bookmarkFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bookmarkPayload>
          }
          findFirst: {
            args: Prisma.bookmarkFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bookmarkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bookmarkFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bookmarkPayload>
          }
          findMany: {
            args: Prisma.bookmarkFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bookmarkPayload>[]
          }
          create: {
            args: Prisma.bookmarkCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bookmarkPayload>
          }
          createMany: {
            args: Prisma.bookmarkCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.bookmarkDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bookmarkPayload>
          }
          update: {
            args: Prisma.bookmarkUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bookmarkPayload>
          }
          deleteMany: {
            args: Prisma.bookmarkDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.bookmarkUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.bookmarkUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bookmarkPayload>
          }
          aggregate: {
            args: Prisma.BookmarkAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBookmark>
          }
          groupBy: {
            args: Prisma.bookmarkGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BookmarkGroupByOutputType>[]
          }
          count: {
            args: Prisma.bookmarkCountArgs<ExtArgs>,
            result: $Utils.Optional<BookmarkCountAggregateOutputType> | number
          }
        }
      }
      post: {
        payload: Prisma.$postPayload<ExtArgs>
        fields: Prisma.postFieldRefs
        operations: {
          findUnique: {
            args: Prisma.postFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.postFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postPayload>
          }
          findFirst: {
            args: Prisma.postFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.postFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postPayload>
          }
          findMany: {
            args: Prisma.postFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postPayload>[]
          }
          create: {
            args: Prisma.postCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postPayload>
          }
          createMany: {
            args: Prisma.postCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.postDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postPayload>
          }
          update: {
            args: Prisma.postUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postPayload>
          }
          deleteMany: {
            args: Prisma.postDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.postUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.postUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.postGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.postCountArgs<ExtArgs>,
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    post: number
    rating_user1: number
    rating_users2: number
    rating_com1: number
    rating_com2: number
    contact: number
    experience: number
    user_career: number
    history: number
    bookmark: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | UserCountOutputTypeCountPostArgs
    rating_user1?: boolean | UserCountOutputTypeCountRating_user1Args
    rating_users2?: boolean | UserCountOutputTypeCountRating_users2Args
    rating_com1?: boolean | UserCountOutputTypeCountRating_com1Args
    rating_com2?: boolean | UserCountOutputTypeCountRating_com2Args
    contact?: boolean | UserCountOutputTypeCountContactArgs
    experience?: boolean | UserCountOutputTypeCountExperienceArgs
    user_career?: boolean | UserCountOutputTypeCountUser_careerArgs
    history?: boolean | UserCountOutputTypeCountHistoryArgs
    bookmark?: boolean | UserCountOutputTypeCountBookmarkArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRating_user1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rating_userWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRating_users2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rating_userWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRating_com1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rating_comWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRating_com2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rating_comWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contactWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: experienceWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_careerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_careerWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historyWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookmarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookmarkWhereInput
  }



  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    experiences: number
    job_exp: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experiences?: boolean | CategoryCountOutputTypeCountExperiencesArgs
    job_exp?: boolean | CategoryCountOutputTypeCountJob_expArgs
  }

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountExperiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: experienceWhereInput
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountJob_expArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: job_expWhereInput
  }



  /**
   * Count Type CareerCountOutputType
   */

  export type CareerCountOutputType = {
    user_career: number
  }

  export type CareerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_career?: boolean | CareerCountOutputTypeCountUser_careerArgs
  }

  // Custom InputTypes

  /**
   * CareerCountOutputType without action
   */
  export type CareerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerCountOutputType
     */
    select?: CareerCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CareerCountOutputType without action
   */
  export type CareerCountOutputTypeCountUser_careerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_careerWhereInput
  }



  /**
   * Count Type JobCountOutputType
   */

  export type JobCountOutputType = {
    history: number
    job_exp: number
    rating_user: number
    rating_com: number
    bookmark: number
    post: number
  }

  export type JobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | JobCountOutputTypeCountHistoryArgs
    job_exp?: boolean | JobCountOutputTypeCountJob_expArgs
    rating_user?: boolean | JobCountOutputTypeCountRating_userArgs
    rating_com?: boolean | JobCountOutputTypeCountRating_comArgs
    bookmark?: boolean | JobCountOutputTypeCountBookmarkArgs
    post?: boolean | JobCountOutputTypeCountPostArgs
  }

  // Custom InputTypes

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCountOutputType
     */
    select?: JobCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historyWhereInput
  }


  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountJob_expArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: job_expWhereInput
  }


  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountRating_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rating_userWhereInput
  }


  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountRating_comArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rating_comWhereInput
  }


  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountBookmarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookmarkWhereInput
  }


  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postWhereInput
  }



  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UserSumAggregateOutputType = {
    user_id: number | null
  }

  export type UserMinAggregateOutputType = {
    user_id: number | null
    first_name: string | null
    last_name: string | null
    username: string | null
    image: string | null
    phone_number: string | null
    id_card: string | null
    email: string | null
    password: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: number | null
    first_name: string | null
    last_name: string | null
    username: string | null
    image: string | null
    phone_number: string | null
    id_card: string | null
    email: string | null
    password: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    first_name: number
    last_name: number
    username: number
    image: number
    phone_number: number
    id_card: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    user_id?: true
  }

  export type UserSumAggregateInputType = {
    user_id?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    first_name?: true
    last_name?: true
    username?: true
    image?: true
    phone_number?: true
    id_card?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    first_name?: true
    last_name?: true
    username?: true
    image?: true
    phone_number?: true
    id_card?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    first_name?: true
    last_name?: true
    username?: true
    image?: true
    phone_number?: true
    id_card?: true
    email?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: number
    first_name: string
    last_name: string
    username: string
    image: string | null
    phone_number: string
    id_card: string
    email: string
    password: string
    role: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
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


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    username?: boolean
    image?: boolean
    phone_number?: boolean
    id_card?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    post?: boolean | user$postArgs<ExtArgs>
    rating_user1?: boolean | user$rating_user1Args<ExtArgs>
    rating_users2?: boolean | user$rating_users2Args<ExtArgs>
    rating_com1?: boolean | user$rating_com1Args<ExtArgs>
    rating_com2?: boolean | user$rating_com2Args<ExtArgs>
    contact?: boolean | user$contactArgs<ExtArgs>
    experience?: boolean | user$experienceArgs<ExtArgs>
    user_career?: boolean | user$user_careerArgs<ExtArgs>
    history?: boolean | user$historyArgs<ExtArgs>
    bookmark?: boolean | user$bookmarkArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    username?: boolean
    image?: boolean
    phone_number?: boolean
    id_card?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | user$postArgs<ExtArgs>
    rating_user1?: boolean | user$rating_user1Args<ExtArgs>
    rating_users2?: boolean | user$rating_users2Args<ExtArgs>
    rating_com1?: boolean | user$rating_com1Args<ExtArgs>
    rating_com2?: boolean | user$rating_com2Args<ExtArgs>
    contact?: boolean | user$contactArgs<ExtArgs>
    experience?: boolean | user$experienceArgs<ExtArgs>
    user_career?: boolean | user$user_careerArgs<ExtArgs>
    history?: boolean | user$historyArgs<ExtArgs>
    bookmark?: boolean | user$bookmarkArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      post: Prisma.$postPayload<ExtArgs>[]
      rating_user1: Prisma.$rating_userPayload<ExtArgs>[]
      rating_users2: Prisma.$rating_userPayload<ExtArgs>[]
      rating_com1: Prisma.$rating_comPayload<ExtArgs>[]
      rating_com2: Prisma.$rating_comPayload<ExtArgs>[]
      contact: Prisma.$contactPayload<ExtArgs>[]
      experience: Prisma.$experiencePayload<ExtArgs>[]
      user_career: Prisma.$user_careerPayload<ExtArgs>[]
      history: Prisma.$historyPayload<ExtArgs>[]
      bookmark: Prisma.$bookmarkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      first_name: string
      last_name: string
      username: string
      image: string | null
      phone_number: string
      id_card: string
      email: string
      password: string
      role: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
    **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
    **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
    **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
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
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    post<T extends user$postArgs<ExtArgs> = {}>(args?: Subset<T, user$postArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, 'findMany'> | Null>;

    rating_user1<T extends user$rating_user1Args<ExtArgs> = {}>(args?: Subset<T, user$rating_user1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rating_userPayload<ExtArgs>, T, 'findMany'> | Null>;

    rating_users2<T extends user$rating_users2Args<ExtArgs> = {}>(args?: Subset<T, user$rating_users2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rating_userPayload<ExtArgs>, T, 'findMany'> | Null>;

    rating_com1<T extends user$rating_com1Args<ExtArgs> = {}>(args?: Subset<T, user$rating_com1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rating_comPayload<ExtArgs>, T, 'findMany'> | Null>;

    rating_com2<T extends user$rating_com2Args<ExtArgs> = {}>(args?: Subset<T, user$rating_com2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rating_comPayload<ExtArgs>, T, 'findMany'> | Null>;

    contact<T extends user$contactArgs<ExtArgs> = {}>(args?: Subset<T, user$contactArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, 'findMany'> | Null>;

    experience<T extends user$experienceArgs<ExtArgs> = {}>(args?: Subset<T, user$experienceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, 'findMany'> | Null>;

    user_career<T extends user$user_careerArgs<ExtArgs> = {}>(args?: Subset<T, user$user_careerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_careerPayload<ExtArgs>, T, 'findMany'> | Null>;

    history<T extends user$historyArgs<ExtArgs> = {}>(args?: Subset<T, user$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, 'findMany'> | Null>;

    bookmark<T extends user$bookmarkArgs<ExtArgs> = {}>(args?: Subset<T, user$bookmarkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookmarkPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the user model
   */ 
  interface userFieldRefs {
    readonly user_id: FieldRef<"user", 'Int'>
    readonly first_name: FieldRef<"user", 'String'>
    readonly last_name: FieldRef<"user", 'String'>
    readonly username: FieldRef<"user", 'String'>
    readonly image: FieldRef<"user", 'String'>
    readonly phone_number: FieldRef<"user", 'String'>
    readonly id_card: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }


  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }


  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }


  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }


  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
  }


  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }


  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }


  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
  }


  /**
   * user.post
   */
  export type user$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postInclude<ExtArgs> | null
    where?: postWhereInput
    orderBy?: postOrderByWithRelationInput | postOrderByWithRelationInput[]
    cursor?: postWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * user.rating_user1
   */
  export type user$rating_user1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_user
     */
    select?: rating_userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rating_userInclude<ExtArgs> | null
    where?: rating_userWhereInput
    orderBy?: rating_userOrderByWithRelationInput | rating_userOrderByWithRelationInput[]
    cursor?: rating_userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rating_userScalarFieldEnum | Rating_userScalarFieldEnum[]
  }


  /**
   * user.rating_users2
   */
  export type user$rating_users2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_user
     */
    select?: rating_userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rating_userInclude<ExtArgs> | null
    where?: rating_userWhereInput
    orderBy?: rating_userOrderByWithRelationInput | rating_userOrderByWithRelationInput[]
    cursor?: rating_userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rating_userScalarFieldEnum | Rating_userScalarFieldEnum[]
  }


  /**
   * user.rating_com1
   */
  export type user$rating_com1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_com
     */
    select?: rating_comSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rating_comInclude<ExtArgs> | null
    where?: rating_comWhereInput
    orderBy?: rating_comOrderByWithRelationInput | rating_comOrderByWithRelationInput[]
    cursor?: rating_comWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rating_comScalarFieldEnum | Rating_comScalarFieldEnum[]
  }


  /**
   * user.rating_com2
   */
  export type user$rating_com2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_com
     */
    select?: rating_comSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rating_comInclude<ExtArgs> | null
    where?: rating_comWhereInput
    orderBy?: rating_comOrderByWithRelationInput | rating_comOrderByWithRelationInput[]
    cursor?: rating_comWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rating_comScalarFieldEnum | Rating_comScalarFieldEnum[]
  }


  /**
   * user.contact
   */
  export type user$contactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contactInclude<ExtArgs> | null
    where?: contactWhereInput
    orderBy?: contactOrderByWithRelationInput | contactOrderByWithRelationInput[]
    cursor?: contactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }


  /**
   * user.experience
   */
  export type user$experienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: experienceInclude<ExtArgs> | null
    where?: experienceWhereInput
    orderBy?: experienceOrderByWithRelationInput | experienceOrderByWithRelationInput[]
    cursor?: experienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }


  /**
   * user.user_career
   */
  export type user$user_careerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_career
     */
    select?: user_careerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_careerInclude<ExtArgs> | null
    where?: user_careerWhereInput
    orderBy?: user_careerOrderByWithRelationInput | user_careerOrderByWithRelationInput[]
    cursor?: user_careerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_careerScalarFieldEnum | User_careerScalarFieldEnum[]
  }


  /**
   * user.history
   */
  export type user$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: historyInclude<ExtArgs> | null
    where?: historyWhereInput
    orderBy?: historyOrderByWithRelationInput | historyOrderByWithRelationInput[]
    cursor?: historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }


  /**
   * user.bookmark
   */
  export type user$bookmarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookmark
     */
    select?: bookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookmarkInclude<ExtArgs> | null
    where?: bookmarkWhereInput
    orderBy?: bookmarkOrderByWithRelationInput | bookmarkOrderByWithRelationInput[]
    cursor?: bookmarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }


  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
  }



  /**
   * Model rating_user
   */

  export type AggregateRating_user = {
    _count: Rating_userCountAggregateOutputType | null
    _avg: Rating_userAvgAggregateOutputType | null
    _sum: Rating_userSumAggregateOutputType | null
    _min: Rating_userMinAggregateOutputType | null
    _max: Rating_userMaxAggregateOutputType | null
  }

  export type Rating_userAvgAggregateOutputType = {
    rating_id: number | null
    user_id1: number | null
    user_id2: number | null
    job_id: number | null
    friendly_rating: number | null
    efficiency_rating: number | null
    accuracy_rating: number | null
  }

  export type Rating_userSumAggregateOutputType = {
    rating_id: number | null
    user_id1: number | null
    user_id2: number | null
    job_id: number | null
    friendly_rating: number | null
    efficiency_rating: number | null
    accuracy_rating: number | null
  }

  export type Rating_userMinAggregateOutputType = {
    rating_id: number | null
    user_id1: number | null
    user_id2: number | null
    job_id: number | null
    friendly_rating: number | null
    efficiency_rating: number | null
    accuracy_rating: number | null
  }

  export type Rating_userMaxAggregateOutputType = {
    rating_id: number | null
    user_id1: number | null
    user_id2: number | null
    job_id: number | null
    friendly_rating: number | null
    efficiency_rating: number | null
    accuracy_rating: number | null
  }

  export type Rating_userCountAggregateOutputType = {
    rating_id: number
    user_id1: number
    user_id2: number
    job_id: number
    friendly_rating: number
    efficiency_rating: number
    accuracy_rating: number
    _all: number
  }


  export type Rating_userAvgAggregateInputType = {
    rating_id?: true
    user_id1?: true
    user_id2?: true
    job_id?: true
    friendly_rating?: true
    efficiency_rating?: true
    accuracy_rating?: true
  }

  export type Rating_userSumAggregateInputType = {
    rating_id?: true
    user_id1?: true
    user_id2?: true
    job_id?: true
    friendly_rating?: true
    efficiency_rating?: true
    accuracy_rating?: true
  }

  export type Rating_userMinAggregateInputType = {
    rating_id?: true
    user_id1?: true
    user_id2?: true
    job_id?: true
    friendly_rating?: true
    efficiency_rating?: true
    accuracy_rating?: true
  }

  export type Rating_userMaxAggregateInputType = {
    rating_id?: true
    user_id1?: true
    user_id2?: true
    job_id?: true
    friendly_rating?: true
    efficiency_rating?: true
    accuracy_rating?: true
  }

  export type Rating_userCountAggregateInputType = {
    rating_id?: true
    user_id1?: true
    user_id2?: true
    job_id?: true
    friendly_rating?: true
    efficiency_rating?: true
    accuracy_rating?: true
    _all?: true
  }

  export type Rating_userAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rating_user to aggregate.
     */
    where?: rating_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rating_users to fetch.
     */
    orderBy?: rating_userOrderByWithRelationInput | rating_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rating_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rating_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rating_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rating_users
    **/
    _count?: true | Rating_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rating_userAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rating_userSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rating_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rating_userMaxAggregateInputType
  }

  export type GetRating_userAggregateType<T extends Rating_userAggregateArgs> = {
        [P in keyof T & keyof AggregateRating_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRating_user[P]>
      : GetScalarType<T[P], AggregateRating_user[P]>
  }




  export type rating_userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rating_userWhereInput
    orderBy?: rating_userOrderByWithAggregationInput | rating_userOrderByWithAggregationInput[]
    by: Rating_userScalarFieldEnum[] | Rating_userScalarFieldEnum
    having?: rating_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rating_userCountAggregateInputType | true
    _avg?: Rating_userAvgAggregateInputType
    _sum?: Rating_userSumAggregateInputType
    _min?: Rating_userMinAggregateInputType
    _max?: Rating_userMaxAggregateInputType
  }

  export type Rating_userGroupByOutputType = {
    rating_id: number
    user_id1: number
    user_id2: number
    job_id: number
    friendly_rating: number
    efficiency_rating: number
    accuracy_rating: number
    _count: Rating_userCountAggregateOutputType | null
    _avg: Rating_userAvgAggregateOutputType | null
    _sum: Rating_userSumAggregateOutputType | null
    _min: Rating_userMinAggregateOutputType | null
    _max: Rating_userMaxAggregateOutputType | null
  }

  type GetRating_userGroupByPayload<T extends rating_userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rating_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rating_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rating_userGroupByOutputType[P]>
            : GetScalarType<T[P], Rating_userGroupByOutputType[P]>
        }
      >
    >


  export type rating_userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    rating_id?: boolean
    user_id1?: boolean
    user_id2?: boolean
    job_id?: boolean
    friendly_rating?: boolean
    efficiency_rating?: boolean
    accuracy_rating?: boolean
    user1?: boolean | userDefaultArgs<ExtArgs>
    user2?: boolean | userDefaultArgs<ExtArgs>
    job?: boolean | jobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating_user"]>

  export type rating_userSelectScalar = {
    rating_id?: boolean
    user_id1?: boolean
    user_id2?: boolean
    job_id?: boolean
    friendly_rating?: boolean
    efficiency_rating?: boolean
    accuracy_rating?: boolean
  }

  export type rating_userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | userDefaultArgs<ExtArgs>
    user2?: boolean | userDefaultArgs<ExtArgs>
    job?: boolean | jobDefaultArgs<ExtArgs>
  }


  export type $rating_userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rating_user"
    objects: {
      user1: Prisma.$userPayload<ExtArgs>
      user2: Prisma.$userPayload<ExtArgs>
      job: Prisma.$jobPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      rating_id: number
      user_id1: number
      user_id2: number
      job_id: number
      friendly_rating: number
      efficiency_rating: number
      accuracy_rating: number
    }, ExtArgs["result"]["rating_user"]>
    composites: {}
  }


  type rating_userGetPayload<S extends boolean | null | undefined | rating_userDefaultArgs> = $Result.GetResult<Prisma.$rating_userPayload, S>

  type rating_userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<rating_userFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Rating_userCountAggregateInputType | true
    }

  export interface rating_userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rating_user'], meta: { name: 'rating_user' } }
    /**
     * Find zero or one Rating_user that matches the filter.
     * @param {rating_userFindUniqueArgs} args - Arguments to find a Rating_user
     * @example
     * // Get one Rating_user
     * const rating_user = await prisma.rating_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends rating_userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, rating_userFindUniqueArgs<ExtArgs>>
    ): Prisma__rating_userClient<$Result.GetResult<Prisma.$rating_userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Rating_user that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {rating_userFindUniqueOrThrowArgs} args - Arguments to find a Rating_user
     * @example
     * // Get one Rating_user
     * const rating_user = await prisma.rating_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends rating_userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, rating_userFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__rating_userClient<$Result.GetResult<Prisma.$rating_userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Rating_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rating_userFindFirstArgs} args - Arguments to find a Rating_user
     * @example
     * // Get one Rating_user
     * const rating_user = await prisma.rating_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends rating_userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, rating_userFindFirstArgs<ExtArgs>>
    ): Prisma__rating_userClient<$Result.GetResult<Prisma.$rating_userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Rating_user that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rating_userFindFirstOrThrowArgs} args - Arguments to find a Rating_user
     * @example
     * // Get one Rating_user
     * const rating_user = await prisma.rating_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends rating_userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, rating_userFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__rating_userClient<$Result.GetResult<Prisma.$rating_userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Rating_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rating_userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rating_users
     * const rating_users = await prisma.rating_user.findMany()
     * 
     * // Get first 10 Rating_users
     * const rating_users = await prisma.rating_user.findMany({ take: 10 })
     * 
     * // Only select the `rating_id`
     * const rating_userWithRating_idOnly = await prisma.rating_user.findMany({ select: { rating_id: true } })
     * 
    **/
    findMany<T extends rating_userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rating_userFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rating_userPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Rating_user.
     * @param {rating_userCreateArgs} args - Arguments to create a Rating_user.
     * @example
     * // Create one Rating_user
     * const Rating_user = await prisma.rating_user.create({
     *   data: {
     *     // ... data to create a Rating_user
     *   }
     * })
     * 
    **/
    create<T extends rating_userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, rating_userCreateArgs<ExtArgs>>
    ): Prisma__rating_userClient<$Result.GetResult<Prisma.$rating_userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Rating_users.
     *     @param {rating_userCreateManyArgs} args - Arguments to create many Rating_users.
     *     @example
     *     // Create many Rating_users
     *     const rating_user = await prisma.rating_user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends rating_userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rating_userCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rating_user.
     * @param {rating_userDeleteArgs} args - Arguments to delete one Rating_user.
     * @example
     * // Delete one Rating_user
     * const Rating_user = await prisma.rating_user.delete({
     *   where: {
     *     // ... filter to delete one Rating_user
     *   }
     * })
     * 
    **/
    delete<T extends rating_userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, rating_userDeleteArgs<ExtArgs>>
    ): Prisma__rating_userClient<$Result.GetResult<Prisma.$rating_userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Rating_user.
     * @param {rating_userUpdateArgs} args - Arguments to update one Rating_user.
     * @example
     * // Update one Rating_user
     * const rating_user = await prisma.rating_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends rating_userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, rating_userUpdateArgs<ExtArgs>>
    ): Prisma__rating_userClient<$Result.GetResult<Prisma.$rating_userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Rating_users.
     * @param {rating_userDeleteManyArgs} args - Arguments to filter Rating_users to delete.
     * @example
     * // Delete a few Rating_users
     * const { count } = await prisma.rating_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends rating_userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rating_userDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rating_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rating_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rating_users
     * const rating_user = await prisma.rating_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends rating_userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, rating_userUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rating_user.
     * @param {rating_userUpsertArgs} args - Arguments to update or create a Rating_user.
     * @example
     * // Update or create a Rating_user
     * const rating_user = await prisma.rating_user.upsert({
     *   create: {
     *     // ... data to create a Rating_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rating_user we want to update
     *   }
     * })
    **/
    upsert<T extends rating_userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, rating_userUpsertArgs<ExtArgs>>
    ): Prisma__rating_userClient<$Result.GetResult<Prisma.$rating_userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Rating_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rating_userCountArgs} args - Arguments to filter Rating_users to count.
     * @example
     * // Count the number of Rating_users
     * const count = await prisma.rating_user.count({
     *   where: {
     *     // ... the filter for the Rating_users we want to count
     *   }
     * })
    **/
    count<T extends rating_userCountArgs>(
      args?: Subset<T, rating_userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rating_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rating_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rating_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Rating_userAggregateArgs>(args: Subset<T, Rating_userAggregateArgs>): Prisma.PrismaPromise<GetRating_userAggregateType<T>>

    /**
     * Group by Rating_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rating_userGroupByArgs} args - Group by arguments.
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
      T extends rating_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rating_userGroupByArgs['orderBy'] }
        : { orderBy?: rating_userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, rating_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRating_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rating_user model
   */
  readonly fields: rating_userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rating_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rating_userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user1<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user2<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    job<T extends jobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, jobDefaultArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the rating_user model
   */ 
  interface rating_userFieldRefs {
    readonly rating_id: FieldRef<"rating_user", 'Int'>
    readonly user_id1: FieldRef<"rating_user", 'Int'>
    readonly user_id2: FieldRef<"rating_user", 'Int'>
    readonly job_id: FieldRef<"rating_user", 'Int'>
    readonly friendly_rating: FieldRef<"rating_user", 'Float'>
    readonly efficiency_rating: FieldRef<"rating_user", 'Float'>
    readonly accuracy_rating: FieldRef<"rating_user", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * rating_user findUnique
   */
  export type rating_userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_user
     */
    select?: rating_userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rating_userInclude<ExtArgs> | null
    /**
     * Filter, which rating_user to fetch.
     */
    where: rating_userWhereUniqueInput
  }


  /**
   * rating_user findUniqueOrThrow
   */
  export type rating_userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_user
     */
    select?: rating_userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rating_userInclude<ExtArgs> | null
    /**
     * Filter, which rating_user to fetch.
     */
    where: rating_userWhereUniqueInput
  }


  /**
   * rating_user findFirst
   */
  export type rating_userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_user
     */
    select?: rating_userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rating_userInclude<ExtArgs> | null
    /**
     * Filter, which rating_user to fetch.
     */
    where?: rating_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rating_users to fetch.
     */
    orderBy?: rating_userOrderByWithRelationInput | rating_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rating_users.
     */
    cursor?: rating_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rating_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rating_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rating_users.
     */
    distinct?: Rating_userScalarFieldEnum | Rating_userScalarFieldEnum[]
  }


  /**
   * rating_user findFirstOrThrow
   */
  export type rating_userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_user
     */
    select?: rating_userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rating_userInclude<ExtArgs> | null
    /**
     * Filter, which rating_user to fetch.
     */
    where?: rating_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rating_users to fetch.
     */
    orderBy?: rating_userOrderByWithRelationInput | rating_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rating_users.
     */
    cursor?: rating_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rating_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rating_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rating_users.
     */
    distinct?: Rating_userScalarFieldEnum | Rating_userScalarFieldEnum[]
  }


  /**
   * rating_user findMany
   */
  export type rating_userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_user
     */
    select?: rating_userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rating_userInclude<ExtArgs> | null
    /**
     * Filter, which rating_users to fetch.
     */
    where?: rating_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rating_users to fetch.
     */
    orderBy?: rating_userOrderByWithRelationInput | rating_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rating_users.
     */
    cursor?: rating_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rating_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rating_users.
     */
    skip?: number
    distinct?: Rating_userScalarFieldEnum | Rating_userScalarFieldEnum[]
  }


  /**
   * rating_user create
   */
  export type rating_userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_user
     */
    select?: rating_userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rating_userInclude<ExtArgs> | null
    /**
     * The data needed to create a rating_user.
     */
    data: XOR<rating_userCreateInput, rating_userUncheckedCreateInput>
  }


  /**
   * rating_user createMany
   */
  export type rating_userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rating_users.
     */
    data: rating_userCreateManyInput | rating_userCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * rating_user update
   */
  export type rating_userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_user
     */
    select?: rating_userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rating_userInclude<ExtArgs> | null
    /**
     * The data needed to update a rating_user.
     */
    data: XOR<rating_userUpdateInput, rating_userUncheckedUpdateInput>
    /**
     * Choose, which rating_user to update.
     */
    where: rating_userWhereUniqueInput
  }


  /**
   * rating_user updateMany
   */
  export type rating_userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rating_users.
     */
    data: XOR<rating_userUpdateManyMutationInput, rating_userUncheckedUpdateManyInput>
    /**
     * Filter which rating_users to update
     */
    where?: rating_userWhereInput
  }


  /**
   * rating_user upsert
   */
  export type rating_userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_user
     */
    select?: rating_userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rating_userInclude<ExtArgs> | null
    /**
     * The filter to search for the rating_user to update in case it exists.
     */
    where: rating_userWhereUniqueInput
    /**
     * In case the rating_user found by the `where` argument doesn't exist, create a new rating_user with this data.
     */
    create: XOR<rating_userCreateInput, rating_userUncheckedCreateInput>
    /**
     * In case the rating_user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rating_userUpdateInput, rating_userUncheckedUpdateInput>
  }


  /**
   * rating_user delete
   */
  export type rating_userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_user
     */
    select?: rating_userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rating_userInclude<ExtArgs> | null
    /**
     * Filter which rating_user to delete.
     */
    where: rating_userWhereUniqueInput
  }


  /**
   * rating_user deleteMany
   */
  export type rating_userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rating_users to delete
     */
    where?: rating_userWhereInput
  }


  /**
   * rating_user without action
   */
  export type rating_userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_user
     */
    select?: rating_userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rating_userInclude<ExtArgs> | null
  }



  /**
   * Model rating_com
   */

  export type AggregateRating_com = {
    _count: Rating_comCountAggregateOutputType | null
    _avg: Rating_comAvgAggregateOutputType | null
    _sum: Rating_comSumAggregateOutputType | null
    _min: Rating_comMinAggregateOutputType | null
    _max: Rating_comMaxAggregateOutputType | null
  }

  export type Rating_comAvgAggregateOutputType = {
    rating_id: number | null
    user_id1: number | null
    user_id2: number | null
    job_id: number | null
    rating: number | null
  }

  export type Rating_comSumAggregateOutputType = {
    rating_id: number | null
    user_id1: number | null
    user_id2: number | null
    job_id: number | null
    rating: number | null
  }

  export type Rating_comMinAggregateOutputType = {
    rating_id: number | null
    user_id1: number | null
    user_id2: number | null
    job_id: number | null
    rating: number | null
  }

  export type Rating_comMaxAggregateOutputType = {
    rating_id: number | null
    user_id1: number | null
    user_id2: number | null
    job_id: number | null
    rating: number | null
  }

  export type Rating_comCountAggregateOutputType = {
    rating_id: number
    user_id1: number
    user_id2: number
    job_id: number
    rating: number
    _all: number
  }


  export type Rating_comAvgAggregateInputType = {
    rating_id?: true
    user_id1?: true
    user_id2?: true
    job_id?: true
    rating?: true
  }

  export type Rating_comSumAggregateInputType = {
    rating_id?: true
    user_id1?: true
    user_id2?: true
    job_id?: true
    rating?: true
  }

  export type Rating_comMinAggregateInputType = {
    rating_id?: true
    user_id1?: true
    user_id2?: true
    job_id?: true
    rating?: true
  }

  export type Rating_comMaxAggregateInputType = {
    rating_id?: true
    user_id1?: true
    user_id2?: true
    job_id?: true
    rating?: true
  }

  export type Rating_comCountAggregateInputType = {
    rating_id?: true
    user_id1?: true
    user_id2?: true
    job_id?: true
    rating?: true
    _all?: true
  }

  export type Rating_comAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rating_com to aggregate.
     */
    where?: rating_comWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rating_coms to fetch.
     */
    orderBy?: rating_comOrderByWithRelationInput | rating_comOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rating_comWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rating_coms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rating_coms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rating_coms
    **/
    _count?: true | Rating_comCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rating_comAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rating_comSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rating_comMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rating_comMaxAggregateInputType
  }

  export type GetRating_comAggregateType<T extends Rating_comAggregateArgs> = {
        [P in keyof T & keyof AggregateRating_com]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRating_com[P]>
      : GetScalarType<T[P], AggregateRating_com[P]>
  }




  export type rating_comGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rating_comWhereInput
    orderBy?: rating_comOrderByWithAggregationInput | rating_comOrderByWithAggregationInput[]
    by: Rating_comScalarFieldEnum[] | Rating_comScalarFieldEnum
    having?: rating_comScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rating_comCountAggregateInputType | true
    _avg?: Rating_comAvgAggregateInputType
    _sum?: Rating_comSumAggregateInputType
    _min?: Rating_comMinAggregateInputType
    _max?: Rating_comMaxAggregateInputType
  }

  export type Rating_comGroupByOutputType = {
    rating_id: number
    user_id1: number
    user_id2: number
    job_id: number
    rating: number
    _count: Rating_comCountAggregateOutputType | null
    _avg: Rating_comAvgAggregateOutputType | null
    _sum: Rating_comSumAggregateOutputType | null
    _min: Rating_comMinAggregateOutputType | null
    _max: Rating_comMaxAggregateOutputType | null
  }

  type GetRating_comGroupByPayload<T extends rating_comGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rating_comGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rating_comGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rating_comGroupByOutputType[P]>
            : GetScalarType<T[P], Rating_comGroupByOutputType[P]>
        }
      >
    >


  export type rating_comSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    rating_id?: boolean
    user_id1?: boolean
    user_id2?: boolean
    job_id?: boolean
    rating?: boolean
    user1?: boolean | userDefaultArgs<ExtArgs>
    user2?: boolean | userDefaultArgs<ExtArgs>
    job?: boolean | jobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating_com"]>

  export type rating_comSelectScalar = {
    rating_id?: boolean
    user_id1?: boolean
    user_id2?: boolean
    job_id?: boolean
    rating?: boolean
  }

  export type rating_comInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | userDefaultArgs<ExtArgs>
    user2?: boolean | userDefaultArgs<ExtArgs>
    job?: boolean | jobDefaultArgs<ExtArgs>
  }


  export type $rating_comPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rating_com"
    objects: {
      user1: Prisma.$userPayload<ExtArgs>
      user2: Prisma.$userPayload<ExtArgs>
      job: Prisma.$jobPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      rating_id: number
      user_id1: number
      user_id2: number
      job_id: number
      rating: number
    }, ExtArgs["result"]["rating_com"]>
    composites: {}
  }


  type rating_comGetPayload<S extends boolean | null | undefined | rating_comDefaultArgs> = $Result.GetResult<Prisma.$rating_comPayload, S>

  type rating_comCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<rating_comFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Rating_comCountAggregateInputType | true
    }

  export interface rating_comDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rating_com'], meta: { name: 'rating_com' } }
    /**
     * Find zero or one Rating_com that matches the filter.
     * @param {rating_comFindUniqueArgs} args - Arguments to find a Rating_com
     * @example
     * // Get one Rating_com
     * const rating_com = await prisma.rating_com.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends rating_comFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, rating_comFindUniqueArgs<ExtArgs>>
    ): Prisma__rating_comClient<$Result.GetResult<Prisma.$rating_comPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Rating_com that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {rating_comFindUniqueOrThrowArgs} args - Arguments to find a Rating_com
     * @example
     * // Get one Rating_com
     * const rating_com = await prisma.rating_com.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends rating_comFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, rating_comFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__rating_comClient<$Result.GetResult<Prisma.$rating_comPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Rating_com that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rating_comFindFirstArgs} args - Arguments to find a Rating_com
     * @example
     * // Get one Rating_com
     * const rating_com = await prisma.rating_com.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends rating_comFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, rating_comFindFirstArgs<ExtArgs>>
    ): Prisma__rating_comClient<$Result.GetResult<Prisma.$rating_comPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Rating_com that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rating_comFindFirstOrThrowArgs} args - Arguments to find a Rating_com
     * @example
     * // Get one Rating_com
     * const rating_com = await prisma.rating_com.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends rating_comFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, rating_comFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__rating_comClient<$Result.GetResult<Prisma.$rating_comPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Rating_coms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rating_comFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rating_coms
     * const rating_coms = await prisma.rating_com.findMany()
     * 
     * // Get first 10 Rating_coms
     * const rating_coms = await prisma.rating_com.findMany({ take: 10 })
     * 
     * // Only select the `rating_id`
     * const rating_comWithRating_idOnly = await prisma.rating_com.findMany({ select: { rating_id: true } })
     * 
    **/
    findMany<T extends rating_comFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rating_comFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rating_comPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Rating_com.
     * @param {rating_comCreateArgs} args - Arguments to create a Rating_com.
     * @example
     * // Create one Rating_com
     * const Rating_com = await prisma.rating_com.create({
     *   data: {
     *     // ... data to create a Rating_com
     *   }
     * })
     * 
    **/
    create<T extends rating_comCreateArgs<ExtArgs>>(
      args: SelectSubset<T, rating_comCreateArgs<ExtArgs>>
    ): Prisma__rating_comClient<$Result.GetResult<Prisma.$rating_comPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Rating_coms.
     *     @param {rating_comCreateManyArgs} args - Arguments to create many Rating_coms.
     *     @example
     *     // Create many Rating_coms
     *     const rating_com = await prisma.rating_com.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends rating_comCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rating_comCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rating_com.
     * @param {rating_comDeleteArgs} args - Arguments to delete one Rating_com.
     * @example
     * // Delete one Rating_com
     * const Rating_com = await prisma.rating_com.delete({
     *   where: {
     *     // ... filter to delete one Rating_com
     *   }
     * })
     * 
    **/
    delete<T extends rating_comDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, rating_comDeleteArgs<ExtArgs>>
    ): Prisma__rating_comClient<$Result.GetResult<Prisma.$rating_comPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Rating_com.
     * @param {rating_comUpdateArgs} args - Arguments to update one Rating_com.
     * @example
     * // Update one Rating_com
     * const rating_com = await prisma.rating_com.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends rating_comUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, rating_comUpdateArgs<ExtArgs>>
    ): Prisma__rating_comClient<$Result.GetResult<Prisma.$rating_comPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Rating_coms.
     * @param {rating_comDeleteManyArgs} args - Arguments to filter Rating_coms to delete.
     * @example
     * // Delete a few Rating_coms
     * const { count } = await prisma.rating_com.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends rating_comDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rating_comDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rating_coms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rating_comUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rating_coms
     * const rating_com = await prisma.rating_com.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends rating_comUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, rating_comUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rating_com.
     * @param {rating_comUpsertArgs} args - Arguments to update or create a Rating_com.
     * @example
     * // Update or create a Rating_com
     * const rating_com = await prisma.rating_com.upsert({
     *   create: {
     *     // ... data to create a Rating_com
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rating_com we want to update
     *   }
     * })
    **/
    upsert<T extends rating_comUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, rating_comUpsertArgs<ExtArgs>>
    ): Prisma__rating_comClient<$Result.GetResult<Prisma.$rating_comPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Rating_coms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rating_comCountArgs} args - Arguments to filter Rating_coms to count.
     * @example
     * // Count the number of Rating_coms
     * const count = await prisma.rating_com.count({
     *   where: {
     *     // ... the filter for the Rating_coms we want to count
     *   }
     * })
    **/
    count<T extends rating_comCountArgs>(
      args?: Subset<T, rating_comCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rating_comCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rating_com.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rating_comAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Rating_comAggregateArgs>(args: Subset<T, Rating_comAggregateArgs>): Prisma.PrismaPromise<GetRating_comAggregateType<T>>

    /**
     * Group by Rating_com.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rating_comGroupByArgs} args - Group by arguments.
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
      T extends rating_comGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rating_comGroupByArgs['orderBy'] }
        : { orderBy?: rating_comGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, rating_comGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRating_comGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rating_com model
   */
  readonly fields: rating_comFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rating_com.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rating_comClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user1<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user2<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    job<T extends jobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, jobDefaultArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the rating_com model
   */ 
  interface rating_comFieldRefs {
    readonly rating_id: FieldRef<"rating_com", 'Int'>
    readonly user_id1: FieldRef<"rating_com", 'Int'>
    readonly user_id2: FieldRef<"rating_com", 'Int'>
    readonly job_id: FieldRef<"rating_com", 'Int'>
    readonly rating: FieldRef<"rating_com", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * rating_com findUnique
   */
  export type rating_comFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_com
     */
    select?: rating_comSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rating_comInclude<ExtArgs> | null
    /**
     * Filter, which rating_com to fetch.
     */
    where: rating_comWhereUniqueInput
  }


  /**
   * rating_com findUniqueOrThrow
   */
  export type rating_comFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_com
     */
    select?: rating_comSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rating_comInclude<ExtArgs> | null
    /**
     * Filter, which rating_com to fetch.
     */
    where: rating_comWhereUniqueInput
  }


  /**
   * rating_com findFirst
   */
  export type rating_comFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_com
     */
    select?: rating_comSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rating_comInclude<ExtArgs> | null
    /**
     * Filter, which rating_com to fetch.
     */
    where?: rating_comWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rating_coms to fetch.
     */
    orderBy?: rating_comOrderByWithRelationInput | rating_comOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rating_coms.
     */
    cursor?: rating_comWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rating_coms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rating_coms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rating_coms.
     */
    distinct?: Rating_comScalarFieldEnum | Rating_comScalarFieldEnum[]
  }


  /**
   * rating_com findFirstOrThrow
   */
  export type rating_comFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_com
     */
    select?: rating_comSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rating_comInclude<ExtArgs> | null
    /**
     * Filter, which rating_com to fetch.
     */
    where?: rating_comWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rating_coms to fetch.
     */
    orderBy?: rating_comOrderByWithRelationInput | rating_comOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rating_coms.
     */
    cursor?: rating_comWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rating_coms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rating_coms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rating_coms.
     */
    distinct?: Rating_comScalarFieldEnum | Rating_comScalarFieldEnum[]
  }


  /**
   * rating_com findMany
   */
  export type rating_comFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_com
     */
    select?: rating_comSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rating_comInclude<ExtArgs> | null
    /**
     * Filter, which rating_coms to fetch.
     */
    where?: rating_comWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rating_coms to fetch.
     */
    orderBy?: rating_comOrderByWithRelationInput | rating_comOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rating_coms.
     */
    cursor?: rating_comWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rating_coms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rating_coms.
     */
    skip?: number
    distinct?: Rating_comScalarFieldEnum | Rating_comScalarFieldEnum[]
  }


  /**
   * rating_com create
   */
  export type rating_comCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_com
     */
    select?: rating_comSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rating_comInclude<ExtArgs> | null
    /**
     * The data needed to create a rating_com.
     */
    data: XOR<rating_comCreateInput, rating_comUncheckedCreateInput>
  }


  /**
   * rating_com createMany
   */
  export type rating_comCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rating_coms.
     */
    data: rating_comCreateManyInput | rating_comCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * rating_com update
   */
  export type rating_comUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_com
     */
    select?: rating_comSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rating_comInclude<ExtArgs> | null
    /**
     * The data needed to update a rating_com.
     */
    data: XOR<rating_comUpdateInput, rating_comUncheckedUpdateInput>
    /**
     * Choose, which rating_com to update.
     */
    where: rating_comWhereUniqueInput
  }


  /**
   * rating_com updateMany
   */
  export type rating_comUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rating_coms.
     */
    data: XOR<rating_comUpdateManyMutationInput, rating_comUncheckedUpdateManyInput>
    /**
     * Filter which rating_coms to update
     */
    where?: rating_comWhereInput
  }


  /**
   * rating_com upsert
   */
  export type rating_comUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_com
     */
    select?: rating_comSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rating_comInclude<ExtArgs> | null
    /**
     * The filter to search for the rating_com to update in case it exists.
     */
    where: rating_comWhereUniqueInput
    /**
     * In case the rating_com found by the `where` argument doesn't exist, create a new rating_com with this data.
     */
    create: XOR<rating_comCreateInput, rating_comUncheckedCreateInput>
    /**
     * In case the rating_com was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rating_comUpdateInput, rating_comUncheckedUpdateInput>
  }


  /**
   * rating_com delete
   */
  export type rating_comDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_com
     */
    select?: rating_comSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rating_comInclude<ExtArgs> | null
    /**
     * Filter which rating_com to delete.
     */
    where: rating_comWhereUniqueInput
  }


  /**
   * rating_com deleteMany
   */
  export type rating_comDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rating_coms to delete
     */
    where?: rating_comWhereInput
  }


  /**
   * rating_com without action
   */
  export type rating_comDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_com
     */
    select?: rating_comSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rating_comInclude<ExtArgs> | null
  }



  /**
   * Model contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactAvgAggregateOutputType = {
    contact_id: number | null
    user_id: number | null
  }

  export type ContactSumAggregateOutputType = {
    contact_id: number | null
    user_id: number | null
  }

  export type ContactMinAggregateOutputType = {
    contact_id: number | null
    user_id: number | null
    facebook: string | null
    instagram: string | null
    linkedin: string | null
  }

  export type ContactMaxAggregateOutputType = {
    contact_id: number | null
    user_id: number | null
    facebook: string | null
    instagram: string | null
    linkedin: string | null
  }

  export type ContactCountAggregateOutputType = {
    contact_id: number
    user_id: number
    facebook: number
    instagram: number
    linkedin: number
    _all: number
  }


  export type ContactAvgAggregateInputType = {
    contact_id?: true
    user_id?: true
  }

  export type ContactSumAggregateInputType = {
    contact_id?: true
    user_id?: true
  }

  export type ContactMinAggregateInputType = {
    contact_id?: true
    user_id?: true
    facebook?: true
    instagram?: true
    linkedin?: true
  }

  export type ContactMaxAggregateInputType = {
    contact_id?: true
    user_id?: true
    facebook?: true
    instagram?: true
    linkedin?: true
  }

  export type ContactCountAggregateInputType = {
    contact_id?: true
    user_id?: true
    facebook?: true
    instagram?: true
    linkedin?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contact to aggregate.
     */
    where?: contactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactOrderByWithRelationInput | contactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: contactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type contactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contactWhereInput
    orderBy?: contactOrderByWithAggregationInput | contactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: contactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _avg?: ContactAvgAggregateInputType
    _sum?: ContactSumAggregateInputType
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    contact_id: number
    user_id: number
    facebook: string
    instagram: string
    linkedin: string
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends contactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type contactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    contact_id?: boolean
    user_id?: boolean
    facebook?: boolean
    instagram?: boolean
    linkedin?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type contactSelectScalar = {
    contact_id?: boolean
    user_id?: boolean
    facebook?: boolean
    instagram?: boolean
    linkedin?: boolean
  }

  export type contactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }


  export type $contactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "contact"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      contact_id: number
      user_id: number
      facebook: string
      instagram: string
      linkedin: string
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }


  type contactGetPayload<S extends boolean | null | undefined | contactDefaultArgs> = $Result.GetResult<Prisma.$contactPayload, S>

  type contactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<contactFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface contactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['contact'], meta: { name: 'contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {contactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends contactFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, contactFindUniqueArgs<ExtArgs>>
    ): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Contact that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {contactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends contactFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, contactFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends contactFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, contactFindFirstArgs<ExtArgs>>
    ): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends contactFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, contactFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `contact_id`
     * const contactWithContact_idOnly = await prisma.contact.findMany({ select: { contact_id: true } })
     * 
    **/
    findMany<T extends contactFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, contactFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Contact.
     * @param {contactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
    **/
    create<T extends contactCreateArgs<ExtArgs>>(
      args: SelectSubset<T, contactCreateArgs<ExtArgs>>
    ): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Contacts.
     *     @param {contactCreateManyArgs} args - Arguments to create many Contacts.
     *     @example
     *     // Create many Contacts
     *     const contact = await prisma.contact.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends contactCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, contactCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contact.
     * @param {contactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
    **/
    delete<T extends contactDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, contactDeleteArgs<ExtArgs>>
    ): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Contact.
     * @param {contactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends contactUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, contactUpdateArgs<ExtArgs>>
    ): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Contacts.
     * @param {contactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends contactDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, contactDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends contactUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, contactUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contact.
     * @param {contactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
    **/
    upsert<T extends contactUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, contactUpsertArgs<ExtArgs>>
    ): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends contactCountArgs>(
      args?: Subset<T, contactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactGroupByArgs} args - Group by arguments.
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
      T extends contactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contactGroupByArgs['orderBy'] }
        : { orderBy?: contactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, contactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the contact model
   */
  readonly fields: contactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the contact model
   */ 
  interface contactFieldRefs {
    readonly contact_id: FieldRef<"contact", 'Int'>
    readonly user_id: FieldRef<"contact", 'Int'>
    readonly facebook: FieldRef<"contact", 'String'>
    readonly instagram: FieldRef<"contact", 'String'>
    readonly linkedin: FieldRef<"contact", 'String'>
  }
    

  // Custom InputTypes

  /**
   * contact findUnique
   */
  export type contactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contactInclude<ExtArgs> | null
    /**
     * Filter, which contact to fetch.
     */
    where: contactWhereUniqueInput
  }


  /**
   * contact findUniqueOrThrow
   */
  export type contactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contactInclude<ExtArgs> | null
    /**
     * Filter, which contact to fetch.
     */
    where: contactWhereUniqueInput
  }


  /**
   * contact findFirst
   */
  export type contactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contactInclude<ExtArgs> | null
    /**
     * Filter, which contact to fetch.
     */
    where?: contactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactOrderByWithRelationInput | contactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contacts.
     */
    cursor?: contactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }


  /**
   * contact findFirstOrThrow
   */
  export type contactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contactInclude<ExtArgs> | null
    /**
     * Filter, which contact to fetch.
     */
    where?: contactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactOrderByWithRelationInput | contactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contacts.
     */
    cursor?: contactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }


  /**
   * contact findMany
   */
  export type contactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contactInclude<ExtArgs> | null
    /**
     * Filter, which contacts to fetch.
     */
    where?: contactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactOrderByWithRelationInput | contactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing contacts.
     */
    cursor?: contactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }


  /**
   * contact create
   */
  export type contactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contactInclude<ExtArgs> | null
    /**
     * The data needed to create a contact.
     */
    data: XOR<contactCreateInput, contactUncheckedCreateInput>
  }


  /**
   * contact createMany
   */
  export type contactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contacts.
     */
    data: contactCreateManyInput | contactCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * contact update
   */
  export type contactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contactInclude<ExtArgs> | null
    /**
     * The data needed to update a contact.
     */
    data: XOR<contactUpdateInput, contactUncheckedUpdateInput>
    /**
     * Choose, which contact to update.
     */
    where: contactWhereUniqueInput
  }


  /**
   * contact updateMany
   */
  export type contactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contacts.
     */
    data: XOR<contactUpdateManyMutationInput, contactUncheckedUpdateManyInput>
    /**
     * Filter which contacts to update
     */
    where?: contactWhereInput
  }


  /**
   * contact upsert
   */
  export type contactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contactInclude<ExtArgs> | null
    /**
     * The filter to search for the contact to update in case it exists.
     */
    where: contactWhereUniqueInput
    /**
     * In case the contact found by the `where` argument doesn't exist, create a new contact with this data.
     */
    create: XOR<contactCreateInput, contactUncheckedCreateInput>
    /**
     * In case the contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contactUpdateInput, contactUncheckedUpdateInput>
  }


  /**
   * contact delete
   */
  export type contactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contactInclude<ExtArgs> | null
    /**
     * Filter which contact to delete.
     */
    where: contactWhereUniqueInput
  }


  /**
   * contact deleteMany
   */
  export type contactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contacts to delete
     */
    where?: contactWhereInput
  }


  /**
   * contact without action
   */
  export type contactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contactInclude<ExtArgs> | null
  }



  /**
   * Model category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    category_id: number | null
  }

  export type CategorySumAggregateOutputType = {
    category_id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    category_id: number | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    category_id: number | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    category_id: number
    name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    category_id?: true
  }

  export type CategorySumAggregateInputType = {
    category_id?: true
  }

  export type CategoryMinAggregateInputType = {
    category_id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    category_id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    category_id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithAggregationInput | categoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    category_id: number
    name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    name?: boolean
    experiences?: boolean | category$experiencesArgs<ExtArgs>
    job_exp?: boolean | category$job_expArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectScalar = {
    category_id?: boolean
    name?: boolean
  }

  export type categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experiences?: boolean | category$experiencesArgs<ExtArgs>
    job_exp?: boolean | category$job_expArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "category"
    objects: {
      experiences: Prisma.$experiencePayload<ExtArgs>[]
      job_exp: Prisma.$job_expPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      category_id: number
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type categoryGetPayload<S extends boolean | null | undefined | categoryDefaultArgs> = $Result.GetResult<Prisma.$categoryPayload, S>

  type categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<categoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category'], meta: { name: 'category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends categoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, categoryFindUniqueArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends categoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryFindFirstArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `category_id`
     * const categoryWithCategory_idOnly = await prisma.category.findMany({ select: { category_id: true } })
     * 
    **/
    findMany<T extends categoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends categoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, categoryCreateArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends categoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends categoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, categoryDeleteArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends categoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, categoryUpdateArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends categoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends categoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, categoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends categoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, categoryUpsertArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryGroupByArgs} args - Group by arguments.
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
      T extends categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryGroupByArgs['orderBy'] }
        : { orderBy?: categoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the category model
   */
  readonly fields: categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    experiences<T extends category$experiencesArgs<ExtArgs> = {}>(args?: Subset<T, category$experiencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, 'findMany'> | Null>;

    job_exp<T extends category$job_expArgs<ExtArgs> = {}>(args?: Subset<T, category$job_expArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_expPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the category model
   */ 
  interface categoryFieldRefs {
    readonly category_id: FieldRef<"category", 'Int'>
    readonly name: FieldRef<"category", 'String'>
  }
    

  // Custom InputTypes

  /**
   * category findUnique
   */
  export type categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }


  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }


  /**
   * category findFirst
   */
  export type categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * category findMany
   */
  export type categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * category create
   */
  export type categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a category.
     */
    data: XOR<categoryCreateInput, categoryUncheckedCreateInput>
  }


  /**
   * category createMany
   */
  export type categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * category update
   */
  export type categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput
  }


  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
  }


  /**
   * category upsert
   */
  export type categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
  }


  /**
   * category delete
   */
  export type categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput
  }


  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput
  }


  /**
   * category.experiences
   */
  export type category$experiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: experienceInclude<ExtArgs> | null
    where?: experienceWhereInput
    orderBy?: experienceOrderByWithRelationInput | experienceOrderByWithRelationInput[]
    cursor?: experienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }


  /**
   * category.job_exp
   */
  export type category$job_expArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_exp
     */
    select?: job_expSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_expInclude<ExtArgs> | null
    where?: job_expWhereInput
    orderBy?: job_expOrderByWithRelationInput | job_expOrderByWithRelationInput[]
    cursor?: job_expWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Job_expScalarFieldEnum | Job_expScalarFieldEnum[]
  }


  /**
   * category without action
   */
  export type categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
  }



  /**
   * Model experience
   */

  export type AggregateExperience = {
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  export type ExperienceAvgAggregateOutputType = {
    user_id: number | null
    category_id: number | null
  }

  export type ExperienceSumAggregateOutputType = {
    user_id: number | null
    category_id: number | null
  }

  export type ExperienceMinAggregateOutputType = {
    user_id: number | null
    category_id: number | null
  }

  export type ExperienceMaxAggregateOutputType = {
    user_id: number | null
    category_id: number | null
  }

  export type ExperienceCountAggregateOutputType = {
    user_id: number
    category_id: number
    _all: number
  }


  export type ExperienceAvgAggregateInputType = {
    user_id?: true
    category_id?: true
  }

  export type ExperienceSumAggregateInputType = {
    user_id?: true
    category_id?: true
  }

  export type ExperienceMinAggregateInputType = {
    user_id?: true
    category_id?: true
  }

  export type ExperienceMaxAggregateInputType = {
    user_id?: true
    category_id?: true
  }

  export type ExperienceCountAggregateInputType = {
    user_id?: true
    category_id?: true
    _all?: true
  }

  export type ExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which experience to aggregate.
     */
    where?: experienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of experiences to fetch.
     */
    orderBy?: experienceOrderByWithRelationInput | experienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: experienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned experiences
    **/
    _count?: true | ExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExperienceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExperienceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienceMaxAggregateInputType
  }

  export type GetExperienceAggregateType<T extends ExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperience[P]>
      : GetScalarType<T[P], AggregateExperience[P]>
  }




  export type experienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: experienceWhereInput
    orderBy?: experienceOrderByWithAggregationInput | experienceOrderByWithAggregationInput[]
    by: ExperienceScalarFieldEnum[] | ExperienceScalarFieldEnum
    having?: experienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienceCountAggregateInputType | true
    _avg?: ExperienceAvgAggregateInputType
    _sum?: ExperienceSumAggregateInputType
    _min?: ExperienceMinAggregateInputType
    _max?: ExperienceMaxAggregateInputType
  }

  export type ExperienceGroupByOutputType = {
    user_id: number
    category_id: number
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  type GetExperienceGroupByPayload<T extends experienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
        }
      >
    >


  export type experienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    category_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    category?: boolean | categoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type experienceSelectScalar = {
    user_id?: boolean
    category_id?: boolean
  }

  export type experienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    category?: boolean | categoryDefaultArgs<ExtArgs>
  }


  export type $experiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "experience"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      category: Prisma.$categoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      category_id: number
    }, ExtArgs["result"]["experience"]>
    composites: {}
  }


  type experienceGetPayload<S extends boolean | null | undefined | experienceDefaultArgs> = $Result.GetResult<Prisma.$experiencePayload, S>

  type experienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<experienceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExperienceCountAggregateInputType | true
    }

  export interface experienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['experience'], meta: { name: 'experience' } }
    /**
     * Find zero or one Experience that matches the filter.
     * @param {experienceFindUniqueArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends experienceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, experienceFindUniqueArgs<ExtArgs>>
    ): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Experience that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {experienceFindUniqueOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends experienceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, experienceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Experience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experienceFindFirstArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends experienceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, experienceFindFirstArgs<ExtArgs>>
    ): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Experience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experienceFindFirstOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends experienceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, experienceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experienceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experiences
     * const experiences = await prisma.experience.findMany()
     * 
     * // Get first 10 Experiences
     * const experiences = await prisma.experience.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const experienceWithUser_idOnly = await prisma.experience.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends experienceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, experienceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Experience.
     * @param {experienceCreateArgs} args - Arguments to create a Experience.
     * @example
     * // Create one Experience
     * const Experience = await prisma.experience.create({
     *   data: {
     *     // ... data to create a Experience
     *   }
     * })
     * 
    **/
    create<T extends experienceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, experienceCreateArgs<ExtArgs>>
    ): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Experiences.
     *     @param {experienceCreateManyArgs} args - Arguments to create many Experiences.
     *     @example
     *     // Create many Experiences
     *     const experience = await prisma.experience.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends experienceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, experienceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Experience.
     * @param {experienceDeleteArgs} args - Arguments to delete one Experience.
     * @example
     * // Delete one Experience
     * const Experience = await prisma.experience.delete({
     *   where: {
     *     // ... filter to delete one Experience
     *   }
     * })
     * 
    **/
    delete<T extends experienceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, experienceDeleteArgs<ExtArgs>>
    ): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Experience.
     * @param {experienceUpdateArgs} args - Arguments to update one Experience.
     * @example
     * // Update one Experience
     * const experience = await prisma.experience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends experienceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, experienceUpdateArgs<ExtArgs>>
    ): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Experiences.
     * @param {experienceDeleteManyArgs} args - Arguments to filter Experiences to delete.
     * @example
     * // Delete a few Experiences
     * const { count } = await prisma.experience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends experienceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, experienceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends experienceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, experienceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Experience.
     * @param {experienceUpsertArgs} args - Arguments to update or create a Experience.
     * @example
     * // Update or create a Experience
     * const experience = await prisma.experience.upsert({
     *   create: {
     *     // ... data to create a Experience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experience we want to update
     *   }
     * })
    **/
    upsert<T extends experienceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, experienceUpsertArgs<ExtArgs>>
    ): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experienceCountArgs} args - Arguments to filter Experiences to count.
     * @example
     * // Count the number of Experiences
     * const count = await prisma.experience.count({
     *   where: {
     *     // ... the filter for the Experiences we want to count
     *   }
     * })
    **/
    count<T extends experienceCountArgs>(
      args?: Subset<T, experienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExperienceAggregateArgs>(args: Subset<T, ExperienceAggregateArgs>): Prisma.PrismaPromise<GetExperienceAggregateType<T>>

    /**
     * Group by Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experienceGroupByArgs} args - Group by arguments.
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
      T extends experienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: experienceGroupByArgs['orderBy'] }
        : { orderBy?: experienceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, experienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the experience model
   */
  readonly fields: experienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for experience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__experienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    category<T extends categoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoryDefaultArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the experience model
   */ 
  interface experienceFieldRefs {
    readonly user_id: FieldRef<"experience", 'Int'>
    readonly category_id: FieldRef<"experience", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * experience findUnique
   */
  export type experienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * Filter, which experience to fetch.
     */
    where: experienceWhereUniqueInput
  }


  /**
   * experience findUniqueOrThrow
   */
  export type experienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * Filter, which experience to fetch.
     */
    where: experienceWhereUniqueInput
  }


  /**
   * experience findFirst
   */
  export type experienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * Filter, which experience to fetch.
     */
    where?: experienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of experiences to fetch.
     */
    orderBy?: experienceOrderByWithRelationInput | experienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for experiences.
     */
    cursor?: experienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }


  /**
   * experience findFirstOrThrow
   */
  export type experienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * Filter, which experience to fetch.
     */
    where?: experienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of experiences to fetch.
     */
    orderBy?: experienceOrderByWithRelationInput | experienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for experiences.
     */
    cursor?: experienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }


  /**
   * experience findMany
   */
  export type experienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * Filter, which experiences to fetch.
     */
    where?: experienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of experiences to fetch.
     */
    orderBy?: experienceOrderByWithRelationInput | experienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing experiences.
     */
    cursor?: experienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` experiences.
     */
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }


  /**
   * experience create
   */
  export type experienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * The data needed to create a experience.
     */
    data: XOR<experienceCreateInput, experienceUncheckedCreateInput>
  }


  /**
   * experience createMany
   */
  export type experienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many experiences.
     */
    data: experienceCreateManyInput | experienceCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * experience update
   */
  export type experienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * The data needed to update a experience.
     */
    data: XOR<experienceUpdateInput, experienceUncheckedUpdateInput>
    /**
     * Choose, which experience to update.
     */
    where: experienceWhereUniqueInput
  }


  /**
   * experience updateMany
   */
  export type experienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update experiences.
     */
    data: XOR<experienceUpdateManyMutationInput, experienceUncheckedUpdateManyInput>
    /**
     * Filter which experiences to update
     */
    where?: experienceWhereInput
  }


  /**
   * experience upsert
   */
  export type experienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * The filter to search for the experience to update in case it exists.
     */
    where: experienceWhereUniqueInput
    /**
     * In case the experience found by the `where` argument doesn't exist, create a new experience with this data.
     */
    create: XOR<experienceCreateInput, experienceUncheckedCreateInput>
    /**
     * In case the experience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<experienceUpdateInput, experienceUncheckedUpdateInput>
  }


  /**
   * experience delete
   */
  export type experienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * Filter which experience to delete.
     */
    where: experienceWhereUniqueInput
  }


  /**
   * experience deleteMany
   */
  export type experienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which experiences to delete
     */
    where?: experienceWhereInput
  }


  /**
   * experience without action
   */
  export type experienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: experienceInclude<ExtArgs> | null
  }



  /**
   * Model career
   */

  export type AggregateCareer = {
    _count: CareerCountAggregateOutputType | null
    _avg: CareerAvgAggregateOutputType | null
    _sum: CareerSumAggregateOutputType | null
    _min: CareerMinAggregateOutputType | null
    _max: CareerMaxAggregateOutputType | null
  }

  export type CareerAvgAggregateOutputType = {
    career_id: number | null
  }

  export type CareerSumAggregateOutputType = {
    career_id: number | null
  }

  export type CareerMinAggregateOutputType = {
    career_id: number | null
    name: string | null
  }

  export type CareerMaxAggregateOutputType = {
    career_id: number | null
    name: string | null
  }

  export type CareerCountAggregateOutputType = {
    career_id: number
    name: number
    _all: number
  }


  export type CareerAvgAggregateInputType = {
    career_id?: true
  }

  export type CareerSumAggregateInputType = {
    career_id?: true
  }

  export type CareerMinAggregateInputType = {
    career_id?: true
    name?: true
  }

  export type CareerMaxAggregateInputType = {
    career_id?: true
    name?: true
  }

  export type CareerCountAggregateInputType = {
    career_id?: true
    name?: true
    _all?: true
  }

  export type CareerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which career to aggregate.
     */
    where?: careerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of careers to fetch.
     */
    orderBy?: careerOrderByWithRelationInput | careerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: careerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned careers
    **/
    _count?: true | CareerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CareerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CareerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CareerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CareerMaxAggregateInputType
  }

  export type GetCareerAggregateType<T extends CareerAggregateArgs> = {
        [P in keyof T & keyof AggregateCareer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCareer[P]>
      : GetScalarType<T[P], AggregateCareer[P]>
  }




  export type careerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: careerWhereInput
    orderBy?: careerOrderByWithAggregationInput | careerOrderByWithAggregationInput[]
    by: CareerScalarFieldEnum[] | CareerScalarFieldEnum
    having?: careerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CareerCountAggregateInputType | true
    _avg?: CareerAvgAggregateInputType
    _sum?: CareerSumAggregateInputType
    _min?: CareerMinAggregateInputType
    _max?: CareerMaxAggregateInputType
  }

  export type CareerGroupByOutputType = {
    career_id: number
    name: string
    _count: CareerCountAggregateOutputType | null
    _avg: CareerAvgAggregateOutputType | null
    _sum: CareerSumAggregateOutputType | null
    _min: CareerMinAggregateOutputType | null
    _max: CareerMaxAggregateOutputType | null
  }

  type GetCareerGroupByPayload<T extends careerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CareerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CareerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CareerGroupByOutputType[P]>
            : GetScalarType<T[P], CareerGroupByOutputType[P]>
        }
      >
    >


  export type careerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    career_id?: boolean
    name?: boolean
    user_career?: boolean | career$user_careerArgs<ExtArgs>
    _count?: boolean | CareerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["career"]>

  export type careerSelectScalar = {
    career_id?: boolean
    name?: boolean
  }

  export type careerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_career?: boolean | career$user_careerArgs<ExtArgs>
    _count?: boolean | CareerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $careerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "career"
    objects: {
      user_career: Prisma.$user_careerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      career_id: number
      name: string
    }, ExtArgs["result"]["career"]>
    composites: {}
  }


  type careerGetPayload<S extends boolean | null | undefined | careerDefaultArgs> = $Result.GetResult<Prisma.$careerPayload, S>

  type careerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<careerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CareerCountAggregateInputType | true
    }

  export interface careerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['career'], meta: { name: 'career' } }
    /**
     * Find zero or one Career that matches the filter.
     * @param {careerFindUniqueArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends careerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, careerFindUniqueArgs<ExtArgs>>
    ): Prisma__careerClient<$Result.GetResult<Prisma.$careerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Career that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {careerFindUniqueOrThrowArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends careerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, careerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__careerClient<$Result.GetResult<Prisma.$careerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Career that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {careerFindFirstArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends careerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, careerFindFirstArgs<ExtArgs>>
    ): Prisma__careerClient<$Result.GetResult<Prisma.$careerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Career that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {careerFindFirstOrThrowArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends careerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, careerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__careerClient<$Result.GetResult<Prisma.$careerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Careers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {careerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Careers
     * const careers = await prisma.career.findMany()
     * 
     * // Get first 10 Careers
     * const careers = await prisma.career.findMany({ take: 10 })
     * 
     * // Only select the `career_id`
     * const careerWithCareer_idOnly = await prisma.career.findMany({ select: { career_id: true } })
     * 
    **/
    findMany<T extends careerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, careerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$careerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Career.
     * @param {careerCreateArgs} args - Arguments to create a Career.
     * @example
     * // Create one Career
     * const Career = await prisma.career.create({
     *   data: {
     *     // ... data to create a Career
     *   }
     * })
     * 
    **/
    create<T extends careerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, careerCreateArgs<ExtArgs>>
    ): Prisma__careerClient<$Result.GetResult<Prisma.$careerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Careers.
     *     @param {careerCreateManyArgs} args - Arguments to create many Careers.
     *     @example
     *     // Create many Careers
     *     const career = await prisma.career.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends careerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, careerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Career.
     * @param {careerDeleteArgs} args - Arguments to delete one Career.
     * @example
     * // Delete one Career
     * const Career = await prisma.career.delete({
     *   where: {
     *     // ... filter to delete one Career
     *   }
     * })
     * 
    **/
    delete<T extends careerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, careerDeleteArgs<ExtArgs>>
    ): Prisma__careerClient<$Result.GetResult<Prisma.$careerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Career.
     * @param {careerUpdateArgs} args - Arguments to update one Career.
     * @example
     * // Update one Career
     * const career = await prisma.career.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends careerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, careerUpdateArgs<ExtArgs>>
    ): Prisma__careerClient<$Result.GetResult<Prisma.$careerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Careers.
     * @param {careerDeleteManyArgs} args - Arguments to filter Careers to delete.
     * @example
     * // Delete a few Careers
     * const { count } = await prisma.career.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends careerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, careerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {careerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Careers
     * const career = await prisma.career.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends careerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, careerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Career.
     * @param {careerUpsertArgs} args - Arguments to update or create a Career.
     * @example
     * // Update or create a Career
     * const career = await prisma.career.upsert({
     *   create: {
     *     // ... data to create a Career
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Career we want to update
     *   }
     * })
    **/
    upsert<T extends careerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, careerUpsertArgs<ExtArgs>>
    ): Prisma__careerClient<$Result.GetResult<Prisma.$careerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {careerCountArgs} args - Arguments to filter Careers to count.
     * @example
     * // Count the number of Careers
     * const count = await prisma.career.count({
     *   where: {
     *     // ... the filter for the Careers we want to count
     *   }
     * })
    **/
    count<T extends careerCountArgs>(
      args?: Subset<T, careerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CareerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Career.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CareerAggregateArgs>(args: Subset<T, CareerAggregateArgs>): Prisma.PrismaPromise<GetCareerAggregateType<T>>

    /**
     * Group by Career.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {careerGroupByArgs} args - Group by arguments.
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
      T extends careerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: careerGroupByArgs['orderBy'] }
        : { orderBy?: careerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, careerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCareerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the career model
   */
  readonly fields: careerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for career.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__careerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user_career<T extends career$user_careerArgs<ExtArgs> = {}>(args?: Subset<T, career$user_careerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_careerPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the career model
   */ 
  interface careerFieldRefs {
    readonly career_id: FieldRef<"career", 'Int'>
    readonly name: FieldRef<"career", 'String'>
  }
    

  // Custom InputTypes

  /**
   * career findUnique
   */
  export type careerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the career
     */
    select?: careerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: careerInclude<ExtArgs> | null
    /**
     * Filter, which career to fetch.
     */
    where: careerWhereUniqueInput
  }


  /**
   * career findUniqueOrThrow
   */
  export type careerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the career
     */
    select?: careerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: careerInclude<ExtArgs> | null
    /**
     * Filter, which career to fetch.
     */
    where: careerWhereUniqueInput
  }


  /**
   * career findFirst
   */
  export type careerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the career
     */
    select?: careerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: careerInclude<ExtArgs> | null
    /**
     * Filter, which career to fetch.
     */
    where?: careerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of careers to fetch.
     */
    orderBy?: careerOrderByWithRelationInput | careerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for careers.
     */
    cursor?: careerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of careers.
     */
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }


  /**
   * career findFirstOrThrow
   */
  export type careerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the career
     */
    select?: careerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: careerInclude<ExtArgs> | null
    /**
     * Filter, which career to fetch.
     */
    where?: careerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of careers to fetch.
     */
    orderBy?: careerOrderByWithRelationInput | careerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for careers.
     */
    cursor?: careerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of careers.
     */
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }


  /**
   * career findMany
   */
  export type careerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the career
     */
    select?: careerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: careerInclude<ExtArgs> | null
    /**
     * Filter, which careers to fetch.
     */
    where?: careerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of careers to fetch.
     */
    orderBy?: careerOrderByWithRelationInput | careerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing careers.
     */
    cursor?: careerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` careers.
     */
    skip?: number
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }


  /**
   * career create
   */
  export type careerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the career
     */
    select?: careerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: careerInclude<ExtArgs> | null
    /**
     * The data needed to create a career.
     */
    data: XOR<careerCreateInput, careerUncheckedCreateInput>
  }


  /**
   * career createMany
   */
  export type careerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many careers.
     */
    data: careerCreateManyInput | careerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * career update
   */
  export type careerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the career
     */
    select?: careerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: careerInclude<ExtArgs> | null
    /**
     * The data needed to update a career.
     */
    data: XOR<careerUpdateInput, careerUncheckedUpdateInput>
    /**
     * Choose, which career to update.
     */
    where: careerWhereUniqueInput
  }


  /**
   * career updateMany
   */
  export type careerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update careers.
     */
    data: XOR<careerUpdateManyMutationInput, careerUncheckedUpdateManyInput>
    /**
     * Filter which careers to update
     */
    where?: careerWhereInput
  }


  /**
   * career upsert
   */
  export type careerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the career
     */
    select?: careerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: careerInclude<ExtArgs> | null
    /**
     * The filter to search for the career to update in case it exists.
     */
    where: careerWhereUniqueInput
    /**
     * In case the career found by the `where` argument doesn't exist, create a new career with this data.
     */
    create: XOR<careerCreateInput, careerUncheckedCreateInput>
    /**
     * In case the career was found with the provided `where` argument, update it with this data.
     */
    update: XOR<careerUpdateInput, careerUncheckedUpdateInput>
  }


  /**
   * career delete
   */
  export type careerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the career
     */
    select?: careerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: careerInclude<ExtArgs> | null
    /**
     * Filter which career to delete.
     */
    where: careerWhereUniqueInput
  }


  /**
   * career deleteMany
   */
  export type careerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which careers to delete
     */
    where?: careerWhereInput
  }


  /**
   * career.user_career
   */
  export type career$user_careerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_career
     */
    select?: user_careerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_careerInclude<ExtArgs> | null
    where?: user_careerWhereInput
    orderBy?: user_careerOrderByWithRelationInput | user_careerOrderByWithRelationInput[]
    cursor?: user_careerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_careerScalarFieldEnum | User_careerScalarFieldEnum[]
  }


  /**
   * career without action
   */
  export type careerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the career
     */
    select?: careerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: careerInclude<ExtArgs> | null
  }



  /**
   * Model user_career
   */

  export type AggregateUser_career = {
    _count: User_careerCountAggregateOutputType | null
    _avg: User_careerAvgAggregateOutputType | null
    _sum: User_careerSumAggregateOutputType | null
    _min: User_careerMinAggregateOutputType | null
    _max: User_careerMaxAggregateOutputType | null
  }

  export type User_careerAvgAggregateOutputType = {
    user_id: number | null
    career_id: number | null
  }

  export type User_careerSumAggregateOutputType = {
    user_id: number | null
    career_id: number | null
  }

  export type User_careerMinAggregateOutputType = {
    user_id: number | null
    career_id: number | null
  }

  export type User_careerMaxAggregateOutputType = {
    user_id: number | null
    career_id: number | null
  }

  export type User_careerCountAggregateOutputType = {
    user_id: number
    career_id: number
    _all: number
  }


  export type User_careerAvgAggregateInputType = {
    user_id?: true
    career_id?: true
  }

  export type User_careerSumAggregateInputType = {
    user_id?: true
    career_id?: true
  }

  export type User_careerMinAggregateInputType = {
    user_id?: true
    career_id?: true
  }

  export type User_careerMaxAggregateInputType = {
    user_id?: true
    career_id?: true
  }

  export type User_careerCountAggregateInputType = {
    user_id?: true
    career_id?: true
    _all?: true
  }

  export type User_careerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_career to aggregate.
     */
    where?: user_careerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_careers to fetch.
     */
    orderBy?: user_careerOrderByWithRelationInput | user_careerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_careerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_careers
    **/
    _count?: true | User_careerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_careerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_careerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_careerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_careerMaxAggregateInputType
  }

  export type GetUser_careerAggregateType<T extends User_careerAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_career]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_career[P]>
      : GetScalarType<T[P], AggregateUser_career[P]>
  }




  export type user_careerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_careerWhereInput
    orderBy?: user_careerOrderByWithAggregationInput | user_careerOrderByWithAggregationInput[]
    by: User_careerScalarFieldEnum[] | User_careerScalarFieldEnum
    having?: user_careerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_careerCountAggregateInputType | true
    _avg?: User_careerAvgAggregateInputType
    _sum?: User_careerSumAggregateInputType
    _min?: User_careerMinAggregateInputType
    _max?: User_careerMaxAggregateInputType
  }

  export type User_careerGroupByOutputType = {
    user_id: number
    career_id: number
    _count: User_careerCountAggregateOutputType | null
    _avg: User_careerAvgAggregateOutputType | null
    _sum: User_careerSumAggregateOutputType | null
    _min: User_careerMinAggregateOutputType | null
    _max: User_careerMaxAggregateOutputType | null
  }

  type GetUser_careerGroupByPayload<T extends user_careerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_careerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_careerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_careerGroupByOutputType[P]>
            : GetScalarType<T[P], User_careerGroupByOutputType[P]>
        }
      >
    >


  export type user_careerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    career_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    career?: boolean | careerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_career"]>

  export type user_careerSelectScalar = {
    user_id?: boolean
    career_id?: boolean
  }

  export type user_careerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    career?: boolean | careerDefaultArgs<ExtArgs>
  }


  export type $user_careerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_career"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      career: Prisma.$careerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      career_id: number
    }, ExtArgs["result"]["user_career"]>
    composites: {}
  }


  type user_careerGetPayload<S extends boolean | null | undefined | user_careerDefaultArgs> = $Result.GetResult<Prisma.$user_careerPayload, S>

  type user_careerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<user_careerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: User_careerCountAggregateInputType | true
    }

  export interface user_careerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_career'], meta: { name: 'user_career' } }
    /**
     * Find zero or one User_career that matches the filter.
     * @param {user_careerFindUniqueArgs} args - Arguments to find a User_career
     * @example
     * // Get one User_career
     * const user_career = await prisma.user_career.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends user_careerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, user_careerFindUniqueArgs<ExtArgs>>
    ): Prisma__user_careerClient<$Result.GetResult<Prisma.$user_careerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User_career that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {user_careerFindUniqueOrThrowArgs} args - Arguments to find a User_career
     * @example
     * // Get one User_career
     * const user_career = await prisma.user_career.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends user_careerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_careerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__user_careerClient<$Result.GetResult<Prisma.$user_careerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User_career that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_careerFindFirstArgs} args - Arguments to find a User_career
     * @example
     * // Get one User_career
     * const user_career = await prisma.user_career.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends user_careerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, user_careerFindFirstArgs<ExtArgs>>
    ): Prisma__user_careerClient<$Result.GetResult<Prisma.$user_careerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User_career that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_careerFindFirstOrThrowArgs} args - Arguments to find a User_career
     * @example
     * // Get one User_career
     * const user_career = await prisma.user_career.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends user_careerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_careerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__user_careerClient<$Result.GetResult<Prisma.$user_careerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more User_careers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_careerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_careers
     * const user_careers = await prisma.user_career.findMany()
     * 
     * // Get first 10 User_careers
     * const user_careers = await prisma.user_career.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const user_careerWithUser_idOnly = await prisma.user_career.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends user_careerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_careerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_careerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User_career.
     * @param {user_careerCreateArgs} args - Arguments to create a User_career.
     * @example
     * // Create one User_career
     * const User_career = await prisma.user_career.create({
     *   data: {
     *     // ... data to create a User_career
     *   }
     * })
     * 
    **/
    create<T extends user_careerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, user_careerCreateArgs<ExtArgs>>
    ): Prisma__user_careerClient<$Result.GetResult<Prisma.$user_careerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many User_careers.
     *     @param {user_careerCreateManyArgs} args - Arguments to create many User_careers.
     *     @example
     *     // Create many User_careers
     *     const user_career = await prisma.user_career.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends user_careerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_careerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_career.
     * @param {user_careerDeleteArgs} args - Arguments to delete one User_career.
     * @example
     * // Delete one User_career
     * const User_career = await prisma.user_career.delete({
     *   where: {
     *     // ... filter to delete one User_career
     *   }
     * })
     * 
    **/
    delete<T extends user_careerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, user_careerDeleteArgs<ExtArgs>>
    ): Prisma__user_careerClient<$Result.GetResult<Prisma.$user_careerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User_career.
     * @param {user_careerUpdateArgs} args - Arguments to update one User_career.
     * @example
     * // Update one User_career
     * const user_career = await prisma.user_career.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends user_careerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, user_careerUpdateArgs<ExtArgs>>
    ): Prisma__user_careerClient<$Result.GetResult<Prisma.$user_careerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more User_careers.
     * @param {user_careerDeleteManyArgs} args - Arguments to filter User_careers to delete.
     * @example
     * // Delete a few User_careers
     * const { count } = await prisma.user_career.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends user_careerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_careerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_careerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_careers
     * const user_career = await prisma.user_career.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends user_careerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, user_careerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_career.
     * @param {user_careerUpsertArgs} args - Arguments to update or create a User_career.
     * @example
     * // Update or create a User_career
     * const user_career = await prisma.user_career.upsert({
     *   create: {
     *     // ... data to create a User_career
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_career we want to update
     *   }
     * })
    **/
    upsert<T extends user_careerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, user_careerUpsertArgs<ExtArgs>>
    ): Prisma__user_careerClient<$Result.GetResult<Prisma.$user_careerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of User_careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_careerCountArgs} args - Arguments to filter User_careers to count.
     * @example
     * // Count the number of User_careers
     * const count = await prisma.user_career.count({
     *   where: {
     *     // ... the filter for the User_careers we want to count
     *   }
     * })
    **/
    count<T extends user_careerCountArgs>(
      args?: Subset<T, user_careerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_careerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_career.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_careerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_careerAggregateArgs>(args: Subset<T, User_careerAggregateArgs>): Prisma.PrismaPromise<GetUser_careerAggregateType<T>>

    /**
     * Group by User_career.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_careerGroupByArgs} args - Group by arguments.
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
      T extends user_careerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_careerGroupByArgs['orderBy'] }
        : { orderBy?: user_careerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_careerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_careerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_career model
   */
  readonly fields: user_careerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_career.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_careerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    career<T extends careerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, careerDefaultArgs<ExtArgs>>): Prisma__careerClient<$Result.GetResult<Prisma.$careerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the user_career model
   */ 
  interface user_careerFieldRefs {
    readonly user_id: FieldRef<"user_career", 'Int'>
    readonly career_id: FieldRef<"user_career", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * user_career findUnique
   */
  export type user_careerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_career
     */
    select?: user_careerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_careerInclude<ExtArgs> | null
    /**
     * Filter, which user_career to fetch.
     */
    where: user_careerWhereUniqueInput
  }


  /**
   * user_career findUniqueOrThrow
   */
  export type user_careerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_career
     */
    select?: user_careerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_careerInclude<ExtArgs> | null
    /**
     * Filter, which user_career to fetch.
     */
    where: user_careerWhereUniqueInput
  }


  /**
   * user_career findFirst
   */
  export type user_careerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_career
     */
    select?: user_careerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_careerInclude<ExtArgs> | null
    /**
     * Filter, which user_career to fetch.
     */
    where?: user_careerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_careers to fetch.
     */
    orderBy?: user_careerOrderByWithRelationInput | user_careerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_careers.
     */
    cursor?: user_careerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_careers.
     */
    distinct?: User_careerScalarFieldEnum | User_careerScalarFieldEnum[]
  }


  /**
   * user_career findFirstOrThrow
   */
  export type user_careerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_career
     */
    select?: user_careerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_careerInclude<ExtArgs> | null
    /**
     * Filter, which user_career to fetch.
     */
    where?: user_careerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_careers to fetch.
     */
    orderBy?: user_careerOrderByWithRelationInput | user_careerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_careers.
     */
    cursor?: user_careerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_careers.
     */
    distinct?: User_careerScalarFieldEnum | User_careerScalarFieldEnum[]
  }


  /**
   * user_career findMany
   */
  export type user_careerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_career
     */
    select?: user_careerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_careerInclude<ExtArgs> | null
    /**
     * Filter, which user_careers to fetch.
     */
    where?: user_careerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_careers to fetch.
     */
    orderBy?: user_careerOrderByWithRelationInput | user_careerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_careers.
     */
    cursor?: user_careerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_careers.
     */
    skip?: number
    distinct?: User_careerScalarFieldEnum | User_careerScalarFieldEnum[]
  }


  /**
   * user_career create
   */
  export type user_careerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_career
     */
    select?: user_careerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_careerInclude<ExtArgs> | null
    /**
     * The data needed to create a user_career.
     */
    data: XOR<user_careerCreateInput, user_careerUncheckedCreateInput>
  }


  /**
   * user_career createMany
   */
  export type user_careerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_careers.
     */
    data: user_careerCreateManyInput | user_careerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * user_career update
   */
  export type user_careerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_career
     */
    select?: user_careerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_careerInclude<ExtArgs> | null
    /**
     * The data needed to update a user_career.
     */
    data: XOR<user_careerUpdateInput, user_careerUncheckedUpdateInput>
    /**
     * Choose, which user_career to update.
     */
    where: user_careerWhereUniqueInput
  }


  /**
   * user_career updateMany
   */
  export type user_careerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_careers.
     */
    data: XOR<user_careerUpdateManyMutationInput, user_careerUncheckedUpdateManyInput>
    /**
     * Filter which user_careers to update
     */
    where?: user_careerWhereInput
  }


  /**
   * user_career upsert
   */
  export type user_careerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_career
     */
    select?: user_careerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_careerInclude<ExtArgs> | null
    /**
     * The filter to search for the user_career to update in case it exists.
     */
    where: user_careerWhereUniqueInput
    /**
     * In case the user_career found by the `where` argument doesn't exist, create a new user_career with this data.
     */
    create: XOR<user_careerCreateInput, user_careerUncheckedCreateInput>
    /**
     * In case the user_career was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_careerUpdateInput, user_careerUncheckedUpdateInput>
  }


  /**
   * user_career delete
   */
  export type user_careerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_career
     */
    select?: user_careerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_careerInclude<ExtArgs> | null
    /**
     * Filter which user_career to delete.
     */
    where: user_careerWhereUniqueInput
  }


  /**
   * user_career deleteMany
   */
  export type user_careerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_careers to delete
     */
    where?: user_careerWhereInput
  }


  /**
   * user_career without action
   */
  export type user_careerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_career
     */
    select?: user_careerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_careerInclude<ExtArgs> | null
  }



  /**
   * Model job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  export type JobAvgAggregateOutputType = {
    job_id: number | null
    budget: number | null
  }

  export type JobSumAggregateOutputType = {
    job_id: number | null
    budget: number | null
  }

  export type JobMinAggregateOutputType = {
    job_id: number | null
    title: string | null
    description: string | null
    budget: number | null
    type: string | null
    posted_date: Date | null
    submitted_date: Date | null
    status: string | null
  }

  export type JobMaxAggregateOutputType = {
    job_id: number | null
    title: string | null
    description: string | null
    budget: number | null
    type: string | null
    posted_date: Date | null
    submitted_date: Date | null
    status: string | null
  }

  export type JobCountAggregateOutputType = {
    job_id: number
    title: number
    description: number
    budget: number
    type: number
    posted_date: number
    submitted_date: number
    status: number
    _all: number
  }


  export type JobAvgAggregateInputType = {
    job_id?: true
    budget?: true
  }

  export type JobSumAggregateInputType = {
    job_id?: true
    budget?: true
  }

  export type JobMinAggregateInputType = {
    job_id?: true
    title?: true
    description?: true
    budget?: true
    type?: true
    posted_date?: true
    submitted_date?: true
    status?: true
  }

  export type JobMaxAggregateInputType = {
    job_id?: true
    title?: true
    description?: true
    budget?: true
    type?: true
    posted_date?: true
    submitted_date?: true
    status?: true
  }

  export type JobCountAggregateInputType = {
    job_id?: true
    title?: true
    description?: true
    budget?: true
    type?: true
    posted_date?: true
    submitted_date?: true
    status?: true
    _all?: true
  }

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job to aggregate.
     */
    where?: jobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: jobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jobs
    **/
    _count?: true | JobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType
  }

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
        [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>
  }




  export type jobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobWhereInput
    orderBy?: jobOrderByWithAggregationInput | jobOrderByWithAggregationInput[]
    by: JobScalarFieldEnum[] | JobScalarFieldEnum
    having?: jobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCountAggregateInputType | true
    _avg?: JobAvgAggregateInputType
    _sum?: JobSumAggregateInputType
    _min?: JobMinAggregateInputType
    _max?: JobMaxAggregateInputType
  }

  export type JobGroupByOutputType = {
    job_id: number
    title: string
    description: string
    budget: number
    type: string
    posted_date: Date
    submitted_date: Date | null
    status: string
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  type GetJobGroupByPayload<T extends jobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobGroupByOutputType[P]>
            : GetScalarType<T[P], JobGroupByOutputType[P]>
        }
      >
    >


  export type jobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    job_id?: boolean
    title?: boolean
    description?: boolean
    budget?: boolean
    type?: boolean
    posted_date?: boolean
    submitted_date?: boolean
    status?: boolean
    history?: boolean | job$historyArgs<ExtArgs>
    job_exp?: boolean | job$job_expArgs<ExtArgs>
    rating_user?: boolean | job$rating_userArgs<ExtArgs>
    rating_com?: boolean | job$rating_comArgs<ExtArgs>
    bookmark?: boolean | job$bookmarkArgs<ExtArgs>
    post?: boolean | job$postArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type jobSelectScalar = {
    job_id?: boolean
    title?: boolean
    description?: boolean
    budget?: boolean
    type?: boolean
    posted_date?: boolean
    submitted_date?: boolean
    status?: boolean
  }

  export type jobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | job$historyArgs<ExtArgs>
    job_exp?: boolean | job$job_expArgs<ExtArgs>
    rating_user?: boolean | job$rating_userArgs<ExtArgs>
    rating_com?: boolean | job$rating_comArgs<ExtArgs>
    bookmark?: boolean | job$bookmarkArgs<ExtArgs>
    post?: boolean | job$postArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $jobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "job"
    objects: {
      history: Prisma.$historyPayload<ExtArgs>[]
      job_exp: Prisma.$job_expPayload<ExtArgs>[]
      rating_user: Prisma.$rating_userPayload<ExtArgs>[]
      rating_com: Prisma.$rating_comPayload<ExtArgs>[]
      bookmark: Prisma.$bookmarkPayload<ExtArgs>[]
      post: Prisma.$postPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      job_id: number
      title: string
      description: string
      budget: number
      type: string
      posted_date: Date
      submitted_date: Date | null
      status: string
    }, ExtArgs["result"]["job"]>
    composites: {}
  }


  type jobGetPayload<S extends boolean | null | undefined | jobDefaultArgs> = $Result.GetResult<Prisma.$jobPayload, S>

  type jobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<jobFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JobCountAggregateInputType | true
    }

  export interface jobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['job'], meta: { name: 'job' } }
    /**
     * Find zero or one Job that matches the filter.
     * @param {jobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends jobFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, jobFindUniqueArgs<ExtArgs>>
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Job that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {jobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends jobFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, jobFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends jobFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, jobFindFirstArgs<ExtArgs>>
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends jobFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, jobFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     * 
     * // Only select the `job_id`
     * const jobWithJob_idOnly = await prisma.job.findMany({ select: { job_id: true } })
     * 
    **/
    findMany<T extends jobFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, jobFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Job.
     * @param {jobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     * 
    **/
    create<T extends jobCreateArgs<ExtArgs>>(
      args: SelectSubset<T, jobCreateArgs<ExtArgs>>
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Jobs.
     *     @param {jobCreateManyArgs} args - Arguments to create many Jobs.
     *     @example
     *     // Create many Jobs
     *     const job = await prisma.job.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends jobCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, jobCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Job.
     * @param {jobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     * 
    **/
    delete<T extends jobDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, jobDeleteArgs<ExtArgs>>
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Job.
     * @param {jobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends jobUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, jobUpdateArgs<ExtArgs>>
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Jobs.
     * @param {jobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends jobDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, jobDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends jobUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, jobUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Job.
     * @param {jobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
    **/
    upsert<T extends jobUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, jobUpsertArgs<ExtArgs>>
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends jobCountArgs>(
      args?: Subset<T, jobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobAggregateArgs>(args: Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobGroupByArgs} args - Group by arguments.
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
      T extends jobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jobGroupByArgs['orderBy'] }
        : { orderBy?: jobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, jobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the job model
   */
  readonly fields: jobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    history<T extends job$historyArgs<ExtArgs> = {}>(args?: Subset<T, job$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, 'findMany'> | Null>;

    job_exp<T extends job$job_expArgs<ExtArgs> = {}>(args?: Subset<T, job$job_expArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_expPayload<ExtArgs>, T, 'findMany'> | Null>;

    rating_user<T extends job$rating_userArgs<ExtArgs> = {}>(args?: Subset<T, job$rating_userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rating_userPayload<ExtArgs>, T, 'findMany'> | Null>;

    rating_com<T extends job$rating_comArgs<ExtArgs> = {}>(args?: Subset<T, job$rating_comArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rating_comPayload<ExtArgs>, T, 'findMany'> | Null>;

    bookmark<T extends job$bookmarkArgs<ExtArgs> = {}>(args?: Subset<T, job$bookmarkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookmarkPayload<ExtArgs>, T, 'findMany'> | Null>;

    post<T extends job$postArgs<ExtArgs> = {}>(args?: Subset<T, job$postArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the job model
   */ 
  interface jobFieldRefs {
    readonly job_id: FieldRef<"job", 'Int'>
    readonly title: FieldRef<"job", 'String'>
    readonly description: FieldRef<"job", 'String'>
    readonly budget: FieldRef<"job", 'Int'>
    readonly type: FieldRef<"job", 'String'>
    readonly posted_date: FieldRef<"job", 'DateTime'>
    readonly submitted_date: FieldRef<"job", 'DateTime'>
    readonly status: FieldRef<"job", 'String'>
  }
    

  // Custom InputTypes

  /**
   * job findUnique
   */
  export type jobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * Filter, which job to fetch.
     */
    where: jobWhereUniqueInput
  }


  /**
   * job findUniqueOrThrow
   */
  export type jobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * Filter, which job to fetch.
     */
    where: jobWhereUniqueInput
  }


  /**
   * job findFirst
   */
  export type jobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * Filter, which job to fetch.
     */
    where?: jobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobs.
     */
    cursor?: jobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }


  /**
   * job findFirstOrThrow
   */
  export type jobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * Filter, which job to fetch.
     */
    where?: jobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobs.
     */
    cursor?: jobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }


  /**
   * job findMany
   */
  export type jobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jobs.
     */
    cursor?: jobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }


  /**
   * job create
   */
  export type jobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * The data needed to create a job.
     */
    data: XOR<jobCreateInput, jobUncheckedCreateInput>
  }


  /**
   * job createMany
   */
  export type jobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jobs.
     */
    data: jobCreateManyInput | jobCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * job update
   */
  export type jobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * The data needed to update a job.
     */
    data: XOR<jobUpdateInput, jobUncheckedUpdateInput>
    /**
     * Choose, which job to update.
     */
    where: jobWhereUniqueInput
  }


  /**
   * job updateMany
   */
  export type jobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jobs.
     */
    data: XOR<jobUpdateManyMutationInput, jobUncheckedUpdateManyInput>
    /**
     * Filter which jobs to update
     */
    where?: jobWhereInput
  }


  /**
   * job upsert
   */
  export type jobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * The filter to search for the job to update in case it exists.
     */
    where: jobWhereUniqueInput
    /**
     * In case the job found by the `where` argument doesn't exist, create a new job with this data.
     */
    create: XOR<jobCreateInput, jobUncheckedCreateInput>
    /**
     * In case the job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jobUpdateInput, jobUncheckedUpdateInput>
  }


  /**
   * job delete
   */
  export type jobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * Filter which job to delete.
     */
    where: jobWhereUniqueInput
  }


  /**
   * job deleteMany
   */
  export type jobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobs to delete
     */
    where?: jobWhereInput
  }


  /**
   * job.history
   */
  export type job$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: historyInclude<ExtArgs> | null
    where?: historyWhereInput
    orderBy?: historyOrderByWithRelationInput | historyOrderByWithRelationInput[]
    cursor?: historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }


  /**
   * job.job_exp
   */
  export type job$job_expArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_exp
     */
    select?: job_expSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_expInclude<ExtArgs> | null
    where?: job_expWhereInput
    orderBy?: job_expOrderByWithRelationInput | job_expOrderByWithRelationInput[]
    cursor?: job_expWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Job_expScalarFieldEnum | Job_expScalarFieldEnum[]
  }


  /**
   * job.rating_user
   */
  export type job$rating_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_user
     */
    select?: rating_userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rating_userInclude<ExtArgs> | null
    where?: rating_userWhereInput
    orderBy?: rating_userOrderByWithRelationInput | rating_userOrderByWithRelationInput[]
    cursor?: rating_userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rating_userScalarFieldEnum | Rating_userScalarFieldEnum[]
  }


  /**
   * job.rating_com
   */
  export type job$rating_comArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_com
     */
    select?: rating_comSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rating_comInclude<ExtArgs> | null
    where?: rating_comWhereInput
    orderBy?: rating_comOrderByWithRelationInput | rating_comOrderByWithRelationInput[]
    cursor?: rating_comWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rating_comScalarFieldEnum | Rating_comScalarFieldEnum[]
  }


  /**
   * job.bookmark
   */
  export type job$bookmarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookmark
     */
    select?: bookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookmarkInclude<ExtArgs> | null
    where?: bookmarkWhereInput
    orderBy?: bookmarkOrderByWithRelationInput | bookmarkOrderByWithRelationInput[]
    cursor?: bookmarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }


  /**
   * job.post
   */
  export type job$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postInclude<ExtArgs> | null
    where?: postWhereInput
    orderBy?: postOrderByWithRelationInput | postOrderByWithRelationInput[]
    cursor?: postWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * job without action
   */
  export type jobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null
  }



  /**
   * Model history
   */

  export type AggregateHistory = {
    _count: HistoryCountAggregateOutputType | null
    _avg: HistoryAvgAggregateOutputType | null
    _sum: HistorySumAggregateOutputType | null
    _min: HistoryMinAggregateOutputType | null
    _max: HistoryMaxAggregateOutputType | null
  }

  export type HistoryAvgAggregateOutputType = {
    user_id: number | null
    job_id: number | null
  }

  export type HistorySumAggregateOutputType = {
    user_id: number | null
    job_id: number | null
  }

  export type HistoryMinAggregateOutputType = {
    user_id: number | null
    job_id: number | null
    status: string | null
  }

  export type HistoryMaxAggregateOutputType = {
    user_id: number | null
    job_id: number | null
    status: string | null
  }

  export type HistoryCountAggregateOutputType = {
    user_id: number
    job_id: number
    status: number
    _all: number
  }


  export type HistoryAvgAggregateInputType = {
    user_id?: true
    job_id?: true
  }

  export type HistorySumAggregateInputType = {
    user_id?: true
    job_id?: true
  }

  export type HistoryMinAggregateInputType = {
    user_id?: true
    job_id?: true
    status?: true
  }

  export type HistoryMaxAggregateInputType = {
    user_id?: true
    job_id?: true
    status?: true
  }

  export type HistoryCountAggregateInputType = {
    user_id?: true
    job_id?: true
    status?: true
    _all?: true
  }

  export type HistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which history to aggregate.
     */
    where?: historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of histories to fetch.
     */
    orderBy?: historyOrderByWithRelationInput | historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned histories
    **/
    _count?: true | HistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoryMaxAggregateInputType
  }

  export type GetHistoryAggregateType<T extends HistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistory[P]>
      : GetScalarType<T[P], AggregateHistory[P]>
  }




  export type historyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historyWhereInput
    orderBy?: historyOrderByWithAggregationInput | historyOrderByWithAggregationInput[]
    by: HistoryScalarFieldEnum[] | HistoryScalarFieldEnum
    having?: historyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoryCountAggregateInputType | true
    _avg?: HistoryAvgAggregateInputType
    _sum?: HistorySumAggregateInputType
    _min?: HistoryMinAggregateInputType
    _max?: HistoryMaxAggregateInputType
  }

  export type HistoryGroupByOutputType = {
    user_id: number
    job_id: number
    status: string
    _count: HistoryCountAggregateOutputType | null
    _avg: HistoryAvgAggregateOutputType | null
    _sum: HistorySumAggregateOutputType | null
    _min: HistoryMinAggregateOutputType | null
    _max: HistoryMaxAggregateOutputType | null
  }

  type GetHistoryGroupByPayload<T extends historyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoryGroupByOutputType[P]>
            : GetScalarType<T[P], HistoryGroupByOutputType[P]>
        }
      >
    >


  export type historySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    job_id?: boolean
    status?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    job?: boolean | jobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["history"]>

  export type historySelectScalar = {
    user_id?: boolean
    job_id?: boolean
    status?: boolean
  }

  export type historyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    job?: boolean | jobDefaultArgs<ExtArgs>
  }


  export type $historyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "history"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      job: Prisma.$jobPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      job_id: number
      status: string
    }, ExtArgs["result"]["history"]>
    composites: {}
  }


  type historyGetPayload<S extends boolean | null | undefined | historyDefaultArgs> = $Result.GetResult<Prisma.$historyPayload, S>

  type historyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<historyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HistoryCountAggregateInputType | true
    }

  export interface historyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['history'], meta: { name: 'history' } }
    /**
     * Find zero or one History that matches the filter.
     * @param {historyFindUniqueArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends historyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, historyFindUniqueArgs<ExtArgs>>
    ): Prisma__historyClient<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one History that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {historyFindUniqueOrThrowArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends historyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, historyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__historyClient<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first History that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historyFindFirstArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends historyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, historyFindFirstArgs<ExtArgs>>
    ): Prisma__historyClient<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first History that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historyFindFirstOrThrowArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends historyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, historyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__historyClient<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Histories
     * const histories = await prisma.history.findMany()
     * 
     * // Get first 10 Histories
     * const histories = await prisma.history.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const historyWithUser_idOnly = await prisma.history.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends historyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, historyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a History.
     * @param {historyCreateArgs} args - Arguments to create a History.
     * @example
     * // Create one History
     * const History = await prisma.history.create({
     *   data: {
     *     // ... data to create a History
     *   }
     * })
     * 
    **/
    create<T extends historyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, historyCreateArgs<ExtArgs>>
    ): Prisma__historyClient<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Histories.
     *     @param {historyCreateManyArgs} args - Arguments to create many Histories.
     *     @example
     *     // Create many Histories
     *     const history = await prisma.history.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends historyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, historyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a History.
     * @param {historyDeleteArgs} args - Arguments to delete one History.
     * @example
     * // Delete one History
     * const History = await prisma.history.delete({
     *   where: {
     *     // ... filter to delete one History
     *   }
     * })
     * 
    **/
    delete<T extends historyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, historyDeleteArgs<ExtArgs>>
    ): Prisma__historyClient<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one History.
     * @param {historyUpdateArgs} args - Arguments to update one History.
     * @example
     * // Update one History
     * const history = await prisma.history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends historyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, historyUpdateArgs<ExtArgs>>
    ): Prisma__historyClient<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Histories.
     * @param {historyDeleteManyArgs} args - Arguments to filter Histories to delete.
     * @example
     * // Delete a few Histories
     * const { count } = await prisma.history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends historyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, historyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Histories
     * const history = await prisma.history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends historyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, historyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one History.
     * @param {historyUpsertArgs} args - Arguments to update or create a History.
     * @example
     * // Update or create a History
     * const history = await prisma.history.upsert({
     *   create: {
     *     // ... data to create a History
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the History we want to update
     *   }
     * })
    **/
    upsert<T extends historyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, historyUpsertArgs<ExtArgs>>
    ): Prisma__historyClient<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historyCountArgs} args - Arguments to filter Histories to count.
     * @example
     * // Count the number of Histories
     * const count = await prisma.history.count({
     *   where: {
     *     // ... the filter for the Histories we want to count
     *   }
     * })
    **/
    count<T extends historyCountArgs>(
      args?: Subset<T, historyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistoryAggregateArgs>(args: Subset<T, HistoryAggregateArgs>): Prisma.PrismaPromise<GetHistoryAggregateType<T>>

    /**
     * Group by History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historyGroupByArgs} args - Group by arguments.
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
      T extends historyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: historyGroupByArgs['orderBy'] }
        : { orderBy?: historyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the history model
   */
  readonly fields: historyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for history.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__historyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    job<T extends jobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, jobDefaultArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the history model
   */ 
  interface historyFieldRefs {
    readonly user_id: FieldRef<"history", 'Int'>
    readonly job_id: FieldRef<"history", 'Int'>
    readonly status: FieldRef<"history", 'String'>
  }
    

  // Custom InputTypes

  /**
   * history findUnique
   */
  export type historyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: historyInclude<ExtArgs> | null
    /**
     * Filter, which history to fetch.
     */
    where: historyWhereUniqueInput
  }


  /**
   * history findUniqueOrThrow
   */
  export type historyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: historyInclude<ExtArgs> | null
    /**
     * Filter, which history to fetch.
     */
    where: historyWhereUniqueInput
  }


  /**
   * history findFirst
   */
  export type historyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: historyInclude<ExtArgs> | null
    /**
     * Filter, which history to fetch.
     */
    where?: historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of histories to fetch.
     */
    orderBy?: historyOrderByWithRelationInput | historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for histories.
     */
    cursor?: historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of histories.
     */
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }


  /**
   * history findFirstOrThrow
   */
  export type historyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: historyInclude<ExtArgs> | null
    /**
     * Filter, which history to fetch.
     */
    where?: historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of histories to fetch.
     */
    orderBy?: historyOrderByWithRelationInput | historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for histories.
     */
    cursor?: historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of histories.
     */
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }


  /**
   * history findMany
   */
  export type historyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: historyInclude<ExtArgs> | null
    /**
     * Filter, which histories to fetch.
     */
    where?: historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of histories to fetch.
     */
    orderBy?: historyOrderByWithRelationInput | historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing histories.
     */
    cursor?: historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` histories.
     */
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }


  /**
   * history create
   */
  export type historyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: historyInclude<ExtArgs> | null
    /**
     * The data needed to create a history.
     */
    data: XOR<historyCreateInput, historyUncheckedCreateInput>
  }


  /**
   * history createMany
   */
  export type historyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many histories.
     */
    data: historyCreateManyInput | historyCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * history update
   */
  export type historyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: historyInclude<ExtArgs> | null
    /**
     * The data needed to update a history.
     */
    data: XOR<historyUpdateInput, historyUncheckedUpdateInput>
    /**
     * Choose, which history to update.
     */
    where: historyWhereUniqueInput
  }


  /**
   * history updateMany
   */
  export type historyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update histories.
     */
    data: XOR<historyUpdateManyMutationInput, historyUncheckedUpdateManyInput>
    /**
     * Filter which histories to update
     */
    where?: historyWhereInput
  }


  /**
   * history upsert
   */
  export type historyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: historyInclude<ExtArgs> | null
    /**
     * The filter to search for the history to update in case it exists.
     */
    where: historyWhereUniqueInput
    /**
     * In case the history found by the `where` argument doesn't exist, create a new history with this data.
     */
    create: XOR<historyCreateInput, historyUncheckedCreateInput>
    /**
     * In case the history was found with the provided `where` argument, update it with this data.
     */
    update: XOR<historyUpdateInput, historyUncheckedUpdateInput>
  }


  /**
   * history delete
   */
  export type historyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: historyInclude<ExtArgs> | null
    /**
     * Filter which history to delete.
     */
    where: historyWhereUniqueInput
  }


  /**
   * history deleteMany
   */
  export type historyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which histories to delete
     */
    where?: historyWhereInput
  }


  /**
   * history without action
   */
  export type historyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: historyInclude<ExtArgs> | null
  }



  /**
   * Model job_exp
   */

  export type AggregateJob_exp = {
    _count: Job_expCountAggregateOutputType | null
    _avg: Job_expAvgAggregateOutputType | null
    _sum: Job_expSumAggregateOutputType | null
    _min: Job_expMinAggregateOutputType | null
    _max: Job_expMaxAggregateOutputType | null
  }

  export type Job_expAvgAggregateOutputType = {
    job_id: number | null
    category_id: number | null
  }

  export type Job_expSumAggregateOutputType = {
    job_id: number | null
    category_id: number | null
  }

  export type Job_expMinAggregateOutputType = {
    job_id: number | null
    category_id: number | null
  }

  export type Job_expMaxAggregateOutputType = {
    job_id: number | null
    category_id: number | null
  }

  export type Job_expCountAggregateOutputType = {
    job_id: number
    category_id: number
    _all: number
  }


  export type Job_expAvgAggregateInputType = {
    job_id?: true
    category_id?: true
  }

  export type Job_expSumAggregateInputType = {
    job_id?: true
    category_id?: true
  }

  export type Job_expMinAggregateInputType = {
    job_id?: true
    category_id?: true
  }

  export type Job_expMaxAggregateInputType = {
    job_id?: true
    category_id?: true
  }

  export type Job_expCountAggregateInputType = {
    job_id?: true
    category_id?: true
    _all?: true
  }

  export type Job_expAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_exp to aggregate.
     */
    where?: job_expWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_exps to fetch.
     */
    orderBy?: job_expOrderByWithRelationInput | job_expOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: job_expWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_exps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_exps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned job_exps
    **/
    _count?: true | Job_expCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Job_expAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Job_expSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Job_expMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Job_expMaxAggregateInputType
  }

  export type GetJob_expAggregateType<T extends Job_expAggregateArgs> = {
        [P in keyof T & keyof AggregateJob_exp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob_exp[P]>
      : GetScalarType<T[P], AggregateJob_exp[P]>
  }




  export type job_expGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: job_expWhereInput
    orderBy?: job_expOrderByWithAggregationInput | job_expOrderByWithAggregationInput[]
    by: Job_expScalarFieldEnum[] | Job_expScalarFieldEnum
    having?: job_expScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Job_expCountAggregateInputType | true
    _avg?: Job_expAvgAggregateInputType
    _sum?: Job_expSumAggregateInputType
    _min?: Job_expMinAggregateInputType
    _max?: Job_expMaxAggregateInputType
  }

  export type Job_expGroupByOutputType = {
    job_id: number
    category_id: number
    _count: Job_expCountAggregateOutputType | null
    _avg: Job_expAvgAggregateOutputType | null
    _sum: Job_expSumAggregateOutputType | null
    _min: Job_expMinAggregateOutputType | null
    _max: Job_expMaxAggregateOutputType | null
  }

  type GetJob_expGroupByPayload<T extends job_expGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Job_expGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Job_expGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Job_expGroupByOutputType[P]>
            : GetScalarType<T[P], Job_expGroupByOutputType[P]>
        }
      >
    >


  export type job_expSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    job_id?: boolean
    category_id?: boolean
    job?: boolean | jobDefaultArgs<ExtArgs>
    category?: boolean | categoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job_exp"]>

  export type job_expSelectScalar = {
    job_id?: boolean
    category_id?: boolean
  }

  export type job_expInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | jobDefaultArgs<ExtArgs>
    category?: boolean | categoryDefaultArgs<ExtArgs>
  }


  export type $job_expPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "job_exp"
    objects: {
      job: Prisma.$jobPayload<ExtArgs>
      category: Prisma.$categoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      job_id: number
      category_id: number
    }, ExtArgs["result"]["job_exp"]>
    composites: {}
  }


  type job_expGetPayload<S extends boolean | null | undefined | job_expDefaultArgs> = $Result.GetResult<Prisma.$job_expPayload, S>

  type job_expCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<job_expFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Job_expCountAggregateInputType | true
    }

  export interface job_expDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['job_exp'], meta: { name: 'job_exp' } }
    /**
     * Find zero or one Job_exp that matches the filter.
     * @param {job_expFindUniqueArgs} args - Arguments to find a Job_exp
     * @example
     * // Get one Job_exp
     * const job_exp = await prisma.job_exp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends job_expFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, job_expFindUniqueArgs<ExtArgs>>
    ): Prisma__job_expClient<$Result.GetResult<Prisma.$job_expPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Job_exp that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {job_expFindUniqueOrThrowArgs} args - Arguments to find a Job_exp
     * @example
     * // Get one Job_exp
     * const job_exp = await prisma.job_exp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends job_expFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, job_expFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__job_expClient<$Result.GetResult<Prisma.$job_expPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Job_exp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_expFindFirstArgs} args - Arguments to find a Job_exp
     * @example
     * // Get one Job_exp
     * const job_exp = await prisma.job_exp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends job_expFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, job_expFindFirstArgs<ExtArgs>>
    ): Prisma__job_expClient<$Result.GetResult<Prisma.$job_expPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Job_exp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_expFindFirstOrThrowArgs} args - Arguments to find a Job_exp
     * @example
     * // Get one Job_exp
     * const job_exp = await prisma.job_exp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends job_expFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, job_expFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__job_expClient<$Result.GetResult<Prisma.$job_expPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Job_exps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_expFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Job_exps
     * const job_exps = await prisma.job_exp.findMany()
     * 
     * // Get first 10 Job_exps
     * const job_exps = await prisma.job_exp.findMany({ take: 10 })
     * 
     * // Only select the `job_id`
     * const job_expWithJob_idOnly = await prisma.job_exp.findMany({ select: { job_id: true } })
     * 
    **/
    findMany<T extends job_expFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, job_expFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_expPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Job_exp.
     * @param {job_expCreateArgs} args - Arguments to create a Job_exp.
     * @example
     * // Create one Job_exp
     * const Job_exp = await prisma.job_exp.create({
     *   data: {
     *     // ... data to create a Job_exp
     *   }
     * })
     * 
    **/
    create<T extends job_expCreateArgs<ExtArgs>>(
      args: SelectSubset<T, job_expCreateArgs<ExtArgs>>
    ): Prisma__job_expClient<$Result.GetResult<Prisma.$job_expPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Job_exps.
     *     @param {job_expCreateManyArgs} args - Arguments to create many Job_exps.
     *     @example
     *     // Create many Job_exps
     *     const job_exp = await prisma.job_exp.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends job_expCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, job_expCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Job_exp.
     * @param {job_expDeleteArgs} args - Arguments to delete one Job_exp.
     * @example
     * // Delete one Job_exp
     * const Job_exp = await prisma.job_exp.delete({
     *   where: {
     *     // ... filter to delete one Job_exp
     *   }
     * })
     * 
    **/
    delete<T extends job_expDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, job_expDeleteArgs<ExtArgs>>
    ): Prisma__job_expClient<$Result.GetResult<Prisma.$job_expPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Job_exp.
     * @param {job_expUpdateArgs} args - Arguments to update one Job_exp.
     * @example
     * // Update one Job_exp
     * const job_exp = await prisma.job_exp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends job_expUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, job_expUpdateArgs<ExtArgs>>
    ): Prisma__job_expClient<$Result.GetResult<Prisma.$job_expPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Job_exps.
     * @param {job_expDeleteManyArgs} args - Arguments to filter Job_exps to delete.
     * @example
     * // Delete a few Job_exps
     * const { count } = await prisma.job_exp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends job_expDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, job_expDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Job_exps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_expUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Job_exps
     * const job_exp = await prisma.job_exp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends job_expUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, job_expUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Job_exp.
     * @param {job_expUpsertArgs} args - Arguments to update or create a Job_exp.
     * @example
     * // Update or create a Job_exp
     * const job_exp = await prisma.job_exp.upsert({
     *   create: {
     *     // ... data to create a Job_exp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job_exp we want to update
     *   }
     * })
    **/
    upsert<T extends job_expUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, job_expUpsertArgs<ExtArgs>>
    ): Prisma__job_expClient<$Result.GetResult<Prisma.$job_expPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Job_exps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_expCountArgs} args - Arguments to filter Job_exps to count.
     * @example
     * // Count the number of Job_exps
     * const count = await prisma.job_exp.count({
     *   where: {
     *     // ... the filter for the Job_exps we want to count
     *   }
     * })
    **/
    count<T extends job_expCountArgs>(
      args?: Subset<T, job_expCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Job_expCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job_exp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_expAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Job_expAggregateArgs>(args: Subset<T, Job_expAggregateArgs>): Prisma.PrismaPromise<GetJob_expAggregateType<T>>

    /**
     * Group by Job_exp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_expGroupByArgs} args - Group by arguments.
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
      T extends job_expGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: job_expGroupByArgs['orderBy'] }
        : { orderBy?: job_expGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, job_expGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJob_expGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the job_exp model
   */
  readonly fields: job_expFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for job_exp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__job_expClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    job<T extends jobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, jobDefaultArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    category<T extends categoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoryDefaultArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the job_exp model
   */ 
  interface job_expFieldRefs {
    readonly job_id: FieldRef<"job_exp", 'Int'>
    readonly category_id: FieldRef<"job_exp", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * job_exp findUnique
   */
  export type job_expFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_exp
     */
    select?: job_expSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_expInclude<ExtArgs> | null
    /**
     * Filter, which job_exp to fetch.
     */
    where: job_expWhereUniqueInput
  }


  /**
   * job_exp findUniqueOrThrow
   */
  export type job_expFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_exp
     */
    select?: job_expSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_expInclude<ExtArgs> | null
    /**
     * Filter, which job_exp to fetch.
     */
    where: job_expWhereUniqueInput
  }


  /**
   * job_exp findFirst
   */
  export type job_expFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_exp
     */
    select?: job_expSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_expInclude<ExtArgs> | null
    /**
     * Filter, which job_exp to fetch.
     */
    where?: job_expWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_exps to fetch.
     */
    orderBy?: job_expOrderByWithRelationInput | job_expOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for job_exps.
     */
    cursor?: job_expWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_exps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_exps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of job_exps.
     */
    distinct?: Job_expScalarFieldEnum | Job_expScalarFieldEnum[]
  }


  /**
   * job_exp findFirstOrThrow
   */
  export type job_expFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_exp
     */
    select?: job_expSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_expInclude<ExtArgs> | null
    /**
     * Filter, which job_exp to fetch.
     */
    where?: job_expWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_exps to fetch.
     */
    orderBy?: job_expOrderByWithRelationInput | job_expOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for job_exps.
     */
    cursor?: job_expWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_exps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_exps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of job_exps.
     */
    distinct?: Job_expScalarFieldEnum | Job_expScalarFieldEnum[]
  }


  /**
   * job_exp findMany
   */
  export type job_expFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_exp
     */
    select?: job_expSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_expInclude<ExtArgs> | null
    /**
     * Filter, which job_exps to fetch.
     */
    where?: job_expWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_exps to fetch.
     */
    orderBy?: job_expOrderByWithRelationInput | job_expOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing job_exps.
     */
    cursor?: job_expWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_exps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_exps.
     */
    skip?: number
    distinct?: Job_expScalarFieldEnum | Job_expScalarFieldEnum[]
  }


  /**
   * job_exp create
   */
  export type job_expCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_exp
     */
    select?: job_expSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_expInclude<ExtArgs> | null
    /**
     * The data needed to create a job_exp.
     */
    data: XOR<job_expCreateInput, job_expUncheckedCreateInput>
  }


  /**
   * job_exp createMany
   */
  export type job_expCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many job_exps.
     */
    data: job_expCreateManyInput | job_expCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * job_exp update
   */
  export type job_expUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_exp
     */
    select?: job_expSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_expInclude<ExtArgs> | null
    /**
     * The data needed to update a job_exp.
     */
    data: XOR<job_expUpdateInput, job_expUncheckedUpdateInput>
    /**
     * Choose, which job_exp to update.
     */
    where: job_expWhereUniqueInput
  }


  /**
   * job_exp updateMany
   */
  export type job_expUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update job_exps.
     */
    data: XOR<job_expUpdateManyMutationInput, job_expUncheckedUpdateManyInput>
    /**
     * Filter which job_exps to update
     */
    where?: job_expWhereInput
  }


  /**
   * job_exp upsert
   */
  export type job_expUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_exp
     */
    select?: job_expSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_expInclude<ExtArgs> | null
    /**
     * The filter to search for the job_exp to update in case it exists.
     */
    where: job_expWhereUniqueInput
    /**
     * In case the job_exp found by the `where` argument doesn't exist, create a new job_exp with this data.
     */
    create: XOR<job_expCreateInput, job_expUncheckedCreateInput>
    /**
     * In case the job_exp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<job_expUpdateInput, job_expUncheckedUpdateInput>
  }


  /**
   * job_exp delete
   */
  export type job_expDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_exp
     */
    select?: job_expSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_expInclude<ExtArgs> | null
    /**
     * Filter which job_exp to delete.
     */
    where: job_expWhereUniqueInput
  }


  /**
   * job_exp deleteMany
   */
  export type job_expDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_exps to delete
     */
    where?: job_expWhereInput
  }


  /**
   * job_exp without action
   */
  export type job_expDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_exp
     */
    select?: job_expSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_expInclude<ExtArgs> | null
  }



  /**
   * Model bookmark
   */

  export type AggregateBookmark = {
    _count: BookmarkCountAggregateOutputType | null
    _avg: BookmarkAvgAggregateOutputType | null
    _sum: BookmarkSumAggregateOutputType | null
    _min: BookmarkMinAggregateOutputType | null
    _max: BookmarkMaxAggregateOutputType | null
  }

  export type BookmarkAvgAggregateOutputType = {
    book_id: number | null
    user_id: number | null
    job_id: number | null
  }

  export type BookmarkSumAggregateOutputType = {
    book_id: number | null
    user_id: number | null
    job_id: number | null
  }

  export type BookmarkMinAggregateOutputType = {
    book_id: number | null
    user_id: number | null
    job_id: number | null
  }

  export type BookmarkMaxAggregateOutputType = {
    book_id: number | null
    user_id: number | null
    job_id: number | null
  }

  export type BookmarkCountAggregateOutputType = {
    book_id: number
    user_id: number
    job_id: number
    _all: number
  }


  export type BookmarkAvgAggregateInputType = {
    book_id?: true
    user_id?: true
    job_id?: true
  }

  export type BookmarkSumAggregateInputType = {
    book_id?: true
    user_id?: true
    job_id?: true
  }

  export type BookmarkMinAggregateInputType = {
    book_id?: true
    user_id?: true
    job_id?: true
  }

  export type BookmarkMaxAggregateInputType = {
    book_id?: true
    user_id?: true
    job_id?: true
  }

  export type BookmarkCountAggregateInputType = {
    book_id?: true
    user_id?: true
    job_id?: true
    _all?: true
  }

  export type BookmarkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookmark to aggregate.
     */
    where?: bookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookmarks to fetch.
     */
    orderBy?: bookmarkOrderByWithRelationInput | bookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bookmarks
    **/
    _count?: true | BookmarkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookmarkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookmarkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookmarkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookmarkMaxAggregateInputType
  }

  export type GetBookmarkAggregateType<T extends BookmarkAggregateArgs> = {
        [P in keyof T & keyof AggregateBookmark]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookmark[P]>
      : GetScalarType<T[P], AggregateBookmark[P]>
  }




  export type bookmarkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookmarkWhereInput
    orderBy?: bookmarkOrderByWithAggregationInput | bookmarkOrderByWithAggregationInput[]
    by: BookmarkScalarFieldEnum[] | BookmarkScalarFieldEnum
    having?: bookmarkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookmarkCountAggregateInputType | true
    _avg?: BookmarkAvgAggregateInputType
    _sum?: BookmarkSumAggregateInputType
    _min?: BookmarkMinAggregateInputType
    _max?: BookmarkMaxAggregateInputType
  }

  export type BookmarkGroupByOutputType = {
    book_id: number
    user_id: number
    job_id: number
    _count: BookmarkCountAggregateOutputType | null
    _avg: BookmarkAvgAggregateOutputType | null
    _sum: BookmarkSumAggregateOutputType | null
    _min: BookmarkMinAggregateOutputType | null
    _max: BookmarkMaxAggregateOutputType | null
  }

  type GetBookmarkGroupByPayload<T extends bookmarkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookmarkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookmarkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookmarkGroupByOutputType[P]>
            : GetScalarType<T[P], BookmarkGroupByOutputType[P]>
        }
      >
    >


  export type bookmarkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    book_id?: boolean
    user_id?: boolean
    job_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    job?: boolean | jobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmark"]>

  export type bookmarkSelectScalar = {
    book_id?: boolean
    user_id?: boolean
    job_id?: boolean
  }

  export type bookmarkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    job?: boolean | jobDefaultArgs<ExtArgs>
  }


  export type $bookmarkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bookmark"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      job: Prisma.$jobPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      book_id: number
      user_id: number
      job_id: number
    }, ExtArgs["result"]["bookmark"]>
    composites: {}
  }


  type bookmarkGetPayload<S extends boolean | null | undefined | bookmarkDefaultArgs> = $Result.GetResult<Prisma.$bookmarkPayload, S>

  type bookmarkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<bookmarkFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BookmarkCountAggregateInputType | true
    }

  export interface bookmarkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bookmark'], meta: { name: 'bookmark' } }
    /**
     * Find zero or one Bookmark that matches the filter.
     * @param {bookmarkFindUniqueArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends bookmarkFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, bookmarkFindUniqueArgs<ExtArgs>>
    ): Prisma__bookmarkClient<$Result.GetResult<Prisma.$bookmarkPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Bookmark that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {bookmarkFindUniqueOrThrowArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends bookmarkFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bookmarkFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__bookmarkClient<$Result.GetResult<Prisma.$bookmarkPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Bookmark that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookmarkFindFirstArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends bookmarkFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, bookmarkFindFirstArgs<ExtArgs>>
    ): Prisma__bookmarkClient<$Result.GetResult<Prisma.$bookmarkPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Bookmark that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookmarkFindFirstOrThrowArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends bookmarkFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bookmarkFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__bookmarkClient<$Result.GetResult<Prisma.$bookmarkPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Bookmarks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookmarkFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookmarks
     * const bookmarks = await prisma.bookmark.findMany()
     * 
     * // Get first 10 Bookmarks
     * const bookmarks = await prisma.bookmark.findMany({ take: 10 })
     * 
     * // Only select the `book_id`
     * const bookmarkWithBook_idOnly = await prisma.bookmark.findMany({ select: { book_id: true } })
     * 
    **/
    findMany<T extends bookmarkFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bookmarkFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookmarkPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Bookmark.
     * @param {bookmarkCreateArgs} args - Arguments to create a Bookmark.
     * @example
     * // Create one Bookmark
     * const Bookmark = await prisma.bookmark.create({
     *   data: {
     *     // ... data to create a Bookmark
     *   }
     * })
     * 
    **/
    create<T extends bookmarkCreateArgs<ExtArgs>>(
      args: SelectSubset<T, bookmarkCreateArgs<ExtArgs>>
    ): Prisma__bookmarkClient<$Result.GetResult<Prisma.$bookmarkPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Bookmarks.
     *     @param {bookmarkCreateManyArgs} args - Arguments to create many Bookmarks.
     *     @example
     *     // Create many Bookmarks
     *     const bookmark = await prisma.bookmark.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends bookmarkCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bookmarkCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bookmark.
     * @param {bookmarkDeleteArgs} args - Arguments to delete one Bookmark.
     * @example
     * // Delete one Bookmark
     * const Bookmark = await prisma.bookmark.delete({
     *   where: {
     *     // ... filter to delete one Bookmark
     *   }
     * })
     * 
    **/
    delete<T extends bookmarkDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, bookmarkDeleteArgs<ExtArgs>>
    ): Prisma__bookmarkClient<$Result.GetResult<Prisma.$bookmarkPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Bookmark.
     * @param {bookmarkUpdateArgs} args - Arguments to update one Bookmark.
     * @example
     * // Update one Bookmark
     * const bookmark = await prisma.bookmark.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends bookmarkUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, bookmarkUpdateArgs<ExtArgs>>
    ): Prisma__bookmarkClient<$Result.GetResult<Prisma.$bookmarkPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Bookmarks.
     * @param {bookmarkDeleteManyArgs} args - Arguments to filter Bookmarks to delete.
     * @example
     * // Delete a few Bookmarks
     * const { count } = await prisma.bookmark.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends bookmarkDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bookmarkDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookmarkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookmarks
     * const bookmark = await prisma.bookmark.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends bookmarkUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, bookmarkUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bookmark.
     * @param {bookmarkUpsertArgs} args - Arguments to update or create a Bookmark.
     * @example
     * // Update or create a Bookmark
     * const bookmark = await prisma.bookmark.upsert({
     *   create: {
     *     // ... data to create a Bookmark
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookmark we want to update
     *   }
     * })
    **/
    upsert<T extends bookmarkUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, bookmarkUpsertArgs<ExtArgs>>
    ): Prisma__bookmarkClient<$Result.GetResult<Prisma.$bookmarkPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookmarkCountArgs} args - Arguments to filter Bookmarks to count.
     * @example
     * // Count the number of Bookmarks
     * const count = await prisma.bookmark.count({
     *   where: {
     *     // ... the filter for the Bookmarks we want to count
     *   }
     * })
    **/
    count<T extends bookmarkCountArgs>(
      args?: Subset<T, bookmarkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookmarkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookmarkAggregateArgs>(args: Subset<T, BookmarkAggregateArgs>): Prisma.PrismaPromise<GetBookmarkAggregateType<T>>

    /**
     * Group by Bookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookmarkGroupByArgs} args - Group by arguments.
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
      T extends bookmarkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookmarkGroupByArgs['orderBy'] }
        : { orderBy?: bookmarkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, bookmarkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookmarkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bookmark model
   */
  readonly fields: bookmarkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bookmark.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookmarkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    job<T extends jobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, jobDefaultArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the bookmark model
   */ 
  interface bookmarkFieldRefs {
    readonly book_id: FieldRef<"bookmark", 'Int'>
    readonly user_id: FieldRef<"bookmark", 'Int'>
    readonly job_id: FieldRef<"bookmark", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * bookmark findUnique
   */
  export type bookmarkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookmark
     */
    select?: bookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookmarkInclude<ExtArgs> | null
    /**
     * Filter, which bookmark to fetch.
     */
    where: bookmarkWhereUniqueInput
  }


  /**
   * bookmark findUniqueOrThrow
   */
  export type bookmarkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookmark
     */
    select?: bookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookmarkInclude<ExtArgs> | null
    /**
     * Filter, which bookmark to fetch.
     */
    where: bookmarkWhereUniqueInput
  }


  /**
   * bookmark findFirst
   */
  export type bookmarkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookmark
     */
    select?: bookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookmarkInclude<ExtArgs> | null
    /**
     * Filter, which bookmark to fetch.
     */
    where?: bookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookmarks to fetch.
     */
    orderBy?: bookmarkOrderByWithRelationInput | bookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookmarks.
     */
    cursor?: bookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookmarks.
     */
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }


  /**
   * bookmark findFirstOrThrow
   */
  export type bookmarkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookmark
     */
    select?: bookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookmarkInclude<ExtArgs> | null
    /**
     * Filter, which bookmark to fetch.
     */
    where?: bookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookmarks to fetch.
     */
    orderBy?: bookmarkOrderByWithRelationInput | bookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookmarks.
     */
    cursor?: bookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookmarks.
     */
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }


  /**
   * bookmark findMany
   */
  export type bookmarkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookmark
     */
    select?: bookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookmarkInclude<ExtArgs> | null
    /**
     * Filter, which bookmarks to fetch.
     */
    where?: bookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookmarks to fetch.
     */
    orderBy?: bookmarkOrderByWithRelationInput | bookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bookmarks.
     */
    cursor?: bookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookmarks.
     */
    skip?: number
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }


  /**
   * bookmark create
   */
  export type bookmarkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookmark
     */
    select?: bookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookmarkInclude<ExtArgs> | null
    /**
     * The data needed to create a bookmark.
     */
    data: XOR<bookmarkCreateInput, bookmarkUncheckedCreateInput>
  }


  /**
   * bookmark createMany
   */
  export type bookmarkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bookmarks.
     */
    data: bookmarkCreateManyInput | bookmarkCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * bookmark update
   */
  export type bookmarkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookmark
     */
    select?: bookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookmarkInclude<ExtArgs> | null
    /**
     * The data needed to update a bookmark.
     */
    data: XOR<bookmarkUpdateInput, bookmarkUncheckedUpdateInput>
    /**
     * Choose, which bookmark to update.
     */
    where: bookmarkWhereUniqueInput
  }


  /**
   * bookmark updateMany
   */
  export type bookmarkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bookmarks.
     */
    data: XOR<bookmarkUpdateManyMutationInput, bookmarkUncheckedUpdateManyInput>
    /**
     * Filter which bookmarks to update
     */
    where?: bookmarkWhereInput
  }


  /**
   * bookmark upsert
   */
  export type bookmarkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookmark
     */
    select?: bookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookmarkInclude<ExtArgs> | null
    /**
     * The filter to search for the bookmark to update in case it exists.
     */
    where: bookmarkWhereUniqueInput
    /**
     * In case the bookmark found by the `where` argument doesn't exist, create a new bookmark with this data.
     */
    create: XOR<bookmarkCreateInput, bookmarkUncheckedCreateInput>
    /**
     * In case the bookmark was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookmarkUpdateInput, bookmarkUncheckedUpdateInput>
  }


  /**
   * bookmark delete
   */
  export type bookmarkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookmark
     */
    select?: bookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookmarkInclude<ExtArgs> | null
    /**
     * Filter which bookmark to delete.
     */
    where: bookmarkWhereUniqueInput
  }


  /**
   * bookmark deleteMany
   */
  export type bookmarkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookmarks to delete
     */
    where?: bookmarkWhereInput
  }


  /**
   * bookmark without action
   */
  export type bookmarkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookmark
     */
    select?: bookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookmarkInclude<ExtArgs> | null
  }



  /**
   * Model post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    user_id: number | null
    job_id: number | null
  }

  export type PostSumAggregateOutputType = {
    user_id: number | null
    job_id: number | null
  }

  export type PostMinAggregateOutputType = {
    user_id: number | null
    job_id: number | null
  }

  export type PostMaxAggregateOutputType = {
    user_id: number | null
    job_id: number | null
  }

  export type PostCountAggregateOutputType = {
    user_id: number
    job_id: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    user_id?: true
    job_id?: true
  }

  export type PostSumAggregateInputType = {
    user_id?: true
    job_id?: true
  }

  export type PostMinAggregateInputType = {
    user_id?: true
    job_id?: true
  }

  export type PostMaxAggregateInputType = {
    user_id?: true
    job_id?: true
  }

  export type PostCountAggregateInputType = {
    user_id?: true
    job_id?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which post to aggregate.
     */
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postOrderByWithRelationInput | postOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type postGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postWhereInput
    orderBy?: postOrderByWithAggregationInput | postOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: postScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    user_id: number
    job_id: number
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends postGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type postSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    job_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    job?: boolean | jobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type postSelectScalar = {
    user_id?: boolean
    job_id?: boolean
  }

  export type postInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    job?: boolean | jobDefaultArgs<ExtArgs>
  }


  export type $postPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "post"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      job: Prisma.$jobPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      job_id: number
    }, ExtArgs["result"]["post"]>
    composites: {}
  }


  type postGetPayload<S extends boolean | null | undefined | postDefaultArgs> = $Result.GetResult<Prisma.$postPayload, S>

  type postCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<postFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface postDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['post'], meta: { name: 'post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {postFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends postFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, postFindUniqueArgs<ExtArgs>>
    ): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Post that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {postFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends postFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, postFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends postFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, postFindFirstArgs<ExtArgs>>
    ): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends postFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, postFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const postWithUser_idOnly = await prisma.post.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends postFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, postFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Post.
     * @param {postCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends postCreateArgs<ExtArgs>>(
      args: SelectSubset<T, postCreateArgs<ExtArgs>>
    ): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Posts.
     *     @param {postCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends postCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, postCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {postDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends postDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, postDeleteArgs<ExtArgs>>
    ): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Post.
     * @param {postUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends postUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, postUpdateArgs<ExtArgs>>
    ): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Posts.
     * @param {postDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends postDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, postDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends postUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, postUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {postUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends postUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, postUpsertArgs<ExtArgs>>
    ): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends postCountArgs>(
      args?: Subset<T, postCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postGroupByArgs} args - Group by arguments.
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
      T extends postGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: postGroupByArgs['orderBy'] }
        : { orderBy?: postGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, postGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the post model
   */
  readonly fields: postFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__postClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    job<T extends jobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, jobDefaultArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the post model
   */ 
  interface postFieldRefs {
    readonly user_id: FieldRef<"post", 'Int'>
    readonly job_id: FieldRef<"post", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * post findUnique
   */
  export type postFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postInclude<ExtArgs> | null
    /**
     * Filter, which post to fetch.
     */
    where: postWhereUniqueInput
  }


  /**
   * post findUniqueOrThrow
   */
  export type postFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postInclude<ExtArgs> | null
    /**
     * Filter, which post to fetch.
     */
    where: postWhereUniqueInput
  }


  /**
   * post findFirst
   */
  export type postFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postInclude<ExtArgs> | null
    /**
     * Filter, which post to fetch.
     */
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postOrderByWithRelationInput | postOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * post findFirstOrThrow
   */
  export type postFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postInclude<ExtArgs> | null
    /**
     * Filter, which post to fetch.
     */
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postOrderByWithRelationInput | postOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * post findMany
   */
  export type postFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postOrderByWithRelationInput | postOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posts.
     */
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * post create
   */
  export type postCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postInclude<ExtArgs> | null
    /**
     * The data needed to create a post.
     */
    data: XOR<postCreateInput, postUncheckedCreateInput>
  }


  /**
   * post createMany
   */
  export type postCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many posts.
     */
    data: postCreateManyInput | postCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * post update
   */
  export type postUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postInclude<ExtArgs> | null
    /**
     * The data needed to update a post.
     */
    data: XOR<postUpdateInput, postUncheckedUpdateInput>
    /**
     * Choose, which post to update.
     */
    where: postWhereUniqueInput
  }


  /**
   * post updateMany
   */
  export type postUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update posts.
     */
    data: XOR<postUpdateManyMutationInput, postUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     */
    where?: postWhereInput
  }


  /**
   * post upsert
   */
  export type postUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postInclude<ExtArgs> | null
    /**
     * The filter to search for the post to update in case it exists.
     */
    where: postWhereUniqueInput
    /**
     * In case the post found by the `where` argument doesn't exist, create a new post with this data.
     */
    create: XOR<postCreateInput, postUncheckedCreateInput>
    /**
     * In case the post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<postUpdateInput, postUncheckedUpdateInput>
  }


  /**
   * post delete
   */
  export type postDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postInclude<ExtArgs> | null
    /**
     * Filter which post to delete.
     */
    where: postWhereUniqueInput
  }


  /**
   * post deleteMany
   */
  export type postDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to delete
     */
    where?: postWhereInput
  }


  /**
   * post without action
   */
  export type postDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postInclude<ExtArgs> | null
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
    user_id: 'user_id',
    first_name: 'first_name',
    last_name: 'last_name',
    username: 'username',
    image: 'image',
    phone_number: 'phone_number',
    id_card: 'id_card',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const Rating_userScalarFieldEnum: {
    rating_id: 'rating_id',
    user_id1: 'user_id1',
    user_id2: 'user_id2',
    job_id: 'job_id',
    friendly_rating: 'friendly_rating',
    efficiency_rating: 'efficiency_rating',
    accuracy_rating: 'accuracy_rating'
  };

  export type Rating_userScalarFieldEnum = (typeof Rating_userScalarFieldEnum)[keyof typeof Rating_userScalarFieldEnum]


  export const Rating_comScalarFieldEnum: {
    rating_id: 'rating_id',
    user_id1: 'user_id1',
    user_id2: 'user_id2',
    job_id: 'job_id',
    rating: 'rating'
  };

  export type Rating_comScalarFieldEnum = (typeof Rating_comScalarFieldEnum)[keyof typeof Rating_comScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    contact_id: 'contact_id',
    user_id: 'user_id',
    facebook: 'facebook',
    instagram: 'instagram',
    linkedin: 'linkedin'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    category_id: 'category_id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ExperienceScalarFieldEnum: {
    user_id: 'user_id',
    category_id: 'category_id'
  };

  export type ExperienceScalarFieldEnum = (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum]


  export const CareerScalarFieldEnum: {
    career_id: 'career_id',
    name: 'name'
  };

  export type CareerScalarFieldEnum = (typeof CareerScalarFieldEnum)[keyof typeof CareerScalarFieldEnum]


  export const User_careerScalarFieldEnum: {
    user_id: 'user_id',
    career_id: 'career_id'
  };

  export type User_careerScalarFieldEnum = (typeof User_careerScalarFieldEnum)[keyof typeof User_careerScalarFieldEnum]


  export const JobScalarFieldEnum: {
    job_id: 'job_id',
    title: 'title',
    description: 'description',
    budget: 'budget',
    type: 'type',
    posted_date: 'posted_date',
    submitted_date: 'submitted_date',
    status: 'status'
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum]


  export const HistoryScalarFieldEnum: {
    user_id: 'user_id',
    job_id: 'job_id',
    status: 'status'
  };

  export type HistoryScalarFieldEnum = (typeof HistoryScalarFieldEnum)[keyof typeof HistoryScalarFieldEnum]


  export const Job_expScalarFieldEnum: {
    job_id: 'job_id',
    category_id: 'category_id'
  };

  export type Job_expScalarFieldEnum = (typeof Job_expScalarFieldEnum)[keyof typeof Job_expScalarFieldEnum]


  export const BookmarkScalarFieldEnum: {
    book_id: 'book_id',
    user_id: 'user_id',
    job_id: 'job_id'
  };

  export type BookmarkScalarFieldEnum = (typeof BookmarkScalarFieldEnum)[keyof typeof BookmarkScalarFieldEnum]


  export const PostScalarFieldEnum: {
    user_id: 'user_id',
    job_id: 'job_id'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    user_id?: IntFilter<"user"> | number
    first_name?: StringFilter<"user"> | string
    last_name?: StringFilter<"user"> | string
    username?: StringFilter<"user"> | string
    image?: StringNullableFilter<"user"> | string | null
    phone_number?: StringFilter<"user"> | string
    id_card?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    role?: StringFilter<"user"> | string
    post?: PostListRelationFilter
    rating_user1?: Rating_userListRelationFilter
    rating_users2?: Rating_userListRelationFilter
    rating_com1?: Rating_comListRelationFilter
    rating_com2?: Rating_comListRelationFilter
    contact?: ContactListRelationFilter
    experience?: ExperienceListRelationFilter
    user_career?: User_careerListRelationFilter
    history?: HistoryListRelationFilter
    bookmark?: BookmarkListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    image?: SortOrderInput | SortOrder
    phone_number?: SortOrder
    id_card?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    post?: postOrderByRelationAggregateInput
    rating_user1?: rating_userOrderByRelationAggregateInput
    rating_users2?: rating_userOrderByRelationAggregateInput
    rating_com1?: rating_comOrderByRelationAggregateInput
    rating_com2?: rating_comOrderByRelationAggregateInput
    contact?: contactOrderByRelationAggregateInput
    experience?: experienceOrderByRelationAggregateInput
    user_career?: user_careerOrderByRelationAggregateInput
    history?: historyOrderByRelationAggregateInput
    bookmark?: bookmarkOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    first_name?: StringFilter<"user"> | string
    last_name?: StringFilter<"user"> | string
    username?: StringFilter<"user"> | string
    image?: StringNullableFilter<"user"> | string | null
    phone_number?: StringFilter<"user"> | string
    id_card?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    role?: StringFilter<"user"> | string
    post?: PostListRelationFilter
    rating_user1?: Rating_userListRelationFilter
    rating_users2?: Rating_userListRelationFilter
    rating_com1?: Rating_comListRelationFilter
    rating_com2?: Rating_comListRelationFilter
    contact?: ContactListRelationFilter
    experience?: ExperienceListRelationFilter
    user_career?: User_careerListRelationFilter
    history?: HistoryListRelationFilter
    bookmark?: BookmarkListRelationFilter
  }, "user_id" | "email">

  export type userOrderByWithAggregationInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    image?: SortOrderInput | SortOrder
    phone_number?: SortOrder
    id_card?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"user"> | number
    first_name?: StringWithAggregatesFilter<"user"> | string
    last_name?: StringWithAggregatesFilter<"user"> | string
    username?: StringWithAggregatesFilter<"user"> | string
    image?: StringNullableWithAggregatesFilter<"user"> | string | null
    phone_number?: StringWithAggregatesFilter<"user"> | string
    id_card?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    role?: StringWithAggregatesFilter<"user"> | string
  }

  export type rating_userWhereInput = {
    AND?: rating_userWhereInput | rating_userWhereInput[]
    OR?: rating_userWhereInput[]
    NOT?: rating_userWhereInput | rating_userWhereInput[]
    rating_id?: IntFilter<"rating_user"> | number
    user_id1?: IntFilter<"rating_user"> | number
    user_id2?: IntFilter<"rating_user"> | number
    job_id?: IntFilter<"rating_user"> | number
    friendly_rating?: FloatFilter<"rating_user"> | number
    efficiency_rating?: FloatFilter<"rating_user"> | number
    accuracy_rating?: FloatFilter<"rating_user"> | number
    user1?: XOR<UserRelationFilter, userWhereInput>
    user2?: XOR<UserRelationFilter, userWhereInput>
    job?: XOR<JobRelationFilter, jobWhereInput>
  }

  export type rating_userOrderByWithRelationInput = {
    rating_id?: SortOrder
    user_id1?: SortOrder
    user_id2?: SortOrder
    job_id?: SortOrder
    friendly_rating?: SortOrder
    efficiency_rating?: SortOrder
    accuracy_rating?: SortOrder
    user1?: userOrderByWithRelationInput
    user2?: userOrderByWithRelationInput
    job?: jobOrderByWithRelationInput
  }

  export type rating_userWhereUniqueInput = Prisma.AtLeast<{
    rating_id?: number
    AND?: rating_userWhereInput | rating_userWhereInput[]
    OR?: rating_userWhereInput[]
    NOT?: rating_userWhereInput | rating_userWhereInput[]
    user_id1?: IntFilter<"rating_user"> | number
    user_id2?: IntFilter<"rating_user"> | number
    job_id?: IntFilter<"rating_user"> | number
    friendly_rating?: FloatFilter<"rating_user"> | number
    efficiency_rating?: FloatFilter<"rating_user"> | number
    accuracy_rating?: FloatFilter<"rating_user"> | number
    user1?: XOR<UserRelationFilter, userWhereInput>
    user2?: XOR<UserRelationFilter, userWhereInput>
    job?: XOR<JobRelationFilter, jobWhereInput>
  }, "rating_id">

  export type rating_userOrderByWithAggregationInput = {
    rating_id?: SortOrder
    user_id1?: SortOrder
    user_id2?: SortOrder
    job_id?: SortOrder
    friendly_rating?: SortOrder
    efficiency_rating?: SortOrder
    accuracy_rating?: SortOrder
    _count?: rating_userCountOrderByAggregateInput
    _avg?: rating_userAvgOrderByAggregateInput
    _max?: rating_userMaxOrderByAggregateInput
    _min?: rating_userMinOrderByAggregateInput
    _sum?: rating_userSumOrderByAggregateInput
  }

  export type rating_userScalarWhereWithAggregatesInput = {
    AND?: rating_userScalarWhereWithAggregatesInput | rating_userScalarWhereWithAggregatesInput[]
    OR?: rating_userScalarWhereWithAggregatesInput[]
    NOT?: rating_userScalarWhereWithAggregatesInput | rating_userScalarWhereWithAggregatesInput[]
    rating_id?: IntWithAggregatesFilter<"rating_user"> | number
    user_id1?: IntWithAggregatesFilter<"rating_user"> | number
    user_id2?: IntWithAggregatesFilter<"rating_user"> | number
    job_id?: IntWithAggregatesFilter<"rating_user"> | number
    friendly_rating?: FloatWithAggregatesFilter<"rating_user"> | number
    efficiency_rating?: FloatWithAggregatesFilter<"rating_user"> | number
    accuracy_rating?: FloatWithAggregatesFilter<"rating_user"> | number
  }

  export type rating_comWhereInput = {
    AND?: rating_comWhereInput | rating_comWhereInput[]
    OR?: rating_comWhereInput[]
    NOT?: rating_comWhereInput | rating_comWhereInput[]
    rating_id?: IntFilter<"rating_com"> | number
    user_id1?: IntFilter<"rating_com"> | number
    user_id2?: IntFilter<"rating_com"> | number
    job_id?: IntFilter<"rating_com"> | number
    rating?: FloatFilter<"rating_com"> | number
    user1?: XOR<UserRelationFilter, userWhereInput>
    user2?: XOR<UserRelationFilter, userWhereInput>
    job?: XOR<JobRelationFilter, jobWhereInput>
  }

  export type rating_comOrderByWithRelationInput = {
    rating_id?: SortOrder
    user_id1?: SortOrder
    user_id2?: SortOrder
    job_id?: SortOrder
    rating?: SortOrder
    user1?: userOrderByWithRelationInput
    user2?: userOrderByWithRelationInput
    job?: jobOrderByWithRelationInput
  }

  export type rating_comWhereUniqueInput = Prisma.AtLeast<{
    rating_id?: number
    AND?: rating_comWhereInput | rating_comWhereInput[]
    OR?: rating_comWhereInput[]
    NOT?: rating_comWhereInput | rating_comWhereInput[]
    user_id1?: IntFilter<"rating_com"> | number
    user_id2?: IntFilter<"rating_com"> | number
    job_id?: IntFilter<"rating_com"> | number
    rating?: FloatFilter<"rating_com"> | number
    user1?: XOR<UserRelationFilter, userWhereInput>
    user2?: XOR<UserRelationFilter, userWhereInput>
    job?: XOR<JobRelationFilter, jobWhereInput>
  }, "rating_id">

  export type rating_comOrderByWithAggregationInput = {
    rating_id?: SortOrder
    user_id1?: SortOrder
    user_id2?: SortOrder
    job_id?: SortOrder
    rating?: SortOrder
    _count?: rating_comCountOrderByAggregateInput
    _avg?: rating_comAvgOrderByAggregateInput
    _max?: rating_comMaxOrderByAggregateInput
    _min?: rating_comMinOrderByAggregateInput
    _sum?: rating_comSumOrderByAggregateInput
  }

  export type rating_comScalarWhereWithAggregatesInput = {
    AND?: rating_comScalarWhereWithAggregatesInput | rating_comScalarWhereWithAggregatesInput[]
    OR?: rating_comScalarWhereWithAggregatesInput[]
    NOT?: rating_comScalarWhereWithAggregatesInput | rating_comScalarWhereWithAggregatesInput[]
    rating_id?: IntWithAggregatesFilter<"rating_com"> | number
    user_id1?: IntWithAggregatesFilter<"rating_com"> | number
    user_id2?: IntWithAggregatesFilter<"rating_com"> | number
    job_id?: IntWithAggregatesFilter<"rating_com"> | number
    rating?: FloatWithAggregatesFilter<"rating_com"> | number
  }

  export type contactWhereInput = {
    AND?: contactWhereInput | contactWhereInput[]
    OR?: contactWhereInput[]
    NOT?: contactWhereInput | contactWhereInput[]
    contact_id?: IntFilter<"contact"> | number
    user_id?: IntFilter<"contact"> | number
    facebook?: StringFilter<"contact"> | string
    instagram?: StringFilter<"contact"> | string
    linkedin?: StringFilter<"contact"> | string
    user?: XOR<UserRelationFilter, userWhereInput>
  }

  export type contactOrderByWithRelationInput = {
    contact_id?: SortOrder
    user_id?: SortOrder
    facebook?: SortOrder
    instagram?: SortOrder
    linkedin?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type contactWhereUniqueInput = Prisma.AtLeast<{
    contact_id?: number
    AND?: contactWhereInput | contactWhereInput[]
    OR?: contactWhereInput[]
    NOT?: contactWhereInput | contactWhereInput[]
    user_id?: IntFilter<"contact"> | number
    facebook?: StringFilter<"contact"> | string
    instagram?: StringFilter<"contact"> | string
    linkedin?: StringFilter<"contact"> | string
    user?: XOR<UserRelationFilter, userWhereInput>
  }, "contact_id">

  export type contactOrderByWithAggregationInput = {
    contact_id?: SortOrder
    user_id?: SortOrder
    facebook?: SortOrder
    instagram?: SortOrder
    linkedin?: SortOrder
    _count?: contactCountOrderByAggregateInput
    _avg?: contactAvgOrderByAggregateInput
    _max?: contactMaxOrderByAggregateInput
    _min?: contactMinOrderByAggregateInput
    _sum?: contactSumOrderByAggregateInput
  }

  export type contactScalarWhereWithAggregatesInput = {
    AND?: contactScalarWhereWithAggregatesInput | contactScalarWhereWithAggregatesInput[]
    OR?: contactScalarWhereWithAggregatesInput[]
    NOT?: contactScalarWhereWithAggregatesInput | contactScalarWhereWithAggregatesInput[]
    contact_id?: IntWithAggregatesFilter<"contact"> | number
    user_id?: IntWithAggregatesFilter<"contact"> | number
    facebook?: StringWithAggregatesFilter<"contact"> | string
    instagram?: StringWithAggregatesFilter<"contact"> | string
    linkedin?: StringWithAggregatesFilter<"contact"> | string
  }

  export type categoryWhereInput = {
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    category_id?: IntFilter<"category"> | number
    name?: StringFilter<"category"> | string
    experiences?: ExperienceListRelationFilter
    job_exp?: Job_expListRelationFilter
  }

  export type categoryOrderByWithRelationInput = {
    category_id?: SortOrder
    name?: SortOrder
    experiences?: experienceOrderByRelationAggregateInput
    job_exp?: job_expOrderByRelationAggregateInput
  }

  export type categoryWhereUniqueInput = Prisma.AtLeast<{
    category_id?: number
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    name?: StringFilter<"category"> | string
    experiences?: ExperienceListRelationFilter
    job_exp?: Job_expListRelationFilter
  }, "category_id">

  export type categoryOrderByWithAggregationInput = {
    category_id?: SortOrder
    name?: SortOrder
    _count?: categoryCountOrderByAggregateInput
    _avg?: categoryAvgOrderByAggregateInput
    _max?: categoryMaxOrderByAggregateInput
    _min?: categoryMinOrderByAggregateInput
    _sum?: categorySumOrderByAggregateInput
  }

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    OR?: categoryScalarWhereWithAggregatesInput[]
    NOT?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    category_id?: IntWithAggregatesFilter<"category"> | number
    name?: StringWithAggregatesFilter<"category"> | string
  }

  export type experienceWhereInput = {
    AND?: experienceWhereInput | experienceWhereInput[]
    OR?: experienceWhereInput[]
    NOT?: experienceWhereInput | experienceWhereInput[]
    user_id?: IntFilter<"experience"> | number
    category_id?: IntFilter<"experience"> | number
    user?: XOR<UserRelationFilter, userWhereInput>
    category?: XOR<CategoryRelationFilter, categoryWhereInput>
  }

  export type experienceOrderByWithRelationInput = {
    user_id?: SortOrder
    category_id?: SortOrder
    user?: userOrderByWithRelationInput
    category?: categoryOrderByWithRelationInput
  }

  export type experienceWhereUniqueInput = Prisma.AtLeast<{
    user_id_category_id?: experienceUser_idCategory_idCompoundUniqueInput
    AND?: experienceWhereInput | experienceWhereInput[]
    OR?: experienceWhereInput[]
    NOT?: experienceWhereInput | experienceWhereInput[]
    user_id?: IntFilter<"experience"> | number
    category_id?: IntFilter<"experience"> | number
    user?: XOR<UserRelationFilter, userWhereInput>
    category?: XOR<CategoryRelationFilter, categoryWhereInput>
  }, "user_id_category_id">

  export type experienceOrderByWithAggregationInput = {
    user_id?: SortOrder
    category_id?: SortOrder
    _count?: experienceCountOrderByAggregateInput
    _avg?: experienceAvgOrderByAggregateInput
    _max?: experienceMaxOrderByAggregateInput
    _min?: experienceMinOrderByAggregateInput
    _sum?: experienceSumOrderByAggregateInput
  }

  export type experienceScalarWhereWithAggregatesInput = {
    AND?: experienceScalarWhereWithAggregatesInput | experienceScalarWhereWithAggregatesInput[]
    OR?: experienceScalarWhereWithAggregatesInput[]
    NOT?: experienceScalarWhereWithAggregatesInput | experienceScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"experience"> | number
    category_id?: IntWithAggregatesFilter<"experience"> | number
  }

  export type careerWhereInput = {
    AND?: careerWhereInput | careerWhereInput[]
    OR?: careerWhereInput[]
    NOT?: careerWhereInput | careerWhereInput[]
    career_id?: IntFilter<"career"> | number
    name?: StringFilter<"career"> | string
    user_career?: User_careerListRelationFilter
  }

  export type careerOrderByWithRelationInput = {
    career_id?: SortOrder
    name?: SortOrder
    user_career?: user_careerOrderByRelationAggregateInput
  }

  export type careerWhereUniqueInput = Prisma.AtLeast<{
    career_id?: number
    AND?: careerWhereInput | careerWhereInput[]
    OR?: careerWhereInput[]
    NOT?: careerWhereInput | careerWhereInput[]
    name?: StringFilter<"career"> | string
    user_career?: User_careerListRelationFilter
  }, "career_id">

  export type careerOrderByWithAggregationInput = {
    career_id?: SortOrder
    name?: SortOrder
    _count?: careerCountOrderByAggregateInput
    _avg?: careerAvgOrderByAggregateInput
    _max?: careerMaxOrderByAggregateInput
    _min?: careerMinOrderByAggregateInput
    _sum?: careerSumOrderByAggregateInput
  }

  export type careerScalarWhereWithAggregatesInput = {
    AND?: careerScalarWhereWithAggregatesInput | careerScalarWhereWithAggregatesInput[]
    OR?: careerScalarWhereWithAggregatesInput[]
    NOT?: careerScalarWhereWithAggregatesInput | careerScalarWhereWithAggregatesInput[]
    career_id?: IntWithAggregatesFilter<"career"> | number
    name?: StringWithAggregatesFilter<"career"> | string
  }

  export type user_careerWhereInput = {
    AND?: user_careerWhereInput | user_careerWhereInput[]
    OR?: user_careerWhereInput[]
    NOT?: user_careerWhereInput | user_careerWhereInput[]
    user_id?: IntFilter<"user_career"> | number
    career_id?: IntFilter<"user_career"> | number
    user?: XOR<UserRelationFilter, userWhereInput>
    career?: XOR<CareerRelationFilter, careerWhereInput>
  }

  export type user_careerOrderByWithRelationInput = {
    user_id?: SortOrder
    career_id?: SortOrder
    user?: userOrderByWithRelationInput
    career?: careerOrderByWithRelationInput
  }

  export type user_careerWhereUniqueInput = Prisma.AtLeast<{
    user_id_career_id?: user_careerUser_idCareer_idCompoundUniqueInput
    AND?: user_careerWhereInput | user_careerWhereInput[]
    OR?: user_careerWhereInput[]
    NOT?: user_careerWhereInput | user_careerWhereInput[]
    user_id?: IntFilter<"user_career"> | number
    career_id?: IntFilter<"user_career"> | number
    user?: XOR<UserRelationFilter, userWhereInput>
    career?: XOR<CareerRelationFilter, careerWhereInput>
  }, "user_id_career_id">

  export type user_careerOrderByWithAggregationInput = {
    user_id?: SortOrder
    career_id?: SortOrder
    _count?: user_careerCountOrderByAggregateInput
    _avg?: user_careerAvgOrderByAggregateInput
    _max?: user_careerMaxOrderByAggregateInput
    _min?: user_careerMinOrderByAggregateInput
    _sum?: user_careerSumOrderByAggregateInput
  }

  export type user_careerScalarWhereWithAggregatesInput = {
    AND?: user_careerScalarWhereWithAggregatesInput | user_careerScalarWhereWithAggregatesInput[]
    OR?: user_careerScalarWhereWithAggregatesInput[]
    NOT?: user_careerScalarWhereWithAggregatesInput | user_careerScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"user_career"> | number
    career_id?: IntWithAggregatesFilter<"user_career"> | number
  }

  export type jobWhereInput = {
    AND?: jobWhereInput | jobWhereInput[]
    OR?: jobWhereInput[]
    NOT?: jobWhereInput | jobWhereInput[]
    job_id?: IntFilter<"job"> | number
    title?: StringFilter<"job"> | string
    description?: StringFilter<"job"> | string
    budget?: IntFilter<"job"> | number
    type?: StringFilter<"job"> | string
    posted_date?: DateTimeFilter<"job"> | Date | string
    submitted_date?: DateTimeNullableFilter<"job"> | Date | string | null
    status?: StringFilter<"job"> | string
    history?: HistoryListRelationFilter
    job_exp?: Job_expListRelationFilter
    rating_user?: Rating_userListRelationFilter
    rating_com?: Rating_comListRelationFilter
    bookmark?: BookmarkListRelationFilter
    post?: PostListRelationFilter
  }

  export type jobOrderByWithRelationInput = {
    job_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    budget?: SortOrder
    type?: SortOrder
    posted_date?: SortOrder
    submitted_date?: SortOrderInput | SortOrder
    status?: SortOrder
    history?: historyOrderByRelationAggregateInput
    job_exp?: job_expOrderByRelationAggregateInput
    rating_user?: rating_userOrderByRelationAggregateInput
    rating_com?: rating_comOrderByRelationAggregateInput
    bookmark?: bookmarkOrderByRelationAggregateInput
    post?: postOrderByRelationAggregateInput
  }

  export type jobWhereUniqueInput = Prisma.AtLeast<{
    job_id?: number
    AND?: jobWhereInput | jobWhereInput[]
    OR?: jobWhereInput[]
    NOT?: jobWhereInput | jobWhereInput[]
    title?: StringFilter<"job"> | string
    description?: StringFilter<"job"> | string
    budget?: IntFilter<"job"> | number
    type?: StringFilter<"job"> | string
    posted_date?: DateTimeFilter<"job"> | Date | string
    submitted_date?: DateTimeNullableFilter<"job"> | Date | string | null
    status?: StringFilter<"job"> | string
    history?: HistoryListRelationFilter
    job_exp?: Job_expListRelationFilter
    rating_user?: Rating_userListRelationFilter
    rating_com?: Rating_comListRelationFilter
    bookmark?: BookmarkListRelationFilter
    post?: PostListRelationFilter
  }, "job_id">

  export type jobOrderByWithAggregationInput = {
    job_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    budget?: SortOrder
    type?: SortOrder
    posted_date?: SortOrder
    submitted_date?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: jobCountOrderByAggregateInput
    _avg?: jobAvgOrderByAggregateInput
    _max?: jobMaxOrderByAggregateInput
    _min?: jobMinOrderByAggregateInput
    _sum?: jobSumOrderByAggregateInput
  }

  export type jobScalarWhereWithAggregatesInput = {
    AND?: jobScalarWhereWithAggregatesInput | jobScalarWhereWithAggregatesInput[]
    OR?: jobScalarWhereWithAggregatesInput[]
    NOT?: jobScalarWhereWithAggregatesInput | jobScalarWhereWithAggregatesInput[]
    job_id?: IntWithAggregatesFilter<"job"> | number
    title?: StringWithAggregatesFilter<"job"> | string
    description?: StringWithAggregatesFilter<"job"> | string
    budget?: IntWithAggregatesFilter<"job"> | number
    type?: StringWithAggregatesFilter<"job"> | string
    posted_date?: DateTimeWithAggregatesFilter<"job"> | Date | string
    submitted_date?: DateTimeNullableWithAggregatesFilter<"job"> | Date | string | null
    status?: StringWithAggregatesFilter<"job"> | string
  }

  export type historyWhereInput = {
    AND?: historyWhereInput | historyWhereInput[]
    OR?: historyWhereInput[]
    NOT?: historyWhereInput | historyWhereInput[]
    user_id?: IntFilter<"history"> | number
    job_id?: IntFilter<"history"> | number
    status?: StringFilter<"history"> | string
    user?: XOR<UserRelationFilter, userWhereInput>
    job?: XOR<JobRelationFilter, jobWhereInput>
  }

  export type historyOrderByWithRelationInput = {
    user_id?: SortOrder
    job_id?: SortOrder
    status?: SortOrder
    user?: userOrderByWithRelationInput
    job?: jobOrderByWithRelationInput
  }

  export type historyWhereUniqueInput = Prisma.AtLeast<{
    user_id_job_id?: historyUser_idJob_idCompoundUniqueInput
    AND?: historyWhereInput | historyWhereInput[]
    OR?: historyWhereInput[]
    NOT?: historyWhereInput | historyWhereInput[]
    user_id?: IntFilter<"history"> | number
    job_id?: IntFilter<"history"> | number
    status?: StringFilter<"history"> | string
    user?: XOR<UserRelationFilter, userWhereInput>
    job?: XOR<JobRelationFilter, jobWhereInput>
  }, "user_id_job_id">

  export type historyOrderByWithAggregationInput = {
    user_id?: SortOrder
    job_id?: SortOrder
    status?: SortOrder
    _count?: historyCountOrderByAggregateInput
    _avg?: historyAvgOrderByAggregateInput
    _max?: historyMaxOrderByAggregateInput
    _min?: historyMinOrderByAggregateInput
    _sum?: historySumOrderByAggregateInput
  }

  export type historyScalarWhereWithAggregatesInput = {
    AND?: historyScalarWhereWithAggregatesInput | historyScalarWhereWithAggregatesInput[]
    OR?: historyScalarWhereWithAggregatesInput[]
    NOT?: historyScalarWhereWithAggregatesInput | historyScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"history"> | number
    job_id?: IntWithAggregatesFilter<"history"> | number
    status?: StringWithAggregatesFilter<"history"> | string
  }

  export type job_expWhereInput = {
    AND?: job_expWhereInput | job_expWhereInput[]
    OR?: job_expWhereInput[]
    NOT?: job_expWhereInput | job_expWhereInput[]
    job_id?: IntFilter<"job_exp"> | number
    category_id?: IntFilter<"job_exp"> | number
    job?: XOR<JobRelationFilter, jobWhereInput>
    category?: XOR<CategoryRelationFilter, categoryWhereInput>
  }

  export type job_expOrderByWithRelationInput = {
    job_id?: SortOrder
    category_id?: SortOrder
    job?: jobOrderByWithRelationInput
    category?: categoryOrderByWithRelationInput
  }

  export type job_expWhereUniqueInput = Prisma.AtLeast<{
    job_id_category_id?: job_expJob_idCategory_idCompoundUniqueInput
    AND?: job_expWhereInput | job_expWhereInput[]
    OR?: job_expWhereInput[]
    NOT?: job_expWhereInput | job_expWhereInput[]
    job_id?: IntFilter<"job_exp"> | number
    category_id?: IntFilter<"job_exp"> | number
    job?: XOR<JobRelationFilter, jobWhereInput>
    category?: XOR<CategoryRelationFilter, categoryWhereInput>
  }, "job_id_category_id">

  export type job_expOrderByWithAggregationInput = {
    job_id?: SortOrder
    category_id?: SortOrder
    _count?: job_expCountOrderByAggregateInput
    _avg?: job_expAvgOrderByAggregateInput
    _max?: job_expMaxOrderByAggregateInput
    _min?: job_expMinOrderByAggregateInput
    _sum?: job_expSumOrderByAggregateInput
  }

  export type job_expScalarWhereWithAggregatesInput = {
    AND?: job_expScalarWhereWithAggregatesInput | job_expScalarWhereWithAggregatesInput[]
    OR?: job_expScalarWhereWithAggregatesInput[]
    NOT?: job_expScalarWhereWithAggregatesInput | job_expScalarWhereWithAggregatesInput[]
    job_id?: IntWithAggregatesFilter<"job_exp"> | number
    category_id?: IntWithAggregatesFilter<"job_exp"> | number
  }

  export type bookmarkWhereInput = {
    AND?: bookmarkWhereInput | bookmarkWhereInput[]
    OR?: bookmarkWhereInput[]
    NOT?: bookmarkWhereInput | bookmarkWhereInput[]
    book_id?: IntFilter<"bookmark"> | number
    user_id?: IntFilter<"bookmark"> | number
    job_id?: IntFilter<"bookmark"> | number
    user?: XOR<UserRelationFilter, userWhereInput>
    job?: XOR<JobRelationFilter, jobWhereInput>
  }

  export type bookmarkOrderByWithRelationInput = {
    book_id?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
    user?: userOrderByWithRelationInput
    job?: jobOrderByWithRelationInput
  }

  export type bookmarkWhereUniqueInput = Prisma.AtLeast<{
    book_id?: number
    user_id_job_id?: bookmarkUser_idJob_idCompoundUniqueInput
    AND?: bookmarkWhereInput | bookmarkWhereInput[]
    OR?: bookmarkWhereInput[]
    NOT?: bookmarkWhereInput | bookmarkWhereInput[]
    user_id?: IntFilter<"bookmark"> | number
    job_id?: IntFilter<"bookmark"> | number
    user?: XOR<UserRelationFilter, userWhereInput>
    job?: XOR<JobRelationFilter, jobWhereInput>
  }, "book_id" | "user_id_job_id">

  export type bookmarkOrderByWithAggregationInput = {
    book_id?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
    _count?: bookmarkCountOrderByAggregateInput
    _avg?: bookmarkAvgOrderByAggregateInput
    _max?: bookmarkMaxOrderByAggregateInput
    _min?: bookmarkMinOrderByAggregateInput
    _sum?: bookmarkSumOrderByAggregateInput
  }

  export type bookmarkScalarWhereWithAggregatesInput = {
    AND?: bookmarkScalarWhereWithAggregatesInput | bookmarkScalarWhereWithAggregatesInput[]
    OR?: bookmarkScalarWhereWithAggregatesInput[]
    NOT?: bookmarkScalarWhereWithAggregatesInput | bookmarkScalarWhereWithAggregatesInput[]
    book_id?: IntWithAggregatesFilter<"bookmark"> | number
    user_id?: IntWithAggregatesFilter<"bookmark"> | number
    job_id?: IntWithAggregatesFilter<"bookmark"> | number
  }

  export type postWhereInput = {
    AND?: postWhereInput | postWhereInput[]
    OR?: postWhereInput[]
    NOT?: postWhereInput | postWhereInput[]
    user_id?: IntFilter<"post"> | number
    job_id?: IntFilter<"post"> | number
    user?: XOR<UserRelationFilter, userWhereInput>
    job?: XOR<JobRelationFilter, jobWhereInput>
  }

  export type postOrderByWithRelationInput = {
    user_id?: SortOrder
    job_id?: SortOrder
    user?: userOrderByWithRelationInput
    job?: jobOrderByWithRelationInput
  }

  export type postWhereUniqueInput = Prisma.AtLeast<{
    user_id_job_id?: postUser_idJob_idCompoundUniqueInput
    AND?: postWhereInput | postWhereInput[]
    OR?: postWhereInput[]
    NOT?: postWhereInput | postWhereInput[]
    user_id?: IntFilter<"post"> | number
    job_id?: IntFilter<"post"> | number
    user?: XOR<UserRelationFilter, userWhereInput>
    job?: XOR<JobRelationFilter, jobWhereInput>
  }, "user_id_job_id">

  export type postOrderByWithAggregationInput = {
    user_id?: SortOrder
    job_id?: SortOrder
    _count?: postCountOrderByAggregateInput
    _avg?: postAvgOrderByAggregateInput
    _max?: postMaxOrderByAggregateInput
    _min?: postMinOrderByAggregateInput
    _sum?: postSumOrderByAggregateInput
  }

  export type postScalarWhereWithAggregatesInput = {
    AND?: postScalarWhereWithAggregatesInput | postScalarWhereWithAggregatesInput[]
    OR?: postScalarWhereWithAggregatesInput[]
    NOT?: postScalarWhereWithAggregatesInput | postScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"post"> | number
    job_id?: IntWithAggregatesFilter<"post"> | number
  }

  export type userCreateInput = {
    first_name: string
    last_name: string
    username: string
    image?: string | null
    phone_number: string
    id_card: string
    email: string
    password: string
    role: string
    post?: postCreateNestedManyWithoutUserInput
    rating_user1?: rating_userCreateNestedManyWithoutUser1Input
    rating_users2?: rating_userCreateNestedManyWithoutUser2Input
    rating_com1?: rating_comCreateNestedManyWithoutUser1Input
    rating_com2?: rating_comCreateNestedManyWithoutUser2Input
    contact?: contactCreateNestedManyWithoutUserInput
    experience?: experienceCreateNestedManyWithoutUserInput
    user_career?: user_careerCreateNestedManyWithoutUserInput
    history?: historyCreateNestedManyWithoutUserInput
    bookmark?: bookmarkCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    user_id?: number
    first_name: string
    last_name: string
    username: string
    image?: string | null
    phone_number: string
    id_card: string
    email: string
    password: string
    role: string
    post?: postUncheckedCreateNestedManyWithoutUserInput
    rating_user1?: rating_userUncheckedCreateNestedManyWithoutUser1Input
    rating_users2?: rating_userUncheckedCreateNestedManyWithoutUser2Input
    rating_com1?: rating_comUncheckedCreateNestedManyWithoutUser1Input
    rating_com2?: rating_comUncheckedCreateNestedManyWithoutUser2Input
    contact?: contactUncheckedCreateNestedManyWithoutUserInput
    experience?: experienceUncheckedCreateNestedManyWithoutUserInput
    user_career?: user_careerUncheckedCreateNestedManyWithoutUserInput
    history?: historyUncheckedCreateNestedManyWithoutUserInput
    bookmark?: bookmarkUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    id_card?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    post?: postUpdateManyWithoutUserNestedInput
    rating_user1?: rating_userUpdateManyWithoutUser1NestedInput
    rating_users2?: rating_userUpdateManyWithoutUser2NestedInput
    rating_com1?: rating_comUpdateManyWithoutUser1NestedInput
    rating_com2?: rating_comUpdateManyWithoutUser2NestedInput
    contact?: contactUpdateManyWithoutUserNestedInput
    experience?: experienceUpdateManyWithoutUserNestedInput
    user_career?: user_careerUpdateManyWithoutUserNestedInput
    history?: historyUpdateManyWithoutUserNestedInput
    bookmark?: bookmarkUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    id_card?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    post?: postUncheckedUpdateManyWithoutUserNestedInput
    rating_user1?: rating_userUncheckedUpdateManyWithoutUser1NestedInput
    rating_users2?: rating_userUncheckedUpdateManyWithoutUser2NestedInput
    rating_com1?: rating_comUncheckedUpdateManyWithoutUser1NestedInput
    rating_com2?: rating_comUncheckedUpdateManyWithoutUser2NestedInput
    contact?: contactUncheckedUpdateManyWithoutUserNestedInput
    experience?: experienceUncheckedUpdateManyWithoutUserNestedInput
    user_career?: user_careerUncheckedUpdateManyWithoutUserNestedInput
    history?: historyUncheckedUpdateManyWithoutUserNestedInput
    bookmark?: bookmarkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    user_id?: number
    first_name: string
    last_name: string
    username: string
    image?: string | null
    phone_number: string
    id_card: string
    email: string
    password: string
    role: string
  }

  export type userUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    id_card?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    id_card?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type rating_userCreateInput = {
    friendly_rating?: number
    efficiency_rating?: number
    accuracy_rating?: number
    user1: userCreateNestedOneWithoutRating_user1Input
    user2: userCreateNestedOneWithoutRating_users2Input
    job: jobCreateNestedOneWithoutRating_userInput
  }

  export type rating_userUncheckedCreateInput = {
    rating_id?: number
    user_id1: number
    user_id2: number
    job_id: number
    friendly_rating?: number
    efficiency_rating?: number
    accuracy_rating?: number
  }

  export type rating_userUpdateInput = {
    friendly_rating?: FloatFieldUpdateOperationsInput | number
    efficiency_rating?: FloatFieldUpdateOperationsInput | number
    accuracy_rating?: FloatFieldUpdateOperationsInput | number
    user1?: userUpdateOneRequiredWithoutRating_user1NestedInput
    user2?: userUpdateOneRequiredWithoutRating_users2NestedInput
    job?: jobUpdateOneRequiredWithoutRating_userNestedInput
  }

  export type rating_userUncheckedUpdateInput = {
    rating_id?: IntFieldUpdateOperationsInput | number
    user_id1?: IntFieldUpdateOperationsInput | number
    user_id2?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    friendly_rating?: FloatFieldUpdateOperationsInput | number
    efficiency_rating?: FloatFieldUpdateOperationsInput | number
    accuracy_rating?: FloatFieldUpdateOperationsInput | number
  }

  export type rating_userCreateManyInput = {
    rating_id?: number
    user_id1: number
    user_id2: number
    job_id: number
    friendly_rating?: number
    efficiency_rating?: number
    accuracy_rating?: number
  }

  export type rating_userUpdateManyMutationInput = {
    friendly_rating?: FloatFieldUpdateOperationsInput | number
    efficiency_rating?: FloatFieldUpdateOperationsInput | number
    accuracy_rating?: FloatFieldUpdateOperationsInput | number
  }

  export type rating_userUncheckedUpdateManyInput = {
    rating_id?: IntFieldUpdateOperationsInput | number
    user_id1?: IntFieldUpdateOperationsInput | number
    user_id2?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    friendly_rating?: FloatFieldUpdateOperationsInput | number
    efficiency_rating?: FloatFieldUpdateOperationsInput | number
    accuracy_rating?: FloatFieldUpdateOperationsInput | number
  }

  export type rating_comCreateInput = {
    rating?: number
    user1: userCreateNestedOneWithoutRating_com1Input
    user2: userCreateNestedOneWithoutRating_com2Input
    job: jobCreateNestedOneWithoutRating_comInput
  }

  export type rating_comUncheckedCreateInput = {
    rating_id?: number
    user_id1: number
    user_id2: number
    job_id: number
    rating?: number
  }

  export type rating_comUpdateInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    user1?: userUpdateOneRequiredWithoutRating_com1NestedInput
    user2?: userUpdateOneRequiredWithoutRating_com2NestedInput
    job?: jobUpdateOneRequiredWithoutRating_comNestedInput
  }

  export type rating_comUncheckedUpdateInput = {
    rating_id?: IntFieldUpdateOperationsInput | number
    user_id1?: IntFieldUpdateOperationsInput | number
    user_id2?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
  }

  export type rating_comCreateManyInput = {
    rating_id?: number
    user_id1: number
    user_id2: number
    job_id: number
    rating?: number
  }

  export type rating_comUpdateManyMutationInput = {
    rating?: FloatFieldUpdateOperationsInput | number
  }

  export type rating_comUncheckedUpdateManyInput = {
    rating_id?: IntFieldUpdateOperationsInput | number
    user_id1?: IntFieldUpdateOperationsInput | number
    user_id2?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
  }

  export type contactCreateInput = {
    facebook: string
    instagram: string
    linkedin: string
    user: userCreateNestedOneWithoutContactInput
  }

  export type contactUncheckedCreateInput = {
    contact_id?: number
    user_id: number
    facebook: string
    instagram: string
    linkedin: string
  }

  export type contactUpdateInput = {
    facebook?: StringFieldUpdateOperationsInput | string
    instagram?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutContactNestedInput
  }

  export type contactUncheckedUpdateInput = {
    contact_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    facebook?: StringFieldUpdateOperationsInput | string
    instagram?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
  }

  export type contactCreateManyInput = {
    contact_id?: number
    user_id: number
    facebook: string
    instagram: string
    linkedin: string
  }

  export type contactUpdateManyMutationInput = {
    facebook?: StringFieldUpdateOperationsInput | string
    instagram?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
  }

  export type contactUncheckedUpdateManyInput = {
    contact_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    facebook?: StringFieldUpdateOperationsInput | string
    instagram?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
  }

  export type categoryCreateInput = {
    name: string
    experiences?: experienceCreateNestedManyWithoutCategoryInput
    job_exp?: job_expCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateInput = {
    category_id?: number
    name: string
    experiences?: experienceUncheckedCreateNestedManyWithoutCategoryInput
    job_exp?: job_expUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    experiences?: experienceUpdateManyWithoutCategoryNestedInput
    job_exp?: job_expUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    experiences?: experienceUncheckedUpdateManyWithoutCategoryNestedInput
    job_exp?: job_expUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoryCreateManyInput = {
    category_id?: number
    name: string
  }

  export type categoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type categoryUncheckedUpdateManyInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type experienceCreateInput = {
    user: userCreateNestedOneWithoutExperienceInput
    category: categoryCreateNestedOneWithoutExperiencesInput
  }

  export type experienceUncheckedCreateInput = {
    user_id: number
    category_id: number
  }

  export type experienceUpdateInput = {
    user?: userUpdateOneRequiredWithoutExperienceNestedInput
    category?: categoryUpdateOneRequiredWithoutExperiencesNestedInput
  }

  export type experienceUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type experienceCreateManyInput = {
    user_id: number
    category_id: number
  }

  export type experienceUpdateManyMutationInput = {

  }

  export type experienceUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type careerCreateInput = {
    name: string
    user_career?: user_careerCreateNestedManyWithoutCareerInput
  }

  export type careerUncheckedCreateInput = {
    career_id?: number
    name: string
    user_career?: user_careerUncheckedCreateNestedManyWithoutCareerInput
  }

  export type careerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    user_career?: user_careerUpdateManyWithoutCareerNestedInput
  }

  export type careerUncheckedUpdateInput = {
    career_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    user_career?: user_careerUncheckedUpdateManyWithoutCareerNestedInput
  }

  export type careerCreateManyInput = {
    career_id?: number
    name: string
  }

  export type careerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type careerUncheckedUpdateManyInput = {
    career_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type user_careerCreateInput = {
    user: userCreateNestedOneWithoutUser_careerInput
    career: careerCreateNestedOneWithoutUser_careerInput
  }

  export type user_careerUncheckedCreateInput = {
    user_id: number
    career_id: number
  }

  export type user_careerUpdateInput = {
    user?: userUpdateOneRequiredWithoutUser_careerNestedInput
    career?: careerUpdateOneRequiredWithoutUser_careerNestedInput
  }

  export type user_careerUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    career_id?: IntFieldUpdateOperationsInput | number
  }

  export type user_careerCreateManyInput = {
    user_id: number
    career_id: number
  }

  export type user_careerUpdateManyMutationInput = {

  }

  export type user_careerUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    career_id?: IntFieldUpdateOperationsInput | number
  }

  export type jobCreateInput = {
    title: string
    description: string
    budget: number
    type: string
    posted_date?: Date | string
    submitted_date?: Date | string | null
    status?: string
    history?: historyCreateNestedManyWithoutJobInput
    job_exp?: job_expCreateNestedManyWithoutJobInput
    rating_user?: rating_userCreateNestedManyWithoutJobInput
    rating_com?: rating_comCreateNestedManyWithoutJobInput
    bookmark?: bookmarkCreateNestedManyWithoutJobInput
    post?: postCreateNestedManyWithoutJobInput
  }

  export type jobUncheckedCreateInput = {
    job_id?: number
    title: string
    description: string
    budget: number
    type: string
    posted_date?: Date | string
    submitted_date?: Date | string | null
    status?: string
    history?: historyUncheckedCreateNestedManyWithoutJobInput
    job_exp?: job_expUncheckedCreateNestedManyWithoutJobInput
    rating_user?: rating_userUncheckedCreateNestedManyWithoutJobInput
    rating_com?: rating_comUncheckedCreateNestedManyWithoutJobInput
    bookmark?: bookmarkUncheckedCreateNestedManyWithoutJobInput
    post?: postUncheckedCreateNestedManyWithoutJobInput
  }

  export type jobUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    posted_date?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    history?: historyUpdateManyWithoutJobNestedInput
    job_exp?: job_expUpdateManyWithoutJobNestedInput
    rating_user?: rating_userUpdateManyWithoutJobNestedInput
    rating_com?: rating_comUpdateManyWithoutJobNestedInput
    bookmark?: bookmarkUpdateManyWithoutJobNestedInput
    post?: postUpdateManyWithoutJobNestedInput
  }

  export type jobUncheckedUpdateInput = {
    job_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    posted_date?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    history?: historyUncheckedUpdateManyWithoutJobNestedInput
    job_exp?: job_expUncheckedUpdateManyWithoutJobNestedInput
    rating_user?: rating_userUncheckedUpdateManyWithoutJobNestedInput
    rating_com?: rating_comUncheckedUpdateManyWithoutJobNestedInput
    bookmark?: bookmarkUncheckedUpdateManyWithoutJobNestedInput
    post?: postUncheckedUpdateManyWithoutJobNestedInput
  }

  export type jobCreateManyInput = {
    job_id?: number
    title: string
    description: string
    budget: number
    type: string
    posted_date?: Date | string
    submitted_date?: Date | string | null
    status?: string
  }

  export type jobUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    posted_date?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type jobUncheckedUpdateManyInput = {
    job_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    posted_date?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type historyCreateInput = {
    status?: string
    user: userCreateNestedOneWithoutHistoryInput
    job: jobCreateNestedOneWithoutHistoryInput
  }

  export type historyUncheckedCreateInput = {
    user_id: number
    job_id: number
    status?: string
  }

  export type historyUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutHistoryNestedInput
    job?: jobUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type historyUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type historyCreateManyInput = {
    user_id: number
    job_id: number
    status?: string
  }

  export type historyUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
  }

  export type historyUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type job_expCreateInput = {
    job: jobCreateNestedOneWithoutJob_expInput
    category: categoryCreateNestedOneWithoutJob_expInput
  }

  export type job_expUncheckedCreateInput = {
    job_id: number
    category_id: number
  }

  export type job_expUpdateInput = {
    job?: jobUpdateOneRequiredWithoutJob_expNestedInput
    category?: categoryUpdateOneRequiredWithoutJob_expNestedInput
  }

  export type job_expUncheckedUpdateInput = {
    job_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type job_expCreateManyInput = {
    job_id: number
    category_id: number
  }

  export type job_expUpdateManyMutationInput = {

  }

  export type job_expUncheckedUpdateManyInput = {
    job_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type bookmarkCreateInput = {
    user: userCreateNestedOneWithoutBookmarkInput
    job: jobCreateNestedOneWithoutBookmarkInput
  }

  export type bookmarkUncheckedCreateInput = {
    book_id?: number
    user_id: number
    job_id: number
  }

  export type bookmarkUpdateInput = {
    user?: userUpdateOneRequiredWithoutBookmarkNestedInput
    job?: jobUpdateOneRequiredWithoutBookmarkNestedInput
  }

  export type bookmarkUncheckedUpdateInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
  }

  export type bookmarkCreateManyInput = {
    book_id?: number
    user_id: number
    job_id: number
  }

  export type bookmarkUpdateManyMutationInput = {

  }

  export type bookmarkUncheckedUpdateManyInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
  }

  export type postCreateInput = {
    user: userCreateNestedOneWithoutPostInput
    job: jobCreateNestedOneWithoutPostInput
  }

  export type postUncheckedCreateInput = {
    user_id: number
    job_id: number
  }

  export type postUpdateInput = {
    user?: userUpdateOneRequiredWithoutPostNestedInput
    job?: jobUpdateOneRequiredWithoutPostNestedInput
  }

  export type postUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
  }

  export type postCreateManyInput = {
    user_id: number
    job_id: number
  }

  export type postUpdateManyMutationInput = {

  }

  export type postUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
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

  export type PostListRelationFilter = {
    every?: postWhereInput
    some?: postWhereInput
    none?: postWhereInput
  }

  export type Rating_userListRelationFilter = {
    every?: rating_userWhereInput
    some?: rating_userWhereInput
    none?: rating_userWhereInput
  }

  export type Rating_comListRelationFilter = {
    every?: rating_comWhereInput
    some?: rating_comWhereInput
    none?: rating_comWhereInput
  }

  export type ContactListRelationFilter = {
    every?: contactWhereInput
    some?: contactWhereInput
    none?: contactWhereInput
  }

  export type ExperienceListRelationFilter = {
    every?: experienceWhereInput
    some?: experienceWhereInput
    none?: experienceWhereInput
  }

  export type User_careerListRelationFilter = {
    every?: user_careerWhereInput
    some?: user_careerWhereInput
    none?: user_careerWhereInput
  }

  export type HistoryListRelationFilter = {
    every?: historyWhereInput
    some?: historyWhereInput
    none?: historyWhereInput
  }

  export type BookmarkListRelationFilter = {
    every?: bookmarkWhereInput
    some?: bookmarkWhereInput
    none?: bookmarkWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type postOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rating_userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rating_comOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type contactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type experienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_careerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type historyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type bookmarkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    image?: SortOrder
    phone_number?: SortOrder
    id_card?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    image?: SortOrder
    phone_number?: SortOrder
    id_card?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    image?: SortOrder
    phone_number?: SortOrder
    id_card?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    user_id?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type JobRelationFilter = {
    is?: jobWhereInput
    isNot?: jobWhereInput
  }

  export type rating_userCountOrderByAggregateInput = {
    rating_id?: SortOrder
    user_id1?: SortOrder
    user_id2?: SortOrder
    job_id?: SortOrder
    friendly_rating?: SortOrder
    efficiency_rating?: SortOrder
    accuracy_rating?: SortOrder
  }

  export type rating_userAvgOrderByAggregateInput = {
    rating_id?: SortOrder
    user_id1?: SortOrder
    user_id2?: SortOrder
    job_id?: SortOrder
    friendly_rating?: SortOrder
    efficiency_rating?: SortOrder
    accuracy_rating?: SortOrder
  }

  export type rating_userMaxOrderByAggregateInput = {
    rating_id?: SortOrder
    user_id1?: SortOrder
    user_id2?: SortOrder
    job_id?: SortOrder
    friendly_rating?: SortOrder
    efficiency_rating?: SortOrder
    accuracy_rating?: SortOrder
  }

  export type rating_userMinOrderByAggregateInput = {
    rating_id?: SortOrder
    user_id1?: SortOrder
    user_id2?: SortOrder
    job_id?: SortOrder
    friendly_rating?: SortOrder
    efficiency_rating?: SortOrder
    accuracy_rating?: SortOrder
  }

  export type rating_userSumOrderByAggregateInput = {
    rating_id?: SortOrder
    user_id1?: SortOrder
    user_id2?: SortOrder
    job_id?: SortOrder
    friendly_rating?: SortOrder
    efficiency_rating?: SortOrder
    accuracy_rating?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type rating_comCountOrderByAggregateInput = {
    rating_id?: SortOrder
    user_id1?: SortOrder
    user_id2?: SortOrder
    job_id?: SortOrder
    rating?: SortOrder
  }

  export type rating_comAvgOrderByAggregateInput = {
    rating_id?: SortOrder
    user_id1?: SortOrder
    user_id2?: SortOrder
    job_id?: SortOrder
    rating?: SortOrder
  }

  export type rating_comMaxOrderByAggregateInput = {
    rating_id?: SortOrder
    user_id1?: SortOrder
    user_id2?: SortOrder
    job_id?: SortOrder
    rating?: SortOrder
  }

  export type rating_comMinOrderByAggregateInput = {
    rating_id?: SortOrder
    user_id1?: SortOrder
    user_id2?: SortOrder
    job_id?: SortOrder
    rating?: SortOrder
  }

  export type rating_comSumOrderByAggregateInput = {
    rating_id?: SortOrder
    user_id1?: SortOrder
    user_id2?: SortOrder
    job_id?: SortOrder
    rating?: SortOrder
  }

  export type contactCountOrderByAggregateInput = {
    contact_id?: SortOrder
    user_id?: SortOrder
    facebook?: SortOrder
    instagram?: SortOrder
    linkedin?: SortOrder
  }

  export type contactAvgOrderByAggregateInput = {
    contact_id?: SortOrder
    user_id?: SortOrder
  }

  export type contactMaxOrderByAggregateInput = {
    contact_id?: SortOrder
    user_id?: SortOrder
    facebook?: SortOrder
    instagram?: SortOrder
    linkedin?: SortOrder
  }

  export type contactMinOrderByAggregateInput = {
    contact_id?: SortOrder
    user_id?: SortOrder
    facebook?: SortOrder
    instagram?: SortOrder
    linkedin?: SortOrder
  }

  export type contactSumOrderByAggregateInput = {
    contact_id?: SortOrder
    user_id?: SortOrder
  }

  export type Job_expListRelationFilter = {
    every?: job_expWhereInput
    some?: job_expWhereInput
    none?: job_expWhereInput
  }

  export type job_expOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoryCountOrderByAggregateInput = {
    category_id?: SortOrder
    name?: SortOrder
  }

  export type categoryAvgOrderByAggregateInput = {
    category_id?: SortOrder
  }

  export type categoryMaxOrderByAggregateInput = {
    category_id?: SortOrder
    name?: SortOrder
  }

  export type categoryMinOrderByAggregateInput = {
    category_id?: SortOrder
    name?: SortOrder
  }

  export type categorySumOrderByAggregateInput = {
    category_id?: SortOrder
  }

  export type CategoryRelationFilter = {
    is?: categoryWhereInput
    isNot?: categoryWhereInput
  }

  export type experienceUser_idCategory_idCompoundUniqueInput = {
    user_id: number
    category_id: number
  }

  export type experienceCountOrderByAggregateInput = {
    user_id?: SortOrder
    category_id?: SortOrder
  }

  export type experienceAvgOrderByAggregateInput = {
    user_id?: SortOrder
    category_id?: SortOrder
  }

  export type experienceMaxOrderByAggregateInput = {
    user_id?: SortOrder
    category_id?: SortOrder
  }

  export type experienceMinOrderByAggregateInput = {
    user_id?: SortOrder
    category_id?: SortOrder
  }

  export type experienceSumOrderByAggregateInput = {
    user_id?: SortOrder
    category_id?: SortOrder
  }

  export type careerCountOrderByAggregateInput = {
    career_id?: SortOrder
    name?: SortOrder
  }

  export type careerAvgOrderByAggregateInput = {
    career_id?: SortOrder
  }

  export type careerMaxOrderByAggregateInput = {
    career_id?: SortOrder
    name?: SortOrder
  }

  export type careerMinOrderByAggregateInput = {
    career_id?: SortOrder
    name?: SortOrder
  }

  export type careerSumOrderByAggregateInput = {
    career_id?: SortOrder
  }

  export type CareerRelationFilter = {
    is?: careerWhereInput
    isNot?: careerWhereInput
  }

  export type user_careerUser_idCareer_idCompoundUniqueInput = {
    user_id: number
    career_id: number
  }

  export type user_careerCountOrderByAggregateInput = {
    user_id?: SortOrder
    career_id?: SortOrder
  }

  export type user_careerAvgOrderByAggregateInput = {
    user_id?: SortOrder
    career_id?: SortOrder
  }

  export type user_careerMaxOrderByAggregateInput = {
    user_id?: SortOrder
    career_id?: SortOrder
  }

  export type user_careerMinOrderByAggregateInput = {
    user_id?: SortOrder
    career_id?: SortOrder
  }

  export type user_careerSumOrderByAggregateInput = {
    user_id?: SortOrder
    career_id?: SortOrder
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type jobCountOrderByAggregateInput = {
    job_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    budget?: SortOrder
    type?: SortOrder
    posted_date?: SortOrder
    submitted_date?: SortOrder
    status?: SortOrder
  }

  export type jobAvgOrderByAggregateInput = {
    job_id?: SortOrder
    budget?: SortOrder
  }

  export type jobMaxOrderByAggregateInput = {
    job_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    budget?: SortOrder
    type?: SortOrder
    posted_date?: SortOrder
    submitted_date?: SortOrder
    status?: SortOrder
  }

  export type jobMinOrderByAggregateInput = {
    job_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    budget?: SortOrder
    type?: SortOrder
    posted_date?: SortOrder
    submitted_date?: SortOrder
    status?: SortOrder
  }

  export type jobSumOrderByAggregateInput = {
    job_id?: SortOrder
    budget?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type historyUser_idJob_idCompoundUniqueInput = {
    user_id: number
    job_id: number
  }

  export type historyCountOrderByAggregateInput = {
    user_id?: SortOrder
    job_id?: SortOrder
    status?: SortOrder
  }

  export type historyAvgOrderByAggregateInput = {
    user_id?: SortOrder
    job_id?: SortOrder
  }

  export type historyMaxOrderByAggregateInput = {
    user_id?: SortOrder
    job_id?: SortOrder
    status?: SortOrder
  }

  export type historyMinOrderByAggregateInput = {
    user_id?: SortOrder
    job_id?: SortOrder
    status?: SortOrder
  }

  export type historySumOrderByAggregateInput = {
    user_id?: SortOrder
    job_id?: SortOrder
  }

  export type job_expJob_idCategory_idCompoundUniqueInput = {
    job_id: number
    category_id: number
  }

  export type job_expCountOrderByAggregateInput = {
    job_id?: SortOrder
    category_id?: SortOrder
  }

  export type job_expAvgOrderByAggregateInput = {
    job_id?: SortOrder
    category_id?: SortOrder
  }

  export type job_expMaxOrderByAggregateInput = {
    job_id?: SortOrder
    category_id?: SortOrder
  }

  export type job_expMinOrderByAggregateInput = {
    job_id?: SortOrder
    category_id?: SortOrder
  }

  export type job_expSumOrderByAggregateInput = {
    job_id?: SortOrder
    category_id?: SortOrder
  }

  export type bookmarkUser_idJob_idCompoundUniqueInput = {
    user_id: number
    job_id: number
  }

  export type bookmarkCountOrderByAggregateInput = {
    book_id?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
  }

  export type bookmarkAvgOrderByAggregateInput = {
    book_id?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
  }

  export type bookmarkMaxOrderByAggregateInput = {
    book_id?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
  }

  export type bookmarkMinOrderByAggregateInput = {
    book_id?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
  }

  export type bookmarkSumOrderByAggregateInput = {
    book_id?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
  }

  export type postUser_idJob_idCompoundUniqueInput = {
    user_id: number
    job_id: number
  }

  export type postCountOrderByAggregateInput = {
    user_id?: SortOrder
    job_id?: SortOrder
  }

  export type postAvgOrderByAggregateInput = {
    user_id?: SortOrder
    job_id?: SortOrder
  }

  export type postMaxOrderByAggregateInput = {
    user_id?: SortOrder
    job_id?: SortOrder
  }

  export type postMinOrderByAggregateInput = {
    user_id?: SortOrder
    job_id?: SortOrder
  }

  export type postSumOrderByAggregateInput = {
    user_id?: SortOrder
    job_id?: SortOrder
  }

  export type postCreateNestedManyWithoutUserInput = {
    create?: XOR<postCreateWithoutUserInput, postUncheckedCreateWithoutUserInput> | postCreateWithoutUserInput[] | postUncheckedCreateWithoutUserInput[]
    connectOrCreate?: postCreateOrConnectWithoutUserInput | postCreateOrConnectWithoutUserInput[]
    createMany?: postCreateManyUserInputEnvelope
    connect?: postWhereUniqueInput | postWhereUniqueInput[]
  }

  export type rating_userCreateNestedManyWithoutUser1Input = {
    create?: XOR<rating_userCreateWithoutUser1Input, rating_userUncheckedCreateWithoutUser1Input> | rating_userCreateWithoutUser1Input[] | rating_userUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: rating_userCreateOrConnectWithoutUser1Input | rating_userCreateOrConnectWithoutUser1Input[]
    createMany?: rating_userCreateManyUser1InputEnvelope
    connect?: rating_userWhereUniqueInput | rating_userWhereUniqueInput[]
  }

  export type rating_userCreateNestedManyWithoutUser2Input = {
    create?: XOR<rating_userCreateWithoutUser2Input, rating_userUncheckedCreateWithoutUser2Input> | rating_userCreateWithoutUser2Input[] | rating_userUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: rating_userCreateOrConnectWithoutUser2Input | rating_userCreateOrConnectWithoutUser2Input[]
    createMany?: rating_userCreateManyUser2InputEnvelope
    connect?: rating_userWhereUniqueInput | rating_userWhereUniqueInput[]
  }

  export type rating_comCreateNestedManyWithoutUser1Input = {
    create?: XOR<rating_comCreateWithoutUser1Input, rating_comUncheckedCreateWithoutUser1Input> | rating_comCreateWithoutUser1Input[] | rating_comUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: rating_comCreateOrConnectWithoutUser1Input | rating_comCreateOrConnectWithoutUser1Input[]
    createMany?: rating_comCreateManyUser1InputEnvelope
    connect?: rating_comWhereUniqueInput | rating_comWhereUniqueInput[]
  }

  export type rating_comCreateNestedManyWithoutUser2Input = {
    create?: XOR<rating_comCreateWithoutUser2Input, rating_comUncheckedCreateWithoutUser2Input> | rating_comCreateWithoutUser2Input[] | rating_comUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: rating_comCreateOrConnectWithoutUser2Input | rating_comCreateOrConnectWithoutUser2Input[]
    createMany?: rating_comCreateManyUser2InputEnvelope
    connect?: rating_comWhereUniqueInput | rating_comWhereUniqueInput[]
  }

  export type contactCreateNestedManyWithoutUserInput = {
    create?: XOR<contactCreateWithoutUserInput, contactUncheckedCreateWithoutUserInput> | contactCreateWithoutUserInput[] | contactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: contactCreateOrConnectWithoutUserInput | contactCreateOrConnectWithoutUserInput[]
    createMany?: contactCreateManyUserInputEnvelope
    connect?: contactWhereUniqueInput | contactWhereUniqueInput[]
  }

  export type experienceCreateNestedManyWithoutUserInput = {
    create?: XOR<experienceCreateWithoutUserInput, experienceUncheckedCreateWithoutUserInput> | experienceCreateWithoutUserInput[] | experienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: experienceCreateOrConnectWithoutUserInput | experienceCreateOrConnectWithoutUserInput[]
    createMany?: experienceCreateManyUserInputEnvelope
    connect?: experienceWhereUniqueInput | experienceWhereUniqueInput[]
  }

  export type user_careerCreateNestedManyWithoutUserInput = {
    create?: XOR<user_careerCreateWithoutUserInput, user_careerUncheckedCreateWithoutUserInput> | user_careerCreateWithoutUserInput[] | user_careerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_careerCreateOrConnectWithoutUserInput | user_careerCreateOrConnectWithoutUserInput[]
    createMany?: user_careerCreateManyUserInputEnvelope
    connect?: user_careerWhereUniqueInput | user_careerWhereUniqueInput[]
  }

  export type historyCreateNestedManyWithoutUserInput = {
    create?: XOR<historyCreateWithoutUserInput, historyUncheckedCreateWithoutUserInput> | historyCreateWithoutUserInput[] | historyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: historyCreateOrConnectWithoutUserInput | historyCreateOrConnectWithoutUserInput[]
    createMany?: historyCreateManyUserInputEnvelope
    connect?: historyWhereUniqueInput | historyWhereUniqueInput[]
  }

  export type bookmarkCreateNestedManyWithoutUserInput = {
    create?: XOR<bookmarkCreateWithoutUserInput, bookmarkUncheckedCreateWithoutUserInput> | bookmarkCreateWithoutUserInput[] | bookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bookmarkCreateOrConnectWithoutUserInput | bookmarkCreateOrConnectWithoutUserInput[]
    createMany?: bookmarkCreateManyUserInputEnvelope
    connect?: bookmarkWhereUniqueInput | bookmarkWhereUniqueInput[]
  }

  export type postUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<postCreateWithoutUserInput, postUncheckedCreateWithoutUserInput> | postCreateWithoutUserInput[] | postUncheckedCreateWithoutUserInput[]
    connectOrCreate?: postCreateOrConnectWithoutUserInput | postCreateOrConnectWithoutUserInput[]
    createMany?: postCreateManyUserInputEnvelope
    connect?: postWhereUniqueInput | postWhereUniqueInput[]
  }

  export type rating_userUncheckedCreateNestedManyWithoutUser1Input = {
    create?: XOR<rating_userCreateWithoutUser1Input, rating_userUncheckedCreateWithoutUser1Input> | rating_userCreateWithoutUser1Input[] | rating_userUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: rating_userCreateOrConnectWithoutUser1Input | rating_userCreateOrConnectWithoutUser1Input[]
    createMany?: rating_userCreateManyUser1InputEnvelope
    connect?: rating_userWhereUniqueInput | rating_userWhereUniqueInput[]
  }

  export type rating_userUncheckedCreateNestedManyWithoutUser2Input = {
    create?: XOR<rating_userCreateWithoutUser2Input, rating_userUncheckedCreateWithoutUser2Input> | rating_userCreateWithoutUser2Input[] | rating_userUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: rating_userCreateOrConnectWithoutUser2Input | rating_userCreateOrConnectWithoutUser2Input[]
    createMany?: rating_userCreateManyUser2InputEnvelope
    connect?: rating_userWhereUniqueInput | rating_userWhereUniqueInput[]
  }

  export type rating_comUncheckedCreateNestedManyWithoutUser1Input = {
    create?: XOR<rating_comCreateWithoutUser1Input, rating_comUncheckedCreateWithoutUser1Input> | rating_comCreateWithoutUser1Input[] | rating_comUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: rating_comCreateOrConnectWithoutUser1Input | rating_comCreateOrConnectWithoutUser1Input[]
    createMany?: rating_comCreateManyUser1InputEnvelope
    connect?: rating_comWhereUniqueInput | rating_comWhereUniqueInput[]
  }

  export type rating_comUncheckedCreateNestedManyWithoutUser2Input = {
    create?: XOR<rating_comCreateWithoutUser2Input, rating_comUncheckedCreateWithoutUser2Input> | rating_comCreateWithoutUser2Input[] | rating_comUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: rating_comCreateOrConnectWithoutUser2Input | rating_comCreateOrConnectWithoutUser2Input[]
    createMany?: rating_comCreateManyUser2InputEnvelope
    connect?: rating_comWhereUniqueInput | rating_comWhereUniqueInput[]
  }

  export type contactUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<contactCreateWithoutUserInput, contactUncheckedCreateWithoutUserInput> | contactCreateWithoutUserInput[] | contactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: contactCreateOrConnectWithoutUserInput | contactCreateOrConnectWithoutUserInput[]
    createMany?: contactCreateManyUserInputEnvelope
    connect?: contactWhereUniqueInput | contactWhereUniqueInput[]
  }

  export type experienceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<experienceCreateWithoutUserInput, experienceUncheckedCreateWithoutUserInput> | experienceCreateWithoutUserInput[] | experienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: experienceCreateOrConnectWithoutUserInput | experienceCreateOrConnectWithoutUserInput[]
    createMany?: experienceCreateManyUserInputEnvelope
    connect?: experienceWhereUniqueInput | experienceWhereUniqueInput[]
  }

  export type user_careerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<user_careerCreateWithoutUserInput, user_careerUncheckedCreateWithoutUserInput> | user_careerCreateWithoutUserInput[] | user_careerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_careerCreateOrConnectWithoutUserInput | user_careerCreateOrConnectWithoutUserInput[]
    createMany?: user_careerCreateManyUserInputEnvelope
    connect?: user_careerWhereUniqueInput | user_careerWhereUniqueInput[]
  }

  export type historyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<historyCreateWithoutUserInput, historyUncheckedCreateWithoutUserInput> | historyCreateWithoutUserInput[] | historyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: historyCreateOrConnectWithoutUserInput | historyCreateOrConnectWithoutUserInput[]
    createMany?: historyCreateManyUserInputEnvelope
    connect?: historyWhereUniqueInput | historyWhereUniqueInput[]
  }

  export type bookmarkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<bookmarkCreateWithoutUserInput, bookmarkUncheckedCreateWithoutUserInput> | bookmarkCreateWithoutUserInput[] | bookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bookmarkCreateOrConnectWithoutUserInput | bookmarkCreateOrConnectWithoutUserInput[]
    createMany?: bookmarkCreateManyUserInputEnvelope
    connect?: bookmarkWhereUniqueInput | bookmarkWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type postUpdateManyWithoutUserNestedInput = {
    create?: XOR<postCreateWithoutUserInput, postUncheckedCreateWithoutUserInput> | postCreateWithoutUserInput[] | postUncheckedCreateWithoutUserInput[]
    connectOrCreate?: postCreateOrConnectWithoutUserInput | postCreateOrConnectWithoutUserInput[]
    upsert?: postUpsertWithWhereUniqueWithoutUserInput | postUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: postCreateManyUserInputEnvelope
    set?: postWhereUniqueInput | postWhereUniqueInput[]
    disconnect?: postWhereUniqueInput | postWhereUniqueInput[]
    delete?: postWhereUniqueInput | postWhereUniqueInput[]
    connect?: postWhereUniqueInput | postWhereUniqueInput[]
    update?: postUpdateWithWhereUniqueWithoutUserInput | postUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: postUpdateManyWithWhereWithoutUserInput | postUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: postScalarWhereInput | postScalarWhereInput[]
  }

  export type rating_userUpdateManyWithoutUser1NestedInput = {
    create?: XOR<rating_userCreateWithoutUser1Input, rating_userUncheckedCreateWithoutUser1Input> | rating_userCreateWithoutUser1Input[] | rating_userUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: rating_userCreateOrConnectWithoutUser1Input | rating_userCreateOrConnectWithoutUser1Input[]
    upsert?: rating_userUpsertWithWhereUniqueWithoutUser1Input | rating_userUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: rating_userCreateManyUser1InputEnvelope
    set?: rating_userWhereUniqueInput | rating_userWhereUniqueInput[]
    disconnect?: rating_userWhereUniqueInput | rating_userWhereUniqueInput[]
    delete?: rating_userWhereUniqueInput | rating_userWhereUniqueInput[]
    connect?: rating_userWhereUniqueInput | rating_userWhereUniqueInput[]
    update?: rating_userUpdateWithWhereUniqueWithoutUser1Input | rating_userUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: rating_userUpdateManyWithWhereWithoutUser1Input | rating_userUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: rating_userScalarWhereInput | rating_userScalarWhereInput[]
  }

  export type rating_userUpdateManyWithoutUser2NestedInput = {
    create?: XOR<rating_userCreateWithoutUser2Input, rating_userUncheckedCreateWithoutUser2Input> | rating_userCreateWithoutUser2Input[] | rating_userUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: rating_userCreateOrConnectWithoutUser2Input | rating_userCreateOrConnectWithoutUser2Input[]
    upsert?: rating_userUpsertWithWhereUniqueWithoutUser2Input | rating_userUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: rating_userCreateManyUser2InputEnvelope
    set?: rating_userWhereUniqueInput | rating_userWhereUniqueInput[]
    disconnect?: rating_userWhereUniqueInput | rating_userWhereUniqueInput[]
    delete?: rating_userWhereUniqueInput | rating_userWhereUniqueInput[]
    connect?: rating_userWhereUniqueInput | rating_userWhereUniqueInput[]
    update?: rating_userUpdateWithWhereUniqueWithoutUser2Input | rating_userUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: rating_userUpdateManyWithWhereWithoutUser2Input | rating_userUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: rating_userScalarWhereInput | rating_userScalarWhereInput[]
  }

  export type rating_comUpdateManyWithoutUser1NestedInput = {
    create?: XOR<rating_comCreateWithoutUser1Input, rating_comUncheckedCreateWithoutUser1Input> | rating_comCreateWithoutUser1Input[] | rating_comUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: rating_comCreateOrConnectWithoutUser1Input | rating_comCreateOrConnectWithoutUser1Input[]
    upsert?: rating_comUpsertWithWhereUniqueWithoutUser1Input | rating_comUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: rating_comCreateManyUser1InputEnvelope
    set?: rating_comWhereUniqueInput | rating_comWhereUniqueInput[]
    disconnect?: rating_comWhereUniqueInput | rating_comWhereUniqueInput[]
    delete?: rating_comWhereUniqueInput | rating_comWhereUniqueInput[]
    connect?: rating_comWhereUniqueInput | rating_comWhereUniqueInput[]
    update?: rating_comUpdateWithWhereUniqueWithoutUser1Input | rating_comUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: rating_comUpdateManyWithWhereWithoutUser1Input | rating_comUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: rating_comScalarWhereInput | rating_comScalarWhereInput[]
  }

  export type rating_comUpdateManyWithoutUser2NestedInput = {
    create?: XOR<rating_comCreateWithoutUser2Input, rating_comUncheckedCreateWithoutUser2Input> | rating_comCreateWithoutUser2Input[] | rating_comUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: rating_comCreateOrConnectWithoutUser2Input | rating_comCreateOrConnectWithoutUser2Input[]
    upsert?: rating_comUpsertWithWhereUniqueWithoutUser2Input | rating_comUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: rating_comCreateManyUser2InputEnvelope
    set?: rating_comWhereUniqueInput | rating_comWhereUniqueInput[]
    disconnect?: rating_comWhereUniqueInput | rating_comWhereUniqueInput[]
    delete?: rating_comWhereUniqueInput | rating_comWhereUniqueInput[]
    connect?: rating_comWhereUniqueInput | rating_comWhereUniqueInput[]
    update?: rating_comUpdateWithWhereUniqueWithoutUser2Input | rating_comUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: rating_comUpdateManyWithWhereWithoutUser2Input | rating_comUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: rating_comScalarWhereInput | rating_comScalarWhereInput[]
  }

  export type contactUpdateManyWithoutUserNestedInput = {
    create?: XOR<contactCreateWithoutUserInput, contactUncheckedCreateWithoutUserInput> | contactCreateWithoutUserInput[] | contactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: contactCreateOrConnectWithoutUserInput | contactCreateOrConnectWithoutUserInput[]
    upsert?: contactUpsertWithWhereUniqueWithoutUserInput | contactUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: contactCreateManyUserInputEnvelope
    set?: contactWhereUniqueInput | contactWhereUniqueInput[]
    disconnect?: contactWhereUniqueInput | contactWhereUniqueInput[]
    delete?: contactWhereUniqueInput | contactWhereUniqueInput[]
    connect?: contactWhereUniqueInput | contactWhereUniqueInput[]
    update?: contactUpdateWithWhereUniqueWithoutUserInput | contactUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: contactUpdateManyWithWhereWithoutUserInput | contactUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: contactScalarWhereInput | contactScalarWhereInput[]
  }

  export type experienceUpdateManyWithoutUserNestedInput = {
    create?: XOR<experienceCreateWithoutUserInput, experienceUncheckedCreateWithoutUserInput> | experienceCreateWithoutUserInput[] | experienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: experienceCreateOrConnectWithoutUserInput | experienceCreateOrConnectWithoutUserInput[]
    upsert?: experienceUpsertWithWhereUniqueWithoutUserInput | experienceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: experienceCreateManyUserInputEnvelope
    set?: experienceWhereUniqueInput | experienceWhereUniqueInput[]
    disconnect?: experienceWhereUniqueInput | experienceWhereUniqueInput[]
    delete?: experienceWhereUniqueInput | experienceWhereUniqueInput[]
    connect?: experienceWhereUniqueInput | experienceWhereUniqueInput[]
    update?: experienceUpdateWithWhereUniqueWithoutUserInput | experienceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: experienceUpdateManyWithWhereWithoutUserInput | experienceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: experienceScalarWhereInput | experienceScalarWhereInput[]
  }

  export type user_careerUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_careerCreateWithoutUserInput, user_careerUncheckedCreateWithoutUserInput> | user_careerCreateWithoutUserInput[] | user_careerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_careerCreateOrConnectWithoutUserInput | user_careerCreateOrConnectWithoutUserInput[]
    upsert?: user_careerUpsertWithWhereUniqueWithoutUserInput | user_careerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_careerCreateManyUserInputEnvelope
    set?: user_careerWhereUniqueInput | user_careerWhereUniqueInput[]
    disconnect?: user_careerWhereUniqueInput | user_careerWhereUniqueInput[]
    delete?: user_careerWhereUniqueInput | user_careerWhereUniqueInput[]
    connect?: user_careerWhereUniqueInput | user_careerWhereUniqueInput[]
    update?: user_careerUpdateWithWhereUniqueWithoutUserInput | user_careerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_careerUpdateManyWithWhereWithoutUserInput | user_careerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_careerScalarWhereInput | user_careerScalarWhereInput[]
  }

  export type historyUpdateManyWithoutUserNestedInput = {
    create?: XOR<historyCreateWithoutUserInput, historyUncheckedCreateWithoutUserInput> | historyCreateWithoutUserInput[] | historyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: historyCreateOrConnectWithoutUserInput | historyCreateOrConnectWithoutUserInput[]
    upsert?: historyUpsertWithWhereUniqueWithoutUserInput | historyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: historyCreateManyUserInputEnvelope
    set?: historyWhereUniqueInput | historyWhereUniqueInput[]
    disconnect?: historyWhereUniqueInput | historyWhereUniqueInput[]
    delete?: historyWhereUniqueInput | historyWhereUniqueInput[]
    connect?: historyWhereUniqueInput | historyWhereUniqueInput[]
    update?: historyUpdateWithWhereUniqueWithoutUserInput | historyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: historyUpdateManyWithWhereWithoutUserInput | historyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: historyScalarWhereInput | historyScalarWhereInput[]
  }

  export type bookmarkUpdateManyWithoutUserNestedInput = {
    create?: XOR<bookmarkCreateWithoutUserInput, bookmarkUncheckedCreateWithoutUserInput> | bookmarkCreateWithoutUserInput[] | bookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bookmarkCreateOrConnectWithoutUserInput | bookmarkCreateOrConnectWithoutUserInput[]
    upsert?: bookmarkUpsertWithWhereUniqueWithoutUserInput | bookmarkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: bookmarkCreateManyUserInputEnvelope
    set?: bookmarkWhereUniqueInput | bookmarkWhereUniqueInput[]
    disconnect?: bookmarkWhereUniqueInput | bookmarkWhereUniqueInput[]
    delete?: bookmarkWhereUniqueInput | bookmarkWhereUniqueInput[]
    connect?: bookmarkWhereUniqueInput | bookmarkWhereUniqueInput[]
    update?: bookmarkUpdateWithWhereUniqueWithoutUserInput | bookmarkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: bookmarkUpdateManyWithWhereWithoutUserInput | bookmarkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: bookmarkScalarWhereInput | bookmarkScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type postUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<postCreateWithoutUserInput, postUncheckedCreateWithoutUserInput> | postCreateWithoutUserInput[] | postUncheckedCreateWithoutUserInput[]
    connectOrCreate?: postCreateOrConnectWithoutUserInput | postCreateOrConnectWithoutUserInput[]
    upsert?: postUpsertWithWhereUniqueWithoutUserInput | postUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: postCreateManyUserInputEnvelope
    set?: postWhereUniqueInput | postWhereUniqueInput[]
    disconnect?: postWhereUniqueInput | postWhereUniqueInput[]
    delete?: postWhereUniqueInput | postWhereUniqueInput[]
    connect?: postWhereUniqueInput | postWhereUniqueInput[]
    update?: postUpdateWithWhereUniqueWithoutUserInput | postUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: postUpdateManyWithWhereWithoutUserInput | postUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: postScalarWhereInput | postScalarWhereInput[]
  }

  export type rating_userUncheckedUpdateManyWithoutUser1NestedInput = {
    create?: XOR<rating_userCreateWithoutUser1Input, rating_userUncheckedCreateWithoutUser1Input> | rating_userCreateWithoutUser1Input[] | rating_userUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: rating_userCreateOrConnectWithoutUser1Input | rating_userCreateOrConnectWithoutUser1Input[]
    upsert?: rating_userUpsertWithWhereUniqueWithoutUser1Input | rating_userUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: rating_userCreateManyUser1InputEnvelope
    set?: rating_userWhereUniqueInput | rating_userWhereUniqueInput[]
    disconnect?: rating_userWhereUniqueInput | rating_userWhereUniqueInput[]
    delete?: rating_userWhereUniqueInput | rating_userWhereUniqueInput[]
    connect?: rating_userWhereUniqueInput | rating_userWhereUniqueInput[]
    update?: rating_userUpdateWithWhereUniqueWithoutUser1Input | rating_userUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: rating_userUpdateManyWithWhereWithoutUser1Input | rating_userUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: rating_userScalarWhereInput | rating_userScalarWhereInput[]
  }

  export type rating_userUncheckedUpdateManyWithoutUser2NestedInput = {
    create?: XOR<rating_userCreateWithoutUser2Input, rating_userUncheckedCreateWithoutUser2Input> | rating_userCreateWithoutUser2Input[] | rating_userUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: rating_userCreateOrConnectWithoutUser2Input | rating_userCreateOrConnectWithoutUser2Input[]
    upsert?: rating_userUpsertWithWhereUniqueWithoutUser2Input | rating_userUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: rating_userCreateManyUser2InputEnvelope
    set?: rating_userWhereUniqueInput | rating_userWhereUniqueInput[]
    disconnect?: rating_userWhereUniqueInput | rating_userWhereUniqueInput[]
    delete?: rating_userWhereUniqueInput | rating_userWhereUniqueInput[]
    connect?: rating_userWhereUniqueInput | rating_userWhereUniqueInput[]
    update?: rating_userUpdateWithWhereUniqueWithoutUser2Input | rating_userUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: rating_userUpdateManyWithWhereWithoutUser2Input | rating_userUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: rating_userScalarWhereInput | rating_userScalarWhereInput[]
  }

  export type rating_comUncheckedUpdateManyWithoutUser1NestedInput = {
    create?: XOR<rating_comCreateWithoutUser1Input, rating_comUncheckedCreateWithoutUser1Input> | rating_comCreateWithoutUser1Input[] | rating_comUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: rating_comCreateOrConnectWithoutUser1Input | rating_comCreateOrConnectWithoutUser1Input[]
    upsert?: rating_comUpsertWithWhereUniqueWithoutUser1Input | rating_comUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: rating_comCreateManyUser1InputEnvelope
    set?: rating_comWhereUniqueInput | rating_comWhereUniqueInput[]
    disconnect?: rating_comWhereUniqueInput | rating_comWhereUniqueInput[]
    delete?: rating_comWhereUniqueInput | rating_comWhereUniqueInput[]
    connect?: rating_comWhereUniqueInput | rating_comWhereUniqueInput[]
    update?: rating_comUpdateWithWhereUniqueWithoutUser1Input | rating_comUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: rating_comUpdateManyWithWhereWithoutUser1Input | rating_comUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: rating_comScalarWhereInput | rating_comScalarWhereInput[]
  }

  export type rating_comUncheckedUpdateManyWithoutUser2NestedInput = {
    create?: XOR<rating_comCreateWithoutUser2Input, rating_comUncheckedCreateWithoutUser2Input> | rating_comCreateWithoutUser2Input[] | rating_comUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: rating_comCreateOrConnectWithoutUser2Input | rating_comCreateOrConnectWithoutUser2Input[]
    upsert?: rating_comUpsertWithWhereUniqueWithoutUser2Input | rating_comUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: rating_comCreateManyUser2InputEnvelope
    set?: rating_comWhereUniqueInput | rating_comWhereUniqueInput[]
    disconnect?: rating_comWhereUniqueInput | rating_comWhereUniqueInput[]
    delete?: rating_comWhereUniqueInput | rating_comWhereUniqueInput[]
    connect?: rating_comWhereUniqueInput | rating_comWhereUniqueInput[]
    update?: rating_comUpdateWithWhereUniqueWithoutUser2Input | rating_comUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: rating_comUpdateManyWithWhereWithoutUser2Input | rating_comUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: rating_comScalarWhereInput | rating_comScalarWhereInput[]
  }

  export type contactUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<contactCreateWithoutUserInput, contactUncheckedCreateWithoutUserInput> | contactCreateWithoutUserInput[] | contactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: contactCreateOrConnectWithoutUserInput | contactCreateOrConnectWithoutUserInput[]
    upsert?: contactUpsertWithWhereUniqueWithoutUserInput | contactUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: contactCreateManyUserInputEnvelope
    set?: contactWhereUniqueInput | contactWhereUniqueInput[]
    disconnect?: contactWhereUniqueInput | contactWhereUniqueInput[]
    delete?: contactWhereUniqueInput | contactWhereUniqueInput[]
    connect?: contactWhereUniqueInput | contactWhereUniqueInput[]
    update?: contactUpdateWithWhereUniqueWithoutUserInput | contactUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: contactUpdateManyWithWhereWithoutUserInput | contactUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: contactScalarWhereInput | contactScalarWhereInput[]
  }

  export type experienceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<experienceCreateWithoutUserInput, experienceUncheckedCreateWithoutUserInput> | experienceCreateWithoutUserInput[] | experienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: experienceCreateOrConnectWithoutUserInput | experienceCreateOrConnectWithoutUserInput[]
    upsert?: experienceUpsertWithWhereUniqueWithoutUserInput | experienceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: experienceCreateManyUserInputEnvelope
    set?: experienceWhereUniqueInput | experienceWhereUniqueInput[]
    disconnect?: experienceWhereUniqueInput | experienceWhereUniqueInput[]
    delete?: experienceWhereUniqueInput | experienceWhereUniqueInput[]
    connect?: experienceWhereUniqueInput | experienceWhereUniqueInput[]
    update?: experienceUpdateWithWhereUniqueWithoutUserInput | experienceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: experienceUpdateManyWithWhereWithoutUserInput | experienceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: experienceScalarWhereInput | experienceScalarWhereInput[]
  }

  export type user_careerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_careerCreateWithoutUserInput, user_careerUncheckedCreateWithoutUserInput> | user_careerCreateWithoutUserInput[] | user_careerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_careerCreateOrConnectWithoutUserInput | user_careerCreateOrConnectWithoutUserInput[]
    upsert?: user_careerUpsertWithWhereUniqueWithoutUserInput | user_careerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_careerCreateManyUserInputEnvelope
    set?: user_careerWhereUniqueInput | user_careerWhereUniqueInput[]
    disconnect?: user_careerWhereUniqueInput | user_careerWhereUniqueInput[]
    delete?: user_careerWhereUniqueInput | user_careerWhereUniqueInput[]
    connect?: user_careerWhereUniqueInput | user_careerWhereUniqueInput[]
    update?: user_careerUpdateWithWhereUniqueWithoutUserInput | user_careerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_careerUpdateManyWithWhereWithoutUserInput | user_careerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_careerScalarWhereInput | user_careerScalarWhereInput[]
  }

  export type historyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<historyCreateWithoutUserInput, historyUncheckedCreateWithoutUserInput> | historyCreateWithoutUserInput[] | historyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: historyCreateOrConnectWithoutUserInput | historyCreateOrConnectWithoutUserInput[]
    upsert?: historyUpsertWithWhereUniqueWithoutUserInput | historyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: historyCreateManyUserInputEnvelope
    set?: historyWhereUniqueInput | historyWhereUniqueInput[]
    disconnect?: historyWhereUniqueInput | historyWhereUniqueInput[]
    delete?: historyWhereUniqueInput | historyWhereUniqueInput[]
    connect?: historyWhereUniqueInput | historyWhereUniqueInput[]
    update?: historyUpdateWithWhereUniqueWithoutUserInput | historyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: historyUpdateManyWithWhereWithoutUserInput | historyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: historyScalarWhereInput | historyScalarWhereInput[]
  }

  export type bookmarkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<bookmarkCreateWithoutUserInput, bookmarkUncheckedCreateWithoutUserInput> | bookmarkCreateWithoutUserInput[] | bookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bookmarkCreateOrConnectWithoutUserInput | bookmarkCreateOrConnectWithoutUserInput[]
    upsert?: bookmarkUpsertWithWhereUniqueWithoutUserInput | bookmarkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: bookmarkCreateManyUserInputEnvelope
    set?: bookmarkWhereUniqueInput | bookmarkWhereUniqueInput[]
    disconnect?: bookmarkWhereUniqueInput | bookmarkWhereUniqueInput[]
    delete?: bookmarkWhereUniqueInput | bookmarkWhereUniqueInput[]
    connect?: bookmarkWhereUniqueInput | bookmarkWhereUniqueInput[]
    update?: bookmarkUpdateWithWhereUniqueWithoutUserInput | bookmarkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: bookmarkUpdateManyWithWhereWithoutUserInput | bookmarkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: bookmarkScalarWhereInput | bookmarkScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutRating_user1Input = {
    create?: XOR<userCreateWithoutRating_user1Input, userUncheckedCreateWithoutRating_user1Input>
    connectOrCreate?: userCreateOrConnectWithoutRating_user1Input
    connect?: userWhereUniqueInput
  }

  export type userCreateNestedOneWithoutRating_users2Input = {
    create?: XOR<userCreateWithoutRating_users2Input, userUncheckedCreateWithoutRating_users2Input>
    connectOrCreate?: userCreateOrConnectWithoutRating_users2Input
    connect?: userWhereUniqueInput
  }

  export type jobCreateNestedOneWithoutRating_userInput = {
    create?: XOR<jobCreateWithoutRating_userInput, jobUncheckedCreateWithoutRating_userInput>
    connectOrCreate?: jobCreateOrConnectWithoutRating_userInput
    connect?: jobWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type userUpdateOneRequiredWithoutRating_user1NestedInput = {
    create?: XOR<userCreateWithoutRating_user1Input, userUncheckedCreateWithoutRating_user1Input>
    connectOrCreate?: userCreateOrConnectWithoutRating_user1Input
    upsert?: userUpsertWithoutRating_user1Input
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutRating_user1Input, userUpdateWithoutRating_user1Input>, userUncheckedUpdateWithoutRating_user1Input>
  }

  export type userUpdateOneRequiredWithoutRating_users2NestedInput = {
    create?: XOR<userCreateWithoutRating_users2Input, userUncheckedCreateWithoutRating_users2Input>
    connectOrCreate?: userCreateOrConnectWithoutRating_users2Input
    upsert?: userUpsertWithoutRating_users2Input
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutRating_users2Input, userUpdateWithoutRating_users2Input>, userUncheckedUpdateWithoutRating_users2Input>
  }

  export type jobUpdateOneRequiredWithoutRating_userNestedInput = {
    create?: XOR<jobCreateWithoutRating_userInput, jobUncheckedCreateWithoutRating_userInput>
    connectOrCreate?: jobCreateOrConnectWithoutRating_userInput
    upsert?: jobUpsertWithoutRating_userInput
    connect?: jobWhereUniqueInput
    update?: XOR<XOR<jobUpdateToOneWithWhereWithoutRating_userInput, jobUpdateWithoutRating_userInput>, jobUncheckedUpdateWithoutRating_userInput>
  }

  export type userCreateNestedOneWithoutRating_com1Input = {
    create?: XOR<userCreateWithoutRating_com1Input, userUncheckedCreateWithoutRating_com1Input>
    connectOrCreate?: userCreateOrConnectWithoutRating_com1Input
    connect?: userWhereUniqueInput
  }

  export type userCreateNestedOneWithoutRating_com2Input = {
    create?: XOR<userCreateWithoutRating_com2Input, userUncheckedCreateWithoutRating_com2Input>
    connectOrCreate?: userCreateOrConnectWithoutRating_com2Input
    connect?: userWhereUniqueInput
  }

  export type jobCreateNestedOneWithoutRating_comInput = {
    create?: XOR<jobCreateWithoutRating_comInput, jobUncheckedCreateWithoutRating_comInput>
    connectOrCreate?: jobCreateOrConnectWithoutRating_comInput
    connect?: jobWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutRating_com1NestedInput = {
    create?: XOR<userCreateWithoutRating_com1Input, userUncheckedCreateWithoutRating_com1Input>
    connectOrCreate?: userCreateOrConnectWithoutRating_com1Input
    upsert?: userUpsertWithoutRating_com1Input
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutRating_com1Input, userUpdateWithoutRating_com1Input>, userUncheckedUpdateWithoutRating_com1Input>
  }

  export type userUpdateOneRequiredWithoutRating_com2NestedInput = {
    create?: XOR<userCreateWithoutRating_com2Input, userUncheckedCreateWithoutRating_com2Input>
    connectOrCreate?: userCreateOrConnectWithoutRating_com2Input
    upsert?: userUpsertWithoutRating_com2Input
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutRating_com2Input, userUpdateWithoutRating_com2Input>, userUncheckedUpdateWithoutRating_com2Input>
  }

  export type jobUpdateOneRequiredWithoutRating_comNestedInput = {
    create?: XOR<jobCreateWithoutRating_comInput, jobUncheckedCreateWithoutRating_comInput>
    connectOrCreate?: jobCreateOrConnectWithoutRating_comInput
    upsert?: jobUpsertWithoutRating_comInput
    connect?: jobWhereUniqueInput
    update?: XOR<XOR<jobUpdateToOneWithWhereWithoutRating_comInput, jobUpdateWithoutRating_comInput>, jobUncheckedUpdateWithoutRating_comInput>
  }

  export type userCreateNestedOneWithoutContactInput = {
    create?: XOR<userCreateWithoutContactInput, userUncheckedCreateWithoutContactInput>
    connectOrCreate?: userCreateOrConnectWithoutContactInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutContactNestedInput = {
    create?: XOR<userCreateWithoutContactInput, userUncheckedCreateWithoutContactInput>
    connectOrCreate?: userCreateOrConnectWithoutContactInput
    upsert?: userUpsertWithoutContactInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutContactInput, userUpdateWithoutContactInput>, userUncheckedUpdateWithoutContactInput>
  }

  export type experienceCreateNestedManyWithoutCategoryInput = {
    create?: XOR<experienceCreateWithoutCategoryInput, experienceUncheckedCreateWithoutCategoryInput> | experienceCreateWithoutCategoryInput[] | experienceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: experienceCreateOrConnectWithoutCategoryInput | experienceCreateOrConnectWithoutCategoryInput[]
    createMany?: experienceCreateManyCategoryInputEnvelope
    connect?: experienceWhereUniqueInput | experienceWhereUniqueInput[]
  }

  export type job_expCreateNestedManyWithoutCategoryInput = {
    create?: XOR<job_expCreateWithoutCategoryInput, job_expUncheckedCreateWithoutCategoryInput> | job_expCreateWithoutCategoryInput[] | job_expUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: job_expCreateOrConnectWithoutCategoryInput | job_expCreateOrConnectWithoutCategoryInput[]
    createMany?: job_expCreateManyCategoryInputEnvelope
    connect?: job_expWhereUniqueInput | job_expWhereUniqueInput[]
  }

  export type experienceUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<experienceCreateWithoutCategoryInput, experienceUncheckedCreateWithoutCategoryInput> | experienceCreateWithoutCategoryInput[] | experienceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: experienceCreateOrConnectWithoutCategoryInput | experienceCreateOrConnectWithoutCategoryInput[]
    createMany?: experienceCreateManyCategoryInputEnvelope
    connect?: experienceWhereUniqueInput | experienceWhereUniqueInput[]
  }

  export type job_expUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<job_expCreateWithoutCategoryInput, job_expUncheckedCreateWithoutCategoryInput> | job_expCreateWithoutCategoryInput[] | job_expUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: job_expCreateOrConnectWithoutCategoryInput | job_expCreateOrConnectWithoutCategoryInput[]
    createMany?: job_expCreateManyCategoryInputEnvelope
    connect?: job_expWhereUniqueInput | job_expWhereUniqueInput[]
  }

  export type experienceUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<experienceCreateWithoutCategoryInput, experienceUncheckedCreateWithoutCategoryInput> | experienceCreateWithoutCategoryInput[] | experienceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: experienceCreateOrConnectWithoutCategoryInput | experienceCreateOrConnectWithoutCategoryInput[]
    upsert?: experienceUpsertWithWhereUniqueWithoutCategoryInput | experienceUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: experienceCreateManyCategoryInputEnvelope
    set?: experienceWhereUniqueInput | experienceWhereUniqueInput[]
    disconnect?: experienceWhereUniqueInput | experienceWhereUniqueInput[]
    delete?: experienceWhereUniqueInput | experienceWhereUniqueInput[]
    connect?: experienceWhereUniqueInput | experienceWhereUniqueInput[]
    update?: experienceUpdateWithWhereUniqueWithoutCategoryInput | experienceUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: experienceUpdateManyWithWhereWithoutCategoryInput | experienceUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: experienceScalarWhereInput | experienceScalarWhereInput[]
  }

  export type job_expUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<job_expCreateWithoutCategoryInput, job_expUncheckedCreateWithoutCategoryInput> | job_expCreateWithoutCategoryInput[] | job_expUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: job_expCreateOrConnectWithoutCategoryInput | job_expCreateOrConnectWithoutCategoryInput[]
    upsert?: job_expUpsertWithWhereUniqueWithoutCategoryInput | job_expUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: job_expCreateManyCategoryInputEnvelope
    set?: job_expWhereUniqueInput | job_expWhereUniqueInput[]
    disconnect?: job_expWhereUniqueInput | job_expWhereUniqueInput[]
    delete?: job_expWhereUniqueInput | job_expWhereUniqueInput[]
    connect?: job_expWhereUniqueInput | job_expWhereUniqueInput[]
    update?: job_expUpdateWithWhereUniqueWithoutCategoryInput | job_expUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: job_expUpdateManyWithWhereWithoutCategoryInput | job_expUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: job_expScalarWhereInput | job_expScalarWhereInput[]
  }

  export type experienceUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<experienceCreateWithoutCategoryInput, experienceUncheckedCreateWithoutCategoryInput> | experienceCreateWithoutCategoryInput[] | experienceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: experienceCreateOrConnectWithoutCategoryInput | experienceCreateOrConnectWithoutCategoryInput[]
    upsert?: experienceUpsertWithWhereUniqueWithoutCategoryInput | experienceUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: experienceCreateManyCategoryInputEnvelope
    set?: experienceWhereUniqueInput | experienceWhereUniqueInput[]
    disconnect?: experienceWhereUniqueInput | experienceWhereUniqueInput[]
    delete?: experienceWhereUniqueInput | experienceWhereUniqueInput[]
    connect?: experienceWhereUniqueInput | experienceWhereUniqueInput[]
    update?: experienceUpdateWithWhereUniqueWithoutCategoryInput | experienceUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: experienceUpdateManyWithWhereWithoutCategoryInput | experienceUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: experienceScalarWhereInput | experienceScalarWhereInput[]
  }

  export type job_expUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<job_expCreateWithoutCategoryInput, job_expUncheckedCreateWithoutCategoryInput> | job_expCreateWithoutCategoryInput[] | job_expUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: job_expCreateOrConnectWithoutCategoryInput | job_expCreateOrConnectWithoutCategoryInput[]
    upsert?: job_expUpsertWithWhereUniqueWithoutCategoryInput | job_expUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: job_expCreateManyCategoryInputEnvelope
    set?: job_expWhereUniqueInput | job_expWhereUniqueInput[]
    disconnect?: job_expWhereUniqueInput | job_expWhereUniqueInput[]
    delete?: job_expWhereUniqueInput | job_expWhereUniqueInput[]
    connect?: job_expWhereUniqueInput | job_expWhereUniqueInput[]
    update?: job_expUpdateWithWhereUniqueWithoutCategoryInput | job_expUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: job_expUpdateManyWithWhereWithoutCategoryInput | job_expUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: job_expScalarWhereInput | job_expScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutExperienceInput = {
    create?: XOR<userCreateWithoutExperienceInput, userUncheckedCreateWithoutExperienceInput>
    connectOrCreate?: userCreateOrConnectWithoutExperienceInput
    connect?: userWhereUniqueInput
  }

  export type categoryCreateNestedOneWithoutExperiencesInput = {
    create?: XOR<categoryCreateWithoutExperiencesInput, categoryUncheckedCreateWithoutExperiencesInput>
    connectOrCreate?: categoryCreateOrConnectWithoutExperiencesInput
    connect?: categoryWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutExperienceNestedInput = {
    create?: XOR<userCreateWithoutExperienceInput, userUncheckedCreateWithoutExperienceInput>
    connectOrCreate?: userCreateOrConnectWithoutExperienceInput
    upsert?: userUpsertWithoutExperienceInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutExperienceInput, userUpdateWithoutExperienceInput>, userUncheckedUpdateWithoutExperienceInput>
  }

  export type categoryUpdateOneRequiredWithoutExperiencesNestedInput = {
    create?: XOR<categoryCreateWithoutExperiencesInput, categoryUncheckedCreateWithoutExperiencesInput>
    connectOrCreate?: categoryCreateOrConnectWithoutExperiencesInput
    upsert?: categoryUpsertWithoutExperiencesInput
    connect?: categoryWhereUniqueInput
    update?: XOR<XOR<categoryUpdateToOneWithWhereWithoutExperiencesInput, categoryUpdateWithoutExperiencesInput>, categoryUncheckedUpdateWithoutExperiencesInput>
  }

  export type user_careerCreateNestedManyWithoutCareerInput = {
    create?: XOR<user_careerCreateWithoutCareerInput, user_careerUncheckedCreateWithoutCareerInput> | user_careerCreateWithoutCareerInput[] | user_careerUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: user_careerCreateOrConnectWithoutCareerInput | user_careerCreateOrConnectWithoutCareerInput[]
    createMany?: user_careerCreateManyCareerInputEnvelope
    connect?: user_careerWhereUniqueInput | user_careerWhereUniqueInput[]
  }

  export type user_careerUncheckedCreateNestedManyWithoutCareerInput = {
    create?: XOR<user_careerCreateWithoutCareerInput, user_careerUncheckedCreateWithoutCareerInput> | user_careerCreateWithoutCareerInput[] | user_careerUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: user_careerCreateOrConnectWithoutCareerInput | user_careerCreateOrConnectWithoutCareerInput[]
    createMany?: user_careerCreateManyCareerInputEnvelope
    connect?: user_careerWhereUniqueInput | user_careerWhereUniqueInput[]
  }

  export type user_careerUpdateManyWithoutCareerNestedInput = {
    create?: XOR<user_careerCreateWithoutCareerInput, user_careerUncheckedCreateWithoutCareerInput> | user_careerCreateWithoutCareerInput[] | user_careerUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: user_careerCreateOrConnectWithoutCareerInput | user_careerCreateOrConnectWithoutCareerInput[]
    upsert?: user_careerUpsertWithWhereUniqueWithoutCareerInput | user_careerUpsertWithWhereUniqueWithoutCareerInput[]
    createMany?: user_careerCreateManyCareerInputEnvelope
    set?: user_careerWhereUniqueInput | user_careerWhereUniqueInput[]
    disconnect?: user_careerWhereUniqueInput | user_careerWhereUniqueInput[]
    delete?: user_careerWhereUniqueInput | user_careerWhereUniqueInput[]
    connect?: user_careerWhereUniqueInput | user_careerWhereUniqueInput[]
    update?: user_careerUpdateWithWhereUniqueWithoutCareerInput | user_careerUpdateWithWhereUniqueWithoutCareerInput[]
    updateMany?: user_careerUpdateManyWithWhereWithoutCareerInput | user_careerUpdateManyWithWhereWithoutCareerInput[]
    deleteMany?: user_careerScalarWhereInput | user_careerScalarWhereInput[]
  }

  export type user_careerUncheckedUpdateManyWithoutCareerNestedInput = {
    create?: XOR<user_careerCreateWithoutCareerInput, user_careerUncheckedCreateWithoutCareerInput> | user_careerCreateWithoutCareerInput[] | user_careerUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: user_careerCreateOrConnectWithoutCareerInput | user_careerCreateOrConnectWithoutCareerInput[]
    upsert?: user_careerUpsertWithWhereUniqueWithoutCareerInput | user_careerUpsertWithWhereUniqueWithoutCareerInput[]
    createMany?: user_careerCreateManyCareerInputEnvelope
    set?: user_careerWhereUniqueInput | user_careerWhereUniqueInput[]
    disconnect?: user_careerWhereUniqueInput | user_careerWhereUniqueInput[]
    delete?: user_careerWhereUniqueInput | user_careerWhereUniqueInput[]
    connect?: user_careerWhereUniqueInput | user_careerWhereUniqueInput[]
    update?: user_careerUpdateWithWhereUniqueWithoutCareerInput | user_careerUpdateWithWhereUniqueWithoutCareerInput[]
    updateMany?: user_careerUpdateManyWithWhereWithoutCareerInput | user_careerUpdateManyWithWhereWithoutCareerInput[]
    deleteMany?: user_careerScalarWhereInput | user_careerScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutUser_careerInput = {
    create?: XOR<userCreateWithoutUser_careerInput, userUncheckedCreateWithoutUser_careerInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_careerInput
    connect?: userWhereUniqueInput
  }

  export type careerCreateNestedOneWithoutUser_careerInput = {
    create?: XOR<careerCreateWithoutUser_careerInput, careerUncheckedCreateWithoutUser_careerInput>
    connectOrCreate?: careerCreateOrConnectWithoutUser_careerInput
    connect?: careerWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutUser_careerNestedInput = {
    create?: XOR<userCreateWithoutUser_careerInput, userUncheckedCreateWithoutUser_careerInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_careerInput
    upsert?: userUpsertWithoutUser_careerInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUser_careerInput, userUpdateWithoutUser_careerInput>, userUncheckedUpdateWithoutUser_careerInput>
  }

  export type careerUpdateOneRequiredWithoutUser_careerNestedInput = {
    create?: XOR<careerCreateWithoutUser_careerInput, careerUncheckedCreateWithoutUser_careerInput>
    connectOrCreate?: careerCreateOrConnectWithoutUser_careerInput
    upsert?: careerUpsertWithoutUser_careerInput
    connect?: careerWhereUniqueInput
    update?: XOR<XOR<careerUpdateToOneWithWhereWithoutUser_careerInput, careerUpdateWithoutUser_careerInput>, careerUncheckedUpdateWithoutUser_careerInput>
  }

  export type historyCreateNestedManyWithoutJobInput = {
    create?: XOR<historyCreateWithoutJobInput, historyUncheckedCreateWithoutJobInput> | historyCreateWithoutJobInput[] | historyUncheckedCreateWithoutJobInput[]
    connectOrCreate?: historyCreateOrConnectWithoutJobInput | historyCreateOrConnectWithoutJobInput[]
    createMany?: historyCreateManyJobInputEnvelope
    connect?: historyWhereUniqueInput | historyWhereUniqueInput[]
  }

  export type job_expCreateNestedManyWithoutJobInput = {
    create?: XOR<job_expCreateWithoutJobInput, job_expUncheckedCreateWithoutJobInput> | job_expCreateWithoutJobInput[] | job_expUncheckedCreateWithoutJobInput[]
    connectOrCreate?: job_expCreateOrConnectWithoutJobInput | job_expCreateOrConnectWithoutJobInput[]
    createMany?: job_expCreateManyJobInputEnvelope
    connect?: job_expWhereUniqueInput | job_expWhereUniqueInput[]
  }

  export type rating_userCreateNestedManyWithoutJobInput = {
    create?: XOR<rating_userCreateWithoutJobInput, rating_userUncheckedCreateWithoutJobInput> | rating_userCreateWithoutJobInput[] | rating_userUncheckedCreateWithoutJobInput[]
    connectOrCreate?: rating_userCreateOrConnectWithoutJobInput | rating_userCreateOrConnectWithoutJobInput[]
    createMany?: rating_userCreateManyJobInputEnvelope
    connect?: rating_userWhereUniqueInput | rating_userWhereUniqueInput[]
  }

  export type rating_comCreateNestedManyWithoutJobInput = {
    create?: XOR<rating_comCreateWithoutJobInput, rating_comUncheckedCreateWithoutJobInput> | rating_comCreateWithoutJobInput[] | rating_comUncheckedCreateWithoutJobInput[]
    connectOrCreate?: rating_comCreateOrConnectWithoutJobInput | rating_comCreateOrConnectWithoutJobInput[]
    createMany?: rating_comCreateManyJobInputEnvelope
    connect?: rating_comWhereUniqueInput | rating_comWhereUniqueInput[]
  }

  export type bookmarkCreateNestedManyWithoutJobInput = {
    create?: XOR<bookmarkCreateWithoutJobInput, bookmarkUncheckedCreateWithoutJobInput> | bookmarkCreateWithoutJobInput[] | bookmarkUncheckedCreateWithoutJobInput[]
    connectOrCreate?: bookmarkCreateOrConnectWithoutJobInput | bookmarkCreateOrConnectWithoutJobInput[]
    createMany?: bookmarkCreateManyJobInputEnvelope
    connect?: bookmarkWhereUniqueInput | bookmarkWhereUniqueInput[]
  }

  export type postCreateNestedManyWithoutJobInput = {
    create?: XOR<postCreateWithoutJobInput, postUncheckedCreateWithoutJobInput> | postCreateWithoutJobInput[] | postUncheckedCreateWithoutJobInput[]
    connectOrCreate?: postCreateOrConnectWithoutJobInput | postCreateOrConnectWithoutJobInput[]
    createMany?: postCreateManyJobInputEnvelope
    connect?: postWhereUniqueInput | postWhereUniqueInput[]
  }

  export type historyUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<historyCreateWithoutJobInput, historyUncheckedCreateWithoutJobInput> | historyCreateWithoutJobInput[] | historyUncheckedCreateWithoutJobInput[]
    connectOrCreate?: historyCreateOrConnectWithoutJobInput | historyCreateOrConnectWithoutJobInput[]
    createMany?: historyCreateManyJobInputEnvelope
    connect?: historyWhereUniqueInput | historyWhereUniqueInput[]
  }

  export type job_expUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<job_expCreateWithoutJobInput, job_expUncheckedCreateWithoutJobInput> | job_expCreateWithoutJobInput[] | job_expUncheckedCreateWithoutJobInput[]
    connectOrCreate?: job_expCreateOrConnectWithoutJobInput | job_expCreateOrConnectWithoutJobInput[]
    createMany?: job_expCreateManyJobInputEnvelope
    connect?: job_expWhereUniqueInput | job_expWhereUniqueInput[]
  }

  export type rating_userUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<rating_userCreateWithoutJobInput, rating_userUncheckedCreateWithoutJobInput> | rating_userCreateWithoutJobInput[] | rating_userUncheckedCreateWithoutJobInput[]
    connectOrCreate?: rating_userCreateOrConnectWithoutJobInput | rating_userCreateOrConnectWithoutJobInput[]
    createMany?: rating_userCreateManyJobInputEnvelope
    connect?: rating_userWhereUniqueInput | rating_userWhereUniqueInput[]
  }

  export type rating_comUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<rating_comCreateWithoutJobInput, rating_comUncheckedCreateWithoutJobInput> | rating_comCreateWithoutJobInput[] | rating_comUncheckedCreateWithoutJobInput[]
    connectOrCreate?: rating_comCreateOrConnectWithoutJobInput | rating_comCreateOrConnectWithoutJobInput[]
    createMany?: rating_comCreateManyJobInputEnvelope
    connect?: rating_comWhereUniqueInput | rating_comWhereUniqueInput[]
  }

  export type bookmarkUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<bookmarkCreateWithoutJobInput, bookmarkUncheckedCreateWithoutJobInput> | bookmarkCreateWithoutJobInput[] | bookmarkUncheckedCreateWithoutJobInput[]
    connectOrCreate?: bookmarkCreateOrConnectWithoutJobInput | bookmarkCreateOrConnectWithoutJobInput[]
    createMany?: bookmarkCreateManyJobInputEnvelope
    connect?: bookmarkWhereUniqueInput | bookmarkWhereUniqueInput[]
  }

  export type postUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<postCreateWithoutJobInput, postUncheckedCreateWithoutJobInput> | postCreateWithoutJobInput[] | postUncheckedCreateWithoutJobInput[]
    connectOrCreate?: postCreateOrConnectWithoutJobInput | postCreateOrConnectWithoutJobInput[]
    createMany?: postCreateManyJobInputEnvelope
    connect?: postWhereUniqueInput | postWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type historyUpdateManyWithoutJobNestedInput = {
    create?: XOR<historyCreateWithoutJobInput, historyUncheckedCreateWithoutJobInput> | historyCreateWithoutJobInput[] | historyUncheckedCreateWithoutJobInput[]
    connectOrCreate?: historyCreateOrConnectWithoutJobInput | historyCreateOrConnectWithoutJobInput[]
    upsert?: historyUpsertWithWhereUniqueWithoutJobInput | historyUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: historyCreateManyJobInputEnvelope
    set?: historyWhereUniqueInput | historyWhereUniqueInput[]
    disconnect?: historyWhereUniqueInput | historyWhereUniqueInput[]
    delete?: historyWhereUniqueInput | historyWhereUniqueInput[]
    connect?: historyWhereUniqueInput | historyWhereUniqueInput[]
    update?: historyUpdateWithWhereUniqueWithoutJobInput | historyUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: historyUpdateManyWithWhereWithoutJobInput | historyUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: historyScalarWhereInput | historyScalarWhereInput[]
  }

  export type job_expUpdateManyWithoutJobNestedInput = {
    create?: XOR<job_expCreateWithoutJobInput, job_expUncheckedCreateWithoutJobInput> | job_expCreateWithoutJobInput[] | job_expUncheckedCreateWithoutJobInput[]
    connectOrCreate?: job_expCreateOrConnectWithoutJobInput | job_expCreateOrConnectWithoutJobInput[]
    upsert?: job_expUpsertWithWhereUniqueWithoutJobInput | job_expUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: job_expCreateManyJobInputEnvelope
    set?: job_expWhereUniqueInput | job_expWhereUniqueInput[]
    disconnect?: job_expWhereUniqueInput | job_expWhereUniqueInput[]
    delete?: job_expWhereUniqueInput | job_expWhereUniqueInput[]
    connect?: job_expWhereUniqueInput | job_expWhereUniqueInput[]
    update?: job_expUpdateWithWhereUniqueWithoutJobInput | job_expUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: job_expUpdateManyWithWhereWithoutJobInput | job_expUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: job_expScalarWhereInput | job_expScalarWhereInput[]
  }

  export type rating_userUpdateManyWithoutJobNestedInput = {
    create?: XOR<rating_userCreateWithoutJobInput, rating_userUncheckedCreateWithoutJobInput> | rating_userCreateWithoutJobInput[] | rating_userUncheckedCreateWithoutJobInput[]
    connectOrCreate?: rating_userCreateOrConnectWithoutJobInput | rating_userCreateOrConnectWithoutJobInput[]
    upsert?: rating_userUpsertWithWhereUniqueWithoutJobInput | rating_userUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: rating_userCreateManyJobInputEnvelope
    set?: rating_userWhereUniqueInput | rating_userWhereUniqueInput[]
    disconnect?: rating_userWhereUniqueInput | rating_userWhereUniqueInput[]
    delete?: rating_userWhereUniqueInput | rating_userWhereUniqueInput[]
    connect?: rating_userWhereUniqueInput | rating_userWhereUniqueInput[]
    update?: rating_userUpdateWithWhereUniqueWithoutJobInput | rating_userUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: rating_userUpdateManyWithWhereWithoutJobInput | rating_userUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: rating_userScalarWhereInput | rating_userScalarWhereInput[]
  }

  export type rating_comUpdateManyWithoutJobNestedInput = {
    create?: XOR<rating_comCreateWithoutJobInput, rating_comUncheckedCreateWithoutJobInput> | rating_comCreateWithoutJobInput[] | rating_comUncheckedCreateWithoutJobInput[]
    connectOrCreate?: rating_comCreateOrConnectWithoutJobInput | rating_comCreateOrConnectWithoutJobInput[]
    upsert?: rating_comUpsertWithWhereUniqueWithoutJobInput | rating_comUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: rating_comCreateManyJobInputEnvelope
    set?: rating_comWhereUniqueInput | rating_comWhereUniqueInput[]
    disconnect?: rating_comWhereUniqueInput | rating_comWhereUniqueInput[]
    delete?: rating_comWhereUniqueInput | rating_comWhereUniqueInput[]
    connect?: rating_comWhereUniqueInput | rating_comWhereUniqueInput[]
    update?: rating_comUpdateWithWhereUniqueWithoutJobInput | rating_comUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: rating_comUpdateManyWithWhereWithoutJobInput | rating_comUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: rating_comScalarWhereInput | rating_comScalarWhereInput[]
  }

  export type bookmarkUpdateManyWithoutJobNestedInput = {
    create?: XOR<bookmarkCreateWithoutJobInput, bookmarkUncheckedCreateWithoutJobInput> | bookmarkCreateWithoutJobInput[] | bookmarkUncheckedCreateWithoutJobInput[]
    connectOrCreate?: bookmarkCreateOrConnectWithoutJobInput | bookmarkCreateOrConnectWithoutJobInput[]
    upsert?: bookmarkUpsertWithWhereUniqueWithoutJobInput | bookmarkUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: bookmarkCreateManyJobInputEnvelope
    set?: bookmarkWhereUniqueInput | bookmarkWhereUniqueInput[]
    disconnect?: bookmarkWhereUniqueInput | bookmarkWhereUniqueInput[]
    delete?: bookmarkWhereUniqueInput | bookmarkWhereUniqueInput[]
    connect?: bookmarkWhereUniqueInput | bookmarkWhereUniqueInput[]
    update?: bookmarkUpdateWithWhereUniqueWithoutJobInput | bookmarkUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: bookmarkUpdateManyWithWhereWithoutJobInput | bookmarkUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: bookmarkScalarWhereInput | bookmarkScalarWhereInput[]
  }

  export type postUpdateManyWithoutJobNestedInput = {
    create?: XOR<postCreateWithoutJobInput, postUncheckedCreateWithoutJobInput> | postCreateWithoutJobInput[] | postUncheckedCreateWithoutJobInput[]
    connectOrCreate?: postCreateOrConnectWithoutJobInput | postCreateOrConnectWithoutJobInput[]
    upsert?: postUpsertWithWhereUniqueWithoutJobInput | postUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: postCreateManyJobInputEnvelope
    set?: postWhereUniqueInput | postWhereUniqueInput[]
    disconnect?: postWhereUniqueInput | postWhereUniqueInput[]
    delete?: postWhereUniqueInput | postWhereUniqueInput[]
    connect?: postWhereUniqueInput | postWhereUniqueInput[]
    update?: postUpdateWithWhereUniqueWithoutJobInput | postUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: postUpdateManyWithWhereWithoutJobInput | postUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: postScalarWhereInput | postScalarWhereInput[]
  }

  export type historyUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<historyCreateWithoutJobInput, historyUncheckedCreateWithoutJobInput> | historyCreateWithoutJobInput[] | historyUncheckedCreateWithoutJobInput[]
    connectOrCreate?: historyCreateOrConnectWithoutJobInput | historyCreateOrConnectWithoutJobInput[]
    upsert?: historyUpsertWithWhereUniqueWithoutJobInput | historyUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: historyCreateManyJobInputEnvelope
    set?: historyWhereUniqueInput | historyWhereUniqueInput[]
    disconnect?: historyWhereUniqueInput | historyWhereUniqueInput[]
    delete?: historyWhereUniqueInput | historyWhereUniqueInput[]
    connect?: historyWhereUniqueInput | historyWhereUniqueInput[]
    update?: historyUpdateWithWhereUniqueWithoutJobInput | historyUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: historyUpdateManyWithWhereWithoutJobInput | historyUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: historyScalarWhereInput | historyScalarWhereInput[]
  }

  export type job_expUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<job_expCreateWithoutJobInput, job_expUncheckedCreateWithoutJobInput> | job_expCreateWithoutJobInput[] | job_expUncheckedCreateWithoutJobInput[]
    connectOrCreate?: job_expCreateOrConnectWithoutJobInput | job_expCreateOrConnectWithoutJobInput[]
    upsert?: job_expUpsertWithWhereUniqueWithoutJobInput | job_expUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: job_expCreateManyJobInputEnvelope
    set?: job_expWhereUniqueInput | job_expWhereUniqueInput[]
    disconnect?: job_expWhereUniqueInput | job_expWhereUniqueInput[]
    delete?: job_expWhereUniqueInput | job_expWhereUniqueInput[]
    connect?: job_expWhereUniqueInput | job_expWhereUniqueInput[]
    update?: job_expUpdateWithWhereUniqueWithoutJobInput | job_expUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: job_expUpdateManyWithWhereWithoutJobInput | job_expUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: job_expScalarWhereInput | job_expScalarWhereInput[]
  }

  export type rating_userUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<rating_userCreateWithoutJobInput, rating_userUncheckedCreateWithoutJobInput> | rating_userCreateWithoutJobInput[] | rating_userUncheckedCreateWithoutJobInput[]
    connectOrCreate?: rating_userCreateOrConnectWithoutJobInput | rating_userCreateOrConnectWithoutJobInput[]
    upsert?: rating_userUpsertWithWhereUniqueWithoutJobInput | rating_userUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: rating_userCreateManyJobInputEnvelope
    set?: rating_userWhereUniqueInput | rating_userWhereUniqueInput[]
    disconnect?: rating_userWhereUniqueInput | rating_userWhereUniqueInput[]
    delete?: rating_userWhereUniqueInput | rating_userWhereUniqueInput[]
    connect?: rating_userWhereUniqueInput | rating_userWhereUniqueInput[]
    update?: rating_userUpdateWithWhereUniqueWithoutJobInput | rating_userUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: rating_userUpdateManyWithWhereWithoutJobInput | rating_userUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: rating_userScalarWhereInput | rating_userScalarWhereInput[]
  }

  export type rating_comUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<rating_comCreateWithoutJobInput, rating_comUncheckedCreateWithoutJobInput> | rating_comCreateWithoutJobInput[] | rating_comUncheckedCreateWithoutJobInput[]
    connectOrCreate?: rating_comCreateOrConnectWithoutJobInput | rating_comCreateOrConnectWithoutJobInput[]
    upsert?: rating_comUpsertWithWhereUniqueWithoutJobInput | rating_comUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: rating_comCreateManyJobInputEnvelope
    set?: rating_comWhereUniqueInput | rating_comWhereUniqueInput[]
    disconnect?: rating_comWhereUniqueInput | rating_comWhereUniqueInput[]
    delete?: rating_comWhereUniqueInput | rating_comWhereUniqueInput[]
    connect?: rating_comWhereUniqueInput | rating_comWhereUniqueInput[]
    update?: rating_comUpdateWithWhereUniqueWithoutJobInput | rating_comUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: rating_comUpdateManyWithWhereWithoutJobInput | rating_comUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: rating_comScalarWhereInput | rating_comScalarWhereInput[]
  }

  export type bookmarkUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<bookmarkCreateWithoutJobInput, bookmarkUncheckedCreateWithoutJobInput> | bookmarkCreateWithoutJobInput[] | bookmarkUncheckedCreateWithoutJobInput[]
    connectOrCreate?: bookmarkCreateOrConnectWithoutJobInput | bookmarkCreateOrConnectWithoutJobInput[]
    upsert?: bookmarkUpsertWithWhereUniqueWithoutJobInput | bookmarkUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: bookmarkCreateManyJobInputEnvelope
    set?: bookmarkWhereUniqueInput | bookmarkWhereUniqueInput[]
    disconnect?: bookmarkWhereUniqueInput | bookmarkWhereUniqueInput[]
    delete?: bookmarkWhereUniqueInput | bookmarkWhereUniqueInput[]
    connect?: bookmarkWhereUniqueInput | bookmarkWhereUniqueInput[]
    update?: bookmarkUpdateWithWhereUniqueWithoutJobInput | bookmarkUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: bookmarkUpdateManyWithWhereWithoutJobInput | bookmarkUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: bookmarkScalarWhereInput | bookmarkScalarWhereInput[]
  }

  export type postUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<postCreateWithoutJobInput, postUncheckedCreateWithoutJobInput> | postCreateWithoutJobInput[] | postUncheckedCreateWithoutJobInput[]
    connectOrCreate?: postCreateOrConnectWithoutJobInput | postCreateOrConnectWithoutJobInput[]
    upsert?: postUpsertWithWhereUniqueWithoutJobInput | postUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: postCreateManyJobInputEnvelope
    set?: postWhereUniqueInput | postWhereUniqueInput[]
    disconnect?: postWhereUniqueInput | postWhereUniqueInput[]
    delete?: postWhereUniqueInput | postWhereUniqueInput[]
    connect?: postWhereUniqueInput | postWhereUniqueInput[]
    update?: postUpdateWithWhereUniqueWithoutJobInput | postUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: postUpdateManyWithWhereWithoutJobInput | postUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: postScalarWhereInput | postScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutHistoryInput = {
    create?: XOR<userCreateWithoutHistoryInput, userUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: userCreateOrConnectWithoutHistoryInput
    connect?: userWhereUniqueInput
  }

  export type jobCreateNestedOneWithoutHistoryInput = {
    create?: XOR<jobCreateWithoutHistoryInput, jobUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: jobCreateOrConnectWithoutHistoryInput
    connect?: jobWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<userCreateWithoutHistoryInput, userUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: userCreateOrConnectWithoutHistoryInput
    upsert?: userUpsertWithoutHistoryInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutHistoryInput, userUpdateWithoutHistoryInput>, userUncheckedUpdateWithoutHistoryInput>
  }

  export type jobUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<jobCreateWithoutHistoryInput, jobUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: jobCreateOrConnectWithoutHistoryInput
    upsert?: jobUpsertWithoutHistoryInput
    connect?: jobWhereUniqueInput
    update?: XOR<XOR<jobUpdateToOneWithWhereWithoutHistoryInput, jobUpdateWithoutHistoryInput>, jobUncheckedUpdateWithoutHistoryInput>
  }

  export type jobCreateNestedOneWithoutJob_expInput = {
    create?: XOR<jobCreateWithoutJob_expInput, jobUncheckedCreateWithoutJob_expInput>
    connectOrCreate?: jobCreateOrConnectWithoutJob_expInput
    connect?: jobWhereUniqueInput
  }

  export type categoryCreateNestedOneWithoutJob_expInput = {
    create?: XOR<categoryCreateWithoutJob_expInput, categoryUncheckedCreateWithoutJob_expInput>
    connectOrCreate?: categoryCreateOrConnectWithoutJob_expInput
    connect?: categoryWhereUniqueInput
  }

  export type jobUpdateOneRequiredWithoutJob_expNestedInput = {
    create?: XOR<jobCreateWithoutJob_expInput, jobUncheckedCreateWithoutJob_expInput>
    connectOrCreate?: jobCreateOrConnectWithoutJob_expInput
    upsert?: jobUpsertWithoutJob_expInput
    connect?: jobWhereUniqueInput
    update?: XOR<XOR<jobUpdateToOneWithWhereWithoutJob_expInput, jobUpdateWithoutJob_expInput>, jobUncheckedUpdateWithoutJob_expInput>
  }

  export type categoryUpdateOneRequiredWithoutJob_expNestedInput = {
    create?: XOR<categoryCreateWithoutJob_expInput, categoryUncheckedCreateWithoutJob_expInput>
    connectOrCreate?: categoryCreateOrConnectWithoutJob_expInput
    upsert?: categoryUpsertWithoutJob_expInput
    connect?: categoryWhereUniqueInput
    update?: XOR<XOR<categoryUpdateToOneWithWhereWithoutJob_expInput, categoryUpdateWithoutJob_expInput>, categoryUncheckedUpdateWithoutJob_expInput>
  }

  export type userCreateNestedOneWithoutBookmarkInput = {
    create?: XOR<userCreateWithoutBookmarkInput, userUncheckedCreateWithoutBookmarkInput>
    connectOrCreate?: userCreateOrConnectWithoutBookmarkInput
    connect?: userWhereUniqueInput
  }

  export type jobCreateNestedOneWithoutBookmarkInput = {
    create?: XOR<jobCreateWithoutBookmarkInput, jobUncheckedCreateWithoutBookmarkInput>
    connectOrCreate?: jobCreateOrConnectWithoutBookmarkInput
    connect?: jobWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutBookmarkNestedInput = {
    create?: XOR<userCreateWithoutBookmarkInput, userUncheckedCreateWithoutBookmarkInput>
    connectOrCreate?: userCreateOrConnectWithoutBookmarkInput
    upsert?: userUpsertWithoutBookmarkInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutBookmarkInput, userUpdateWithoutBookmarkInput>, userUncheckedUpdateWithoutBookmarkInput>
  }

  export type jobUpdateOneRequiredWithoutBookmarkNestedInput = {
    create?: XOR<jobCreateWithoutBookmarkInput, jobUncheckedCreateWithoutBookmarkInput>
    connectOrCreate?: jobCreateOrConnectWithoutBookmarkInput
    upsert?: jobUpsertWithoutBookmarkInput
    connect?: jobWhereUniqueInput
    update?: XOR<XOR<jobUpdateToOneWithWhereWithoutBookmarkInput, jobUpdateWithoutBookmarkInput>, jobUncheckedUpdateWithoutBookmarkInput>
  }

  export type userCreateNestedOneWithoutPostInput = {
    create?: XOR<userCreateWithoutPostInput, userUncheckedCreateWithoutPostInput>
    connectOrCreate?: userCreateOrConnectWithoutPostInput
    connect?: userWhereUniqueInput
  }

  export type jobCreateNestedOneWithoutPostInput = {
    create?: XOR<jobCreateWithoutPostInput, jobUncheckedCreateWithoutPostInput>
    connectOrCreate?: jobCreateOrConnectWithoutPostInput
    connect?: jobWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutPostNestedInput = {
    create?: XOR<userCreateWithoutPostInput, userUncheckedCreateWithoutPostInput>
    connectOrCreate?: userCreateOrConnectWithoutPostInput
    upsert?: userUpsertWithoutPostInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutPostInput, userUpdateWithoutPostInput>, userUncheckedUpdateWithoutPostInput>
  }

  export type jobUpdateOneRequiredWithoutPostNestedInput = {
    create?: XOR<jobCreateWithoutPostInput, jobUncheckedCreateWithoutPostInput>
    connectOrCreate?: jobCreateOrConnectWithoutPostInput
    upsert?: jobUpsertWithoutPostInput
    connect?: jobWhereUniqueInput
    update?: XOR<XOR<jobUpdateToOneWithWhereWithoutPostInput, jobUpdateWithoutPostInput>, jobUncheckedUpdateWithoutPostInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type postCreateWithoutUserInput = {
    job: jobCreateNestedOneWithoutPostInput
  }

  export type postUncheckedCreateWithoutUserInput = {
    job_id: number
  }

  export type postCreateOrConnectWithoutUserInput = {
    where: postWhereUniqueInput
    create: XOR<postCreateWithoutUserInput, postUncheckedCreateWithoutUserInput>
  }

  export type postCreateManyUserInputEnvelope = {
    data: postCreateManyUserInput | postCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type rating_userCreateWithoutUser1Input = {
    friendly_rating?: number
    efficiency_rating?: number
    accuracy_rating?: number
    user2: userCreateNestedOneWithoutRating_users2Input
    job: jobCreateNestedOneWithoutRating_userInput
  }

  export type rating_userUncheckedCreateWithoutUser1Input = {
    rating_id?: number
    user_id2: number
    job_id: number
    friendly_rating?: number
    efficiency_rating?: number
    accuracy_rating?: number
  }

  export type rating_userCreateOrConnectWithoutUser1Input = {
    where: rating_userWhereUniqueInput
    create: XOR<rating_userCreateWithoutUser1Input, rating_userUncheckedCreateWithoutUser1Input>
  }

  export type rating_userCreateManyUser1InputEnvelope = {
    data: rating_userCreateManyUser1Input | rating_userCreateManyUser1Input[]
    skipDuplicates?: boolean
  }

  export type rating_userCreateWithoutUser2Input = {
    friendly_rating?: number
    efficiency_rating?: number
    accuracy_rating?: number
    user1: userCreateNestedOneWithoutRating_user1Input
    job: jobCreateNestedOneWithoutRating_userInput
  }

  export type rating_userUncheckedCreateWithoutUser2Input = {
    rating_id?: number
    user_id1: number
    job_id: number
    friendly_rating?: number
    efficiency_rating?: number
    accuracy_rating?: number
  }

  export type rating_userCreateOrConnectWithoutUser2Input = {
    where: rating_userWhereUniqueInput
    create: XOR<rating_userCreateWithoutUser2Input, rating_userUncheckedCreateWithoutUser2Input>
  }

  export type rating_userCreateManyUser2InputEnvelope = {
    data: rating_userCreateManyUser2Input | rating_userCreateManyUser2Input[]
    skipDuplicates?: boolean
  }

  export type rating_comCreateWithoutUser1Input = {
    rating?: number
    user2: userCreateNestedOneWithoutRating_com2Input
    job: jobCreateNestedOneWithoutRating_comInput
  }

  export type rating_comUncheckedCreateWithoutUser1Input = {
    rating_id?: number
    user_id2: number
    job_id: number
    rating?: number
  }

  export type rating_comCreateOrConnectWithoutUser1Input = {
    where: rating_comWhereUniqueInput
    create: XOR<rating_comCreateWithoutUser1Input, rating_comUncheckedCreateWithoutUser1Input>
  }

  export type rating_comCreateManyUser1InputEnvelope = {
    data: rating_comCreateManyUser1Input | rating_comCreateManyUser1Input[]
    skipDuplicates?: boolean
  }

  export type rating_comCreateWithoutUser2Input = {
    rating?: number
    user1: userCreateNestedOneWithoutRating_com1Input
    job: jobCreateNestedOneWithoutRating_comInput
  }

  export type rating_comUncheckedCreateWithoutUser2Input = {
    rating_id?: number
    user_id1: number
    job_id: number
    rating?: number
  }

  export type rating_comCreateOrConnectWithoutUser2Input = {
    where: rating_comWhereUniqueInput
    create: XOR<rating_comCreateWithoutUser2Input, rating_comUncheckedCreateWithoutUser2Input>
  }

  export type rating_comCreateManyUser2InputEnvelope = {
    data: rating_comCreateManyUser2Input | rating_comCreateManyUser2Input[]
    skipDuplicates?: boolean
  }

  export type contactCreateWithoutUserInput = {
    facebook: string
    instagram: string
    linkedin: string
  }

  export type contactUncheckedCreateWithoutUserInput = {
    contact_id?: number
    facebook: string
    instagram: string
    linkedin: string
  }

  export type contactCreateOrConnectWithoutUserInput = {
    where: contactWhereUniqueInput
    create: XOR<contactCreateWithoutUserInput, contactUncheckedCreateWithoutUserInput>
  }

  export type contactCreateManyUserInputEnvelope = {
    data: contactCreateManyUserInput | contactCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type experienceCreateWithoutUserInput = {
    category: categoryCreateNestedOneWithoutExperiencesInput
  }

  export type experienceUncheckedCreateWithoutUserInput = {
    category_id: number
  }

  export type experienceCreateOrConnectWithoutUserInput = {
    where: experienceWhereUniqueInput
    create: XOR<experienceCreateWithoutUserInput, experienceUncheckedCreateWithoutUserInput>
  }

  export type experienceCreateManyUserInputEnvelope = {
    data: experienceCreateManyUserInput | experienceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type user_careerCreateWithoutUserInput = {
    career: careerCreateNestedOneWithoutUser_careerInput
  }

  export type user_careerUncheckedCreateWithoutUserInput = {
    career_id: number
  }

  export type user_careerCreateOrConnectWithoutUserInput = {
    where: user_careerWhereUniqueInput
    create: XOR<user_careerCreateWithoutUserInput, user_careerUncheckedCreateWithoutUserInput>
  }

  export type user_careerCreateManyUserInputEnvelope = {
    data: user_careerCreateManyUserInput | user_careerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type historyCreateWithoutUserInput = {
    status?: string
    job: jobCreateNestedOneWithoutHistoryInput
  }

  export type historyUncheckedCreateWithoutUserInput = {
    job_id: number
    status?: string
  }

  export type historyCreateOrConnectWithoutUserInput = {
    where: historyWhereUniqueInput
    create: XOR<historyCreateWithoutUserInput, historyUncheckedCreateWithoutUserInput>
  }

  export type historyCreateManyUserInputEnvelope = {
    data: historyCreateManyUserInput | historyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type bookmarkCreateWithoutUserInput = {
    job: jobCreateNestedOneWithoutBookmarkInput
  }

  export type bookmarkUncheckedCreateWithoutUserInput = {
    book_id?: number
    job_id: number
  }

  export type bookmarkCreateOrConnectWithoutUserInput = {
    where: bookmarkWhereUniqueInput
    create: XOR<bookmarkCreateWithoutUserInput, bookmarkUncheckedCreateWithoutUserInput>
  }

  export type bookmarkCreateManyUserInputEnvelope = {
    data: bookmarkCreateManyUserInput | bookmarkCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type postUpsertWithWhereUniqueWithoutUserInput = {
    where: postWhereUniqueInput
    update: XOR<postUpdateWithoutUserInput, postUncheckedUpdateWithoutUserInput>
    create: XOR<postCreateWithoutUserInput, postUncheckedCreateWithoutUserInput>
  }

  export type postUpdateWithWhereUniqueWithoutUserInput = {
    where: postWhereUniqueInput
    data: XOR<postUpdateWithoutUserInput, postUncheckedUpdateWithoutUserInput>
  }

  export type postUpdateManyWithWhereWithoutUserInput = {
    where: postScalarWhereInput
    data: XOR<postUpdateManyMutationInput, postUncheckedUpdateManyWithoutUserInput>
  }

  export type postScalarWhereInput = {
    AND?: postScalarWhereInput | postScalarWhereInput[]
    OR?: postScalarWhereInput[]
    NOT?: postScalarWhereInput | postScalarWhereInput[]
    user_id?: IntFilter<"post"> | number
    job_id?: IntFilter<"post"> | number
  }

  export type rating_userUpsertWithWhereUniqueWithoutUser1Input = {
    where: rating_userWhereUniqueInput
    update: XOR<rating_userUpdateWithoutUser1Input, rating_userUncheckedUpdateWithoutUser1Input>
    create: XOR<rating_userCreateWithoutUser1Input, rating_userUncheckedCreateWithoutUser1Input>
  }

  export type rating_userUpdateWithWhereUniqueWithoutUser1Input = {
    where: rating_userWhereUniqueInput
    data: XOR<rating_userUpdateWithoutUser1Input, rating_userUncheckedUpdateWithoutUser1Input>
  }

  export type rating_userUpdateManyWithWhereWithoutUser1Input = {
    where: rating_userScalarWhereInput
    data: XOR<rating_userUpdateManyMutationInput, rating_userUncheckedUpdateManyWithoutUser1Input>
  }

  export type rating_userScalarWhereInput = {
    AND?: rating_userScalarWhereInput | rating_userScalarWhereInput[]
    OR?: rating_userScalarWhereInput[]
    NOT?: rating_userScalarWhereInput | rating_userScalarWhereInput[]
    rating_id?: IntFilter<"rating_user"> | number
    user_id1?: IntFilter<"rating_user"> | number
    user_id2?: IntFilter<"rating_user"> | number
    job_id?: IntFilter<"rating_user"> | number
    friendly_rating?: FloatFilter<"rating_user"> | number
    efficiency_rating?: FloatFilter<"rating_user"> | number
    accuracy_rating?: FloatFilter<"rating_user"> | number
  }

  export type rating_userUpsertWithWhereUniqueWithoutUser2Input = {
    where: rating_userWhereUniqueInput
    update: XOR<rating_userUpdateWithoutUser2Input, rating_userUncheckedUpdateWithoutUser2Input>
    create: XOR<rating_userCreateWithoutUser2Input, rating_userUncheckedCreateWithoutUser2Input>
  }

  export type rating_userUpdateWithWhereUniqueWithoutUser2Input = {
    where: rating_userWhereUniqueInput
    data: XOR<rating_userUpdateWithoutUser2Input, rating_userUncheckedUpdateWithoutUser2Input>
  }

  export type rating_userUpdateManyWithWhereWithoutUser2Input = {
    where: rating_userScalarWhereInput
    data: XOR<rating_userUpdateManyMutationInput, rating_userUncheckedUpdateManyWithoutUser2Input>
  }

  export type rating_comUpsertWithWhereUniqueWithoutUser1Input = {
    where: rating_comWhereUniqueInput
    update: XOR<rating_comUpdateWithoutUser1Input, rating_comUncheckedUpdateWithoutUser1Input>
    create: XOR<rating_comCreateWithoutUser1Input, rating_comUncheckedCreateWithoutUser1Input>
  }

  export type rating_comUpdateWithWhereUniqueWithoutUser1Input = {
    where: rating_comWhereUniqueInput
    data: XOR<rating_comUpdateWithoutUser1Input, rating_comUncheckedUpdateWithoutUser1Input>
  }

  export type rating_comUpdateManyWithWhereWithoutUser1Input = {
    where: rating_comScalarWhereInput
    data: XOR<rating_comUpdateManyMutationInput, rating_comUncheckedUpdateManyWithoutUser1Input>
  }

  export type rating_comScalarWhereInput = {
    AND?: rating_comScalarWhereInput | rating_comScalarWhereInput[]
    OR?: rating_comScalarWhereInput[]
    NOT?: rating_comScalarWhereInput | rating_comScalarWhereInput[]
    rating_id?: IntFilter<"rating_com"> | number
    user_id1?: IntFilter<"rating_com"> | number
    user_id2?: IntFilter<"rating_com"> | number
    job_id?: IntFilter<"rating_com"> | number
    rating?: FloatFilter<"rating_com"> | number
  }

  export type rating_comUpsertWithWhereUniqueWithoutUser2Input = {
    where: rating_comWhereUniqueInput
    update: XOR<rating_comUpdateWithoutUser2Input, rating_comUncheckedUpdateWithoutUser2Input>
    create: XOR<rating_comCreateWithoutUser2Input, rating_comUncheckedCreateWithoutUser2Input>
  }

  export type rating_comUpdateWithWhereUniqueWithoutUser2Input = {
    where: rating_comWhereUniqueInput
    data: XOR<rating_comUpdateWithoutUser2Input, rating_comUncheckedUpdateWithoutUser2Input>
  }

  export type rating_comUpdateManyWithWhereWithoutUser2Input = {
    where: rating_comScalarWhereInput
    data: XOR<rating_comUpdateManyMutationInput, rating_comUncheckedUpdateManyWithoutUser2Input>
  }

  export type contactUpsertWithWhereUniqueWithoutUserInput = {
    where: contactWhereUniqueInput
    update: XOR<contactUpdateWithoutUserInput, contactUncheckedUpdateWithoutUserInput>
    create: XOR<contactCreateWithoutUserInput, contactUncheckedCreateWithoutUserInput>
  }

  export type contactUpdateWithWhereUniqueWithoutUserInput = {
    where: contactWhereUniqueInput
    data: XOR<contactUpdateWithoutUserInput, contactUncheckedUpdateWithoutUserInput>
  }

  export type contactUpdateManyWithWhereWithoutUserInput = {
    where: contactScalarWhereInput
    data: XOR<contactUpdateManyMutationInput, contactUncheckedUpdateManyWithoutUserInput>
  }

  export type contactScalarWhereInput = {
    AND?: contactScalarWhereInput | contactScalarWhereInput[]
    OR?: contactScalarWhereInput[]
    NOT?: contactScalarWhereInput | contactScalarWhereInput[]
    contact_id?: IntFilter<"contact"> | number
    user_id?: IntFilter<"contact"> | number
    facebook?: StringFilter<"contact"> | string
    instagram?: StringFilter<"contact"> | string
    linkedin?: StringFilter<"contact"> | string
  }

  export type experienceUpsertWithWhereUniqueWithoutUserInput = {
    where: experienceWhereUniqueInput
    update: XOR<experienceUpdateWithoutUserInput, experienceUncheckedUpdateWithoutUserInput>
    create: XOR<experienceCreateWithoutUserInput, experienceUncheckedCreateWithoutUserInput>
  }

  export type experienceUpdateWithWhereUniqueWithoutUserInput = {
    where: experienceWhereUniqueInput
    data: XOR<experienceUpdateWithoutUserInput, experienceUncheckedUpdateWithoutUserInput>
  }

  export type experienceUpdateManyWithWhereWithoutUserInput = {
    where: experienceScalarWhereInput
    data: XOR<experienceUpdateManyMutationInput, experienceUncheckedUpdateManyWithoutUserInput>
  }

  export type experienceScalarWhereInput = {
    AND?: experienceScalarWhereInput | experienceScalarWhereInput[]
    OR?: experienceScalarWhereInput[]
    NOT?: experienceScalarWhereInput | experienceScalarWhereInput[]
    user_id?: IntFilter<"experience"> | number
    category_id?: IntFilter<"experience"> | number
  }

  export type user_careerUpsertWithWhereUniqueWithoutUserInput = {
    where: user_careerWhereUniqueInput
    update: XOR<user_careerUpdateWithoutUserInput, user_careerUncheckedUpdateWithoutUserInput>
    create: XOR<user_careerCreateWithoutUserInput, user_careerUncheckedCreateWithoutUserInput>
  }

  export type user_careerUpdateWithWhereUniqueWithoutUserInput = {
    where: user_careerWhereUniqueInput
    data: XOR<user_careerUpdateWithoutUserInput, user_careerUncheckedUpdateWithoutUserInput>
  }

  export type user_careerUpdateManyWithWhereWithoutUserInput = {
    where: user_careerScalarWhereInput
    data: XOR<user_careerUpdateManyMutationInput, user_careerUncheckedUpdateManyWithoutUserInput>
  }

  export type user_careerScalarWhereInput = {
    AND?: user_careerScalarWhereInput | user_careerScalarWhereInput[]
    OR?: user_careerScalarWhereInput[]
    NOT?: user_careerScalarWhereInput | user_careerScalarWhereInput[]
    user_id?: IntFilter<"user_career"> | number
    career_id?: IntFilter<"user_career"> | number
  }

  export type historyUpsertWithWhereUniqueWithoutUserInput = {
    where: historyWhereUniqueInput
    update: XOR<historyUpdateWithoutUserInput, historyUncheckedUpdateWithoutUserInput>
    create: XOR<historyCreateWithoutUserInput, historyUncheckedCreateWithoutUserInput>
  }

  export type historyUpdateWithWhereUniqueWithoutUserInput = {
    where: historyWhereUniqueInput
    data: XOR<historyUpdateWithoutUserInput, historyUncheckedUpdateWithoutUserInput>
  }

  export type historyUpdateManyWithWhereWithoutUserInput = {
    where: historyScalarWhereInput
    data: XOR<historyUpdateManyMutationInput, historyUncheckedUpdateManyWithoutUserInput>
  }

  export type historyScalarWhereInput = {
    AND?: historyScalarWhereInput | historyScalarWhereInput[]
    OR?: historyScalarWhereInput[]
    NOT?: historyScalarWhereInput | historyScalarWhereInput[]
    user_id?: IntFilter<"history"> | number
    job_id?: IntFilter<"history"> | number
    status?: StringFilter<"history"> | string
  }

  export type bookmarkUpsertWithWhereUniqueWithoutUserInput = {
    where: bookmarkWhereUniqueInput
    update: XOR<bookmarkUpdateWithoutUserInput, bookmarkUncheckedUpdateWithoutUserInput>
    create: XOR<bookmarkCreateWithoutUserInput, bookmarkUncheckedCreateWithoutUserInput>
  }

  export type bookmarkUpdateWithWhereUniqueWithoutUserInput = {
    where: bookmarkWhereUniqueInput
    data: XOR<bookmarkUpdateWithoutUserInput, bookmarkUncheckedUpdateWithoutUserInput>
  }

  export type bookmarkUpdateManyWithWhereWithoutUserInput = {
    where: bookmarkScalarWhereInput
    data: XOR<bookmarkUpdateManyMutationInput, bookmarkUncheckedUpdateManyWithoutUserInput>
  }

  export type bookmarkScalarWhereInput = {
    AND?: bookmarkScalarWhereInput | bookmarkScalarWhereInput[]
    OR?: bookmarkScalarWhereInput[]
    NOT?: bookmarkScalarWhereInput | bookmarkScalarWhereInput[]
    book_id?: IntFilter<"bookmark"> | number
    user_id?: IntFilter<"bookmark"> | number
    job_id?: IntFilter<"bookmark"> | number
  }

  export type userCreateWithoutRating_user1Input = {
    first_name: string
    last_name: string
    username: string
    image?: string | null
    phone_number: string
    id_card: string
    email: string
    password: string
    role: string
    post?: postCreateNestedManyWithoutUserInput
    rating_users2?: rating_userCreateNestedManyWithoutUser2Input
    rating_com1?: rating_comCreateNestedManyWithoutUser1Input
    rating_com2?: rating_comCreateNestedManyWithoutUser2Input
    contact?: contactCreateNestedManyWithoutUserInput
    experience?: experienceCreateNestedManyWithoutUserInput
    user_career?: user_careerCreateNestedManyWithoutUserInput
    history?: historyCreateNestedManyWithoutUserInput
    bookmark?: bookmarkCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutRating_user1Input = {
    user_id?: number
    first_name: string
    last_name: string
    username: string
    image?: string | null
    phone_number: string
    id_card: string
    email: string
    password: string
    role: string
    post?: postUncheckedCreateNestedManyWithoutUserInput
    rating_users2?: rating_userUncheckedCreateNestedManyWithoutUser2Input
    rating_com1?: rating_comUncheckedCreateNestedManyWithoutUser1Input
    rating_com2?: rating_comUncheckedCreateNestedManyWithoutUser2Input
    contact?: contactUncheckedCreateNestedManyWithoutUserInput
    experience?: experienceUncheckedCreateNestedManyWithoutUserInput
    user_career?: user_careerUncheckedCreateNestedManyWithoutUserInput
    history?: historyUncheckedCreateNestedManyWithoutUserInput
    bookmark?: bookmarkUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutRating_user1Input = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutRating_user1Input, userUncheckedCreateWithoutRating_user1Input>
  }

  export type userCreateWithoutRating_users2Input = {
    first_name: string
    last_name: string
    username: string
    image?: string | null
    phone_number: string
    id_card: string
    email: string
    password: string
    role: string
    post?: postCreateNestedManyWithoutUserInput
    rating_user1?: rating_userCreateNestedManyWithoutUser1Input
    rating_com1?: rating_comCreateNestedManyWithoutUser1Input
    rating_com2?: rating_comCreateNestedManyWithoutUser2Input
    contact?: contactCreateNestedManyWithoutUserInput
    experience?: experienceCreateNestedManyWithoutUserInput
    user_career?: user_careerCreateNestedManyWithoutUserInput
    history?: historyCreateNestedManyWithoutUserInput
    bookmark?: bookmarkCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutRating_users2Input = {
    user_id?: number
    first_name: string
    last_name: string
    username: string
    image?: string | null
    phone_number: string
    id_card: string
    email: string
    password: string
    role: string
    post?: postUncheckedCreateNestedManyWithoutUserInput
    rating_user1?: rating_userUncheckedCreateNestedManyWithoutUser1Input
    rating_com1?: rating_comUncheckedCreateNestedManyWithoutUser1Input
    rating_com2?: rating_comUncheckedCreateNestedManyWithoutUser2Input
    contact?: contactUncheckedCreateNestedManyWithoutUserInput
    experience?: experienceUncheckedCreateNestedManyWithoutUserInput
    user_career?: user_careerUncheckedCreateNestedManyWithoutUserInput
    history?: historyUncheckedCreateNestedManyWithoutUserInput
    bookmark?: bookmarkUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutRating_users2Input = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutRating_users2Input, userUncheckedCreateWithoutRating_users2Input>
  }

  export type jobCreateWithoutRating_userInput = {
    title: string
    description: string
    budget: number
    type: string
    posted_date?: Date | string
    submitted_date?: Date | string | null
    status?: string
    history?: historyCreateNestedManyWithoutJobInput
    job_exp?: job_expCreateNestedManyWithoutJobInput
    rating_com?: rating_comCreateNestedManyWithoutJobInput
    bookmark?: bookmarkCreateNestedManyWithoutJobInput
    post?: postCreateNestedManyWithoutJobInput
  }

  export type jobUncheckedCreateWithoutRating_userInput = {
    job_id?: number
    title: string
    description: string
    budget: number
    type: string
    posted_date?: Date | string
    submitted_date?: Date | string | null
    status?: string
    history?: historyUncheckedCreateNestedManyWithoutJobInput
    job_exp?: job_expUncheckedCreateNestedManyWithoutJobInput
    rating_com?: rating_comUncheckedCreateNestedManyWithoutJobInput
    bookmark?: bookmarkUncheckedCreateNestedManyWithoutJobInput
    post?: postUncheckedCreateNestedManyWithoutJobInput
  }

  export type jobCreateOrConnectWithoutRating_userInput = {
    where: jobWhereUniqueInput
    create: XOR<jobCreateWithoutRating_userInput, jobUncheckedCreateWithoutRating_userInput>
  }

  export type userUpsertWithoutRating_user1Input = {
    update: XOR<userUpdateWithoutRating_user1Input, userUncheckedUpdateWithoutRating_user1Input>
    create: XOR<userCreateWithoutRating_user1Input, userUncheckedCreateWithoutRating_user1Input>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutRating_user1Input = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutRating_user1Input, userUncheckedUpdateWithoutRating_user1Input>
  }

  export type userUpdateWithoutRating_user1Input = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    id_card?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    post?: postUpdateManyWithoutUserNestedInput
    rating_users2?: rating_userUpdateManyWithoutUser2NestedInput
    rating_com1?: rating_comUpdateManyWithoutUser1NestedInput
    rating_com2?: rating_comUpdateManyWithoutUser2NestedInput
    contact?: contactUpdateManyWithoutUserNestedInput
    experience?: experienceUpdateManyWithoutUserNestedInput
    user_career?: user_careerUpdateManyWithoutUserNestedInput
    history?: historyUpdateManyWithoutUserNestedInput
    bookmark?: bookmarkUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutRating_user1Input = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    id_card?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    post?: postUncheckedUpdateManyWithoutUserNestedInput
    rating_users2?: rating_userUncheckedUpdateManyWithoutUser2NestedInput
    rating_com1?: rating_comUncheckedUpdateManyWithoutUser1NestedInput
    rating_com2?: rating_comUncheckedUpdateManyWithoutUser2NestedInput
    contact?: contactUncheckedUpdateManyWithoutUserNestedInput
    experience?: experienceUncheckedUpdateManyWithoutUserNestedInput
    user_career?: user_careerUncheckedUpdateManyWithoutUserNestedInput
    history?: historyUncheckedUpdateManyWithoutUserNestedInput
    bookmark?: bookmarkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userUpsertWithoutRating_users2Input = {
    update: XOR<userUpdateWithoutRating_users2Input, userUncheckedUpdateWithoutRating_users2Input>
    create: XOR<userCreateWithoutRating_users2Input, userUncheckedCreateWithoutRating_users2Input>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutRating_users2Input = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutRating_users2Input, userUncheckedUpdateWithoutRating_users2Input>
  }

  export type userUpdateWithoutRating_users2Input = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    id_card?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    post?: postUpdateManyWithoutUserNestedInput
    rating_user1?: rating_userUpdateManyWithoutUser1NestedInput
    rating_com1?: rating_comUpdateManyWithoutUser1NestedInput
    rating_com2?: rating_comUpdateManyWithoutUser2NestedInput
    contact?: contactUpdateManyWithoutUserNestedInput
    experience?: experienceUpdateManyWithoutUserNestedInput
    user_career?: user_careerUpdateManyWithoutUserNestedInput
    history?: historyUpdateManyWithoutUserNestedInput
    bookmark?: bookmarkUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutRating_users2Input = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    id_card?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    post?: postUncheckedUpdateManyWithoutUserNestedInput
    rating_user1?: rating_userUncheckedUpdateManyWithoutUser1NestedInput
    rating_com1?: rating_comUncheckedUpdateManyWithoutUser1NestedInput
    rating_com2?: rating_comUncheckedUpdateManyWithoutUser2NestedInput
    contact?: contactUncheckedUpdateManyWithoutUserNestedInput
    experience?: experienceUncheckedUpdateManyWithoutUserNestedInput
    user_career?: user_careerUncheckedUpdateManyWithoutUserNestedInput
    history?: historyUncheckedUpdateManyWithoutUserNestedInput
    bookmark?: bookmarkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type jobUpsertWithoutRating_userInput = {
    update: XOR<jobUpdateWithoutRating_userInput, jobUncheckedUpdateWithoutRating_userInput>
    create: XOR<jobCreateWithoutRating_userInput, jobUncheckedCreateWithoutRating_userInput>
    where?: jobWhereInput
  }

  export type jobUpdateToOneWithWhereWithoutRating_userInput = {
    where?: jobWhereInput
    data: XOR<jobUpdateWithoutRating_userInput, jobUncheckedUpdateWithoutRating_userInput>
  }

  export type jobUpdateWithoutRating_userInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    posted_date?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    history?: historyUpdateManyWithoutJobNestedInput
    job_exp?: job_expUpdateManyWithoutJobNestedInput
    rating_com?: rating_comUpdateManyWithoutJobNestedInput
    bookmark?: bookmarkUpdateManyWithoutJobNestedInput
    post?: postUpdateManyWithoutJobNestedInput
  }

  export type jobUncheckedUpdateWithoutRating_userInput = {
    job_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    posted_date?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    history?: historyUncheckedUpdateManyWithoutJobNestedInput
    job_exp?: job_expUncheckedUpdateManyWithoutJobNestedInput
    rating_com?: rating_comUncheckedUpdateManyWithoutJobNestedInput
    bookmark?: bookmarkUncheckedUpdateManyWithoutJobNestedInput
    post?: postUncheckedUpdateManyWithoutJobNestedInput
  }

  export type userCreateWithoutRating_com1Input = {
    first_name: string
    last_name: string
    username: string
    image?: string | null
    phone_number: string
    id_card: string
    email: string
    password: string
    role: string
    post?: postCreateNestedManyWithoutUserInput
    rating_user1?: rating_userCreateNestedManyWithoutUser1Input
    rating_users2?: rating_userCreateNestedManyWithoutUser2Input
    rating_com2?: rating_comCreateNestedManyWithoutUser2Input
    contact?: contactCreateNestedManyWithoutUserInput
    experience?: experienceCreateNestedManyWithoutUserInput
    user_career?: user_careerCreateNestedManyWithoutUserInput
    history?: historyCreateNestedManyWithoutUserInput
    bookmark?: bookmarkCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutRating_com1Input = {
    user_id?: number
    first_name: string
    last_name: string
    username: string
    image?: string | null
    phone_number: string
    id_card: string
    email: string
    password: string
    role: string
    post?: postUncheckedCreateNestedManyWithoutUserInput
    rating_user1?: rating_userUncheckedCreateNestedManyWithoutUser1Input
    rating_users2?: rating_userUncheckedCreateNestedManyWithoutUser2Input
    rating_com2?: rating_comUncheckedCreateNestedManyWithoutUser2Input
    contact?: contactUncheckedCreateNestedManyWithoutUserInput
    experience?: experienceUncheckedCreateNestedManyWithoutUserInput
    user_career?: user_careerUncheckedCreateNestedManyWithoutUserInput
    history?: historyUncheckedCreateNestedManyWithoutUserInput
    bookmark?: bookmarkUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutRating_com1Input = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutRating_com1Input, userUncheckedCreateWithoutRating_com1Input>
  }

  export type userCreateWithoutRating_com2Input = {
    first_name: string
    last_name: string
    username: string
    image?: string | null
    phone_number: string
    id_card: string
    email: string
    password: string
    role: string
    post?: postCreateNestedManyWithoutUserInput
    rating_user1?: rating_userCreateNestedManyWithoutUser1Input
    rating_users2?: rating_userCreateNestedManyWithoutUser2Input
    rating_com1?: rating_comCreateNestedManyWithoutUser1Input
    contact?: contactCreateNestedManyWithoutUserInput
    experience?: experienceCreateNestedManyWithoutUserInput
    user_career?: user_careerCreateNestedManyWithoutUserInput
    history?: historyCreateNestedManyWithoutUserInput
    bookmark?: bookmarkCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutRating_com2Input = {
    user_id?: number
    first_name: string
    last_name: string
    username: string
    image?: string | null
    phone_number: string
    id_card: string
    email: string
    password: string
    role: string
    post?: postUncheckedCreateNestedManyWithoutUserInput
    rating_user1?: rating_userUncheckedCreateNestedManyWithoutUser1Input
    rating_users2?: rating_userUncheckedCreateNestedManyWithoutUser2Input
    rating_com1?: rating_comUncheckedCreateNestedManyWithoutUser1Input
    contact?: contactUncheckedCreateNestedManyWithoutUserInput
    experience?: experienceUncheckedCreateNestedManyWithoutUserInput
    user_career?: user_careerUncheckedCreateNestedManyWithoutUserInput
    history?: historyUncheckedCreateNestedManyWithoutUserInput
    bookmark?: bookmarkUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutRating_com2Input = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutRating_com2Input, userUncheckedCreateWithoutRating_com2Input>
  }

  export type jobCreateWithoutRating_comInput = {
    title: string
    description: string
    budget: number
    type: string
    posted_date?: Date | string
    submitted_date?: Date | string | null
    status?: string
    history?: historyCreateNestedManyWithoutJobInput
    job_exp?: job_expCreateNestedManyWithoutJobInput
    rating_user?: rating_userCreateNestedManyWithoutJobInput
    bookmark?: bookmarkCreateNestedManyWithoutJobInput
    post?: postCreateNestedManyWithoutJobInput
  }

  export type jobUncheckedCreateWithoutRating_comInput = {
    job_id?: number
    title: string
    description: string
    budget: number
    type: string
    posted_date?: Date | string
    submitted_date?: Date | string | null
    status?: string
    history?: historyUncheckedCreateNestedManyWithoutJobInput
    job_exp?: job_expUncheckedCreateNestedManyWithoutJobInput
    rating_user?: rating_userUncheckedCreateNestedManyWithoutJobInput
    bookmark?: bookmarkUncheckedCreateNestedManyWithoutJobInput
    post?: postUncheckedCreateNestedManyWithoutJobInput
  }

  export type jobCreateOrConnectWithoutRating_comInput = {
    where: jobWhereUniqueInput
    create: XOR<jobCreateWithoutRating_comInput, jobUncheckedCreateWithoutRating_comInput>
  }

  export type userUpsertWithoutRating_com1Input = {
    update: XOR<userUpdateWithoutRating_com1Input, userUncheckedUpdateWithoutRating_com1Input>
    create: XOR<userCreateWithoutRating_com1Input, userUncheckedCreateWithoutRating_com1Input>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutRating_com1Input = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutRating_com1Input, userUncheckedUpdateWithoutRating_com1Input>
  }

  export type userUpdateWithoutRating_com1Input = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    id_card?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    post?: postUpdateManyWithoutUserNestedInput
    rating_user1?: rating_userUpdateManyWithoutUser1NestedInput
    rating_users2?: rating_userUpdateManyWithoutUser2NestedInput
    rating_com2?: rating_comUpdateManyWithoutUser2NestedInput
    contact?: contactUpdateManyWithoutUserNestedInput
    experience?: experienceUpdateManyWithoutUserNestedInput
    user_career?: user_careerUpdateManyWithoutUserNestedInput
    history?: historyUpdateManyWithoutUserNestedInput
    bookmark?: bookmarkUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutRating_com1Input = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    id_card?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    post?: postUncheckedUpdateManyWithoutUserNestedInput
    rating_user1?: rating_userUncheckedUpdateManyWithoutUser1NestedInput
    rating_users2?: rating_userUncheckedUpdateManyWithoutUser2NestedInput
    rating_com2?: rating_comUncheckedUpdateManyWithoutUser2NestedInput
    contact?: contactUncheckedUpdateManyWithoutUserNestedInput
    experience?: experienceUncheckedUpdateManyWithoutUserNestedInput
    user_career?: user_careerUncheckedUpdateManyWithoutUserNestedInput
    history?: historyUncheckedUpdateManyWithoutUserNestedInput
    bookmark?: bookmarkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userUpsertWithoutRating_com2Input = {
    update: XOR<userUpdateWithoutRating_com2Input, userUncheckedUpdateWithoutRating_com2Input>
    create: XOR<userCreateWithoutRating_com2Input, userUncheckedCreateWithoutRating_com2Input>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutRating_com2Input = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutRating_com2Input, userUncheckedUpdateWithoutRating_com2Input>
  }

  export type userUpdateWithoutRating_com2Input = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    id_card?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    post?: postUpdateManyWithoutUserNestedInput
    rating_user1?: rating_userUpdateManyWithoutUser1NestedInput
    rating_users2?: rating_userUpdateManyWithoutUser2NestedInput
    rating_com1?: rating_comUpdateManyWithoutUser1NestedInput
    contact?: contactUpdateManyWithoutUserNestedInput
    experience?: experienceUpdateManyWithoutUserNestedInput
    user_career?: user_careerUpdateManyWithoutUserNestedInput
    history?: historyUpdateManyWithoutUserNestedInput
    bookmark?: bookmarkUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutRating_com2Input = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    id_card?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    post?: postUncheckedUpdateManyWithoutUserNestedInput
    rating_user1?: rating_userUncheckedUpdateManyWithoutUser1NestedInput
    rating_users2?: rating_userUncheckedUpdateManyWithoutUser2NestedInput
    rating_com1?: rating_comUncheckedUpdateManyWithoutUser1NestedInput
    contact?: contactUncheckedUpdateManyWithoutUserNestedInput
    experience?: experienceUncheckedUpdateManyWithoutUserNestedInput
    user_career?: user_careerUncheckedUpdateManyWithoutUserNestedInput
    history?: historyUncheckedUpdateManyWithoutUserNestedInput
    bookmark?: bookmarkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type jobUpsertWithoutRating_comInput = {
    update: XOR<jobUpdateWithoutRating_comInput, jobUncheckedUpdateWithoutRating_comInput>
    create: XOR<jobCreateWithoutRating_comInput, jobUncheckedCreateWithoutRating_comInput>
    where?: jobWhereInput
  }

  export type jobUpdateToOneWithWhereWithoutRating_comInput = {
    where?: jobWhereInput
    data: XOR<jobUpdateWithoutRating_comInput, jobUncheckedUpdateWithoutRating_comInput>
  }

  export type jobUpdateWithoutRating_comInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    posted_date?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    history?: historyUpdateManyWithoutJobNestedInput
    job_exp?: job_expUpdateManyWithoutJobNestedInput
    rating_user?: rating_userUpdateManyWithoutJobNestedInput
    bookmark?: bookmarkUpdateManyWithoutJobNestedInput
    post?: postUpdateManyWithoutJobNestedInput
  }

  export type jobUncheckedUpdateWithoutRating_comInput = {
    job_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    posted_date?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    history?: historyUncheckedUpdateManyWithoutJobNestedInput
    job_exp?: job_expUncheckedUpdateManyWithoutJobNestedInput
    rating_user?: rating_userUncheckedUpdateManyWithoutJobNestedInput
    bookmark?: bookmarkUncheckedUpdateManyWithoutJobNestedInput
    post?: postUncheckedUpdateManyWithoutJobNestedInput
  }

  export type userCreateWithoutContactInput = {
    first_name: string
    last_name: string
    username: string
    image?: string | null
    phone_number: string
    id_card: string
    email: string
    password: string
    role: string
    post?: postCreateNestedManyWithoutUserInput
    rating_user1?: rating_userCreateNestedManyWithoutUser1Input
    rating_users2?: rating_userCreateNestedManyWithoutUser2Input
    rating_com1?: rating_comCreateNestedManyWithoutUser1Input
    rating_com2?: rating_comCreateNestedManyWithoutUser2Input
    experience?: experienceCreateNestedManyWithoutUserInput
    user_career?: user_careerCreateNestedManyWithoutUserInput
    history?: historyCreateNestedManyWithoutUserInput
    bookmark?: bookmarkCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutContactInput = {
    user_id?: number
    first_name: string
    last_name: string
    username: string
    image?: string | null
    phone_number: string
    id_card: string
    email: string
    password: string
    role: string
    post?: postUncheckedCreateNestedManyWithoutUserInput
    rating_user1?: rating_userUncheckedCreateNestedManyWithoutUser1Input
    rating_users2?: rating_userUncheckedCreateNestedManyWithoutUser2Input
    rating_com1?: rating_comUncheckedCreateNestedManyWithoutUser1Input
    rating_com2?: rating_comUncheckedCreateNestedManyWithoutUser2Input
    experience?: experienceUncheckedCreateNestedManyWithoutUserInput
    user_career?: user_careerUncheckedCreateNestedManyWithoutUserInput
    history?: historyUncheckedCreateNestedManyWithoutUserInput
    bookmark?: bookmarkUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutContactInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutContactInput, userUncheckedCreateWithoutContactInput>
  }

  export type userUpsertWithoutContactInput = {
    update: XOR<userUpdateWithoutContactInput, userUncheckedUpdateWithoutContactInput>
    create: XOR<userCreateWithoutContactInput, userUncheckedCreateWithoutContactInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutContactInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutContactInput, userUncheckedUpdateWithoutContactInput>
  }

  export type userUpdateWithoutContactInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    id_card?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    post?: postUpdateManyWithoutUserNestedInput
    rating_user1?: rating_userUpdateManyWithoutUser1NestedInput
    rating_users2?: rating_userUpdateManyWithoutUser2NestedInput
    rating_com1?: rating_comUpdateManyWithoutUser1NestedInput
    rating_com2?: rating_comUpdateManyWithoutUser2NestedInput
    experience?: experienceUpdateManyWithoutUserNestedInput
    user_career?: user_careerUpdateManyWithoutUserNestedInput
    history?: historyUpdateManyWithoutUserNestedInput
    bookmark?: bookmarkUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutContactInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    id_card?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    post?: postUncheckedUpdateManyWithoutUserNestedInput
    rating_user1?: rating_userUncheckedUpdateManyWithoutUser1NestedInput
    rating_users2?: rating_userUncheckedUpdateManyWithoutUser2NestedInput
    rating_com1?: rating_comUncheckedUpdateManyWithoutUser1NestedInput
    rating_com2?: rating_comUncheckedUpdateManyWithoutUser2NestedInput
    experience?: experienceUncheckedUpdateManyWithoutUserNestedInput
    user_career?: user_careerUncheckedUpdateManyWithoutUserNestedInput
    history?: historyUncheckedUpdateManyWithoutUserNestedInput
    bookmark?: bookmarkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type experienceCreateWithoutCategoryInput = {
    user: userCreateNestedOneWithoutExperienceInput
  }

  export type experienceUncheckedCreateWithoutCategoryInput = {
    user_id: number
  }

  export type experienceCreateOrConnectWithoutCategoryInput = {
    where: experienceWhereUniqueInput
    create: XOR<experienceCreateWithoutCategoryInput, experienceUncheckedCreateWithoutCategoryInput>
  }

  export type experienceCreateManyCategoryInputEnvelope = {
    data: experienceCreateManyCategoryInput | experienceCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type job_expCreateWithoutCategoryInput = {
    job: jobCreateNestedOneWithoutJob_expInput
  }

  export type job_expUncheckedCreateWithoutCategoryInput = {
    job_id: number
  }

  export type job_expCreateOrConnectWithoutCategoryInput = {
    where: job_expWhereUniqueInput
    create: XOR<job_expCreateWithoutCategoryInput, job_expUncheckedCreateWithoutCategoryInput>
  }

  export type job_expCreateManyCategoryInputEnvelope = {
    data: job_expCreateManyCategoryInput | job_expCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type experienceUpsertWithWhereUniqueWithoutCategoryInput = {
    where: experienceWhereUniqueInput
    update: XOR<experienceUpdateWithoutCategoryInput, experienceUncheckedUpdateWithoutCategoryInput>
    create: XOR<experienceCreateWithoutCategoryInput, experienceUncheckedCreateWithoutCategoryInput>
  }

  export type experienceUpdateWithWhereUniqueWithoutCategoryInput = {
    where: experienceWhereUniqueInput
    data: XOR<experienceUpdateWithoutCategoryInput, experienceUncheckedUpdateWithoutCategoryInput>
  }

  export type experienceUpdateManyWithWhereWithoutCategoryInput = {
    where: experienceScalarWhereInput
    data: XOR<experienceUpdateManyMutationInput, experienceUncheckedUpdateManyWithoutCategoryInput>
  }

  export type job_expUpsertWithWhereUniqueWithoutCategoryInput = {
    where: job_expWhereUniqueInput
    update: XOR<job_expUpdateWithoutCategoryInput, job_expUncheckedUpdateWithoutCategoryInput>
    create: XOR<job_expCreateWithoutCategoryInput, job_expUncheckedCreateWithoutCategoryInput>
  }

  export type job_expUpdateWithWhereUniqueWithoutCategoryInput = {
    where: job_expWhereUniqueInput
    data: XOR<job_expUpdateWithoutCategoryInput, job_expUncheckedUpdateWithoutCategoryInput>
  }

  export type job_expUpdateManyWithWhereWithoutCategoryInput = {
    where: job_expScalarWhereInput
    data: XOR<job_expUpdateManyMutationInput, job_expUncheckedUpdateManyWithoutCategoryInput>
  }

  export type job_expScalarWhereInput = {
    AND?: job_expScalarWhereInput | job_expScalarWhereInput[]
    OR?: job_expScalarWhereInput[]
    NOT?: job_expScalarWhereInput | job_expScalarWhereInput[]
    job_id?: IntFilter<"job_exp"> | number
    category_id?: IntFilter<"job_exp"> | number
  }

  export type userCreateWithoutExperienceInput = {
    first_name: string
    last_name: string
    username: string
    image?: string | null
    phone_number: string
    id_card: string
    email: string
    password: string
    role: string
    post?: postCreateNestedManyWithoutUserInput
    rating_user1?: rating_userCreateNestedManyWithoutUser1Input
    rating_users2?: rating_userCreateNestedManyWithoutUser2Input
    rating_com1?: rating_comCreateNestedManyWithoutUser1Input
    rating_com2?: rating_comCreateNestedManyWithoutUser2Input
    contact?: contactCreateNestedManyWithoutUserInput
    user_career?: user_careerCreateNestedManyWithoutUserInput
    history?: historyCreateNestedManyWithoutUserInput
    bookmark?: bookmarkCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutExperienceInput = {
    user_id?: number
    first_name: string
    last_name: string
    username: string
    image?: string | null
    phone_number: string
    id_card: string
    email: string
    password: string
    role: string
    post?: postUncheckedCreateNestedManyWithoutUserInput
    rating_user1?: rating_userUncheckedCreateNestedManyWithoutUser1Input
    rating_users2?: rating_userUncheckedCreateNestedManyWithoutUser2Input
    rating_com1?: rating_comUncheckedCreateNestedManyWithoutUser1Input
    rating_com2?: rating_comUncheckedCreateNestedManyWithoutUser2Input
    contact?: contactUncheckedCreateNestedManyWithoutUserInput
    user_career?: user_careerUncheckedCreateNestedManyWithoutUserInput
    history?: historyUncheckedCreateNestedManyWithoutUserInput
    bookmark?: bookmarkUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutExperienceInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutExperienceInput, userUncheckedCreateWithoutExperienceInput>
  }

  export type categoryCreateWithoutExperiencesInput = {
    name: string
    job_exp?: job_expCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateWithoutExperiencesInput = {
    category_id?: number
    name: string
    job_exp?: job_expUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryCreateOrConnectWithoutExperiencesInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutExperiencesInput, categoryUncheckedCreateWithoutExperiencesInput>
  }

  export type userUpsertWithoutExperienceInput = {
    update: XOR<userUpdateWithoutExperienceInput, userUncheckedUpdateWithoutExperienceInput>
    create: XOR<userCreateWithoutExperienceInput, userUncheckedCreateWithoutExperienceInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutExperienceInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutExperienceInput, userUncheckedUpdateWithoutExperienceInput>
  }

  export type userUpdateWithoutExperienceInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    id_card?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    post?: postUpdateManyWithoutUserNestedInput
    rating_user1?: rating_userUpdateManyWithoutUser1NestedInput
    rating_users2?: rating_userUpdateManyWithoutUser2NestedInput
    rating_com1?: rating_comUpdateManyWithoutUser1NestedInput
    rating_com2?: rating_comUpdateManyWithoutUser2NestedInput
    contact?: contactUpdateManyWithoutUserNestedInput
    user_career?: user_careerUpdateManyWithoutUserNestedInput
    history?: historyUpdateManyWithoutUserNestedInput
    bookmark?: bookmarkUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutExperienceInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    id_card?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    post?: postUncheckedUpdateManyWithoutUserNestedInput
    rating_user1?: rating_userUncheckedUpdateManyWithoutUser1NestedInput
    rating_users2?: rating_userUncheckedUpdateManyWithoutUser2NestedInput
    rating_com1?: rating_comUncheckedUpdateManyWithoutUser1NestedInput
    rating_com2?: rating_comUncheckedUpdateManyWithoutUser2NestedInput
    contact?: contactUncheckedUpdateManyWithoutUserNestedInput
    user_career?: user_careerUncheckedUpdateManyWithoutUserNestedInput
    history?: historyUncheckedUpdateManyWithoutUserNestedInput
    bookmark?: bookmarkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type categoryUpsertWithoutExperiencesInput = {
    update: XOR<categoryUpdateWithoutExperiencesInput, categoryUncheckedUpdateWithoutExperiencesInput>
    create: XOR<categoryCreateWithoutExperiencesInput, categoryUncheckedCreateWithoutExperiencesInput>
    where?: categoryWhereInput
  }

  export type categoryUpdateToOneWithWhereWithoutExperiencesInput = {
    where?: categoryWhereInput
    data: XOR<categoryUpdateWithoutExperiencesInput, categoryUncheckedUpdateWithoutExperiencesInput>
  }

  export type categoryUpdateWithoutExperiencesInput = {
    name?: StringFieldUpdateOperationsInput | string
    job_exp?: job_expUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateWithoutExperiencesInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    job_exp?: job_expUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type user_careerCreateWithoutCareerInput = {
    user: userCreateNestedOneWithoutUser_careerInput
  }

  export type user_careerUncheckedCreateWithoutCareerInput = {
    user_id: number
  }

  export type user_careerCreateOrConnectWithoutCareerInput = {
    where: user_careerWhereUniqueInput
    create: XOR<user_careerCreateWithoutCareerInput, user_careerUncheckedCreateWithoutCareerInput>
  }

  export type user_careerCreateManyCareerInputEnvelope = {
    data: user_careerCreateManyCareerInput | user_careerCreateManyCareerInput[]
    skipDuplicates?: boolean
  }

  export type user_careerUpsertWithWhereUniqueWithoutCareerInput = {
    where: user_careerWhereUniqueInput
    update: XOR<user_careerUpdateWithoutCareerInput, user_careerUncheckedUpdateWithoutCareerInput>
    create: XOR<user_careerCreateWithoutCareerInput, user_careerUncheckedCreateWithoutCareerInput>
  }

  export type user_careerUpdateWithWhereUniqueWithoutCareerInput = {
    where: user_careerWhereUniqueInput
    data: XOR<user_careerUpdateWithoutCareerInput, user_careerUncheckedUpdateWithoutCareerInput>
  }

  export type user_careerUpdateManyWithWhereWithoutCareerInput = {
    where: user_careerScalarWhereInput
    data: XOR<user_careerUpdateManyMutationInput, user_careerUncheckedUpdateManyWithoutCareerInput>
  }

  export type userCreateWithoutUser_careerInput = {
    first_name: string
    last_name: string
    username: string
    image?: string | null
    phone_number: string
    id_card: string
    email: string
    password: string
    role: string
    post?: postCreateNestedManyWithoutUserInput
    rating_user1?: rating_userCreateNestedManyWithoutUser1Input
    rating_users2?: rating_userCreateNestedManyWithoutUser2Input
    rating_com1?: rating_comCreateNestedManyWithoutUser1Input
    rating_com2?: rating_comCreateNestedManyWithoutUser2Input
    contact?: contactCreateNestedManyWithoutUserInput
    experience?: experienceCreateNestedManyWithoutUserInput
    history?: historyCreateNestedManyWithoutUserInput
    bookmark?: bookmarkCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutUser_careerInput = {
    user_id?: number
    first_name: string
    last_name: string
    username: string
    image?: string | null
    phone_number: string
    id_card: string
    email: string
    password: string
    role: string
    post?: postUncheckedCreateNestedManyWithoutUserInput
    rating_user1?: rating_userUncheckedCreateNestedManyWithoutUser1Input
    rating_users2?: rating_userUncheckedCreateNestedManyWithoutUser2Input
    rating_com1?: rating_comUncheckedCreateNestedManyWithoutUser1Input
    rating_com2?: rating_comUncheckedCreateNestedManyWithoutUser2Input
    contact?: contactUncheckedCreateNestedManyWithoutUserInput
    experience?: experienceUncheckedCreateNestedManyWithoutUserInput
    history?: historyUncheckedCreateNestedManyWithoutUserInput
    bookmark?: bookmarkUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutUser_careerInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUser_careerInput, userUncheckedCreateWithoutUser_careerInput>
  }

  export type careerCreateWithoutUser_careerInput = {
    name: string
  }

  export type careerUncheckedCreateWithoutUser_careerInput = {
    career_id?: number
    name: string
  }

  export type careerCreateOrConnectWithoutUser_careerInput = {
    where: careerWhereUniqueInput
    create: XOR<careerCreateWithoutUser_careerInput, careerUncheckedCreateWithoutUser_careerInput>
  }

  export type userUpsertWithoutUser_careerInput = {
    update: XOR<userUpdateWithoutUser_careerInput, userUncheckedUpdateWithoutUser_careerInput>
    create: XOR<userCreateWithoutUser_careerInput, userUncheckedCreateWithoutUser_careerInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUser_careerInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUser_careerInput, userUncheckedUpdateWithoutUser_careerInput>
  }

  export type userUpdateWithoutUser_careerInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    id_card?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    post?: postUpdateManyWithoutUserNestedInput
    rating_user1?: rating_userUpdateManyWithoutUser1NestedInput
    rating_users2?: rating_userUpdateManyWithoutUser2NestedInput
    rating_com1?: rating_comUpdateManyWithoutUser1NestedInput
    rating_com2?: rating_comUpdateManyWithoutUser2NestedInput
    contact?: contactUpdateManyWithoutUserNestedInput
    experience?: experienceUpdateManyWithoutUserNestedInput
    history?: historyUpdateManyWithoutUserNestedInput
    bookmark?: bookmarkUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUser_careerInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    id_card?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    post?: postUncheckedUpdateManyWithoutUserNestedInput
    rating_user1?: rating_userUncheckedUpdateManyWithoutUser1NestedInput
    rating_users2?: rating_userUncheckedUpdateManyWithoutUser2NestedInput
    rating_com1?: rating_comUncheckedUpdateManyWithoutUser1NestedInput
    rating_com2?: rating_comUncheckedUpdateManyWithoutUser2NestedInput
    contact?: contactUncheckedUpdateManyWithoutUserNestedInput
    experience?: experienceUncheckedUpdateManyWithoutUserNestedInput
    history?: historyUncheckedUpdateManyWithoutUserNestedInput
    bookmark?: bookmarkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type careerUpsertWithoutUser_careerInput = {
    update: XOR<careerUpdateWithoutUser_careerInput, careerUncheckedUpdateWithoutUser_careerInput>
    create: XOR<careerCreateWithoutUser_careerInput, careerUncheckedCreateWithoutUser_careerInput>
    where?: careerWhereInput
  }

  export type careerUpdateToOneWithWhereWithoutUser_careerInput = {
    where?: careerWhereInput
    data: XOR<careerUpdateWithoutUser_careerInput, careerUncheckedUpdateWithoutUser_careerInput>
  }

  export type careerUpdateWithoutUser_careerInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type careerUncheckedUpdateWithoutUser_careerInput = {
    career_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type historyCreateWithoutJobInput = {
    status?: string
    user: userCreateNestedOneWithoutHistoryInput
  }

  export type historyUncheckedCreateWithoutJobInput = {
    user_id: number
    status?: string
  }

  export type historyCreateOrConnectWithoutJobInput = {
    where: historyWhereUniqueInput
    create: XOR<historyCreateWithoutJobInput, historyUncheckedCreateWithoutJobInput>
  }

  export type historyCreateManyJobInputEnvelope = {
    data: historyCreateManyJobInput | historyCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type job_expCreateWithoutJobInput = {
    category: categoryCreateNestedOneWithoutJob_expInput
  }

  export type job_expUncheckedCreateWithoutJobInput = {
    category_id: number
  }

  export type job_expCreateOrConnectWithoutJobInput = {
    where: job_expWhereUniqueInput
    create: XOR<job_expCreateWithoutJobInput, job_expUncheckedCreateWithoutJobInput>
  }

  export type job_expCreateManyJobInputEnvelope = {
    data: job_expCreateManyJobInput | job_expCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type rating_userCreateWithoutJobInput = {
    friendly_rating?: number
    efficiency_rating?: number
    accuracy_rating?: number
    user1: userCreateNestedOneWithoutRating_user1Input
    user2: userCreateNestedOneWithoutRating_users2Input
  }

  export type rating_userUncheckedCreateWithoutJobInput = {
    rating_id?: number
    user_id1: number
    user_id2: number
    friendly_rating?: number
    efficiency_rating?: number
    accuracy_rating?: number
  }

  export type rating_userCreateOrConnectWithoutJobInput = {
    where: rating_userWhereUniqueInput
    create: XOR<rating_userCreateWithoutJobInput, rating_userUncheckedCreateWithoutJobInput>
  }

  export type rating_userCreateManyJobInputEnvelope = {
    data: rating_userCreateManyJobInput | rating_userCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type rating_comCreateWithoutJobInput = {
    rating?: number
    user1: userCreateNestedOneWithoutRating_com1Input
    user2: userCreateNestedOneWithoutRating_com2Input
  }

  export type rating_comUncheckedCreateWithoutJobInput = {
    rating_id?: number
    user_id1: number
    user_id2: number
    rating?: number
  }

  export type rating_comCreateOrConnectWithoutJobInput = {
    where: rating_comWhereUniqueInput
    create: XOR<rating_comCreateWithoutJobInput, rating_comUncheckedCreateWithoutJobInput>
  }

  export type rating_comCreateManyJobInputEnvelope = {
    data: rating_comCreateManyJobInput | rating_comCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type bookmarkCreateWithoutJobInput = {
    user: userCreateNestedOneWithoutBookmarkInput
  }

  export type bookmarkUncheckedCreateWithoutJobInput = {
    book_id?: number
    user_id: number
  }

  export type bookmarkCreateOrConnectWithoutJobInput = {
    where: bookmarkWhereUniqueInput
    create: XOR<bookmarkCreateWithoutJobInput, bookmarkUncheckedCreateWithoutJobInput>
  }

  export type bookmarkCreateManyJobInputEnvelope = {
    data: bookmarkCreateManyJobInput | bookmarkCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type postCreateWithoutJobInput = {
    user: userCreateNestedOneWithoutPostInput
  }

  export type postUncheckedCreateWithoutJobInput = {
    user_id: number
  }

  export type postCreateOrConnectWithoutJobInput = {
    where: postWhereUniqueInput
    create: XOR<postCreateWithoutJobInput, postUncheckedCreateWithoutJobInput>
  }

  export type postCreateManyJobInputEnvelope = {
    data: postCreateManyJobInput | postCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type historyUpsertWithWhereUniqueWithoutJobInput = {
    where: historyWhereUniqueInput
    update: XOR<historyUpdateWithoutJobInput, historyUncheckedUpdateWithoutJobInput>
    create: XOR<historyCreateWithoutJobInput, historyUncheckedCreateWithoutJobInput>
  }

  export type historyUpdateWithWhereUniqueWithoutJobInput = {
    where: historyWhereUniqueInput
    data: XOR<historyUpdateWithoutJobInput, historyUncheckedUpdateWithoutJobInput>
  }

  export type historyUpdateManyWithWhereWithoutJobInput = {
    where: historyScalarWhereInput
    data: XOR<historyUpdateManyMutationInput, historyUncheckedUpdateManyWithoutJobInput>
  }

  export type job_expUpsertWithWhereUniqueWithoutJobInput = {
    where: job_expWhereUniqueInput
    update: XOR<job_expUpdateWithoutJobInput, job_expUncheckedUpdateWithoutJobInput>
    create: XOR<job_expCreateWithoutJobInput, job_expUncheckedCreateWithoutJobInput>
  }

  export type job_expUpdateWithWhereUniqueWithoutJobInput = {
    where: job_expWhereUniqueInput
    data: XOR<job_expUpdateWithoutJobInput, job_expUncheckedUpdateWithoutJobInput>
  }

  export type job_expUpdateManyWithWhereWithoutJobInput = {
    where: job_expScalarWhereInput
    data: XOR<job_expUpdateManyMutationInput, job_expUncheckedUpdateManyWithoutJobInput>
  }

  export type rating_userUpsertWithWhereUniqueWithoutJobInput = {
    where: rating_userWhereUniqueInput
    update: XOR<rating_userUpdateWithoutJobInput, rating_userUncheckedUpdateWithoutJobInput>
    create: XOR<rating_userCreateWithoutJobInput, rating_userUncheckedCreateWithoutJobInput>
  }

  export type rating_userUpdateWithWhereUniqueWithoutJobInput = {
    where: rating_userWhereUniqueInput
    data: XOR<rating_userUpdateWithoutJobInput, rating_userUncheckedUpdateWithoutJobInput>
  }

  export type rating_userUpdateManyWithWhereWithoutJobInput = {
    where: rating_userScalarWhereInput
    data: XOR<rating_userUpdateManyMutationInput, rating_userUncheckedUpdateManyWithoutJobInput>
  }

  export type rating_comUpsertWithWhereUniqueWithoutJobInput = {
    where: rating_comWhereUniqueInput
    update: XOR<rating_comUpdateWithoutJobInput, rating_comUncheckedUpdateWithoutJobInput>
    create: XOR<rating_comCreateWithoutJobInput, rating_comUncheckedCreateWithoutJobInput>
  }

  export type rating_comUpdateWithWhereUniqueWithoutJobInput = {
    where: rating_comWhereUniqueInput
    data: XOR<rating_comUpdateWithoutJobInput, rating_comUncheckedUpdateWithoutJobInput>
  }

  export type rating_comUpdateManyWithWhereWithoutJobInput = {
    where: rating_comScalarWhereInput
    data: XOR<rating_comUpdateManyMutationInput, rating_comUncheckedUpdateManyWithoutJobInput>
  }

  export type bookmarkUpsertWithWhereUniqueWithoutJobInput = {
    where: bookmarkWhereUniqueInput
    update: XOR<bookmarkUpdateWithoutJobInput, bookmarkUncheckedUpdateWithoutJobInput>
    create: XOR<bookmarkCreateWithoutJobInput, bookmarkUncheckedCreateWithoutJobInput>
  }

  export type bookmarkUpdateWithWhereUniqueWithoutJobInput = {
    where: bookmarkWhereUniqueInput
    data: XOR<bookmarkUpdateWithoutJobInput, bookmarkUncheckedUpdateWithoutJobInput>
  }

  export type bookmarkUpdateManyWithWhereWithoutJobInput = {
    where: bookmarkScalarWhereInput
    data: XOR<bookmarkUpdateManyMutationInput, bookmarkUncheckedUpdateManyWithoutJobInput>
  }

  export type postUpsertWithWhereUniqueWithoutJobInput = {
    where: postWhereUniqueInput
    update: XOR<postUpdateWithoutJobInput, postUncheckedUpdateWithoutJobInput>
    create: XOR<postCreateWithoutJobInput, postUncheckedCreateWithoutJobInput>
  }

  export type postUpdateWithWhereUniqueWithoutJobInput = {
    where: postWhereUniqueInput
    data: XOR<postUpdateWithoutJobInput, postUncheckedUpdateWithoutJobInput>
  }

  export type postUpdateManyWithWhereWithoutJobInput = {
    where: postScalarWhereInput
    data: XOR<postUpdateManyMutationInput, postUncheckedUpdateManyWithoutJobInput>
  }

  export type userCreateWithoutHistoryInput = {
    first_name: string
    last_name: string
    username: string
    image?: string | null
    phone_number: string
    id_card: string
    email: string
    password: string
    role: string
    post?: postCreateNestedManyWithoutUserInput
    rating_user1?: rating_userCreateNestedManyWithoutUser1Input
    rating_users2?: rating_userCreateNestedManyWithoutUser2Input
    rating_com1?: rating_comCreateNestedManyWithoutUser1Input
    rating_com2?: rating_comCreateNestedManyWithoutUser2Input
    contact?: contactCreateNestedManyWithoutUserInput
    experience?: experienceCreateNestedManyWithoutUserInput
    user_career?: user_careerCreateNestedManyWithoutUserInput
    bookmark?: bookmarkCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutHistoryInput = {
    user_id?: number
    first_name: string
    last_name: string
    username: string
    image?: string | null
    phone_number: string
    id_card: string
    email: string
    password: string
    role: string
    post?: postUncheckedCreateNestedManyWithoutUserInput
    rating_user1?: rating_userUncheckedCreateNestedManyWithoutUser1Input
    rating_users2?: rating_userUncheckedCreateNestedManyWithoutUser2Input
    rating_com1?: rating_comUncheckedCreateNestedManyWithoutUser1Input
    rating_com2?: rating_comUncheckedCreateNestedManyWithoutUser2Input
    contact?: contactUncheckedCreateNestedManyWithoutUserInput
    experience?: experienceUncheckedCreateNestedManyWithoutUserInput
    user_career?: user_careerUncheckedCreateNestedManyWithoutUserInput
    bookmark?: bookmarkUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutHistoryInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutHistoryInput, userUncheckedCreateWithoutHistoryInput>
  }

  export type jobCreateWithoutHistoryInput = {
    title: string
    description: string
    budget: number
    type: string
    posted_date?: Date | string
    submitted_date?: Date | string | null
    status?: string
    job_exp?: job_expCreateNestedManyWithoutJobInput
    rating_user?: rating_userCreateNestedManyWithoutJobInput
    rating_com?: rating_comCreateNestedManyWithoutJobInput
    bookmark?: bookmarkCreateNestedManyWithoutJobInput
    post?: postCreateNestedManyWithoutJobInput
  }

  export type jobUncheckedCreateWithoutHistoryInput = {
    job_id?: number
    title: string
    description: string
    budget: number
    type: string
    posted_date?: Date | string
    submitted_date?: Date | string | null
    status?: string
    job_exp?: job_expUncheckedCreateNestedManyWithoutJobInput
    rating_user?: rating_userUncheckedCreateNestedManyWithoutJobInput
    rating_com?: rating_comUncheckedCreateNestedManyWithoutJobInput
    bookmark?: bookmarkUncheckedCreateNestedManyWithoutJobInput
    post?: postUncheckedCreateNestedManyWithoutJobInput
  }

  export type jobCreateOrConnectWithoutHistoryInput = {
    where: jobWhereUniqueInput
    create: XOR<jobCreateWithoutHistoryInput, jobUncheckedCreateWithoutHistoryInput>
  }

  export type userUpsertWithoutHistoryInput = {
    update: XOR<userUpdateWithoutHistoryInput, userUncheckedUpdateWithoutHistoryInput>
    create: XOR<userCreateWithoutHistoryInput, userUncheckedCreateWithoutHistoryInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutHistoryInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutHistoryInput, userUncheckedUpdateWithoutHistoryInput>
  }

  export type userUpdateWithoutHistoryInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    id_card?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    post?: postUpdateManyWithoutUserNestedInput
    rating_user1?: rating_userUpdateManyWithoutUser1NestedInput
    rating_users2?: rating_userUpdateManyWithoutUser2NestedInput
    rating_com1?: rating_comUpdateManyWithoutUser1NestedInput
    rating_com2?: rating_comUpdateManyWithoutUser2NestedInput
    contact?: contactUpdateManyWithoutUserNestedInput
    experience?: experienceUpdateManyWithoutUserNestedInput
    user_career?: user_careerUpdateManyWithoutUserNestedInput
    bookmark?: bookmarkUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutHistoryInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    id_card?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    post?: postUncheckedUpdateManyWithoutUserNestedInput
    rating_user1?: rating_userUncheckedUpdateManyWithoutUser1NestedInput
    rating_users2?: rating_userUncheckedUpdateManyWithoutUser2NestedInput
    rating_com1?: rating_comUncheckedUpdateManyWithoutUser1NestedInput
    rating_com2?: rating_comUncheckedUpdateManyWithoutUser2NestedInput
    contact?: contactUncheckedUpdateManyWithoutUserNestedInput
    experience?: experienceUncheckedUpdateManyWithoutUserNestedInput
    user_career?: user_careerUncheckedUpdateManyWithoutUserNestedInput
    bookmark?: bookmarkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type jobUpsertWithoutHistoryInput = {
    update: XOR<jobUpdateWithoutHistoryInput, jobUncheckedUpdateWithoutHistoryInput>
    create: XOR<jobCreateWithoutHistoryInput, jobUncheckedCreateWithoutHistoryInput>
    where?: jobWhereInput
  }

  export type jobUpdateToOneWithWhereWithoutHistoryInput = {
    where?: jobWhereInput
    data: XOR<jobUpdateWithoutHistoryInput, jobUncheckedUpdateWithoutHistoryInput>
  }

  export type jobUpdateWithoutHistoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    posted_date?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    job_exp?: job_expUpdateManyWithoutJobNestedInput
    rating_user?: rating_userUpdateManyWithoutJobNestedInput
    rating_com?: rating_comUpdateManyWithoutJobNestedInput
    bookmark?: bookmarkUpdateManyWithoutJobNestedInput
    post?: postUpdateManyWithoutJobNestedInput
  }

  export type jobUncheckedUpdateWithoutHistoryInput = {
    job_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    posted_date?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    job_exp?: job_expUncheckedUpdateManyWithoutJobNestedInput
    rating_user?: rating_userUncheckedUpdateManyWithoutJobNestedInput
    rating_com?: rating_comUncheckedUpdateManyWithoutJobNestedInput
    bookmark?: bookmarkUncheckedUpdateManyWithoutJobNestedInput
    post?: postUncheckedUpdateManyWithoutJobNestedInput
  }

  export type jobCreateWithoutJob_expInput = {
    title: string
    description: string
    budget: number
    type: string
    posted_date?: Date | string
    submitted_date?: Date | string | null
    status?: string
    history?: historyCreateNestedManyWithoutJobInput
    rating_user?: rating_userCreateNestedManyWithoutJobInput
    rating_com?: rating_comCreateNestedManyWithoutJobInput
    bookmark?: bookmarkCreateNestedManyWithoutJobInput
    post?: postCreateNestedManyWithoutJobInput
  }

  export type jobUncheckedCreateWithoutJob_expInput = {
    job_id?: number
    title: string
    description: string
    budget: number
    type: string
    posted_date?: Date | string
    submitted_date?: Date | string | null
    status?: string
    history?: historyUncheckedCreateNestedManyWithoutJobInput
    rating_user?: rating_userUncheckedCreateNestedManyWithoutJobInput
    rating_com?: rating_comUncheckedCreateNestedManyWithoutJobInput
    bookmark?: bookmarkUncheckedCreateNestedManyWithoutJobInput
    post?: postUncheckedCreateNestedManyWithoutJobInput
  }

  export type jobCreateOrConnectWithoutJob_expInput = {
    where: jobWhereUniqueInput
    create: XOR<jobCreateWithoutJob_expInput, jobUncheckedCreateWithoutJob_expInput>
  }

  export type categoryCreateWithoutJob_expInput = {
    name: string
    experiences?: experienceCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateWithoutJob_expInput = {
    category_id?: number
    name: string
    experiences?: experienceUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryCreateOrConnectWithoutJob_expInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutJob_expInput, categoryUncheckedCreateWithoutJob_expInput>
  }

  export type jobUpsertWithoutJob_expInput = {
    update: XOR<jobUpdateWithoutJob_expInput, jobUncheckedUpdateWithoutJob_expInput>
    create: XOR<jobCreateWithoutJob_expInput, jobUncheckedCreateWithoutJob_expInput>
    where?: jobWhereInput
  }

  export type jobUpdateToOneWithWhereWithoutJob_expInput = {
    where?: jobWhereInput
    data: XOR<jobUpdateWithoutJob_expInput, jobUncheckedUpdateWithoutJob_expInput>
  }

  export type jobUpdateWithoutJob_expInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    posted_date?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    history?: historyUpdateManyWithoutJobNestedInput
    rating_user?: rating_userUpdateManyWithoutJobNestedInput
    rating_com?: rating_comUpdateManyWithoutJobNestedInput
    bookmark?: bookmarkUpdateManyWithoutJobNestedInput
    post?: postUpdateManyWithoutJobNestedInput
  }

  export type jobUncheckedUpdateWithoutJob_expInput = {
    job_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    posted_date?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    history?: historyUncheckedUpdateManyWithoutJobNestedInput
    rating_user?: rating_userUncheckedUpdateManyWithoutJobNestedInput
    rating_com?: rating_comUncheckedUpdateManyWithoutJobNestedInput
    bookmark?: bookmarkUncheckedUpdateManyWithoutJobNestedInput
    post?: postUncheckedUpdateManyWithoutJobNestedInput
  }

  export type categoryUpsertWithoutJob_expInput = {
    update: XOR<categoryUpdateWithoutJob_expInput, categoryUncheckedUpdateWithoutJob_expInput>
    create: XOR<categoryCreateWithoutJob_expInput, categoryUncheckedCreateWithoutJob_expInput>
    where?: categoryWhereInput
  }

  export type categoryUpdateToOneWithWhereWithoutJob_expInput = {
    where?: categoryWhereInput
    data: XOR<categoryUpdateWithoutJob_expInput, categoryUncheckedUpdateWithoutJob_expInput>
  }

  export type categoryUpdateWithoutJob_expInput = {
    name?: StringFieldUpdateOperationsInput | string
    experiences?: experienceUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateWithoutJob_expInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    experiences?: experienceUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type userCreateWithoutBookmarkInput = {
    first_name: string
    last_name: string
    username: string
    image?: string | null
    phone_number: string
    id_card: string
    email: string
    password: string
    role: string
    post?: postCreateNestedManyWithoutUserInput
    rating_user1?: rating_userCreateNestedManyWithoutUser1Input
    rating_users2?: rating_userCreateNestedManyWithoutUser2Input
    rating_com1?: rating_comCreateNestedManyWithoutUser1Input
    rating_com2?: rating_comCreateNestedManyWithoutUser2Input
    contact?: contactCreateNestedManyWithoutUserInput
    experience?: experienceCreateNestedManyWithoutUserInput
    user_career?: user_careerCreateNestedManyWithoutUserInput
    history?: historyCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutBookmarkInput = {
    user_id?: number
    first_name: string
    last_name: string
    username: string
    image?: string | null
    phone_number: string
    id_card: string
    email: string
    password: string
    role: string
    post?: postUncheckedCreateNestedManyWithoutUserInput
    rating_user1?: rating_userUncheckedCreateNestedManyWithoutUser1Input
    rating_users2?: rating_userUncheckedCreateNestedManyWithoutUser2Input
    rating_com1?: rating_comUncheckedCreateNestedManyWithoutUser1Input
    rating_com2?: rating_comUncheckedCreateNestedManyWithoutUser2Input
    contact?: contactUncheckedCreateNestedManyWithoutUserInput
    experience?: experienceUncheckedCreateNestedManyWithoutUserInput
    user_career?: user_careerUncheckedCreateNestedManyWithoutUserInput
    history?: historyUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutBookmarkInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutBookmarkInput, userUncheckedCreateWithoutBookmarkInput>
  }

  export type jobCreateWithoutBookmarkInput = {
    title: string
    description: string
    budget: number
    type: string
    posted_date?: Date | string
    submitted_date?: Date | string | null
    status?: string
    history?: historyCreateNestedManyWithoutJobInput
    job_exp?: job_expCreateNestedManyWithoutJobInput
    rating_user?: rating_userCreateNestedManyWithoutJobInput
    rating_com?: rating_comCreateNestedManyWithoutJobInput
    post?: postCreateNestedManyWithoutJobInput
  }

  export type jobUncheckedCreateWithoutBookmarkInput = {
    job_id?: number
    title: string
    description: string
    budget: number
    type: string
    posted_date?: Date | string
    submitted_date?: Date | string | null
    status?: string
    history?: historyUncheckedCreateNestedManyWithoutJobInput
    job_exp?: job_expUncheckedCreateNestedManyWithoutJobInput
    rating_user?: rating_userUncheckedCreateNestedManyWithoutJobInput
    rating_com?: rating_comUncheckedCreateNestedManyWithoutJobInput
    post?: postUncheckedCreateNestedManyWithoutJobInput
  }

  export type jobCreateOrConnectWithoutBookmarkInput = {
    where: jobWhereUniqueInput
    create: XOR<jobCreateWithoutBookmarkInput, jobUncheckedCreateWithoutBookmarkInput>
  }

  export type userUpsertWithoutBookmarkInput = {
    update: XOR<userUpdateWithoutBookmarkInput, userUncheckedUpdateWithoutBookmarkInput>
    create: XOR<userCreateWithoutBookmarkInput, userUncheckedCreateWithoutBookmarkInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutBookmarkInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutBookmarkInput, userUncheckedUpdateWithoutBookmarkInput>
  }

  export type userUpdateWithoutBookmarkInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    id_card?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    post?: postUpdateManyWithoutUserNestedInput
    rating_user1?: rating_userUpdateManyWithoutUser1NestedInput
    rating_users2?: rating_userUpdateManyWithoutUser2NestedInput
    rating_com1?: rating_comUpdateManyWithoutUser1NestedInput
    rating_com2?: rating_comUpdateManyWithoutUser2NestedInput
    contact?: contactUpdateManyWithoutUserNestedInput
    experience?: experienceUpdateManyWithoutUserNestedInput
    user_career?: user_careerUpdateManyWithoutUserNestedInput
    history?: historyUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutBookmarkInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    id_card?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    post?: postUncheckedUpdateManyWithoutUserNestedInput
    rating_user1?: rating_userUncheckedUpdateManyWithoutUser1NestedInput
    rating_users2?: rating_userUncheckedUpdateManyWithoutUser2NestedInput
    rating_com1?: rating_comUncheckedUpdateManyWithoutUser1NestedInput
    rating_com2?: rating_comUncheckedUpdateManyWithoutUser2NestedInput
    contact?: contactUncheckedUpdateManyWithoutUserNestedInput
    experience?: experienceUncheckedUpdateManyWithoutUserNestedInput
    user_career?: user_careerUncheckedUpdateManyWithoutUserNestedInput
    history?: historyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type jobUpsertWithoutBookmarkInput = {
    update: XOR<jobUpdateWithoutBookmarkInput, jobUncheckedUpdateWithoutBookmarkInput>
    create: XOR<jobCreateWithoutBookmarkInput, jobUncheckedCreateWithoutBookmarkInput>
    where?: jobWhereInput
  }

  export type jobUpdateToOneWithWhereWithoutBookmarkInput = {
    where?: jobWhereInput
    data: XOR<jobUpdateWithoutBookmarkInput, jobUncheckedUpdateWithoutBookmarkInput>
  }

  export type jobUpdateWithoutBookmarkInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    posted_date?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    history?: historyUpdateManyWithoutJobNestedInput
    job_exp?: job_expUpdateManyWithoutJobNestedInput
    rating_user?: rating_userUpdateManyWithoutJobNestedInput
    rating_com?: rating_comUpdateManyWithoutJobNestedInput
    post?: postUpdateManyWithoutJobNestedInput
  }

  export type jobUncheckedUpdateWithoutBookmarkInput = {
    job_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    posted_date?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    history?: historyUncheckedUpdateManyWithoutJobNestedInput
    job_exp?: job_expUncheckedUpdateManyWithoutJobNestedInput
    rating_user?: rating_userUncheckedUpdateManyWithoutJobNestedInput
    rating_com?: rating_comUncheckedUpdateManyWithoutJobNestedInput
    post?: postUncheckedUpdateManyWithoutJobNestedInput
  }

  export type userCreateWithoutPostInput = {
    first_name: string
    last_name: string
    username: string
    image?: string | null
    phone_number: string
    id_card: string
    email: string
    password: string
    role: string
    rating_user1?: rating_userCreateNestedManyWithoutUser1Input
    rating_users2?: rating_userCreateNestedManyWithoutUser2Input
    rating_com1?: rating_comCreateNestedManyWithoutUser1Input
    rating_com2?: rating_comCreateNestedManyWithoutUser2Input
    contact?: contactCreateNestedManyWithoutUserInput
    experience?: experienceCreateNestedManyWithoutUserInput
    user_career?: user_careerCreateNestedManyWithoutUserInput
    history?: historyCreateNestedManyWithoutUserInput
    bookmark?: bookmarkCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutPostInput = {
    user_id?: number
    first_name: string
    last_name: string
    username: string
    image?: string | null
    phone_number: string
    id_card: string
    email: string
    password: string
    role: string
    rating_user1?: rating_userUncheckedCreateNestedManyWithoutUser1Input
    rating_users2?: rating_userUncheckedCreateNestedManyWithoutUser2Input
    rating_com1?: rating_comUncheckedCreateNestedManyWithoutUser1Input
    rating_com2?: rating_comUncheckedCreateNestedManyWithoutUser2Input
    contact?: contactUncheckedCreateNestedManyWithoutUserInput
    experience?: experienceUncheckedCreateNestedManyWithoutUserInput
    user_career?: user_careerUncheckedCreateNestedManyWithoutUserInput
    history?: historyUncheckedCreateNestedManyWithoutUserInput
    bookmark?: bookmarkUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutPostInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPostInput, userUncheckedCreateWithoutPostInput>
  }

  export type jobCreateWithoutPostInput = {
    title: string
    description: string
    budget: number
    type: string
    posted_date?: Date | string
    submitted_date?: Date | string | null
    status?: string
    history?: historyCreateNestedManyWithoutJobInput
    job_exp?: job_expCreateNestedManyWithoutJobInput
    rating_user?: rating_userCreateNestedManyWithoutJobInput
    rating_com?: rating_comCreateNestedManyWithoutJobInput
    bookmark?: bookmarkCreateNestedManyWithoutJobInput
  }

  export type jobUncheckedCreateWithoutPostInput = {
    job_id?: number
    title: string
    description: string
    budget: number
    type: string
    posted_date?: Date | string
    submitted_date?: Date | string | null
    status?: string
    history?: historyUncheckedCreateNestedManyWithoutJobInput
    job_exp?: job_expUncheckedCreateNestedManyWithoutJobInput
    rating_user?: rating_userUncheckedCreateNestedManyWithoutJobInput
    rating_com?: rating_comUncheckedCreateNestedManyWithoutJobInput
    bookmark?: bookmarkUncheckedCreateNestedManyWithoutJobInput
  }

  export type jobCreateOrConnectWithoutPostInput = {
    where: jobWhereUniqueInput
    create: XOR<jobCreateWithoutPostInput, jobUncheckedCreateWithoutPostInput>
  }

  export type userUpsertWithoutPostInput = {
    update: XOR<userUpdateWithoutPostInput, userUncheckedUpdateWithoutPostInput>
    create: XOR<userCreateWithoutPostInput, userUncheckedCreateWithoutPostInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutPostInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutPostInput, userUncheckedUpdateWithoutPostInput>
  }

  export type userUpdateWithoutPostInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    id_card?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    rating_user1?: rating_userUpdateManyWithoutUser1NestedInput
    rating_users2?: rating_userUpdateManyWithoutUser2NestedInput
    rating_com1?: rating_comUpdateManyWithoutUser1NestedInput
    rating_com2?: rating_comUpdateManyWithoutUser2NestedInput
    contact?: contactUpdateManyWithoutUserNestedInput
    experience?: experienceUpdateManyWithoutUserNestedInput
    user_career?: user_careerUpdateManyWithoutUserNestedInput
    history?: historyUpdateManyWithoutUserNestedInput
    bookmark?: bookmarkUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutPostInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    id_card?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    rating_user1?: rating_userUncheckedUpdateManyWithoutUser1NestedInput
    rating_users2?: rating_userUncheckedUpdateManyWithoutUser2NestedInput
    rating_com1?: rating_comUncheckedUpdateManyWithoutUser1NestedInput
    rating_com2?: rating_comUncheckedUpdateManyWithoutUser2NestedInput
    contact?: contactUncheckedUpdateManyWithoutUserNestedInput
    experience?: experienceUncheckedUpdateManyWithoutUserNestedInput
    user_career?: user_careerUncheckedUpdateManyWithoutUserNestedInput
    history?: historyUncheckedUpdateManyWithoutUserNestedInput
    bookmark?: bookmarkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type jobUpsertWithoutPostInput = {
    update: XOR<jobUpdateWithoutPostInput, jobUncheckedUpdateWithoutPostInput>
    create: XOR<jobCreateWithoutPostInput, jobUncheckedCreateWithoutPostInput>
    where?: jobWhereInput
  }

  export type jobUpdateToOneWithWhereWithoutPostInput = {
    where?: jobWhereInput
    data: XOR<jobUpdateWithoutPostInput, jobUncheckedUpdateWithoutPostInput>
  }

  export type jobUpdateWithoutPostInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    posted_date?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    history?: historyUpdateManyWithoutJobNestedInput
    job_exp?: job_expUpdateManyWithoutJobNestedInput
    rating_user?: rating_userUpdateManyWithoutJobNestedInput
    rating_com?: rating_comUpdateManyWithoutJobNestedInput
    bookmark?: bookmarkUpdateManyWithoutJobNestedInput
  }

  export type jobUncheckedUpdateWithoutPostInput = {
    job_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    posted_date?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    history?: historyUncheckedUpdateManyWithoutJobNestedInput
    job_exp?: job_expUncheckedUpdateManyWithoutJobNestedInput
    rating_user?: rating_userUncheckedUpdateManyWithoutJobNestedInput
    rating_com?: rating_comUncheckedUpdateManyWithoutJobNestedInput
    bookmark?: bookmarkUncheckedUpdateManyWithoutJobNestedInput
  }

  export type postCreateManyUserInput = {
    job_id: number
  }

  export type rating_userCreateManyUser1Input = {
    rating_id?: number
    user_id2: number
    job_id: number
    friendly_rating?: number
    efficiency_rating?: number
    accuracy_rating?: number
  }

  export type rating_userCreateManyUser2Input = {
    rating_id?: number
    user_id1: number
    job_id: number
    friendly_rating?: number
    efficiency_rating?: number
    accuracy_rating?: number
  }

  export type rating_comCreateManyUser1Input = {
    rating_id?: number
    user_id2: number
    job_id: number
    rating?: number
  }

  export type rating_comCreateManyUser2Input = {
    rating_id?: number
    user_id1: number
    job_id: number
    rating?: number
  }

  export type contactCreateManyUserInput = {
    contact_id?: number
    facebook: string
    instagram: string
    linkedin: string
  }

  export type experienceCreateManyUserInput = {
    category_id: number
  }

  export type user_careerCreateManyUserInput = {
    career_id: number
  }

  export type historyCreateManyUserInput = {
    job_id: number
    status?: string
  }

  export type bookmarkCreateManyUserInput = {
    book_id?: number
    job_id: number
  }

  export type postUpdateWithoutUserInput = {
    job?: jobUpdateOneRequiredWithoutPostNestedInput
  }

  export type postUncheckedUpdateWithoutUserInput = {
    job_id?: IntFieldUpdateOperationsInput | number
  }

  export type postUncheckedUpdateManyWithoutUserInput = {
    job_id?: IntFieldUpdateOperationsInput | number
  }

  export type rating_userUpdateWithoutUser1Input = {
    friendly_rating?: FloatFieldUpdateOperationsInput | number
    efficiency_rating?: FloatFieldUpdateOperationsInput | number
    accuracy_rating?: FloatFieldUpdateOperationsInput | number
    user2?: userUpdateOneRequiredWithoutRating_users2NestedInput
    job?: jobUpdateOneRequiredWithoutRating_userNestedInput
  }

  export type rating_userUncheckedUpdateWithoutUser1Input = {
    rating_id?: IntFieldUpdateOperationsInput | number
    user_id2?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    friendly_rating?: FloatFieldUpdateOperationsInput | number
    efficiency_rating?: FloatFieldUpdateOperationsInput | number
    accuracy_rating?: FloatFieldUpdateOperationsInput | number
  }

  export type rating_userUncheckedUpdateManyWithoutUser1Input = {
    rating_id?: IntFieldUpdateOperationsInput | number
    user_id2?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    friendly_rating?: FloatFieldUpdateOperationsInput | number
    efficiency_rating?: FloatFieldUpdateOperationsInput | number
    accuracy_rating?: FloatFieldUpdateOperationsInput | number
  }

  export type rating_userUpdateWithoutUser2Input = {
    friendly_rating?: FloatFieldUpdateOperationsInput | number
    efficiency_rating?: FloatFieldUpdateOperationsInput | number
    accuracy_rating?: FloatFieldUpdateOperationsInput | number
    user1?: userUpdateOneRequiredWithoutRating_user1NestedInput
    job?: jobUpdateOneRequiredWithoutRating_userNestedInput
  }

  export type rating_userUncheckedUpdateWithoutUser2Input = {
    rating_id?: IntFieldUpdateOperationsInput | number
    user_id1?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    friendly_rating?: FloatFieldUpdateOperationsInput | number
    efficiency_rating?: FloatFieldUpdateOperationsInput | number
    accuracy_rating?: FloatFieldUpdateOperationsInput | number
  }

  export type rating_userUncheckedUpdateManyWithoutUser2Input = {
    rating_id?: IntFieldUpdateOperationsInput | number
    user_id1?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    friendly_rating?: FloatFieldUpdateOperationsInput | number
    efficiency_rating?: FloatFieldUpdateOperationsInput | number
    accuracy_rating?: FloatFieldUpdateOperationsInput | number
  }

  export type rating_comUpdateWithoutUser1Input = {
    rating?: FloatFieldUpdateOperationsInput | number
    user2?: userUpdateOneRequiredWithoutRating_com2NestedInput
    job?: jobUpdateOneRequiredWithoutRating_comNestedInput
  }

  export type rating_comUncheckedUpdateWithoutUser1Input = {
    rating_id?: IntFieldUpdateOperationsInput | number
    user_id2?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
  }

  export type rating_comUncheckedUpdateManyWithoutUser1Input = {
    rating_id?: IntFieldUpdateOperationsInput | number
    user_id2?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
  }

  export type rating_comUpdateWithoutUser2Input = {
    rating?: FloatFieldUpdateOperationsInput | number
    user1?: userUpdateOneRequiredWithoutRating_com1NestedInput
    job?: jobUpdateOneRequiredWithoutRating_comNestedInput
  }

  export type rating_comUncheckedUpdateWithoutUser2Input = {
    rating_id?: IntFieldUpdateOperationsInput | number
    user_id1?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
  }

  export type rating_comUncheckedUpdateManyWithoutUser2Input = {
    rating_id?: IntFieldUpdateOperationsInput | number
    user_id1?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
  }

  export type contactUpdateWithoutUserInput = {
    facebook?: StringFieldUpdateOperationsInput | string
    instagram?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
  }

  export type contactUncheckedUpdateWithoutUserInput = {
    contact_id?: IntFieldUpdateOperationsInput | number
    facebook?: StringFieldUpdateOperationsInput | string
    instagram?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
  }

  export type contactUncheckedUpdateManyWithoutUserInput = {
    contact_id?: IntFieldUpdateOperationsInput | number
    facebook?: StringFieldUpdateOperationsInput | string
    instagram?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
  }

  export type experienceUpdateWithoutUserInput = {
    category?: categoryUpdateOneRequiredWithoutExperiencesNestedInput
  }

  export type experienceUncheckedUpdateWithoutUserInput = {
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type experienceUncheckedUpdateManyWithoutUserInput = {
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type user_careerUpdateWithoutUserInput = {
    career?: careerUpdateOneRequiredWithoutUser_careerNestedInput
  }

  export type user_careerUncheckedUpdateWithoutUserInput = {
    career_id?: IntFieldUpdateOperationsInput | number
  }

  export type user_careerUncheckedUpdateManyWithoutUserInput = {
    career_id?: IntFieldUpdateOperationsInput | number
  }

  export type historyUpdateWithoutUserInput = {
    status?: StringFieldUpdateOperationsInput | string
    job?: jobUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type historyUncheckedUpdateWithoutUserInput = {
    job_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type historyUncheckedUpdateManyWithoutUserInput = {
    job_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type bookmarkUpdateWithoutUserInput = {
    job?: jobUpdateOneRequiredWithoutBookmarkNestedInput
  }

  export type bookmarkUncheckedUpdateWithoutUserInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
  }

  export type bookmarkUncheckedUpdateManyWithoutUserInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
  }

  export type experienceCreateManyCategoryInput = {
    user_id: number
  }

  export type job_expCreateManyCategoryInput = {
    job_id: number
  }

  export type experienceUpdateWithoutCategoryInput = {
    user?: userUpdateOneRequiredWithoutExperienceNestedInput
  }

  export type experienceUncheckedUpdateWithoutCategoryInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type experienceUncheckedUpdateManyWithoutCategoryInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type job_expUpdateWithoutCategoryInput = {
    job?: jobUpdateOneRequiredWithoutJob_expNestedInput
  }

  export type job_expUncheckedUpdateWithoutCategoryInput = {
    job_id?: IntFieldUpdateOperationsInput | number
  }

  export type job_expUncheckedUpdateManyWithoutCategoryInput = {
    job_id?: IntFieldUpdateOperationsInput | number
  }

  export type user_careerCreateManyCareerInput = {
    user_id: number
  }

  export type user_careerUpdateWithoutCareerInput = {
    user?: userUpdateOneRequiredWithoutUser_careerNestedInput
  }

  export type user_careerUncheckedUpdateWithoutCareerInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type user_careerUncheckedUpdateManyWithoutCareerInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type historyCreateManyJobInput = {
    user_id: number
    status?: string
  }

  export type job_expCreateManyJobInput = {
    category_id: number
  }

  export type rating_userCreateManyJobInput = {
    rating_id?: number
    user_id1: number
    user_id2: number
    friendly_rating?: number
    efficiency_rating?: number
    accuracy_rating?: number
  }

  export type rating_comCreateManyJobInput = {
    rating_id?: number
    user_id1: number
    user_id2: number
    rating?: number
  }

  export type bookmarkCreateManyJobInput = {
    book_id?: number
    user_id: number
  }

  export type postCreateManyJobInput = {
    user_id: number
  }

  export type historyUpdateWithoutJobInput = {
    status?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type historyUncheckedUpdateWithoutJobInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type historyUncheckedUpdateManyWithoutJobInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type job_expUpdateWithoutJobInput = {
    category?: categoryUpdateOneRequiredWithoutJob_expNestedInput
  }

  export type job_expUncheckedUpdateWithoutJobInput = {
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type job_expUncheckedUpdateManyWithoutJobInput = {
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type rating_userUpdateWithoutJobInput = {
    friendly_rating?: FloatFieldUpdateOperationsInput | number
    efficiency_rating?: FloatFieldUpdateOperationsInput | number
    accuracy_rating?: FloatFieldUpdateOperationsInput | number
    user1?: userUpdateOneRequiredWithoutRating_user1NestedInput
    user2?: userUpdateOneRequiredWithoutRating_users2NestedInput
  }

  export type rating_userUncheckedUpdateWithoutJobInput = {
    rating_id?: IntFieldUpdateOperationsInput | number
    user_id1?: IntFieldUpdateOperationsInput | number
    user_id2?: IntFieldUpdateOperationsInput | number
    friendly_rating?: FloatFieldUpdateOperationsInput | number
    efficiency_rating?: FloatFieldUpdateOperationsInput | number
    accuracy_rating?: FloatFieldUpdateOperationsInput | number
  }

  export type rating_userUncheckedUpdateManyWithoutJobInput = {
    rating_id?: IntFieldUpdateOperationsInput | number
    user_id1?: IntFieldUpdateOperationsInput | number
    user_id2?: IntFieldUpdateOperationsInput | number
    friendly_rating?: FloatFieldUpdateOperationsInput | number
    efficiency_rating?: FloatFieldUpdateOperationsInput | number
    accuracy_rating?: FloatFieldUpdateOperationsInput | number
  }

  export type rating_comUpdateWithoutJobInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    user1?: userUpdateOneRequiredWithoutRating_com1NestedInput
    user2?: userUpdateOneRequiredWithoutRating_com2NestedInput
  }

  export type rating_comUncheckedUpdateWithoutJobInput = {
    rating_id?: IntFieldUpdateOperationsInput | number
    user_id1?: IntFieldUpdateOperationsInput | number
    user_id2?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
  }

  export type rating_comUncheckedUpdateManyWithoutJobInput = {
    rating_id?: IntFieldUpdateOperationsInput | number
    user_id1?: IntFieldUpdateOperationsInput | number
    user_id2?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
  }

  export type bookmarkUpdateWithoutJobInput = {
    user?: userUpdateOneRequiredWithoutBookmarkNestedInput
  }

  export type bookmarkUncheckedUpdateWithoutJobInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type bookmarkUncheckedUpdateManyWithoutJobInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type postUpdateWithoutJobInput = {
    user?: userUpdateOneRequiredWithoutPostNestedInput
  }

  export type postUncheckedUpdateWithoutJobInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type postUncheckedUpdateManyWithoutJobInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CareerCountOutputTypeDefaultArgs instead
     */
    export type CareerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CareerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobCountOutputTypeDefaultArgs instead
     */
    export type JobCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use userDefaultArgs instead
     */
    export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>
    /**
     * @deprecated Use rating_userDefaultArgs instead
     */
    export type rating_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = rating_userDefaultArgs<ExtArgs>
    /**
     * @deprecated Use rating_comDefaultArgs instead
     */
    export type rating_comArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = rating_comDefaultArgs<ExtArgs>
    /**
     * @deprecated Use contactDefaultArgs instead
     */
    export type contactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = contactDefaultArgs<ExtArgs>
    /**
     * @deprecated Use categoryDefaultArgs instead
     */
    export type categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = categoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use experienceDefaultArgs instead
     */
    export type experienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = experienceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use careerDefaultArgs instead
     */
    export type careerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = careerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use user_careerDefaultArgs instead
     */
    export type user_careerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = user_careerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use jobDefaultArgs instead
     */
    export type jobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = jobDefaultArgs<ExtArgs>
    /**
     * @deprecated Use historyDefaultArgs instead
     */
    export type historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = historyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use job_expDefaultArgs instead
     */
    export type job_expArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = job_expDefaultArgs<ExtArgs>
    /**
     * @deprecated Use bookmarkDefaultArgs instead
     */
    export type bookmarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = bookmarkDefaultArgs<ExtArgs>
    /**
     * @deprecated Use postDefaultArgs instead
     */
    export type postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = postDefaultArgs<ExtArgs>

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