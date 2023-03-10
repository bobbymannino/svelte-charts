import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        data: number[];
        color?: string | undefined;
        rounding?: "rounded" | "pill" | "square" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BarChartProps = typeof __propDef.props;
export type BarChartEvents = typeof __propDef.events;
export type BarChartSlots = typeof __propDef.slots;
export default class BarChart extends SvelteComponentTyped<BarChartProps, BarChartEvents, BarChartSlots> {
}
export {};
