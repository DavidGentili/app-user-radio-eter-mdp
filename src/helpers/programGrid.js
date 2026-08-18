const GRID_DAYS_COUNT = 7;

const getViewportWidth = () =>
    typeof window !== 'undefined' ? window.innerWidth : 1024;

export function getVisibleDaysCount(width = getViewportWidth()) {
    if (width <= 640) return 1;
    if (width <= 768) return 2;
    return 3;
}

export function getLimit(width = getViewportWidth()) {
    return GRID_DAYS_COUNT - getVisibleDaysCount(width);
}

export function getTodayGridIndex() {
    const jsDay = new Date().getDay();
    return jsDay === 0 ? 6 : jsDay - 1;
}

export function getInitialStateSliderGrid(width = getViewportWidth()) {
    return Math.min(getTodayGridIndex(), getLimit(width));
}

export function getSliderStep(container) {
    const firstDay = container?.querySelector('.gridDay');
    if (!firstDay) return 0;

    const styles = getComputedStyle(container);
    const gap = parseFloat(styles.columnGap || styles.gap) || 0;
    return firstDay.getBoundingClientRect().width + gap;
}

export function getCurrentSliderIndex(container) {
    const step = getSliderStep(container);
    if (!step) return 0;
    return Math.round(container.scrollLeft / step);
}

export function scrollGridToIndex(container, index, behavior = 'smooth') {
    if (!container) return;
    container.scrollTo({ left: index * getSliderStep(container), behavior });
}

export function getHoursDifference(start, finish) {
    const [startHour, startMinute] = start.split(':');
    const [finishHour, finishMinute] = finish.split(':');
    const hours = Number(finishHour) - Number(startHour);
    const minutes = (Number(finishMinute) - Number(startMinute)) / 60;
    return hours + minutes;
}
