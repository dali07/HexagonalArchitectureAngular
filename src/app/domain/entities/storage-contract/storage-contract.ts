import { Price } from "../price/price";

export class StorageContract {
    public name: string;
    public buyPrice?: Price;
    public sellPrice?: Price;
    private constructor(name: string) {
        this.name = name;
    }

    public static create(name: string): StorageContract {
        return new StorageContract(name);
    }
    public setBuyPrice(buyPrice: Price | undefined): StorageContract {
        this.buyPrice = buyPrice;
        return this;
    }
    public setSellPrice(buyPrice: Price | undefined): StorageContract {
        this.sellPrice = buyPrice;
        return this;
    }
}