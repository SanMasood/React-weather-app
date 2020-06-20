import React from 'react';
import {cleanup, render} from '@testing-library/react';
import ForecastDetails from '../../components/forecast-details';

afterEach(cleanup);

describe("Forecast Details", () => {
    const mockForecast = 
        {
            date: 1525305600000,
            temperature: {
                max: 11,
                min: 4,
              },
              wind: {
                speed: 13,
                direction: "s",
              },
              humidity: 30,
        };        

    
    it("renders correctly to match ForecastDetails snapshot", () => {
        const { asFragment } = render(
        <ForecastDetails forecasts={mockForecast} />);
        expect(asFragment).toMatchSnapshot();

    });

    it("renders the correct amount of ForecastDetail component props", () => {
        const { getByTestId } = render (<ForecastDetails forecasts = {mockForecast} />);

        expect(getByTestId("date-id")).toHaveClass("forecast-details-date");
        expect(getByTestId("min-temp-id")).toHaveClass("forecast-details-min-temp");
        expect(getByTestId("max-temp-id")).toHaveClass("forecast-details-max-temp");
        expect(getByTestId("wind-speed-id")).toHaveClass("wind-speed");

    })
    
})