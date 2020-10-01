const hasTooltip = Array.from(document.getElementsByClassName("has-tooltip"));
hasTooltip.forEach(element => element.addEventListener("click", hasTooltipClick));

function hasTooltipClick(event) {
    event.preventDefault();

    const tooltipDiv = document.querySelector(".tooltip");
    if (tooltipDiv) {
        tooltipDiv.remove();
        return;
    }

    const titleTooltip = this.title;
    const elementRect = this.getBoundingClientRect();
    const leftTooltip = elementRect.left;
    const topTooltip = elementRect.top + elementRect.height;
    this.insertAdjacentHTML("afterEnd", `<div class="tooltip tooltip_active" style="left: ${leftTooltip}px; top: ${topTooltip}px">${titleTooltip}</div>`);
}