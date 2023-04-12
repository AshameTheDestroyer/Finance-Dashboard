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

const MAXIMUM_INDIVIDUAL_DONATION_AMOUNT = 100;
export const INDIVIDUAL_DATA = [
    "Hashem",
    "Aleeh",
    "Rose",
    "Doha",
    "William",
    "Hisham",
    "Omar",
    "Gaith",
    "Rim",
    "Laith",
    "Mei",
    "Kevin",
    "Hero",
    "Justiam",
].map(name => {
    return {
        name,
        donationAmount: Number.parseFloat(
            (Math.max(Math.random(), 0.1) * MAXIMUM_INDIVIDUAL_DONATION_AMOUNT)
                .toString().substring(0, 4)),
    };
}).sort((_, __) => Math.random() - 0.5);

export const FOLDABLE_QUESTION_DATA = [
    [
        `What insurance does this company provide?`,
        `By using our technology, you'll be able to work with NASA like
        it's no big deal!`
    ],
    [
        `In what year was this website founded?`,
        `Year 2034, exactly at the date 14/7, when George Obama became
        the president of the UK.`
    ],
    [
        `Can I use all of your services for free?`,
        `Absolutely not…\n
        Just kidding, all of our services are paid for
        sure, but there's a free plan if you wanna invest as well.`
    ],
    [
        `Who's the best person in the world?`,
        `I'm guessing you mean by that "Who founded this website?", and
        I'll tell you that it is Hashem Wannous.`
    ],
    [
        `Is it possible to ship this service across all the world?`,
        `For sure! our techies had made 100% sure that you our customers
        will be able to use this project however you wish around the globe.`
    ],
    [
        `Am I handsome?`,
        `If you're talking about me, the creator of this project, then yes.\n
        But if you were referring to yourself, then I'd have to be honest with
        you, and tell you the truth; which is shortly "No".`
    ],
    [
        `Is this project made out free?`,
        `Entschuldigung?!\n
        Do you really think I spent a buck over this silly project?`
    ],
    [
        `Can I fly?`,
        `No johnny, you can not fly.\n
        DUDE WHAT'S WRONG WITH YOU!?`
    ],
    [
        `Am I adopted?`,
        `Definitly.`
    ]
].map(datum => {
    return {
        question: datum[0],
        answer: datum[1],
    };
}).sort((_, __) => Math.random() - 0.5);