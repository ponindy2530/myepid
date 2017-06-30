import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";

@Pipe({
    name: 'countjson'
})
export class CountjsonPipe implements PipeTransform {

    transform(value?: any, args?: any): any {
        // console.log(value);
        // console.log(args);
        // const total = _.sumBy(value, function (o: any) { return Number(o[args]); });
        // console.log( JSON.parse(value[args]));
        const files = JSON.parse(value[args]);
        const res = _.size(files);
        // console.log(total);
        // let total2 =total.toFixed(2);
        return res;
    }



}


@Pipe({
    name: 'tojson'
})
export class TojsonPipe implements PipeTransform {

    transform(value?: any, args?: any): any {
        // console.log(value);
        // console.log(args);
        // const total = _.sumBy(value, function (o: any) { return Number(o[args]); });
        // console.log( JSON.parse(value[args]));
        const res = JSON.parse(value[args]);
        // const res = _.size(files);
        // console.log(total);
        // let total2 =total.toFixed(2);
        return res;
    }



}

@Pipe({
    name: 'spjson'
})
export class SplitjsonPipe implements PipeTransform {

    transform(value?: any): any {
        // console.log(value);
        // console.log(args);
        // const total = _.sumBy(value, function (o: any) { return Number(o[args]); });
        // console.log( JSON.parse(value[args]));
        // const s = _.split(value, '.',2);
        // console.log(s);
        console.log(value.files);
        // console.log(_.replace(value.files, '/[.,\/ -]/', _.split(value.files, '/[.,\/ -]/',2)));

        console.log(JSON.parse(value.files));
        // console.log(_.split(value.files, '[{/\}]',));

        // const res = JSON.parse(value[args]);
        // const res = _.size(files);
        // console.log(total);
        // let total2 =total.toFixed(2);
        return 1;
    }







}



@Pipe({
    name: 'countdata'
})
export class CountdataPipe implements PipeTransform {

    transform(value?: any, args?: any, param?: any): any {
        // console.log(value);
        // console.log(args);
        // const total = _.sumBy(value, function (o: any) { return Number(o[args]); });
        // console.log( JSON.parse(value[args]));
        const cdata = _.filter(value, function (o: any) {
            if (o[args] == param) { return o; }
        });
        // const files = JSON.parse(value[args]);
        const res = _.size(cdata);
        // console.log(total);
        // let total2 =total.toFixed(2);
        return res;
    }



}


@Pipe({
    name: 'paramdata'
})
export class ParamdataPipe implements PipeTransform {

    transform(value?: any, args?: any, param?: any): any {
        // console.log(value);
        // console.log(args);
        // const total = _.sumBy(value, function (o: any) { return Number(o[args]); });
        // console.log( JSON.parse(value[args]));
        const res = _.filter(value, function (o: any) {
            if (o[args] == param) { return o; }
        });
        // const files = JSON.parse(value[args]);
        // const res = _.size(cdata);
        // console.log(total);
        // let total2 =total.toFixed(2);
        return res;
    }



}


