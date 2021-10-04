export default interface IRepository<D> {
  getAll(): Promise<D[]>;
}
