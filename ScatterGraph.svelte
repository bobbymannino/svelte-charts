<script>import { fade } from "svelte/transition";
import { cubicInOut } from "svelte/easing";
export let data;
export let color = "#3a4efa";
$:
  scatterCount = data.length;
$:
  max = Math.max.apply(null, data);
$:
  min = Math.min.apply(null, data);
let width = 0;
let height = 0;
$:
  spacing = width / 100;
$:
  totalSpacing = spacing * (scatterCount - 1);
$:
  barWidth = (width - totalSpacing) / scatterCount;
</script>

<div bind:clientWidth={width} bind:clientHeight={height}>
	<svg viewBox="0 0 {width} {height}" {width} {height}>
		{#key data}
			{#each data as value, index}
				<circle
					transition:fade|local={{ duration: 250, easing: cubicInOut }}
					fill={color}
					cy={height - height * (value / max)}
					cx={index * (barWidth + spacing) + barWidth / 2}
					r={barWidth / 2}
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
