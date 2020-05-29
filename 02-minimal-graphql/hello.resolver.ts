import { Resolver, Query } from 'type-graphql'

@Resolver(() => String)
export class HelloResolver {
  @Query(() => String)
  async hello() {
    return 'hello world'
  }
}
