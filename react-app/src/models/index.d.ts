import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Products {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly quantity?: number;
  constructor(init: ModelInit<Products>);
  static copyOf(source: Products, mutator: (draft: MutableModel<Products>) => MutableModel<Products> | void): Products;
}