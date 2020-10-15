import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThermometerEmpty,
  faThermometerQuarter,
  faThermometerThreeQuarters,
  faThermometerHalf,
  faThermometerFull,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

interface GameIndicatorProps {
  accuracy: number;
  suggestion: string;
}

export const GameIndicator: React.FC<GameIndicatorProps> = ({
  accuracy,
  suggestion,
}) => {
  return (
    <div className="form-group">
      <div className="game-outcome">
        <p>
          {getTemperature(accuracy)}: {suggestion}
        </p>
        {getThermometer(accuracy)}
      </div>
    </div>
  );
};

interface ThermometerProps {
  icon: IconDefinition;
  className: string;
  size?: string;
}

const getThermometer = (accuracy: number): React.ReactElement => {
  let props: ThermometerProps;

  if (accuracy <= 0.1) {
    props = {
      icon: faThermometerFull,
      className: "indicator--red",
    };
  } else if (accuracy <= 0.2) {
    props = {
      icon: faThermometerHalf,
      className: "indicator--orange",
    };
  } else if (accuracy <= 0.3) {
    props = {
      icon: faThermometerThreeQuarters,
      className: "indicator--yellow",
    };
  } else if (accuracy <= 0.4) {
    props = {
      icon: faThermometerQuarter,
      className: "indicator--green",
    };
  } else if (accuracy <= 0.8) {
    props = {
      icon: faThermometerEmpty,
      className: "indicator--cyan",
    };
  } else {
    props = {
      icon: faThermometerEmpty,
      className: "indicator--blue",
    };
  }

  props = { ...props, size: "2x" };

  return React.createElement(FontAwesomeIcon, props as any);
};

const getTemperature = (accuracy: number): string => {
  if (accuracy <= 0.1) {
    return "boiling";
  }

  if (accuracy <= 0.2) {
    return "hot";
  }

  if (accuracy <= 0.3) {
    return "warm";
  }

  if (accuracy <= 0.4) {
    return "cold";
  }

  if (accuracy <= 0.8) {
    return "frosty";
  }

  return "freezing";
};
