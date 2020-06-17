import React from "react";
import { cleanup, render, getByTestId } from "@testing-library/react";
import ForecastSummary from "../../components/forecast-summary";

afterEach(cleanup);

describe("ForecastSummary", () => {

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={1525132800000}
        icon='500'
        temperature={45}
        description={"Hazy"}
      />
    );

    expect(asFragment).toMatchSnapshot();
  });

it("renders the correct props", () => {
    const { getByTestId } = render(
      <ForecastSummary
        date = {1525132800000}
        icon='500'
        temperature={45}
        description={"Hazy"}
      />
    );

    expect(getByTestId('date-id')).toHaveClass("date");
    expect(getByTestId("icon-id")).toHaveClass("forecast-summary-icon");
    expect(getByTestId("temperature-id")).toHaveClass("temperature");
    expect(getByTestId("description-id")).toHaveClass("description");
  })
  xit ("renders the icon correctly", () => {


  })
})