import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        data: number[];
        color?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ScatterGraphProps = typeof __propDef.props;
export type ScatterGraphEvents = typeof __propDef.events;
export type ScatterGraphSlots = typeof __propDef.slots;
export default class ScatterGraph extends SvelteComponentTyped<ScatterGraphProps, ScatterGraphEvents, ScatterGraphSlots> {
}
export {};
