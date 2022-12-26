<script>import { fade } from "svelte/transition";
import { cubicInOut } from "svelte/easing";
export let data;
export let color = "#3a4efa";
export let rounding = "rounded";
$:
  barCount = data.length;
$:
  max = Math.max.apply(null, data);
let width = 0;
let height = 0;
$:
  spacing = width / 100;
$:
  totalSpacing = spacing * (barCount - 1);
$:
  barWidth = (width - totalSpacing) / barCount;
$:
  rx = rounding === "square" ? "0" : rounding === "rounded" ? "8px" : rounding === "pill" ? barWidth / 2 : "";
</script>

<div bind:clientWidth={width} bind:clientHeight={height}>
	<svg viewBox="0 0 {width} {height}" {width} {height}>
		{#key data}
			{#each data as value, index}
				<rect
					transition:fade|local={{ duration: 250, easing: cubicInOut }}
					fill={color}
					y={height - height * (value / max)}
					x={index * (barWidth + spacing)}
					width={barWidth}
					height={(value / max) * height}
					{rx}
				/>
			{/each}
		{/key}
	</svg>
</div>

<style>
	div {
		height: 100%;
		width: 100%;
	}
</style>
