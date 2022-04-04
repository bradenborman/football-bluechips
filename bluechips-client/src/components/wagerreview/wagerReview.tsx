import React, { useState, useRef } from "react";
import classNames from "classnames";

export interface WagerReviewProps {
  cost: number;
  payout: number;
  bet: string;
  from: string;
  accepted: boolean;
  actionDate: string;
}

export const WagerReview: React.FC<WagerReviewProps> = (
  props: WagerReviewProps
) => {
  const [flipped, setFlipped] = useState<boolean>(props.accepted);
  const [accepted, setAccepted] = useState<boolean>(props.accepted);

  const handleClick = (userAcceptedWager: boolean) => {
    setAccepted(userAcceptedWager);
    setFlipped(true);
  };

  const frontCard = (
    <div className="front">
      <h2>You've recived a wager offer!</h2>
      <div>
        {props.from} has offered you the following to wager:
        <div className="bet">{props.bet}</div>
        <div className="money-details">
          <span className="spotlight cost">Cost:</span> $
          {props.cost.toLocaleString()}
          <br />
          <span className="spotlight payout">Payout:</span> $
          {props.payout.toLocaleString()}
        </div>
        <div className="warning-message">
          *If you accept this wager, ${props.cost.toLocaleString()} will be
          withdrawn from you reserves.
        </div>
      </div>
      <br />
      <button onClick={e => handleClick(true)}>Accept</button>
      <button onClick={e => handleClick(false)}>Decline</button>
    </div>
  );

  const backCard = (
    <div className="back">
      You have {accepted ? "acepted" : "declined"} this wager:
      <div className="wager">{props.bet}</div>
      <div className="effective-date">{props.actionDate}</div>
    </div>
  );

  return (
    <div className="container">
      <div className={classNames("card", { flipped: flipped })}>
        {frontCard}
        {backCard}
      </div>
    </div>
  );
};
