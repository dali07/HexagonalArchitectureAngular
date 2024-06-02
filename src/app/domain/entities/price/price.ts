import { PriceUnit } from "./price-unit";

export class Price {
    value: number;
    unit: PriceUnit;

    private constructor(value: number, unit: PriceUnit) {
        this.value = value;
        this.unit = unit;
    }

    public static create(value: number, unit: PriceUnit) {
        return new Price(value, unit);
    }
}
