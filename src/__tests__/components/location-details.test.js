import React from 'react';
import { render } from '@testing-library/react';
import LocationDetails from '../../components/location-details';


describe ("Location details", () => {
    it ('renders the correct city & country props', () => {
        const {getByText} = render(
            <LocationDetails city="Manchester" country="UK" />
        );

        expect(getByText("Manchester, UK")).toBeTruthy();
    });

    it ("renders the correct city & country props" ,() => {
        const {getByText} = render(
            <LocationDetails city="Manchester" country="UK" />
        );

        expect(getByText("Manchester, UK")).toHaveClass("locationDetailsClass");
    })
   
})
