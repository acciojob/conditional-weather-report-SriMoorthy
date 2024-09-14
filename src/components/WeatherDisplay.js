import React from 'react'

const WeatherDisplay = (props) => {
    const { data } = props;

    const tempStyle = {
        color: data.temperature > 20 ? "red" : "blue"
    };

    return (
        <div>
            {/* Apply tempStyle to the temperature */}
            <p>Temperature: <span style={tempStyle}>{data.temperature}</span></p>
            <p>Conditions: {data.conditions}</p>
        </div>
    );
};

export default WeatherDisplay;