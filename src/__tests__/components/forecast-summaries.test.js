import React from 'react';
import {cleanup, render} from '@testing-library/react';
import ForecastSummaries from '../../components/forecast-summaries';

afterEach(cleanup);

describe("Forecast Summaries", () => {
    const forecasts = [
        {
            date: 1525305600000,
            description: "Hazy",
            icon: "500",
            temperature: {
                max: "40",
            },
        }, 
        {
            date: 1525392000000,
            description: "Foggy",
            icon: "200",
            temperature: {
                max: "45",
            },
        }

    ];
    it("renders correctly to match ForecastSummaries snapshot", () => {
        const { asFragment } = render(
        <ForecastSummaries forecasts={forecasts} />);
        expect(asFragment).toMatchSnapshot();

    });

    it("renders the correct amount of ForecastSummary component props", () => {
        const { getAllByTestId } = render (<ForecastSummaries forecasts = {forecasts} />);

        expect(getAllByTestId("date-id")).toHaveLength(2);
        expect(getAllByTestId("icon-id")).toHaveLength(2);
        expect(getAllByTestId("description-id")).toHaveLength(2);
        expect(getAllByTestId("temperature-id")).toHaveLength(2);

    })
})