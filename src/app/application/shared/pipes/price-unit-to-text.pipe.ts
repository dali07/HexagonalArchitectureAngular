import { Pipe, PipeTransform } from "@angular/core";
import { PriceUnit } from "../../../domain/entities/price/price-unit";

@Pipe({
    standalone: true,
    name: 'priceUnitToText',
})
export class PriceUnitToTextPipe implements PipeTransform {
    transform(value: PriceUnit | undefined): any {
        if (value === undefined) {
            return 'NA';
        }
        switch (value) {
            case PriceUnit.EuroMwh:
                return '€/MWh';
            case PriceUnit.PenceTherm:
                return 'p/therm';
            default:
                return PriceUnit[value];
        }
    }
}