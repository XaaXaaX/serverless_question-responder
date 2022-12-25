abstract class BaseRepository<M,E> {

    protected abstract CastToDomain(entity: E): M;
    protected abstract CastToEntity(model: M): E; 

}
    
export { BaseRepository }