export default interface Repository<K,T> {
  getAll(): Promise<T[]>;
  get(identifier: K): Promise<T>;
  post(object: T): Promise<T>;
  put(object: T): Promise<T>;
  delete(identifier: K): Promise<T>;
}
