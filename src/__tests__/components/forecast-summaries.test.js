import React from 'react';
import {cleanup, render} from '@testing-library/react';
import ForecastSummaries from '../../components/forecast-summaries';

afterEach(cleanup);

describe("Forecast Summaries", () => {
    const forecasts = [
        {
            date: 1234,
            description: "Hazy",
            icon: "icon1",
            temperature: {
                max: "40",
            },
        }, 
        {
            date: 4321,
            description: "Foggy",
            icon: "icon2",
            temperature: {
                max: "45",
            },
        }

    ];
    xit("renders correctly to match ForecastSummaries snapshot", () => {
        const { asFragment } = render(<ForecastSummaries forecasts={forecasts} />);
        expect(asFragment).toMatchSnapshot();

    });

    xit("renders the correct amount of ForecastSummary component props", () => {
        const { getAllByTestId } = render (<ForecastSummaries forecasts = {forecasts} />);

        expect(getAllByTestId("date-id")).toHaveLength(2);
        expect(getAllByTestId("forecast-summary-icon")).toHaveLength(2);
        expect(getAllByTestId("description-id")).toHaveLength(2);
        expect(getAllByTestId("temperature-id")).toHaveLength(2);

    })
})