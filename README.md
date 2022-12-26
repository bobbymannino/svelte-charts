# **Svelte Charts**

## **Description**

A set of simple svelte charts that are:

-   **TypeScript First**
-   **Auto-Fitting**
-   **Animated**
-   **Customizable With Props**
-   **Easy To Use**

---

## **Demo**

[Demo Site](https://bobbymannino.vercel.app/svelte-charts)

---

## **Installation**

```
npm install --save-dev @bobbymannino/svelte-charts
```

---

## **Usage**

```html
<!-- +page.svelte -->

<script lang="ts">
	import { BarChart } from "@bobbymannino/svelte-charts";

	let data = [500, 800, 24, 58];
</script>

<!-- The chart will fit to your container, this is an example one -->
<div style="width: 100px; height: 100px">
	<BarChart {data} />
</div>
```

---

## **Configuration**

```html
<!-- +page.svelte -->

<script lang="ts">
	import { BarChart } from "@bobbymannino/svelte-charts";

	let data = [500, 800, 24, 58];
</script>

<!-- The chart will fit to your container, this is an example one -->
<div style="width: 100px; height: 100px">
	<BarChart {data} rounding="pill" color="#ff0000" />
</div>
```

| Property Name | Property Type                   | Property Default |
| :------------ | :------------------------------ | :--------------- |
| color         | any CSS color as a string       | '#3a4efa'        |
| rounding      | 'rounded' \| 'pill' \| 'square' | 'rounded'        |
| data          | number[]                        |                  |

---

## **Bugs & Features**

Submit all bugs and/or feature requests to the [issues panel](https://github.com/bobbymannino/svelte-charts/issues) panel on GitHub
