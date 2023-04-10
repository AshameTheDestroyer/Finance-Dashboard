export const PIE_CHART_DATA = GeneratePieChartData([
    { percentage: 0, colour: "#ff3131", title: "Taxes" },
    { percentage: 0, colour: "#00D647", title: "Income" },
    { percentage: 0, colour: "#1c3cf1", title: "Loss" },
    { percentage: 0, colour: "#ff891b", title: "Others" },
]);

/** Generate some random pie chart data.
 * @param {Array<{
 *      percentage: Number,
 *      colour: String,
 *      title: String,
 * }>} initialPieChartData The initial values that'll be used to generate random ones.
 * @returns 
 */
function GeneratePieChartData(initialPieChartData) {
    let maximumPercentage = 100,
        maximumValue = maximumPercentage / 2,
        currentMaximumPercentage = maximumPercentage;

    currentMaximumPercentage = maximumPercentage;

    initialPieChartData = initialPieChartData.map((datum, i) => {
        const GeneratePercentage = () => {
            let percentage = 0;

            do { percentage = Math.random() * currentMaximumPercentage; }
            while (percentage >= maximumValue);

            return percentage;
        };

        let percentage = i == initialPieChartData.length - 1 ?
            currentMaximumPercentage : GeneratePercentage();

        currentMaximumPercentage -= percentage;

        return {
            ...datum,
            percentage: percentage,
        };
    });

    return initialPieChartData.sort((_, __) => 0.5 - Math.random());
}

const MAXIMUM_INCOME_AMOUNT = 100000000, MAXIMUM_PROFIT_PERCENTAGE = 10;
export const INCOME_VALUES =
    Array(2)
        .fill(null)
        .map(_ => {
            return {
                incomeAmount: ~~(Math.random() * MAXIMUM_INCOME_AMOUNT),
                profitPercentage:
                    Math.random() * MAXIMUM_PROFIT_PERCENTAGE
                    * (Math.random() >= 0.5 ? +1 : -1),
            };
        });

export const VERTICAL_CHART_DATA = GenerateVerticalChartData();

function GenerateVerticalChartData() {
    const MAXIMUM_VERTICAL_CHART_DATA = 10;

    return Array(5)
        .fill(null)
        .map(_ => ~~(Math.random() * MAXIMUM_VERTICAL_CHART_DATA - 1) + 1);
}

export const POINT_CHART_DATA = GeneratePointChartData();

function GeneratePointChartData() {
    const MAXIMUM_POINT_CHART_DATA = 10,
        MAXIMUM_POINT_CHART_DATA_RANGE = 8,
        MINIMUM_POINT_CHART_DATA_RANGE = 2;
    let currentValue = ~~(Math.random() * MAXIMUM_POINT_CHART_DATA);

    return Array(7)
        .fill(null)
        .map((_, i) => {
            currentValue += + (i % 2 == 0 ? +1 : -1)
                * ~~(Math.random() * MAXIMUM_POINT_CHART_DATA);

            if (currentValue > MAXIMUM_POINT_CHART_DATA_RANGE) { currentValue = MAXIMUM_POINT_CHART_DATA_RANGE; }
            else if (currentValue < MINIMUM_POINT_CHART_DATA_RANGE) { currentValue = MINIMUM_POINT_CHART_DATA_RANGE; }

            return currentValue;
        });
}

const MAXIMUM_PLAN_PRICE = 20,
    PLAN_PRICE_DISTRIBUTAION = Math.random();

export const PLAN_PRICE_DATA = [
    undefined,
    ~~((PLAN_PRICE_DISTRIBUTAION >= 0.5 ? 1 - PLAN_PRICE_DISTRIBUTAION : PLAN_PRICE_DISTRIBUTAION) * MAXIMUM_PLAN_PRICE + 1),
    ~~((PLAN_PRICE_DISTRIBUTAION >= 0.5 ? PLAN_PRICE_DISTRIBUTAION : 1 - PLAN_PRICE_DISTRIBUTAION) * MAXIMUM_PLAN_PRICE + 1),
];