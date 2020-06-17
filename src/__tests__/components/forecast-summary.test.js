import React from "react";
import { cleanup, render } from "@testing-library/react";
import ForecastSummary from "../../components/forecast-summary";

afterEach(cleanup);

describe("ForecastSummary", () => {

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date="mockDate"
        icon="mockIcon"
        temperature="mockTemperature"
        description="mockDescription"
      />
    );

    expect(asFragment).toMatchSnapshot();
  });

it("renders the correct props", () => {
    const { getByText } = render(
      <ForecastSummary
        date = {"mockDate"}
        icon={"mockIcon"}
        temperature={"mockTemperature"}
        description={"mockDescription"}
      />
    );

    expect(getByText("mockDate")).toHaveClass("date");
    expect(getByText("mockIcon")).toHaveClass("icon");
    expect(getByText("mockTemperature °C")).toHaveClass("temperature");
    expect(getByText("mockDescription")).toHaveClass("description");
  })
})