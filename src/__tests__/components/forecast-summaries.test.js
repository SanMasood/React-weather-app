import React from 'react';
import {cleanup, render} from '@testing-library/react';
import ForecastSummaries from '../../components/forecast-summaries';

const forecasts = [
    {
        date: 1234,
        description: "Hazy",
        icon: "icon1",
        temperature: {
            max: 40,
        },
    }, 
    {
        date: 4321,
        description: "Foggy",
        icon: "icon2",
        temperature: {
            max: 45,
        },
    }
];

afterEach(cleanup);

describe("Forecast Summaries", () => {
    const forecasts = [
        {
            date: 1234,
            description: "Hazy",
            icon: "icon1",
            temperature: {
                max: 40,
            },
        }, 
        {
            date: 4321,
            description: "Foggy",
            icon: "icon2",
            temperature: {
                max: 45,
            },
        }

    ];
    it("renders correctly to match ForecastSummaries snapshot", () => {
        const { asFragment } = render(<ForecastSummaries forecasts={forecasts} />);
        expect(asFragment).toMatchSnapshot();

    });

    xit("renders the correct amount of ForecastSummary component props", () => {

    })
})